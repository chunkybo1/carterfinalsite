"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Car,
  Truck,
  Skull,
  Bike,
  User,
  Shield,
  AlertTriangle,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";

/**
 * PracticeAreas — refined.
 *
 * Header converted to the editorial left-aligned pattern used by
 * ResultsGallery and GoogleReviews so the page now reads as a cohesive
 * editorial spread rather than three centered SaaS sections.
 *
 * Featured cards keep their two-column layout but the hover photograph
 * reveal is bumped to 0.08 opacity so it actually reads (3% was below the
 * just-noticeable-difference threshold). Card titles step up in size; lucide
 * icon container is bigger and switches surface, not just color, on hover.
 */

interface FeaturedArea {
  id: string;
  title: string;
  blurb: string;
  href: string;
  image: string;
  icon: LucideIcon;
}

interface SecondaryArea {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
}

const FEATURED: FeaturedArea[] = [
  {
    id: "trucking-accidents",
    title: "Truck accidents",
    blurb:
      "18-wheelers, semis, and commercial vehicles. We know how the trucking industry protects itself, and how to fight back. This is what we do.",
    href: "/practice-areas/trucking-accidents",
    image: "/process-2.jpg",
    icon: Truck,
  },
  {
    id: "car-accidents",
    title: "Car accidents",
    blurb:
      "High-impact collisions and complex liability disputes across El Paso. We handle the insurance companies; you focus on healing.",
    href: "/practice-areas/car-accidents",
    image: "/process-1.jpg",
    icon: Car,
  },
];

const SECONDARY: SecondaryArea[] = [
  {
    id: "wrongful-death",
    title: "Wrongful death",
    href: "/practice-areas/wrongful-death",
    icon: Skull,
  },
  {
    id: "bicycle-accidents",
    title: "Bicycle accidents",
    href: "/practice-areas/bicycle-accidents",
    icon: Bike,
  },
  {
    id: "pedestrian-accidents",
    title: "Pedestrian accidents",
    href: "/practice-areas/pedestrian-accidents",
    icon: User,
  },
  {
    id: "dog-bites",
    title: "Dog bites",
    href: "/practice-areas/dog-bites",
    icon: Shield,
  },
  {
    id: "slip-and-fall",
    title: "Slip and fall",
    href: "/practice-areas/slip-and-fall",
    icon: AlertTriangle,
  },
  {
    id: "medical-malpractice",
    title: "Medical malpractice",
    href: "/practice-areas/medical-malpractice",
    icon: Stethoscope,
  },
];

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 bg-light-grey overflow-hidden"
      aria-labelledby="practice-areas-heading"
    >
      <Container>
        {/* Header — numbered section opener. Breaks the eyebrow + serif headline + hairline
           pattern repeated by ResultsGallery and GoogleReviews. The numeric prefix
           ("02 · Practice Areas") establishes editorial cadence and reads as
           magazine-volume rather than SaaS-template. */}
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
            <span className="section-marker" aria-hidden="true">
              02
            </span>
            <span
              aria-hidden="true"
              className="h-[2px] w-12 bg-bronze"
            />
            <p className="eyebrow">Practice Areas</p>
          </motion.div>
          <motion.h2
            id="practice-areas-heading"
            variants={fadeRise}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-[1.05]"
          >
            Truck accidents are what we do.
          </motion.h2>
          <motion.p
            variants={fadeRise}
            className="mt-6 text-lg md:text-xl text-steel font-serif italic leading-relaxed max-w-2xl"
          >
            Trucking is our specialty. We represent injured Texans, Arizonans, and New Mexicans across the personal-injury spectrum.
          </motion.p>
        </motion.div>

        {/* Featured row — 2 cards (Truck, Car) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FEATURED.map((area, index) => (
            <motion.article
              key={area.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }
              }
              className="group relative bg-white border border-navy/10 p-8 md:p-10 rounded-[12px] overflow-hidden transition-shadow duration-200 hover:shadow-lg"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-light-grey transition-colors duration-200 group-hover:bg-bronze">
                    <area.icon
                      className="h-7 w-7 text-bronze transition-colors duration-200 group-hover:text-white"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy leading-tight">
                    {area.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg text-steel font-sans leading-relaxed mb-8 max-w-prose">
                  {area.blurb}
                </p>

                <Link
                  href={area.href}
                  className="mt-auto inline-flex items-center gap-2 eyebrow text-bronze hover:text-dark-bronze focus-visible:outline-none focus-visible:underline"
                >
                  Learn more
                  <ArrowRight
                    className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Background photograph reveal on hover (kept for featured row only) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <Image
                  src={area.image}
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Secondary list — 6 non-card rows */}
        <div>
          <p className="eyebrow text-center mb-6">Also handled</p>
          <ul
            className="max-w-3xl mx-auto divide-y divide-[var(--color-divider)] border-y border-[var(--color-divider)] bg-white rounded-[12px] overflow-hidden"
            aria-label="Other practice areas"
          >
            {SECONDARY.map((area) => (
              <li key={area.id}>
                <Link
                  href={area.href}
                  className="group flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-light-grey focus-visible:outline-none focus-visible:bg-light-grey"
                >
                  <area.icon
                    className="h-5 w-5 text-bronze flex-shrink-0"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <span className="flex-1 text-base md:text-lg text-navy font-sans group-hover:text-bronze transition-colors duration-200">
                    {area.title}
                  </span>
                  <ChevronRight
                    className="h-4 w-4 text-light-steel group-hover:text-bronze transform group-hover:translate-x-1 transition-all duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
