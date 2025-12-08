"use client";

import React, { useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VideoBackground } from "@/components/ui/VideoBackground";
import Link from "next/link";

// --- DATA ---

interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  hookLine: string;
  proofPoints: string[];
  ctaText: string;
  href: string;
  tier: 'primary' | 'secondary';
  backgroundImage: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "personal-injury",
    title: "Fighting for the Injured",
    subtitle: "Personal Injury",
    description: "When negligence causes harm, we fight for the compensation you deserve.",
    hookLine: "When someone else's negligence turns your life upside down, you need more than a lawyer — you need a fighter who knows how insurance companies operate.",
    proofPoints: [
      "Exposed to defense tactics from criminal trial experience",
      "Exposed to insurance playbooks before they open them"
    ],
    ctaText: "Free Case Review",
    href: "/practice-areas/personal-injury",
    tier: 'primary',
    backgroundImage: "/practice-areas/personal-injury.jpg",
  },
  {
    id: "car-accidents",
    title: "After the Wreck",
    subtitle: "Auto & Truck Accidents",
    description: "We handle the insurers so you can focus on healing.",
    hookLine: "The insurance adjuster calling you isn't on your side. We step in immediately to protect your claim, document everything, and fight for maximum compensation.",
    proofPoints: [
      "Exposed to lowball settlement tactics",
      "Exposed to 18-wheeler and commercial vehicle cases"
    ],
    ctaText: "Get Help Now",
    href: "/practice-areas/car-accidents",
    tier: 'primary',
    backgroundImage: "/practice-areas/car-accidents.jpg",
  },
  {
    id: "wrongful-death",
    title: "Justice for Families",
    subtitle: "Wrongful Death",
    description: "Compassionate advocacy for those left behind by tragedy.",
    hookLine: "Losing a loved one because of someone else's negligence is devastating. We provide compassionate, fierce advocacy to hold responsible parties accountable and secure the compensation your family deserves.",
    proofPoints: [
      "Experienced in complex wrongful death litigation",
      "Understanding of the full impact on families and futures"
    ],
    ctaText: "Learn More",
    href: "/practice-areas/wrongful-death",
    tier: 'primary',
    backgroundImage: "/practice-areas/wrongful-death.jpg",
  },
  {
    id: "medical-malpractice",
    title: "Holding Healthcare Accountable",
    subtitle: "Medical Malpractice",
    description: "Doctors make mistakes. We make them answer for it.",
    hookLine: "When medical professionals fail to meet the standard of care, the consequences can be life-altering. We have the expertise to navigate complex medical cases and hold healthcare providers accountable.",
    proofPoints: [
      "Experience with complex medical evidence and expert testimony"
    ],
    ctaText: "Get Help Now",
    href: "/practice-areas/medical-malpractice",
    tier: 'secondary',
    backgroundImage: "/practice-areas/medical-malpractice.jpg",
  },
  {
    id: "workers-comp",
    title: "Protecting Workers' Rights",
    subtitle: "Workers' Compensation",
    description: "Securing your livelihood when you're hurt on the job.",
    hookLine: "Workplace injuries shouldn't cost you your financial security. We fight to ensure you receive the full benefits you're entitled to under workers' compensation laws.",
    proofPoints: [
      "Knowledge of workers' comp system and employer tactics"
    ],
    ctaText: "Free Consultation",
    href: "/practice-areas/workers-compensation",
    tier: 'secondary',
    backgroundImage: "/practice-areas/workers-comp.jpg",
  },
  {
    id: "product-liability",
    title: "When Products Fail",
    subtitle: "Product Liability",
    description: "Holding manufacturers responsible for dangerous defects.",
    hookLine: "Defective products cause serious injuries every day. We hold manufacturers, distributors, and retailers accountable when their products harm consumers.",
    proofPoints: [
      "Experience pursuing product liability claims against major corporations"
    ],
    ctaText: "Learn More",
    href: "/practice-areas/product-liability",
    tier: 'secondary',
    backgroundImage: "/practice-areas/product-liability.jpg",
  },
  {
    id: "insurance-bad-faith",
    title: "Insurance Disputes",
    subtitle: "Insurance Bad Faith",
    description: "Making sure your policy protects you when it counts.",
    hookLine: "Insurance companies have a duty to act in good faith. When they deny valid claims or delay payments, we hold them accountable and fight for what you're owed.",
    proofPoints: [
      "Deep understanding of insurance company tactics and bad faith practices"
    ],
    ctaText: "Get Help Now",
    href: "/practice-areas/insurance-bad-faith",
    tier: 'secondary',
    backgroundImage: "/practice-areas/insurance-bad-faith.jpg",
  },
];

