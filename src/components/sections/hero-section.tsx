"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
// GoldParticles import removed
import { HTML5Video } from "@/components/ui/HTML5Video";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

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
  const { openModal } = useModal();
  
  // Optimize: Track visibility to pause video when not in viewport
  const isInView = useInView(containerRef, { 
    once: false, 
    margin: "-20%", 
    amount: 0.1 
  });
  
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  const { scrollY } = useScroll();
  const buttonScrollOpacity = useTransform(scrollY, [0, 200], [1, 0]);

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
          <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pointer-events-none text-center items-center">
            <div className="relative pointer-events-auto pt-32 md:pt-40 max-w-4xl">
              {/* Visually Hidden H1 for SEO */}
              <h1 className="sr-only">El Paso personal injury lawyer</h1>

              {/* Subline */}
              <div className="mt-2 md:mt-4 relative inline-block w-full">
                <div className="overflow-hidden pb-3">
                  <motion.h2
                    initial="hidden"
                    animate={showContent ? "visible" : "hidden"}
                    variants={sublineVariants}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-serif font-bold leading-[1.1] tracking-tight text-white/90 break-words whitespace-normal pb-3"
                  >
                    El Paso&apos;s Personal Injury Champion
                  </motion.h2>
                </div>
              </div>

              {/* Tagline Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                className="mt-6 md:mt-8"
              >
                <p className="text-xs sm:text-sm md:text-base font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] text-white/70 uppercase leading-relaxed">
                Over $2.1 Million Recovered for the Injured. We don’t just take cases—we win them.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="mt-10 md:mt-12 flex justify-center"
              >
                <Button 
                  size="lg"
                  noFloat
                  className="w-full sm:w-auto text-base gold-button shadow-xl"
                  onClick={openModal}
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
                  muted={isMuted}
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

                {/* Mute/Unmute Toggle */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: videoReady ? 1 : 0 }}
                  style={{ opacity: buttonScrollOpacity }}
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 group"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white transition-colors" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-all" />
                  )}
                </motion.button>
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
