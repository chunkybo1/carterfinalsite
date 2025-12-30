import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PracticeAreaHero } from "@/components/sections/practice-areas/PracticeAreaHero";
import { MeetAdvocate } from "@/components/sections/practice-areas/MeetAdvocate";
import { ProcessMap } from "@/components/sections/practice-areas/ProcessMap";
import { CaseTypesGrid } from "@/components/sections/practice-areas/CaseTypesGrid";
import { StrategicFAQ } from "@/components/sections/practice-areas/StrategicFAQ";
import { PracticeAreaCTA } from "@/components/sections/practice-areas/PracticeAreaCTA";
import { PRACTICE_AREAS_DATA } from "@/lib/services-data";
import { getIconForCaseType } from "@/utils/practiceAreaHelpers";

const SLUG = "pedestrian-accidents";
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

export default function PedestrianAccidentsPage() {
  const caseTypesWithIcons = DATA.caseTypes.map((type) => ({
    title: type,
    iconName: getIconForCaseType(type),
  }));

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      
      <PracticeAreaHero 
        eyebrow="STRUCK BY A VEHICLE?"
        title="Justice for the Most Vulnerable on the Road."
        description="When a vehicle strikes a pedestrian, the results are often catastrophic. Thomas Carter fights to ensure you aren't just another statistic."
      />

      <MeetAdvocate 
        headline="A Voice for Injured Pedestrians."
        text="Thomas Carter understands the life-altering impact of pedestrian accidents. He provides the compassionate support you need and the fierce litigation required to hold negligent drivers accountable."
      />

      <ProcessMap />

      <CaseTypesGrid caseTypes={caseTypesWithIcons.slice(0, 9)} />

      <StrategicFAQ faqs={DATA.faqs} />

      <PracticeAreaCTA 
        title="We're Ready to Fight for Your Future."
        subtitle="You shouldn't have to carry the burden of an accident you didn't cause. Let us help you find the way forward."
      />

      <Footer />
    </main>
  );
}
