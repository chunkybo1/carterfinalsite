"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const HeroAnimation = ({ onComplete, isFixed = true }: { onComplete: () => void; isFixed?: boolean }) => {
  const [step, setStep] = useState(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // Sequence Timing
    const timeouts = [
      setTimeout(() => setStep(1), 100),   // Start: We Fight (Typewriter)
      setTimeout(() => setStep(2), 2100),  // 2s later: Carter Law (Fade In)
      setTimeout(() => setStep(3), 2900),  // 0.8s later: Wins (Appear) + Subheading (Simultaneous)
      setTimeout(() => setStep(4), 4500),  // 1.6s later: Slide Left
      setTimeout(() => {
        setStep(5); // Animation Complete (Fade Video)
        onComplete();
      }, 5300), // 0.8s slide duration
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <>
      {/* Fixed Text Layer - Exits Left */}
      <motion.div 
        className={`${isFixed ? 'fixed' : 'absolute'} inset-0 z-50 flex flex-col items-center justify-center pointer-events-none`}
        initial={{ x: 0 }}
        animate={{ x: step >= 4 ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="flex flex-col items-center">
          
          {/* "We Fight" - Typewriter */}
          <div className="h-8 md:h-12 mb-4">
             {step >= 1 && (
                <TypewriterText text="We Fight" />
             )}
          </div>

          {/* "Carter Law" - Fade In */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: step >= 2 ? 1 : 0, 
              y: step >= 2 ? 0 : 20 
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-bronze tracking-tight text-center leading-none"
          >
            Carter Law
          </motion.h1>

          <div className="flex flex-col items-center mt-2 md:mt-4">
             {/* "Wins" - Special Effect */}
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ 
                 opacity: step >= 3 ? 1 : 0, 
                 scale: step >= 3 ? 1 : 0.9 
               }}
               transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
             >
               <span className="font-serif font-black italic text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#D4B48C] to-[#B8956A] drop-shadow-[0_0_30px_rgba(184,149,106,0.3)] tracking-wide">
                 WINS
               </span>
             </motion.div>

             {/* Subheading - Appears Simultaneously with Wins */}
             <motion.h2
               initial={{ opacity: 0, y: 10 }}
               animate={{ 
                 opacity: step >= 3 ? 1 : 0, 
                 y: step >= 3 ? 0 : 10 
               }}
               transition={{ duration: 0.5, delay: 0.1 }} // Slight offset for visual hierarchy, practically simultaneous
               className="mt-6 font-serif text-xl md:text-3xl text-light-steel font-medium tracking-wide italic"
             >
               Against the odds, every time.
             </motion.h2>
          </div>
        </div>
      </motion.div>

      {/* Steel Overlay - Fades Out */}
      <motion.div
        className={`fixed inset-0 z-40 bg-steel flex items-center justify-center ${step >= 4 ? "pointer-events-none" : "pointer-events-auto"}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: step >= 4 ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Matches text slide timing
      />
    </>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const characters = Array.from(text);
  
  return (
    <motion.div className="flex gap-1 md:gap-2 overflow-hidden">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.15 }}
          className="font-sans font-medium text-lg md:text-2xl text-bronze uppercase tracking-[0.2em]"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
