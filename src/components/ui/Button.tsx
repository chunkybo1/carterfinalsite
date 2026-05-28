"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotionPref } from "@/lib/motion";

/**
 * Button — canonical CTA component.
 *
 * Variants:
 *   primary   — solid bronze on light/dark surfaces, white text. The default
 *               and the one used by every "Free case review" / "Book" CTA.
 *               Replaces the previous `.gold-button` metallic-shimmer class.
 *   secondary — white surface, navy text, light hover. For subordinate actions.
 *   outline   — transparent with a 2px white border; for use on dark surfaces
 *               (Hero, Final CTA band) as the secondary CTA.
 *   ghost     — no background; navy text on hover-only background. For tertiary
 *               actions inside light surfaces.
 *
 * Sizes: sm / md / lg (existing scale preserved).
 *
 * Reduced-motion is respected: hover-lift and tap-press are gated on the user's
 * prefers-reduced-motion preference via useReducedMotionPref().
 */

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  noFloat?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", noFloat = false, children, ...props }, ref) => {
    const reducedMotion = useReducedMotionPref();

    const variants = {
      primary:
        "bg-bronze text-white hover:bg-brand-bronze-deep hover:text-white active:bg-brand-bronze-deep " +
        "border border-dark-bronze shadow-sm",
      secondary:
        "bg-white text-navy border-2 border-navy/10 hover:bg-light-grey hover:text-navy",
      outline:
        "bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy",
      ghost:
        "bg-transparent text-navy hover:bg-light-grey hover:text-navy",
    };

    const sizes = {
      sm: "px-4 py-1.5 text-sm font-sans font-bold uppercase tracking-wider",
      md: "px-5 py-2.5 text-base font-sans font-bold uppercase tracking-wider",
      lg: "px-7 py-3.5 text-lg font-sans font-bold uppercase tracking-wider",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-colors duration-200 " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 " +
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={noFloat || reducedMotion ? {} : { y: -1 }}
        whileTap={reducedMotion ? {} : { scale: 0.98 }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";




