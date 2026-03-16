"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export const LandingFooter = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-10 border-t border-bronze/20">
      <Container>
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="block mb-6">
            <div className="relative h-14 w-60 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/carter-logo-white.png"
                alt="Carter Law Wins"
                fill
                className="object-contain object-center"
              />
            </div>
          </Link>
          <p className="text-light-steel text-sm leading-relaxed max-w-md text-center font-sans">
            Winning is more than a result—it&apos;s a way of life. Thomas Carter provides elite trial advocacy for the injured in El Paso and across Texas.
          </p>
        </div>

        {/* Bottom Strip: Legal & Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-white/30 font-sans">
              <Link href="/privacy" className="hover:text-bronze transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-bronze transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-bronze transition-colors">Disclaimer</Link>
            </div>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-sans font-bold text-center">
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
  );
};
