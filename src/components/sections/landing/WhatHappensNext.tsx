"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Phone, UserCheck, Scale } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "You Call or Submit a Case Review",
    description: "Takes 2 minutes. No commitment. Available 24/7.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Thomas Personally Reviews Your Case",
    description: "You speak directly with the attorney. No intake staff, no runaround. Same day response.",
  },
  {
    number: "03",
    icon: Scale,
    title: "We Investigate Immediately",
    description: "We front all costs. Our fee comes only from your recovery. You pay nothing until we win.",
  },
];

export const WhatHappensNext = () => {
  return (
    <section className="py-20 bg-light-grey">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            What Happens Next?
          </h2>
          <p className="text-steel font-sans max-w-2xl mx-auto">
            We move fast because the trucking companies do. Here is our process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-bronze/20 -z-0" />

          {STEPS.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center mb-8 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-bronze rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
                <step.icon className="w-10 h-10 text-navy" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-navy mb-3 px-4">
                {step.title}
              </h3>
              <p className="text-steel font-sans text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
