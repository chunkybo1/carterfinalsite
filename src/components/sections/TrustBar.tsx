"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Play } from "lucide-react";

const metrics = [
  {
    id: 1,
    overline: "Licensed States",
    value: 3,
    suffix: "",
    supportingText: "States",
    description: "Fighting for justice across Texas, Arizona & New Mexico.",
  },
  {
    id: 2,
    overline: "Years of Experience",
    value: 25,
    suffix: "+",
    supportingText: "Years",
    description: "A legacy of winning for those who need it most.",
  },
  {
    id: 3,
    overline: "Success Rate",
    value: 98,
    suffix: "%",
    supportingText: "Success",
    description: "We don't get paid unless we win your case.",
  },
];

function CountUpNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: 1.2 // Matched animation requirement
  });
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export const TrustBar = () => {
  // Optimize: Single observer for entire section instead of multiple whileInView
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="relative w-full bg-gradient-to-b from-[#050b14] to-[#0a1525] py-20 lg:py-32 overflow-hidden">
      {/* Diagonal Stripe Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" 
           style={{
             backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)"
           }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10 items-center">
          
          {/* Metrics Column 1-3 */}
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                willChange: isInView ? "transform, opacity" : "auto", // Optimize: GPU hint
                transform: "translateZ(0)", // Force GPU acceleration
              }}
              className="flex flex-col relative group"
            >
              {/* Overline Label */}
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.5 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="text-sm font-bold uppercase tracking-[0.12em] text-white/50 mb-2"
              >
                {metric.overline}
              </motion.h3>

              <div className="relative">
                {/* Display Number */}
                <div className="text-[72px] lg:text-[96px] font-bold leading-none text-bronze drop-shadow-[0_0_25px_rgba(184,149,106,0.2)]">
                  <CountUpNumber value={metric.value} />
                  {metric.suffix}
                </div>

                {/* Overlapping Supporting Text */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 0.3, y: -12 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                  style={{
                    willChange: isInView ? "transform, opacity" : "auto",
                    transform: "translateZ(0)",
                  }}
                  className="absolute bottom-0 left-1 font-serif text-[36px] lg:text-[48px] text-white/30 italic whitespace-nowrap z-0 pointer-events-none select-none"
                >
                  {metric.supportingText}
                </motion.div>
              </div>

              {/* Description */}
              <p className="mt-4 text-white/70 text-base max-w-[220px] leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}

          {/* Video Cutout - Column 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              willChange: isInView ? "transform, opacity" : "auto",
              transform: "translateZ(0)",
            }}
            className="relative w-full aspect-video md:col-span-2 lg:col-span-1 lg:h-[400px] lg:w-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group cursor-pointer"
          >
            {/* Video Background (Glass Effect) - Optimized: Removed backdrop-blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 z-10 transition-colors group-hover:bg-white/15" />
            
            {/* Placeholder Image/Video */}
            <div className="absolute inset-0 bg-navy/50">
                <div className="h-full w-full bg-gradient-to-tr from-navy via-navy/80 to-bronze/20 mix-blend-overlay" />
            </div>

            {/* Content Inside Cutout */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
              {/* Optimized: Removed backdrop-blur */}
              <div className="h-16 w-16 rounded-full bg-bronze/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-bronze/30">
                <Play className="h-6 w-6 text-bronze fill-current ml-1" />
              </div>
              <h4 className="text-white font-serif text-2xl font-bold mb-2">See The Difference</h4>
              <p className="text-white/60 text-sm">Watch how we change lives.</p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
