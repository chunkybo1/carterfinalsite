"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const TheCourtroomEducation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background image (moves at 30% scroll speed)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={containerRef}
      data-section="courtroom-education"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        ref={imageRef}
        style={{
          y: imageY,
          willChange: isInView ? "transform" : "auto", // Optimize: Only hint GPU when animating
          transform: "translateZ(0)", // Force GPU acceleration
          backfaceVisibility: "hidden", // Prevent flickering
        }}
        className="absolute inset-0 w-full h-[120%] z-0"
      >
        <Image
          src="/courtroomstock.jpg"
          alt="Courtroom Interior"
          fill
          className="object-cover"
          priority
          style={{
            filter: "saturate(0.5) brightness(0.7) contrast(1.1)",
          }}
        />

        {/* Dark Navy Overlay (75% opacity for enhanced readability) */}
        <div className="absolute inset-0 bg-navy/75" />
      </motion.div>

      {/* Text Container - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-20">
        <div className="w-full max-w-[720px] md:max-w-[600px] lg:max-w-[720px] text-left">
          {/* Eyebrow */}
          <div className="text-[10px] font-sans font-bold tracking-[0.3em] text-bronze uppercase mb-6">
            Training Ground
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Learned from <br className="hidden sm:block" /> the Bench
          </h2>

          {/* Divider Line */}
          <div className="h-[2px] w-16 sm:w-20 bg-bronze mb-10" />

          {/* Body Copy */}
          <div className="space-y-6 mb-10">
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-[600px]">
              Thomas knew he wanted to be a trial lawyer before he ever applied
              to law school. As a student, he had the privilege of sitting in
              his uncle's district courtroom in Houston—watching the best
              attorneys in Texas try cases.
            </p>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-[600px]">
              But it was his uncle, presiding from the bench, who left the
              deepest impression. Not for his legal acumen, but for how he
              treated every person who entered that room.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="relative pl-6 py-4">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-bronze" />
            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-white leading-relaxed">
              &quot;He treated everyone with dignity and respect—that taught me
              what fairness actually means.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

