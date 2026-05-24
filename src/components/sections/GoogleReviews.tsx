"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";
import { CLIENT_TESTIMONIALS } from "@/lib/services-data";

export const GoogleReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative w-full bg-white py-24 lg:py-32 overflow-hidden border-y border-navy/5">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight">
              Our Satisfied<br /> 
              <span className="text-bronze">Clients</span>
            </h2>
          </div>
          
          {/* Global Rating Badge */}
          <div className="flex flex-col items-center md:items-end bg-white p-6 rounded-xl shadow-md border border-navy/5">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-bronze text-bronze" />
              ))}
            </div>
            <p className="text-navy font-serif text-xl font-bold">5.0 / 5.0 Rating</p>
            <p className="text-steel text-xs uppercase tracking-widest mt-1">Based on 99+ Reviews</p>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_TESTIMONIALS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white p-10 border border-navy/10 shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-light-grey flex items-center justify-center text-bronze font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-navy font-sans font-bold uppercase tracking-widest text-xs">
                    {review.name}
                  </p>
                  <p className="text-steel text-[10px] uppercase tracking-tighter">
                    Verified Client
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-bronze text-bronze" />
                ))}
              </div>

              <blockquote className="text-lg text-navy font-serif leading-relaxed italic mb-8 relative">
                <span className="absolute -top-4 -left-4 text-6xl text-bronze/10 font-serif">&ldquo;</span>
                &quot;{review.quote}&quot;
              </blockquote>

              <div className="pt-6 border-t border-navy/5 flex justify-between items-center">
                <p className="text-steel text-[9px] uppercase tracking-widest font-bold">
                  {review.caseType}
                </p>
                <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.12 4.36-1.4 1.2-3.56 2.12-6.2 2.12-4.4 0-8.04-3.56-8.04-8s3.64-8 8.04-8c2.4 0 4.16.92 5.48 2.2l2.32-2.32C17.84 2.52 15.4 1.44 12.48 1.44 6.68 1.44 2 6.16 2 12s4.68 10.56 10.48 10.56c3.12 0 5.48-1.04 7.28-2.92 1.88-1.88 2.48-4.52 2.48-6.72 0-.64-.04-1.28-.12-1.92h-9.64z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

