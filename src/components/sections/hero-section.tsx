"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const HeroSection = ({ 
  showContent = false,
  videoOnly = false,
  contentOnly = false
}: { 
  showContent?: boolean;
  videoOnly?: boolean;
  contentOnly?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  
  const isInView = useInView(containerRef, { 
    once: false, 
    margin: "-20%", 
    amount: 0.1 
  });
  
  // Animation Variants
  const sublineVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
    }
  };


  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-white overflow-hidden pt-20">
      <Container className="h-full">
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-20">
          
          {/* LEFT COLUMN: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left items-start z-20">
            <div className="max-w-2xl">
              {/* Visually Hidden H1 for SEO */}
              <h1 className="sr-only">El Paso Truck Accident Lawyer</h1>

              {/* Tagline Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={showContent ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.3em] text-bronze uppercase mb-6"
              >
                El Paso&apos;s Truck Accident Champion
              </motion.div>

              {/* Main Heading */}
              <div className="overflow-hidden">
                <motion.h2
                  initial="hidden"
                  animate={showContent ? "visible" : "hidden"}
                  variants={sublineVariants}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight text-navy mb-8"
                >
                  Truck Accident? <span className="italic text-bronze">We&apos;re Here to Help.</span>
                </motion.h2>
              </div>

              {/* Paragraph Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                className="mb-10"
              >
                <p className="text-lg md:text-xl font-sans text-steel leading-relaxed max-w-xl">
                  Millions Recovered for the Injured. We don’t just take cases—we win them. Thomas Carter provides elite trial advocacy for the injured in El Paso and across Texas.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Button 
                  size="lg"
                  noFloat
                  className="w-full sm:w-auto text-base gold-button shadow-lg"
                  onClick={openModal}
                >
                  Free Case Review
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  noFloat
                  className="w-full sm:w-auto text-base border-navy text-navy hover:bg-navy hover:text-white transition-all shadow-md"
                  onClick={() => {
                    const el = document.querySelector('[data-section="biography"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Meet Thomas Carter
                </Button>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Profile Image */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={showContent ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
              className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-square"
            >
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-light-grey rounded-2xl -rotate-3 z-0" />
              <div className="absolute inset-0 border-2 border-bronze/20 rounded-2xl rotate-3 z-0" />
              
              <Image
                src="/thomas-carter-portrait.png"
                alt="Thomas Carter"
                fill
                className="object-contain object-bottom z-10"
                priority
              />
            </motion.div>
          </div>
          
        </div>
      </Container>
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-light-grey/30 -skew-x-12 translate-x-1/2 pointer-events-none" />
    </div>
  );
};
