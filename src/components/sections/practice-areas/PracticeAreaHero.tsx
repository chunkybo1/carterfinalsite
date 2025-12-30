"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { CaseReviewForm } from "@/components/ui/CaseReviewForm";
import { Phone } from "lucide-react";

interface PracticeAreaHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const PracticeAreaHero = ({ eyebrow, title, description }: PracticeAreaHeroProps) => {
  return (
    <section className="relative w-full min-h-screen bg-navy overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <VideoBackground overlayOpacity={0.7} className="w-full h-full object-cover" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      <Container className="relative z-20 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-6"
            >
              {eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-sans"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a
                href="tel:9156211818"
                className="group flex items-center gap-4 bg-bronze text-navy px-8 py-4 font-serif font-bold uppercase tracking-widest hover:bg-navy hover:text-bronze border border-transparent hover:border-bronze transition-all duration-300 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-bronze/20 transition-colors">
                  <Phone className="w-5 h-5 text-navy group-hover:text-bronze" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-tighter opacity-70">Direct Line</div>
                  <div className="text-lg">(915) 621-1818</div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Side - Form Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto lg:ml-auto"
          >
            <CaseReviewForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

