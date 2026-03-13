"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export const HeroCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-navy py-16 md:py-24 overflow-hidden"
    >
      {/* Top Accent Line - Gold (Left to Right Fade) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent" />
      
      {/* Bottom Accent Line - Gold (Right to Left Fade) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l from-bronze via-bronze/50 to-transparent" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Message */}
          <div
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 leading-tight">
              Injured? <span className="text-white">We're Here to Help</span>
            </h2>
            <p className="text-base text-white/70 leading-relaxed">
              Free consultation. No upfront fees. Maximum recovery.
            </p>
          </div>

          {/* Right: Phone & CTA */}
          <div
            className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12"
          >
            {/* Phone Number - Large & Prominent */}
            <a
              href="tel:9156211818"
              className="flex flex-col items-center sm:items-end text-white hover:opacity-80 transition-opacity"
            >
              <div className="text-sm font-sans font-bold text-bronze uppercase tracking-[0.2em] mb-1">
                Call Now
              </div>
              <div className="text-2xl md:text-3xl font-serif font-bold">
                (915) 621-1818
              </div>
            </a>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="md"
              noFloat
              className="w-full sm:w-auto text-sm bg-navy/40 backdrop-blur-md text-white border border-white/10 hover:bg-transparent hover:border-white shadow-xl"
              onClick={openModal}
            >
              Free Consultation
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

