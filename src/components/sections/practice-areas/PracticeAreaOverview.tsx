"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

interface PracticeAreaOverviewProps {
  overview: string;
  whoNeedsThis: string;
  title: string;
}

export const PracticeAreaOverview = ({ 
  overview, 
  whoNeedsThis, 
  title 
}: PracticeAreaOverviewProps) => {
  return (
    <section className="bg-navy py-20 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Understanding Your {title} Claim in El Paso
            </h2>
            <div 
              className="prose prose-invert max-w-none text-light-steel text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: overview }} 
            />
          </motion.div>

          {/* Sidebar: Why You Need a Lawyer */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-fit sticky top-32"
          >
            <div className="bg-white/5 p-8 border border-bronze/20 rounded-sm">
              <h3 className="text-xl font-serif font-bold text-bronze mb-6">
                Why You Need a Lawyer
              </h3>
              <p className="text-white/80 leading-relaxed text-base font-sans">
                {whoNeedsThis}
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-bronze font-sans font-bold uppercase tracking-widest text-[10px] mb-2">
                  Free Consultation
                </p>
                <p className="text-white text-sm">
                  Speak directly with Thomas Carter about your case today.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
