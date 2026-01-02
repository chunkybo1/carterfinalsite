"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const RESULTS = [
// ... existing results ...
];

// Double results for a seamless CSS loop
const MARQUEE_ITEMS = [...RESULTS, ...RESULTS];

export const ResultsGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px 0px" });

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 lg:py-32 bg-transparent overflow-hidden border-y border-white/5"
    >
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-paused {
          animation-play-state: paused;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Container className="mb-20">
        <div className="text-center">
          <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
            Proven Outcomes
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Our Recent <span className="text-bronze italic">Results.</span>
          </h2>
          <div className="h-[2px] w-12 bg-bronze mx-auto" />
        </div>
      </Container>

      {/* Optimized CSS Marquee Container */}
      <div className="relative flex whitespace-nowrap">
        <div className={`flex animate-marquee ${!isInView ? 'animate-marquee-paused' : ''} gap-8 px-4 will-change-transform translate-z-0`}>
          {MARQUEE_ITEMS.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative w-[280px] md:w-[340px] h-[450px] md:h-[520px] shrink-0 p-8 md:p-10 bg-navy/40 border border-bronze/30 shadow-2xl rounded-sm flex flex-col justify-between whitespace-normal transition-[background-color,border-color] duration-500 hover:border-bronze hover:bg-navy/60 group"
            >
              {/* Header Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-bronze/70">
                    {item.category}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                    {item.amount}
                  </h3>
                </div>

                <div className="h-[1px] w-12 bg-bronze/50" />

                <p className="text-light-steel text-lg leading-relaxed font-sans italic opacity-80 group-hover:opacity-100 transition-opacity">
                  &quot;{item.details}&quot;
                </p>
              </div>

              {/* Footer Label */}
              <div className="flex items-center gap-4 text-white/10 mt-auto">
                <div className="text-[9px] font-bold uppercase tracking-widest">Official Firm Record</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
