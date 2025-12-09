import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CarAccidentHero } from "@/components/sections/car-accidents/CarAccidentHero";
import { CarAccidentTrustBar } from "@/components/sections/car-accidents/CarAccidentTrustBar";
import { TheMomentAfter } from "@/components/sections/car-accidents/TheMomentAfter";
import { WhatYoureUpAgainst } from "@/components/sections/car-accidents/WhatYoureUpAgainst";
import { HowThomasFights } from "@/components/sections/car-accidents/HowThomasFights";
import { TypesOfAccidents } from "@/components/sections/car-accidents/TypesOfAccidents";
import { CommonInjuries } from "@/components/sections/car-accidents/CommonInjuries";
import { WhatToDoAfter } from "@/components/sections/car-accidents/WhatToDoAfter";
import { WhatYourCaseWorth } from "@/components/sections/car-accidents/WhatYourCaseWorth";
import { TheProcess } from "@/components/sections/car-accidents/TheProcess";
import { ClientStories } from "@/components/sections/car-accidents/ClientStories";
import { CarAccidentFAQ } from "@/components/sections/car-accidents/CarAccidentFAQ";
import { RelatedPracticeAreas } from "@/components/sections/car-accidents/RelatedPracticeAreas";
import { CarAccidentCTA } from "@/components/sections/car-accidents/CarAccidentCTA";

export const metadata: Metadata = {
  title: "El Paso Car Accident Lawyer | Free Consult | Carter Law Wins",
  description: "Injured in a car accident in El Paso? Attorney Thomas Carter has 16 years of trial experience fighting insurance companies. Free consultation. No fee unless we win. (915) 621-1818",
  openGraph: {
    title: "El Paso Car Accident Lawyer | Free Consult | Carter Law Wins",
    description: "Injured in a car accident in El Paso? Attorney Thomas Carter has 16 years of trial experience fighting insurance companies. Free consultation. No fee unless we win.",
    type: "website",
    url: "https://carterlawwins.com/practice-areas/car-accidents",
  },
  alternates: {
    canonical: "https://carterlawwins.com/practice-areas/car-accidents",
  },
};

export default function CarAccidentPage() {
  // Schema markup for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://carterlawwins.com/#organization",
    name: "Carter Law Wins",
    image: "https://carterlawwins.com/carter-logo-white.png",
    url: "https://carterlawwins.com",
    telephone: "+19156211818",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "El Paso",
      addressRegion: "TX",
      addressCountry: "US",
    },
  };

  const attorneySchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Thomas Carter",
    "@id": "https://carterlawwins.com/#attorney",
    url: "https://carterlawwins.com",
    telephone: "+19156211818",
    image: "https://carterlawwins.com/thomas-carter.jpg",
    worksFor: {
      "@id": "https://carterlawwins.com/#organization",
    },
    areaServed: {
      "@type": "State",
      name: ["Texas", "Arizona", "New Mexico"],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Car Accident Lawyer",
    provider: {
      "@id": "https://carterlawwins.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "El Paso",
    },
    description: "Car accident legal representation in El Paso, Texas. Free consultation. No fee unless we win.",
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="min-h-screen flex flex-col">
        <Header />
        <CarAccidentHero />
        <CarAccidentTrustBar />
        <TheMomentAfter />
        <WhatYoureUpAgainst />
        <HowThomasFights />
        <TypesOfAccidents />
        <CommonInjuries />
        <WhatToDoAfter />
        <WhatYourCaseWorth />
        <TheProcess />
        <ClientStories />
        <CarAccidentFAQ />
        <RelatedPracticeAreas />
        <CarAccidentCTA />
        <Footer />
      </main>
    </>
  );
}

