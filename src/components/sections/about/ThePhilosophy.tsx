"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Preparation as Respect",
    description: "We prepare every case for trial, not because we expect to go to trial, but because preparation is how you show respect for what's at stake. When a client's financial future and sense of justice are on the line, over-preparation isn't optional—it's the only standard that makes sense.",
    quote: "Insurance adjusters know our name. They know we don't bluff. When they know we're ready and willing to take a case to a jury, settlement offers improve dramatically.",
  },
  {
    number: "02",
    title: "Client Relationship",
    description: "Every case is someone's whole life. I treat it that way. This means staying connected to the human reality beneath the legal strategy. It means understanding that behind every case file is a person whose life has been disrupted, whose family is worried, whose future feels uncertain.",
    quote: "The attorney-client relationship isn't transactional. It's a partnership during one of the most vulnerable periods of a person's life. That requires empathy, communication, and a commitment to being present—not just when it's convenient, but when it matters.",
  },
  {
    number: "03",
    title: "Adversarial Confidence",
    description: "The 'fighter' brand isn't performance—it's pattern. I approach opposing counsel and insurance companies with the confidence that comes from preparation. I'm known as an aggressive, prepared opponent because that's what clients need when they're up against well-funded adversaries.",
    quote: "I don't back down from insurance companies or opposing counsel. Your fight is my fight, and I'm here to win. That's not bravado—it's the standard I was raised to meet.",
  },
];

export const ThePhilosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#FDFBF8] overflow-hidden">
      {/* Diagonal Navy Wedge (Left Side) */}
      <div 
        className="absolute inset-0 bg-navy z-0"
        style={{
          clipPath: "polygon(0 100%, 0 0, 45% 0, 35% 100%)",
        }}
      />

      {/* Left Zone - Numbers (Navy Background) */}
      <div className="absolute inset-0 z-10 flex items-center justify-start pl-8 md:pl-12 lg:pl-20 hidden md:flex">
        <div className="space-y-32">
          {PHILOSOPHY_PILLARS.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 0.1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-[120px] md:text-[180px] lg:text-[240px] font-serif font-bold text-white leading-none"
            >
              {pillar.number}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Zone - Content (Cream Background) */}
      <div className="relative z-20 w-full md:w-[60%] md:ml-auto bg-[#FDFBF8] min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
            The Approach
          </div>
          <div className="h-[2px] w-20 bg-bronze mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6 leading-tight">
            The Fighter's <span className="text-bronze">Philosophy</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            What makes Thomas's approach distinctive isn't just what he does—it's why he does it and how those values shape every client relationship.
          </p>
        </motion.div>

        {/* Philosophy Pillars */}
        <div className="space-y-16">
          {PHILOSOPHY_PILLARS.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="bg-white border border-gray-200 p-8 md:p-10 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl md:text-5xl font-serif font-bold text-bronze">
                  {pillar.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {pillar.description}
              </p>

              {/* Pull Quote */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-lg font-serif italic text-navy leading-relaxed">
                  &quot;{pillar.quote}&quot;
                </p>
                <p className="text-sm text-gray-600 mt-4 font-serif">— Thomas Carter</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

