import type { Metadata } from "next";
import { LandingHeader } from "@/components/sections/landing/LandingHeader";
import { LandingFooter } from "@/components/sections/landing/LandingFooter";
import { LandingHero } from "@/components/sections/landing/LandingHero";
import { TrustBar } from "@/components/sections/landing/TrustBar";
import { LeadQualifier } from "@/components/sections/landing/LeadQualifier";
import { WhyTruckAccidentsAreDifferent } from "@/components/sections/landing/WhyTruckAccidentsAreDifferent";
import { CarterDifference } from "@/components/sections/landing/CarterDifference";
import { WhatHappensNext } from "@/components/sections/landing/WhatHappensNext";
import { TestimonialBlock } from "@/components/sections/landing/TestimonialBlock";
import { FinalCTA } from "@/components/sections/landing/FinalCTA";
import { ResultsGallery } from "@/components/sections/practice-areas/ResultsGallery";

export const metadata: Metadata = {
  title: "El Paso 18-Wheeler Accident Lawyer | Carter Law Wins",
  description: "Injured in a commercial truck accident? Don't let the insurance company minimize your claim. Thomas Carter fights for maximum compensation. Free case review.",
  alternates: {
    canonical: "https://carterlawwins.com/truck-accident-lawyer",
  },
  openGraph: {
    title: "El Paso 18-Wheeler Accident Lawyer | Carter Law Wins",
    description: "Injured in a commercial truck accident? Don't let the insurance company minimize your claim. Thomas Carter fights for maximum compensation. Free case review.",
    type: "website",
    url: "https://carterlawwins.com/truck-accident-lawyer",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso 18-Wheeler Accident Lawyer | Carter Law Wins",
    description: "Injured in a commercial truck accident? Free case review. Thomas Carter fights for maximum compensation.",
  },
};

export default function TruckAccidentLandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-navy text-white">
      <LandingHeader />
      
      <LandingHero />
      
      <TrustBar />
      
      <LeadQualifier />
      
      <WhyTruckAccidentsAreDifferent />
      
      <ResultsGallery />
      
      <CarterDifference />
      
      <WhatHappensNext />
      
      <TestimonialBlock />
      
      <FinalCTA />
      
      <LandingFooter />
    </main>
  );
}
