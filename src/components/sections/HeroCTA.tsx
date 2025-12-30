"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";
import { smartSmoothScroll } from "@/utils/smoothScroll";

export const HeroCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="group relative w-full bg-bronze py-10 lg:py-12 overflow-hidden transition-colors duration-500 hover:bg-navy"
    >
      {/* Top Accent Line - Inverts on hover */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-navy/20 transition-colors duration-500 group-hover:bg-bronze/20" />
      
      {/* Bottom Accent Line - Inverts on hover */}
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-navy/20 transition-colors duration-500 group-hover:bg-bronze/20" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Message */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy transition-colors duration-500 group-hover:text-white mb-2 leading-tight">
              Injured? <span className="group-hover:text-bronze transition-colors duration-500">We're Here to Help</span>
            </h2>
            <p className="text-base text-navy/70 transition-colors duration-500 group-hover:text-light-steel leading-relaxed">
              Free consultation. No upfront fees. Maximum recovery.
            </p>
          </motion.div>

          {/* Right: Phone & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Phone Number - Large & Prominent */}
            <a
              href="tel:9156211818"
              className="flex items-center gap-3 text-navy transition-colors duration-500 group-hover:text-white hover:opacity-80"
            >
              <div
                className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center transition-colors duration-500 group-hover:bg-bronze/20"
              >
                <Phone className="w-6 h-6 text-navy transition-colors duration-500 group-hover:text-bronze" />
              </div>
              <div>
                <div className="text-xs text-navy/60 uppercase tracking-wider mb-0.5 transition-colors duration-500 group-hover:text-light-steel">
                  Call Now
                </div>
                <div className="text-xl md:text-2xl font-serif font-bold">
                  (915) 621-1818
                </div>
              </div>
            </a>

            {/* CTA Button - Inverts color on hover */}
            <Button
              variant="primary"
              size="md"
              noFloat
              className="bg-navy text-bronze hover:bg-bronze hover:text-navy border border-transparent hover:border-navy font-serif font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 group-hover:bg-bronze group-hover:text-navy group-hover:hover:bg-white"
              onClick={() => {
                const element = document.getElementById("consultation-cta");
                if (element) {
                  smartSmoothScroll(element, {
                    duration: 1000,
                    offset: 80,
                  });
                } else {
                  window.location.href = "/services#consultation-cta";
                }
              }}
            >
              Free Consultation
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

