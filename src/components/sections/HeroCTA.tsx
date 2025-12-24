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
      className="relative w-full bg-transparent py-10 lg:py-12 overflow-hidden"
    >
      {/* Top Bronze Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-bronze via-bronze/80 to-transparent" />
      
      {/* Bottom Bronze Accent Line - Mirrored */}
      <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-bronze via-bronze/80 to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Message */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 leading-tight">
              Injured? <span className="text-bronze">We're Here to Help</span>
            </h2>
            <p className="text-base text-light-steel leading-relaxed">
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
              className="group flex items-center gap-3 text-white hover:text-bronze transition-colors duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-bronze/20 rounded-full flex items-center justify-center group-hover:bg-bronze/30 transition-colors duration-300"
              >
                <Phone className="w-6 h-6 text-bronze" />
              </motion.div>
              <div>
                <div className="text-xs text-light-steel uppercase tracking-wider mb-0.5 group-hover:text-bronze/80 transition-colors duration-300">
                  Call Now
                </div>
                <div className="text-xl md:text-2xl font-serif font-bold">
                  (915) 621-1818
                </div>
              </div>
            </a>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="md"
              className="bg-bronze text-navy hover:bg-bronze/90 font-serif font-bold uppercase tracking-wider whitespace-nowrap"
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

