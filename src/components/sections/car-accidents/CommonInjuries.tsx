"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const injuries = [
  {
    title: "Whiplash & Neck Injuries",
    description: "Often dismissed as \"minor\" — but can cause chronic pain, headaches, and limited mobility for years. We document the full impact.",
  },
  {
    title: "Back & Spinal Injuries",
    description: "Herniated discs, spinal cord damage, nerve compression. May require surgery and long-term care. These cases demand significant compensation.",
  },
  {
    title: "Traumatic Brain Injury (TBI)",
    description: "Concussions can have lasting cognitive effects — memory issues, difficulty concentrating, personality changes — even from \"minor\" impacts.",
  },
  {
    title: "Broken Bones & Fractures",
    description: "Medical bills, surgery, physical therapy, lost wages while you recover — it adds up fast. Insurance will try to minimize. We don't let them.",
  },
  {
    title: "Internal Injuries",
    description: "Organ damage, internal bleeding — these may not present symptoms immediately. Always get checked. Document everything.",
  },
  {
    title: "Psychological Trauma",
    description: "PTSD, anxiety, depression after an accident are real injuries — and compensable under Texas law. Your mental health matters.",
  },
];

export const CommonInjuries = () => {
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
          INJURIES WE SEE
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 text-center"
        >
          Some Injuries Don't Show Up for Days
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 text-center"
        >
          Adrenaline masks pain. Soft tissue damage doesn't appear on X-rays. Insurance companies use these facts against you — claiming your injuries "aren't that bad" or "weren't caused by the accident."
          <br /><br />
          We've seen this before. We know how to fight it.
        </motion.p>

        {/* Injury List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {injuries.map((injury, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-bronze"
            >
              <h3 className="text-xl font-serif font-bold text-navy mb-3">
                {injury.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {injury.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
          className="bg-red-50 border-2 border-red-200 p-6 md:p-8 rounded-lg max-w-3xl mx-auto mb-8"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-serif font-bold text-red-900 mb-3">
                GET MEDICAL ATTENTION IMMEDIATELY
              </h3>
              <p className="text-red-800 leading-relaxed">
                Even if you feel "fine" after an accident, see a doctor within 24-48 hours. Insurance companies will use any gap in treatment to argue your injuries aren't serious — or weren't caused by the accident.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Internal Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <Link
            href="/practice-areas/wrongful-death"
            className="inline-flex items-center gap-2 text-bronze font-bold hover:text-bronze/80 transition-colors"
          >
            Lost a loved one in a car accident? Learn about wrongful death claims →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

