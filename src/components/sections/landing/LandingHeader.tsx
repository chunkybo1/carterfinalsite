"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export const LandingHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 bg-navy shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border-b-[1px] border-bronze">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-white">
            <div className="relative h-10 w-48 sm:h-12 sm:w-56 md:h-14 md:w-64">
              <Image
                src="/carter-logo-white.png"
                alt="Carter Law Wins"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Phone CTA */}
          <a
            href="tel:9156211818"
            className="group flex items-center gap-3 bg-bronze hover:bg-white text-white hover:text-navy px-4 py-2 sm:px-6 sm:py-2.5 transition-all duration-300 font-serif font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now:</span> (915) 621-1818
          </a>
        </div>
      </Container>
    </header>
  );
};
