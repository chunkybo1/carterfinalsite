import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResultsHero } from "@/components/sections/results/ResultsHero";
import { ResultsListing } from "@/components/sections/results/ResultsListing";
import { ResultsCTA } from "@/components/sections/results/ResultsCTA";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Case Results & Settlements | El Paso Personal Injury Lawyer | Carter Law Firm, P.C.",
  description: "Recent case results and settlements from Carter Law Firm in El Paso. $650K trucking, $250K dog bite, and more. No fee unless we win. Free consultation.",
  alternates: {
    canonical: "https://www.carterlawwins.com/results",
    languages: {
      "en-US": "https://www.carterlawwins.com/results",
      "es-MX": "https://www.carterlawwins.com/es/abogado-de-accidentes",
      "x-default": "https://www.carterlawwins.com/results",
    },
  },
  openGraph: {
    title: "Case Results & Settlements | El Paso Personal Injury Lawyer",
    description: "Recent case results and settlements from Carter Law Firm in El Paso. $650K trucking, $250K dog bite, and more.",
    type: "website",
    url: "https://www.carterlawwins.com/results",
  },
};

export default async function ResultsPage(props: {
  params: Promise<unknown>;
  searchParams: Promise<unknown>;
}) {
  await props.params;
  await props.searchParams;

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.carterlawwins.com" },
        { name: "Case Results", url: "https://www.carterlawwins.com/results" },
      ]} />
      <main className="min-h-screen flex flex-col bg-white">
        <Header />
        <ResultsHero />
        <ResultsListing />
        <ResultsCTA />
        <Footer />
      </main>
    </>
  );
}
