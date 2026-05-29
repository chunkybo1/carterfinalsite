"use client";

import React, { useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { HeroCTA } from "@/components/sections/HeroCTA";
import { EvaluatorEntry } from "@/components/sections/landing/EvaluatorEntry";
import { TruckAccidentEvaluator } from "@/components/sections/landing/TruckAccidentEvaluator";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { ResultsGallery } from "@/components/sections/practice-areas/ResultsGallery";
import { Biography } from "@/components/sections/Biography";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home(props: {
  params: Promise<unknown>;
  searchParams: Promise<unknown>;
}) {
  // Next.js 15+ requires unwrapping params and searchParams; declaring and
  // unwrapping them prevents an enumeration warning from dev tools.
  React.use(props.params);
  React.use(props.searchParams);

  const containerRef = useRef<HTMLDivElement>(null);
  const evaluatorRef = useRef<HTMLDivElement>(null);
  const [evaluatorOpen, setEvaluatorOpen] = useState(false);

  const handleStartEvaluator = () => {
    setEvaluatorOpen(true);
    // Defer to next tick so the evaluator has mounted before scrolling.
    requestAnimationFrame(() => {
      evaluatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main
      ref={containerRef}
      className="min-h-screen flex flex-col relative bg-white"
    >
      <Header />

      <Hero showContent={true} />
      <HeroCTA />

      <section
        className="py-16 lg:py-20 bg-light-grey"
        aria-labelledby="evaluator-heading"
      >
        <div className="max-w-7xl mx-auto px-6 mb-12">
          {/* Numbered opener — "00 · Free Evaluation" — primer for the
             01/02/03 triplet that follows on the page. */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-marker" aria-hidden="true">
                00
              </span>
              <span
                aria-hidden="true"
                className="h-[2px] w-12 bg-bronze"
              />
              <p className="eyebrow">Free Evaluation</p>
            </div>
            <h2
              id="evaluator-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-navy leading-[1.05]"
            >
              Find out what your case is actually worth.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-steel font-serif italic leading-relaxed max-w-2xl">
              Sixty seconds. No registration. The same questions Thomas asks new clients in the first call.
            </p>
          </div>
        </div>

        {/* Single-question gate — front-loads the 7-step evaluator with a
           binary qualifier so crisis-stage users don't have to commit to a
           form to start. Yes -> opens evaluator and scrolls to it. */}
        {!evaluatorOpen && <EvaluatorEntry onYes={handleStartEvaluator} />}

        {evaluatorOpen && (
          <div ref={evaluatorRef} className="scroll-mt-24">
            <TruckAccidentEvaluator />
          </div>
        )}
      </section>

      <ResultsGallery />
      <Biography />
      <PracticeAreas />
      <GoogleReviews />
      <FinalCTA />
      <Footer />
    </main>
  );
}
