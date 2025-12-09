"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Phone, FileSearch, Gavel, DollarSign } from "lucide-react";

const processSteps = [
  {
    number: "1",
    icon: Phone,
    title: "Free Consultation",
    description: "You tell us what happened. We listen, ask questions, and tell you straight whether you have a case. No pressure. No charge. Takes about 15 minutes.",
  },
  {
    number: "2",
    icon: FileSearch,
    title: "We Build Your Case",
    description: "We investigate the accident, gather evidence, obtain medical records, and handle all communication with insurance companies. You focus on healing. We focus on fighting.",
  },
  {
    number: "3",
    icon: Gavel,
    title: "We Fight",
    description: "Negotiation first. Trial if necessary. Most cases settle — but we prepare every case like it's going to court. Insurance companies know this. That's why our offers are higher.",
  },
  {
    number: "4",
    icon: DollarSign,
    title: "You Get Paid",
    description: "You receive your compensation. We only get paid if you do — a percentage of what we recover. No hidden fees. No hourly bills. No surprises.",
  },
];

export const TheProcess = () => {
  return (
    <section className="relative w-full bg-navy py-20 md:py-32">
      <Container>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-4 text-center"
        >
          HOW IT WORKS
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-12 text-center"
        >
          What Happens When You Call Carter Law
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-bronze/30 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-bronze text-navy font-bold text-2xl flex items-center justify-center mb-4 relative z-10 border-4 border-navy">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <step.icon className="h-8 w-8 text-bronze mb-4" />
                  
                  {/* Content */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-serif font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-white/90 text-center mt-12 max-w-2xl mx-auto"
        >
          No fee to talk. No fee unless we win. You risk nothing — except the settlement you deserve.
        </motion.p>
      </Container>
    </section>
  );
};

