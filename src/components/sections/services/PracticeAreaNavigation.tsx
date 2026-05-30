"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { PRACTICE_AREAS_DATA } from "@/lib/services-data";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";

/**
 * PracticeAreaNavigation — fully rewritten.
 *
 * Old: 8-card identical grid (banned: identical-card grid; 4-col layout flattens
 * the brand's actual hierarchy where trucking is the specialty).
 *
 * New: 2 featured image-led cards (Trucking, Car) with editorial weight, then
 * a quiet 6-row text list for the remaining areas. Mirrors the homepage
 * PracticeAreas pattern; trucking-accident is no longer visually equal to
 * slip-and-fall.
 */

interface FeaturedSlot {
  title: string;
  blurb: string;
  href: string;
  imageSrc: string;
  Icon: LucideIcon;
}

// The PRACTICE_AREAS_DATA layer doesn't carry an image asset, so we map the
// two featured-row hrefs to the same photographs the homepage PracticeAreas
// section uses. Source-of-truth duplication is the lesser of two evils until
// services-data.ts gets an image field.
const FEATURED_HREFS = [
  "/practice-areas/trucking-accidents",
  "/practice-areas/car-accidents",
];

const FEATURED_IMAGES: Record<string, string> = {
  "/practice-areas/trucking-accidents": "/process-2.jpg",
  "/practice-areas/car-accidents": "/process-1.jpg",
};

export const PracticeAreaNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  const featured: FeaturedSlot[] = FEATURED_HREFS.map((href) => {
    const item = PRACTICE_AREAS_DATA.find((a) => a.href === href);
    if (!item) return null;
    return {
      title: item.title,
      blurb: item.shortDescription,
      href: item.href,
      imageSrc: FEATURED_IMAGES[item.href] ?? "/process-1.jpg",
      Icon: item.icon,
    };
  }).filter((x): x is FeaturedSlot => x !== null);

  const secondary = PRACTICE_AREAS_DATA.filter(
    (a) => !FEATURED_HREFS.includes(a.href)
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-light-grey py-32 lg:py-40 overflow-hidden"
      aria-labelledby="services-areas-heading"
    >
      <Container>
        {/* Header — numbered marker continues the homepage cadence. */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeRise}
            className="flex items-center gap-4 mb-6"
          >
            <p className="eyebrow">By Specialty</p>
          </motion.div>

          <motion.h2
            id="services-areas-heading"
            variants={fadeRise}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-[1.05]"
          >
            Trucking is what we&rsquo;re known for.
          </motion.h2>
          <motion.p
            variants={fadeRise}
            className="mt-6 text-lg md:text-xl text-steel font-serif leading-relaxed max-w-2xl"
          >
            We represent injured Texans, Arizonans, and New Mexicans across the personal-injury spectrum. Trucking is the specialty.
          </motion.p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Featured row — 2 cards with image, icon, title, blurb. */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((area, index) => {
              const Icon = area.Icon;
              return (
                <motion.article
                  key={area.href}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }
                  }
                  className="group relative bg-white border border-navy/10 rounded-[12px] overflow-hidden flex flex-col h-full"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {/* Image */}
                  <Link href={area.href} className="relative h-56 md:h-64 overflow-hidden bg-navy/5" aria-hidden="true" tabIndex={-1}>
                    <Image
                      src={area.imageSrc}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-navy/35 via-navy/10 to-transparent"
                    />
                  </Link>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/[0.06] transition-colors duration-200 group-hover:bg-navy/10"
                      >
                        <Icon
                          className="h-6 w-6 text-navy"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy leading-tight">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-steel font-sans leading-relaxed mb-8 max-w-prose">
                      {area.blurb}
                    </p>
                    <Link
                      href={area.href}
                      className="mt-auto inline-flex items-center gap-2 eyebrow text-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:underline"
                    >
                      Learn more
                      <ArrowRight
                        className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Secondary list — quiet text rows inside the 3rd card. */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.4, delay: 0.16, ease: [0.22, 1, 0.36, 1] }
            }
            className="flex flex-col bg-white border border-navy/10 rounded-[12px] p-6 lg:p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <p className="eyebrow mb-6">Also handled</p>
            <ul
              className="flex-1 flex flex-col justify-center divide-y divide-[var(--color-divider)]"
              aria-label="Other practice areas"
            >
              {secondary.map((area) => {
                const Icon = area.icon;
                return (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="group flex items-center gap-4 py-4 transition-colors duration-200 focus-visible:outline-none"
                    >
                      <Icon
                        className="h-5 w-5 text-navy flex-shrink-0"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className="flex-1 text-base md:text-lg text-navy font-sans group-hover:text-brand-navy-tint transition-colors duration-200">
                        {area.title}
                      </span>
                      <ChevronRight
                        className="h-4 w-4 text-light-steel group-hover:text-navy transform group-hover:translate-x-1 transition-all duration-200"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
