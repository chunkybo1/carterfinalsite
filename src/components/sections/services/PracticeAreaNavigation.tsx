"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PracticeAreaCard } from "@/components/ui/PracticeAreaCard";
import { PRACTICE_AREAS_DATA } from "@/lib/services-data";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export const PracticeAreaNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const router = useRouter();

  const handleCardClick = (href: string) => {
    router.push(href);
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
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
                onClick={() => handleCardClick(area.href)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Heavy CTA for Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center text-center p-12 bg-[#0f1d2f] border border-bronze/20 rounded-sm"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Not sure which category your case falls into?
          </h3>
          <p className="text-light-steel mb-8 max-w-xl">
            Our strategic team can help you identify the best path forward during a confidential, no-obligation case audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-bronze text-navy hover:opacity-90 font-serif font-bold uppercase tracking-wider"
              onClick={() => {
                const element = document.getElementById("consultation-cta");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Strategic Case Audit
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

