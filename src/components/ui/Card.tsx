import { cn } from "@/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };