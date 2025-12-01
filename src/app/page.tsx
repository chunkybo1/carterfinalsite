import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CarterDifference } from "@/components/sections/CarterDifference";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Results } from "@/components/sections/Results";
import { Testimonial } from "@/components/sections/Testimonial";
import { Process } from "@/components/sections/Process";
import { Attorneys } from "@/components/sections/Attorneys";
import { Coverage } from "@/components/sections/Coverage";
import { News } from "@/components/sections/News";
import { Conversion } from "@/components/sections/Conversion";
import { Chatbot } from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <CarterDifference />
      <PracticeAreas />
      <Process />
      <Results />
      <Testimonial />
      <Attorneys />
      <Coverage />
      <News />
      <Conversion />
      <Footer />
      <Chatbot />
    </main>
  );
}
