"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const PATH_MILESTONES = [
  {
    year: "Early Years",
    title: "The Foundation",
    description: "Thomas was raised by Army officers, Air Force firefighters, and educators—a family that served their country in uniform and in the classroom. But it was his grandfather who showed him what advocacy really meant. A tireless champion for people with disabilities, he fought for the passage of the Americans with Disabilities Act and attended its signing at the White House. El Paso recognized him as a civil rights hero. That's the standard Thomas inherited.",
    number: "01",
  },
  {
    year: "Education",
    title: "Acquiring the Tools",
    description: "Thomas knew he wanted to be a trial lawyer before he ever applied to law school. As a student, he sat in his uncle's district courtroom in Houston, watching the best attorneys in Texas try cases. But it was his uncle—presiding from the bench, treating every person with dignity—who taught him what fairness looks like in practice. Law school gave him the degree. That courtroom gave him the compass.",
    number: "02",
  },
  {
    year: "Early Career",
    title: "Learning to Win",
    description: "Most personal injury lawyers have never faced a prosecutor. Thomas has. His years as a criminal defense trial attorney—trying cases against the government, against law enforcement—taught him every tactic the other side will use. That experience earned him a reputation as a formidable opponent. Now he uses it to dismantle the insurance companies' playbook before they even open it.",
    number: "03",
  },
  {
    year: "Carter Law",
    title: "The Mission Continues",
    description: "The founding of Carter Law wasn't the start of a practice—it was the continuation of a century of service. Every case, every client, every victory becomes part of a legacy that began with soldiers and firefighters, was carried forward by a civil rights hero, and now lives in every courtroom Thomas enters. The mission doesn't end. It multiplies.",
    number: "04",
  },
];

export const ThePath = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Individual refs for animation timing
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = PATH_MILESTONES.map(() => useRef<HTMLDivElement>(null));
  const cardRefs = PATH_MILESTONES.map(() => useRef<HTMLDivElement>(null));
  const quoteRef = useRef<HTMLDivElement>(null);

  const timelineLineInView = useInView(timelineLineRef, { once: true, margin: "-20%" });
  const nodeInView = nodeRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));
  const cardInView = cardRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));
  const quoteInView = useInView(quoteRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Atmospheric Background - Layered Gradient with Gold Glow Zones */}
      <div className="absolute inset-0 bg-navy">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 20% 30%, rgba(201, 169, 98, 0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 80% 70%, rgba(201, 169, 98, 0.04) 0%, transparent 50%), linear-gradient(180deg, #1A365D 0%, #152847 40%, #1A365D 100%)",
          }}
        />
        {/* Ghosted architectural imagery placeholder on left 40% */}
        <div className="absolute inset-0 w-[40%] opacity-[0.07] mix-blend-soft-light">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent" />
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Section Transition Gradient at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(245,242,237,0.08) 50%, rgba(245,242,237,0.2) 100%)",
        }}
      />

      <Container className="relative z-20">
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
              Rather than listing credentials chronologically, this is the story of decisions made in
              service of the advocacy mission. Every step was taken with purpose—not to build a
              resume, but to become the fighter clients need.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Enhanced Vertical Timeline Line */}
            <motion.div
              ref={timelineLineRef}
              initial={{ scaleY: 0 }}
              animate={timelineLineInView ? { scaleY: 1 } : {}}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "top center" }}
              className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-bronze/30"
            />

            {/* Milestones */}
            <div className="space-y-24 md:space-y-16">
              {PATH_MILESTONES.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-12 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Enhanced Timeline Node */}
                  <motion.div
                    ref={nodeRefs[index]}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={nodeInView[index] ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                    className="absolute left-[20px] md:left-1/2 w-[16px] h-[16px] bg-navy rounded-full border-2 border-bronze transform -translate-x-1/2 z-10"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-bronze rounded-full" />
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 border-2 border-bronze rounded-full"
                    />
                  </motion.div>

                  {/* Glassmorphism Content Card */}
                  <motion.div
                    ref={cardRefs[index]}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={cardInView[index] ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`w-full md:w-[45%] pl-14 md:pl-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="relative bg-[#0a1628]/95 border border-white/10 p-8 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300 group">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-bronze/40 to-transparent group-hover:via-bronze transition-colors duration-500" />

                      <div className="absolute bottom-4 right-6 text-6xl md:text-[80px] font-serif font-bold text-white/5 pointer-events-none select-none">
                        {milestone.number}
                      </div>

                      <div className="text-[10px] font-bold text-bronze uppercase tracking-[0.2em] mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-sans text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Elevated Quote Block - Distinct treatment with gold-tinted gradient */}
          <motion.div
            ref={quoteRef}
            initial={{ opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 2.0,
              ease: "easeOut",
            }}
            className="mt-20 pt-12"
          >
            {/* Optimized: Removed backdrop-blur */}
            <div className="relative bg-gradient-to-br from-bronze/10 via-[#0a1628]/90 to-[#0a1628]/90 border border-bronze/20 p-10 rounded-lg">
              {/* Large decorative quotation mark */}
              <div className="absolute top-2 left-4 text-[60px] font-serif text-bronze/10 leading-none">
                &quot;
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-light-steel leading-relaxed mb-6 relative z-10">
                &quot;My mother taught me the most about love, empathy, and compassion. I wouldn't
                be where I am today without her. That's what I bring to every case—not just legal
                skill, but the understanding that this is someone's whole life.&quot;
              </p>
              <p className="text-sm text-gray-400 font-serif relative z-10">— Thomas Carter</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
