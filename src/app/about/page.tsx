import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { TheCourtroomEducation } from "@/components/sections/about/TheCourtroomEducation";
import { ThePath } from "@/components/sections/about/ThePath";

export const metadata: Metadata = {
  title: "About Thomas Carter | El Paso Personal Injury Attorney | Carter Law Firm, P.C.",
  description: "Meet Thomas Carter — El Paso personal injury attorney with 16+ years of trial experience. Raised by advocates, trained in the courtroom. Licensed in TX, AZ & NM.",
  alternates: {
    canonical: "https://www.carterlawwins.com/about",
  },
  openGraph: {
    title: "About Thomas Carter | El Paso Personal Injury Attorney | Carter Law Firm, P.C.",
    description: "Meet Thomas Carter — El Paso personal injury attorney with 16+ years of trial experience. Raised by advocates, trained in the courtroom. Licensed in TX, AZ & NM.",
    type: "website",
    url: "https://www.carterlawwins.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Thomas Carter | El Paso Personal Injury Attorney",
    description: "Meet Thomas Carter — El Paso personal injury attorney with 16+ years of trial experience. Licensed in TX, AZ & NM.",
  },
};

export default async function AboutPage(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  // Next.js 15+ requires unwrapping params and searchParams
  await props.params;
  await props.searchParams;

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.carterlawwins.com" },
        { name: "About Thomas Carter", url: "https://www.carterlawwins.com/about" },
      ]} />
      <Header />
      <AboutHero />
      <TheCourtroomEducation />
      <ThePath />
      <Footer />
    </main>
  );
}

