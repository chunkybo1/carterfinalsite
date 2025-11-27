"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const results = [
  {
    id: 1,
    amount: "$850,000",
    type: "Auto Accident",
    description: "Secured compensation for client with permanent injuries after truck collision.",
  },
  {
    id: 2,
    amount: "$1,200,000",
    type: "Workplace Injury",
    description: "Construction worker fell from scaffolding due to negligence.",
  },
  {
    id: 3,
    amount: "$450,000",
    type: "Slip & Fall",
    description: "Elderly client suffered hip fracture in poorly maintained grocery store.",
  },
];

export const Results = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-navy"
          >
            Real Results for Real People
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm text-gray-500"
          >
            Past results don&apos;t guarantee future outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-light-grey p-8 rounded-lg border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-bold text-gold mb-2">{result.amount}</div>
              <div className="text-lg font-bold text-navy mb-4 uppercase tracking-wide">
                {result.type}
              </div>
              <p className="text-gray-700">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};




