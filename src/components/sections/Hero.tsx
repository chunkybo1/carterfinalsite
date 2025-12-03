"use client";

import React from "react";
import { HeroSection } from "@/components/sections/hero-section";

export const Hero = () => {
  return (
    <div className="relative w-full">
      <HeroSection showContent={true} />
    </div>
  );
};
