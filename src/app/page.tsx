"use client";

import React, { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { HeroCTA } from "@/components/sections/HeroCTA";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { ResultsGallery } from "@/components/sections/practice-areas/ResultsGallery";
import { JurisdictionBar } from "@/components/sections/JurisdictionBar";
import { Biography } from "@/components/sections/Biography";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Footer } from "@/components/layout/Footer";

export default function Home(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  // Next.js 15+ requires unwrapping params and searchParams
  // Even if unused, declaring and unwrapping them can prevent "enumeration" warnings from dev tools
  React.use(props.params);
  React.use(props.searchParams);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="min-h-screen flex flex-col relative bg-white">
      <Header />
      
      <Hero showContent={true} />
      <HeroCTA />
      
      <ResultsGallery />
      <JurisdictionBar />
      <Biography />
      <PracticeAreas />
      <GoogleReviews />
      <Footer />
    </main>
  );
}
