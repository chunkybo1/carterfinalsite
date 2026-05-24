"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

interface MeetAdvocateProps {
  headline: string;
  text: string;
}

export const MeetAdvocate = ({ headline, text }: MeetAdvocateProps) => {
  return (
    <section className="relative w-full bg-navy py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-0"
          >
            {/* Background Accent */}
            <div className="absolute -inset-4 border-2 border-bronze/20 translate-x-4 translate-y-4 -z-10" />
            
            <div className="relative w-full h-full overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/thomas-carter-portrait.png"
                alt="Thomas Carter"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-navy/10" />
            </div>

            {/* Float Badge */}
            <div className="absolute bottom-8 -right-8 bg-bronze p-6 shadow-xl hidden md:block">
              <div className="text-navy font-serif font-bold text-xl mb-1">Thomas Carter</div>
              <div className="text-navy/70 text-[10px] uppercase font-sans font-bold tracking-[0.2em]">Lead Trial Attorney</div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
                The Human Element
              </div>
              <div className="h-[2px] w-12 bg-bronze" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {headline}
            </h2>

            <div className="space-y-6 text-lg text-light-steel leading-relaxed font-sans max-w-xl">
              <p>{text}</p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <Image
                src="/carter-logo-v2.png"
                alt="Carter Law Wins"
                width={180}
                height={40}
                className="opacity-50 grayscale brightness-200"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

