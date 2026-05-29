"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Container } from "@/components/ui/Container";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";

/**
 * ServicesHero — refined.
 *
 * Removed:
 *   - Decorative skewed bronze gradient block on the right.
 *   - Top/bottom black gradient overlays (purely decorative).
 *   - Animate-bounce chevron at the bottom (unnecessary motion).
 *   - "Your Battle. Our Expertise." italic-bronze pattern (banned: parallel
 *     two-word fragments / X-meets-Y rhythm under a period).
 *   - Raw `tracking-[0.4em] text-[10px]` cluster (use .eyebrow utility).
 *
 * Replaced with a quiet numbered-marker hero matching the homepage cadence.
 * The /services page now reads as the same brand surface as the homepage,
 * not a different sub-site.
 */
export const ServicesHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-navy text-white py-32 lg:py-40 overflow-hidden"
      aria-labelledby="services-hero-heading"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-3xl"
        >
          {/* Numbered marker — sits in the homepage cadence sequence. */}
          <motion.div
            variants={fadeRise}
            className="flex items-center gap-4 mb-6"
          >
            <p className="eyebrow eyebrow-on-dark">Practice Areas</p>
          </motion.div>

          <motion.h1
            id="services-hero-heading"
            variants={fadeRise}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] mb-8 text-white"
          >
            What we handle, and how we handle it.
          </motion.h1>

          <motion.p
            variants={fadeRise}
            className="pull-quote pull-quote-on-dark max-w-2xl text-white/90"
          >
            Sixteen years standing with the injured against the powerful. We don&rsquo;t just take cases. We try them.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};
