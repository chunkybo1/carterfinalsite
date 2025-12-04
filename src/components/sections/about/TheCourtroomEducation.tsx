"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
        }}
        className="absolute inset-0 w-full h-[120%] z-0"
      >
        {/* Placeholder Background - Courtroom Interior */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{
            filter: "saturate(0.7) brightness(0.5) contrast(1.1)",
          }}
        >
          {/* Placeholder Content */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-[120px] md:text-[180px] font-serif font-bold text-white/5 mb-4 tracking-tight">
                COURTROOM
              </div>
              <div className="text-white/30 text-xs uppercase tracking-[0.3em] font-sans">
                Interior Photography
              </div>
              <div className="text-white/20 text-[10px] mt-2 uppercase tracking-wider">
                Coming Soon
              </div>
            </div>
          </motion.div>

          {/* Textured background pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Navy Overlay (60% opacity) */}
        <div className="absolute inset-0 bg-navy/60" />
      </motion.div>

      {/* Text Container - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[720px] md:max-w-[600px] lg:max-w-[720px] text-left"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="text-[10px] font-sans font-bold tracking-[0.3em] text-bronze uppercase mb-6"
          >
            Training Ground
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight"
          >
            Learned from the Bench
          </motion.h2>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left center" }}
            className="h-[1px] w-20 bg-bronze mb-10"
          />

          {/* Body Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="space-y-6 mb-10"
          >
            <p className="text-lg text-white/85 leading-relaxed max-w-[600px]">
              Thomas knew he wanted to be a trial lawyer before he ever applied
              to law school. As a student, he had the privilege of sitting in
              his uncle's district courtroom in Houston—watching the best
              attorneys in Texas try cases.
            </p>
            <p className="text-lg text-white/85 leading-relaxed max-w-[600px]">
              But it was his uncle, presiding from the bench, who left the
              deepest impression. Not for his legal acumen, but for how he
              treated every person who entered that room.
            </p>
          </motion.div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            className="relative pl-6 py-4"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: 1.6,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "top center" }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-bronze"
            />
            <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
              &quot;He treated everyone with dignity and respect—that taught me
              what fairness actually means.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

