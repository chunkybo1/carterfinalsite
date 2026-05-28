"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  useReducedMotionPref,
  fadeRiseVariants,
  staggerVariants,
} from "@/lib/motion";
import { CLIENT_TESTIMONIALS } from "@/lib/services-data";

/**
 * GoogleReviews — refined homepage testimonials section.
 *
 * Replaces the previous version, which still carried several pre-redesign
 * patterns that the rest of the page has moved past:
 *   • A bronze-colored standalone word in the heading ("Clients" in bronze)
 *     read as decorative emphasis, not weight contrast.
 *   • Three equal-weight cards in a uniform grid — the identical-card-grid
 *     anti-pattern flagged for PracticeAreas and ResultsGallery.
 *   • Raw `tracking-[0.3em] uppercase text-[10px] font-bold text-bronze`
 *     clusters duplicating the .eyebrow utility.
 *   • A decorative Google "G" SVG floating in each card with no purpose.
 *   • Mixed radii (`rounded-sm`, `rounded-xl`, `rounded-md`).
 *
 * New structure mirrors ResultsGallery: a featured testimonial in a
 * full-width navy block (the strongest review, used as the trust anchor),
 * then two compact secondary testimonials in a row beneath. Hierarchy without
 * dropping data.
 */
export const GoogleReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  // Featured testimonial = the first in the list. Pick the strongest review
  // there if the data ever changes.
  const featured = CLIENT_TESTIMONIALS[0];
  const secondary = CLIENT_TESTIMONIALS.slice(1, 3);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white py-20 lg:py-28 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <Container>
        {/* Header — numbered section opener ("03 · In their own words").
           Closes the homepage triplet (01 Results, 02 Practice Areas, 03 Reviews). */}
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
              03
            </span>
            <span
              aria-hidden="true"
              className="h-[2px] w-12 bg-bronze"
            />
            <p className="eyebrow">In their own words</p>
          </motion.div>
          <motion.h2
            id="reviews-heading"
            variants={fadeRise}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-[1.05]"
          >
            What clients tell us afterward.
          </motion.h2>
        </motion.div>

        {/* Featured testimonial — full width, navy surface, strongest trust anchor */}
        {featured && (
          <motion.figure
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }
            className="relative bg-navy text-white rounded-[12px] p-10 lg:p-16 mb-8 overflow-hidden"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <Quote
              aria-hidden="true"
              strokeWidth={1}
              className="absolute top-8 right-8 h-20 w-20 text-bronze/15"
            />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <p className="font-serif text-3xl md:text-4xl font-bold text-white leading-none">
                  5.0
                </p>
                <div>
                  <div className="flex gap-1" aria-hidden="true">
                    {[...Array(featured.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-bronze text-bronze"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="eyebrow eyebrow-on-dark mt-1">
                    Across 99+ Google reviews
                  </p>
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-white">
                {`“${featured.quote}”`}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-bronze font-serif text-xl font-bold"
                >
                  {featured.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-base font-sans font-semibold text-white">
                    {featured.name}
                  </span>
                  <span className="block eyebrow eyebrow-on-dark mt-0.5">
                    {featured.caseType}
                  </span>
                </span>
              </figcaption>
            </div>
          </motion.figure>
        )}

        {/* Secondary row — two compact testimonials, light surface */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((review, index) => (
            <motion.figure
              key={`${review.name}-${index}`}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.32, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }
              }
              className="bg-light-grey p-8 rounded-[12px] border border-navy/10"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex gap-1 mb-4" aria-hidden="true">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-bronze text-bronze"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="text-base md:text-lg text-navy font-serif leading-relaxed mb-6">
                {`“${review.quote}”`}
              </blockquote>
              <figcaption>
                <span className="block text-sm font-sans font-semibold text-navy">
                  {review.name}
                </span>
                <span className="block eyebrow mt-1">{review.caseType}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
};
