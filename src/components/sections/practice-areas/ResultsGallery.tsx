"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const RESULTS = [
  { 
    id: 1,
    amount: "$650,000", 
    category: "18 Wheeler / Semitruck", 
    details: "Secured maximum recovery for a client involved in a high-speed commercial vehicle collision." 
  },
  { 
    id: 2,
    amount: "$500,000", 
    category: "18 Wheeler / Semitruck", 
    details: "Held a national trucking corporation accountable for safety violations leading to severe injury." 
  },
  { 
    id: 3,
    amount: "$250,000", 
    category: "Dog Bite", 
    details: "Secured justice for a victim of a vicious attack, covering all medical and reconstructive costs." 
  },
  { 
    id: 4,
    amount: "$100,000", 
    category: "Car Accident (MTBI)", 
    details: "Secured compensation for a Mild Traumatic Brain Injury that insurance initially attempted to minimize." 
  },
  { 
    id: 5,
    amount: "$100,000", 
    category: "Car Accident", 
    details: "Proven results in a high-impact collision where liability was initially disputed." 
  },
  { 
    id: 6,
    amount: "$50,000", 
    category: "Slip N' Fall", 
    details: "Recovered damages for a client injured due to preventable premises hazards at a commercial property." 
  },
];

// Double results for a seamless CSS loop
const MARQUEE_ITEMS = [...RESULTS, ...RESULTS];

export const ResultsGallery = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-transparent overflow-hidden border-y border-white/5">
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
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
        <div className="flex animate-marquee gap-8 px-4 will-change-transform translate-z-0">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative w-[280px] md:w-[340px] h-[450px] md:h-[520px] shrink-0 p-8 md:p-10 backdrop-blur-sm bg-navy/20 border border-bronze/30 shadow-2xl rounded-sm flex flex-col justify-between whitespace-normal transition-all duration-500 hover:border-bronze hover:bg-navy/40 group"
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
