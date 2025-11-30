"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GoldParticles } from "@/components/ui/GoldParticles";

export const HeroSection = ({ showContent = false }: { showContent?: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  // Animation Variants
  const headlineVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 20, opacity: 0 },
    visible: { 
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)", 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 } // easeOutExpo approximation
    }
  };

  const sublineVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 20, opacity: 0 },
    visible: { 
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)", 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 } // 0.3 + 0.6 delay
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 0.5, ease: "easeOut", delay: 1.5 } // after subline
    }
  };

  return (
    <div className="relative w-full h-screen bg-navy overflow-hidden">
      {/* Interaction Layer */}
      <GoldParticles />

      <div className="relative w-full h-full flex flex-col md:flex-row">
        {/* LEFT SIDE: Content (Navy Solid) */}
        <div className="relative z-20 w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
           <div className="relative">
             {/* Headline */}
             <div className="overflow-hidden">
               <motion.h1
                 initial="hidden"
                 animate={showContent ? "visible" : "hidden"}
                 variants={headlineVariants}
                 className="text-5xl md:text-6xl lg:text-[5vw] font-serif font-bold text-white leading-tight tracking-tight"
               >
                 We Fight.
               </motion.h1>
             </div>

             {/* Subline */}
             <div className="mt-2 md:mt-4 relative inline-block">
               <div className="overflow-hidden">
                 <motion.p
                   initial="hidden"
                   animate={showContent ? "visible" : "hidden"}
                   variants={sublineVariants}
                   className="text-3xl md:text-4xl lg:text-[3.5vw] font-serif font-medium text-white leading-tight"
                 >
                   Carter Law Wins.
                 </motion.p>
               </div>
               
               {/* Gold Accent Line */}
               <motion.div
                 initial="hidden"
                 animate={showContent ? "visible" : "hidden"}
                 variants={lineVariants}
                 className="h-[3px] bg-bronze mt-2 absolute bottom-[-8px] left-0 shadow-[0_0_10px_rgba(184,149,106,0.6)]"
               />
             </div>

             {/* CTA Button (Optional/Extra) */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: showContent ? 1 : 0 }}
               transition={{ delay: 2.0, duration: 0.8 }}
               className="mt-12"
             >
               <button className="px-8 py-3 border border-bronze text-bronze text-sm tracking-widest uppercase hover:bg-bronze hover:text-navy transition-all duration-300">
                 Talk To Us
               </button>
             </motion.div>
           </div>
        </div>

        {/* RIGHT SIDE: Video with Diagonal Mask */}
        <div 
          className="absolute top-0 right-0 h-full w-full md:w-[65%] z-10"
          style={{
             clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", // Standard diagonal cut
          }}
        >
           <div className="relative w-full h-full overflow-hidden bg-navy">
              {/* Ken Burns Effect Wrapper */}
              <motion.div
                 className="w-full h-full"
                 animate={prefersReducedMotion ? {} : { scale: [1.0, 1.08] }}
                 transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
              >
                  {/* Video Element */}
                  <div className="absolute inset-0 w-full h-full">
                     <iframe
                        className="absolute top-1/2 left-1/2 w-[177.7778vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[1.35]"
                        src="https://www.youtube.com/embed/b4bjhJ-hPxU?autoplay=1&mute=1&controls=0&loop=1&playlist=b4bjhJ-hPxU&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&vq=hd1080"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{ filter: "saturate(0.9)" }}
                        allowFullScreen
                      />
                  </div>
              </motion.div>

              {/* Navy Overlay */}
              <div className="absolute inset-0 bg-navy/40 z-10 pointer-events-none" />
           </div>
        </div>
        
        {/* Mobile Overlay Gradient (for text readability if layout shifts) */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent z-15 pointer-events-none" />
      </div>
    </div>
  );
};
