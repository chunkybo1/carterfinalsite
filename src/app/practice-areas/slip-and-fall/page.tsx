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

const SLUG = "slip-and-fall";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

export const metadata: Metadata = {
  title: "El Paso Slip and Fall Lawyer — Free Consultation | Carter Law Wins",
  description: "Injured in a slip and fall in El Paso? The Carter Law Firm, P.C. holds negligent property owners accountable. Free consultation. No fee unless we win. (915) 621-1818.",
  openGraph: {
    title: "El Paso Slip and Fall Lawyer — Free Consultation | Carter Law Wins",
    description: "Injured in a slip and fall in El Paso? The Carter Law Firm, P.C. holds property owners accountable. Free consultation. No fee unless we win.",
    type: "website",
    url: `https://carterlawwins.com${DATA.href}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Slip and Fall Lawyer — Free Consultation | Carter Law Wins",
    description: "Injured in a slip and fall in El Paso? Free consultation. No fee unless we win. (915) 621-1818.",
  },
  alternates: {
    canonical: `https://carterlawwins.com${DATA.href}`,
  },
};

export default async function SlipAndFallPage(props: {
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
        { name: "Home", url: "https://carterlawwins.com" },
        { name: "Practice Areas", url: "https://carterlawwins.com/services" },
        { name: "Slip and Fall", url: "https://carterlawwins.com/practice-areas/slip-and-fall" },
      ]} />
      <LegalServiceSchema
        name="El Paso Slip and Fall Lawyer"
        description="Carter Law Firm, P.C. represents slip and fall victims in El Paso, TX. Free consultation. No fee unless we win."
        url="https://carterlawwins.com/practice-areas/slip-and-fall"
      />
      <Header />
      
      <PracticeAreaHero 
        eyebrow="INJURED ON SOMEONE'S PROPERTY?"
        title="El Paso Slip and Fall Lawyer — Free Consultation"
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
