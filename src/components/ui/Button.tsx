import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  noFloat?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", noFloat = false, children, ...props }, ref) => {
    const variants = {
      primary: "bg-bronze text-navy hover:bg-bronze/90 shadow-md",
      secondary: "bg-white text-navy border-2 border-white hover:bg-gray-100",
      outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
      ghost: "bg-transparent text-navy hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-serif font-bold uppercase tracking-wider",
      lg: "px-8 py-4 text-lg font-serif font-bold uppercase tracking-wider",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={noFloat ? {} : { scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";




