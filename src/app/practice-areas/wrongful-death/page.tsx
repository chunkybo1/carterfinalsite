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

const SLUG = "wrongful-death";
const DATA = PRACTICE_AREAS_DATA.find((area) => area.id === SLUG);

if (!DATA) {
  throw new Error(`Data for ${SLUG} not found`);
}

export const metadata: Metadata = {
  title: "El Paso Wrongful Death Lawyer — Free Consultation | Carter Law Wins",
  description: "Lost a loved one due to negligence in El Paso? The Carter Law Firm, P.C. fights for families seeking justice and accountability. Free consultation. No fee unless we win.",
  openGraph: {
    title: "El Paso Wrongful Death Lawyer — Free Consultation | Carter Law Wins",
    description: "Lost a loved one due to negligence in El Paso? The Carter Law Firm, P.C. fights for families seeking justice. Free consultation. No fee unless we win.",
    type: "website",
    url: `https://www.carterlawwins.com${DATA.href}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Wrongful Death Lawyer — Free Consultation | Carter Law Wins",
    description: "Families trust The Carter Law Firm, P.C. for wrongful death cases in El Paso. Free consultation. No fee unless we win.",
  },
  alternates: {
    canonical: `https://www.carterlawwins.com${DATA.href}`,
  },
};

export default async function WrongfulDeathPage(props: {
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
        { name: "Wrongful Death", url: "https://www.carterlawwins.com/practice-areas/wrongful-death" },
      ]} />
      <LegalServiceSchema
        name="El Paso Wrongful Death Lawyer"
        description="Carter Law Firm, P.C. represents families of wrongful death victims in El Paso, TX. Free consultation. No fee unless we win."
        url="https://www.carterlawwins.com/practice-areas/wrongful-death"
      />
      <Header />
      
      <PracticeAreaHero 
        eyebrow="FACING THE UNTHINKABLE?"
        title="El Paso Wrongful Death Lawyer — Compassionate, Fierce Advocacy"
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
