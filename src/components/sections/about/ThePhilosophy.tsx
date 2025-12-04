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
  const imageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const lineRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const pillarInView = pillarRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));
  const imageInView = imageRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));
  const lineInView = lineRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#FDFBF8] overflow-hidden">
      {/* Diagonal Navy Wedge (Left Side) */}
      <div
        className="absolute inset-0 bg-navy z-0"
        style={{
          clipPath: "polygon(0 100%, 0 0, 50% 0, 45% 20%, 30% 50%, 38% 50%, 35% 100%)",
        }}
      />

      {/* Left Zone - Images with Staggered Alignment */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center pl-8 md:pl-12 lg:pl-20 hidden md:flex">
        <div className="space-y-32">
          {PHILOSOPHY_PILLARS.map((pillar, index) => {
            const isRightAligned = pillar.image.alignment === "right";
            return (
              <motion.div
                key={index}
                ref={imageRefs[index]}
                initial={{ opacity: 0, y: 20, scale: 1.03 }}
                animate={imageInView[index] ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.6,
                  ease: "easeOut",
                }}
                className={`relative ${
                  isRightAligned ? "ml-10 md:ml-10 lg:ml-20" : "ml-0"
                } w-[220px] md:w-[280px] lg:w-[360px]`}
              >
                {/* Image Container */}
                <motion.div
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.3 },
                  }}
                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Placeholder Background - Different gradients for each */}
                  <motion.div
                    className={`absolute inset-0 ${
                      index === 0
                        ? "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800"
                        : index === 1
                        ? "bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900"
                        : "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
                    }`}
                    style={{
                      filter: "saturate(0.7) brightness(0.9)",
                    }}
                    whileHover={{
                      filter: "saturate(0.85) brightness(0.95)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Placeholder Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-white/20 mb-2">
                          {pillar.number}
                        </div>
                        <div className="text-white/40 text-xs uppercase tracking-[0.2em] font-sans">
                          {pillar.image.label}
                        </div>
                      </div>
                    </div>

                    {/* Navy Overlay (20% opacity) */}
                    <div className="absolute inset-0 bg-navy/20" />

                    {/* Subtle border */}
                    <div className="absolute inset-0 border border-white/10" />
                  </motion.div>
                </motion.div>

                {/* Node Point - Gold circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={imageInView[index] ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.6 + 0.3,
                  }}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-bronze rounded-full z-20"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Connector Line System */}
      <div className="absolute inset-0 z-15 hidden md:block pointer-events-none">
        {PHILOSOPHY_PILLARS.map((pillar, index) => {
          if (index === PHILOSOPHY_PILLARS.length - 1) return null; // No line after last item

          // Calculate line position - between images and content
          // Line positioned at the boundary between navy and cream sections
          // Approximately at 35-38% from left (where diagonal cut ends)
          const lineLeft = "35%";
          // Position lines to connect between image centers
          // First line starts after first image, second after second
          const lineTopPercent = 25 + index * 30; // Adjusted for better alignment
          const lineHeight = "25%"; // Height between connection points

          return (
            <React.Fragment key={`line-${index}`}>
              {/* Vertical line segment */}
              <motion.div
                ref={lineRefs[index]}
                initial={{ scaleY: 0 }}
                animate={lineInView[index] ? { scaleY: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.6 + 0.5,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  left: lineLeft,
                  top: `${lineTopPercent}%`,
                  width: "1px",
                  height: lineHeight,
                  transformOrigin: "top center",
                }}
                className="bg-bronze/40"
              />
              {/* Node point at bottom of line segment */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={lineInView[index] ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.6 + 0.7,
                }}
                style={{
                  position: "absolute",
                  left: `calc(${lineLeft} - 3px)`,
                  top: `calc(${lineTopPercent}% + ${lineHeight} - 3px)`,
                  width: "6px",
                  height: "6px",
                }}
                className="bg-bronze rounded-full"
              />
            </React.Fragment>
          );
        })}
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
              {/* Mobile: Image above text */}
              <div className="md:hidden mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 1.03 }}
                  animate={pillarInView[index] ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.6,
                    ease: "easeOut",
                  }}
                  className="relative w-full aspect-[4/3] overflow-hidden"
                  style={{
                    filter: "saturate(0.7) brightness(0.9)",
                  }}
                >
                  <div
                    className={`absolute inset-0 ${
                      index === 0
                        ? "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800"
                        : index === 1
                        ? "bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900"
                        : "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-serif font-bold text-white/20 mb-2">
                          {pillar.number}
                        </div>
                        <div className="text-white/40 text-xs uppercase tracking-[0.2em] font-sans">
                          {pillar.image.label}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-navy/20" />
                    <div className="absolute inset-0 border border-white/10" />
                  </div>
                </motion.div>
              </div>

              {/* Left border for mobile (replaces connector line) */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-[2px] bg-bronze/40" />

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
