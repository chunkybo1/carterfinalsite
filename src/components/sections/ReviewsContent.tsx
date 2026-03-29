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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
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
              <span className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase">
                Proven Results
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              El Paso Personal Injury Lawyer{" "}
              <span className="text-bronze">Client Reviews</span>
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
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              Case Results
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Proven Settlements <span className="text-bronze">& Verdicts.</span>
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

          <p className="text-center text-gray-500 text-xs mt-10 italic">
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
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Hear From Those <span className="text-bronze">We&apos;ve Helped.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLIENT_TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#0a1421] p-8 border border-white/5 hover:border-bronze/30 transition-all duration-500"
              >
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.12 4.36-1.4 1.2-3.56 2.12-6.2 2.12-4.4 0-8.04-3.56-8.04-8s3.64-8 8.04-8c2.4 0 4.16.92 5.48 2.2l2.32-2.32C17.84 2.52 15.4 1.44 12.48 1.44 6.68 1.44 2 6.16 2 12s4.68 10.56 10.48 10.56c3.12 0 5.48-1.04 7.28-2.92 1.88-1.88 2.48-4.52 2.48-6.72 0-.64-.04-1.28-.12-1.92h-9.64z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-bronze text-bronze" />
                  ))}
                </div>
                <p className="text-lg text-white font-serif leading-relaxed italic mb-8">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-bronze font-sans font-bold uppercase tracking-widest text-xs">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-500 text-[10px] uppercase tracking-tighter">
                      {testimonial.location}
                    </p>
                    <p className="text-gray-600 text-[9px] uppercase tracking-tighter">
                      {testimonial.caseType}
                    </p>
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
              <span className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase">
                Professional Recognition
              </span>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Discuss <span className="text-bronze">Your Case?</span>
            </h2>
            <p className="text-light-steel text-lg mb-10 leading-relaxed">
              Every case we take on receives the same dedication and fight. 
              Let&apos;s talk about how we can help you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="flex items-center gap-3 bg-bronze text-navy px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
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
