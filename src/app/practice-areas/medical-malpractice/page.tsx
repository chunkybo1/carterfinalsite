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

const SLUG = "medical-malpractice";
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

export default function MedicalMalpracticePage() {
  if (!DATA) return null;

  const caseTypesWithIcons = DATA.caseTypes.map((type) => ({
    title: type,
    iconName: getIconForCaseType(type),
  }));

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      
      <PracticeAreaHero 
        eyebrow="MEDICAL ERROR OR NEGLIGENCE?"
        title="Doctors Make Mistakes. We Make Them Answer for It."
        description="Medical malpractice cases are complex and highly defended. Thomas Carter has the specialized expertise and the resources to take on hospitals and win."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Strategic Litigation for Medical Victims."
        text="Thomas Carter works with leading medical experts to cut through the institutional silence of hospitals. He meticulously builds cases that expose the truth and recover the compensation needed for life-altering injuries."
      />

      <ProcessMap />

      <CaseTypesGrid caseTypes={caseTypesWithIcons.slice(0, 9)} />

      <StrategicFAQ faqs={DATA.faqs} />

      <PracticeAreaCTA 
        title="Justice for Medical Negligence Starts Here."
        subtitle="You trusted them with your health. When that trust is violated, we're here to hold them accountable and secure your future."
      />

      <Footer />
    </main>
  );
}
