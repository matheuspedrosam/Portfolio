import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import SearchInput from "../SearchInput/SearchInput"
import { Button } from "../../button"
import { useTheme } from "@/components/theme-provider"
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"
import { useEffect, useState } from "react"
import PaginationUI from "../PaginationUI/PaginationUI"
import paginateArray from "@/utils/paginateArray"
import orderArray from "@/utils/orderAlg"
import Loader from "@/components/Loader/Loader"
import { toast } from "sonner"
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';
import TooltipUI from "../TooltipUI/TooltipUI"
import * as XLSX from 'xlsx';

export default function TableUI(props) {
    const { theme } = useTheme();
    const { btns, labels = [], data = [], dataPerPage, loading } = props;

    const [displayData, setDisplayData] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const [orderConfigs, setOrderConfigs] = useState(null);
    const [searchConfings, setSearchConfigs] = useState(null);
    const searchFields = props.searchFields || labels.map((label) => label.value);

    useEffect(() => {
        if (!data) return;
        let filteredData = [...data];

        // 1. Busca
        if (searchConfings) {
            const searchTerm = searchConfings.searchTerm?.toLowerCase();
            if (searchTerm !== "") {

                filteredData = filteredData.filter((item) =>
                    searchFields.some((field) =>
                        item[field]?.toString().toLowerCase().includes(searchTerm)
                    )
                );
            }
        }

        // 2. Filtro
        // if (filterConfigs) {
        //     filteredData = filteredData.filter(
        //         (item) => item[filterConfigs.filter] === filterConfigs.condicao
        //     );
        // }

        // 3. Ordenação
        if (orderConfigs) {
            filteredData = orderArray(
                filteredData,
                orderConfigs.orderField,
                orderConfigs.orderDirection
            );
        }

        if (filteredData.length === 0) {
            setDisplayData(null);
            return;
        }

        setDisplayData(paginateArray(filteredData, dataPerPage));
    }, [data, searchConfings, orderConfigs]);

    return (
        <div>
            <div className='flex justify-between items-center mb-2 flex-wrap gap-2'>
                <ActionBtns btns={btns} data={displayData} labels={labels} />
                <div><SearchInput placeholder="Buscar" setSearchConfigs={setSearchConfigs} /></div>
            </div>
            <Table id="table" containerClassName='rounded-sm border custom-scrollbar'>
                <TableHeader>
                    <TableRow className={`${theme === "light" ? 'bg-neutral-50' : 'bg-neutral-850'}`}>
                        {labels.map((label) => {
                            return label.name 
                                ? (<TH
                                        key={label.value}
                                        setOrderConfigs={setOrderConfigs}
                                        orderConfigs={orderConfigs}
                                        orderField={label.value}
                                    >
                                        {label.name}
                                    </TH>
                                ) : <TableHead key={label.name}></TableHead>
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {displayData && displayData[currentPage - 1].map((item, i) =>
                        <TableRow key={i}>
                            {labels.map((label, i) => {
                                return (
                                    <TableCell key={label.value} className={`${i == 0 && 'font-medium'}`}>
                                        {(label.formatFunction && label.formatFunction(item[label.value]) ) || item[label.value] || '-'}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {(!displayData && !loading) &&
                <div className='mt-5'>Sem dados...</div>
            }
            {loading &&
                <div className='mt-5'>
                    <Loader size={22} className='pt-5' />
                </div>
            }
            <div className='mt-2 flex justify-self-end'>
                <PaginationUI
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    entityArray={displayData}
                />
            </div>
        </div>
    )
}

function TH(props) {
    const { children, orderField, orderConfigs, setOrderConfigs } = props;
    const [open, setOpen] = useState(false);

    function handleOrderByClick(e) {
        const orderDirection = e.target.getAttribute("direction");
        setOrderConfigs({ orderField: orderField, orderDirection: orderDirection });
        setOpen(false);
    }

    function handleIcon(){
        const color = 'gray';

        if(!orderConfigs || orderConfigs.orderField !== orderField){
            return <ChevronsUpDown color={color}/>
        }

        if(orderConfigs.orderField === orderField){
            return orderConfigs.orderDirection === 'asc'
            ? <ArrowUp color={color} />
            : <ArrowDown color={color} />
        }
    }

    return (
        <TableHead>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger>
                    <Button asDiv={true} variant="ghost" className="p-0">
                        {children}
                        {handleIcon()}
                    </Button>
                    {/* <Button variant="ghost" className="p-0" onClick={() => setOpen((prev) => !prev)}>
                    </Button> */}
                </PopoverTrigger>
                <PopoverContent className="w-[95px] p-0">
                    <Command>
                        <CommandList>
                            <CommandGroup onClick={(e) => handleOrderByClick(e)}>
                                <CommandItem direction="asc"><ArrowUp />Cresc.</CommandItem>
                                <CommandItem direction="desc"><ArrowDown />Decres.</CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </TableHead>
    )
}

function ActionBtns({btns, data, labels}) {
    if(!data) data = [];
    if(data) data = data.flat(); // Achatar o array paginado em um único array

    function copiarDados() {
        let textoTabela = '\n------------\n';

        {data.forEach((item, i) => {
            {labels.forEach((label, i) => {
                if(label.name){
                    textoTabela += `\n${label.name}: ${(label.formatFunction && label.formatFunction(item[label.value]) ) || item[label.value] || '-'}\n`
                }
            })}
            textoTabela += '\n------------\n';
        })}

        navigator.clipboard.writeText(textoTabela).then(() => {
            toast.success('Sucesso', {description: 'Dados copiados para a área de transferência!'});
        }).catch(err => {
            toast.error('Erro ⚠️', {description: 'Erro ao copiar dados!'});
        });
    };

    function exportarExcel() {
        const cabecalho = labels.map((label) => label.name);
        const dados = data.map((item) => (
            labels.map((label, i) => {
                if(label.name){
                    return `${(label.formatFunction && label.formatFunction(item[label.value]) ) || item[label.value] || '-'}`
                }
            })
        ));
        const dataCompleta = [cabecalho, ...dados];

        const ws = XLSX.utils.aoa_to_sheet(dataCompleta);
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, ws, 'Planilha1');
        XLSX.writeFile(wb, 'tabela.xlsx');

        toast.success("Succeso", {description: "Excel gerado com sucesso!"});
    }

    function exportarGoogleSheets() {
        toast.error("Aviso ⚠️", {description: "Ainda não implementado"});
    }

    function gerarPDF() {
        toast.error("Aviso ⚠️", {description: "Ainda não implementado"});
    }

    return (
        <div className='flex gap-2 overflow-x-auto custom-scrollbar pb-1 sm:pb-0 md:pb-0 lg:pb-0'>
            {(btns.all || btns.copy) && 
                <TooltipUI label='Copiar Dados'><Button variant='outline' onClick={copiarDados} asDiv>Copiar</Button></TooltipUI>
            }
            {(btns.all ||btns.gSheets) && 
                <TooltipUI label='Google Sheets'><Button variant='outline' onClick={exportarGoogleSheets} asDiv>Planilha</Button></TooltipUI>
            }
            {(btns.all ||btns.excel) && 
                <TooltipUI label='Excel'><Button variant='outline' onClick={exportarExcel} asDiv>Excel</Button></TooltipUI>
            }
            {(btns.all ||btns.pdf) && 
                <TooltipUI label='PDF'><Button variant='outline' onClick={gerarPDF} asDiv>PDF</Button></TooltipUI>
            }
            {(btns.all ||btns.csv) && 
                <TooltipUI label='CSV'>
                    <CSVLink data={data} filename="tabela.csv">
                        <Button variant='outline' asDiv>CSV</Button>
                    </CSVLink>
                </TooltipUI>
            }
        </div>
    )
}