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

const SLUG = "bicycle-accidents";
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

export default function BicycleAccidentsPage() {
  const caseTypesWithIcons = DATA.caseTypes.map((type) => ({
    title: type,
    iconName: getIconForCaseType(type),
  }));

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      
      <PracticeAreaHero 
        eyebrow="INJURED WHILE CYCLING?"
        title="Protecting the Rights of El Paso's Cyclists."
        description="Insurance companies often try to blame the cyclist. Thomas Carter flips the script and holds negligent drivers accountable for the damage they cause."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Justice for Those on Two Wheels."
        text="Cyclists have the same rights to the road as anyone else. When those rights are violated, Thomas Carter provides the aggressive advocacy needed to secure full compensation for your injuries and your bike."
      />

      <ProcessMap />

      <CaseTypesGrid caseTypes={caseTypesWithIcons.slice(0, 9)} />

      <StrategicFAQ faqs={DATA.faqs} />

      <PracticeAreaCTA 
        title="Ready to Secure Your Recovery?"
        subtitle="Put a champion for cyclists in your corner. Let's build your case together today."
      />

      <Footer />
    </main>
  );
}
