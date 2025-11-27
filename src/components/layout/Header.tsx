"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Diamond, Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-[#D4A960]/30 py-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <Diamond className="h-8 w-8 text-gold fill-current" />
            <span className="text-2xl font-serif font-bold tracking-wide">Carter Law</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-white/90 hover:text-gold transition-colors font-serif tracking-wide">About</Link>
            <Link href="/results" className="text-white/90 hover:text-gold transition-colors font-serif tracking-wide">Results</Link>
            <Link href="/reviews" className="text-white/90 hover:text-gold transition-colors font-serif tracking-wide">Reviews</Link>
            <Link href="/contact" className="text-white/90 hover:text-gold transition-colors font-serif tracking-wide">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:5551234567" className="group flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-all duration-300">
              <Phone className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-[#D4A960]" />
              (555) 123-4567
            </a>
            <button className="relative group px-6 py-2 overflow-hidden border-2 border-[#D4A960] bg-transparent text-[#D4A960] font-sans font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300 hover:text-navy">
              <span className="absolute inset-0 w-0 bg-[#D4A960] transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative z-10 flex items-center gap-2">
                Free Case Review
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-navy border-t border-white/10"
        >
          <Container className="py-4 flex flex-col gap-4">
            <Link href="/about" className="text-white hover:text-gold py-2">About</Link>
            <Link href="/results" className="text-white hover:text-gold py-2">Results</Link>
            <Link href="/reviews" className="text-white hover:text-gold py-2">Reviews</Link>
            <Link href="/contact" className="text-white hover:text-gold py-2">Contact</Link>
            <button className="w-full relative group px-6 py-3 overflow-hidden border-2 border-[#D4A960] bg-transparent text-[#D4A960] font-sans font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300 hover:text-navy mt-2">
              <span className="absolute inset-0 w-0 bg-[#D4A960] transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Free Case Review
              </span>
            </button>
          </Container>
        </motion.div>
      )}
    </motion.header>
  );
};




