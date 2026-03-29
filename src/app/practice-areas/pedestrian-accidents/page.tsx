import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbSchema, LegalServiceSchema } from "@/components/seo/SchemaOrg";
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

const SLUG = "pedestrian-accidents";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

export const metadata: Metadata = {
  title: "El Paso Pedestrian Accident Lawyer — Free Consultation | Carter Law Wins",
  description: "Struck by a vehicle as a pedestrian in El Paso? The Carter Law Firm, P.C. fights for injured pedestrians. Free consultation. No fee unless we win. (915) 621-1818.",
  openGraph: {
    title: "El Paso Pedestrian Accident Lawyer — Free Consultation | Carter Law Wins",
    description: "Struck by a vehicle as a pedestrian in El Paso? The Carter Law Firm, P.C. fights for injured pedestrians. Free consultation. No fee unless we win.",
    type: "website",
    url: `https://www.carterlawwins.com${DATA.href}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Pedestrian Accident Lawyer — Free Consultation | Carter Law Wins",
    description: "Struck by a vehicle as a pedestrian in El Paso? Free consultation. No fee unless we win. (915) 621-1818.",
  },
  alternates: {
    canonical: `https://www.carterlawwins.com${DATA.href}`,
  },
};

export default async function PedestrianAccidentsPage(props: {
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
      <FAQPageSchema faqs={DATA.faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.carterlawwins.com" },
        { name: "Practice Areas", url: "https://www.carterlawwins.com/services" },
        { name: "Pedestrian Accidents", url: "https://www.carterlawwins.com/practice-areas/pedestrian-accidents" },
      ]} />
      <LegalServiceSchema
        name="El Paso Pedestrian Accident Lawyer"
        description="Carter Law Firm, P.C. represents pedestrian accident victims in El Paso, TX. Free consultation. No fee unless we win."
        url="https://www.carterlawwins.com/practice-areas/pedestrian-accidents"
      />
      <Header />
      
      <PracticeAreaHero 
        eyebrow="STRUCK BY A VEHICLE?"
        title="El Paso Pedestrian Accident Lawyer — Free Consultation"
        description="When a vehicle strikes a pedestrian, the results are often catastrophic. Thomas Carter fights to ensure you aren't just another statistic."
      />

      <ResultsGallery />

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
