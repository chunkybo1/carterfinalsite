"use client";

import React, { useState, useCallback } from "react";
import { HeroAnimation } from "@/components/sections/hero-animation";
import { HeroSection } from "@/components/sections/hero-section";

export const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <div className="relative w-full">
      {/* The Animation Overlay (Fixed Position initially, then Absolute) */}
      <HeroAnimation 
        onComplete={handleAnimationComplete} 
        isFixed={!animationComplete}
      />
      
      {/* The Hero Section Content (Underneath) */}
      <div className={`relative z-0 w-full transition-opacity duration-1000 ${animationComplete ? "opacity-100" : "opacity-0"}`}>
         <HeroSection showContent={animationComplete} />
      </div>
    </div>
  );
};
