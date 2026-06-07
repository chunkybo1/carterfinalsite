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
 * GoogleReviews — Redesigned with an asymmetrical editorial "Bento Grid".
 * 
 * Design details:
 * - Featured review spans 2 columns on desktop to anchor the section.
 * - Dynamic mixing of dark (navy) and light cards creates visual rhythm.
 * - Prominent "G" verification badges and client avatars enhance authenticity.
 * - Elegant serif typography with oversized background quote marks.
 */
export const GoogleReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotionPref();

  const fadeRise = fadeRiseVariants(reducedMotion);
  const stagger = staggerVariants(reducedMotion, 0.08);

  // Take the first 5 testimonials for the bento grid
  const reviews = CLIENT_TESTIMONIALS.slice(0, 5);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-grey/30 rounded-bl-[100px] -z-10" />

      <Container>
        {/* Header Section */}
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
            <p className="eyebrow">Client Testimonials</p>
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs font-bold text-navy">5.0 / 5.0 Rating</span>
            </div>
          </motion.div>
          <motion.h2
            id="reviews-heading"
            variants={fadeRise}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-navy leading-[1.05]"
          >
            Real results for real people.
          </motion.h2>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => {
            // Determine styling based on grid position
            const isFeatured = index === 0;
            const isSecondaryDark = index === 3; // Make another card dark for balance
            const isDark = isFeatured || isSecondaryDark;
            
            // Grid spanning logic
            const gridClass = isFeatured 
              ? "md:col-span-2 lg:col-span-2" 
              : index === 4 
                ? "md:col-span-2 lg:col-span-1" // Last item spans 2 on tablet, 1 on desktop
                : "col-span-1";

            return (
              <motion.figure
                key={`${review.name}-${index}`}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }
                }
                className={`group relative flex flex-col rounded-[16px] p-8 md:p-10 overflow-hidden transition-transform duration-500 hover:-translate-y-1 ${gridClass} ${
                  isDark 
                    ? "bg-navy text-white shadow-[0_20px_40px_-15px_rgba(10,20,33,0.3)]" 
                    : "bg-white text-navy border border-gray-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:border-bronze/30"
                }`}
              >
                {/* Background decorative quote */}
                <Quote
                  aria-hidden="true"
                  strokeWidth={1}
                  className={`absolute -top-4 -right-4 h-32 w-32 -rotate-12 transition-transform duration-700 group-hover:rotate-0 ${
                    isDark ? "text-white/[0.03]" : "text-navy/[0.03]"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Rating & G-Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1" aria-hidden="true">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-bronze text-bronze"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    {/* Minimal G-Icon for authenticity */}
                    <svg viewBox="0 0 24 24" width="18" height="18" className={isDark ? "opacity-80" : "opacity-100"} xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Quote Body */}
                  <blockquote className={`font-serif leading-relaxed whitespace-pre-wrap flex-grow ${
                    isFeatured ? "text-xl md:text-2xl" : "text-base md:text-lg"
                  }`}>
                    {`“${review.quote}”`}
                  </blockquote>

                  {/* Author / Footer */}
                  <figcaption className={`mt-8 pt-6 border-t flex items-center gap-4 ${
                    isDark ? "border-white/10" : "border-navy/5"
                  }`}>
                    <span
                      aria-hidden="true"
                      className={`flex h-12 w-12 items-center justify-center rounded-full font-serif text-lg font-bold shrink-0 ${
                        isDark ? "bg-white/10 text-white" : "bg-light-grey text-navy"
                      }`}
                    >
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <span className={`block text-sm font-sans font-bold ${
                        isDark ? "text-white" : "text-navy"
                      }`}>
                        {review.name}
                      </span>
                      <span className={`block text-[11px] font-bold uppercase tracking-wider mt-1 ${
                        isDark ? "text-bronze" : "text-navy/50"
                      }`}>
                        {review.caseType}
                      </span>
                    </div>
                  </figcaption>
                </div>
              </motion.figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
