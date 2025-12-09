"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "After my wreck on I-10, the insurance company offered me a few thousand dollars. Thomas said I deserved more — and proved it. He actually fought for me when no one else would.",
    author: "Michael R.",
    rating: 5,
  },
  {
    quote: "I was scared to go against a big insurance company. Thomas made me feel like I had someone in my corner the whole time. He explained everything and kept me informed every step of the way.",
    author: "Linda M.",
    rating: 5,
  },
  {
    quote: "Other lawyers wanted to settle fast and move on. Thomas said 'you deserve more' and was willing to go to trial to prove it. That made all the difference.",
    author: "Roberto S.",
    rating: 5,
  },
];

export const ClientStories = () => {
  return (
    <section className="relative w-full bg-[#FDFBF8] py-20 md:py-32">
      <Container>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-4 text-center"
        >
          WHAT OUR CLIENTS SAY
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-bronze text-bronze" />
            ))}
          </div>
          <span className="text-lg font-serif font-bold text-navy">
            4.9 Average Rating
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-700">100+ Google Reviews</span>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-bronze text-bronze" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <p className="text-sm font-bold text-navy">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-bronze font-bold hover:text-bronze/80 transition-colors"
          >
            Read More Reviews on Google →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

