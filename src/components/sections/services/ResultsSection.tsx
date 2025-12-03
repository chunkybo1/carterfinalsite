"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FEATURED_RESULTS, CLIENT_TESTIMONIALS, RECOGNITIONS } from "@/lib/services-data";
import { Star } from "lucide-react";

export const ResultsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative w-full bg-navy py-20 lg:py-32">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
            Results & Recognition
          </div>
          <div className="h-[2px] w-20 bg-bronze mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            We Fight. We <span className="text-bronze">Win.</span>
          </h2>
          <p className="text-lg text-light-steel leading-relaxed max-w-2xl mx-auto">
            Our track record speaks for itself. Here are some of our recent victories and what our clients have to say.
          </p>
        </motion.div>

        {/* Featured Verdicts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center">
            Featured Verdicts & Settlements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_RESULTS.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-[#0f1d2f] border border-white/10 p-6 rounded-lg hover:border-bronze/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-bronze mb-3">
                  {result.amount}
                </div>
                <div className="text-sm font-bold text-bronze uppercase tracking-wider mb-3">
                  {result.caseType}
                </div>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {result.context}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-2">
                    <span className="font-bold text-bronze">Challenge:</span>
                  </p>
                  <p className="text-xs text-gray-400 italic leading-relaxed">
                    {result.challenge}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-4">
                  <p className="text-xs text-gray-400">
                    <span className="font-bold text-bronze">Outcome:</span> {result.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-[#0f1d2f] border border-white/10 p-6 rounded-lg"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-bronze text-bronze" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                {/* Attribution */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-serif font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  <p className="text-bronze text-xs uppercase tracking-wider mt-1">
                    {testimonial.caseType}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
            Recognition & Affiliations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {RECOGNITIONS.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-gray-400 text-sm md:text-base font-serif hover:text-bronze transition-colors"
              >
                {recognition}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

