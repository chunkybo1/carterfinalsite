import type { Metadata } from "next";
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
import { FAQPageSchema, BreadcrumbSchema, LegalServiceSchema } from "@/components/seo/SchemaOrg";

const SLUG = "trucking-accidents";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

export const metadata: Metadata = {
  title: "El Paso Trucking Accident Lawyer — Free Consultation | Carter Law Wins",
  description: "Injured by a commercial truck in El Paso? The Carter Law Firm, P.C. takes on trucking companies and their insurers. 16 years trial experience. No fee unless we win. (915) 621-1818.",
  openGraph: {
    title: "El Paso Trucking Accident Lawyer — Free Consultation | Carter Law Wins",
    description: "Injured by a commercial truck in El Paso? The Carter Law Firm, P.C. takes on trucking companies and their insurers. No fee unless we win.",
    type: "website",
    url: `https://www.carterlawwins.com${DATA.href}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Trucking Accident Lawyer — Free Consultation | Carter Law Wins",
    description: "Injured by a commercial truck in El Paso? Free consultation. No fee unless we win. (915) 621-1818.",
  },
  alternates: {
    canonical: `https://www.carterlawwins.com${DATA.href}`,
  },
};

export default async function TruckingAccidentsPage(props: {
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
        { name: "Trucking Accidents", url: "https://www.carterlawwins.com/practice-areas/trucking-accidents" },
      ]} />
      <LegalServiceSchema
        name="El Paso Trucking Accident Lawyer"
        description="Carter Law Firm, P.C. represents victims of commercial truck accidents in El Paso, TX. Free consultation. No fee unless we win."
        url="https://www.carterlawwins.com/practice-areas/trucking-accidents"
      />
      <Header />
      
      <PracticeAreaHero 
        title="El Paso Trucking Accident Lawyer — Free Consultation"
        description="Trucking companies have immediate response teams on the scene. You need Thomas Carter to level the playing field and protect your future."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Compassion for Victims. Fearless Against Corporations."
        text="Thomas Carter understands the specialized regulations that govern the trucking industry. He doesn't just look at the crash; he investigates the logs, the maintenance, and the corporate negligence that led to your injury."
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
        title="Don't Face the Trucking Giants Alone."
        subtitle="We have the resources and the trial experience to take on the largest commercial insurers and win."
      />

      <Footer />
    </main>
  );
}
