"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const PATH_MILESTONES = [
  {
    year: "Early Years",
    title: "The Foundation",
    description: "Growing up in a household where advocacy was the family business, Thomas learned early that some fights are worth having. The values instilled during childhood—standing up for others, refusing to look away—became the foundation for everything that followed.",
  },
  {
    year: "Education",
    title: "Acquiring the Tools",
    description: "Law school wasn't a career move; it was acquiring the tools needed to fight effectively. Every course, every case study, every moment of legal education was viewed through the lens of: how does this help me advocate for someone who needs protection?",
  },
  {
    year: "Early Career",
    title: "Learning to Win",
    description: "Trial experience wasn't resume building; it was learning what it actually takes to win for clients. The 20+ years of trial experience and $50M+ in jury verdicts represent thousands of hours preparing, strategizing, and fighting—not for recognition, but for results.",
  },
  {
    year: "Carter Law",
    title: "The Mission Continues",
    description: "The founding of Carter Law wasn't the start of a practice; it was the continuation of a multigenerational mission. Every case, every client, every victory becomes part of a legacy that began long before Thomas entered law school.",
  },
];

export const ThePath = () => {
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
            className="mb-16"
          >
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              The Path
            </div>
            <div className="h-[2px] w-20 bg-bronze mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              The <span className="text-bronze">Journey</span>
            </h2>
            <p className="text-lg text-light-steel leading-relaxed max-w-3xl">
              Rather than listing credentials chronologically, this is the story of decisions made in service of the advocacy mission. Every step was taken with purpose—not to build a resume, but to become the fighter clients need.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-bronze/30 hidden md:block" />

            {/* Milestones */}
            <div className="space-y-16">
              {PATH_MILESTONES.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-bronze rounded-full border-4 border-navy transform -translate-x-1/2 z-10"
                  />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-[#0f1d2f] border border-white/10 p-8 rounded-lg">
                      <div className="text-sm font-bold text-bronze uppercase tracking-wider mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal Voice Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="bg-[#0f1d2f] border border-white/10 p-10 rounded-lg">
              <p className="text-xl md:text-2xl font-serif italic text-light-steel leading-relaxed mb-6">
                &quot;Every case is someone's whole life. I treat it that way. That's not a marketing line—it's the standard I was raised to meet. When you understand that advocacy is inherited purpose, not chosen profession, you approach every client relationship differently.&quot;
              </p>
              <p className="text-sm text-gray-400 font-serif">— Thomas Carter</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

