"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";

/**
 * ResultsGallery — restructured per REDESIGN-PLAN.md §4.4 (Phase 4).
 *
 * Old: 4 equal-weight cards in a 2x2 grid, each with hover:bg-navy/text-white
 *      flip. Section heading used italic-bronze emphasis.
 *
 * New: One featured result (the largest, $3.2M trucking — aligns with the
 *      firm's brand positioning) at full width, then the other three
 *      results in a row beneath. Hierarchy without removing data. The "Proven
 *      Results." italic-bronze is gone — one italic-bronze instance per
 *      page, in the Hero only (Q2). "See all results" link added to keep the
 *      door open without claiming this is exhaustive.
 */

interface Result {
  id: string;
  amount: string;
  type: string;
  description: string;
}

const RESULTS: Result[] = [
  {
    id: "1",
    amount: "$3.2M",
    type: "Trucking accident",
    description: "Recovered for a victim of a commercial vehicle collision on I-10.",
  },
  {
    id: "2",
    amount: "$1.8M",
    type: "Wrongful death",
    description: "Settlement for the family of a victim killed by a negligent driver.",
  },
  {
    id: "3",
    amount: "$950K",
    type: "Slip and fall",
    description: "Premises liability case against a major commercial property owner.",
  },
  {
    id: "4",
    amount: "$725K",
    type: "Car accident",
    description: "Insurance dispute resolution for a high-impact collision.",
  },
];

const FEATURED = RESULTS[0];
const SECONDARY = RESULTS.slice(1);

export const ResultsGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="results-heading"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.p variants={fadeRise} className="eyebrow mb-4">
            Verdicts &amp; Settlements
          </motion.p>
          <motion.h2
            id="results-heading"
            variants={fadeRise}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-tight"
          >
            Proven results.
          </motion.h2>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : reducedMotion ? { opacity: 1, scaleX: 1 } : {}}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] w-24 bg-bronze mx-auto mt-8 origin-center"
          />
        </motion.div>

        {/* Featured result — full width, larger amount, primary trust signal */}
        <motion.article
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-navy text-white rounded-[12px] p-10 lg:p-16 mb-8 overflow-hidden"
          style={{ boxShadow: "var(--shadow-elevated)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center">
            <div>
              <p className="text-sm text-bronze tracking-widest uppercase font-bold mb-3">
                {FEATURED.type}
              </p>
              <p className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none">
                {FEATURED.amount}
              </p>
            </div>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed font-sans md:border-l md:border-white/15 md:pl-12">
              {FEATURED.description}
            </p>
          </div>
        </motion.article>

        {/* Secondary results — tighter row of three */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECONDARY.map((result, index) => (
            <motion.article
              key={result.id}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.32, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }
              }
              className="bg-light-grey p-8 rounded-[12px] border border-navy/10"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="text-xs text-bronze tracking-widest uppercase font-bold mb-2">
                {result.type}
              </p>
              <p className="text-4xl md:text-5xl font-serif font-bold text-navy leading-none mb-4">
                {result.amount}
              </p>
              <p className="text-base text-steel leading-relaxed font-sans">
                {result.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* See all results — keeps the door open without claiming exhaustive list */}
        <div className="text-center mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 eyebrow text-bronze hover:text-dark-bronze focus-visible:outline-none focus-visible:underline"
          >
            See all results
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
