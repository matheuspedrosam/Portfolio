import { useTheme } from "../theme-provider";

export function PageContainer({children, className}) {
    const {theme} = useTheme();

    return (
        <div className={`${theme === "light" ? 'bg-neutral-50' : 'bg-neutral-950'} w-full ${className}`}>
            {children}
        </div>
    );
}