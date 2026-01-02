"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
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
  const [isMuted, setIsMuted] = useState(true); // Always start muted for browser compatibility
  const [videoReady, setVideoReady] = useState(false);
  const [showUnmuteCTA, setShowUnmuteCTA] = useState(true);
  
  const { scrollY } = useScroll();

  // Handle manual unmute
  const handleUnmute = () => {
    const video = videoRef.current || document.querySelector('video');
    if (video) {
      video.muted = false;
      setIsMuted(false);
      setShowUnmuteCTA(false);
    }
  };

  // Mute video when user scrolls down
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      if (videoRef.current && !videoRef.current.muted) {
        videoRef.current.muted = true;
        setIsMuted(true);
        setShowUnmuteCTA(false); // Don't show CTA if they've scrolled
      }
    } else if (latest < 10 && !showUnmuteCTA && isMuted) {
      // Re-show CTA if back at top and still muted
      // setShowUnmuteCTA(true);
    }
  });
  
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
      <div className="relative w-full h-full flex flex-col md:flex-row">
        
        {/* LEFT SIDE: Content */}
        {!videoOnly && (
          <div className="relative z-20 w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pointer-events-none">
            <div className="relative pointer-events-auto">
              {/* Subline */}
              <div className="mt-2 md:mt-4 relative inline-block">
                <div className="overflow-hidden">
                  <motion.div
                    initial="hidden"
                    animate={showContent ? "visible" : "hidden"}
                    variants={sublineVariants}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                    className="text-4xl md:text-5xl lg:text-[4vw] font-serif font-bold leading-tight tracking-wide text-white/70 whitespace-nowrap"
                  >
                    CARTER LAW WINS.
                  </motion.div>
                </div>
              </div>

              {/* Tagline Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
                className="mt-6 md:mt-8"
              >
                <p className="text-sm md:text-base font-sans font-medium tracking-[0.3em] text-white/70 uppercase">
                  EL PASO&apos;S CHAMPION • LICENSED IN TX, AZ, & NM
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="mt-12"
              >
                <Button 
                  size="lg"
                  noFloat
                  className="bg-bronze text-navy hover:bg-navy hover:text-bronze border border-transparent hover:border-bronze font-serif font-bold uppercase tracking-widest text-sm transition-all duration-300"
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
            <div className="relative w-full h-full overflow-hidden bg-navy">
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
            </div>
          </div>
        )}
        
        {/* Mobile Overlay Gradient */}
        {!contentOnly && (
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent z-15 pointer-events-none" />
        )}
      </div>

      {/* Prominent Unmute CTA - Only in Hero Content Layer (Sliding) */}
      {contentOnly && (
        <AnimatePresence>
          {isMuted && showUnmuteCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="absolute bottom-12 right-6 lg:right-20 z-40 flex items-center gap-4 pointer-events-auto"
            >
              <button
                onClick={handleUnmute}
                className="group relative flex items-center gap-4 bg-bronze hover:bg-white text-navy px-6 py-4 rounded-full shadow-[0_0_30px_rgba(184,149,106,0.4)] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-bronze/20 transition-colors">
                  <VolumeX className="w-5 h-5 text-navy group-hover:text-navy" />
                </div>
                <div className="text-left pr-4">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-widest leading-none mb-1 opacity-70">Experience With Sound</div>
                  <div className="text-base font-serif font-bold uppercase tracking-wider leading-none">Click to Unmute</div>
                </div>
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-bronze animate-ping opacity-20 pointer-events-none" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
