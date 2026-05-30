"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Search, Scale, Trophy } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Listen & Investigate",
    description: "We start by listening to your story and immediately securing the evidence needed to win.",
    icon: Search,
  },
  {
    id: "02",
    title: "Strategize & Litigate",
    description: "Thomas Carter builds a custom trial strategy designed to hold the opposition accountable.",
    icon: Scale,
  },
  {
    id: "03",
    title: "Recovery & Justice",
    description: "We fight for the maximum compensation possible so you can rebuild your life.",
    icon: Trophy,
  },
];

export const ProcessMap = () => {
  return (
    <section className="relative w-full bg-[#F9F9F9] py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <p className="eyebrow mb-4">Our Strategic Journey</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-[1.05] mb-6">
            The path to justice.
          </h2>
          <div className="h-[2px] w-20 bg-bronze mx-auto" />
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-bronze/20 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full bg-white border border-bronze/30 shadow-xl flex items-center justify-center relative z-10">
                      <Icon className="w-8 h-8 text-brand-gold" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                    {step.title}
                  </h3>
                  <p className="text-navy/70 leading-relaxed font-sans max-w-sm">
                    {step.description}
                  </p>

                  {/* Mobile Connecting Arrow */}
                  {index < STEPS.length - 1 && (
                    <div className="mt-12 lg:hidden">
                      <div className="w-[1px] h-12 bg-bronze/30 mx-auto" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

