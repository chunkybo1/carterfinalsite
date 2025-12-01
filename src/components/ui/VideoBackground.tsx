"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoUrl?: string;
  overlayOpacity?: number; // Control darkness of the overlay (0-1)
  className?: string;
}

export const VideoBackground = ({
  videoUrl = "https://www.youtube.com/embed/b4bjhJ-hPxU?autoplay=1&mute=1&controls=0&loop=1&playlist=b4bjhJ-hPxU&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&vq=hd1080",
  overlayOpacity = 0.4,
  className,
}: VideoBackgroundProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden bg-navy", className)}>
      {/* Ken Burns Effect Wrapper */}
      <motion.div
        className="w-full h-full"
        animate={prefersReducedMotion ? {} : { scale: [1.0, 1.08] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        {/* Video Element */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.7778vh] min-w-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[1.35]"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ filter: "saturate(0.9)" }}
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


