import { useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale" // Importa a localidade pt-BR
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker(props) {
    const { className, value, onChange } = props;
    const [date, setDate]= useState(new Date(value) || new Date());

    function onSelect(newDate){
        setDate(newDate);
        onChange(newDate);
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        `${className && className}`,
                        "w-[200px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {date ? format(date, "d MMM yyyy", { locale: ptBR }) : <span>Escolha uma data</span>} {/* Alterei o formato da data para exibir o mês abreviado */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                />
            </PopoverContent>
        </Popover>
    )
}
