"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const SERVICE_AREAS = [
  { title: "Personal Injury", href: "/practice-areas/personal-injury" },
  { title: "Auto & Truck Accidents", href: "/practice-areas/car-accidents" },
  { title: "Wrongful Death", href: "/practice-areas/wrongful-death" },
  { title: "Medical Malpractice", href: "/practice-areas/medical-malpractice" },
  { title: "Workers' Compensation", href: "/practice-areas/workers-compensation" },
  { title: "Product Liability", href: "/practice-areas/product-liability" },
  { title: "Insurance Bad Faith", href: "/practice-areas/insurance-bad-faith" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasCarterDifference, setHasCarterDifference] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const carterDifferenceRef = useRef<HTMLElement | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll direction and position - Optimized: Use requestAnimationFrame for better performance
  useEffect(() => {
    let rafId: number | null = null;
    
    const handleScroll = () => {
      if (rafId !== null) return; // Skip if already scheduled
      
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const lastScrollY = lastScrollYRef.current;
        
        // Show border after scrolling past viewport height (to avoid encroaching on hero)
        const viewportHeight = window.innerHeight;
        if (currentScrollY > viewportHeight * 0.8) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }

        // Determine scroll direction - delay hiding until past hero section
        if (currentScrollY < viewportHeight * 0.5) {
          // Always show header at top of page, but keep it minimal during hero
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          // Scrolling down - hide header (with threshold to prevent jitter)
          setIsHeaderVisible(false);
        } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
          // Scrolling up - show header (with threshold to prevent jitter)
          setIsHeaderVisible(true);
        }

        lastScrollYRef.current = currentScrollY;
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Find the CarterDifference section
  useEffect(() => {
    const findSection = () => {
      const section = document.querySelector('[data-section="carter-difference"]') as HTMLElement;
      if (section) {
        // Ensure the section has a non-static position
        const computedStyle = window.getComputedStyle(section);
        if (computedStyle.position === 'static') {
          section.style.position = 'relative';
        }
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
  // Only pass the ref if the section exists and has proper positioning
  const { scrollYProgress } = useScroll({
    target: hasCarterDifference && carterDifferenceRef.current ? carterDifferenceRef : undefined,
    offset: ["start start", "end start"],
  });

  // Fade out smoothly when entering (0-0.1), stay faded during (0.1-0.9), fade in when exiting (0.9-1)
  // If section doesn't exist, scrollYProgress stays at 0, so header stays visible (opacity 1)
  // Always use scrollYProgress (it's a MotionValue) - conditionally apply the transform result
  // Start fade later to avoid encroaching on hero video
  const headerOpacityTransform = useTransform(
    scrollYProgress,
    [0, 0.15, 0.9, 1],
    [1, 0, 0, 1]
  );

  // Combine opacity from CarterDifference fade with scroll visibility
  // For the y transform, we need to handle both the scroll-based visibility and CarterDifference fade
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
    }, 150); // Small delay to allow moving to dropdown
  };

  return (
    <motion.header
      style={{ 
        opacity: hasCarterDifference ? headerOpacityTransform : 1,
        y: headerY,
      }}
      className={`fixed top-0 left-0 right-0 z-50 bg-navy py-1.5 2xl:py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ${
        hasScrolled ? "border-b-[0.5px] border-bronze" : "border-b-0"
      }`}
      initial={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Container className="2xl:max-w-[95vw]">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
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

          {/* Right Cluster - Nav + CTA grouped together */}
          <div className="hidden md:flex items-center gap-6 2xl:gap-8">
            {/* Desktop Nav - Tighter spacing */}
            <nav className="flex items-center gap-4 2xl:gap-6">
              <Link href="/about"   className="text-white/90 hover:text-bronze transition-colors font-serif tracking-wide text-sm 2xl:text-base">About</Link>
              
              {/* Service Areas Dropdown */}
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

                {/* Dropdown Menu */}
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




