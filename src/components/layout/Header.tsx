"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const SERVICE_AREAS = [
  { title: "Car Accidents", href: "/practice-areas/car-accidents" },
  { title: "Trucking Accidents", href: "/practice-areas/trucking-accidents" },
  { title: "Bicycle Accidents", href: "/practice-areas/bicycle-accidents" },
  { title: "Pedestrian Accidents", href: "/practice-areas/pedestrian-accidents" },
  { title: "Wrongful Death", href: "/practice-areas/wrongful-death" },
  { title: "Dog Bites", href: "/practice-areas/dog-bites" },
  { title: "Slip n' Fall's", href: "/practice-areas/slip-and-fall" },
  { title: "Medical Malpractice", href: "/practice-areas/medical-malpractice" },
];

const LOCATIONS = [
  { title: "El Paso, TX", href: "/" },
  { title: "Dallas, TX", href: "/locations/dallas" },
  { title: "Phoenix, AZ", href: "/locations/phoenix" },
];

export const Header = () => {
  const { openModal } = useModal();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const lastScrollYRef = useRef(0);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine current location display name
  const currentLocation = LOCATIONS.find(loc => {
    if (loc.href === "/") return pathname === "/";
    return pathname.startsWith(loc.href);
  })?.title || "Locations";

  // Use Framer Motion's useScroll for performant scroll tracking
  const { scrollY } = useScroll();

  // Handle scroll events efficiently
  useMotionValueEvent(scrollY, "change", (latest) => {
    // If mobile menu is open, don't hide header based on scroll
    if (isMobileMenuOpen) return;

    const currentScrollY = latest;
    const lastScrollY = lastScrollYRef.current;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

    // Handle header visibility (hide on scroll down, show on up)
    if (Math.abs(currentScrollY - lastScrollY) > 5) {
      let newIsHeaderVisible = isHeaderVisible;

      if (currentScrollY < viewportHeight * 0.2) {
        newIsHeaderVisible = true;
      } else if (currentScrollY > lastScrollY) {
        newIsHeaderVisible = false;
      } else if (currentScrollY < lastScrollY) {
        newIsHeaderVisible = true;
      }

      if (newIsHeaderVisible !== isHeaderVisible) {
        setIsHeaderVisible(newIsHeaderVisible);
      }
      
      lastScrollYRef.current = currentScrollY;
    }
  });

  const headerY = isHeaderVisible ? 0 : -180;

  // Header should be static and opaque on mobile, animated on desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
        setIsLocationsDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen || isLocationsDropdownOpen) {
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
      if (locationsTimeoutRef.current) {
        clearTimeout(locationsTimeoutRef.current);
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

  const handleLocationsMouseEnter = () => {
    if (locationsTimeoutRef.current) {
      clearTimeout(locationsTimeoutRef.current);
      locationsTimeoutRef.current = null;
    }
    setIsLocationsDropdownOpen(true);
  };

  const handleLocationsMouseLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setIsLocationsDropdownOpen(false);
    }, 150);
  };
  
  const navLinks = (
    <>
      <Link href="/about" className="text-white/90 hover:text-bronze transition-colors font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs 2xl:text-sm">About</Link>
      
      <div 
        ref={servicesDropdownRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="text-white/90 hover:text-bronze transition-colors font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs 2xl:text-sm flex items-center gap-1"
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
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-navy border border-bronze shadow-xl z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="py-2">
              {SERVICE_AREAS.map((area, index) => (
                <React.Fragment key={area.href}>
                    <Link
                    href={area.href}
                    className="block px-6 py-3 text-white/90 hover:text-white hover:bg-bronze/10 transition-colors font-sans text-xs tracking-[0.2em] uppercase"
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
      <Link href="/reviews" className="text-white/90 hover:text-bronze transition-colors font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs 2xl:text-sm">Reviews</Link>
      <Link href="/contact" onClick={openModal} className="text-white/90 hover:text-bronze transition-colors font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs 2xl:text-sm text-left">Contact</Link>
    </>
  );

  return (
    <motion.header
      style={{ 
        y: isMobile ? 0 : headerY,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border-b-[1px] border-bronze"
      initial={false}
      animate={{ y: isMobile ? 0 : headerY }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Row: Logo, Phone, CTA */}
      <div className="py-2 sm:py-3 md:py-2">
        <Container className="2xl:max-w-[95vw] relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative h-10 w-48 sm:h-14 sm:w-64 md:h-20 md:w-[400px] 2xl:h-24 2xl:w-[480px]">
                <Image
                  src="/carter-logo-white.png"
                  alt="Carter Law Wins"
                  fill
                  className="object-contain object-left"
                  priority
                  style={{ 
                    background: 'transparent',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </Link>

            {/* Phone & CTA - Desktop */}
            <div className="hidden md:flex items-center gap-6 2xl:gap-8">
              <a href="tel:9156211818" className="group flex items-center gap-2 text-white/70 text-[10px] 2xl:text-xs font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase hover:text-white transition-all duration-300">
                <Phone className="h-3 w-3 2xl:h-4 2xl:w-4 transition-colors duration-300 group-hover:text-white" />
                (915) 621-1818
              </a>
              <Button 
                size="sm"
                noFloat
                onClick={openModal}
                className="px-4 py-1.5 2xl:px-6 2xl:py-2 gold-button"
              >
                Free Case Review
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-[70] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8 sm:h-10 sm:w-10 text-bronze" />
              ) : (
                <Menu className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Bottom Row: Desktop Navigation */}
      <div className="hidden md:block border-t border-bronze/20 bg-navy/50 backdrop-blur-sm">
        <Container className="2xl:max-w-[95vw]">
          <div className="flex items-center justify-between py-2.5">
            {/* Left/Center: Main Links */}
            <div className="flex-1 flex justify-center">
              <nav className="flex items-center gap-12 2xl:gap-20">
                {navLinks}
              </nav>
            </div>

            {/* Right: Locations Dropdown */}
            <div 
              ref={locationsDropdownRef}
              className="relative"
              onMouseEnter={handleLocationsMouseEnter}
              onMouseLeave={handleLocationsMouseLeave}
            >
              <button
                className="text-white/90 hover:text-bronze transition-colors font-sans font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs 2xl:text-sm flex items-center gap-1"
              >
                {currentLocation}
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isLocationsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLocationsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-navy border border-bronze shadow-xl z-50"
                  onMouseEnter={handleLocationsMouseEnter}
                  onMouseLeave={handleLocationsMouseLeave}
                >
                  <div className="py-2">
                    {LOCATIONS.map((loc, index) => (
                      <React.Fragment key={loc.href}>
                        <Link
                          href={loc.href}
                          className="block px-6 py-3 text-white/90 hover:text-white hover:bg-bronze/10 transition-colors font-sans text-xs tracking-[0.2em] uppercase"
                          onClick={() => setIsLocationsDropdownOpen(false)}
                        >
                          {loc.title}
                        </Link>
                        {index < LOCATIONS.length - 1 && (
                          <div className="h-[1px] bg-bronze/30 mx-4" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[65] bg-navy flex flex-col pt-24 pb-12 px-8 overflow-y-auto md:hidden"
          >
            {/* Explicit Close Button inside Overlay */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-bronze p-2 transition-colors"
              aria-label="Close Menu"
            >
              <X className="h-8 w-8" />
            </button>
            <nav className="flex flex-col gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/about" 
                  className="text-2xl font-sans font-bold text-white hover:text-bronze transition-colors tracking-[0.2em] uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <span className="text-bronze font-sans uppercase tracking-[0.3em] text-[10px] font-bold">Service Areas</span>
                <div className="flex flex-col gap-3">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="text-lg font-sans font-medium text-white/80 hover:text-bronze transition-colors tracking-[0.2em] uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <span className="text-bronze font-sans uppercase tracking-[0.3em] text-[10px] font-bold">Locations</span>
                <div className="flex flex-col gap-3">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="text-lg font-sans font-medium text-white/80 hover:text-bronze transition-colors tracking-[0.2em] uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {loc.title}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  href="/reviews" 
                  className="text-2xl font-sans font-bold text-white hover:text-bronze transition-colors tracking-[0.2em] uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                  className="text-2xl font-sans font-bold text-white hover:text-bronze transition-colors tracking-[0.2em] uppercase"
                >
                  Contact
                </button>
              </motion.div>
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto flex flex-col gap-6 items-center"
            >
              <div className="h-[1px] w-12 bg-bronze/30" />
              <a href="tel:9156211818" className="flex items-center gap-3 text-white text-lg font-sans font-bold tracking-[0.2em] uppercase">
                <Phone className="h-5 w-5 text-bronze" />
                (915) 621-1818
              </a>
              <Button 
                size="lg"
                noFloat
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full py-5 gold-button"
              >
                Free Case Review
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
