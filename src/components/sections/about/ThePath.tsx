"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import CRMForm from "@/components/ui/CRMForm";

const PILLARS = [
  {
    label: "The Legacy",
    headline: "A Century of Service",
    body: "Army officers. Air Force firefighters. Teachers. A grandfather who fought for the Americans with Disabilities Act and attended its signing at the White House. El Paso recognized him as a civil rights hero. Advocacy isn't a career—it's a family tradition.",
    image: "/adasigning.jpg",
    position: "top-left" as const,
  },
  {
    label: "The Training",
    headline: "Houston District Court",
    body: "Before law school, Thomas sat in his uncle's courtroom watching Texas's best trial lawyers work. His uncle—the judge—showed him what fairness and dignity look like in practice. That standard shaped everything.",
    image: "/process-2.jpg",
    position: "bottom-right" as const,
  },
  {
    label: "The Edge",
    headline: "Criminal Defense Experience",
    body: "Most personal injury lawyers have never faced a prosecutor. Thomas has tried 100+ cases against the government and law enforcement. He knows every tactic the other side will use—because he's beaten them before.",
    image: "/process-3.jpg",
    position: "center-left" as const,
  },
];

export const ThePath = () => {
  return (
    <section className="relative w-full overflow-hidden bg-navy">
      {/* Pillars */}
      <div className="relative">
        {PILLARS.map((pillar, index) => (
          <PillarPanel key={index} pillar={pillar} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <AboutCTASection />
    </section>
  );
};

// Individual Pillar Panel Component
const PillarPanel = ({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Position configurations for the floating card
  const positionStyles = {
    "top-left": {
      card: "top-12 left-6 md:top-20 md:left-12 lg:left-20",
      gradient: "bg-gradient-to-br from-navy/95 via-navy/70 to-transparent",
    },
    "bottom-right": {
      card: "bottom-12 right-6 md:bottom-20 md:right-12 lg:right-20",
      gradient: "bg-gradient-to-tl from-navy/95 via-navy/70 to-transparent",
    },
    "center-left": {
      card: "top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-20",
      gradient: "bg-gradient-to-r from-navy/95 via-navy/60 to-transparent",
    },
  };

  const config = positionStyles[pillar.position];

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={pillar.image}
          alt={pillar.headline}
          fill
          className="object-cover"
          priority={index === 0}
        />
        {/* Directional Gradient Overlay */}
        <div className={`absolute inset-0 ${config.gradient}`} />
        {/* Additional darkening for text readability */}
        <div className="absolute inset-0 bg-navy/30" />
      </div>

      {/* Floating Content Card */}
      <div className={`absolute ${config.card} z-20 w-[calc(100%-3rem)] md:w-auto md:max-w-xl`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group"
        >
          {/* Card with creative styling */}
          <div className="relative bg-navy/70 backdrop-blur-md border border-bronze/30 p-8 md:p-10 lg:p-12 overflow-hidden">
            {/* Bronze accent bar on left */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bronze via-bronze/60 to-transparent" />
            
            {/* Subtle inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-bronze/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Large background number */}
            <div className="absolute -right-4 -bottom-8 text-[120px] md:text-[180px] font-serif font-bold text-white/[0.03] leading-none select-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-bronze" />
                <span className="text-[10px] md:text-xs font-sans font-bold tracking-[0.3em] text-bronze uppercase">
                  {pillar.label}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight"
              >
                {pillar.headline}
              </motion.h2>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-[2px] w-16 bg-bronze/50 origin-left"
              />

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-base md:text-lg text-light-steel/90 font-sans leading-relaxed"
              >
                {pillar.body}
              </motion.p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-bronze/20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-bronze/20" />
          </div>
        </motion.div>
      </div>

      {/* Panel indicator - subtle */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
        <div className="flex items-center gap-3 text-white/30">
          <span className="text-xs font-sans font-medium tracking-widest uppercase">{pillar.label}</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="text-sm font-serif">{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

// About Page CTA Section with Form
const AboutCTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0f1f35] to-navy" />
      
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Bronze accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-bronze" />
                <span className="text-[10px] md:text-xs font-sans font-bold tracking-[0.3em] text-bronze uppercase">
                  Take the First Step
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Ready for a Lawyer Who <span className="text-bronze italic">Fights?</span>
              </h2>
              
              <p className="text-lg text-light-steel/80 leading-relaxed">
                You've seen where Thomas comes from. Now let him fight for you. 
                Every consultation is free, confidential, and obligation-free.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="space-y-4">
              {[
                "No fees unless we win your case",
                "Direct access to Thomas Carter",
                "24/7 availability for emergencies",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-bronze flex-shrink-0" />
                  <span className="text-white/80 font-sans">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Phone CTA */}
            <motion.a
              href="tel:9156211818"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-14 h-14 bg-bronze/20 rounded-full flex items-center justify-center group-hover:bg-bronze/30 transition-colors">
                <Phone className="w-6 h-6 text-bronze" />
              </div>
              <div>
                <div className="text-xs text-bronze/80 uppercase tracking-wider mb-1">
                  Or Call Directly
                </div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-bronze transition-colors">
                  (915) 621-1818
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-bronze/40" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-bronze/40" />

              <div className="border border-bronze/30 overflow-hidden rounded-sm">
                <CRMForm />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
