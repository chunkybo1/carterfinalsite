"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the portrait
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-navy overflow-hidden">
      {/* Diagonal Split - Content Left, Portrait Right */}
      <div className="relative w-full h-full min-h-screen">
        {/* RIGHT SIDE: Environmental Portrait (50% width) with Diagonal Cut - Absolutely Positioned */}
        <motion.div 
          ref={imageRef}
          style={{ 
            y: imageY,
          }}
          className="absolute top-0 right-0 w-full md:w-[50%] h-full z-10"
        >
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {/* Enhanced Placeholder - Typographic Treatment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                {/* Large Initials */}
                <div className="text-[120px] md:text-[180px] font-serif font-bold text-white/10 mb-4 tracking-tight">
                  TC
                </div>
                {/* Placeholder Text */}
                <div className="text-white/40 text-xs uppercase tracking-[0.3em] font-sans">
                  Environmental Portrait
                </div>
                <div className="text-white/20 text-[10px] mt-2 uppercase tracking-wider">
                  Coming Soon
                </div>
              </div>
            </motion.div>
            
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-navy/10" />
            
            {/* Textured background pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
        </motion.div>

        {/* LEFT SIDE: Content (50% width) */}
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="relative z-20 w-full md:w-[50%] min-h-screen flex flex-col justify-center pl-6 md:pl-8 lg:pl-12 pr-6 md:pr-8 lg:pr-12 py-20 bg-navy"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 max-w-none"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[10px] font-sans font-bold tracking-[0.3em] text-bronze uppercase"
            >
              Lead Attorney
            </motion.div>

            {/* Headline - Staggered Animation */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight"
              >
                Advocacy Runs
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight"
              >
                in the <span className="text-bronze">Family</span>
              </motion.h1>
            </div>

            {/* Opening Hook */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-light-steel leading-relaxed"
            >
              Before Thomas Carter ever stepped into a courtroom, he understood what it meant to stand up for someone who couldn't stand alone. It was the family business—just not in the way you might expect.
            </motion.p>

            {/* Supporting Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4 border-t border-white/10"
            >
              <p className="text-base md:text-lg font-serif italic text-light-steel leading-relaxed">
                &quot;Every case is someone's whole life. I treat it that way.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - Bottom Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-bronze/60 hover:text-bronze transition-colors cursor-pointer"
              onClick={() => {
                const nextSection = document.querySelector('[data-section="the-legacy"]');
                nextSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em]">
                Scroll to Explore
              </span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

