"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { AlertTriangle, Phone, Clock, UserX } from "lucide-react";

const tactics = [
  {
    icon: AlertTriangle,
    title: "The Quick Offer",
    whatTheyDo: "Offer a settlement within days — before you know the full extent of your injuries.",
    whatItMeans: "Once you sign, you can't ask for more. Even if your injuries turn out to be worse than you thought.",
  },
  {
    icon: Phone,
    title: "The Recorded Statement",
    whatTheyDo: "Ask for your \"side of the story\" on a recorded call.",
    whatItMeans: "They're looking for anything they can use to reduce or deny your claim. One wrong word costs you thousands.",
  },
  {
    icon: Clock,
    title: "The Delay Game",
    whatTheyDo: "Drag out the process for months, requesting document after document.",
    whatItMeans: "They know you have bills. They're counting on you to get desperate and accept less.",
  },
  {
    icon: UserX,
    title: "The Blame Shift",
    whatTheyDo: "Suggest you were partially at fault — even when you weren't.",
    whatItMeans: "Texas allows reduced compensation if you share fault. They'll manufacture doubt to cut your payout.",
  },
];

export const WhatYoureUpAgainst = () => {
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
          THE TRUTH ABOUT INSURANCE COMPANIES
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-center"
        >
          They're Not On Your Side. They Never Were.
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 text-center"
        >
          Within hours of your accident, the other driver's insurance company will call you. They'll sound helpful. Concerned. They might even offer you a quick settlement.
          <br /><br />
          Here's what they won't tell you:
        </motion.p>

        {/* Tactic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {tactics.map((tactic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-lg"
            >
              <tactic.icon className="h-10 w-10 text-bronze mb-4" />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
                {tactic.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-bronze uppercase tracking-wide mb-2">
                    What they do:
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    {tactic.whatTheyDo}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-bronze uppercase tracking-wide mb-2">
                    What it means:
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    {tactic.whatItMeans}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8 text-center"
        >
          Thomas Carter spent years as a criminal defense attorney going head-to-head with prosecutors and government lawyers. He knows how the other side thinks — because he's been across the table from people just like them.
        </motion.p>

        {/* Internal Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-bronze font-bold hover:text-bronze/80 transition-colors"
          >
            Learn more about Thomas's background →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

