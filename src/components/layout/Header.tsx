"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasCarterDifference, setHasCarterDifference] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const carterDifferenceRef = useRef<HTMLElement | null>(null);

  // Track scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      
      // Show border after scrolling past 10px
      if (currentScrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Determine scroll direction
      if (currentScrollY < 10) {
        // Always show header at top of page
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        // Scrolling down - hide header (with threshold to prevent jitter)
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        // Scrolling up - show header (with threshold to prevent jitter)
        setIsHeaderVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find the CarterDifference section
  useEffect(() => {
    const findSection = () => {
      const section = document.querySelector('[data-section="carter-difference"]') as HTMLElement;
      if (section) {
        carterDifferenceRef.current = section;
        setHasCarterDifference(true);
      } else {
        setHasCarterDifference(false);
      }
    };
    findSection();
    // Re-check after a short delay to ensure DOM is ready
    const timeout = setTimeout(findSection, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Track scroll progress relative to CarterDifference section
  // Always call useScroll (hooks must be called unconditionally)
  // Pass undefined target if section doesn't exist - useScroll will handle it gracefully
  const { scrollYProgress } = useScroll({
    target: carterDifferenceRef.current ? carterDifferenceRef : undefined,
    offset: ["start start", "end start"],
  });

  // Fade out smoothly when entering (0-0.1), stay faded during (0.1-0.9), fade in when exiting (0.9-1)
  // If section doesn't exist, scrollYProgress stays at 0, so header stays visible (opacity 1)
  // Always use scrollYProgress (it's a MotionValue) - conditionally apply the transform result
  const headerOpacityTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [1, 0, 0, 1]
  );

  // Combine opacity from CarterDifference fade with scroll visibility
  // For the y transform, we need to handle both the scroll-based visibility and CarterDifference fade
  const headerY = isHeaderVisible ? 0 : -100;

  return (
    <motion.header
      style={{ 
        opacity: hasCarterDifference ? headerOpacityTransform : 1,
        y: headerY,
      }}
      className={`fixed top-0 left-0 right-0 z-50 bg-navy py-2.5 2xl:py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ${
        hasScrolled ? "border-b-[1px] border-bronze" : "border-b-0"
      }`}
      initial={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Container className="2xl:max-w-[95vw]">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center text-white">
            <div className="relative h-16 w-[320px] 2xl:h-20 2xl:w-[480px]">
              <Image
                src="/carter-logo-white.png"
                alt="Carter Law Wins - Winning is a Way of Life"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Right Cluster - Nav + CTA grouped together */}
          <div className="hidden md:flex items-center gap-6 2xl:gap-8">
            {/* Desktop Nav - Tighter spacing */}
            <nav className="flex items-center gap-4 2xl:gap-6">
              <Link href="/about"   className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">About</Link>
              <Link href="/services" className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">Services</Link>
              <Link href="/reviews" className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">Reviews</Link>
              <Link href="/contact" className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">Contact</Link>
          </nav>

            {/* Divider between nav and CTA */}
            <div className="h-5 w-[1px] bg-white/20" />

            {/* CTA - Tighter spacing from nav */}
            <div className="flex items-center gap-3 2xl:gap-4">
              <a href="tel:5551234567" className="group flex items-center gap-2 text-white/70 text-xs 2xl:text-sm font-serif font-medium hover:text-white transition-all duration-300">
                <Phone className="h-3 w-3 2xl:h-4 2xl:w-4 transition-colors duration-300 group-hover:text-bronze" />
                (915) 621-1818
            </a>
              <button className="px-4 py-1.5 2xl:px-6 2xl:py-2 border-2 border-bronze bg-bronze text-navy font-serif font-bold uppercase tracking-[0.2em] text-[10px] 2xl:text-xs transition-opacity duration-300 hover:opacity-90">
                Free Case Review
            </button>
            </div>
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
            <Link href="/about" className="text-white hover:text-bronze py-2">About</Link>
            <Link href="/results" className="text-white hover:text-bronze py-2">Results</Link>
            <Link href="/reviews" className="text-white hover:text-bronze py-2">Reviews</Link>
            <Link href="/contact" className="text-white hover:text-bronze py-2">Contact</Link>
            <button className="w-full relative group px-6 py-3 overflow-hidden border-2 border-bronze bg-transparent text-bronze font-sans font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300 hover:text-navy mt-2">
              <span className="absolute inset-0 w-0 bg-bronze transition-all duration-[250ms] ease-out group-hover:w-full" />
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




