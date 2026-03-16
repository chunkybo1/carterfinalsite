"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";

export const TestimonialBlock = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Quote Mark */}
      <div className="absolute top-10 left-10 text-navy/5 font-serif text-[200px] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-navy leading-relaxed mb-10">
            &ldquo;After the accident, the trucking company&apos;s insurance rep called me the same day trying to get me to sign something. I didn&apos;t know what to do. Thomas told me exactly what was happening and exactly what to do. He ended up getting me more than three times what they offered. I wish I had called him first.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center">
            <cite className="not-italic font-bold text-navy text-lg mb-1">
              Miguel R.
            </cite>
            <div className="text-steel font-sans text-sm flex items-center gap-2">
              <span className="w-4 h-4 bg-[url('/google-logo.svg')] bg-contain bg-no-repeat bg-center inline-block" />
              Verified Google Review
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
