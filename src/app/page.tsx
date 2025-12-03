import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { CarterDifference } from "@/components/sections/CarterDifference";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Process } from "@/components/sections/Process";
import { Biography } from "@/components/sections/Biography";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <CarterDifference />
      <Biography />
      <PracticeAreas />
      <Process />
    </main>
  );
}
