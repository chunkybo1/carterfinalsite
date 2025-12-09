"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Shield, Gavel, Phone, Target } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "He's Seen Their Tactics",
    description: "Criminal prosecutors and insurance defense lawyers use similar strategies: delay, deny, blame the victim. Thomas has beaten these tactics for 16 years.",
  },
  {
    icon: Gavel,
    title: "He Actually Tries Cases",
    description: "Insurance companies track which lawyers actually go to court and which ones always settle. They know Thomas isn't bluffing — and that reputation gets better offers before trial.",
  },
  {
    icon: Phone,
    title: "You Talk to Him",
    description: "At the billboard firms, you'll talk to a paralegal. Here, you get Thomas. Your calls get returned. Your questions get answered. Your case gets his attention.",
  },
  {
    icon: Target,
    title: "He Only Takes Cases He Believes In",
    description: "Carter Law isn't a volume operation. Thomas takes fewer cases so he can fight harder on each one. If he takes your case, he believes in it — and he'll prove it.",
  },
];

export const HowThomasFights = () => {
  return (
    <section className="relative w-full bg-[#FDFBF8] py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-4"
            >
              THE CARTER APPROACH
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6"
            >
              A Fighter Who Knows Their Playbook
            </motion.h2>

            {/* Intro Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
            >
              Most personal injury lawyers start their careers chasing ambulances. Thomas started in criminal courtrooms — trying cases against the government, facing prosecutors who had every advantage.
              <br /><br />
              That background changes everything about how he handles your car accident case:
            </motion.p>

            {/* Differentiator List */}
            <div className="space-y-6 mb-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <item.icon className="h-6 w-6 text-bronze flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pull Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="border-l-4 border-bronze pl-6 py-4 bg-white/50 rounded-r-lg"
            >
              <p className="text-lg md:text-xl font-serif italic text-navy mb-2">
                "Insurance adjusters know our name. They know we don't bluff. When they know we're ready and willing to take a case to a jury, settlement offers improve dramatically."
              </p>
              <p className="text-sm font-bold text-bronze">
                — Thomas Carter
              </p>
            </motion.blockquote>

            {/* Internal Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mt-8"
            >
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-bronze font-bold hover:text-bronze/80 transition-colors"
              >
                See what our clients say →
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative h-[500px] w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/30 text-sm uppercase tracking-widest">
                [Thomas Carter Photo]
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

