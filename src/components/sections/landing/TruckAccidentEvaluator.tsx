"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  Loader2, 
  AlertTriangle,
  ArrowLeft,
  Truck,
  Calendar,
  ShieldAlert,
  Stethoscope,
  Activity,
  Briefcase,
  PhoneCall,
  Phone
} from "lucide-react";
import Script from "next/script";

type Step = number | "processing" | "result" | "off-ramp";

interface Option {
  id: string;
  label: string;
  subtitle: string;
  points: number;
  offRampReason?: string;
  isWrongfulDeath?: boolean;
}

interface Question {
  id: string;
  title: string;
  hint: string;
  icon: React.ElementType;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "vehicleType",
    title: "Were you injured in a crash involving a commercial truck?",
    hint: "Select the option that best describes the other vehicle.",
    icon: Truck,
    options: [
      { id: "semi", label: "Yes, semi or 18-wheeler", subtitle: "Tractor-trailers, big rigs", points: 20 },
      { id: "delivery", label: "Yes, delivery or box truck", subtitle: "Amazon, FedEx, UPS, moving trucks", points: 15 },
      { id: "other_commercial", label: "Yes, other commercial vehicle", subtitle: "Dump trucks, tankers, buses", points: 10 },
      { id: "passenger", label: "No, passenger vehicle only", subtitle: "Regular cars, SUVs, pickups", points: 0, offRampReason: "non-commercial" },
    ],
  },
  {
    id: "timeSince",
    title: "When did the accident happen?",
    hint: "The statute of limitations strictly limits when you can file a claim.",
    icon: Calendar,
    options: [
      { id: "30_days", label: "Within the last 30 days", subtitle: "Recent accident", points: 30 },
      { id: "1_6_months", label: "1 to 6 months ago", subtitle: "Evidence is still relatively fresh", points: 20 },
      { id: "6_24_months", label: "6 months to 2 years ago", subtitle: "Approaching deadline", points: 10 },
      { id: "over_2_years", label: "More than 2 years ago", subtitle: "Statute of limitations may have expired", points: 0, offRampReason: "statute-expired" },
    ],
  },
  {
    id: "fault",
    title: "Who was at fault?",
    hint: "Texas law requires you to be 50% or less at fault to recover damages.",
    icon: ShieldAlert,
    options: [
      { id: "truck_driver", label: "The truck driver or trucking company", subtitle: "Clearly their fault", points: 50 },
      { id: "shared", label: "Shared fault", subtitle: "Both parties contributed", points: 20 },
      { id: "not_sure", label: "I'm not sure, still being investigated", subtitle: "Fault often requires expert investigation", points: 25 },
      { id: "me", label: "I was primarily at fault", subtitle: "More than 50% my fault", points: 0, offRampReason: "at-fault" },
    ],
  },
  {
    id: "medical",
    title: "Did you receive medical treatment?",
    hint: "Medical records are the foundation of a personal injury claim.",
    icon: Stethoscope,
    options: [
      { id: "hospitalized", label: "Hospitalized or had surgery", subtitle: "Extensive medical care", points: 60 },
      { id: "er_followup", label: "ER visit plus follow-up care", subtitle: "Emergency and ongoing treatment", points: 40 },
      { id: "doctor_only", label: "Doctor visits only", subtitle: "Primary care or urgent care", points: 20 },
      { id: "none", label: "No treatment yet", subtitle: "Have not seen a doctor", points: 0 },
    ],
  },
  {
    id: "severity",
    title: "How serious are the injuries?",
    hint: "Injury severity is the largest factor in case value.",
    icon: Activity,
    options: [
      { id: "catastrophic", label: "Catastrophic", subtitle: "TBI, paralysis, amputation", points: 100 },
      { id: "death", label: "Wrongful Death", subtitle: "Fatal injuries", points: 100, isWrongfulDeath: true },
      { id: "severe", label: "Severe", subtitle: "Broken bones, spinal injury, surgery", points: 70 },
      { id: "moderate", label: "Moderate", subtitle: "Soft tissue, whiplash, concussion", points: 40 },
      { id: "minor", label: "Minor", subtitle: "Bruising, brief medical visits", points: 10 },
    ],
  },
  {
    id: "work",
    title: "Did the accident affect your ability to work?",
    hint: "Lost wages and earning capacity impact compensation.",
    icon: Briefcase,
    options: [
      { id: "missed_weeks", label: "Missed weeks of work or still out", subtitle: "Significant income loss", points: 30 },
      { id: "missed_days", label: "Missed a few days", subtitle: "Short-term impact", points: 15 },
      { id: "lighter_duty", label: "Switched to lighter duty or reduced hours", subtitle: "Partial income loss", points: 10 },
      { id: "no_impact", label: "No work impact", subtitle: "Continued working normally", points: 0 },
    ],
  },
  {
    id: "insurance",
    title: "Has insurance contacted you?",
    hint: "Insurance companies often try to settle quickly for less than fair value.",
    icon: PhoneCall,
    options: [
      { id: "offered", label: "Yes, and they offered a settlement", subtitle: "They want to close the case", points: 10 },
      { id: "contacted", label: "Yes, but no offer yet", subtitle: "Gathering information", points: 5 },
      { id: "not_yet", label: "Not yet", subtitle: "No contact so far", points: 0 },
      { id: "signed", label: "I already signed something", subtitle: "Signed documents or release", points: 0 },
    ],
  },
];

