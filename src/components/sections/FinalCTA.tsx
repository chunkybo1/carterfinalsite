"use client";

import React from "react";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useModal } from "@/context/ModalContext";

/**
 * FinalCTA — closing CTA band per REDESIGN-PLAN.md §4.8 (Phase 4).
 *
 * The service-marketing landing pattern calls for a closing CTA that
 * restates the Hero's offer for a visitor who scrolled through the page
 * without converting. Background is dark navy per Q3 — a high-contrast
 * close that anchors the bottom of the page without re-introducing the
 * offer's specifics.
 *
 * Two CTAs:
 *   • Primary (modal trigger) — Get a free case review
 *   • Secondary (click-to-call) — (915) 621-1818
 *
 * Trust line below: "Available 24/7. Hablamos español." — keeps the
 * bilingual signal visible at the bottom of the page even though the
 * Spanish-locale tree is a separate engagement.
 */
export const FinalCTA = () => {
  const { openModal } = useModal();

  return (
    <section
      className="relative w-full bg-navy py-24 lg:py-32 text-white overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="eyebrow">Ready to talk?</p>
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
          >
            Free case review. No fee unless we win.
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-sans">
            Talk to a lawyer today. We respond within one hour, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
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

          <p className="text-sm text-white/70 font-sans pt-4">
            Available 24/7. Hablamos espa&ntilde;ol.
          </p>
        </div>
      </Container>
    </section>
  );
};
