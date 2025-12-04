"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROCESS_STEPS = [
  {
    id: 1,
    number: "01",
    title: "We Listen",
    body: "Every case starts with understanding your story. We take the time to hear what happened, how it affected you, and what you need to move forward. No rushed consultations, no assumptions—just genuine attention to your situation.",
  },
  {
    id: 2,
    number: "02",
    title: "We Investigate",
    body: "While you focus on recovery, we build your case. Our team digs deep into the facts, gathers evidence, and prepares every detail as if we're going to trial. Because thorough preparation is how you win before you ever step into a courtroom.",
  },
  {
    id: 3,
    number: "03",
    title: "We Fight",
    body: "When it's time to negotiate or go to trial, we fight with everything we've got. We don't back down from insurance companies or opposing counsel. Your fight is our fight, and we're here to win.",
  },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#FDFBF8] overflow-hidden">
      {/* Diagonal Navy Wedge (Left Side) */}
      <div 
        className="absolute inset-0 bg-navy z-0"
        style={{
          clipPath: "polygon(0 100%, 0 0, 45% 0, 35% 100%)",
        }}
      />

      {/* Left Zone - Numbers (Navy Background) */}
      <div className="absolute left-0 top-0 bottom-0 w-[45%] z-10 flex flex-col justify-center items-start pl-[6vw]">
        <div className="space-y-32">
          {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 0.15, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-[180px] lg:text-[240px] font-serif text-white leading-none"
            >
              {step.number}
              </motion.div>
            ))}
          </div>
        </div>

      {/* Right Zone - Content (Cream Background) */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center py-20 px-6 lg:pl-[50%] lg:pr-[8vw]">
        <div className="space-y-32 max-w-2xl">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={step.id} data={step} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  data: {
    id: number;
    number: string;
    title: string;
    body: string;
  };
  index: number;
  isInView: boolean;
}

const ProcessStep = ({ data, index, isInView }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="space-y-6"
    >
      {/* Number Indicator */}
      <div className="flex items-center gap-4">
        <div className="text-4xl lg:text-5xl font-serif text-navy/20">
          {data.number}
        </div>
        <div className="h-[2px] w-16 bg-bronze" />
      </div>

      {/* Title */}
      <h3 className="text-3xl lg:text-4xl font-serif text-navy leading-tight">
        {data.title}
      </h3>

      {/* Body */}
      <p className="text-base lg:text-lg font-sans text-gray-700 leading-relaxed max-w-xl">
        {data.body}
      </p>
    </motion.div>
  );
};
