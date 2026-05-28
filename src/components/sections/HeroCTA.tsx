"use client";

import React, { useRef } from "react";
import { Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { NativeCaseReviewForm } from "@/components/ui/NativeCaseReviewForm";

/**
 * HeroCTA — talk-to-a-lawyer band beneath the Hero.
 *
 * Refinement pass:
 *   • Removed the redundant logo block at the bottom (already on the Header).
 *   • Tightened max-w on the lead paragraph for a 60-65ch measure.
 *   • Removed the trailing border that separated the duplicated logo from
 *     the rest of the column; replaced with a single bronze hairline above
 *     the trust-line copy as a structural rhythm element.
 *   • Aligned the section padding rhythm with the rest of the page
 *     (py-24 lg:py-32, the canonical pair used in ResultsGallery, Biography,
 *     PracticeAreas, FinalCTA).
 */
export const HeroCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-light-grey py-32 lg:py-40 overflow-hidden border-y border-navy/5"
      aria-label="Talk to a lawyer"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT — Message + phone */}
          <div className="text-center lg:text-left">
            <p className="eyebrow mb-4">Get started today</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-[1.05]">
              Talk to a lawyer today.{" "}
              <span className="font-extrabold">Free.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-steel leading-relaxed font-sans max-w-[55ch] mx-auto lg:mx-0">
              We respond within one hour, 24/7. No upfront fees. We take on the insurance companies so you can focus on getting better.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="tel:9156211818"
                className="group inline-flex items-center gap-4 text-navy hover:text-bronze transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-light-grey rounded-sm"
                aria-label="Call Carter Law at (915) 621-1818, available 24/7"
              >
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze text-brand-navy-deep shadow-md transition-colors duration-200 group-hover:bg-dark-bronze"
                >
                  <Phone className="h-7 w-7" />
                </span>
                <span className="text-left">
                  <span className="eyebrow block mb-1">Call 24/7 for free</span>
                  <span className="text-2xl md:text-3xl font-serif font-bold block">
                    (915) 621-1818
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-10 inline-flex flex-col gap-2 lg:items-start items-center">
              <span aria-hidden="true" className="h-[2px] w-12 bg-bronze" />
              <p className="text-sm text-steel font-sans">
                No fee unless we win. Hablamos espa&ntilde;ol.
              </p>
            </div>
          </div>

          {/* RIGHT — Native case-review form (visual + structural; submit is a placeholder) */}
          <div className="relative">
            <NativeCaseReviewForm
              variant="light"
              heading="Free case review"
              subheading="Tell us about your accident. We respond within 1 hour, 24/7."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
