"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { METHODOLOGY_PILLARS } from "@/lib/services-data";

export const CarterApproach = () => {
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
          {METHODOLOGY_PILLARS.map((pillar, index) => (
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
          <p className="eyebrow mb-4">Our Methodology</p>
          <div className="h-[2px] w-20 bg-bronze mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-[1.05] mb-6">
            The Carter approach.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            Every case is different. Our methodology never is. These three pillars guide how we investigate, prepare, and fight for every client.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="space-y-16">
          {METHODOLOGY_PILLARS.map((pillar, index) => (
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

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-bold text-bronze uppercase tracking-wider mb-4">
                  Examples:
                </h4>
                <ul className="space-y-2">
                  {pillar.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-bronze mr-2 font-bold">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

