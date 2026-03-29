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

const SLUG = "medical-malpractice";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

export const metadata: Metadata = {
  title: "El Paso Medical Malpractice Lawyer — Free Consultation | Carter Law Wins",
  description: "Victim of medical negligence in El Paso? The Carter Law Firm, P.C. takes on hospitals and doctors. Specialized expertise. Free consultation. No fee unless we win.",
  openGraph: {
    title: "El Paso Medical Malpractice Lawyer — Free Consultation | Carter Law Wins",
    description: "Victim of medical negligence in El Paso? The Carter Law Firm, P.C. takes on hospitals and doctors. Free consultation. No fee unless we win.",
    type: "website",
    url: `https://carterlawwins.com${DATA.href}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Medical Malpractice Lawyer — Free Consultation | Carter Law Wins",
    description: "Victim of medical negligence in El Paso? Free consultation. No fee unless we win. (915) 621-1818.",
  },
  alternates: {
    canonical: `https://carterlawwins.com${DATA.href}`,
  },
};

export default async function MedicalMalpracticePage(props: {
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
        { name: "Medical Malpractice", url: "https://carterlawwins.com/practice-areas/medical-malpractice" },
      ]} />
      <LegalServiceSchema
        name="El Paso Medical Malpractice Lawyer"
        description="Carter Law Firm, P.C. represents victims of medical negligence in El Paso, TX. Free consultation. No fee unless we win."
        url="https://carterlawwins.com/practice-areas/medical-malpractice"
      />
      <Header />
      
      <PracticeAreaHero 
        eyebrow="MEDICAL ERROR OR NEGLIGENCE?"
        title="El Paso Medical Malpractice Lawyer — Free Consultation"
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
