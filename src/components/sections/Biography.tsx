"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Biography — homepage section per REDESIGN-PLAN.md §4.5 (Phase 4).
 *
 * Changes from the previous version:
 *   • Italic-bronze on "Wins." removed. Italic-bronze is reserved for the
 *     Hero (one instance per page, Q2). The headline is now plain Cormorant
 *     bold without decorative emphasis.
 *   • Decorative scrapbook backplate (-translate-x-4 -translate-y-4 light-grey
 *     offset behind the portrait) replaced with a single subtle backplate
 *     using the new tokens, no offset, no rotation. Same treatment as the
 *     Hero portrait per Q7.
 *   • Eyebrow inline cluster -> .eyebrow utility class.
 *   • The dark-overlay gradient on the portrait stays (functional contrast,
 *     not decoration).
 *   • The decorative "Read His Story" arrow path was malformed (it pointed
 *     left/down rather than right). Replaced with lucide ArrowRight for
 *     visual consistency with the rest of the site.
 */
export const Biography = () => {
  return (
    <section
      data-section="biography"
      className="bg-white py-24 lg:py-32 px-6"
      aria-labelledby="biography-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image — single subtle backplate, no scrapbook offset */}
        <div className="relative aspect-[4/5] order-1 md:order-2">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-[12px] bg-light-grey"
          />
          <div className="relative h-full w-full overflow-hidden rounded-[12px]">
            <Image
              src="/thomas-carter-portrait.jpg"
              alt="Thomas Carter, founder of The Carter Law Firm, P.C."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Functional dark overlay for contrast on portrait edges; not decorative. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-2 md:order-1">
          <p className="eyebrow mb-4">Meet your advocate</p>
          <h2
            id="biography-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6 leading-tight"
          >
            Thomas Carter wins.
          </h2>
          <p className="text-base md:text-lg text-steel mb-6 leading-relaxed font-sans">
            Thomas Carter has dedicated his career to representing those who have been wronged. With over 16 years of experience as a trial attorney, he brings unwavering dedication and aggressive advocacy to every case.
          </p>
          <p className="text-base md:text-lg text-steel mb-8 leading-relaxed font-sans">
            Licensed in Texas, Arizona, and New Mexico, Thomas understands the complexities of multi-state litigation and the unique challenges faced by accident victims in the Southwest.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 eyebrow text-bronze hover:text-dark-bronze focus-visible:outline-none focus-visible:underline group"
          >
            Read his story
            <ArrowRight
              className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
