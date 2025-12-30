"use client";

import React, { useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

// --- DATA ---

interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  tier: 'primary' | 'secondary';
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "personal-injury",
    title: "Fighting for the Injured",
    subtitle: "Personal Injury",
    href: "/practice-areas/personal-injury",
    tier: 'primary',
  },
  {
    id: "car-accidents",
    title: "After the Wreck",
    subtitle: "Auto & Truck Accidents",
    href: "/practice-areas/car-accidents",
    tier: 'primary',
  },
  {
    id: "wrongful-death",
    title: "Justice for Families",
    subtitle: "Wrongful Death",
    href: "/practice-areas/wrongful-death",
    tier: 'primary',
  },
  {
    id: "medical-malpractice",
    title: "Holding Healthcare Accountable",
    subtitle: "Medical Malpractice",
    href: "/practice-areas/medical-malpractice",
    tier: 'secondary',
  },
  {
    id: "workers-comp",
    title: "Protecting Workers' Rights",
    subtitle: "Workers' Compensation",
    href: "/practice-areas/workers-compensation",
    tier: 'secondary',
  },
  {
    id: "product-liability",
    title: "When Products Fail",
    subtitle: "Product Liability",
    href: "/practice-areas/product-liability",
    tier: 'secondary',
  },
  {
    id: "insurance-bad-faith",
    title: "Insurance Disputes",
    subtitle: "Insurance Bad Faith",
    href: "/practice-areas/insurance-bad-faith",
    tier: 'secondary',
  },
];

// --- COMPONENTS ---

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isInitiallyVisible, setIsInitiallyVisible] = React.useState(false);
  
  // Optimize: Single useInView for entire section - prevents multiple observers
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  
  // Check if section is already visible on mount
  React.useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 1.5 && rect.bottom > -window.innerHeight * 0.5;
      setIsInitiallyVisible(visible);
    }
  }, []);
  
  // Use isInView or initial visibility check
  const shouldShow = isInView || isInitiallyVisible;

  // Separate primary and secondary areas
  const primaryAreas = PRACTICE_AREAS.filter(area => area.tier === 'primary');
  const secondaryAreas = PRACTICE_AREAS.filter(area => area.tier === 'secondary');

  return (
    <section ref={containerRef} className="relative w-full min-h-screen z-30 overflow-hidden bg-transparent">
      {/* Optional Faint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-20 w-full flex flex-col py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* Header - Optimized: Use single useInView instead of multiple whileInView */}
        <div ref={headerRef} className="mb-4 md:mb-5 max-w-2xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-3"
          >
            What We Do
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={headerInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[2px] bg-bronze mb-4" 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-2 md:mb-3 leading-tight"
          >
            Areas of <span className="text-bronze">Practice</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs text-gray-400 leading-relaxed max-w-lg"
          >
            Every case is different. Our commitment never is. We bring specialized expertise to every battle we fight.
          </motion.p>
        </div>

        {/* Primary Tier - 3 Large Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4 items-stretch w-full">
          {primaryAreas.map((area, index) => (
            <PracticeCard 
              key={area.id} 
              data={area} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Secondary Tier - 4 Smaller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 items-stretch w-full">
          {secondaryAreas.map((area, index) => (
            <PracticeCard 
              key={area.id} 
              data={area} 
              index={index + primaryAreas.length}
              isInView={shouldShow}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

interface PracticeCardProps {
  data: PracticeArea;
  index: number;
  isInView: boolean;
}

const PracticeCard = memo(({ data, index, isInView }: PracticeCardProps) => {
  const isPrimary = data.tier === 'primary';

  return (
    <Link href={data.href}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
          type: "tween"
        }}
        whileHover={{ 
          y: -4,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        className="group relative overflow-hidden cursor-pointer h-full w-full aspect-[4/3] md:aspect-auto md:h-56"
      >
        {/* Background Layers - Deep stable background */}
        <div className="absolute inset-0 bg-[#0f1d2f]/95 transition-colors duration-500 group-hover:bg-[#0f1d2f]" />
        
        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 border border-white/5 transition-all duration-500">
          
          {/* Subtitle / Category */}
          <p className="text-[10px] text-bronze font-serif uppercase tracking-[0.2em] mb-3 transition-colors duration-500">
            {data.subtitle}
          </p>

          {/* Title - Clean & Bold */}
          <h3 className="text-xl md:text-2xl font-bold text-white text-center transition-colors duration-500 font-serif leading-tight">
            {data.title}
          </h3>

          {/* CTA Diamond - Inverts on hover */}
          <div className="mt-8 relative w-12 h-12 flex items-center justify-center">
            {/* The "Diamond" shape behind the image */}
            <div className="absolute inset-0 border border-bronze/30 rotate-45 group-hover:bg-bronze group-hover:border-bronze transition-all duration-500" />
            
            {/* The Brand Image */}
            <div className="relative z-10 w-6 h-6 transition-all duration-500 group-hover:invert group-hover:brightness-0">
              <Image 
                src="/diamond.png" 
                alt="CTA" 
                fill 
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Accent Line */}
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-bronze/50"
            initial={{ width: 0 }}
            animate={isInView ? { width: '40%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
        </div>

        {/* Shadow on hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
            transform: 'translateZ(0)',
          }}
        />
      </motion.div>
    </Link>
  );
});

PracticeCard.displayName = 'PracticeCard';
