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
  title: "Dallas Personal Injury Lawyer | Free Consultation | Carter Law Wins",
  description: "Injured in Dallas? The Carter Law Firm, P.C. fights for accident victims across Texas. Licensed in TX, AZ & NM. Free consultation. No fee unless we win.",
  openGraph: {
    title: "Dallas Personal Injury Lawyer | Free Consultation | Carter Law Wins",
    description: "Injured in Dallas? Thomas Carter is a veteran Texas trial lawyer ready to fight for your recovery. Free consultation. No fee unless we win.",
    type: "website",
    url: "https://www.carterlawwins.com/locations/dallas",
  },
  alternates: {
    canonical: "https://www.carterlawwins.com/locations/dallas",
  },
};

export default function DallasPage() {
  const faqs = [
    {
      question: "Why hire an El Paso-based firm for a Dallas accident?",
      answer: "Thomas Carter is a licensed Texas attorney with extensive experience in courts across the state, including Dallas. Our firm's selective caseload allows us to provide more personalized and aggressive representation than many large, high-volume firms in the DFW area."
    },
    {
      question: "What is the statute of limitations for personal injury in Texas?",
      answer: "In Texas, you generally have two years from the date of the accident to file a personal injury lawsuit. However, certain factors can affect this deadline, so it's critical to consult an attorney as soon as possible."
    },
    {
      question: "Will I have to travel to El Paso for my case?",
      answer: "No. We utilize modern technology to handle most aspects of your case remotely, and we will travel to Dallas whenever a physical presence is required for hearings, depositions, or trial."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.carterlawwins.com" },
        { name: "Locations", url: "https://www.carterlawwins.com/locations" },
        { name: "Dallas", url: "https://www.carterlawwins.com/locations/dallas" },
      ]} />
      <LegalServiceSchema
        name="Dallas Personal Injury Lawyer"
        description="Carter Law Firm, P.C. represents accident victims in Dallas, TX. Veteran Texas trial lawyer. Free consultation. No fee unless we win."
        url="https://www.carterlawwins.com/locations/dallas"
      />
      <Header />
      
      <PracticeAreaHero 
        eyebrow="INJURED IN DALLAS?"
        title="Dallas Personal Injury Lawyer — Free Consultation"
        description="From the DFW metroplex to the entire state of Texas, Thomas Carter provides elite legal representation for those injured by negligence. Put a proven champion in your corner."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Texas Trial Experience. Dallas Dedication."
        text="Thomas Carter has spent over 16 years litigating complex personal injury cases throughout Texas. He understands the nuances of Texas law and the tactics used by insurance companies to devalue claims. In Dallas, he brings that same level of fierce advocacy to every client he represents."
      />

      <StrategicFAQ faqs={faqs} />

      <PracticeAreaCTA 
        title="Your Dallas Recovery Starts Now."
        subtitle="Don't settle for less than you deserve. Contact a veteran Texas personal injury attorney who knows how to win."
      />

      <Footer />
    </main>
  );
}
