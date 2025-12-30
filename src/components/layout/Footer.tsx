"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Diamond, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="relative bg-navy py-12 lg:py-16 overflow-hidden">
        {/* Mirror lines for consistency */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-bronze via-bronze/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-bronze via-bronze/50 to-transparent" />
        
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                Ready to <span className="text-bronze">Fight for You</span>
              </h3>
              <p className="text-light-steel text-lg font-sans max-w-xl">
                Call us now for your free, no-obligation case review. We treat you like family.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="tel:9156211818" className="group flex flex-col items-center md:items-end gap-1">
                <span className="text-[10px] text-bronze uppercase tracking-[0.3em] font-bold">Available 24/7</span>
                <span className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-bronze transition-colors">
                  (915) 621-1818
                </span>
              </a>
              <Button 
                size="lg" 
                noFloat
                className="bg-bronze text-navy hover:bg-navy hover:text-bronze border border-transparent hover:border-bronze min-w-[220px] transition-all duration-300"
              >
                Free Case Review
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 border border-bronze rotate-45 flex items-center justify-center">
                  <Diamond className="h-5 w-5 text-bronze fill-current -rotate-45" />
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight">Carter Law</span>
              </div>
              <p className="text-light-steel leading-relaxed font-sans text-sm">
                Texas, Arizona & New Mexico&apos;s Champion for the Injured. When you&apos;re hurt and overwhelmed, you need more than a lawyer—you need a fighter.
              </p>
              <div className="flex gap-5">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-bronze hover:border-bronze transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-bronze hover:border-bronze transition-all duration-300">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-bronze hover:border-bronze transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-bronze hover:border-bronze transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-bronze mb-8">Firm</h3>
              <ul className="space-y-4 font-serif">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Thomas Carter</Link></li>
                <li><Link href="/results" className="text-gray-400 hover:text-white transition-colors">Winning Results</Link></li>
                <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">Client Reviews</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-bronze mb-8">Practice</h3>
              <ul className="space-y-4 font-serif">
                <li><Link href="/practice-areas/car-accidents" className="text-gray-400 hover:text-white transition-colors">Car Accidents</Link></li>
                <li><Link href="/practice-areas/personal-injury" className="text-gray-400 hover:text-white transition-colors">Personal Injury</Link></li>
                <li><Link href="/practice-areas/workers-compensation" className="text-gray-400 hover:text-white transition-colors">Workplace Injuries</Link></li>
                <li><Link href="/practice-areas/medical-malpractice" className="text-gray-400 hover:text-white transition-colors">Medical Malpractice</Link></li>
                <li><Link href="/practice-areas/wrongful-death" className="text-gray-400 hover:text-white transition-colors">Wrongful Death</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-bronze mb-8">Headquarters</h3>
              <ul className="space-y-6 text-gray-400 font-sans text-sm">
                <li className="flex gap-3">
                  <div className="mt-1"><Diamond className="h-3 w-3 text-bronze" /></div>
                  <div>
                    <strong className="text-white block font-serif text-base mb-1 italic">Main Office</strong>
                    123 Legal Avenue, Suite 100<br />
                    El Paso, TX 79901
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><Diamond className="h-3 w-3 text-bronze" /></div>
                  <div>
                    <strong className="text-white block font-serif text-base mb-1 italic">Contact</strong>
                    (915) 621-1818<br />
                    help@carterlawwins.com
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-sans font-bold">
            <p>&copy; {new Date().getFullYear()} Carter Law Firm. Winning is our way of life.</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
          <div className="mt-8 text-[10px] text-gray-600 text-center uppercase tracking-widest leading-loose">
            <p>Attorney Advertising. This website is for informational purposes only. No attorney-client relationship is formed until a contract is signed. Past results do not guarantee future outcomes.</p>
          </div>
        </Container>
      </footer>
    </>
  );
};
