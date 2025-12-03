"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, CheckCircle } from "lucide-react";
import { PRACTICE_AREAS_DATA } from "@/lib/services-data";

export const ConsultationCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "",
    description: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.caseType) {
      newErrors.caseType = "Please select a case type";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Please provide a brief description";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        caseType: "",
        description: "",
      });
    }, 3000);
  };

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
              Ready to <span className="text-bronze">Fight Back?</span>
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
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ve received your message and will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-serif font-bold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-serif font-bold text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="(915) 555-1234"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-serif font-bold text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="caseType" className="block text-sm font-serif font-bold text-navy mb-2">
                      Case Type *
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      value={formData.caseType}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.caseType}
                      aria-describedby={errors.caseType ? "caseType-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze ${
                        errors.caseType ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a case type</option>
                      {PRACTICE_AREAS_DATA.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                    {errors.caseType && (
                      <p id="caseType-error" className="mt-1 text-sm text-red-600" role="alert">{errors.caseType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-serif font-bold text-navy mb-2">
                      Brief Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      aria-required="true"
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? "description-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze ${
                        errors.description ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tell us briefly what happened..."
                    />
                    {errors.description && (
                      <p id="description-error" className="mt-1 text-sm text-red-600" role="alert">{errors.description}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full bg-bronze text-navy hover:opacity-90 font-serif font-bold uppercase tracking-wider"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              )}
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

