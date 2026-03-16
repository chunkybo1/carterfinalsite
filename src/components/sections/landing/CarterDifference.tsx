"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Shield, BookOpen, Gavel } from "lucide-react";

const DIFFERENCES = [
  {
    icon: Shield,
    title: "Immediate Evidence Preservation",
    description: "We issue legal holds on driver logs, ELD data, maintenance records, and dashcam footage before they can disappear. Most attorneys wait. We don't.",
  },
  {
    icon: BookOpen,
    title: "Federal Regulation Mastery",
    description: "FMCSA hours-of-service rules. CDL requirements. Cargo securement standards. We know every regulation the company violated — and we prove it.",
  },
  {
    icon: Gavel,
    title: "Trial-Ready from Day One",
    description: "Insurance companies offer more when they know you'll go to trial. We prepare every truck accident case as if a jury will decide it. Because sometimes they do.",
  },
];

export const CarterDifference = () => {
  return (
    <section className="py-20 bg-dark-charcoal text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            We Were Built for Cases Like Yours.
          </h2>
          <div className="w-24 h-1 bg-bronze mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {DIFFERENCES.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-navy border border-bronze/30 flex items-center justify-center mb-6 group-hover:bg-bronze group-hover:border-bronze transition-all duration-300 shadow-lg shadow-black/20">
                <item.icon className="w-8 h-8 text-bronze group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white group-hover:text-bronze transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
