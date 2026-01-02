import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { TheCourtroomEducation } from "@/components/sections/about/TheCourtroomEducation";
import { ThePath } from "@/components/sections/about/ThePath";

export default async function AboutPage(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  // Next.js 15+ requires unwrapping params and searchParams
  await props.params;
  await props.searchParams;

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      <AboutHero />
      <TheCourtroomEducation />
      <ThePath />
      <Footer />
    </main>
  );
}

