"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

/**
 * EvaluatorEntry — single-question gate above the 7-question evaluator.
 *
 * Per MARKETING-AUDIT.md SR2: "Add a one-question evaluator above the fold."
 * Crisis-stage users will not start a 7-step form cold. A single binary
 * question drops commitment cost dramatically and qualifies the visitor
 * before they invest.
 *
 * Yes → reveal the underlying TruckAccidentEvaluator (and scroll to it).
 * No  → soft branch: call CTA + link to the broader practice-areas list.
 *
 * This component is purely presentational state; the real evaluator below
 * it is unaffected.
 */
export const EvaluatorEntry = ({
  onYes,
}: {
  onYes: () => void;
}) => {
  const [branch, setBranch] = useState<"prompt" | "no">("prompt");

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {branch === "prompt" && (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32 }}
            className="bg-white border border-navy/10 rounded-[12px] p-8 md:p-10 text-center"
            style={{ boxShadow: "var(--shadow-elevated)" }}
            role="region"
            aria-label="Free case evaluator"
          >
            <p className="eyebrow mb-3">Start here</p>
            <h3 className="font-serif font-bold text-navy text-2xl md:text-3xl lg:text-4xl leading-[1.1] mb-3">
              Were you injured in a truck accident in the last 2 years?
            </h3>
            <p className="text-steel text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              One question to start. The rest takes about 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-md mx-auto">
              <button
                type="button"
                onClick={onYes}
                className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-sans font-bold uppercase tracking-wider rounded-sm bg-bronze text-brand-navy-deep border border-dark-bronze hover:bg-dark-bronze hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-light-grey"
              >
                Yes
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setBranch("no")}
                className="flex-1 inline-flex items-center justify-center px-7 py-4 text-base font-sans font-bold uppercase tracking-wider rounded-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-light-grey"
              >
                No
              </button>
            </div>
            <p className="text-xs text-light-steel mt-6">
              Confidential. No obligation. Free.
            </p>
          </motion.div>
        )}

        {branch === "no" && (
          <motion.div
            key="no"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32 }}
            className="bg-white border border-navy/10 rounded-[12px] p-8 md:p-10"
            style={{ boxShadow: "var(--shadow-elevated)" }}
            role="region"
            aria-label="Other injury types"
          >
            <p className="eyebrow mb-3">We can still help</p>
            <h3 className="font-serif font-bold text-navy text-2xl md:text-3xl leading-tight mb-4">
              We handle more than truck accidents.
            </h3>
            <p className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Carter Law represents injured Texans, Arizonans, and New Mexicans
              across the personal-injury spectrum. Tell us what happened, or browse
              the kinds of cases we take.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-2xl">
              <a
                href="tel:9156211818"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-sans font-bold uppercase tracking-wider rounded-sm bg-bronze text-brand-navy-deep border border-dark-bronze hover:bg-dark-bronze hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-light-grey"
                aria-label="Call Carter Law at (915) 621-1818, available 24/7"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call (915) 621-1818
              </a>
              <Link
                href="/services"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-sans font-bold uppercase tracking-wider rounded-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-light-grey"
              >
                See practice areas
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setBranch("prompt")}
              className="mt-6 text-sm text-light-steel hover:text-navy focus-visible:outline-none focus-visible:underline transition-colors"
            >
              Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
