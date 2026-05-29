"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Phone, CheckCircle } from "lucide-react";
import CRMForm from "@/components/ui/CRMForm";

export const ConsultationCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  return (
    <section 
      id="consultation-cta"
      ref={containerRef}
      className="relative w-full bg-[#FDFBF8] py-20 lg:py-32"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6">
              Ready to fight back?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Every case is someone&apos;s whole life. We treat it that way. Get a free consultation and let&apos;s discuss how we can help you seek the justice and compensation you deserve.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-bronze" />
              <span className="text-sm font-serif">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-bronze" />
              <span className="text-sm font-serif">No Fee Unless We Win</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-bronze" />
              <span className="text-sm font-serif">100% Confidential</span>
            </div>
          </motion.div>

          {/* Form and Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CRMForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-navy text-white p-8 md:p-12 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Us Directly</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-bronze" />
                    <h4 className="text-lg font-serif font-bold">Phone</h4>
                  </div>
                  <a 
                    href="tel:9156211818" 
                    className="text-light-steel hover:text-bronze transition-colors text-lg"
                  >
                    (915) 621-1818
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-bold mb-2">Office Hours</h4>
                  <div className="text-light-steel space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-bold mb-2">Emergency</h4>
                  <p className="text-light-steel">
                    For urgent matters outside business hours, please call our emergency line. We&apos;re available 24/7 for serious injury cases.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-light-steel leading-relaxed">
                  All consultations are completely confidential. We respect your privacy and will never share your information without your explicit consent.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
