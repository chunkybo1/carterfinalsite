"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const Biography = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} data-section="biography" className="relative w-full bg-white overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-navy/5">
              <Image
                src="/thomas-carter-portrait.png"
                alt="Thomas Carter"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            
            {/* Floating Credential Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-bronze p-6 rounded-xl shadow-xl hidden md:block"
            >
              <div className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-1">
                15+ Years
              </div>
              <div className="text-navy font-serif font-bold text-xl">
                Trial Experience
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12 space-y-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-xs font-sans font-bold tracking-[0.3em] text-bronze uppercase"
              >
                Lead Attorney
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight tracking-tight"
              >
                Thomas Carter
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] w-24 bg-bronze origin-left"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-steel font-sans text-lg leading-relaxed"
            >
              <p className="font-serif italic text-xl text-navy border-l-4 border-bronze pl-6 py-2">
                &quot;Standing Beside You, Every Step of the Way. Your Fight Is My Purpose.&quot;
              </p>
              
              <p>
                Thomas Carter founded this firm on a simple principle: every client deserves a champion. With over 15 years in the courtroom, he has built a reputation for taking the cases other firms shy away from. His journey in law began with a commitment to serving the El Paso community, where he has witnessed firsthand the impact that a dedicated legal advocate can have on the lives of accident victims and their families.
              </p>
              
              <p>
                He doesn&apos;t just manage cases; he fights battles. By limiting the firm&apos;s caseload, Thomas ensures that every family he represents receives his direct attention and the full weight of his trial experience. This selective approach allows for a level of meticulous preparation that is rare in the legal field.
              </p>

              <p>
                In El Paso, the legal landscape is unique, shaped by both state laws and local court procedures. Thomas Carter&apos;s deep understanding of the El Paso County court system, combined with his extensive experience across Texas, Arizona, and New Mexico, provides his clients with a distinct advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 border-t border-navy/10 flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-light-grey flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-bronze" />
                </div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-navy">Millions Recovered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-light-grey flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-bronze" />
                </div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-navy">Board Certified</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
