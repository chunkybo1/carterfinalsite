"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Diamond, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-navy/40 backdrop-blur-xl border-b border-white/10 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]" 
          : "bg-transparent py-4"
      }`}
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
            <Link href="/about" className="text-white/90 hover:text-gold transition-colors font-medium">About</Link>
            <Link href="/results" className="text-white/90 hover:text-gold transition-colors font-medium">Results</Link>
            <Link href="/reviews" className="text-white/90 hover:text-gold transition-colors font-medium">Reviews</Link>
            <Link href="/contact" className="text-white/90 hover:text-gold transition-colors font-medium">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:5551234567" className="flex items-center gap-2 text-white font-bold hover:text-gold transition-colors">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
            <Button size="sm" className="bg-gold hover:bg-gold-hover text-white border-none">
              Free Case Review
            </Button>
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
            <Button className="w-full bg-gold hover:bg-gold-hover text-white mt-2">
              Free Case Review
            </Button>
          </Container>
        </motion.div>
      )}
    </motion.header>
  );
};




