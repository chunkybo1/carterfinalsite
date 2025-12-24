"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { smartSmoothScroll } from "@/utils/smoothScroll";

export const AboutHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-navy overflow-hidden">
      {/* Diagonal Split - Content Left, Portrait Right */}
      <div className="relative w-full h-full min-h-screen">
        {/* RIGHT SIDE: Environmental Portrait (50% width) with Diagonal Cut - Absolutely Positioned */}
        <div 
          className="absolute top-0 right-0 w-full md:w-[50%] h-full z-10"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <div className="absolute inset-0 w-full h-full">
            {/* Portrait Image */}
            <div className="relative w-full h-full">
              <Image
                src="/thomas-carter-portrait.jpg"
                alt="Thomas Carter"
                fill
                className="object-cover"
                style={{ filter: "saturate(0.7) contrast(1.1)" }}
                priority
              />
              {/* Desaturation overlay for depth */}
              <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
            </div>
          </div>
        </div>

        {/* LEFT SIDE: Content (50% width) */}
        <div className="relative z-20 w-full md:w-[50%] min-h-screen flex flex-col justify-center pl-6 md:pl-8 lg:pl-12 pr-6 md:pr-8 lg:pr-12 py-20 bg-navy">
          <div className="space-y-8 max-w-none">
            {/* Eyebrow */}
            <div className="text-[10px] font-sans font-bold tracking-[0.3em] text-bronze uppercase">
              Lead Attorney
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
                Advocacy Runs
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight">
                <span className="text-bronze">in the</span> <span className="text-bronze">Family</span>
              </h1>
            </div>

            {/* Opening Hook */}
            <p className="text-lg md:text-xl text-light-steel leading-relaxed">
              Thomas Carter grew up watching his grandfather advocate for people with disabilities—work that would take him to the White House for the signing of the ADA. El Paso recognized him as a civil rights hero. Raised by Army officers, Air Force firefighters, and educators, Thomas learned early that standing up for others isn't a profession. It's a responsibility.
            </p>

            {/* Supporting Quote */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-base md:text-lg font-serif italic text-light-steel leading-relaxed">
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
      </div>
    </section>
  );
};

