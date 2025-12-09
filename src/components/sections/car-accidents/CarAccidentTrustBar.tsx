"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Scale, DollarSign, Star, Languages } from "lucide-react";

const trustMetrics = [
  {
    icon: Scale,
    value: "16 YEARS",
    label: "Fighting Insurers",
  },
  {
    icon: DollarSign,
    value: "MILLIONS",
    label: "Recovered",
  },
  {
    icon: Star,
    value: "4.9 STARS",
    label: "100+ Google Reviews",
  },
  {
    icon: Languages,
    value: "SE HABLA",
    label: "Español",
  },
];

export const CarAccidentTrustBar = () => {
  return (
    <section className="relative w-full bg-navy py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <metric.icon className="h-8 w-8 md:h-10 md:w-10 text-bronze mx-auto mb-4" />
              <div className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-white/70">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

