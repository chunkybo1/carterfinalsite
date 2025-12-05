"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Shield, 
  Activity, 
  Car, 
  Flame, 
  Briefcase, 
  AlertTriangle, 
  ShieldAlert, 
  Scale,
  LucideIcon,
  ArrowRight 
} from "lucide-react";
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
  icon: LucideIcon;
  href: string;
  tier: 'primary' | 'secondary';
  backgroundGradient: string;
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
    icon: Shield,
    href: "/practice-areas/personal-injury",
    tier: 'primary',
    backgroundGradient: "linear-gradient(135deg, rgba(30, 58, 95, 0.6) 0%, rgba(15, 29, 47, 0.8) 100%)",
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
    icon: Car,
    href: "/practice-areas/car-accidents",
    tier: 'primary',
    backgroundGradient: "linear-gradient(135deg, rgba(70, 80, 100, 0.5) 0%, rgba(30, 58, 95, 0.7) 100%)",
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
    icon: Flame,
    href: "/practice-areas/wrongful-death",
    tier: 'primary',
    backgroundGradient: "linear-gradient(135deg, rgba(184, 149, 106, 0.15) 0%, rgba(30, 58, 95, 0.8) 100%)",
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
    icon: Activity,
    href: "/practice-areas/medical-malpractice",
    tier: 'secondary',
    backgroundGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(30, 58, 95, 0.8) 100%)",
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
    icon: Briefcase,
    href: "/practice-areas/workers-compensation",
    tier: 'secondary',
    backgroundGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(30, 58, 95, 0.8) 100%)",
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
    icon: AlertTriangle,
    href: "/practice-areas/product-liability",
    tier: 'secondary',
    backgroundGradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(30, 58, 95, 0.8) 100%)",
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
    icon: ShieldAlert,
    href: "/practice-areas/insurance-bad-faith",
    tier: 'secondary',
    backgroundGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(30, 58, 95, 0.8) 100%)",
  },
];

// --- COMPONENTS ---

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Separate primary and secondary areas
  const primaryAreas = PRACTICE_AREAS.filter(area => area.tier === 'primary');
  const secondaryAreas = PRACTICE_AREAS.filter(area => area.tier === 'secondary');

  return (
    <section ref={containerRef} className="relative w-full z-30">
      {/* Video Background */}
      <div className="absolute inset-0 w-full z-0">
        <VideoBackground overlayOpacity={0.85} className="w-full h-full object-cover" />
      </div>

      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
      
      {/* Optional Faint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <Container className="relative z-20 w-full flex flex-col py-12 md:py-16">
        {/* Header */}
        <div className="mb-4 md:mb-5 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-sans font-bold text-bronze tracking-[0.2em] uppercase mb-3"
          >
            What We Do
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[2px] bg-bronze mb-4" 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-serif text-white mb-2 md:mb-3 leading-tight"
          >
            Areas of <span className="text-bronze">Practice</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-gray-400 leading-relaxed max-w-lg"
          >
            Every case is different. Our commitment never is. We bring specialized expertise to every battle we fight.
          </motion.p>
        </div>

        {/* Primary Tier - 3 Large Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4 items-stretch"
        >
          {primaryAreas.map((area, index) => (
            <PracticeCard 
              key={area.id} 
              data={area} 
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Secondary Tier - 4 Smaller Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-stretch"
        >
          {secondaryAreas.map((area, index) => (
            <PracticeCard 
              key={area.id} 
              data={area} 
              index={index + primaryAreas.length}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

interface PracticeCardProps {
  data: PracticeArea;
  index: number;
  isInView: boolean;
}

const PracticeCard = ({ data, index, isInView }: PracticeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-10%" });
  const iconInView = useInView(iconRef, { once: true, margin: "-10%" });

  const isPrimary = data.tier === 'primary';

  return (
    <Link href={data.href}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40, scale: 1.03 }}
        animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        className="group relative overflow-hidden cursor-pointer h-full"
        style={{
          height: isPrimary ? '280px' : 'auto',
          minHeight: isPrimary ? '280px' : '200px',
        }}
      >
        {/* Background Gradient Layer */}
        <div 
          className="absolute inset-0 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.12]"
          style={{
            background: data.backgroundGradient,
            filter: 'saturate(0.7) brightness(0.9)',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f1d2f]/85 group-hover:bg-[#0f1d2f]/75 transition-colors duration-500" />

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col p-3 md:p-4 border border-white/5 group-hover:border-bronze/30 transition-colors duration-500">
          {/* Top Accent Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={cardInView ? { width: "100%" } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className="absolute top-0 left-0 h-[2px] bg-bronze"
          />

          {/* Icon - Top Left */}
          <div ref={iconRef} className="mb-2 md:mb-3">
            <motion.div
              initial={{ opacity: 0.6, scale: 0.9 }}
              animate={iconInView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ scale: 1.1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + 0.2,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              <data.icon 
                className={`text-bronze transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(184,149,106,0.4)] ${
                  isPrimary ? 'w-8 h-8 md:w-10 md:h-10' : 'w-7 h-7 md:w-8 md:h-8'
                }`}
                strokeWidth={isPrimary ? 2 : 1.5}
              />
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-8 bg-bronze/40 mb-2 md:mb-3" />

          {/* Content */}
          <div className="flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wide mb-0.5 text-white transition-colors duration-300 group-hover:text-bronze">
              {data.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[10px] md:text-xs text-bronze/80 mb-1.5 font-sans uppercase tracking-wider">
              {data.subtitle}
            </p>

            {/* Hook Line */}
            <p className={`text-gray-300 leading-tight mb-2 ${
              isPrimary ? 'text-xs' : 'text-[10px] md:text-xs'
            }`}>
              {data.hookLine}
            </p>

            {/* Proof Points */}
            <ul className="space-y-0.5 mb-2 flex-1 min-h-0">
              {data.proofPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-1">
                  <span className="text-bronze mt-0.5 text-[10px] flex-shrink-0">•</span>
                  <span className={`text-gray-400 leading-tight ${
                    isPrimary ? 'text-[10px] md:text-xs' : 'text-[10px]'
                  }`}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA - Hidden by default, shows on card hover */}
            <div className="flex items-center gap-2 text-bronze font-bold mt-auto opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className={`uppercase tracking-wider ${
                isPrimary ? 'text-sm' : 'text-xs'
              }`}>
                {data.ctaText}
              </span>
              <ArrowRight className={`transition-transform duration-300 group-hover:translate-x-1 ${
                isPrimary ? 'w-4 h-4' : 'w-3 h-3'
              }`} />
            </div>
          </div>
        </div>

        {/* Shadow on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
          }}
        />
      </motion.div>
    </Link>
  );
};
