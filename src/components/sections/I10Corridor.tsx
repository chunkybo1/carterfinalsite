"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MetricFigure } from "@/components/ui/MetricFigure";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { useModal } from "@/context/ModalContext";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";

/**
 * I10Corridor — video-led section on the El Paso Interstate 10 corridor, the
 * firm's local trucking specialty. Replaces the homepage verdicts gallery
 * (verdict proof now lives in the ResultsMarquee under the hero).
 *
 * Layout (concept B): centered headline -> large click-to-play YouTube video
 * -> an I-10 stat strip rendered with the shared MetricFigure system.
 *
 * TODO (content): swap I10_VIDEO_ID for the real YouTube video id, set the
 * real title/runtime, and VERIFY the two corridor stats below before launch.
 * The $500K figure mirrors the firm's average trucking verdict.
 */

const I10_VIDEO_ID = "VdXR888drMY";
const I10_VIDEO_TITLE = "Truck accidents on I-10: what El Paso drivers need to know";

interface Stat {
  value: string;
  label: string;
  /** flag stats that still need a verified source before launch */
  unverified?: boolean;
}

const STATS: Stat[] = [
  { value: "12K+", label: "Trucks a day on the El Paso I-10 corridor", unverified: true },
  { value: "60%", label: "Of Texas truck-crash deaths happen on highways", unverified: true },
  { value: "$500K", label: "Our average I-10 trucking verdict" },
];

export const I10Corridor = () => {
  const { openModal } = useModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.1);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-light-grey py-24 lg:py-32 overflow-hidden"
      aria-labelledby="i10-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — content + horizontal metrics */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.p variants={fadeRise} className="eyebrow mb-5">
              El Paso &middot; Interstate 10
            </motion.p>
            <motion.h2
              id="i10-heading"
              variants={fadeRise}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-navy leading-[1.05] tracking-tight"
            >
              I-10 is the most dangerous road we work on.
            </motion.h2>
            <motion.p
              variants={fadeRise}
              className="mt-6 text-lg md:text-xl text-steel leading-relaxed font-sans max-w-xl"
            >
              The interstate that runs through El Paso is one of the busiest freight
              corridors in the country &mdash; and trucking cases here move fast.
              Watch Thomas Carter explain what makes an I-10 truck accident different,
              and why the first days matter most.
            </motion.p>

            {/* Stat strip — horizontal row */}
            <motion.ul
              variants={fadeRise}
              className="mt-10 flex items-start gap-6 sm:gap-8 border-t border-line pt-8"
            >
              {STATS.map((stat) => (
                <li key={stat.label} className="flex flex-1 flex-col">
                  <MetricFigure
                    value={stat.value}
                    className="text-3xl md:text-4xl text-navy"
                  />
                  <span aria-hidden="true" className="metric-rule" />
                  <p className="mt-2 text-xs md:text-sm text-steel leading-snug font-sans">
                    {stat.label}
                  </p>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              variants={fadeRise}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" noFloat onClick={openModal} className="w-full sm:w-auto">
                Talk to an I-10 truck accident lawyer
              </Button>
              <a
                href="tel:9156211818"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-base font-sans font-extrabold uppercase tracking-wider rounded-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-light-grey"
                aria-label="Call Carter Law at (915) 621-1818"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call (915) 621-1818
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — video */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <YouTubeFacade
              videoId={I10_VIDEO_ID}
              title={I10_VIDEO_TITLE}
            />
            <p className="mt-3 text-sm text-light-steel font-sans">
              {I10_VIDEO_TITLE}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
