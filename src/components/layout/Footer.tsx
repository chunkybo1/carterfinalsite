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
      <section className="bg-gold py-8 border-t-2 border-black border-b-2 border-black">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-2">
                Ready to Fight for You
              </h3>
              <p className="text-black/80 font-medium">
                Call us now for your free case review
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:5551234567" className="flex items-center gap-2 text-black font-bold text-xl hover:opacity-80 transition-opacity">
                <Phone className="h-5 w-5" />
                (555) 123-4567
              </a>
              <Button variant="ghost" size="lg" className="bg-black text-white hover:bg-[#1a1a1a] border-none">
                Free Case Review
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Diamond className="h-8 w-8 text-gold fill-current" />
                <span className="text-2xl font-serif font-bold">Carter Law</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Fighting for the injured across Texas, Arizona, and New Mexico. We are dedicated to securing the justice and compensation you deserve.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/results" className="text-gray-400 hover:text-white transition-colors">Case Results</Link></li>
                <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">Client Reviews</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold">Practice Areas</h3>
              <ul className="space-y-3">
                <li><Link href="/auto-accidents" className="text-gray-400 hover:text-white transition-colors">Auto Accidents</Link></li>
                <li><Link href="/workplace-injuries" className="text-gray-400 hover:text-white transition-colors">Workplace Injuries</Link></li>
                <li><Link href="/slip-and-fall" className="text-gray-400 hover:text-white transition-colors">Slip & Fall</Link></li>
                <li><Link href="/medical-malpractice" className="text-gray-400 hover:text-white transition-colors">Medical Malpractice</Link></li>
                <li><Link href="/wrongful-death" className="text-gray-400 hover:text-white transition-colors">Wrongful Death</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <strong className="text-white block">Main Office:</strong>
                  123 Legal Avenue, Suite 100<br />
                  Dallas, TX 75201
                </li>
                <li>
                  <strong className="text-white block">Phone:</strong>
                  (555) 123-4567
                </li>
                <li>
                  <strong className="text-white block">Email:</strong>
                  help@carterlaw.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Carter Law Firm. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400 text-center">
            <p>Attorney Advertising. Past results do not guarantee future outcomes.</p>
          </div>
        </Container>
      </footer>
    </>
  );
};
