"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Truck, Bike, Heart, User } from "lucide-react";

const relatedAreas = [
  {
    icon: Truck,
    title: "Truck & 18-Wheeler Accidents",
    description: "Commercial trucks cause catastrophic injuries. Different federal regulations apply. We know how to hold trucking companies accountable.",
    href: "/practice-areas/truck-accidents",
  },
  {
    icon: Bike,
    title: "Motorcycle Accidents",
    description: "Riders face unique dangers — and unique bias from insurance adjusters. We fight the \"biker bias\" and get riders the compensation they deserve.",
    href: "/practice-areas/motorcycle-accidents",
  },
  {
    icon: Heart,
    title: "Wrongful Death",
    description: "When a car accident takes a life, families deserve justice — and financial security. We handle these sensitive cases with the care they require.",
    href: "/practice-areas/wrongful-death",
  },
  {
    icon: User,
    title: "Pedestrian Accidents",
    description: "Hit while walking or crossing the street? You have rights — and drivers have responsibilities. We make sure they're held to them.",
    href: "/practice-areas/pedestrian-accidents",
  },
];

export const RelatedPracticeAreas = () => {
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
          WE ALSO HANDLE
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-12 text-center"
        >
          Related Practice Areas
        </motion.h2>

        {/* Related Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {relatedAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <area.icon className="h-10 w-10 text-bronze mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif font-bold text-navy mb-3">
                {area.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                {area.description}
              </p>
              <Link
                href={area.href}
                className="text-bronze font-bold hover:text-bronze/80 transition-colors text-sm uppercase tracking-wide"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-bronze font-bold hover:text-bronze/80 transition-colors"
          >
            View All Practice Areas →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

