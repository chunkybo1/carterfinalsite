"use client";

import React from "react";
import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const PRACTICE_AREAS = [
  { title: "Car Accidents", href: "/practice-areas/car-accidents" },
  { title: "Trucking Accidents", href: "/practice-areas/trucking-accidents" },
  { title: "Bicycle Accidents", href: "/practice-areas/bicycle-accidents" },
  { title: "Pedestrian Accidents", href: "/practice-areas/pedestrian-accidents" },
  { title: "Wrongful Death", href: "/practice-areas/wrongful-death" },
  { title: "Slip n' Fall's", href: "/practice-areas/slip-and-fall" },
  { title: "Medical Malpractice", href: "/practice-areas/medical-malpractice" },
];

const QUICK_LINKS = [
  { title: "Home", href: "/" },
  { title: "About Thomas Carter", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Client Reviews", href: "/reviews" },
  { title: "Contact Us", href: "/contact" },
];

export const Footer = () => {
  return (
    <>
      {/* 1. Pre-Footer Bar: Hablamos Español & Emergency Status */}
      <div className="relative w-full bg-bronze py-4 overflow-hidden">
        {/* Mirror lines for consistency */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-navy/10" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-navy/10" />
        
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-navy">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-navy animate-pulse" />
              <span className="text-xs font-sans font-black uppercase tracking-[0.2em]">
                Hablamos Español • Available 24/7 for Emergency Consultations
              </span>
            </div>
            <a 
              href="tel:9156211818" 
              className="text-sm font-serif font-bold text-navy hover:text-navy/80 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Emergency Line: (915) 621-1818
            </a>
          </div>
        </Container>
      </div>

      {/* Main Footer: Architectural Grid */}
      <footer className="bg-navy text-white pt-24 pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* Column 1: Brand & Social */}
            <div className="space-y-8">
              <Link href="/" className="block">
                <div className="relative h-16 w-64">
                  <Image
                    src="/carter-logo-v2.png"
                    alt="Carter Law Wins"
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs font-sans">
                Winning isn&apos;t just a result—it&apos;s the standard. Thomas Carter provides 
                elite trial advocacy for the injured in El Paso and across Texas.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/carter-law-firm-pc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Carter Law Firm on LinkedIn"
                  className="w-10 h-10 rounded-full border border-bronze/30 flex items-center justify-center text-white hover:bg-bronze hover:text-navy transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/carterlawwins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Carter Law Firm on Instagram"
                  className="w-10 h-10 rounded-full border border-bronze/30 flex items-center justify-center text-white hover:bg-bronze hover:text-navy transition-all duration-300"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

          {/* Column 2: Expertise Areas (Practice Areas) */}
            <div>
              <h4 className="font-serif font-bold text-bronze uppercase tracking-[0.2em] text-xs mb-8">Expertise</h4>
              <ul className="space-y-4 text-sm font-sans">
                {PRACTICE_AREAS.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href} className="text-white/70 hover:text-bronze transition-colors flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-bronze rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Firm Navigation */}
            <div>
              <h4 className="font-serif font-bold text-bronze uppercase tracking-[0.2em] text-xs mb-8">Firm</h4>
              <ul className="space-y-4 text-sm font-sans">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-bronze transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Headquarters */}
            <div className="space-y-8">
              <h4 className="font-serif font-bold text-bronze uppercase tracking-[0.2em] text-xs mb-8">Contact</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-bronze shrink-0" />
                  <p className="text-sm text-white/80 font-sans leading-relaxed">
                    124 W. Castellano Drive, UNIT 103<br />
                    El Paso, TX 79912
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="h-6 w-6 text-bronze shrink-0" />
                  <div className="text-3xl font-serif font-bold text-white leading-none tracking-tight">
                    (915) 621-1818
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-bronze shrink-0" />
                  <p className="text-sm text-white/80 font-sans">
                    office@carterlawwins.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Strip: Legal & Copyright */}
          <div className="pt-10 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-[10px] uppercase tracking-widest font-bold text-white/50 font-sans">
                <Link href="/privacy" className="hover:text-bronze transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-bronze transition-colors">Terms of Service</Link>
                <Link href="/disclaimer" className="hover:text-bronze transition-colors">Disclaimer</Link>
              </div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-sans font-bold">
                © {new Date().getFullYear()} The Carter Law Firm, P.C. All Rights Reserved.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-[10px] text-white/30 uppercase tracking-tighter leading-loose text-center font-sans">
                Attorney Advertising. This website is for informational purposes only. No attorney-client relationship is formed until a contract is signed. 
                Prior results do not guarantee a similar outcome. Thomas Carter is licensed to practice in Texas, Arizona, and New Mexico.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
