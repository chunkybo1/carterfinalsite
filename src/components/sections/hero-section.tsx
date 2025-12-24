"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
// GoldParticles import removed
import { HTML5Video } from "@/components/ui/HTML5Video";

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
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay compatibility
  const [videoReady, setVideoReady] = useState(false);
  
  // Update animation state based on visibility
  useEffect(() => {
    setShouldAnimate(isInView);
  }, [isInView]);
  
  // Handle mute/unmute toggle
  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    video.muted = newMutedState;
  };

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
          <div className="relative z-20 w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pointer-events-auto">
            <div className="relative">
              {/* Subline */}
              <div className="mt-2 md:mt-4 relative inline-block">
                <div className="overflow-hidden">
                  <motion.div
                    initial="hidden"
                    animate={showContent ? "visible" : "hidden"}
                    variants={sublineVariants}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                    className="text-4xl md:text-5xl lg:text-[4vw] font-serif font-bold leading-tight tracking-wide steel-text whitespace-nowrap"
                  >
                    CARTER LAW WINS.
                  </motion.div>
                </div>
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
                <p className="text-sm md:text-base font-sans font-medium tracking-[0.3em] text-white/70 uppercase">
                  WINNING IS OUR WAY OF LIFE
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="mt-12"
              >
                <button className="px-8 py-3 bg-bronze text-navy text-sm tracking-widest uppercase hover:bg-transparent hover:border hover:border-bronze hover:text-bronze transition-all duration-300">
                  Talk To Us
                </button>
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
      
      {/* Mute/Unmute Control - Only show if video is present */}
      {!contentOnly && (
        <motion.button
          onClick={handleToggleMute}
          disabled={!videoReady}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: videoReady ? 1 : 0.5, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5, ease: "easeOut" }}
          whileHover={videoReady ? { scale: 1.1 } : {}}
          whileTap={videoReady ? { scale: 0.95 } : {}}
          className="absolute bottom-[34px] left-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-bronze backdrop-blur-sm border border-transparent hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl group disabled:cursor-not-allowed disabled:opacity-50"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-navy group-hover:text-navy transition-colors duration-300" />
          ) : (
            <Volume2 className="w-5 h-5 text-navy group-hover:text-navy transition-colors duration-300" />
          )}
        </motion.button>
      )}
    </div>
  );
};
