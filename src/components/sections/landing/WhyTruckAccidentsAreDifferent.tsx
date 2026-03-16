"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Scale, Users, FileWarning, ShieldAlert } from "lucide-react";

const DIFFERENCES = [
  {
    icon: Scale,
    title: "Federal Regulations",
    description: "The insurer will use FMCSA rules against you unless you know them.",
  },
  {
    icon: Users,
    title: "Multiple Defendants",
    description: "Driver, trucking company, cargo owner, and maintenance provider can all be liable.",
  },
  {
    icon: FileWarning,
    title: "Evidence Disappears",
    description: "Black box data and driver logs can be legally destroyed within 72 hours.",
  },
  {
    icon: ShieldAlert,
    title: "Corporate Defense",
    description: "Trucking companies deploy rapid response teams to the scene immediately.",
  },
];

export const WhyTruckAccidentsAreDifferent = () => {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="text-bronze font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
              This Is Not A Standard Claim
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
              An 18-Wheeler Accident Is a Corporate Legal Battle. From Day One.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-sans">
              Trucking companies operate under federal law, carry millions in insurance, and keep defense lawyers on retainer. 
              The moment an accident happens, their team activates. Driver logs get &quot;corrected.&quot; Black boxes get pulled. 
              Witnesses get approached. You deserve someone who knows exactly what they&apos;re doing — and fights just as hard.
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DIFFERENCES.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-bronze/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bronze/30 transition-colors">
                  <item.icon className="w-6 h-6 text-bronze" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
