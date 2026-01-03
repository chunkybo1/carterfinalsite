import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PracticeAreaHero } from "@/components/sections/practice-areas/PracticeAreaHero";
import { MeetAdvocate } from "@/components/sections/practice-areas/MeetAdvocate";
import { ProcessMap } from "@/components/sections/practice-areas/ProcessMap";
import { CaseTypesGrid } from "@/components/sections/practice-areas/CaseTypesGrid";
import { ResultsGallery } from "@/components/sections/practice-areas/ResultsGallery";
import { StrategicFAQ } from "@/components/sections/practice-areas/StrategicFAQ";
import { PracticeAreaCTA } from "@/components/sections/practice-areas/PracticeAreaCTA";
import { PRACTICE_AREAS_DATA } from "@/lib/services-data";
import { getIconForCaseType } from "@/utils/practiceAreaHelpers";

const SLUG = "dog-bites";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

export const metadata: Metadata = {
  title: "El Paso Dog Bite Lawyer | Animal Attack Attorney | Carter Law Wins",
  description: "Bitten or attacked by a dog in El Paso? Attorney Thomas Carter fights for victims of animal attacks. Free consultation. No fee unless we win. (915) 621-1818",
  openGraph: {
    title: "El Paso Dog Bite Lawyer | Animal Attack Attorney | Carter Law Wins",
    description: "Bitten or attacked by a dog in El Paso? Attorney Thomas Carter fights for victims of animal attacks. Free consultation. No fee unless we win.",
    type: "website",
    url: "https://carterlawwins.com/practice-areas/dog-bites",
  },
  alternates: {
    canonical: "https://carterlawwins.com/practice-areas/dog-bites",
  },
};

export default async function DogBitePage(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  // Next.js 15+ requires unwrapping params and searchParams
  await props.params;
  await props.searchParams;

  if (!DATA) return null;

  const caseTypesWithIcons = DATA.caseTypes.map((type) => ({
    title: type,
    iconName: getIconForCaseType(type),
  }));

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      
      {/* 1. Hero Section: Video + Form */}
      <PracticeAreaHero 
        eyebrow="DOG BITE IN EL PASO?"
        title="Serious Injuries Demand Serious Advocacy."
        description="Animal attacks leave deep scars, physical and emotional. Thomas Carter holds negligent owners accountable and fights for the compensation you need to heal."
      />

      {/* 2. Results Gallery: Floating 3D Carousel */}
      <ResultsGallery />

      {/* 3. Introduction Section: The Human Element */}
      <MeetAdvocate 
        headline="Compassionate Care. Fierce Representation."
        text="A dog attack is a traumatic event, especially for children. Thomas Carter approaches every case with the compassion victims deserve and the tenacity needed to win against insurance companies."
      />

      {/* 4. The Process Map: Steps 01, 02, 03 */}
      <ProcessMap />

      {/* 5. Grid Refactor: Types of Cases */}
      <CaseTypesGrid caseTypes={caseTypesWithIcons.slice(0, 9)} />

      {/* 6. Strategic FAQ: Accordion */}
      <StrategicFAQ faqs={DATA.faqs} />

      {/* Footer CTA */}
      <PracticeAreaCTA 
        title="Start Your Recovery Today."
        subtitle="Don't let an owner's negligence leave you with a lifetime of bills and scars. Put 16 years of trial experience in your corner."
      />

      <Footer />
    </main>
  );
}

