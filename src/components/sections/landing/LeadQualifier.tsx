"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CaseReviewForm } from "@/components/ui/CaseReviewForm";
import { CheckCircle2, AlertTriangle, Clock, ShieldAlert, ChevronRight, Phone } from "lucide-react";

type Step = 0 | 1 | 2 | 3 | 4; // 0-3 are questions, 4 is result

interface QuizState {
  vehicleType: string;
  injuryStatus: string;
  accidentTiming: string;
  insuranceContact: string;
}

const QUESTIONS = [
  {
    id: "vehicleType",
    question: "What type of commercial vehicle hit you?",
    options: [
      "Semi / 18-Wheeler",
      "Delivery Truck",
      "Dump / Construction Truck",
      "Other Commercial Vehicle",
    ],
    icon: AlertTriangle,
  },
  {
    id: "injuryStatus",
    question: "Were you or a loved one physically injured?",
    options: [
      "Yes, I went to the ER or hospital",
      "Yes, I'm still treating right now",
      "Yes, but I haven't seen a doctor yet",
      "This involved a wrongful death",
    ],
    icon: ShieldAlert,
  },
  {
    id: "accidentTiming",
    question: "When did the accident happen?",
    options: [
      "Within the last 30 days",
      "1–6 months ago",
      "6–12 months ago",
      "More than a year ago",
    ],
    icon: Clock,
  },
  {
    id: "insuranceContact",
    question: "Has the trucking company's insurer contacted you?",
    options: [
      "Yes — they're pushing me to settle fast",
      "Yes — they denied or disputed my claim",
      "Yes — but I haven't responded yet",
      "Not yet, but I expect they will",
    ],
    icon: Phone,
  },
];

export const LeadQualifier = () => {
  const [currentStep, setCurrentStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<QuizState>({
    vehicleType: "",
    injuryStatus: "",
    accidentTiming: "",
    insuranceContact: "",
  });

  const handleOptionSelect = (option: string) => {
    const questionId = QUESTIONS[currentStep].id;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    
    // Move to next step with a slight delay for better UX
    setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) as Step);
    }, 250);
  };

  const progress = ((currentStep) / 4) * 100;

  return (
    <section id="quiz" className="py-20 bg-light-grey relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Answer 4 Quick Questions.
            </h2>
            <p className="text-lg text-steel font-sans">
              We&apos;ll tell you exactly what your case may be worth — and what the insurer won&apos;t.
            </p>
          </div>

          {/* Quiz Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-bronze/10 relative min-h-[400px]">
            {/* Progress Bar */}
            <div className="h-2 bg-navy/10 w-full">
              <motion.div 
                className="h-full bg-bronze"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                {currentStep < 4 ? (
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy font-serif font-bold text-lg">
                        {currentStep + 1}
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-navy">
                        {QUESTIONS[currentStep].question}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {QUESTIONS[currentStep].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className="group flex items-center justify-between p-5 rounded-xl border border-navy/10 hover:border-bronze hover:bg-navy/5 transition-all duration-200 text-left"
                        >
                          <span className="text-lg font-sans text-navy font-medium group-hover:text-bronze transition-colors">
                            {option}
                          </span>
                          <ChevronRight className="w-5 h-5 text-navy/30 group-hover:text-bronze transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-4">
                      You Likely Have a Strong Case.
                    </h3>
                    
                    <p className="text-steel font-sans mb-8 max-w-xl mx-auto leading-relaxed">
                      Based on your answers, the insurance company already knows they are liable. 
                      That&apos;s why time matters. Thomas Carter offers a free, same-day case review. 
                      There&apos;s no obligation, no pressure, and absolutely no fee unless we win.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-2xl mx-auto mb-8">
                      <a 
                        href="tel:9156211818"
                        className="flex flex-col items-center justify-center p-6 bg-navy text-white rounded-xl hover:bg-navy/90 transition-colors shadow-lg group"
                      >
                        <Phone className="w-8 h-8 mb-3 text-bronze group-hover:scale-110 transition-transform" />
                        <span className="text-sm uppercase tracking-widest font-bold text-white/70 mb-1">Call Now</span>
                        <span className="text-2xl font-serif font-bold">(915) 621-1818</span>
                      </a>
                      
                      <div className="text-left p-6 bg-white border border-bronze/20 rounded-xl shadow-sm">
                        <h4 className="font-serif font-bold text-navy mb-2">Prefer to text/email?</h4>
                        <p className="text-sm text-steel mb-4">Fill out the form below to get your free case evaluation.</p>
                      </div>
                    </div>

                    <div className="max-w-md mx-auto">
                      <CaseReviewForm />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
