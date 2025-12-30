"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CaseReviewForm } from "@/components/ui/CaseReviewForm";
import { Phone, Mail } from "lucide-react";

interface PracticeAreaCTAProps {
  title: string;
  subtitle: string;
}

export const PracticeAreaCTA = ({ title, subtitle }: PracticeAreaCTAProps) => {
  return (
    <section className="relative w-full bg-navy py-24 lg:py-32 overflow-hidden border-t border-white/10">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-bronze via-bronze/50 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-6">
              Final Consultation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-light-steel mb-12 max-w-xl font-sans">
              {subtitle}
            </p>

            <div className="space-y-8">
              <a 
                href="tel:9156211818" 
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-full border border-bronze/30 flex items-center justify-center group-hover:bg-bronze transition-colors duration-500">
                  <Phone className="w-6 h-6 text-bronze group-hover:text-navy transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-bronze mb-1">Direct Line</div>
                  <div className="text-2xl font-serif font-bold">(915) 621-1818</div>
                </div>
              </a>

              <a 
                href="mailto:office@carterlawwins.com" 
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-full border border-bronze/30 flex items-center justify-center group-hover:bg-bronze transition-colors duration-500">
                  <Mail className="w-6 h-6 text-bronze group-hover:text-navy transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-bronze mb-1">Email Us</div>
                  <div className="text-2xl font-serif font-bold">office@carterlawwins.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CaseReviewForm dark={true} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

