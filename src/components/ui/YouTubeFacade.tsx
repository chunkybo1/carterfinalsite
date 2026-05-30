"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * YouTubeFacade — performant click-to-play YouTube embed.
 *
 * Renders a poster image with a play affordance and only injects the YouTube
 * iframe after the user clicks, so the page pays zero third-party JS/iframe
 * cost on initial load. Uses the privacy-enhanced youtube-nocookie domain.
 *
 * Pass a real `videoId` (the part after `?v=` in a YouTube URL). A custom local
 * `posterSrc` looks more premium than YouTube's auto-thumbnail and avoids
 * remote-image config.
 */
export const YouTubeFacade = ({
  videoId,
  title,
  posterSrc,
}: {
  videoId: string;
  title: string;
  posterSrc?: string;
}) => {
  const [active, setActive] = useState(false);
  const finalPosterSrc = posterSrc || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-navy"
      style={{ boxShadow: "var(--shadow-overlay)" }}
    >
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={finalPosterSrc}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {/* Legibility wash */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-navy/10"
          />
          {/* Play affordance — navy circle with a thin single-weight gold glyph
             (follows the site icon rules: no saturated gold fill disc). */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-110"
          >
            <Play className="h-7 w-7 translate-x-0.5 text-brand-gold" strokeWidth={1.5} />
          </span>
        </button>
      )}
    </div>
  );
};
