"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

const states = [
  {
    name: "Texas",
    cities: ["El Paso", "Dallas", "Houston", "San Antonio", "Austin"],
  },
  {
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Scottsdale"],
  },
  {
    name: "New Mexico",
    cities: ["Albuquerque", "Santa Fe", "Las Cruces"],
  },
];

export const Coverage = () => {
  return (
    <section className="py-20 bg-light-grey">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-navy"
          >
            Representing Injured Victims Across Three States
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Virtual consultations available statewide. We come to you if you can&apos;t come to us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {states.map((state, index) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-gold mr-2" />
                <h3 className="text-2xl font-bold text-navy">{state.name}</h3>
              </div>
              <ul className="space-y-3">
                {state.cities.map((city) => (
                  <li key={city} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mr-3" />
                    {city}
                  </li>
                ))}
                <li className="text-sm text-gray-500 italic mt-2 pt-2 border-t border-gray-100">
                  + Serving all surrounding areas
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};




