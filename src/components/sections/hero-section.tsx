"use client";

import React from "react";
import Image from "next/image";
import { Phone, Calendar, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { useModal } from "@/context/ModalContext";

/**
 * Hero — homepage hero (post-audit).
 *
 * Audit finding 1 (cycler removed). The headline is now a single static H1
 * with the italic-bronze emphasis baked in as the second sentence — the one
 * signature italic-bronze moment per page that the plan reserved.
 *
 * Audit finding 4 (backplate cleanup). The portrait backplate is now a
 * solid bronze/15 surface with no backdrop-blur and no translate offset.
 *
 * Audit finding 5 (trust strip removed). The three-fact subline carries the
 * jurisdiction / tenure / contingency-promise signals on its own; the
 * duplicate trust strip below the CTAs is gone. "Hablamos español" now
 * lives in the Final CTA footer and (header CTA copy in a future pass).
 */

interface HeroSectionProps {
  showContent?: boolean;
  videoOnly?: boolean;
  contentOnly?: boolean;
}

export const HeroSection = ({ showContent = true }: HeroSectionProps) => {
  const { openModal } = useModal();

  if (!showContent) return null;

  return (
    <section
      className="relative w-full min-h-[88svh] lg:min-h-[92svh] flex items-center bg-brand-navy-deep text-white overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background image — Thomas Carter portrait, treated as ambient */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[center_30%]"
          aria-hidden="true"
        />
        {/* Functional dim layers for legibility — not decorative */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep/85 via-brand-navy-deep/70 to-brand-navy-deep/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/60 to-transparent"
        />
      </div>

      {/* Content */}
      <Container className="relative z-20 py-24 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow with location */}
            <p className="eyebrow eyebrow-on-dark mb-5 inline-flex items-center gap-2">
              <MapPin className="h-3 w-3 text-bronze" aria-hidden="true" />
              El Paso, TX
            </p>

            {/* Headline — single static H1, italic-bronze on the second sentence */}
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.04] mb-8 text-white"
            >
              <span className="block">El Paso&rsquo;s truck accident lawyer.</span>
              <span className="block italic text-bronze">We win these cases.</span>
            </h1>

            {/* Three-fact credentials line — jurisdiction / tenure / contingency.
               Treated as a credentials bar with hairline separators rather than
               body prose. Each fact reads as its own statement. */}
            <ul
              className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center lg:justify-start gap-x-6 gap-y-3 mb-10 text-base md:text-lg text-white/85 font-sans"
              aria-label="Firm credentials"
            >
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-1 w-6 bg-bronze"
                />
                <span>16 years in El Paso courtrooms</span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-1 w-6 bg-bronze"
                />
                <span>Licensed in TX, AZ, NM</span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-1 w-6 bg-bronze"
                />
                <span>No fee unless we win</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-sans font-bold uppercase tracking-wider rounded-sm bg-bronze text-brand-navy-deep border border-dark-bronze hover:bg-dark-bronze hover:text-brand-navy-deep transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-deep"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Free Case Review
              </button>

              <a
                href="tel:9156211818"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-sans font-bold uppercase tracking-wider rounded-sm border-2 border-white text-white hover:bg-white hover:text-brand-navy-deep transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-deep"
                aria-label="Call Carter Law at (915) 621-1818"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call (915) 621-1818
              </a>
            </div>
          </div>

          {/* Portrait column — solid backplate, no blur, no offset */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-bronze/15"
                style={{ borderRadius: "var(--radius-card)" }}
              />
              <div
                className="relative h-full w-full overflow-hidden bg-navy/40"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <Image
                  src="/thomas-carter-portrait.jpg"
                  alt="Thomas Carter, founder of The Carter Law Firm, P.C."
                  fill
                  priority
                  quality={88}
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/45 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
