import { Header } from "@/components/layout/Header";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { PracticeAreaNavigation } from "@/components/sections/services/PracticeAreaNavigation";
import { PracticeAreaDeepDive } from "@/components/sections/services/PracticeAreaDeepDive";
import { CarterApproach } from "@/components/sections/services/CarterApproach";
import { ResultsSection } from "@/components/sections/services/ResultsSection";
import { ConsultationCTA } from "@/components/sections/services/ConsultationCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ServicesHero />
      <PracticeAreaNavigation />
      <PracticeAreaDeepDive />
      <CarterApproach />
      <ResultsSection />
      <ConsultationCTA />
    </main>
  );
}

