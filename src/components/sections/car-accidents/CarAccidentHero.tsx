"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Phone } from "lucide-react";
import Image from "next/image";

export const CarAccidentHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    accidentDate: "",
    whatHappened: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler - can be connected to backend later
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-navy overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <VideoBackground overlayOpacity={0.7} className="w-full h-full object-cover" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      <Container className="relative z-20 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-4"
            >
              CAR ACCIDENT IN EL PASO?
            </motion.div>

            {/* Headline - H1 for SEO */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            >
              The Insurance Company Has Lawyers. Now You Do Too.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl"
            >
              After a wreck, you're hurt, stressed, and facing an insurance company that wants to pay you as little as possible. Thomas Carter has spent 16 years making sure that doesn't happen.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="tel:9156211818"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bronze text-navy font-bold uppercase tracking-wider hover:bg-bronze/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now (915) 621-1818
              </a>
              <button className="px-6 py-3 border-2 border-bronze text-bronze font-bold uppercase tracking-wider hover:bg-bronze/10 transition-colors">
                Hablamos Español
              </button>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-serif font-bold text-navy">Free Case Review</h2>
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
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-bronze outline-none transition-colors bg-transparent text-navy"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-bronze outline-none transition-colors bg-transparent text-navy"
                  placeholder="(915) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-bronze outline-none transition-colors bg-transparent text-navy"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="accidentDate" className="block text-sm font-medium text-navy mb-2">
                  Date of Accident (optional)
                </label>
                <input
                  type="date"
                  id="accidentDate"
                  name="accidentDate"
                  value={formData.accidentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-bronze outline-none transition-colors bg-transparent text-navy"
                />
              </div>

              <div>
                <label htmlFor="whatHappened" className="block text-sm font-medium text-navy mb-2">
                  What Happened?
                </label>
                <textarea
                  id="whatHappened"
                  name="whatHappened"
                  value={formData.whatHappened}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-bronze outline-none transition-colors bg-transparent text-navy resize-none"
                  placeholder="Tell us about your accident..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-bronze text-navy font-bold uppercase tracking-wider hover:bg-bronze/90 transition-colors"
              >
                Get Help Now
              </button>

              <p className="text-xs text-gray-600 text-center">
                No fee unless we win. 100% confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

