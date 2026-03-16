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
    <section className="bg-bronze py-4 sm:py-5 border-t border-white/10 shadow-lg relative z-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {STATS.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-2 sm:gap-3 text-navy font-serif font-bold uppercase tracking-wide text-[10px] sm:text-xs md:text-sm text-center"
            >
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.5} />
              <span>{stat.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
