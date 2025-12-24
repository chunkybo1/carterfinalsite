"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

// Center-focused comparison data
const POINTS = [
  {
    category: "Preparation",
    them: "Settlement-Focused",
    us: "Trial-Ready",
    description: "While they look for the quickest exit, we build every case for the courtroom."
  },
  {
    category: "Communication",
    them: "Case Managers",
    us: "Direct Access",
    description: "You don't talk to a middleman. You talk to your attorney."
  },
  {
    category: "Cost",
    them: "Hidden Fees",
    us: "No Win, No Fee",
    description: "We take the risk. You don't pay a dime unless we win your case."
  },
  {
    category: "Experience",
    them: "High Volume",
    us: "High Stakes",
    description: "We don't juggle hundreds of cases. We focus on winning the ones that matter."
  }
];

export const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  // Scroll parallax for the center line/diamond
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.05, 0.05, 0]);

  return (
    <section
      ref={containerRef}
      data-section="why-choose-us"
      className="relative w-full bg-transparent py-16 lg:py-24"
    >
      {/* Background Elements - Sticky Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Architectural Typography Watermarks */}
          <motion.div 
            style={{ opacity: bgTextOpacity }}
            className="flex gap-[15vw] select-none"
          >
            <span className="text-[200px] lg:text-[300px] font-serif font-bold text-white leading-none">V</span>
            <span className="text-[200px] lg:text-[300px] font-serif font-bold text-white leading-none">S</span>
          </motion.div>

          {/* Subtle Grid - Fixed within sticky container */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px"
            }} 
          />
        </div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block relative"
          >
            <span className="text-bronze text-sm font-bold tracking-[0.4em] uppercase relative z-10">
              The Arena
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-bronze/30" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight"
          >
            We <span className="text-bronze italic">Fight.</span>
          </motion.h2>
        </div>

        {/* The Arena Comparison */}
        <div className="relative max-w-7xl mx-auto">
          {/* Light Pipe - Glowing Bronze Beam */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-[2px]">
            {/* Inner Beam */}
            <motion.div 
              style={{ scaleY: lineScale }}
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-bronze to-transparent z-10"
            />
            {/* Glow Effect */}
            <motion.div 
              style={{ scaleY: lineScale }}
              className="absolute inset-[-5px_-8px] w-[calc(100%+16px)] h-full bg-bronze/20 blur-lg z-0"
            />
          </div>

          {/* Points */}
          <div className="space-y-16 md:space-y-24">
            {POINTS.map((point, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center">
                
                {/* Center Node point */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                    className="w-8 h-8 bg-navy/90 border border-bronze rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(184,149,106,0.4)]"
                  >
                    <div className="text-[8px] font-bold text-bronze">VS</div>
                  </motion.div>
                </div>

                {/* Left Side: "Them" (Industry Standard - Muted & Receding) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + (index * 0.15), duration: 0.8 }}
                  className="text-center md:text-right md:pr-24 lg:pr-32 group"
                >
                  <div className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.3em] mb-4">
                    The Industry Standard
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-400 decoration-gray-700/50">
                    {point.them}
                  </h3>
                </motion.div>

                {/* Right Side: "Us" (Carter Standard - Frosted Glass Editorial Panel) */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + (index * 0.15), duration: 0.8 }}
                  className="text-center md:text-left md:pl-24 lg:pl-32"
                >
                  <div className="relative p-6 md:p-8 lg:p-10 group max-w-xl">
                    {/* Frosted Glass Shard Background - More rectangular padding */}
                    <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl -z-10 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-bronze/30" />
                    
                    {/* Glowing Accent Line */}
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />

                    <div className="text-[9px] font-sans text-bronze uppercase tracking-[0.4em] mb-4 font-bold flex items-center gap-3 justify-center md:justify-start">
                      <span className="w-6 h-[1px] bg-bronze/40 hidden md:block" />
                      The Carter Standard
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white font-bold mb-4 leading-tight">
                      {point.us}
                    </h3>
                    
                    <p className="text-light-steel text-sm md:text-base lg:text-lg max-w-sm mx-auto md:mx-0 leading-relaxed font-light">
                      {point.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>

          {/* Bottom Seal - Large Rotating Diamond */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 1.2, type: "spring", stiffness: 80 }}
            className="relative mx-auto mt-20 w-24 h-24 hidden md:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-bronze/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative z-10 w-full h-full border-2 border-bronze/40 bg-navy rotate-45 flex items-center justify-center p-5 shadow-[0_0_30px_rgba(184,149,106,0.3)]">
              <Image 
                src="/diamond.png" 
                alt="Carter Law Seal" 
                width={40} 
                height={40}
                className="opacity-90 -rotate-45"
              />
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent z-30" />
    </section>
  );
};

