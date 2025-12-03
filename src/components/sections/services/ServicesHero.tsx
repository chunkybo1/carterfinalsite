"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export const ServicesHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const handleScrollToPracticeAreas = () => {
    const element = document.getElementById("practice-areas");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-navy overflow-hidden">
      {/* Diagonal Split - Navy Left, Abstract Right */}
      <div className="relative w-full h-full flex flex-col md:flex-row">
        {/* LEFT SIDE: Content (Navy) */}
        <div className="relative z-20 w-full md:w-[55%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[10px] font-sans font-bold tracking-[0.3em] text-bronze uppercase"
            >
              What We Fight For
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight"
            >
              Your Battle. <span className="text-bronze">Our Expertise.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-light-steel leading-relaxed max-w-2xl"
            >
              When you&apos;re facing the aftermath of an injury, you need more than legal representation—you need a fighter who understands your battle and knows how to win. Every case is someone&apos;s whole life. We treat it that way.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-bronze text-navy hover:opacity-90 font-serif font-bold uppercase tracking-wider"
                onClick={() => {
                  const element = document.getElementById("consultation-cta");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-bronze text-bronze hover:bg-bronze/10 font-serif font-bold uppercase tracking-wider"
                onClick={handleScrollToPracticeAreas}
              >
                Explore Practice Areas
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Abstract Visual with Diagonal Cut */}
        <div 
          className="absolute top-0 right-0 h-full w-full md:w-[55%] z-10 hidden md:block"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-navy via-[#1a2d47] to-[#0f1d2f]">
            {/* Abstract Shapes/Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-bronze/30 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-bronze/20 rounded-full blur-3xl" />
            </div>
            
            {/* Subtle Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

