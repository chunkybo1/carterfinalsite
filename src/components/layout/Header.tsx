"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const SERVICE_AREAS = [
  { title: "Personal Injury", href: "/practice-areas/personal-injury" },
  { title: "Car Accidents", href: "/practice-areas/car-accidents" },
  { title: "Wrongful Death", href: "/practice-areas/wrongful-death" },
  { title: "Medical Malpractice", href: "/practice-areas/medical-malpractice" },
  { title: "Workers' Compensation", href: "/practice-areas/workers-compensation" },
  { title: "Product Liability", href: "/practice-areas/product-liability" },
  { title: "Insurance Bad Faith", href: "/practice-areas/insurance-bad-faith" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const lastScrollYRef = useRef(0);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Use Framer Motion's useScroll for performant scroll tracking
  const { scrollY } = useScroll();

  // Handle scroll events efficiently
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    const lastScrollY = lastScrollYRef.current;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

    // 1. Handle background opacity (hasScrolled)
    const newHasScrolled = currentScrollY > 50;
    if (newHasScrolled !== hasScrolled) {
      setHasScrolled(newHasScrolled);
    }

    // 2. Handle header visibility (hide on scroll down, show on up)
    // Only update if significantly changed to prevent jitter
    if (Math.abs(currentScrollY - lastScrollY) > 5) {
      let newIsHeaderVisible = isHeaderVisible;

      if (currentScrollY < viewportHeight * 0.2) {
        // Always visible at the top
        newIsHeaderVisible = true;
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide
        newIsHeaderVisible = false;
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show
        newIsHeaderVisible = true;
      }

      if (newIsHeaderVisible !== isHeaderVisible) {
        setIsHeaderVisible(newIsHeaderVisible);
      }
      
      // Update last scroll position only when direction check happens
      lastScrollYRef.current = currentScrollY;
    }
  });

  const headerY = isHeaderVisible ? 0 : -100;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Handle dropdown hover with delay
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const headerBackgroundOpacity = hasScrolled ? 1 : 0;
  
  return (
    <motion.header
      style={{ 
        y: headerY,
      }}
      className={`fixed top-0 left-0 right-0 z-50 py-1.5 2xl:py-2 transition-all duration-300 ${
        hasScrolled 
          ? 'shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border-b-[0.5px] border-bronze' 
          : ''
      }`}
      initial={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div 
        className="absolute inset-0 bg-navy transition-opacity duration-300 pointer-events-none"
        style={{ 
          opacity: headerBackgroundOpacity,
          zIndex: -1,
        }}
      />
      <Container className="2xl:max-w-[95vw] relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-white">
            <div className="relative h-16 w-[320px] 2xl:h-20 2xl:w-[400px]">
              <Image
                src="/carter-logo-white.png"
                alt="Carter Law Wins - Winning is a Way of Life"
                fill
                className="object-contain object-left"
                priority
                unoptimized
                style={{ 
                  background: 'transparent',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
          </Link>

          {/* Nav & CTA */}
          <div className="hidden md:flex items-center gap-6 2xl:gap-8">
            <nav className="flex items-center gap-4 2xl:gap-6">
              <Link href="/about" className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">About</Link>
              
              <div 
                ref={servicesDropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base flex items-center gap-1"
                >
                  Service Areas
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-64 bg-navy border border-bronze shadow-xl z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {SERVICE_AREAS.map((area, index) => (
                        <React.Fragment key={area.href}>
                          <Link
                            href={area.href}
                            className="block px-6 py-3 text-white/90 hover:text-bronze hover:bg-navy/80 transition-colors font-serif text-sm tracking-wide"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            {area.title}
                          </Link>
                          {index < SERVICE_AREAS.length - 1 && (
                            <div className="h-[1px] bg-bronze/30 mx-4" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
              <Link href="/reviews" className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">Reviews</Link>
              <Link href="/contact" className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">Contact</Link>
            </nav>

            <div className="h-5 w-[1px] bg-white/20" />

            <div className="flex items-center gap-3 2xl:gap-4">
              <a href="tel:9156211818" className="group flex items-center gap-2 text-white/70 text-xs 2xl:text-sm font-serif font-medium hover:text-white transition-all duration-300">
                <Phone className="h-3 w-3 2xl:h-4 2xl:w-4 transition-colors duration-300 group-hover:text-bronze" />
                (915) 621-1818
              </a>
              <Button 
                size="sm"
                noFloat
                className="px-4 py-1.5 2xl:px-6 2xl:py-2 bg-bronze text-navy hover:bg-navy hover:text-bronze border border-transparent hover:border-bronze font-serif font-bold uppercase tracking-[0.2em] text-[10px] 2xl:text-xs transition-all duration-300"
              >
                Free Case Review
              </Button>
            </div>
          </div>

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
            <Button 
              size="md"
              noFloat
              className="w-full bg-bronze text-navy hover:bg-navy hover:text-bronze border border-transparent hover:border-bronze font-serif font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 mt-2"
            >
              Free Case Review
            </Button>
          </Container>
        </motion.div>
      )}
    </motion.header>
  );
};
