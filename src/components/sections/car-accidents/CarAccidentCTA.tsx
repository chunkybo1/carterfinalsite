"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Phone } from "lucide-react";

export const CarAccidentCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
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
    <section className="relative w-full bg-navy py-20 md:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-center"
          >
            Don't Let the Insurance Company Win
          </motion.h2>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 text-center"
          >
            Every day you wait, evidence disappears, witnesses forget, and the insurance company builds their case against you. Let's build yours.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Get My Free Case Review
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="cta-name" className="block text-sm font-medium text-white/90 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="cta-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-white/30 focus:border-bronze outline-none transition-colors bg-transparent text-white placeholder-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="cta-phone" className="block text-sm font-medium text-white/90 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="cta-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-white/30 focus:border-bronze outline-none transition-colors bg-transparent text-white placeholder-white/50"
                    placeholder="(915) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="cta-email" className="block text-sm font-medium text-white/90 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="cta-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-white/30 focus:border-bronze outline-none transition-colors bg-transparent text-white placeholder-white/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="cta-description" className="block text-sm font-medium text-white/90 mb-2">
                    Brief Description of Your Accident
                  </label>
                  <textarea
                    id="cta-description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 border-b-2 border-white/30 focus:border-bronze outline-none transition-colors bg-transparent text-white placeholder-white/50 resize-none"
                    placeholder="Tell us about your accident..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-bronze text-navy font-bold uppercase tracking-wider hover:bg-bronze/90 transition-colors"
                >
                  Get My Free Case Review
                </button>
              </form>
            </motion.div>

            {/* Phone CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center items-center text-center"
            >
              <Phone className="h-16 w-16 text-bronze mb-6" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Or call right now:
              </h3>
              <a
                href="tel:9156211818"
                className="text-3xl md:text-4xl font-bold text-bronze hover:text-bronze/80 transition-colors mb-8"
              >
                (915) 621-1818
              </a>
              <div className="text-white/80 space-y-2">
                <p className="font-bold">Hablamos Español</p>
                <p>Available 24/7</p>
                <p>No Fee Unless We Win</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

