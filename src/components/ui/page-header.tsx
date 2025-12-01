
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const pageHeaderVariants = cva(
  "flex flex-col gap-2",
  {
    variants: {
      separator: {
        true: "border-b pb-8",
        false: "",
      },
      size: {
        sm: "mb-4",
        md: "mb-6",
        lg: "mb-8",
      },
    },
    defaultVariants: {
      separator: false,
      size: "lg",
    },
  }
)

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof pageHeaderVariants>
>(({ className, size, separator, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(pageHeaderVariants({ size, separator, className }))}
    {...props}
  />
))
PageHeader.displayName = "PageHeader"

const PageHeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-2xl font-bold tracking-tight md:text-3xl",
      className
    )}
    {...props}
  />
))
PageHeaderTitle.displayName = "PageHeaderTitle"

const PageHeaderDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
))
PageHeaderDescription.displayName = "PageHeaderDescription"

const PageHeaderActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex w-full items-center justify-end space-x-2 pt-1", className)}
    {...props}
  />
))
PageHeaderActions.displayName = "PageHeaderActions"

export {
  PageHeader,
  PageHeaderTitle,
  PageHeaderDescription,
  PageHeaderActions,
}
