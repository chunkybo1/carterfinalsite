"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AlertCircle, DollarSign, Heart } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "Physical Pain",
    description: "Injuries that may not fully show for days or weeks. Doctors, imaging, therapy — costs adding up before you've even processed what happened.",
  },
  {
    icon: DollarSign,
    title: "Financial Pressure",
    description: "Can't work. Bills don't stop. Insurance wants to settle fast and cheap — before you know what you're actually owed.",
  },
  {
    icon: Heart,
    title: "Emotional Weight",
    description: "Anxiety about the future. Anger at the driver who did this. Exhaustion from fighting alone while everyone else seems to have moved on.",
  },
];

export const TheMomentAfter = () => {
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
          WE KNOW WHERE YOU ARE RIGHT NOW
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 text-center"
        >
          The Wreck Was Just the Beginning
        </motion.h2>

        {/* Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 text-center"
        >
          You're probably reading this from a hospital bed, a waiting room, or your couch — wondering how you're going to handle everything that just landed on your shoulders.
          <br /><br />
          The pain. The bills already piling up. The calls from an insurance adjuster who sounds friendly but isn't on your side. The worry about missing work, paying rent, taking care of your family.
          <br /><br />
          This isn't just a "case" to us. It's your life — disrupted, uncertain, and unfair.
        </motion.p>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100"
            >
              <point.icon className="h-10 w-10 text-bronze mb-4" />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-navy mb-4">
                {point.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl font-serif font-bold text-navy text-center"
        >
          You didn't cause this. You shouldn't have to fight it alone.
        </motion.p>
      </Container>
    </section>
  );
};

