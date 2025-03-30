import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../../tooltip";

export default function TooltipUI({label, children}){
    return (
        <TooltipProvider>
            <Tooltip className="mt-2 mr-1">
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}