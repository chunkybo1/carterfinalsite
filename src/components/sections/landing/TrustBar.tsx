"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, DollarSign, Clock, ShieldCheck } from "lucide-react";

const STATS = [
  {
    icon: DollarSign,
    text: "$2.1M+ Recovered in Truck Cases",
  },
  {
    icon: ShieldCheck,
    text: "No Fee Unless We Win",
  },
  {
    icon: Clock,
    text: "Available 24/7",
  },
  {
    icon: CheckCircle2,
    text: "Free Consultation",
  },
];

export const TrustBar = () => {
  return (
    <section className="bg-bronze py-6 sm:py-8 md:py-10 border-t border-white/10 shadow-lg relative z-20">
      <Container className="2xl:max-w-[90vw]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-12">
          {STATS.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 text-navy font-sans font-extrabold uppercase tracking-[0.15em] text-xs sm:text-sm md:text-base lg:text-lg text-center"
            >
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 shrink-0" strokeWidth={3} />
              <span className="opacity-100">{stat.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
