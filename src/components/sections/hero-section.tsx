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
      className="relative w-full min-h-[88svh] lg:min-h-[92svh] flex items-center text-white overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background video — ambient commercial reel */}
      <div className="absolute inset-0 z-0 bg-[#0E2A47]">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/cartercommercial.mp4"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Functional dim layer for legibility over moving video */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#0E2A47]/60"
        />
      </div>

      {/* Content */}
      <Container className="relative z-20 py-24 md:py-28 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow with location */}
          <p className="eyebrow eyebrow-on-dark mb-5 inline-flex items-center gap-2">
            <MapPin className="h-3 w-3 text-brand-gold" aria-hidden="true" />
            El Paso, TX
          </p>

          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.05] mb-8 text-white [text-shadow:0_2px_24px_rgba(8,18,33,0.45)]"
          >
            Truck Accident and Injury Attorneys
          </h1>

          {/* Credentials line — jurisdiction / contingency promise. */}
          <ul
            className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-base md:text-lg text-white/85 font-sans"
            aria-label="Firm credentials"
          >
            <li className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1 w-6 bg-brand-gold"
              />
              <span>Licensed in TX, AZ, NM</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1 w-6 bg-brand-gold"
              />
              <span>No fee unless we win</span>
            </li>
          </ul>

          {/* Results strip — concrete proof above the fold. */}
          <div
            className="mb-10 pt-8 border-t border-brand-gold/30 w-full"
            aria-label="Track record"
          >
            <ul
              className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-y-6 gap-x-12 font-sans"
            >
              <li className="flex flex-col items-center text-center">
                <span className="metric text-white text-4xl md:text-5xl">
                  16<span className="metric-suffix text-brand-gold">+</span>
                </span>
                <span aria-hidden="true" className="metric-rule" />
                <span className="eyebrow eyebrow-on-dark mt-3">
                  <span className="bg-gradient-to-br from-[#F0D894] via-brand-gold to-[#A07C36] bg-clip-text text-transparent">
                    years
                  </span>{" "}
                  of trial experience
                </span>
              </li>
              <li
                aria-hidden="true"
                className="hidden sm:block w-px h-12 bg-white/15"
              />
              <li className="flex flex-col items-center text-center">
                <span className="metric text-white text-4xl md:text-5xl">
                  24<span className="metric-suffix text-brand-gold">/</span>7
                </span>
                <span aria-hidden="true" className="metric-rule" />
                <span className="eyebrow eyebrow-on-dark mt-3">
                  Direct attorney access
                </span>
              </li>
              <li
                aria-hidden="true"
                className="hidden sm:block w-px h-12 bg-white/15"
              />
              <li className="flex flex-col items-center text-center">
                <span className="metric text-white text-4xl md:text-5xl">
                  5.0<span className="metric-suffix text-brand-gold">&#9733;</span>
                </span>
                <span aria-hidden="true" className="metric-rule" />
                <span className="eyebrow eyebrow-on-dark mt-3">
                  99+ Google reviews
                </span>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-sans font-extrabold uppercase tracking-wider rounded-[12px] bg-brand-gold text-brand-navy border border-brand-gold hover:bg-white hover:border-white hover:text-brand-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy shadow-[var(--shadow-card)]"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Free Case Review
            </button>

            <a
              href="tel:9156211818"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-sans font-extrabold uppercase tracking-wider rounded-[12px] border-2 border-white text-white hover:bg-white hover:text-brand-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy shadow-[var(--shadow-card)]"
              aria-label="Call Carter Law at (915) 621-1818"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call (915) 621-1818
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
