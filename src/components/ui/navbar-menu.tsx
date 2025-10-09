"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isDarkMode,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isDarkMode?: boolean;
  href?: string;
}) => {
  const content = (
    <motion.p
      transition={{ duration: 0.3 }}
      className={cn(
        "cursor-pointer hover:opacity-[0.9]",
        isDarkMode ? "text-white" : "text-black"
      )}
    >
      {item}
    </motion.p>
  );

  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      {href ? <Link href={href}>{content}</Link> : content}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className={cn(
                  "rounded-2xl overflow-hidden border shadow-xl",
                  isDarkMode
                    ? "bg-white border-neutral-200"
                    : "bg-black border-neutral-800"
                )}
              >
                <div className="h-full w-max p-4">
                  {children}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
  isDarkMode
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        "relative rounded-full border grid grid-cols-[1fr,auto] items-center justify-between px-8 py-4 shadow-input",
        isDarkMode
          ? "bg-black/10 border-white/10 backdrop-blur-3xl"
          : "bg-white/10 border-black/10 backdrop-blur-3xl",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  'data-ai-hint': dataAiHint,
  isDarkMode
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  'data-ai-hint'?: string;
  isDarkMode?: boolean;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        data-ai-hint={dataAiHint}
      />
      <div>
        <h4 className={cn("text-xl font-bold mb-1", isDarkMode ? "text-black" : "text-white")}>
          {title}
        </h4>
        <p className={cn("text-sm max-w-[10rem]", isDarkMode ? "text-neutral-700" : "text-neutral-300")}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, isDarkMode, ...rest }: any) => {
  const linkClassName = isDarkMode
    ? "text-neutral-700 dark:text-neutral-200"
    : "text-neutral-700 dark:text-neutral-200";

  const hoverClassName = isDarkMode
    ? "hover:text-black dark:hover:text-white"
    : "hover:text-black dark:hover:text-black";
    
  return (
    <Link
      {...rest}
      className={cn(
        linkClassName,
        hoverClassName
      )}
    >
      {children}
    </Link>
  );
};