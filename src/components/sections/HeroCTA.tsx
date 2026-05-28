"use client";

import React, { useRef } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { NativeCaseReviewForm } from "@/components/ui/NativeCaseReviewForm";

/**
 * HeroCTA — secondary band beneath the Hero.
 *
 * Per REDESIGN-PLAN.md §4.2 (Phase 3):
 *   • Skewed decorative background block: removed.
 *   • Decorative bronze blur glow behind the form: removed.
 *   • Italic-bronze emphasis on "We're Here to Help.": replaced with weight
 *     contrast (the italic-bronze is reserved for the Hero per Q2).
 *   • iframe form (`CRMForm`): replaced with `NativeCaseReviewForm` (visual +
 *     structural; submit handler is a placeholder per the Phase 3 scope
 *     expansion you approved).
 *   • Phone CTA on the left side: kept; cleaner version using the new tokens.
 */
export const HeroCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-light-grey py-24 lg:py-32 overflow-hidden border-y border-navy/5"
      aria-label="Talk to a lawyer"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT — Message + phone */}
          <div className="text-center lg:text-left space-y-10">
            <div className="space-y-6">
              <p className="eyebrow mb-4">Get started today</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight">
                Talk to a lawyer today.{" "}
                <span className="font-extrabold">Free.</span>
              </h2>
              <p className="text-xl text-steel leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                We respond within one hour, 24/7. No upfront fees. We take on the insurance companies so you can focus on getting better.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
              <a
                href="tel:9156211818"
                className="group flex items-center gap-4 text-navy hover:text-bronze transition-colors"
                aria-label="Call Carter Law at (915) 621-1818, available 24/7"
              >
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze text-white shadow-md transition-colors duration-200 group-hover:bg-dark-bronze"
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

            <div className="pt-10 border-t border-navy/10 flex flex-wrap justify-center lg:justify-start">
              <div className="relative h-12 md:h-16 w-48 md:w-64">
                <Image
                  src="/carter-logo-v2.png"
                  alt="The Carter Law Firm"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
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
