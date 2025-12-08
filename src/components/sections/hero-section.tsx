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
    }
  };

  const sublineVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 20, opacity: 0 },
    visible: { 
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)", 
      y: 0, 
      opacity: 1,
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
    }
  };

  return (
    <div className="relative w-full h-screen bg-navy overflow-hidden">
      {/* Interaction Layer */}
      <GoldParticles />

      <div className="relative w-full h-full flex flex-col md:flex-row">
        {/* LEFT SIDE: Content (Transparent) */}
        <div className="relative z-20 w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
           <div className="relative">
             {/* Headline */}
             <div className="overflow-hidden">
               <motion.h1
                 initial="hidden"
                 animate={showContent ? "visible" : "hidden"}
                 variants={headlineVariants}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-[5vw] font-serif font-normal text-white leading-tight tracking-tight"
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
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                  className="text-3xl md:text-4xl lg:text-[3.5vw] font-serif font-bold leading-tight text-white"
                 >
                   Carter Law Wins.
                 </motion.p>
               </div>
               
               {/* Gold Accent Line */}
               <motion.div
                 initial="hidden"
                 animate={showContent ? "visible" : "hidden"}
                 variants={lineVariants}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                className="h-[3px] bg-bronze mt-2 absolute bottom-[-8px] left-0 shadow-[0_0_10px_rgba(184,149,106,0.6)]"
               />
             </div>

             {/* Subtle Stats Line */}
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={showContent ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
               className="mt-6 md:mt-8"
             >
               <p className="text-xs md:text-sm font-sans font-light tracking-[0.15em] text-white uppercase">
                 <span className="shiny-text">4.9 Star Rating • 16 Years Fighting • Millions Recovered</span>
               </p>
             </motion.div>

             {/* Tagline Text */}
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={showContent ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
               className="mt-2 md:mt-3"
             >
               <p className="text-sm md:text-base font-sans font-light tracking-[0.3em] text-white/70 uppercase">
                 WINNING IS OUR WAY OF LIFE
               </p>
             </motion.div>

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

        {/* RIGHT SIDE: Video Full Width */}
        <div 
          className="absolute top-0 right-0 h-full w-full z-10"
        >
           <div className="relative w-full h-full overflow-hidden bg-navy">
              {/* Ken Burns Effect Wrapper - Optimized: GPU acceleration to prevent jittering */}
              <motion.div
                 className="w-full h-full"
                 animate={prefersReducedMotion ? {} : { scale: [1.0, 1.08] }}
                 transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
                 style={{
                   willChange: "transform",
                   transform: "translateZ(0)", // Force GPU acceleration
                   backfaceVisibility: "hidden",
                 }}
              >
                  {/* Video Element - Optimized: Separate GPU layer, remove conflicting transforms */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      transform: "translateZ(0)", // Force GPU layer
                      willChange: "transform",
                    }}
                  >
                     <iframe
                        className="absolute top-1/2 left-1/2 w-[177.7778vh] min-w-full min-h-full pointer-events-none"
                        src="https://www.youtube.com/embed/Bfr44mx0t9s?autoplay=1&mute=1&controls=0&loop=1&playlist=Bfr44mx0t9s&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&vq=hd1080"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{ 
                          filter: "saturate(0.9)",
                          transform: "translate(-50%, -50%) translateZ(0) scale(1.35)", // Use inline style, combine transforms
                          willChange: "transform",
                        }}
                        allowFullScreen
                      />
                  </div>
              </motion.div>

              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
           </div>
        </div>
        
        {/* Mobile Overlay Gradient (for text readability if layout shifts) */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent z-15 pointer-events-none" />
      </div>
    </div>
  );
};
