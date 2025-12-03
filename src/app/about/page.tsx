import { Header } from "@/components/layout/Header";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { TheLegacy } from "@/components/sections/about/TheLegacy";
import { ThePath } from "@/components/sections/about/ThePath";
import { ThePhilosophy } from "@/components/sections/about/ThePhilosophy";
import { TheCommunity } from "@/components/sections/about/TheCommunity";
import { CredentialsRecognition } from "@/components/sections/about/CredentialsRecognition";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <AboutHero />
      <TheLegacy />
      <ThePath />
      <ThePhilosophy />
      <TheCommunity />
      <CredentialsRecognition />
      <AboutCTA />
    </main>
  );
}

