"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Biography — refined.
 *
 * Adds the bronze hairline accent under the eyebrow that the rest of the
 * page now uses for editorial rhythm. Tightens vertical metrics on the
 * headline (leading-[1.05]) and trims the second body paragraph for a tighter
 * lawyer-bio register. Backplate radius now uses var(--radius-card) to match
 * the rest of the page.
 */
export const Biography = () => {
  return (
    <section
      data-section="biography"
      className="bg-white py-20 lg:py-28 px-6"
      aria-labelledby="biography-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image — single subtle backplate, no scrapbook offset */}
        <div className="relative aspect-[4/5] order-1 md:order-2">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{ borderRadius: "var(--radius-card)", background: "var(--surface-fog)" }}
          />
          <div
            className="relative h-full w-full overflow-hidden"
            style={{ borderRadius: "var(--radius-card)" }}
          >
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
              className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-2 md:order-1 max-w-xl">
          <p className="eyebrow mb-4">Meet your advocate</p>
          <h2
            id="biography-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-[1.05]"
          >
            Thomas Carter wins.
          </h2>
          <span
            aria-hidden="true"
            className="block h-[2px] w-16 bg-bronze mt-6"
          />
          <p className="mt-8 text-base md:text-lg text-steel leading-relaxed font-sans">
            Sixteen years in El Paso courtrooms. Licensed across Texas, Arizona, and New Mexico. A trial attorney who treats every case as if it were his own family at the table.
          </p>

          {/* Pull-quote — uses the bronze hairline above (not a side-stripe,
             which is a banned pattern) as the brand's recurring "the record"
             device. Serif italic at hero scale carries the editorial weight. */}
          <figure className="mt-12">
            <span
              aria-hidden="true"
              className="block h-[2px] w-10 bg-bronze mb-5"
            />
            <blockquote className="pull-quote max-w-prose">
              When the insurance company tells you what you&rsquo;re owed, Thomas tells you what you actually deserve. Then he proves it.
            </blockquote>
          </figure>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 eyebrow text-bronze hover:text-dark-bronze focus-visible:outline-none focus-visible:underline group"
          >
            Read his story
            <ArrowRight
              className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>

          {/* Recognition — image badges. */}
          <div className="mt-12 pt-8 border-t border-bronze/20">
            <div className="flex flex-wrap items-center gap-8">
              <Image
                src="/avvoaccreditation.png"
                alt="Avvo 5 Star Rating"
                width={110}
                height={75}
                className="object-contain h-14 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
