"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Star, Trophy, Scale, Shield, ArrowRight } from "lucide-react";
import { FEATURED_RESULTS, CLIENT_TESTIMONIALS, RECOGNITIONS } from "@/lib/services-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function ReviewsContent() {
  return (
    <main className="min-h-screen bg-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A76C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-bronze" />
              <span className="eyebrow">Proven Results</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6">
              El Paso personal injury client reviews.
            </h1>
            
            <p className="text-xl text-light-steel max-w-2xl mx-auto leading-relaxed">
              Real results for real people. Our clients trust us to fight for them, 
              and we deliver.
            </p>

            {/* Rating Badge */}
            <div className="mt-10 inline-flex flex-col items-center bg-navy/50 border border-bronze/30 px-8 py-6 rounded-sm">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-bronze text-bronze" />
                ))}
              </div>
              <p className="text-white font-serif text-2xl font-bold">5.0 / 5.0 Rating</p>
              <p className="text-light-steel text-xs uppercase tracking-widest mt-1">Based on 99+ Google Reviews</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="relative py-20 lg:py-28 bg-[#0a1421]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="eyebrow mb-4">Case Results</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.05]">
              Proven settlements and verdicts.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_RESULTS.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-navy border border-white/5 p-8 hover:border-bronze/30 transition-all duration-500"
              >
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-serif font-bold text-bronze">
                    {result.amount}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-sans font-bold text-white/60 uppercase tracking-widest">
                    {result.caseType}
                  </span>
                </div>
                <p className="text-light-steel text-sm leading-relaxed mb-4">
                  {result.context}
                </p>
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-red-400/80 uppercase tracking-wider">Challenge:</span>
                    <p className="text-gray-400 text-xs mt-1">{result.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-green-400/80 uppercase tracking-wider">Outcome:</span>
                    <p className="text-gray-400 text-xs mt-1">{result.outcome}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-bronze scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-10">
            * Past results do not guarantee future outcomes. Each case is unique.
          </p>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 lg:py-28 bg-navy">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="eyebrow mb-4">Client Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.05]">
              Hear from those we&rsquo;ve helped.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLIENT_TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col bg-[#0a1421] p-8 md:p-10 border border-white/5 hover:border-bronze/30 hover:-translate-y-1 transition-all duration-500 rounded-sm overflow-hidden"
              >
                {/* Decorative background quote */}
                <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700 -rotate-12 group-hover:rotate-0">
                  <svg className="w-32 h-32 fill-white" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.12 4.36-1.4 1.2-3.56 2.12-6.2 2.12-4.4 0-8.04-3.56-8.04-8s3.64-8 8.04-8c2.4 0 4.16.92 5.48 2.2l2.32-2.32C17.84 2.52 15.4 1.44 12.48 1.44 6.68 1.44 2 6.16 2 12s4.68 10.56 10.48 10.56c3.12 0 5.48-1.04 7.28-2.92 1.88-1.88 2.48-4.52 2.48-6.72 0-.64-.04-1.28-.12-1.92h-9.64z"/>
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-bronze text-bronze" />
                      ))}
                    </div>
                    {/* Minimal G-Icon */}
                    <svg viewBox="0 0 24 24" width="18" height="18" className="opacity-70" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  <p className="text-lg text-white font-serif leading-relaxed mb-8 flex-grow whitespace-pre-wrap">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="pt-6 border-t border-white/10 flex items-center gap-4 mt-auto">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-bronze font-serif text-lg font-bold shrink-0"
                    >
                      {testimonial.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-white font-sans font-bold text-sm">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-bronze text-[10px] uppercase tracking-widest font-bold">
                          {testimonial.caseType}
                        </p>
                        <span className="text-white/20 text-[10px]">•</span>
                        <p className="text-light-steel text-[10px] uppercase tracking-widest">
                          El Paso, TX
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recognitions Section */}
      <section className="relative py-16 bg-[#0a1421] border-y border-white/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-5 h-5 text-bronze" />
              <span className="eyebrow">Professional Recognition</span>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {RECOGNITIONS.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-bronze/60" />
                <span className="text-light-steel text-sm">{recognition}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-navy">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.05] mb-6">
              Ready to discuss your case?
            </h2>
            <p className="text-light-steel text-lg mb-10 leading-relaxed">
              Every case we take on receives the same dedication and fight. 
              Let&apos;s talk about how we can help you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="flex items-center gap-3 bg-ink-charcoal text-white px-8 py-4 border border-bronze/50 hover:border-bronze hover:bg-black font-sans font-bold uppercase tracking-widest text-sm transition-colors duration-300">
                  Free Case Review
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="tel:9156211818" className="group">
                <button className="flex items-center gap-3 border border-bronze/50 text-bronze px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm hover:bg-bronze/10 transition-colors duration-300">
                  Call (915) 621-1818
                </button>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
