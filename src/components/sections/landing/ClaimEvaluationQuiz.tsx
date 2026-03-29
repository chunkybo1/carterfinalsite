"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Loader2, AlertTriangle } from "lucide-react";
import Script from "next/script";

type Step = 0 | 1 | 2 | 3 | "processing" | "result";

interface Answers {
  vehicleType: string;
  medicalAttention: string;
  faultStatus: string;
  insuranceContact: string;
}

const QUESTIONS = [
  {
    id: "vehicleType",
    step: "1 of 4",
    question: "What type of commercial vehicle was involved?",
    hint: "Select the option that best describes the vehicle.",
    options: [
      { label: "Semi / 18-Wheeler", tag: "Highest coverage policies" },
      { label: "Delivery Truck (Amazon, FedEx, UPS)", tag: "Corporate carrier" },
      { label: "Dump / Construction Truck", tag: "Commercial liability" },
      { label: "Other Commercial Vehicle", tag: "Commercial policy" },
    ],
  },
  {
    id: "medicalAttention",
    step: "2 of 4",
    question: "Did you or a passenger require medical attention?",
    hint: "Medical documentation is a key factor in your claim value.",
    options: [
      { label: "Yes — I went to the ER or hospital", tag: "Strong documentation" },
      { label: "Yes — I am currently seeing a doctor", tag: "Active treatment" },
      { label: "Not yet, but experiencing pain", tag: "Injuries may appear later" },
      { label: "This involved a wrongful death", tag: "Maximum compensation" },
    ],
  },
  {
    id: "faultStatus",
    step: "3 of 4",
    question: "Who was at fault for the accident?",
    hint: "Fault affects your compensation eligibility.",
    options: [
      { label: "The truck driver / company was clearly at fault", tag: "Strong position" },
      { label: "I believe they were at fault, but it's disputed", tag: "Reviewable" },
      { label: "I'm not sure — it happened fast", tag: "Can be determined" },
    ],
  },
  {
    id: "insuranceContact",
    step: "4 of 4",
    question: "Has the trucking company's insurer contacted you?",
    hint: "This tells us how far along in the claims process you are.",
    options: [
      { label: "Yes — they offered a settlement amount", tag: "Do not sign anything" },
      { label: "Yes — asking questions / wanting a statement", tag: "Do not give a statement" },
      { label: "No, not yet", tag: "Act before they do" },
    ],
  },
];

const PROCESSING_STEPS = [
  "Checking commercial liability factors...",
  "Analyzing injury documentation...",
  "Reviewing insurance coverage limits...",
  "Flagging for priority review...",
];

export const ClaimEvaluationQuiz = () => {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Answers>({
    vehicleType: "",
    medicalAttention: "",
    faultStatus: "",
    insuranceContact: "",
  });
  const [processingLabel, setProcessingLabel] = useState(PROCESSING_STEPS[0]);
  const [processingIndex, setProcessingIndex] = useState(0);

  // Cycle through processing labels
  useEffect(() => {
    if (step !== "processing") return;
    const interval = setInterval(() => {
      setProcessingIndex((prev) => {
        const next = prev + 1;
        if (next < PROCESSING_STEPS.length) {
          setProcessingLabel(PROCESSING_STEPS[next]);
          return next;
        }
        clearInterval(interval);
        return prev;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [step]);

  // Transition from processing to result
  useEffect(() => {
    if (step !== "processing") return;
    const timer = setTimeout(() => {
      setStep("result");
    }, 2800);
    return () => clearTimeout(timer);
  }, [step]);

  const handleOptionSelect = (questionId: string, optionLabel: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionLabel }));
    setTimeout(() => {
      if (step === 3) {
        setStep("processing");
      } else {
        setStep((prev) => (typeof prev === "number" ? (prev + 1) as Step : prev));
      }
    }, 300);
  };

  const currentQuestion = typeof step === "number" ? QUESTIONS[step] : null;
  const progress = typeof step === "number" ? ((step) / 4) * 100 : 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Progress Bar */}
      {step !== "result" && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              {step === "processing" ? "Evaluating" : `Question ${typeof step === "number" ? step + 1 : ""} of 4`}
            </span>
            <span className="text-xs font-bold text-bronze">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-bronze rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${step === "processing" ? 90 : progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[380px]">
        <AnimatePresence mode="wait">
          {/* Question Step */}
          {typeof step === "number" && currentQuestion && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-10"
            >
              <p className="text-xs font-bold text-bronze uppercase tracking-widest mb-3">
                {currentQuestion.step}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-snug">
                {currentQuestion.question}
              </h3>
              <p className="text-sm text-gray-400 mb-8">{currentQuestion.hint}</p>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(currentQuestion.id, option.label)}
                    className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-bronze/60 hover:bg-navy/5 transition-all duration-200 text-left"
                  >
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold text-sm group-hover:text-navy transition-colors">
                        {option.label}
                      </span>
                      <span className="text-[11px] text-gray-400 mt-0.5 group-hover:text-bronze transition-colors">
                        {option.tag}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-bronze shrink-0 transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Processing Step */}
          {step === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center p-10 text-center min-h-[380px] gap-6"
            >
              <Loader2 className="w-12 h-12 text-bronze animate-spin" />
              <div>
                <p className="text-lg font-bold text-gray-800 mb-2">Analyzing Your Responses</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={processingLabel}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-400"
                  >
                    {processingLabel}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Result / Lead Capture Step */}
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Result Header */}
              <div className="bg-navy px-8 md:px-10 py-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bronze/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-6 h-6 text-bronze" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bronze uppercase tracking-widest mb-1">
                      Evaluation Complete
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                      Your claim qualifies for a professional review.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="px-8 md:px-10 py-8">
                {/* Alert Banner */}
                <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-700 leading-relaxed">
                    <strong>Important:</strong> Based on your answers, the insurance company is likely liable for significant damages. Do <strong>not</strong> provide them with a recorded statement before speaking to a claim advocate.
                  </p>
                </div>

                {/* CTA Copy */}
                <div className="text-center mb-8">
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                    Enter your details below to receive a free, no-obligation review of your case from a qualified Texas truck accident advocate — within the next few hours.
                  </p>
                </div>

                {/* GHL Form Embed */}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/6wNw6u81ALfekVKiIo7b"
                  style={{ width: "100%", height: "400px", border: "none", display: "block" }}
                  id="inline-claim-review-6wNw6u81ALfekVKiIo7b"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-activation-type="alwaysActivated"
                  data-deactivation-type="neverDeactivate"
                  data-form-name="Contact Form"
                  data-height="400"
                  data-layout-iframe-id="inline-claim-review-6wNw6u81ALfekVKiIo7b"
                  data-form-id="6wNw6u81ALfekVKiIo7b"
                  title="Claim Review Form"
                />
                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Reassurance strip */}
      {step !== "result" && (
        <p className="text-center text-xs text-gray-400 mt-4">
          No spam. No obligation. Your information is never sold or shared.
        </p>
      )}
    </div>
  );
};
