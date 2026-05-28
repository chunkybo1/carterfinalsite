"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useModal } from "@/context/ModalContext";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";

/**
 * Hero — homepage hero section.
 *
 * Per REDESIGN-PLAN.md §4.1 (Phase 2):
 *   • Visible H1 (no sr-only sibling).
 *   • Headline: "El Paso's truck accident lawyer. We win these cases."
 *     The italic-bronze emphasis lands here on "We win these cases" — and
 *     this is the only italic-bronze instance on the entire homepage.
 *   • Subline: 16 years / TX-AZ-NM / no fee unless we win.
 *   • Primary CTA opens the case-review modal (dual-intent: urgent contact
 *     and case review). Secondary CTA is click-to-call.
 *   • Trust strip below the CTAs absorbs the standalone JurisdictionBar.
 *   • Portrait sits on a single subtle backplate — no rotation, no
 *     decorative double-frame.
 *   • Reduced-motion is honored: motion variants gated on the
 *     useReducedMotionPref() hook.
 */
export const HeroSection = ({
  showContent = true,
}: {
  showContent?: boolean;
  videoOnly?: boolean;
  contentOnly?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden pt-20"
    >
      {/* Background photograph + dim overlay for legibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55 z-10" aria-hidden="true" />
      </div>

      <Container className="h-full relative z-20">
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-20">
          {/* LEFT — Content */}
          <motion.div
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            variants={stagger}
            className="w-full lg:w-1/2 flex flex-col justify-center text-left items-start"
          >
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <motion.p variants={fadeRise} className="eyebrow mb-6">
                El Paso&rsquo;s Truck Accident Champion
              </motion.p>

              {/* H1 — promoted from h2; no sr-only sibling */}
              <motion.h1
                variants={fadeRise}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] tracking-tight text-white mb-8"
              >
                El Paso&rsquo;s truck accident lawyer.{" "}
                <span className="italic text-bronze">
                  We win these cases.
                </span>
              </motion.h1>

              {/* Subline — three concrete facts; no em-dash, no claim */}
              <motion.p
                variants={fadeRise}
                className="text-lg md:text-xl font-sans text-white/90 leading-relaxed max-w-xl mb-10"
              >
                16 years in El Paso courtrooms. Licensed in Texas, Arizona, and New Mexico. No fee unless we win.
              </motion.p>

              {/* CTAs — primary (modal, dual-intent) + secondary (click-to-call) */}
              <motion.div
                variants={fadeRise}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  noFloat
                  className="w-full sm:w-auto text-base shadow-md"
                  onClick={openModal}
                >
                  Get a free case review
                </Button>

                <a
                  href="tel:9156211818"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-base font-sans font-bold uppercase tracking-wider rounded-sm border-2 border-white text-white hover:bg-white hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label="Call Carter Law at (915) 621-1818"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call (915) 621-1818
                </a>
              </motion.div>

              {/* Trust strip — absorbs the standalone JurisdictionBar.
                  Single inline row visible in the first viewport on mobile. */}
              <motion.ul
                variants={fadeRise}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 font-sans text-sm"
                aria-label="Firm credentials"
              >
                <li className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-bronze"
                  />
                  Licensed in TX, AZ &amp; NM
                </li>
                <li className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-bronze"
                  />
                  16 years of trial experience
                </li>
                <li className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-bronze"
                  />
                  No fee unless we win
                </li>
                <li className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-bronze"
                  />
                  Hablamos espa&ntilde;ol
                </li>
              </motion.ul>
            </div>
          </motion.div>

          {/* RIGHT — Portrait */}
          <motion.div
            initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.96 }}
            animate={{
              opacity: showContent || reducedMotion ? 1 : 0,
              scale: showContent || reducedMotion ? 1 : 0.96,
            }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.24 }
            }
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-square">
              {/* Single subtle backplate — replaces the previous double rotated
                  decorative frames. No rotation, no second frame. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-[12px] bg-white/8"
              />
              <Image
                src="/thomas-carter-portrait.png"
                alt="Thomas Carter, founder of The Carter Law Firm, P.C."
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
