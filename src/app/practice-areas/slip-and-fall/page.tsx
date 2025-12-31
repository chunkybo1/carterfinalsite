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

const SLUG = "slip-and-fall";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

export const metadata: Metadata = {
  title: `${DATA.title} | El Paso Lawyer | Carter Law Wins`,
  description: DATA.shortDescription,
  openGraph: {
    title: `${DATA.title} | El Paso Lawyer | Carter Law Wins`,
    description: DATA.shortDescription,
    type: "website",
    url: `https://carterlawwins.com${DATA.href}`,
  },
  alternates: {
    canonical: `https://carterlawwins.com${DATA.href}`,
  },
};

export default function SlipAndFallPage() {
  if (!DATA) return null;

  const caseTypesWithIcons = DATA.caseTypes.map((type) => ({
    title: type,
    iconName: getIconForCaseType(type),
  }));

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      
      <PracticeAreaHero 
        eyebrow="INJURED ON SOMEONE'S PROPERTY?"
        title="Property Owners Have a Duty to Keep You Safe."
        description="When negligence leads to a fall, the consequences can be life-altering. Thomas Carter holds property owners accountable for the hazards they ignore."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Proven Results in Premises Liability."
        text="Thomas Carter knows how to cut through the excuses of property owners and their insurers. He investigates the maintenance logs and security footage to prove exactly how negligence caused your injury."
      />

      <ProcessMap />

      <CaseTypesGrid caseTypes={caseTypesWithIcons.slice(0, 9)} />

      <StrategicFAQ faqs={DATA.faqs} />

      <PracticeAreaCTA 
        title="Don't Let Them Ignore Your Injury."
        subtitle="We have the trial experience to hold even the largest retailers and property managers accountable. Let's start your recovery today."
      />

      <Footer />
    </main>
  );
}
