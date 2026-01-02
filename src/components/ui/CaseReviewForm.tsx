"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface CaseReviewFormProps {
  dark?: boolean;
}

export const CaseReviewForm = ({ dark = false }: CaseReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    accidentDate: "",
    whatHappened: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const textColor = dark ? "text-white" : "text-navy";
  const labelColor = dark ? "text-white/70" : "text-navy/70";
  const borderColor = dark ? "border-white/20" : "border-gray-300";
  const inputBg = "bg-transparent";

  if (isSubmitted) {
    return (
      <div className={`${dark ? 'bg-navy/40 backdrop-blur-md border border-white/10' : 'bg-white/95 backdrop-blur-sm shadow-2xl'} p-6 md:p-8 rounded-lg text-center py-16`}>
        <div className="flex justify-center mb-6">
          <Image
            src="/diamond.png"
            alt=""
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h2 className={`text-2xl font-serif font-bold ${textColor} mb-4`}>Message Received</h2>
        <p className={`${labelColor} font-sans leading-relaxed`}>
          Thank you for reaching out. Thomas Carter or a senior member of our team will review your case and contact you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 bg-bronze text-navy hover:bg-navy hover:text-bronze border border-transparent hover:border-bronze"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className={`${dark ? 'bg-navy/40 backdrop-blur-md border border-white/10' : 'bg-white/95 backdrop-blur-sm shadow-2xl'} p-6 md:p-8 rounded-lg`}>
      <div className="flex items-center gap-3 mb-6">
        <h2 className={`text-2xl font-serif font-bold ${textColor}`}>Free Case Review</h2>
        <Image
          src="/diamond.png"
          alt=""
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={`block text-xs font-sans font-bold uppercase tracking-wider ${labelColor} mb-2`}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-0 py-3 border-b-2 ${borderColor} focus:border-bronze outline-none transition-colors ${inputBg} ${textColor}`}
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className={`block text-xs font-sans font-bold uppercase tracking-wider ${labelColor} mb-2`}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full px-0 py-3 border-b-2 ${borderColor} focus:border-bronze outline-none transition-colors ${inputBg} ${textColor}`}
              placeholder="(915) 555-1234"
            />
          </div>
          <div>
            <label htmlFor="email" className={`block text-xs font-sans font-bold uppercase tracking-wider ${labelColor} mb-2`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-0 py-3 border-b-2 ${borderColor} focus:border-bronze outline-none transition-colors ${inputBg} ${textColor}`}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="whatHappened" className={`block text-xs font-sans font-bold uppercase tracking-wider ${labelColor} mb-2`}>
            Brief Description of Incident
          </label>
          <textarea
            id="whatHappened"
            name="whatHappened"
            value={formData.whatHappened}
            onChange={handleChange}
            rows={3}
            className={`w-full px-0 py-3 border-b-2 ${borderColor} focus:border-bronze outline-none transition-colors ${inputBg} ${textColor} resize-none`}
            placeholder="How can we help?"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-bronze text-navy hover:bg-navy hover:text-bronze border border-transparent hover:border-bronze transition-all duration-300 font-serif font-bold uppercase tracking-widest mt-4"
        >
          {isSubmitting ? "Sending..." : "Get My Free Consultation"}
        </Button>

        <p className={`text-[10px] uppercase tracking-tighter text-center ${labelColor} mt-4`}>
          Confidential • No Fee Unless We Win • Available 24/7
        </p>
      </form>
    </div>
  );
};

