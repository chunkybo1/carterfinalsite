"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const Biography = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} data-section="biography" className="relative min-h-screen w-full bg-transparent overflow-hidden">
      {/* Photo Zone - Left 55-60%, restored to original cinematic layout */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-[60%] z-10">
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
          {/* Subtle desaturation overlay */}
          <div className="absolute inset-0 bg-navy/10" />
        </div>
      </div>

      {/* Content Zone - Right 40-45%, original floating box style */}
      <div className="relative z-20 min-h-screen flex items-center justify-end pr-[5vw] lg:pr-[8vw]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl w-full space-y-8 p-8 md:p-12 border-2 border-bronze/50 bg-navy/10 backdrop-blur-sm"
        >
          {/* Small Caps Label */}
          <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] font-sans font-bold tracking-[0.3em] text-bronze uppercase"
          >
            Lead Attorney
          </motion.div>

            {/* Name - Large, signature-like */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight"
          >
            Thomas Carter
          </motion.h2>
          </div>

          {/* Philosophy Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl font-serif italic text-light-steel leading-relaxed"
          >
            &quot;Standing Beside You, Every Step of the Way. Your Fight Is My Purpose.&quot;
          </motion.p>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6 text-sm md:text-base text-gray-400 font-sans leading-relaxed"
          >
            <p>
              Thomas Carter founded this firm on a simple principle: every client deserves a champion. With over 15 years in the courtroom, he has built a reputation for taking the cases other firms shy away from.
            </p>
            <p>
              He doesn&apos;t just manage cases; he fights battles. By limiting the firm&apos;s caseload, Thomas ensures that every family he represents receives his direct attention and the full weight of his trial experience.
            </p>
          </motion.div>

          {/* Credential Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-2 mt-8 pt-8 border-t border-white/10"
          >
            <div className="text-sm text-bronze font-sans font-bold tracking-[0.2em] uppercase">
              15+ Years Trial Experience • Millions Recovered
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent z-30" />
    </section>
  );
};

