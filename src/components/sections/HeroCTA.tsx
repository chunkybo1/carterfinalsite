"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import CRMForm from "@/components/ui/CRMForm";

export const HeroCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-navy py-20 md:py-32 overflow-hidden"
    >
      {/* Top Accent Line - Gold (Left to Right Fade) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent" />
      
      {/* Bottom Accent Line - Gold (Right to Left Fade) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l from-bronze via-bronze/50 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Message & Phone */}
          <div className="text-center lg:text-left space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Injured? <br />
                <span className="text-bronze italic">We're Here to Help.</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                Free consultation. No upfront fees. Maximum recovery. We take on the insurance companies so you can focus on getting better.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
              {/* Phone Number */}
              <a
                href="tel:9156211818"
                className="group flex items-center gap-4 text-white hover:opacity-80 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-bronze/20 flex items-center justify-center border border-bronze/30 group-hover:bg-bronze/30 transition-colors">
                  <Phone className="w-6 h-6 text-bronze" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-sans font-bold text-bronze uppercase tracking-[0.2em] mb-1">
                    Call 24/7 For Free
                  </div>
                  <div className="text-2xl md:text-3xl font-serif font-bold">
                    (915) 621-1818
                  </div>
                </div>
              </a>
            </div>
            
            {/* Trust Badges or similar could go here */}
            <div className="pt-10 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8">
              <img src="/carter-logo-white.png" alt="Carter Law" className="h-16 md:h-24 object-contain" />
            </div>
          </div>

          {/* Right: Form Overlay */}
          <div className="relative">
            {/* Decorative background for the form */}
            <div className="absolute -inset-4 bg-bronze/10 blur-3xl rounded-full -z-10" />
            
            <div className="bg-white/5 backdrop-blur-md p-1 rounded-2xl border border-white/10 shadow-2xl">
              <div className="bg-navy p-6 md:p-10 rounded-xl">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 text-center">
                  Free Case Review
                </h3>
                <p className="text-white/60 text-center text-sm mb-8 font-sans">
                  Tell us about your accident. We&apos;ll contact you within 24 hours.
                </p>
                <CRMForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

