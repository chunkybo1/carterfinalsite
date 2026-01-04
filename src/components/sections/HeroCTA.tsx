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
      {/* Top Accent Line - Gold */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-bronze/40" />
      
      {/* Bottom Accent Line - Gold */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-bronze/40" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Message */}
          <div
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 leading-tight">
              Injured? <span className="text-bronze">We're Here to Help</span>
            </h2>
            <p className="text-base text-white/70 leading-relaxed">
              Free consultation. No upfront fees. Maximum recovery.
            </p>
          </div>

          {/* Right: Phone & CTA */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Phone Number - Large & Prominent */}
            <a
              href="tel:9156211818"
              className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
            >
              <div
                className="w-12 h-12 bg-bronze/20 rounded-full flex items-center justify-center"
              >
                <Phone className="w-6 h-6 text-bronze" />
              </div>
              <div>
                <div className="text-xs text-bronze/80 uppercase tracking-wider mb-0.5 text-left">
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
              noFloat
              className="w-full sm:w-auto bg-bronze text-navy hover:bg-white hover:text-navy border border-transparent font-serif font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300"
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

