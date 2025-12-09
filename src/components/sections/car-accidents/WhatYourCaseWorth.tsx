"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { DollarSign, Briefcase, Heart, Car, Activity, Award } from "lucide-react";

const compensationTypes = [
  {
    icon: DollarSign,
    title: "Medical Expenses",
    description: "ER visits, hospital stays, surgery, physical therapy, prescriptions, medical equipment, and future medical care you'll need because of the accident.",
  },
  {
    icon: Briefcase,
    title: "Lost Wages",
    description: "Money you've already lost because you couldn't work — plus future earning capacity if your injuries prevent you from returning to your job or career.",
  },
  {
    icon: Heart,
    title: "Pain and Suffering",
    description: "Compensation for physical pain and emotional distress — not just receipts. This is where having a trial-ready attorney makes the biggest difference.",
  },
  {
    icon: Car,
    title: "Property Damage",
    description: "Repair or replacement value of your vehicle and any personal property damaged in the accident.",
  },
  {
    icon: Activity,
    title: "Loss of Enjoyment",
    description: "When injuries prevent you from activities you used to enjoy — hobbies, sports, time with family — that loss has value.",
  },
  {
    icon: Award,
    title: "Punitive Damages",
    description: "In rare cases involving extreme negligence — like drunk driving or intentional recklessness — Texas allows additional damages to punish the wrongdoer.",
  },
];

export const WhatYourCaseWorth = () => {
  return (
    <section className="relative w-full bg-[#FDFBF8] py-20 md:py-32">
      <Container>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-4 text-center"
        >
          COMPENSATION
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 text-center"
        >
          What Can You Recover After a Car Accident?
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 text-center"
        >
          Every case is different. The value depends on your injuries, your recovery, and the facts of the accident. But here's what Texas law allows you to seek:
        </motion.p>

        {/* Compensation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {compensationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-bronze"
            >
              <type.icon className="h-10 w-10 text-bronze mb-4" />
              <h3 className="text-xl font-serif font-bold text-navy mb-3">
                {type.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Framing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
          className="bg-navy/5 border-l-4 border-bronze p-8 rounded-lg max-w-3xl mx-auto mb-8"
        >
          <p className="text-lg md:text-xl font-serif italic text-navy text-center">
            "We've recovered millions for injured El Pasoans. But we don't measure success in dollars alone — we measure it in whether you got what was actually fair."
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Wondering what your case is worth? Free consultation. We'll evaluate your situation and give you a straight answer — no pressure, no obligation.
          </p>
          <a
            href="tel:9156211818"
            className="inline-block px-6 py-3 bg-bronze text-navy font-bold uppercase tracking-wider hover:bg-bronze/90 transition-colors"
          >
            Get My Free Case Evaluation
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

