"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FEATURED_RESULTS } from "@/lib/services-data";

/**
 * ResultsListing — case-results page body.
 *
 * Filterable, structured listing of confirmed firm results. Each entry has
 * an amount, case type, context, challenge, and outcome — a record-style
 * format rather than a marketing carousel. "Past results do not guarantee
 * future outcomes" disclaimer follows the list.
 *
 * Categories are derived from the data, with "All" as the default. Filter
 * is purely client-side; the page is otherwise static.
 */
export const ResultsListing = () => {
  // Normalize case-type into a coarse category for filtering.
  const categorize = (caseType: string): string => {
    const lower = caseType.toLowerCase();
    if (lower.includes("truck") || lower.includes("wheeler") || lower.includes("semi")) return "Trucking";
    if (lower.includes("car")) return "Car Accident";
    if (lower.includes("dog")) return "Dog Bite";
    if (lower.includes("slip") || lower.includes("fall")) return "Premises";
    if (lower.includes("wrongful") || lower.includes("death")) return "Wrongful Death";
    if (lower.includes("medical") || lower.includes("malpractice")) return "Medical";
    return "Other";
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    FEATURED_RESULTS.forEach((r) => set.add(categorize(r.caseType)));
    return ["All", ...Array.from(set)];
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return FEATURED_RESULTS;
    return FEATURED_RESULTS.filter((r) => categorize(r.caseType) === activeCategory);
  }, [activeCategory]);

  return (
    <section
      className="relative w-full bg-white py-20 lg:py-28"
      aria-label="Case results listing"
    >
      <Container>
        {/* Filter bar */}
        <div
          className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-bronze/20"
          role="group"
          aria-label="Filter by case type"
        >
          <span className="eyebrow text-navy/55 mr-3">Filter</span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-sans font-semibold uppercase tracking-[0.18em] rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive
                    ? "bg-navy text-white border-navy"
                    : "bg-transparent text-navy border-navy/15 hover:border-bronze hover:text-bronze"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results list — single-column record format, not a card grid */}
        <ul className="space-y-12" aria-label="Case results">
          {filtered.map((result, index) => (
            <motion.li
              key={`${result.caseType}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-6 lg:gap-12 pb-12 border-b border-navy/10 last:border-b-0"
            >
              {/* Left column — amount + type */}
              <div className="flex flex-col">
                <p className="eyebrow mb-3">{result.caseType}</p>
                <p className="font-serif font-bold text-navy text-5xl md:text-6xl leading-none">
                  {result.amount}
                </p>
                <p className="mt-3 text-xs font-sans uppercase tracking-[0.22em] text-bronze/80">
                  Recovered
                </p>
              </div>

              {/* Right column — narrative */}
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl text-navy font-serif leading-relaxed mb-6">
                  {result.context}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="eyebrow text-navy/60 mb-2">The challenge</p>
                    <p className="text-sm md:text-base text-steel leading-relaxed">
                      {result.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow text-navy/60 mb-2">The outcome</p>
                    <p className="text-sm md:text-base text-steel leading-relaxed">
                      {result.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Disclaimer */}
        <p className="mt-16 pt-8 border-t border-bronze/20 text-xs md:text-sm text-steel leading-relaxed max-w-3xl font-sans">
          Past results do not guarantee future outcomes. Each case is unique and depends on its specific facts, applicable law, and the strength of available evidence. Settlement amounts reflect gross recovery before attorneys&rsquo; fees, costs, and any liens or subrogation interests. The Carter Law Firm, P.C. has been representing injured clients in El Paso since the firm was founded. Thomas Carter is licensed to practice in Texas, Arizona, and New Mexico.
        </p>
      </Container>
    </section>
  );
};
