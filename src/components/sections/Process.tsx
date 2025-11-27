"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Search, Users, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    id: 1,
    title: "Free Consultation",
    description: "Tell us what happened - no cost, no obligation.",
    icon: Phone,
  },
  {
    id: 2,
    title: "We Investigate",
    description: "We build your case while you focus on recovery.",
    icon: Search,
  },
  {
    id: 3,
    title: "We Negotiate",
    description: "We fight for maximum compensation from insurance companies.",
    icon: Users,
  },
  {
    id: 4,
    title: "You Win",
    description: "Get the settlement you deserve - we only get paid if you do.",
    icon: CheckCircle,
  },
];

export const Process = () => {
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
            Your Path to Justice Made Simple
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center bg-white p-4"
              >
                <div className="relative mb-6">
                  <div className="h-24 w-24 rounded-full bg-white border-4 border-gold flex items-center justify-center z-10">
                    <step.icon className="h-10 w-10 text-navy" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};




