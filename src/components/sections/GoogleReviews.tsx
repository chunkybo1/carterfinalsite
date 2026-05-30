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
  const secondary = CLIENT_TESTIMONIALS.slice(1, 5);

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
            <p className="eyebrow">In their own words</p>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs font-bold text-gray-700">Google Reviews</span>
            </div>
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
            className="relative bg-navy text-white rounded-[12px] p-8 lg:p-10 mb-8 overflow-hidden max-w-4xl mx-auto"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <Quote
              aria-hidden="true"
              strokeWidth={1}
              className="absolute top-6 right-6 h-16 w-16 text-bronze/15"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <p className="font-serif text-2xl md:text-3xl font-bold text-white leading-none">
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
              <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-white whitespace-pre-wrap">
                {`“${featured.quote}”`}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bronze font-serif text-lg font-bold"
                >
                  {featured.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-sans font-semibold text-white">
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

        {/* Secondary row — compact testimonials, light surface */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
              className="bg-light-grey p-6 lg:p-8 rounded-[12px] border border-navy/10 flex flex-col h-full"
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
              <blockquote className="text-sm md:text-base text-navy font-serif leading-relaxed mb-6 whitespace-pre-wrap flex-grow">
                {`“${review.quote}”`}
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-navy/5">
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
