"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export const Biography = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} data-section="biography" className="relative min-h-screen w-full bg-transparent overflow-hidden">
      {/* Photo Zone - Left 55-60%, bleeds off left and bottom */}
      <div className="absolute left-0 top-0 bottom-0 w-[60%] z-10">
        {/* Photo - Environmental, cinematic, cool/desaturated */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/thomas-carter-portrait.png"
            alt="Thomas Carter"
            fill
            className="object-contain"
            style={{ 
              objectPosition: "left bottom",
              transform: "translate(0, 0) scale(1.0)" 
            }}
            priority
          />
          {/* Desaturation overlay */}
          <div className="absolute inset-0 bg-navy/20" />
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent z-30" />

      {/* Content Zone - Right 40-45%, warm cream, vertically centered */}
      <div className="relative z-20 min-h-screen flex items-center justify-end pr-[8vw] lg:pr-[6vw]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg w-full space-y-8"
        >
          {/* Small Caps Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[10px] font-sans font-bold tracking-[0.3em] text-bronze uppercase"
          >
            Lead Attorney
          </motion.div>

          {/* Name - Large, navy, signature-like */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-tight tracking-tight"
          >
            Thomas Carter
          </motion.h2>

          {/* Philosophy Line - Italic, warm gray, soul of the section */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl font-serif italic text-light-steel leading-relaxed mt-6"
          >
            Standing Beside You, Every Step of the Way.
            Your Fight Is My Purpose
          </motion.p>

          {/* Credential Stack - Minimal, quiet, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-2 mt-12 pt-8 border-t border-white/10"
          >
            <div className="text-sm text-light-steel font-sans">
              15+ Years Trial Experience
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

