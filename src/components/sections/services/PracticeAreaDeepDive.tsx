"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PRACTICE_AREAS_DATA } from "@/lib/services-data";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const PracticeAreaDeepDive = () => {
  return (
    <section className="relative w-full bg-[#FDFBF8] py-20 lg:py-32">
      <Container>
        {PRACTICE_AREAS_DATA.map((area, index) => (
          <PracticeAreaSection key={area.id} area={area} index={index} />
        ))}
      </Container>
    </section>
  );
};

interface PracticeAreaSectionProps {
  area: typeof PRACTICE_AREAS_DATA[0];
  index: number;
}

const PracticeAreaSection = ({ area, index }: PracticeAreaSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const Icon = area.icon;

  return (
    <div
      id={area.id}
      ref={sectionRef}
      className="mb-32 scroll-mt-24"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <Icon className="w-12 h-12 text-bronze stroke-[1.5px]" />
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-2">
              {area.title}
            </h2>
            <div className="h-[2px] w-20 bg-bronze" />
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          {area.shortDescription}
        </p>
      </motion.div>

      {/* Overview Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-serif font-bold text-navy mb-4">Overview</h3>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">{area.overview}</p>
          
          <div className="bg-navy/5 p-6 rounded-lg mb-4">
            <h4 className="text-lg font-serif font-bold text-navy mb-2">Who Needs This</h4>
            <p className="text-gray-700 leading-relaxed">{area.whoNeedsThis}</p>
          </div>

          <div className="bg-navy/5 p-6 rounded-lg">
            <h4 className="text-lg font-serif font-bold text-navy mb-3">Complexity Factors</h4>
            <ul className="space-y-2">
              {area.complexityFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-bronze mr-2 font-bold">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Case Types Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-serif font-bold text-navy mb-6">Case Types We Handle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {area.caseTypes.map((caseType, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
              className="bg-white border border-gray-200 p-4 rounded-lg hover:border-bronze transition-colors"
            >
              <p className="text-gray-700 text-sm">{caseType}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Results Block */}
      {area.featuredResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-serif font-bold text-navy mb-6">Featured Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.featuredResults.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="bg-navy text-white p-6 rounded-lg"
              >
                <div className="text-3xl font-serif font-bold text-bronze mb-2">
                  {result.amount}
                </div>
                <div className="text-sm font-bold text-bronze uppercase tracking-wider mb-3">
                  {result.caseType}
                </div>
                <p className="text-sm text-gray-300 mb-3">{result.context}</p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-gray-400 italic">Challenge: {result.challenge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Process Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-serif font-bold text-navy mb-6">Our Process</h3>
        <div className="space-y-6">
          {area.processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-bronze text-navy rounded-full flex items-center justify-center font-serif font-bold text-lg">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-serif font-bold text-navy mb-2">{step.step}</h4>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Block */}
      {area.faqs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-serif font-bold text-navy mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {area.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  aria-expanded={expandedFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-bronze rounded-lg"
                >
                  <h4 className="text-lg font-serif font-bold text-navy pr-4">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-bronze flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div id={`faq-answer-${idx}`} className="px-6 pb-6" role="region">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-navy text-white p-8 md:p-12 rounded-lg text-center"
      >
        <h3 className="text-3xl font-serif font-bold mb-4">{area.ctaMessage}</h3>
        <Button
          variant="primary"
          size="lg"
          className="bg-bronze text-navy hover:opacity-90 font-serif font-bold uppercase tracking-wider mt-6"
          onClick={() => {
            const element = document.getElementById("consultation-cta");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Schedule Free Consultation
        </Button>
      </motion.div>
    </div>
  );
};