// --- COMPONENTS ---

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Optimize: Single useInView for entire section - prevents multiple observers
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  // Separate primary and secondary areas
  const primaryAreas = PRACTICE_AREAS.filter(area => area.tier === 'primary');
  const secondaryAreas = PRACTICE_AREAS.filter(area => area.tier === 'secondary');

  return (
    <section ref={containerRef} className="relative w-full z-30 will-change-auto overflow-hidden">
      {/* Video Background - Optimized: Pause animation when not in view, ensure it covers entire section */}
      <div className="absolute inset-0 w-full h-full z-0">
        <VideoBackground overlayOpacity={0.85} className="w-full h-full object-cover" pauseWhenNotVisible={true} />
      </div>

      {/* Background Noise Texture - Optimized: Use will-change for better performance */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10 will-change-auto" />
      
      {/* Optional Faint Grid Background - Optimized: Use transform instead of background for better performance */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none will-change-auto"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
      />

      <Container className="relative z-20 w-full flex flex-col py-10 md:py-12">
        {/* Header - Optimized: Use single useInView instead of multiple whileInView */}
        <div ref={headerRef} className="mb-4 md:mb-5 max-w-2xl">
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

        {/* Primary Tier - 3 Large Cards - Optimized: Use CSS for opacity to prevent JS recalculations */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4 items-stretch"
          style={{
            opacity: isInView ? 1 : 0,
            transition: isInView ? 'opacity 0.6s ease-out 0.4s' : 'none',
          }}
        >
          {primaryAreas.map((area, index) => (
            <PracticeCard 
              key={area.id} 
              data={area} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Secondary Tier - 4 Smaller Cards - Optimized: Use CSS for opacity to prevent JS recalculations */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-stretch"
          style={{
            opacity: isInView ? 1 : 0,
            transition: isInView ? 'opacity 0.6s ease-out 0.7s' : 'none',
          }}
        >
          {secondaryAreas.map((area, index) => (
            <PracticeCard 
              key={area.id} 
              data={area} 
              index={index + primaryAreas.length}
              isInView={isInView}
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
  // Optimize: Remove individual useInView - use parent's isInView instead
  // This eliminates 7 separate IntersectionObserver instances
  const isPrimary = data.tier === 'primary';
  
  // Calculate animation state once - prevents recalculation on every render
  const shouldAnimate = isInView;

  return (
    <Link href={data.href}>
      <motion.div
        initial={false} // Optimize: Prevent initial animation calculation
        animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 1.03 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
          // Optimize: Only animate transform and opacity (GPU-accelerated properties)
          type: "tween"
        }}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut", type: "tween" }
        }}
        whileTap={{ scale: 0.98 }}
        layout={false}
        className="group relative overflow-hidden cursor-pointer h-full"
        style={{ 
          contain: 'layout style paint',
          // Optimize: Force GPU layer for smoother animations
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Background Gradient Layer - Optimized: Use will-change and transform for GPU acceleration */}
        <div 
          className="absolute inset-0 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.12] will-change-opacity"
          style={{
            background: `linear-gradient(135deg, rgba(30, 58, 95, 0.6) 0%, rgba(15, 29, 47, 0.8) 100%)`,
            filter: 'saturate(0.7) brightness(0.9)',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        />

        {/* Dark Overlay - Optimized: Use will-change for better performance */}
        <div className="absolute inset-0 bg-[#0f1d2f]/85 group-hover:bg-[#0f1d2f]/75 transition-colors duration-500 will-change-[background-color]" />

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col p-4 md:p-6 border border-white/5 group-hover:border-bronze/30 transition-colors duration-500">
          {/* Top Accent Line - Optimized: Use CSS animation instead of JS */}
          <div 
            className="absolute top-0 left-0 h-[2px] bg-bronze z-20"
            style={{
              width: shouldAnimate ? '100%' : '0%',
              transition: shouldAnimate ? `width 0.6s ease-out ${index * 0.1 + 0.3}s` : 'none',
            }}
          />

          {/* Content */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Title */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide mb-1 text-white transition-colors duration-300 group-hover:text-bronze font-serif">
              {data.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[10px] md:text-xs text-bronze/80 mb-2 md:mb-3 font-serif uppercase tracking-wider">
              {data.subtitle}
            </p>

            {/* Hook Line */}
            <p className={`text-gray-300 leading-relaxed mb-3 md:mb-4 font-serif ${
              isPrimary ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'
            }`}>
              {data.hookLine}
            </p>

            {/* Proof Points */}
            <ul className="space-y-1 md:space-y-1.5 mb-3 md:mb-4 flex-1 min-h-0">
              {data.proofPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-2">
                  <span className="text-bronze mt-1 text-[10px] md:text-xs flex-shrink-0">•</span>
                  <span className={`text-gray-400 leading-relaxed font-serif ${
                    isPrimary ? 'text-[10px] md:text-xs' : 'text-[10px]'
                  }`}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA - Hidden by default, shows on card hover */}
            <div className="flex items-center gap-2 text-bronze font-bold mt-auto opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className={`uppercase tracking-wider font-serif ${
                isPrimary ? 'text-sm md:text-base' : 'text-xs md:text-sm'
              }`}>
                {data.ctaText}
              </span>
              <ArrowRight className={`transition-transform duration-300 group-hover:translate-x-1 ${
                isPrimary ? 'w-5 h-5 md:w-6 md:h-6' : 'w-4 h-4 md:w-5 md:h-5'
              }`} />
            </div>
          </div>
        </div>

        {/* Shadow on hover - Optimized: Use CSS instead of motion for better performance */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        />
      </motion.div>
    </Link>
  );
});

PracticeCard.displayName = 'PracticeCard';
