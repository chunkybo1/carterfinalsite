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

const SLUG = "wrongful-death";
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

export default function WrongfulDeathPage() {
  const caseTypesWithIcons = DATA.caseTypes.map((type) => ({
    title: type,
    iconName: getIconForCaseType(type),
  }));

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      
      <PracticeAreaHero 
        eyebrow="FACING THE UNTHINKABLE?"
        title="Holding Negligence Accountable for Your Loss."
        description="Justice cannot replace a loved one, but it can provide your family with the security and the accountability you deserve."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Compassionate Support. Fierce Advocacy."
        text="Thomas Carter approaches wrongful death cases with the utmost respect and dedication. He works tirelessly to uncover the truth and ensure that those responsible are held fully accountable for their actions."
      />

      <ProcessMap />

      <CaseTypesGrid caseTypes={caseTypesWithIcons.slice(0, 9)} />

      <StrategicFAQ faqs={DATA.faqs} />

      <PracticeAreaCTA 
        title="Secure Your Family's Future Today."
        subtitle="We provide the steady hand and the relentless pursuit of justice your family needs during this difficult time."
      />

      <Footer />
    </main>
  );
}
