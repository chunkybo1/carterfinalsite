"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does an El Paso car accident lawyer cost?",
    answer: "Nothing upfront. We work on contingency — you pay nothing unless we win your case. Our fee is a percentage of what we recover for you. If we don't win, you don't pay. Period.",
  },
  {
    question: "How long do I have to file a car accident claim in Texas?",
    answer: "Generally, you have two years from the date of the accident under Texas's statute of limitations. But evidence disappears and witnesses forget — the sooner you call, the stronger your case will be.",
  },
  {
    question: "What if the accident was partially my fault?",
    answer: "Texas follows a \"modified comparative fault\" rule. You can still recover damages as long as you're less than 51% at fault. Your compensation may be reduced by your percentage of fault, but you're not automatically disqualified.",
  },
  {
    question: "Should I accept the insurance company's first offer?",
    answer: "Almost never. First offers are designed to be low — they're counting on you being desperate or uninformed. Let us evaluate what your case is actually worth before you sign anything.",
  },
  {
    question: "How long will my car accident case take?",
    answer: "It depends on your injuries and the complexity of the case. Some cases resolve in a few months; others take a year or more if they go to trial. We never rush a settlement just to close a file — we fight for what's fair.",
  },
  {
    question: "Do I have to go to court?",
    answer: "Most car accident cases settle before trial. But we prepare every case as if it's going to court — that's why insurance companies take us seriously and offer more to avoid facing Thomas in front of a jury.",
  },
  {
    question: "What if the other driver doesn't have insurance?",
    answer: "You may be able to recover through your own uninsured/underinsured motorist (UM/UIM) coverage. We can help you navigate that process and fight your own insurance company if they try to underpay.",
  },
  {
    question: "¿Hablan español?",
    answer: "Sí. Hablamos español. Llámenos al (915) 621-1818 para una consulta gratuita.",
  },
];

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const CarAccidentFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative w-full bg-navy py-20 md:py-32">
        <Container>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-4 text-center"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-12 text-center"
          >
            Common Questions About Car Accident Cases
          </motion.h2>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-serif font-bold text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-bronze flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-[#FDFBF8]">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

