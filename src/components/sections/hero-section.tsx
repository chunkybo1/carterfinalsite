"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useMotionValueEvent } from "framer-motion";
// GoldParticles import removed
import { HTML5Video } from "@/components/ui/HTML5Video";
import { Button } from "@/components/ui/Button";

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
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Optimize: Track visibility to pause video when not in viewport
  const isInView = useInView(containerRef, { 
    once: false, 
    margin: "-20%", 
    amount: 0.1 
  });
  
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  
  const { scrollY } = useScroll();

  // Update animation state based on visibility
  useEffect(() => {
    setShouldAnimate(isInView);
  }, [isInView]);
  
  // Handle video ready callback
  const handleVideoReady = () => {
    setVideoReady(true);
  };

  // Animation Variants
  const sublineVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 20, opacity: 0 },
    visible: { 
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)", 
      y: 0, 
      opacity: 1,
    }
  };


  return (
    <div ref={containerRef} className={`relative w-full h-screen ${contentOnly ? 'bg-transparent pointer-events-none' : 'bg-navy'} overflow-hidden`}>
      {/* Background Fallback Gradient (Visible while video loads or on slow devices) */}
      {!contentOnly && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-black z-0" />
      )}

      <div className="relative w-full h-full flex flex-col md:flex-row">
        
        {/* LEFT SIDE: Content */}
        {!videoOnly && (
          <div className="relative z-20 w-full md:w-[55%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pointer-events-none">
            <div className="relative pointer-events-auto pt-20 md:pt-0">
              {/* Subline */}
              <div className="mt-2 md:mt-4 relative inline-block w-full">
                <div className="overflow-hidden">
                  <motion.div
                    initial="hidden"
                    animate={showContent ? "visible" : "hidden"}
                    variants={sublineVariants}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-serif font-bold leading-[0.9] tracking-tight text-white/90 break-words whitespace-normal"
                  >
                    CARTER LAW<br className="sm:hidden" /> WINS.
                  </motion.div>
                </div>
              </div>

              {/* Tagline Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
                className="mt-6 md:mt-8 max-w-sm md:max-w-none"
              >
                <p className="text-xs sm:text-sm md:text-base font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] text-white/70 uppercase leading-relaxed">
                  EL PASO&apos;S CHAMPION<br className="sm:hidden" /> • LICENSED IN TX, AZ, & NM
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="mt-10 md:mt-12"
              >
                <Button 
                  size="lg"
                  noFloat
                  className="w-full sm:w-auto bg-bronze text-navy hover:bg-white border-none font-serif font-bold uppercase tracking-widest text-sm transition-all duration-300 py-6 px-10"
                >
                  Talk To Us
                </Button>
              </motion.div>
            </div>
          </div>
        )}

        {/* RIGHT SIDE: Video Full Width */}
        {!contentOnly && (
          <div 
            ref={videoContainerRef}
            className="absolute right-0 top-0 w-full h-full z-10"
          >
            <div className="relative w-full h-full overflow-hidden">
                {/* HTML5 Video with Ken Burns Effect */}
                <HTML5Video
                  videoSrc="/videos/hero-video.mp4"
                  autoplay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  shouldAnimate={shouldAnimate}
                  onLoadedData={handleVideoReady}
                  pauseWhenNotVisible={true}
                  containerRef={containerRef as React.RefObject<HTMLDivElement | null>}
                  isInView={isInView}
                  videoRef={videoRef as React.RefObject<HTMLVideoElement | null>}
                />

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            </div>
          </div>
        )}
        
        {/* Mobile Overlay Gradient - Increased intensity for readability */}
        {!contentOnly && (
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent z-15 pointer-events-none" />
        )}
      </div>
    </div>
  );
};
