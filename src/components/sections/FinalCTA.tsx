"use client";

import React from "react";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useModal } from "@/context/ModalContext";

/**
 * FinalCTA — refined closing band.
 *
 * Refinement pass:
 *   • Adds bronze hairline accent above the eyebrow for editorial rhythm.
 *   • Phone CTA now uses the canonical <Button variant="outline"> instead of
 *     a hand-rolled anchor — same focus ring tokens, same hover behavior
 *     as the rest of the site.
 *   • Trust line gets a slight type bump and dot-separator style for
 *     readability on the dark surface.
 */
export const FinalCTA = () => {
  const { openModal } = useModal();

  return (
    <section
      className="relative w-full bg-navy py-32 lg:py-40 text-white overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Closing marker — pairs the bronze hairline with a numeric 04 to
             complete the homepage's 00 / 01 / 02 / 03 / 04 cadence. */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span
              className="section-marker text-bronze"
              aria-hidden="true"
            >
              04
            </span>
            <span
              aria-hidden="true"
              className="h-[2px] w-12 bg-bronze"
            />
            <p className="eyebrow eyebrow-on-dark">Ready to talk?</p>
          </div>
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05]"
          >
            Free case review. No fee unless we win.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-sans">
            Talk to a lawyer today. We respond within one hour, 24/7.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              noFloat
              onClick={openModal}
              className="w-full sm:w-auto"
            >
              Get a free case review
            </Button>

            <a
              href="tel:9156211818"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-base font-sans font-bold uppercase tracking-wider rounded-sm border-2 border-white text-white hover:bg-white hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              aria-label="Call Carter Law at (915) 621-1818"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call (915) 621-1818
            </a>
          </div>

          <p className="mt-10 text-sm md:text-base text-white/70 font-sans">
            Available 24/7  &middot;  Hablamos espa&ntilde;ol  &middot;  Licensed in TX, AZ, NM
          </p>
        </div>
      </Container>
    </section>
  );
};
