import { Moon, Sun, CodeXmlIcon, Github, Linkedin, Link, FileDown, ExternalLink, Download, MenuIcon, ArrowDown, Layers, BriefcaseBusiness, Info, User, Grid2X2, File, GraduationCap, Brain, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { Button } from "../ui/button";
import TooltipUI from "../ui/Custom/TooltipUI/TooltipUI";

export default function Header({ isSmallDevice }) {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`p-3 flex justify-between flex-wrap items-center sticky top-0 z-1 shadow-sm ${theme === "light" ? 'bg-white border-neutral-50' : 'bg-neutral-900 border-neutral-750'} border-b-1`}>
            <div className="flex items-center font-bold gap-2">
                <Logo />
                <h1 className={`text-xl font-bold hidden sm:hidden md:block lg:block`}>Pedrosa</h1>
            </div>
            <div className="flex items-center gap-2">
                <Menu isSmallDevice={isSmallDevice} />
                <MyLinks />
                <TooltipUI label="Theme">
                    <Button asDiv variant="ghost" className="!py-0 !px-2.5 font-normal" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? <Sun /> : <Moon />}
                    </Button>
                </TooltipUI>
                <TooltipUI label="Version 1">
                    <a href="https://matheuspedrosam.github.io/Portfolio/" target="_blank">
                        <Button variant="ghost" className="!px-2.5 !py-0 cursor-default" asDiv>V¹</Button>
                    </a>
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

function Menu({isSmallDevice}) {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild className="xl:!hidden">
                <Button variant="ghost" size="sm">
                    <MenuIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] xl:!hidden">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuGroup>
                    {isSmallDevice &&
                        <a href="#me">
                            <DropdownMenuItem>
                                <User /> <div className="flex justify-between w-full items-center">Me <ArrowRight /></div>
                            </DropdownMenuItem>
                        </a>
                    }
                    <a href="#stacks">
                        <DropdownMenuItem>
                            <Layers /> <div className="flex justify-between w-full items-center">Stacks <ArrowRight /></div>
                        </DropdownMenuItem>
                    </a>
                    <a href="#projects">
                        <DropdownMenuItem>
                            <BriefcaseBusiness /><div className="flex justify-between w-full items-center">Projects <ArrowRight /></div>
                        </DropdownMenuItem>
                    </a>
                    <a href="#infos">
                        <DropdownMenuItem>
                            <File /> <div className="flex justify-between w-full items-center">Infos <ArrowRight /></div>
                        </DropdownMenuItem>
                    </a>
                    {!isSmallDevice &&
                        <a href="#me">
                            <DropdownMenuItem>
                                <User /> <div className="flex justify-between w-full items-center">Me <ArrowRight /></div>
                            </DropdownMenuItem>
                        </a>
                    }
                    <a href="#skills">
                        <DropdownMenuItem>
                            <Grid2X2 /> <div className="flex justify-between w-full items-center">Skills <ArrowRight /></div>
                        </DropdownMenuItem>
                    </a>
                    <a href="#aboutMe">
                        <DropdownMenuItem>
                            <Info /> <div className="flex justify-between w-full items-center">About Me <ArrowRight /></div>
                        </DropdownMenuItem>
                    </a>
                    <a href="#certifications">
                        <DropdownMenuItem>
                            <GraduationCap /> <div className="flex justify-between w-full items-center">Certifications <ArrowRight /></div>
                        </DropdownMenuItem>
                    </a>
                    <a href="#softSkills">
                        <DropdownMenuItem>
                            <Brain /> <div className="flex justify-between w-full items-center">Soft skills <ArrowRight /></div>
                        </DropdownMenuItem>
                    </a>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
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