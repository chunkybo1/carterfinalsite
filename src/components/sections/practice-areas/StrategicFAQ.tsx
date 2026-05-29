"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface StrategicFAQProps {
  faqs: FAQItem[];
}

export const StrategicFAQ = ({ faqs }: StrategicFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#F9F9F9] py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Clear Answers</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-[1.05] mb-6">
              Strategic FAQs.
            </h2>
            <div className="h-[2px] w-12 bg-bronze mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 hover:border-bronze/30 shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                  >
                    <span className={`text-lg md:text-xl font-serif font-bold transition-colors ${isOpen ? 'text-bronze' : 'text-navy group-hover:text-bronze'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full border transition-colors ${isOpen ? 'bg-bronze border-bronze' : 'bg-transparent border-gray-200'}`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-navy" />
                      ) : (
                        <Plus className="w-4 h-4 text-navy" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-10">
                          <div className="h-[1px] w-full bg-gray-100 mb-6" />
                          <p className="text-navy/70 text-lg leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

