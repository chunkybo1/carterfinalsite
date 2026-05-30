"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { MetricFigure } from "@/components/ui/MetricFigure";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";

/**
 * ResultsGallery — refined.
 *
 * Centered header replaced with a left-aligned header that matches
 * GoogleReviews and gives the page a more editorial, less SaaS-template
 * rhythm. Aggregate microcopy added beside the section title ("$50M+
 * recovered") since the redesign rule is "show wins, don't claim them" —
 * pairing the headline with a real aggregate keeps it concrete without
 * tipping into hero-metric SaaS pattern.
 *
 * Card surface and shadow tokens unchanged; only typography rhythm and
 * column structure refined.
 */

interface Result {
  id: string;
  amount: string;
  type: string;
  description?: string;
  tag?: string;
  isEmphasis?: boolean;
}

const RESULTS: Result[] = [
  {
    id: "semi",
    amount: "$650,000",
    type: "18 Wheeler/Semi-Truck",
    isEmphasis: true,
  },
  {
    id: "tbi",
    amount: "$100,000",
    type: "Car Accident (TBI)",
    description:
      "Client suffered a mild traumatic brain injury following a collision",
    isEmphasis: true,
  },
  {
    id: "dog",
    amount: "$250,000",
    type: "Dog Bite",
    description:
      "Client suffered severe lacerations and scarring from a dog attack",
    tag: "Official Firm Record",
  },
  {
    id: "car",
    amount: "$100,000",
    type: "Car Accident",
    description:
      "Client involved in a serious motor vehicle collision causing injury",
    tag: "Official Firm Record",
  },
  {
    id: "slip",
    amount: "$50,000",
    type: "Slip N' Fall",
    description:
      "Client slipped on an unmarked wet floor in a retail store",
    tag: "Official Firm Record",
  },
];

const FEATURED = RESULTS.filter((r) => r.isEmphasis);
const SECONDARY = RESULTS.filter((r) => !r.isEmphasis);

export const ResultsGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 lg:py-40 bg-white overflow-hidden"
      aria-labelledby="results-heading"
    >
      <Container>
        {/* Header — numbered section opener ("01 · Verdicts & Settlements")
           paired with a right-aligned aggregate. The numbered marker is the
           brand's recurring magazine-volume device. */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <motion.div
              variants={fadeRise}
              className="flex items-center gap-4 mb-6"
            >
              <p className="eyebrow">Verdicts &amp; Settlements</p>
            </motion.div>
            <motion.h2
              id="results-heading"
              variants={fadeRise}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-[1.05]"
            >
              Wins on the record.
            </motion.h2>
          </div>

          <motion.div
            variants={fadeRise}
            className="md:text-right"
          >
            <p className="text-navy leading-tight">
              <MetricFigure value="$50M+" className="text-3xl md:text-4xl" />
              <span className="font-serif font-bold text-2xl md:text-3xl"> recovered</span>
            </p>
            <p className="eyebrow mt-1">For our clients to date</p>
          </motion.div>
        </motion.div>

        {/* Featured results — emphasized (TBI and Semi-Truck) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {FEATURED.map((result, index) => (
            <motion.article
              key={result.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }
              }
              className="relative bg-navy text-white rounded-[12px] p-8 lg:p-12 overflow-hidden flex flex-col"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            >
              <div className="flex items-start justify-between mb-6 gap-4">
                <p className="eyebrow eyebrow-on-dark">{result.type}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-bronze text-navy whitespace-nowrap">
                  Major Recovery
                </span>
              </div>
              <MetricFigure
                value={result.amount}
                className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
              />
              <span aria-hidden="true" className="metric-rule mb-6" />
              {result.description && (
                <p className="text-base md:text-lg text-white/85 leading-relaxed font-sans mt-auto">
                  {result.description}
                </p>
              )}
            </motion.article>
          ))}
        </div>

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
              className="bg-light-grey p-8 rounded-[12px] border border-navy/10 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="eyebrow mb-3">{result.type}</p>
              <MetricFigure
                value={result.amount}
                className="text-4xl md:text-5xl text-navy"
              />
              <span aria-hidden="true" className="metric-rule mb-4" />
              <p className="text-base text-steel leading-relaxed font-sans mb-6">
                {result.description}
              </p>
              {result.tag && (
                <div className="mt-auto pt-4 border-t border-navy/5">
                  <p className="text-xs font-bold tracking-wider uppercase text-bronze">
                    {result.tag}
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* See all results — links to the dedicated results page added in
           the marketing-audit strategic pass. */}
        <div className="text-center mt-12">
          <Link
            href="/results"
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
