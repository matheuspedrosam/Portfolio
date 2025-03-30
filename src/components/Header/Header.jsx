import { Moon, Sun, CodeXmlIcon, Github, Linkedin, File, User, Link, FileDown, ExternalLink, Download } from "lucide-react";
import { useTheme } from "@/components/theme-provider"
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import AvatarUI from "../ui/Custom/AvatarUI/AvatarUI";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { Button } from "../ui/button";
import TooltipUI from "../ui/Custom/TooltipUI/TooltipUI";

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`p-3 flex justify-between flex-wrap items-center sticky top-0 z-1 shadow-sm ${theme === "light" ? 'bg-white border-neutral-50' : 'bg-neutral-900 border-neutral-750'} border-b-1`}>
            <div className="flex items-center font-bold gap-2">
                <Logo />
                <h1 className={`text-xl font-bold hidden sm:hidden md:block lg:block`}>Pedrosa</h1>
            </div>
            <div className="flex items-center gap-2">
                <MyLinks />
                <TooltipUI label="Theme">
                    <Button asDiv variant="ghost" className="!py-0 !px-2.5" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? <Sun /> : <Moon />}
                    </Button>
                </TooltipUI>
            </div>
        </div>
    )
}

function Logo() {
    const { theme } = useTheme();
    const variant = theme === "light" ? 'bg-neutral-200' : 'bg-neutral-800';
    return <div className={`${variant} p-2 rounded-sm`}><CodeXmlIcon size={18} /></div>
}

function MyLinks() {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                    <Link />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Links</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <a href="https://github.com/matheuspedrosam" target="_blank">
                        <DropdownMenuItem>
                            <Github /> <div className="flex justify-between w-full items-center">Github <ExternalLink /></div>
                        </DropdownMenuItem>
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-pedrosa2002/" target="_blank">
                        <DropdownMenuItem>
                            <Linkedin /><div className="flex justify-between w-full items-center">Linkedin <ExternalLink /></div>
                        </DropdownMenuItem>
                    </a>
                    <a href="/CV.pdf" target="_blank">
                        <DropdownMenuItem>
                            <FileDown /> <div className="flex justify-between w-full items-center">Curriculum <Download /></div>
                        </DropdownMenuItem>
                    </a>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}