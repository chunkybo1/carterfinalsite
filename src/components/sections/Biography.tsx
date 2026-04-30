"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const Biography = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} data-section="biography" className="relative w-full bg-transparent overflow-visible flex flex-col md:flex-row min-h-[80vh] py-20 md:py-32">
      {/* Photo Zone - Left 50% on desktop, Top on mobile */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto z-10 flex items-end justify-center md:justify-end">
        <div className="relative w-full h-full md:aspect-[4/5] lg:aspect-[3/4] max-h-[800px] overflow-hidden md:mb-[30px]">
          <Image
            src="/thomas-carter-portrait.png"
            alt="Thomas Carter"
            fill
            className="object-contain"
            style={{ 
              objectPosition: "center bottom",
            }}
            priority
          />
          {/* Subtle desaturation overlay */}
          <div className="absolute inset-0 bg-navy/10" />
          {/* Mobile gradient mask to transition image to content */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent md:hidden" />
        </div>
      </div>

      {/* Content Zone - Right 50% on desktop, Bottom on mobile */}
      <div className="relative z-20 w-full md:w-1/2 flex items-end justify-start px-6 py-12 md:px-12 lg:px-20 bg-navy md:bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl w-full space-y-6 md:space-y-8 p-6 md:p-12 border-2 border-bronze/50 bg-navy/60 md:bg-navy/10 backdrop-blur-md md:backdrop-blur-sm mb-0"
        >
          {/* Small Caps Label */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] md:text-xs font-sans font-bold tracking-[0.3em] text-bronze uppercase"
            >
              Lead Attorney
            </motion.div>

            {/* Name - Large, signature-like */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight"
            >
              Thomas Carter
            </motion.h2>
          </div>

          {/* Philosophy Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl font-serif italic text-light-steel leading-relaxed"
          >
            &quot;Standing Beside You, Every Step of the Way. Your Fight Is My Purpose.&quot;
          </motion.p>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 font-sans leading-relaxed"
          >
            <p>
              Thomas Carter founded this firm on a simple principle: every client deserves a champion. With over 15 years in the courtroom, he has built a reputation for taking the cases other firms shy away from. His journey in law began with a commitment to serving the El Paso community, where he has witnessed firsthand the impact that a dedicated legal advocate can have on the lives of accident victims and their families.
            </p>
            <p>
              He doesn&apos;t just manage cases; he fights battles. By limiting the firm&apos;s caseload, Thomas ensures that every family he represents receives his direct attention and the full weight of his trial experience. This selective approach allows for a level of meticulous preparation that is rare in the legal field. From the initial investigation to the final verdict or settlement, Thomas is personally involved in every strategic decision, ensuring that no detail is overlooked and every opportunity for recovery is pursued.
            </p>
            <p>
              In El Paso, the legal landscape is unique, shaped by both state laws and local court procedures. Thomas Carter&apos;s deep understanding of the El Paso County court system, combined with his extensive experience across Texas, Arizona, and New Mexico, provides his clients with a distinct advantage. He knows the local judges, the opposing counsel, and the specific challenges that arise in El Paso personal injury cases. Whether it&apos;s a complex trucking accident on I-10 or a medical malpractice claim against a local hospital, Thomas brings a level of localized expertise that is essential for achieving the best possible outcomes.
            </p>
            <p>
              Beyond the courtroom, Thomas is a dedicated member of the El Paso community. He believes that a lawyer&apos;s duty extends beyond legal representation to include supporting the community they serve. This commitment to El Paso is reflected in the firm&apos;s approach to client service, where compassion and respect are just as important as legal skill. When you choose Carter Law, you&apos;re not just hiring a lawyer; you&apos;re gaining a partner who is genuinely invested in your recovery and your future.
            </p>
          </motion.div>

          {/* Credential Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-2 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10"
          >
            <div className="text-xs sm:text-sm text-bronze font-sans font-bold tracking-[0.2em] uppercase">
              15+ Years Trial Experience • Millions Recovered
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent z-30" />
    </section>
  );
};
