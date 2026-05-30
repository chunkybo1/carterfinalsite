"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MetricFigure } from "@/components/ui/MetricFigure";

/**
 * ResultsMarquee — the auto-scrolling "wins ticker" that sits directly beneath
 * the hero to catch the eye with concrete proof before the visitor scrolls.
 *
 * Design notes:
 *   • Full-bleed white band so the navy figures pop against the dark hero above
 *     (the A&I / TAC "proof strip" pattern).
 *   • Each card reuses the shared MetricFigure treatment (muted $, big numeral,
 *     raised suffix, gold baseline rule) so it reads as the same designed system
 *     as the hero stats and the ResultsGallery verdict cards.
 *   • Seamless loop: the track renders the list twice and animates translateX
 *     to -50% (see .results-marquee-track in globals.css). Pauses on hover.
 *   • Edge fade masks soften the left/right entrances.
 *   • Respects prefers-reduced-motion — the animation is disabled and the
 *     viewport becomes a normal horizontally-scrollable row.
 *
 * NOTE: VERDICTS mirrors the data in ResultsGallery.tsx. If this ships, lift
 * the list into a shared module (e.g. src/lib/results-data.ts) so there's a
 * single source of truth.
 */

interface Verdict {
  amount: string;
  type: string;
  blurb?: string;
  isEmphasis?: boolean;
}

const VERDICTS: Verdict[] = [
  {
    amount: "$650,000",
    type: "18 Wheeler/Semi-Truck",
    blurb: "Client involved in a serious commercial vehicle collision causing injury",
    isEmphasis: true,
  },
  {
    amount: "$100,000",
    type: "Car Accident (TBI)",
    blurb: "Client suffered a mild traumatic brain injury following a collision",
    isEmphasis: true,
  },
  {
    amount: "$250,000",
    type: "Dog Bite",
    blurb: "Client suffered severe lacerations and scarring from a dog attack",
  },
  {
    amount: "$100,000",
    type: "Car Accident",
    blurb: "Client involved in a serious motor vehicle collision causing injury",
  },
  {
    amount: "$50,000",
    type: "Slip N' Fall",
    blurb: "Client slipped on an unmarked wet floor in a retail store",
  },
];

const VerdictCard = ({ verdict }: { verdict: Verdict }) => (
  <article className="flex min-w-[230px] sm:min-w-[260px] flex-col justify-center border-l border-line px-8 py-7 lg:px-10">
    <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
      {verdict.type}
    </p>
    <MetricFigure
      value={verdict.amount}
      className={`mt-2 text-4xl md:text-5xl ${
        verdict.isEmphasis
          ? "bg-gradient-to-br from-[#F0D894] via-brand-gold to-[#A07C36] bg-clip-text text-transparent"
          : "text-navy"
      }`}
    />
    <span aria-hidden="true" className="metric-rule" />
    {verdict.blurb && (
      <p className="mt-3 max-w-[24ch] text-sm leading-snug text-steel font-sans">
        {verdict.blurb}
      </p>
    )}
  </article>
);

export const ResultsMarquee = () => {
  // Two copies of the list so the -50% translate loops seamlessly.
  const track = [...VERDICTS, ...VERDICTS];

  return (
    <section
      className="relative w-full bg-surface-white border-b border-line overflow-hidden"
      aria-label="Recent verdicts and settlements"
    >
      {/* Context label */}
      <div className="flex items-center justify-center gap-3 pt-7 pb-1">
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          Recent verdicts &amp; settlements
        </p>
        <span aria-hidden="true" className="h-px w-8 bg-line" />
      </div>

      {/* Marquee viewport */}
      <div className="results-marquee-viewport relative w-full py-2">
        {/* Edge fade masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-surface-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-surface-white to-transparent"
        />

        <div className="results-marquee-track flex w-max">
          {track.map((verdict, i) => (
            <VerdictCard key={`${verdict.type}-${i}`} verdict={verdict} />
          ))}
        </div>
      </div>

      {/* All-results link */}
      <div className="flex items-center justify-center pb-7 pt-1">
        <Link
          href="/results"
          className="group inline-flex items-center gap-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-navy hover:text-brand-navy-tint focus-visible:outline-none focus-visible:underline"
        >
          See all results
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
};
