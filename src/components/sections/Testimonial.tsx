"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const Testimonial = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <Container>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold"
          >
            Why Clients Trust Carter Law
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
             {/* Replace with actual video thumbnail */}
             <div className="text-center">
                <p className="text-gray-400 mb-4">Client Testimonial Video</p>
             </div>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
            <div className="h-20 w-20 rounded-full bg-gold flex items-center justify-center pl-1 shadow-lg transform transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 text-white fill-current" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};




