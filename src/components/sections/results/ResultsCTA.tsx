"use client";

import React from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * ResultsCTA — closing band on the case-results page.
 *
 * Mirrors the FinalCTA style on the homepage but with copy specific to a
 * visitor who has just read recovery figures. The implied question is
 * "can my case be on this list?" — the CTA answers it directly.
 */
export const ResultsCTA = () => {
  return (
    <section
      className="relative w-full bg-navy py-24 lg:py-32 text-white"
      aria-labelledby="results-cta-heading"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="section-marker text-bronze" aria-hidden="true">02</span>
            <span aria-hidden="true" className="h-[2px] w-12 bg-bronze" />
            <p className="eyebrow eyebrow-on-dark">Your case</p>
          </div>
          <h2
            id="results-cta-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.05]"
          >
            Tell us what happened.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-sans">
            Free case review. We respond within one hour, 24/7. No fee unless we win.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-sans font-bold uppercase tracking-wider rounded-sm bg-bronze text-brand-navy-deep border border-dark-bronze hover:bg-dark-bronze hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-navy w-full sm:w-auto"
            >
              Free Case Review
            </Link>
            <a
              href="tel:9156211818"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-base font-sans font-bold uppercase tracking-wider rounded-sm border-2 border-white text-white hover:bg-white hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              aria-label="Call Carter Law at (915) 621-1818"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call (915) 621-1818
            </a>
          </div>
          <p className="mt-10 text-sm md:text-base text-white/65 font-sans">
            Available 24/7 &middot; Hablamos espa&ntilde;ol &middot; Licensed in TX, AZ, NM
          </p>
        </div>
      </Container>
    </section>
  );
};
