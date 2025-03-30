import { forwardRef } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationUI = forwardRef((props, ref) => {
    const {currentPage, setCurrentPage, entityArray} = props;

    if(!entityArray) return;
    const totalPages = entityArray.length;

    const handlePageChange = (page) => {
        document.querySelector("#table")?.scrollTo({left: 0, top: 0, behavior: 'instant'});
        setCurrentPage(page);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    return (
        <Pagination ref={ref}>
            <PaginationContent>
                {/* Botão para página anterior */}
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePrevious();
                        }}
                        disabled={currentPage === 1}
                    />
                </PaginationItem>

                {/* Renderização das páginas */}
                {entityArray.map((_, index) => {
                    const page = index + 1;
                    if (
                        page === 1 || // Sempre exibe a primeira página
                        page === totalPages || // Sempre exibe a última página
                        Math.abs(page - currentPage) <= 1 // Exibe as páginas próximas à atual
                    ) {
                        return (
                            <PaginationItem key={page} className={`${page == currentPage && 'bg-accent'} rounded-sm`}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(page);
                                    }}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    }

                    // Adiciona "..." se houver um salto grande
                    if (
                        Math.abs(page - currentPage) === 2 &&
                        page !== 2 &&
                        page !== totalPages - 1
                    ) {
                        return <PaginationEllipsis key={`ellipsis-${page}`} />;
                    }

                    return null;
                })}

                {/* Botão para próxima página */}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNext();
                        }}
                        disabled={currentPage === totalPages}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
});

export default PaginationUI;