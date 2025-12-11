
import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-slate-900 dark:border-white/[0.1] bg-white border border-gray-200 justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            <div className="h-full w-full absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-0 pointer-events-none" />
            <div className="relative z-10 w-full h-40 rounded-lg overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-300">
                {header}
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 dark:text-neutral-400 text-sm">
                    {description}
                </div>
            </div>
        </div>
    );
};
