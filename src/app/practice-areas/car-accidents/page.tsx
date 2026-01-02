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

const SLUG = "car-accidents";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

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

export default async function CarAccidentPage(props: {
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
        eyebrow="CAR ACCIDENT IN EL PASO?"
        title="The Insurance Company Has Lawyers. Now You Do Too."
        description="After a wreck, you're hurt, stressed, and facing an insurance company that wants to pay you as little as possible. Thomas Carter makes sure that doesn't happen."
      />

      {/* 2. Results Gallery: Floating 3D Carousel */}
      <ResultsGallery />

      {/* 3. Introduction Section: The Human Element */}
      <MeetAdvocate 
        headline="Standing Beside You, Every Step of the Way."
        text="Thomas Carter founded this firm on a simple principle: every client deserves a champion. With over 16 years in the courtroom, he has built a reputation for taking the cases other firms shy away from. He doesn't just manage cases; he fights battles."
      />

      {/* 4. The Process Map: Steps 01, 02, 03 */}
      <ProcessMap />

      {/* 5. Grid Refactor: Types of Cases */}
      <CaseTypesGrid caseTypes={caseTypesWithIcons.slice(0, 9)} />

      {/* 6. Strategic FAQ: Accordion */}
      <StrategicFAQ faqs={DATA.faqs} />

      {/* Footer CTA */}
      <PracticeAreaCTA 
        title="Your Recovery Starts With a Single Call."
        subtitle="Don't navigate the complex legal system alone. Put 16 years of trial experience in your corner today."
      />

      <Footer />
    </main>
  );
}

// Remove local getIconForCaseType function as it's now imported

