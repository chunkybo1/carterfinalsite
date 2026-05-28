"use client";

/**
 * Centralized motion helpers for The Carter Law Firm site.
 *
 * Every component that drives Framer Motion entrance / hover / scroll-in
 * variants should import from this file rather than building its own variant
 * objects, so reduced-motion behavior is consistent across the codebase.
 *
 * The plan (REDESIGN-PLAN.md §3.6): users with prefers-reduced-motion: reduce
 * see no entrance choreography. Components still mount and become visible;
 * they just skip the fade-up.
 */

import { useReducedMotion as useFramerReducedMotion, type Variants } from "framer-motion";

/**
 * Thin wrapper around framer-motion's useReducedMotion hook so we can keep a
 * single import surface for the codebase. Returns true when the user has
 * requested reduced motion.
 */
export function useReducedMotionPref(): boolean {
  return Boolean(useFramerReducedMotion());
}

/**
 * Build a fade + Y-rise variant pair, gated on the reduced-motion preference.
 * Pass `prefersReducedMotion` from `useReducedMotionPref()` at the call site.
 *
 * Standard usage:
 *
 *   const reduced = useReducedMotionPref();
 *   const variants = fadeRiseVariants(reduced);
 *   <motion.div initial="hidden" animate="visible" variants={variants}>...</motion.div>
 */
export function fadeRiseVariants(prefersReducedMotion: boolean, distance = 8): Variants {
  if (prefersReducedMotion) {
    return {
      hidden:  { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }
  return {
    hidden:  { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1], // easeOutQuint, matches --ease-out token
      },
    },
  };
}

/**
 * Stagger config for parent containers whose children animate in sequence.
 * Pass to a parent motion.div's variants:
 *
 *   const stagger = staggerVariants(reduced, 0.08);
 *   <motion.div variants={stagger} initial="hidden" animate="visible">
 *     <motion.h1 variants={fadeRiseVariants(reduced)}>...</motion.h1>
 *     ...
 *   </motion.div>
 */
export function staggerVariants(prefersReducedMotion: boolean, stagger = 0.08): Variants {
  if (prefersReducedMotion) {
    return {
      hidden:  { opacity: 1 },
      visible: { opacity: 1 },
    };
  }
  return {
    hidden:  { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };
}

/**
 * Hover lift transform, gated on reduced motion. Pass to motion components'
 * `whileHover` prop:
 *
 *   <motion.div whileHover={hoverLift(reduced)}>...</motion.div>
 */
export function hoverLift(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) return {};
  return { y: -2, transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] } };
}

/**
 * Tap-press scale, gated on reduced motion.
 */
export function tapPress(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) return {};
  return { scale: 0.98 };
}
