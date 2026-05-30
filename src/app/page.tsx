"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ResultsMarquee } from "@/components/sections/ResultsMarquee";
import { HeroCTA } from "@/components/sections/HeroCTA";
import { EvaluatorEntry } from "@/components/sections/landing/EvaluatorEntry";
import { TruckAccidentEvaluator } from "@/components/sections/landing/TruckAccidentEvaluator";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { I10Corridor } from "@/components/sections/I10Corridor";
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
      <ResultsMarquee />
      <I10Corridor />
      <Biography />
      <PracticeAreas />
      <HeroCTA />

      <section
        id="quiz"
        className={`py-24 lg:py-32 relative transition-colors duration-700 ${evaluatorOpen ? "bg-black" : "bg-brand-navy-tint"}`}
        aria-labelledby="evaluator-heading"
      >
        <AnimatePresence>
          {evaluatorOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0 overflow-hidden"
            >
              <Image
                src="/process-2.jpg"
                alt="Truck accident"
                fill
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <p className="eyebrow eyebrow-on-dark">Free Evaluation</p>
            </div>
            <h2
              id="evaluator-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.05]"
            >
              Find out what your case is actually worth.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 font-serif leading-relaxed max-w-2xl">
              Sixty seconds. No registration. The same questions Thomas asks new clients in the first call.
            </p>
          </div>
        </div>

        {/* Single-question gate — front-loads the 7-step evaluator with a
           binary qualifier so crisis-stage users don't have to commit to a
           form to start. Yes -> opens evaluator and scrolls to it. */}
        <div className="relative z-10">
          {!evaluatorOpen && <EvaluatorEntry onYes={handleStartEvaluator} />}

          {evaluatorOpen && (
            <div ref={evaluatorRef} className="scroll-mt-24">
              <TruckAccidentEvaluator />
            </div>
          )}
        </div>
      </section>

      <GoogleReviews />
      <FinalCTA />
      <Footer />
    </main>
  );
}
