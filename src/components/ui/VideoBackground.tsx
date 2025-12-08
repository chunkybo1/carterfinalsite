"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoUrl?: string;
  overlayOpacity?: number; // Control darkness of the overlay (0-1)
  className?: string;
  pauseWhenNotVisible?: boolean; // Pause animation when section is not in viewport
}

export const VideoBackground = ({
  videoUrl = "https://www.youtube.com/embed/b4bjhJ-hPxU?autoplay=1&mute=1&controls=0&loop=1&playlist=b4bjhJ-hPxU&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&vq=hd1080",
  overlayOpacity = 0.4,
  className,
  pauseWhenNotVisible = false,
}: VideoBackgroundProps) => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  // Optimize: Use once: true to prevent constant re-checking, or use larger margin to reduce callbacks
  const isInView = useInView(containerRef, { once: !pauseWhenNotVisible, margin: pauseWhenNotVisible ? "-10%" : "-20%" });

  // Only animate when in view (if pauseWhenNotVisible is true)
  // Use state to prevent animation restart on every viewport check
  const [shouldAnimate, setShouldAnimate] = useState(!pauseWhenNotVisible);
  
  useEffect(() => {
    if (pauseWhenNotVisible) {
      setShouldAnimate(isInView);
    }
  }, [isInView, pauseWhenNotVisible]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 w-full h-full overflow-hidden bg-navy", className)}>
      {/* Ken Burns Effect Wrapper - Optimized: GPU acceleration and smoother animation */}
      <motion.div
        className="w-full h-full"
        animate={prefersReducedMotion || !shouldAnimate ? {} : { scale: [1.0, 1.08] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          willChange: "transform",
          transform: "translateZ(0)", // Force GPU acceleration
          backfaceVisibility: "hidden",
        }}
      >
        {/* Video Element - Optimized: Remove conflicting scale, use single transform */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: "translateZ(0)", // Force GPU layer
            willChange: "transform",
          }}
        >
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.7778vh] min-w-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ 
              filter: "saturate(0.9)",
              transform: "translateZ(0) scale(1.35)", // Use inline style for better performance
              willChange: "transform",
            }}
            allowFullScreen
          />
        </div>
      </motion.div>

      {/* Navy Overlay */}
      <div 
        className="absolute inset-0 bg-navy z-10 pointer-events-none" 
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};