const PROCESSING_STEPS = [
  "Analyzing liability factors...",
  "Evaluating injury severity...",
  "Calculating potential damages...",
  "Preparing final estimate...",
];

export const TruckAccidentEvaluator = () => {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const [history, setHistory] = useState<number[]>([]);
  const [offRampReason, setOffRampReason] = useState<string | null>(null);
  
  const [processingLabel, setProcessingLabel] = useState(PROCESSING_STEPS[0]);
  const [processingIndex, setProcessingIndex] = useState(0);

  const isWrongfulDeath = answers["severity"]?.isWrongfulDeath;

  // Processing animation
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
    }, 700);
    return () => clearInterval(interval);
  }, [step]);

  useEffect(() => {
    if (step !== "processing") return;
    const timer = setTimeout(() => {
      setStep("result");
    }, 3000);
    return () => clearTimeout(timer);
  }, [step]);

  const handleOptionSelect = (questionId: string, option: Option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    
    setTimeout(() => {
      if (option.offRampReason) {
        setOffRampReason(option.offRampReason);
        setStep("off-ramp");
        return;
      }

      if (typeof step === "number") {
        setHistory((prev) => [...prev, step]);
        
        let nextStep = step + 1;
        
        // Skip work impact question if wrongful death
        if (nextStep === 5 && (option.isWrongfulDeath || isWrongfulDeath)) {
          nextStep = 6;
        }

        if (nextStep >= QUESTIONS.length) {
          setStep("processing");
        } else {
          setStep(nextStep);
        }
      }
    }, 300);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const prevStep = newHistory.pop()!;
      setHistory(newHistory);
      setStep(prevStep);
      setOffRampReason(null);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((total, opt) => total + (opt.points || 0), 0);
  };

  const getValueRange = (score: number) => {
    if (score >= 180) return "$500K to $2.5M+";
    if (score >= 130) return "$150K to $750K";
    if (score >= 80) return "$50K to $250K";
    if (score >= 40) return "$15K to $75K";
    return "$5K to $25K";
  };

  const score = calculateScore();
  const valueRange = getValueRange(score);
  
  const currentQuestion = typeof step === "number" ? QUESTIONS[step] : null;
  const progress = typeof step === "number" ? (step / QUESTIONS.length) * 100 : 100;

  const renderOffRamp = () => {
    let title = "We might not be the best fit.";
    let message = "Based on your answers, we may not be able to represent you.";
    
    if (offRampReason === "non-commercial") {
      title = "We specialize in commercial truck accidents.";
      message = "Because your accident involved only passenger vehicles, we recommend contacting a general personal injury law firm that handles standard car accidents.";
    } else if (offRampReason === "statute-expired") {
      title = "The statute of limitations may have expired.";
      message = "In Texas, you generally have two years from the date of the accident to file a claim. However, there are rare exceptions. A brief call can confirm whether you still have options.";
    } else if (offRampReason === "at-fault") {
      title = "Texas fault laws may prevent recovery.";
      message = "Under Texas law, you cannot recover damages if you are found to be more than 50% at fault for the accident.";
    }

    return (
      <motion.div
        key="off-ramp"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 md:p-10 text-center"
      >
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-gray-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>
        
        <div className="bg-navy/5 rounded-xl p-6 mb-8">
          <p className="text-sm text-gray-800 font-semibold mb-2">Still want to speak with someone?</p>
          <p className="text-sm text-gray-600 mb-4">We can review your specific situation or provide a referral.</p>
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-navy/90 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Call for a Free Consultation
          </a>
        </div>

        <button 
          onClick={handleBack}
          className="text-gray-500 hover:text-navy text-sm font-semibold flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back and change my answer
        </button>
      </motion.div>
    );
  };

  const renderResult = () => {
    const noTreatment = answers["medical"]?.id === "none";
    const alreadySigned = answers["insurance"]?.id === "signed";
    const offeredSettlement = answers["insurance"]?.id === "offered";

    return (
      <motion.div
        key="result"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-black px-8 md:px-10 py-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-50 bg-[url('/boxing-match.png')] bg-cover bg-center" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-bronze/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-bronze" />
            </div>
            <p className="text-xs font-bold text-bronze uppercase tracking-widest mb-2">
              Evaluation Complete
            </p>
            
            {isWrongfulDeath ? (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
                  We can help your family pursue justice and accountability.
                </h3>
                <p className="text-blue-100 text-sm max-w-md mx-auto">
                  Estimated compensation for your family&apos;s losses: <span className="font-bold text-white">{valueRange}</span>
                </p>
              </>
            ) : (
              <>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-2">
                  {valueRange}
                </h3>
                <p className="text-blue-100 text-sm max-w-md mx-auto">
                  Estimated Case Value Range
                </p>
              </>
            )}
          </div>
        </div>

        <div className="px-8 md:px-10 py-8">
          {alreadySigned && (
            <div className="flex gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 leading-relaxed">
                <strong>Time-sensitive:</strong> Don&apos;t take any further action until you&apos;ve spoken with an attorney. Some signed agreements can be challenged within a limited window.
              </p>
            </div>
          )}

          {offeredSettlement && !alreadySigned && (
            <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Important:</strong> Insurers typically offer a fraction of fair value to unrepresented claimants. Do not accept an offer before a free attorney review.
              </p>
            </div>
          )}

          {noTreatment && (
            <div className="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <Stethoscope className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Medical Care:</strong> Documented medical treatment is the foundation of a case. We strongly encourage immediate medical evaluation regardless of how you feel right now.
              </p>
            </div>
          )}

          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
              Enter your details below to receive a free, no-obligation consultation with a qualified Texas truck accident attorney to discuss your exact case value.
            </p>
          </div>

          {/* GHL Form Embed */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/6wNw6u81ALfekVKiIo7b"
            style={{ width: "100%", height: "500px", border: "none", display: "block" }}
            id="inline-claim-review-6wNw6u81ALfekVKiIo7b"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Contact Form"
            data-height="500"
            data-layout-iframe-id="inline-claim-review-6wNw6u81ALfekVKiIo7b"
            data-form-id="6wNw6u81ALfekVKiIo7b"
            title="Claim Review Form"
          />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Progress Bar */}
      {typeof step === "number" && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Question {step + 1} of {QUESTIONS.length}
            </span>
            <span className="text-xs font-bold text-bronze">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-bronze rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[420px] relative">
        {typeof step === "number" && history.length > 0 && (
          <button 
            onClick={handleBack}
            className="absolute top-6 left-6 md:top-8 md:left-8 text-gray-400 hover:text-navy transition-colors z-10"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* Question Step */}
          {typeof step === "number" && currentQuestion && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-10 pt-16 md:pt-20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                  <currentQuestion.icon className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  {currentQuestion.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-8 ml-13">{currentQuestion.hint}</p>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(currentQuestion.id, option)}
                    className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-bronze/60 hover:bg-navy/5 transition-all duration-200 text-left"
                  >
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold text-sm group-hover:text-navy transition-colors">
                        {option.label}
                      </span>
                      <span className="text-[12px] text-gray-500 mt-0.5 group-hover:text-gray-700 transition-colors">
                        {option.subtitle}
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
              className="flex flex-col items-center justify-center p-10 text-center min-h-[420px] gap-6"
            >
              <Loader2 className="w-12 h-12 text-bronze animate-spin" />
              <div>
                <p className="text-lg font-bold text-gray-800 mb-2">Analyzing Your Case</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={processingLabel}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-500"
                  >
                    {processingLabel}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Off-Ramp Step */}
          {step === "off-ramp" && renderOffRamp()}

          {/* Result Step */}
          {step === "result" && renderResult()}
        </AnimatePresence>
      </div>

      {/* Reassurance strip */}
      {step !== "result" && step !== "off-ramp" && (
        <p className="text-center text-xs text-gray-400 mt-4">
          All information is strictly confidential. No obligation.
        </p>
      )}
    </div>
  );
};
