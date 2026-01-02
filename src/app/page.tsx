"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { HeroCTA } from "@/components/sections/HeroCTA";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { ResultsGallery } from "@/components/sections/practice-areas/ResultsGallery";
import { JurisdictionBar } from "@/components/sections/JurisdictionBar";
import { Biography } from "@/components/sections/Biography";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Progressively darken the video as we scroll down
  // Reaches max opacity (0.8) by 600px of scroll
  const overlayOpacity = useTransform(scrollY, [0, 600], [0, 0.8]);

  return (
    <main ref={containerRef} className="min-h-screen flex flex-col relative">
      <Header />
      
      {/* Sticky Hero Background Layer (Video Only) */}
      <div className="sticky top-0 h-screen z-0">
        <Hero videoOnly />
        
        {/* Progressive Darkening Overlay */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-navy z-20 pointer-events-none" 
        />
      </div>

      {/* Sliding Content Layer (Everything else) */}
      <div className="relative z-10 -mt-[100vh] pointer-events-none">
        {/* Hero Content now slides up with the page */}
        <Hero contentOnly showContent={true} />
        
        <div className="pointer-events-auto">
          <ResultsGallery />
        </div>
        <div className="pointer-events-auto">
          <Biography />
        </div>
        <div className="pointer-events-auto">
          <HeroCTA />
        </div>
        <div className="pointer-events-auto">
          <PracticeAreas />
        </div>
        <div className="pointer-events-auto">
          <GoogleReviews />
        </div>
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
