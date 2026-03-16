"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { CaseReviewForm } from "@/components/ui/CaseReviewForm";
import { Phone, Clock } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-navy relative border-t-4 border-bronze">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6 text-bronze font-sans font-bold uppercase tracking-[0.2em] text-sm animate-pulse">
              <Clock className="w-5 h-5" />
              The Clock Is Running
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
              Truck Companies Are Building Their Defense Right Now.
            </h2>
            
            <p className="text-lg text-white/80 leading-relaxed mb-10 font-sans">
              Every hour that passes, evidence gets harder to obtain. Call Thomas Carter today for a free, confidential case review. 
              No pressure. No upfront fees. Just answers.
            </p>

            <a
              href="tel:9156211818"
              className="group inline-flex items-center gap-4 bg-bronze hover:bg-white text-white hover:text-navy px-8 py-4 transition-all duration-300 shadow-xl rounded-sm"
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">Call 24/7 For Free</div>
                <div className="text-2xl font-serif font-bold leading-none">(915) 621-1818</div>
              </div>
            </a>
          </div>

          {/* Right Form */}
          <div className="bg-white/5 backdrop-blur-sm p-1 rounded-xl border border-white/10">
            <div className="bg-navy p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-white mb-2 text-center">
                Get Your Free Case Review
              </h3>
              <p className="text-white/60 text-center text-sm mb-6 font-sans">
                Fill out the form below. We&apos;ll contact you immediately.
              </p>
              <CaseReviewForm dark={true} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
