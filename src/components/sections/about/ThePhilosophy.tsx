"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Preparation as Respect",
    description: "We prepare every case for trial, not because we expect to go to trial, but because preparation is how you show respect for what's at stake. When a client's financial future and sense of justice are on the line, over-preparation isn't optional—it's the only standard that makes sense.",
    quote: "Insurance adjusters know our name. They know we don't bluff. When they know we're ready and willing to take a case to a jury, settlement offers improve dramatically.",
    image: {
      alt: "Case files and documentation on desk",
      label: "Preparation",
      alignment: "left",
    },
  },
  {
    number: "02",
    title: "Client Relationship",
    description: "Every case is someone's whole life. I treat it that way. This means staying connected to the human reality beneath the legal strategy. It means understanding that behind every case file is a person whose life has been disrupted, whose family is worried, whose future feels uncertain.",
    quote: "The attorney-client relationship isn't transactional. It's a partnership during one of the most vulnerable periods of a person's life. That requires empathy, communication, and a commitment to being present—not just when it's convenient, but when it matters.",
    image: {
      alt: "Human connection and conversation",
      label: "Relationship",
      alignment: "right",
    },
  },
  {
    number: "03",
    title: "Adversarial Confidence",
    description: "The 'fighter' brand isn't performance—it's pattern. I approach opposing counsel and insurance companies with the confidence that comes from preparation. I'm known as an aggressive, prepared opponent because that's what clients need when they're up against well-funded adversaries.",
    quote: "I don't back down from insurance companies or opposing counsel. Your fight is my fight, and I'm here to win. That's not bravado—it's the standard I was raised to meet.",
    image: {
      alt: "Courtroom architecture and forward motion",
      label: "Confidence",
      alignment: "left",
    },
  },
];

export const ThePhilosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Individual refs for each pillar for animation timing
  const pillarRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const pillarInView = pillarRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#FDFBF8] overflow-hidden">
      {/* Content Zone - Full Width */}
      <div className="relative z-20 w-full bg-[#FDFBF8] min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-20">
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
            What makes Thomas's approach distinctive isn't just what he does—it's why he does it
            and how those values shape every client relationship.
          </p>
        </motion.div>

        {/* Philosophy Pillars */}
        <div className="space-y-16">
          {PHILOSOPHY_PILLARS.map((pillar, index) => (
            <motion.div
              key={index}
              ref={pillarRefs[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={pillarInView[index] ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.6 + 0.2,
                ease: "easeOut",
              }}
              className="bg-white border border-gray-200 p-8 md:p-10 rounded-lg shadow-sm relative"
            >

              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl md:text-5xl font-serif font-bold text-bronze">
                  {pillar.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">{pillar.description}</p>

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
