"use client";

import React, { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { HeroCTA } from "@/components/sections/HeroCTA";
import { TruckAccidentEvaluator } from "@/components/sections/landing/TruckAccidentEvaluator";
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
      
      <section className="py-24 bg-[#F2F4F7]">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
            Free Truck Accident Case Evaluation
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Find out what your claim is actually worth before you sign anything. Take this free 60-second evaluation to see if you qualify for a maximum payout.
          </p>
        </div>
        <TruckAccidentEvaluator />
      </section>

      <ResultsGallery />
      <JurisdictionBar />
      <Biography />
      <PracticeAreas />
      <GoogleReviews />
      <Footer />
    </main>
  );
}
