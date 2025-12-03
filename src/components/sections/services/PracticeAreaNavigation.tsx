"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PracticeAreaCard } from "@/components/ui/PracticeAreaCard";
import { PRACTICE_AREAS_DATA } from "@/lib/services-data";

export const PracticeAreaNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const handleCardClick = (areaId: string) => {
    const element = document.getElementById(areaId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="practice-areas"
      ref={containerRef}
      className="relative w-full bg-navy py-20 lg:py-32"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
            Our Practice Areas
          </div>
          <div className="h-[2px] w-20 bg-bronze mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Where We <span className="text-bronze">Fight</span>
          </h2>
          <p className="text-lg text-light-steel leading-relaxed">
            Every case is different. Our commitment never is. We bring specialized expertise to every battle we fight, from car accidents to complex medical malpractice, from workplace injuries to civil rights violations.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : {}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {PRACTICE_AREAS_DATA.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <PracticeAreaCard 
                data={area} 
                onClick={() => handleCardClick(area.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

