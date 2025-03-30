import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import textAbbr from "@/utils/textAbbr";
import { useTheme } from "@/components/theme-provider";

export function MultiSelect({ options, selectedOptions, setSelectedOptions, closeOnSelect = true, placeholder = null }) {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const [buttonWidth, setButtonWidth] = useState(0);
    const {theme} = useTheme();

    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.offsetWidth);
        }
    }, []);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    ref={buttonRef}
                    className={`${selectedOptions.length == 0 && `text-neutral-${theme == "light" ? 500 : 400 }`} w-full justify-between font-normal`}
                >
                    {textAbbr(selectedOptions.length > 0
                        ? selectedOptions.map((item) => options.find((o) => o.value === item)?.description).join(", ")
                        : placeholder || "Selecione...", 40)}
                    <ChevronDown className="h-4 w-4 ml-2 text-neutral-400" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`p-0`} style={{ width: buttonWidth }}>
                <Command>
                    <CommandInput placeholder="Buscar..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Nenhum dado encontrado.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        setSelectedOptions((prev) => {
                                            return prev.includes(currentValue)
                                                ? prev.filter((item) => item !== currentValue) // Remove se já houver
                                                : [...prev, currentValue] // Add se não houver
                                        });
                                        if (closeOnSelect) {
                                            setOpen(false);
                                        }
                                    }}
                                >
                                    {option.description}
                                    {selectedOptions.includes(option.value) &&
                                        <Check className='ml-auto' />
                                    }
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover >
    );
}