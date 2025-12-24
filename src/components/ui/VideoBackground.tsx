"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { HTML5Video } from "./HTML5Video";

interface VideoBackgroundProps {
  videoSrc?: string | string[]; // Video source path(s) - can be single path or array for multiple formats
  overlayOpacity?: number; // Control darkness of the overlay (0-1)
  className?: string;
  pauseWhenNotVisible?: boolean; // Pause animation when section is not in viewport
  shouldAnimate?: boolean; // Externally control animation (e.g. disable Ken Burns)
}

export const VideoBackground = ({
  videoSrc = "/videos/hero-video.mp4", // Default to the only existing video
  overlayOpacity = 0.4,
  className,
  pauseWhenNotVisible = false,
  shouldAnimate: externalShouldAnimate = true,
}: VideoBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Optimize: Use larger margin to reduce observer callbacks, once: false to track visibility changes
  const isInView = useInView(containerRef, { 
    once: false, // Track visibility changes for pausing
    margin: pauseWhenNotVisible ? "-20%" : "-30%", // Larger margin reduces callbacks
    amount: 0.1, // Only trigger when 10% visible
  });

  // Determine if we should animate (always true unless pauseWhenNotVisible is enabled and not in view)
  // Also respects external override
  const shouldAnimate = externalShouldAnimate && (pauseWhenNotVisible ? isInView : true);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 w-full h-full overflow-hidden bg-navy", className)} style={{ left: 0, right: 0, width: '100%' }}>
      {/* HTML5 Video with Ken Burns Effect */}
      <HTML5Video
        videoSrc={videoSrc}
        autoplay={true}
        loop={true}
        muted={true}
        playsInline={true}
        shouldAnimate={shouldAnimate}
        pauseWhenNotVisible={pauseWhenNotVisible}
        containerRef={containerRef}
        isInView={isInView}
      />

      {/* Navy Overlay */}
      <div 
        className="absolute inset-0 bg-navy z-10 pointer-events-none" 
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};
