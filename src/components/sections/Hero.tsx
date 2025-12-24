"use client";

import React from "react";
import { HeroSection } from "@/components/sections/hero-section";

export const Hero = ({ 
  showContent = true,
  videoOnly = false,
  contentOnly = false
}: { 
  showContent?: boolean;
  videoOnly?: boolean;
  contentOnly?: boolean;
}) => {
  return (
    <div className="relative w-full">
      <HeroSection 
        showContent={showContent} 
        videoOnly={videoOnly}
        contentOnly={contentOnly}
      />
    </div>
  );
};
