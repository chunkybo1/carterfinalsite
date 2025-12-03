"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const COMMUNITY_ORGANIZATIONS = [
  {
    name: "El Paso Bar Association",
    role: "Active Member",
    description: "Serving the local legal community and supporting access to justice initiatives.",
  },
  {
    name: "Texas Trial Lawyers Association",
    role: "Member",
    description: "Advocating for plaintiff rights and trial lawyer excellence across Texas.",
  },
  {
    name: "El Paso Community Foundation",
    role: "Board Member",
    description: "Supporting local charitable initiatives and community development programs.",
  },
  {
    name: "Personal Injury Advocacy Network",
    role: "Founding Member",
    description: "Working with other attorneys to improve outcomes for injury victims statewide.",
  },
];

export const TheCommunity = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative w-full bg-navy py-20 lg:py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              The Community
            </div>
            <div className="h-[2px] w-20 bg-bronze mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Beyond the <span className="text-bronze">Courtroom</span>
            </h2>
            <p className="text-lg text-light-steel leading-relaxed max-w-3xl mx-auto">
              The advocacy mission extends beyond individual cases. Thomas's involvement in El Paso and the region demonstrates that the 'fighter' identity doesn't clock out—it permeates how he moves through the community.
            </p>
          </motion.div>

          {/* Local Connection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-[#0f1d2f] border border-white/10 p-10 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">El Paso Roots</h3>
              <p className="text-lg text-light-steel leading-relaxed">
                Thomas's connection to El Paso runs deep. [Placeholder for specific local connection details—native, long-term resident, what connects him to this specific place and its people. This section should feel grounded and specific, not abstract.]
              </p>
            </div>
          </motion.div>

          {/* Organizational Involvement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center">
              Organizational Involvement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMMUNITY_ORGANIZATIONS.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-[#0f1d2f] border border-white/10 p-6 rounded-lg hover:border-bronze/30 transition-colors"
                >
                  <div className="text-sm font-bold text-bronze uppercase tracking-wider mb-2">
                    {org.role}
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-3">
                    {org.name}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {org.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo Gallery Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">
              Community Involvement
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-[#0f1d2f] border border-white/10 rounded-lg flex items-center justify-center"
                >
                  <div className="text-white/30 text-xs text-center px-4">
                    [Community Photo {item}]
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

