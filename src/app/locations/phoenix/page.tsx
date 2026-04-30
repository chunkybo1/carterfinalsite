import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PracticeAreaHero } from "@/components/sections/practice-areas/PracticeAreaHero";
import { MeetAdvocate } from "@/components/sections/practice-areas/MeetAdvocate";
import { ResultsGallery } from "@/components/sections/practice-areas/ResultsGallery";
import { StrategicFAQ } from "@/components/sections/practice-areas/StrategicFAQ";
import { PracticeAreaCTA } from "@/components/sections/practice-areas/PracticeAreaCTA";
import { FAQPageSchema, BreadcrumbSchema, LegalServiceSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Phoenix Personal Injury Lawyer | Free Consultation | Carter Law Wins",
  description: "Injured in Phoenix? The Carter Law Firm, P.C. fights for accident victims in Arizona. Licensed in AZ, TX & NM. Free consultation. No fee unless we win.",
  openGraph: {
    title: "Phoenix Personal Injury Lawyer | Free Consultation | Carter Law Wins",
    description: "Injured in Phoenix? Thomas Carter is licensed in Arizona and ready to fight for your recovery. Free consultation. No fee unless we win.",
    type: "website",
    url: "https://www.carterlawwins.com/locations/phoenix",
  },
  alternates: {
    canonical: "https://www.carterlawwins.com/locations/phoenix",
  },
};

export default function PhoenixPage() {
  const faqs = [
    {
      question: "Do I need a local Phoenix lawyer for my accident?",
      answer: "While we are based in El Paso, Thomas Carter is fully licensed in Arizona and has extensive experience handling cases in Phoenix and across the state. We provide the same high-level, aggressive representation to our Arizona clients as we do in Texas."
    },
    {
      question: "What is the statute of limitations for personal injury in Arizona?",
      answer: "In Arizona, you generally have two years from the date of the injury to file a personal injury lawsuit. It's important to act quickly to ensure all evidence is preserved and your rights are protected."
    },
    {
      question: "How much is my Phoenix personal injury case worth?",
      answer: "The value of your case depends on the severity of your injuries, medical expenses, lost wages, and the impact on your quality of life. We fight for maximum compensation for all recoverable damages."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.carterlawwins.com" },
        { name: "Locations", url: "https://www.carterlawwins.com/locations" },
        { name: "Phoenix", url: "https://www.carterlawwins.com/locations/phoenix" },
      ]} />
      <LegalServiceSchema
        name="Phoenix Personal Injury Lawyer"
        description="Carter Law Firm, P.C. represents accident victims in Phoenix, AZ. Licensed in Arizona. Free consultation. No fee unless we win."
        url="https://www.carterlawwins.com/locations/phoenix"
      />
      <Header />
      
      <PracticeAreaHero 
        eyebrow="INJURED IN PHOENIX?"
        title="Phoenix Personal Injury Lawyer — Free Consultation"
        description="Thomas Carter is licensed in Arizona and brings 16 years of trial experience to your Phoenix personal injury claim. We take on the big insurers so you don't have to."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Licensed in Arizona. Dedicated to Your Recovery."
        text="Thomas Carter's multi-state licensure allows him to serve clients across the Southwest. In Phoenix, he applies his relentless advocacy and deep legal knowledge to help accident victims secure the justice and compensation they deserve."
      />

      <StrategicFAQ faqs={faqs} />

      <PracticeAreaCTA 
        title="Your Phoenix Recovery Starts Here."
        subtitle="Don't let insurance companies dictate your future. Put an experienced Arizona-licensed trial lawyer in your corner today."
      />

      <Footer />
    </main>
  );
}
