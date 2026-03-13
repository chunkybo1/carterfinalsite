"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { smartSmoothScroll } from "@/utils/smoothScroll";

export const AboutHero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsDesktop(window.innerWidth >= 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentClipPath = isDesktop ? "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" : "none";

  return (
    <section className="relative min-h-screen w-full bg-navy overflow-hidden flex flex-col md:block pt-[64px] sm:pt-[96px] md:pt-0">
      {/* Photo Zone - Desktop: Absolute Right, Mobile: Relative Top */}
      <div 
        className="relative md:absolute top-0 right-0 w-full md:w-[50%] h-[70vh] md:h-full z-10 order-1"
        style={{ 
          clipPath: currentClipPath,
          WebkitClipPath: currentClipPath,
          opacity: isMounted ? 1 : 0,
          transition: "opacity 0.3s ease-in-out"
        }}
      >
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/thomas-carter-portrait.jpg"
              alt="Thomas Carter"
              fill
              className="object-cover"
              style={{ 
                filter: "saturate(0.7) contrast(1.1)",
                objectPosition: "top center"
              }}
              priority
            />
            {/* Desaturation overlay for depth */}
            <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
            {/* Mobile gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent md:hidden" />
          </div>
        </div>
      </div>

      {/* Content Zone - Desktop: Absolute Left, Mobile: Relative Bottom */}
      <div className="relative z-20 w-full md:w-[55%] min-h-screen flex flex-col justify-center pl-6 md:pl-12 lg:pl-20 pr-6 md:pr-12 lg:pr-16 py-20 bg-navy md:bg-transparent order-2">
        <div className="space-y-6 md:space-y-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.3em] text-bronze uppercase">
            Lead Attorney
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
              Advocacy Runs
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight">
              <span className="text-bronze">in the</span> <span className="text-bronze italic">Family.</span>
            </h1>
          </div>

          {/* Opening Hook */}
          <p className="text-base sm:text-lg md:text-xl text-light-steel leading-relaxed">
            Thomas Carter grew up watching his grandfather advocate for people with disabilities—work that would take him to the White House for the signing of the ADA. El Paso recognized him as a civil rights hero. Raised by Army officers, Air Force firefighters, and educators, Thomas learned early that standing up for others isn't a profession. It's a responsibility.
          </p>

          {/* Supporting Quote */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-white leading-relaxed">
              &quot;Every case is someone's whole life. I treat it that way.&quot;
            </p>
          </div>
        </div>

          {/* Scroll Indicator - Bottom Center */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
            <div
              className="flex flex-col items-center gap-2 text-bronze/60 hover:text-bronze transition-colors cursor-pointer"
              onClick={() => {
                smartSmoothScroll('[data-section="courtroom-education"]', {
                  duration: 1000,
                  offset: 80, // Account for fixed header
                });
              }}
            >
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em]">
                Scroll to Explore
              </span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
      </div>
    </section>
  );
};

