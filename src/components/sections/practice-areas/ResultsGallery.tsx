"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

import { FEATURED_RESULTS } from "@/lib/services-data";

const RESULTS = FEATURED_RESULTS.map((res, index) => ({
  id: index,
  amount: res.amount,
  category: res.caseType,
  details: res.context
}));

// Double results for a seamless CSS loop
const MARQUEE_ITEMS = [...RESULTS, ...RESULTS];

export const ResultsGallery = () => {
  return (
    <section 
      className="relative w-full py-24 lg:py-32 bg-transparent overflow-hidden border-y border-white/5"
    >
      <style jsx global>{`
        @keyframes marquee {
          0% { 
            transform: translate3d(0, 0, 0); 
          }
          100% { 
            transform: translate3d(-50%, 0, 0); 
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Container className="mb-12 md:mb-20">
        <div className="text-center px-4">
          <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
            Proven Outcomes
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Our Recent <span className="text-bronze italic">Results.</span>
          </h2>
          <div className="h-[2px] w-12 bg-bronze mx-auto" />
        </div>
      </Container>

      {/* Mobile: Single Column Stack | Desktop: Optimized CSS Marquee */}
      <div className="relative">
        {/* Mobile View */}
        <div className="flex flex-col gap-6 px-6 md:hidden">
          {RESULTS.slice(0, 6).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative w-full p-8 bg-navy/40 border border-bronze/30 shadow-xl rounded-sm flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-bronze/70">
                    {item.category}
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-white tracking-tight">
                    {item.amount}
                  </h3>
                </div>
                <div className="h-[1px] w-12 bg-bronze/50" />
                <p className="text-light-steel text-base leading-relaxed font-sans italic opacity-90">
                  &quot;{item.details}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 text-white/10 mt-8">
                <div className="text-[9px] font-bold uppercase tracking-widest">Official Firm Record</div>
              </div>
            </motion.div>
          ))}
          
          {/* Subtle CTA to view more on mobile could go here if needed */}
        </div>

        {/* Desktop View: Marquee */}
        <div className="hidden md:flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee gap-8 px-4">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="relative w-[340px] h-[520px] shrink-0 p-10 bg-navy/40 border border-bronze/30 shadow-2xl rounded-sm flex flex-col justify-between whitespace-normal transition-[background-color,border-color] duration-300 hover:border-bronze hover:bg-navy/60 group"
              >
                {/* Header Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-bronze/70">
                      {item.category}
                    </div>
                    <h3 className="text-5xl font-serif font-bold text-white tracking-tight">
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
      </div>
    </section>
  );
};
