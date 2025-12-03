"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const CREDENTIALS = {
  barAdmissions: [
    "State Bar of Texas",
    "U.S. District Court, Western District of Texas",
    "U.S. District Court, Northern District of Texas",
  ],
  education: [
    {
      degree: "Juris Doctor",
      school: "[Law School Name]",
      year: "[Year]",
    },
  ],
  memberships: [
    "El Paso Bar Association",
    "Texas Trial Lawyers Association",
    "American Association for Justice",
    "State Bar of Texas - Personal Injury Section",
  ],
  recognition: [
    "Super Lawyers - Personal Injury",
    "Martindale-Hubbell AV Preeminent Rating",
    "Best Lawyers in America",
  ],
};

export const CredentialsRecognition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative w-full bg-[#FDFBF8] py-20 lg:py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              Credentials & Recognition
            </div>
            <div className="h-[2px] w-20 bg-bronze mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Professional Credentials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The formal credential information for those who want the complete professional picture.
            </p>
          </motion.div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bar Admissions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 p-6 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Bar Admissions</h3>
              <ul className="space-y-2">
                {CREDENTIALS.barAdmissions.map((admission, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-bronze mr-2">•</span>
                    <span>{admission}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 p-6 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Education</h3>
              <ul className="space-y-3">
                {CREDENTIALS.education.map((edu, idx) => (
                  <li key={idx} className="text-gray-700">
                    <div className="font-semibold">{edu.degree}</div>
                    <div className="text-sm text-gray-600">{edu.school}</div>
                    <div className="text-sm text-gray-500">{edu.year}</div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Professional Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-gray-200 p-6 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Professional Memberships</h3>
              <ul className="space-y-2">
                {CREDENTIALS.memberships.map((membership, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-bronze mr-2">•</span>
                    <span>{membership}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recognition & Awards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border border-gray-200 p-6 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Recognition & Awards</h3>
              <ul className="space-y-2">
                {CREDENTIALS.recognition.map((award, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-bronze mr-2">•</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

