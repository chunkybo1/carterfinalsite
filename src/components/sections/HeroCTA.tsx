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
      className="relative w-full bg-light-grey py-24 lg:py-32 overflow-hidden border-y border-navy/5"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Message & Phone */}
          <div className="text-center lg:text-left space-y-10">
            <div className="space-y-6">
              <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
                Get Started Today
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight">
                Injured? <br />
                <span className="text-bronze italic">We&apos;re Here to Help.</span>
              </h2>
              <p className="text-xl text-steel leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                Free consultation. No upfront fees. Maximum recovery. We take on the insurance companies so you can focus on getting better.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
              {/* Phone Number */}
              <a
                href="tel:9156211818"
                className="group flex items-center gap-4 text-navy hover:text-bronze transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-light-grey flex items-center justify-center border border-navy/10 group-hover:bg-bronze transition-colors duration-300">
                  <Phone className="w-7 h-7 text-bronze group-hover:text-white transition-colors" />
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
            
            <div className="pt-10 border-t border-navy/10 flex flex-wrap justify-center lg:justify-start gap-8">
              <img src="/carter-logo-v2.png" alt="Carter Law" className="h-12 md:h-16 object-contain" />
            </div>
          </div>

          {/* Right: Form Overlay */}
          <div className="relative">
            {/* Decorative background for the form */}
            <div className="absolute -inset-4 bg-bronze/5 blur-3xl rounded-full -z-10" />
            
            <div className="bg-white p-1 rounded-2xl border border-navy/10 shadow-2xl">
              <div className="bg-white p-8 md:p-12 rounded-xl">
                <h3 className="text-3xl font-serif font-bold text-navy mb-3 text-center">
                  Free Case Review
                </h3>
                <p className="text-steel text-center text-base mb-10 font-sans">
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

