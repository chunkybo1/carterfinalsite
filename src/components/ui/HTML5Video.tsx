"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface HTML5VideoProps {
  videoSrc: string | string[]; // Single source or array of sources (for multiple formats)
  poster?: string; // Poster image URL
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
  shouldAnimate?: boolean; // Control Ken Burns effect
  onLoadedData?: () => void; // Callback when video is ready
  pauseWhenNotVisible?: boolean; // Pause when not in viewport
  containerRef?: React.RefObject<HTMLDivElement | null> | React.MutableRefObject<HTMLDivElement | null> | React.RefObject<HTMLDivElement> | React.MutableRefObject<HTMLDivElement>; // For visibility tracking
  isInView?: boolean; // Visibility state from parent
  videoRef?: React.RefObject<HTMLVideoElement | null> | React.MutableRefObject<HTMLVideoElement | null> | React.RefObject<HTMLVideoElement> | React.MutableRefObject<HTMLVideoElement>; // Optional ref to expose video element
}

export const HTML5Video = ({
  videoSrc,
  poster,
  autoplay = true,
  loop = true,
  muted = true,
  playsInline = true,
  className = "",
  shouldAnimate = true,
  onLoadedData,
  pauseWhenNotVisible = false,
  containerRef,
  isInView = true,
  videoRef: externalVideoRef,
}: HTML5VideoProps) => {
  const prefersReducedMotion = useReducedMotion();
  const internalVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef = externalVideoRef || internalVideoRef;
  const [isReady, setIsReady] = useState(false);

  // Handle video ready state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsReady(true);
      onLoadedData?.();
    };

    const handleCanPlay = () => {
      // Try to play if autoplay is enabled
      if (autoplay) {
        video.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [autoplay, muted, onLoadedData]);

  // Sync muted prop with video element property
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Some browsers ignore attribute changes for muted after playback starts,
    // so we set the property directly.
    video.muted = muted;
  }, [muted, videoRef]);

  // Handle pause/play based on visibility
  useEffect(() => {
    if (!pauseWhenNotVisible) return;
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {
        // Silently handle play restrictions
      });
    } else {
      video.pause();
    }
  }, [isInView, pauseWhenNotVisible, videoRef]);

  // Normalize video sources - handle both string and array
  const videoSources = Array.isArray(videoSrc) ? videoSrc : [videoSrc];

  return (
    <motion.div
      className={`w-full h-full ${className}`}
      animate={prefersReducedMotion || !shouldAnimate ? {} : { scale: [1.0, 1.08] }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
      style={{
        willChange: shouldAnimate ? "transform" : "auto",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          transform: "translateZ(0)",
          willChange: shouldAnimate ? "transform" : "auto",
        }}
      >
        <video
          ref={videoRef}
          className="absolute top-[calc(50%+10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          playsInline={true}
          poster={poster}
          preload="auto" 
          style={{
            filter: "saturate(0.9)",
            transform: "translateZ(0)",
            willChange: shouldAnimate ? "transform" : "auto",
            width: "177.7778vh", // 16:9 aspect ratio based on viewport height
            height: "100vh",
            minWidth: "100%", // Ensure it covers width
            minHeight: "100%", // Ensure it covers height
            objectFit: "cover", // Fill container while maintaining aspect ratio
          }}
        >
          {videoSources.map((src, index) => {
            // Determine type from file extension
            const type = src.endsWith('.webm') 
              ? 'video/webm' 
              : src.endsWith('.mp4')
              ? 'video/mp4'
              : 'video/mp4'; // Default to mp4
            
            return <source key={index} src={src} type={type} />;
          })}
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};
