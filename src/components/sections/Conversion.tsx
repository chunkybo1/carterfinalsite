"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Conversion = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Contact Us Today - Get Your Free Case Review
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below or call us directly.
            </p>
          </div>

          <form className="bg-white p-8 md:p-12 shadow-lg border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gold outline-none transition-colors bg-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gold outline-none transition-colors bg-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gold outline-none transition-colors bg-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gold outline-none transition-colors bg-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gold outline-none transition-colors bg-transparent resize-none"
                placeholder="Tell us about your case..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms and conditions and privacy policy.
              </label>
            </div>

            <Button className="w-full bg-gold hover:bg-gold-hover text-white text-lg font-semibold py-4 mt-4 border-none">
              Submit
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};
