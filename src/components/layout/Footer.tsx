"use client";

import React from "react";
import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-navy animate-pulse" />
              <span className="text-xs font-sans font-bold uppercase tracking-widest">
                Hablamos Español • Available 24/7 for Emergency Consultations
              </span>
            </div>
            <a 
              href="tel:9156211818" 
              className="text-sm font-serif font-bold hover:underline transition-all"
            >
              Emergency Line: (915) 621-1818
            </a>
          </div>
        </Container>
      </div>

      {/* 2. Global Footer CTA: The Closing Argument */}
      <section className="relative bg-navy py-16 lg:py-24 overflow-hidden border-b border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Your Recovery <br />
                <span className="text-bronze">Starts With a Call.</span>
              </h2>
              <p className="text-light-steel text-xl font-sans max-w-xl leading-relaxed">
                Thomas Carter has spent 16 years taking the cases other firms shy away from. 
                Put trial-tested advocacy in your corner today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-8">
              <div className="text-center sm:text-right">
                <div className="text-[10px] text-bronze uppercase tracking-[0.3em] font-bold mb-1">Direct Hotline</div>
                <a href="tel:9156211818" className="text-3xl md:text-4xl font-serif font-bold text-white hover:text-bronze transition-colors">
                  (915) 621-1818
                </a>
              </div>
              <Button 
                size="lg" 
                noFloat
                className="bg-bronze text-navy hover:bg-white hover:text-navy border border-transparent hover:border-navy px-10 transition-all duration-300 font-serif font-bold uppercase tracking-widest shadow-2xl"
              >
                Free Case Review
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Main Footer: Architectural Grid */}
      <footer className="bg-navy text-white pt-20 pb-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Column 1: Brand & Social */}
            <div className="space-y-8">
              <Link href="/" className="block">
                <div className="relative h-16 w-64">
                  <Image
                    src="/carter-logo-white.png"
                    alt="Carter Law Wins"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="text-light-steel text-sm leading-relaxed max-w-xs font-sans">
                Winning is more than a result—it&apos;s a way of life. Thomas Carter provides 
                elite trial advocacy for the injured in El Paso and across Texas.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-bronze hover:border-bronze transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-bronze hover:border-bronze transition-all duration-300"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Expertise (Practice Areas) */}
            <div>
              <h4 className="font-serif font-bold text-bronze uppercase tracking-[0.2em] text-[10px] mb-8">Expertise</h4>
              <ul className="space-y-4 text-sm font-sans">
                {PRACTICE_AREAS.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href} className="text-white/60 hover:text-bronze transition-colors flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-bronze rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Firm Navigation */}
            <div>
              <h4 className="font-serif font-bold text-bronze uppercase tracking-[0.2em] text-[10px] mb-8">Firm</h4>
              <ul className="space-y-4 text-sm font-sans">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-bronze transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Headquarters */}
            <div className="space-y-8">
              <h4 className="font-serif font-bold text-bronze uppercase tracking-[0.2em] text-[10px] mb-8">Office</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-bronze shrink-0" />
                  <p className="text-sm text-light-steel font-sans leading-relaxed">
                    123 N. Mesa Street, Suite 100<br />
                    El Paso, TX 79901
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-bronze shrink-0" />
                  <div className="text-lg font-serif font-bold text-white leading-none">
                    (915) 621-1818
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-bronze shrink-0" />
                  <p className="text-sm text-white/60 font-sans">
                    office@carterlawwins.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Strip: Legal & Copyright */}
          <div className="pt-10 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-[10px] uppercase tracking-widest font-bold text-white/30 font-sans">
                <Link href="/privacy" className="hover:text-bronze transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-bronze transition-colors">Terms of Service</Link>
                <Link href="/disclaimer" className="hover:text-bronze transition-colors">Sitemap</Link>
              </div>
              <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-sans font-bold">
                © {new Date().getFullYear()} Carter Law Wins. All Rights Reserved.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-[10px] text-white/20 uppercase tracking-tighter leading-loose text-center font-sans">
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
