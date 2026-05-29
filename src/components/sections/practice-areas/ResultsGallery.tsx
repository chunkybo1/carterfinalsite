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
  description: string;
}

const RESULTS: Result[] = [
  {
    id: "1",
    amount: "$3.2M",
    type: "Trucking accident",
    description:
      "Recovered for a victim of a commercial vehicle collision on I-10.",
  },
  {
    id: "2",
    amount: "$1.8M",
    type: "Wrongful death",
    description:
      "Settlement for the family of a victim killed by a negligent driver.",
  },
  {
    id: "3",
    amount: "$950K",
    type: "Slip and fall",
    description:
      "Premises liability case against a major commercial property owner.",
  },
  {
    id: "4",
    amount: "$725K",
    type: "Car accident",
    description:
      "Insurance dispute resolution for a high-impact collision.",
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
            <p className="font-sans text-3xl md:text-4xl font-bold text-navy leading-tight lining-tabular">
              $50M+ recovered
            </p>
            <p className="eyebrow mt-1">For our clients to date</p>
          </motion.div>
        </motion.div>

        {/* Featured result — full width, larger amount, primary trust signal */}
        <motion.article
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
          className="relative bg-navy text-white rounded-[12px] p-10 lg:p-16 mb-8 overflow-hidden"
          style={{ boxShadow: "var(--shadow-elevated)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center">
            <div>
              <p className="eyebrow eyebrow-on-dark mb-4">{FEATURED.type}</p>
              <p className="text-6xl md:text-7xl lg:text-8xl font-sans font-bold leading-none lining-tabular">
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
              <p className="eyebrow mb-3">{result.type}</p>
              <p className="text-4xl md:text-5xl font-sans font-bold text-navy leading-none mb-4 lining-tabular">
                {result.amount}
              </p>
              <p className="text-base text-steel leading-relaxed font-sans">
                {result.description}
              </p>
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
