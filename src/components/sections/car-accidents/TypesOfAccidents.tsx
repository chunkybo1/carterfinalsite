"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Car, Navigation, Route, UserX, CarTaxiFront, ShieldAlert } from "lucide-react";
import Link from "next/link";

const accidentTypes = [
  {
    icon: Car,
    title: "Rear-End Collisions",
    description: "The most common accident — and insurance companies fight them hardest, claiming \"minor impact\" and \"pre-existing conditions.\" We prove otherwise.",
    href: "/practice-areas/car-accidents/rear-end",
  },
  {
    icon: Navigation,
    title: "Intersection Accidents",
    description: "T-bone crashes, failed yields, red-light runners. Liability disputes are common — documentation is critical. We know how to build an airtight case.",
    href: "/practice-areas/car-accidents/intersection",
  },
  {
    icon: Route,
    title: "Highway & High-Speed Crashes",
    description: "I-10, US-54, Loop 375. Higher speeds mean worse injuries. These cases demand aggressive representation and thorough accident reconstruction.",
    href: "/practice-areas/car-accidents/highway",
  },
  {
    icon: UserX,
    title: "Hit and Run",
    description: "When the other driver flees, your own insurance should cover you — but they'll still fight. We make them honor your policy.",
    href: "/practice-areas/car-accidents/hit-and-run",
  },
  {
    icon: CarTaxiFront,
    title: "Rideshare Accidents",
    description: "Uber and Lyft accidents involve multiple insurance policies and corporate legal teams. We know how to navigate the complexity and get you covered.",
    href: "/practice-areas/car-accidents/uber-lyft",
  },
  {
    icon: ShieldAlert,
    title: "Uninsured/Underinsured Drivers",
    description: "When the at-fault driver has no coverage, your UM/UIM policy kicks in. But getting your own insurer to pay is another fight entirely. We handle it.",
    href: "/practice-areas/car-accidents/uninsured",
  },
];

export const TypesOfAccidents = () => {
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
          CASES WE TAKE
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-12 text-center"
        >
          Every Wreck Is Different. Our Fight Doesn't Change.
        </motion.h2>

        {/* Accident Type Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {accidentTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/15 transition-colors group"
            >
              <type.icon className="h-10 w-10 text-bronze mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">
                {type.title}
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                {type.description}
              </p>
              <Link
                href={type.href}
                className="text-bronze font-bold hover:text-bronze/80 transition-colors text-sm uppercase tracking-wide"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Closing Line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Not sure where your accident fits? Call us. We'll tell you straight — no pressure, no runaround.
          </p>
          <a
            href="tel:9156211818"
            className="inline-block px-6 py-3 bg-bronze text-navy font-bold uppercase tracking-wider hover:bg-bronze/90 transition-colors"
          >
            Free Case Evaluation →
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

