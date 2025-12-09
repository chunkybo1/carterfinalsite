"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Phone, Stethoscope, Camera, PhoneOff, Share2, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Call 911",
    description: "Always get a police report, even for \"minor\" accidents. The report documents the scene, witnesses, and the other driver's information. Insurance companies take claims more seriously with a report on file.",
  },
  {
    number: "2",
    icon: Stethoscope,
    title: "Get Medical Attention",
    description: "Go to the ER or urgent care — today, not tomorrow. Delays in treatment give insurers an excuse to claim your injuries aren't accident-related. Even if you feel okay, get checked.",
  },
  {
    number: "3",
    icon: Camera,
    title: "Document Everything",
    description: "Photos of damage, injuries, the scene. Get witness names and numbers. Save the other driver's insurance information. Evidence disappears fast. Your phone is your best tool in the first hour.",
  },
  {
    number: "4",
    icon: PhoneOff,
    title: "Don't Talk to Their Insurance",
    description: "The other driver's insurer will call. They'll sound helpful. Don't give a recorded statement. Anything you say can and will be used to reduce your claim. Politely decline and call a lawyer first.",
  },
  {
    number: "5",
    icon: Share2,
    title: "Don't Post on Social Media",
    description: "Insurance adjusters will check your Facebook, Instagram, everything. That photo of you smiling at dinner? They'll use it to say you're \"not really hurt.\" Stay quiet until your case is resolved.",
  },
  {
    number: "6",
    icon: FileText,
    title: "Call a Lawyer Before You Sign Anything",
    description: "Quick settlement offers are designed to underpay you. Once you sign a release, you can never ask for more — even if your injuries worsen. Get legal advice first.",
  },
];

export const WhatToDoAfter = () => {
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
          PROTECT YOUR CLAIM
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-center"
        >
          What To Do After a Car Accident in El Paso
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 text-center"
        >
          The steps you take in the hours and days after an accident can make or break your case. Here's what we tell every client:
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-[#FDFBF8] p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-bronze text-navy font-bold text-xl flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <step.icon className="h-8 w-8 text-bronze" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">
                Step {step.number}: {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
          className="bg-bronze/20 backdrop-blur-sm border-2 border-bronze p-8 rounded-lg max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Not sure what to do next?
          </h3>
          <p className="text-white/90 mb-6">
            Call (915) 621-1818 right now. Thomas will tell you exactly what steps to take — free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9156211818"
              className="inline-block px-6 py-3 bg-bronze text-navy font-bold uppercase tracking-wider hover:bg-bronze/90 transition-colors"
            >
              Call Now
            </a>
            <a
              href="tel:9156211818"
              className="inline-block px-6 py-3 border-2 border-bronze text-bronze font-bold uppercase tracking-wider hover:bg-bronze/10 transition-colors"
            >
              Get Free Advice
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

