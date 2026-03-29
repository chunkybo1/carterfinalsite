import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import { Header } from "@/components/layout/Header";
import { ServicesHero } from "@/components/sections/services/ServicesHero";

export const metadata: Metadata = {
  title: "Personal Injury Practice Areas in El Paso | Carter Law Firm, P.C.",
  description: "Carter Law Firm, P.C. handles car accidents, trucking accidents, wrongful death, medical malpractice, slip and fall, and more in El Paso, TX. Free consultation — no fee unless we win.",
  alternates: {
    canonical: "https://www.carterlawwins.com/services",
  },
  openGraph: {
    title: "Personal Injury Practice Areas in El Paso | Carter Law Firm, P.C.",
    description: "Carter Law Firm, P.C. handles car accidents, trucking accidents, wrongful death, medical malpractice, slip and fall, and more in El Paso, TX. Free consultation.",
    type: "website",
    url: "https://www.carterlawwins.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Injury Practice Areas in El Paso | Carter Law Firm, P.C.",
    description: "Car accidents, trucking accidents, wrongful death, and more. Free consultation in El Paso. No fee unless we win.",
  },
};
import { PracticeAreaNavigation } from "@/components/sections/services/PracticeAreaNavigation";
import { CarterApproach } from "@/components/sections/services/CarterApproach";
import { ConsultationCTA } from "@/components/sections/services/ConsultationCTA";

export default async function ServicesPage(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  // Next.js 15+ requires unwrapping params and searchParams
  await props.params;
  await props.searchParams;

  return (
    <main className="min-h-screen flex flex-col">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.carterlawwins.com" },
        { name: "Practice Areas", url: "https://www.carterlawwins.com/services" },
      ]} />
      <Header />
      <ServicesHero />
      <PracticeAreaNavigation />
      <CarterApproach />
      <ConsultationCTA />
    </main>
  );
}

