import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbSchema, LegalServiceSchema } from "@/components/seo/SchemaOrg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PracticeAreaHero } from "@/components/sections/practice-areas/PracticeAreaHero";
import { MeetAdvocate } from "@/components/sections/practice-areas/MeetAdvocate";
import { PracticeAreaOverview } from "@/components/sections/practice-areas/PracticeAreaOverview";
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
  title: "El Paso Bicycle Accident Lawyer — Free Consultation | Carter Law Wins",
  description: "Injured in a bicycle accident in El Paso? The Carter Law Firm, P.C. fights for cyclists' rights against negligent drivers and their insurers. No fee unless we win.",
  openGraph: {
    title: "El Paso Bicycle Accident Lawyer — Free Consultation | Carter Law Wins",
    description: "Injured in a bicycle accident in El Paso? The Carter Law Firm, P.C. fights for cyclists' rights. Free consultation. No fee unless we win.",
    type: "website",
    url: `https://www.carterlawwins.com${DATA.href}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Bicycle Accident Lawyer — Free Consultation | Carter Law Wins",
    description: "Injured in a bicycle accident in El Paso? Free consultation. No fee unless we win. (915) 621-1818.",
  },
  alternates: {
    canonical: `https://www.carterlawwins.com${DATA.href}`,
  },
};

export default async function BicycleAccidentsPage(props: {
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
        { name: "Bicycle Accidents", url: "https://www.carterlawwins.com/practice-areas/bicycle-accidents" },
      ]} />
      <LegalServiceSchema
        name="El Paso Bicycle Accident Lawyer"
        description="Carter Law Firm, P.C. represents bicycle accident victims in El Paso, TX. Free consultation. No fee unless we win."
        url="https://www.carterlawwins.com/practice-areas/bicycle-accidents"
      />
      <Header />
      
      <PracticeAreaHero 
        title="El Paso Bicycle Accident Lawyer — Free Consultation"
        description="Insurance companies often try to blame the cyclist. Thomas Carter flips the script and holds negligent drivers accountable for the damage they cause."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Justice for Those on Two Wheels."
        text="Cyclists have the same rights to the road as anyone else. When those rights are violated, Thomas Carter provides the aggressive advocacy needed to secure full compensation for your injuries and your bike."
      />

      <PracticeAreaOverview 
        title={DATA.title}
        overview={DATA.overview}
        whoNeedsThis={DATA.whoNeedsThis}
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
