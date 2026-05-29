"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * ResultsHero — case-results page top.
 *
 * Sets the editorial-record tone: numbered section marker, large serif
 * headline, and a single aggregate line. No CTAs above the fold; the
 * listing is the work.
 */
export const ResultsHero = () => {
  return (
    <section
      className="relative w-full bg-light-grey pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden"
      aria-labelledby="results-hero-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-marker" aria-hidden="true">01</span>
            <span aria-hidden="true" className="h-[2px] w-12 bg-bronze" />
            <p className="eyebrow">Verdicts &amp; Settlements</p>
          </div>
          <h1
            id="results-hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-[1.05]"
          >
            Wins on the record.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-steel leading-relaxed max-w-2xl font-sans">
            Recent recoveries for clients across El Paso, Texas, Arizona, and New Mexico. Each entry is an actual case the firm represented. Names and personal details are redacted; the outcomes are not.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-baseline gap-6">
            <div>
              <p className="font-serif font-bold text-navy text-4xl md:text-5xl leading-none">
                $50M+
              </p>
              <p className="eyebrow mt-2">Recovered to date</p>
            </div>
            <span aria-hidden="true" className="hidden sm:block w-px h-12 bg-navy/15" />
            <div>
              <p className="font-serif font-bold text-navy text-4xl md:text-5xl leading-none">
                $3.2M
              </p>
              <p className="eyebrow mt-2">Largest trucking verdict</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
