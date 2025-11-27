"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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

// --- DATA ---

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "personal-injury",
    title: "Fighting for the Injured",
    description: "When negligence causes harm, we fight for the compensation you deserve.",
    icon: Shield,
    href: "/practice-areas/personal-injury",
  },
  {
    id: "medical-malpractice",
    title: "Holding Healthcare Accountable",
    description: "Doctors make mistakes. We make them answer for it.",
    icon: Activity,
    href: "/practice-areas/medical-malpractice",
  },
  {
    id: "car-accidents",
    title: "After the Wreck",
    description: "We handle the insurers so you can focus on healing.",
    icon: Car,
    href: "/practice-areas/car-accidents",
  },
  {
    id: "wrongful-death",
    title: "Justice for Families",
    description: "Compassionate advocacy for those left behind by tragedy.",
    icon: Flame,
    href: "/practice-areas/wrongful-death",
  },
  {
    id: "workers-comp",
    title: "Protecting Workers' Rights",
    description: "Securing your livelihood when you're hurt on the job.",
    icon: Briefcase,
    href: "/practice-areas/workers-compensation",
  },
  {
    id: "product-liability",
    title: "When Products Fail",
    description: "Holding manufacturers responsible for dangerous defects.",
    icon: AlertTriangle,
    href: "/practice-areas/product-liability",
  },
  {
    id: "insurance-bad-faith",
    title: "Insurance Disputes",
    description: "Making sure your policy protects you when it counts.",
    icon: ShieldAlert,
    href: "/practice-areas/insurance-bad-faith",
  },
  {
    id: "civil-rights",
    title: "Civil Rights",
    description: "Standing up against injustice and abuse of power.",
    icon: Scale,
    href: "/practice-areas/civil-rights",
  },
];

// --- COMPONENTS ---

export const PracticeAreas = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header Animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      }
    });

    headerTl
      .fromTo(headerRef.current?.querySelector(".accent-line"), 
        { width: 0 }, 
        { width: 50, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(headerRef.current?.querySelectorAll(".fade-up"), 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );

    // Grid Staggered Reveal
    gsap.fromTo(gridRef.current?.children || [], 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#0a1628] overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Optional Faint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <Container>
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24 max-w-2xl">
          <div className="fade-up text-xs font-sans font-bold text-[#D4AF37] tracking-[0.2em] uppercase mb-4">
            What We Do
          </div>
          <div className="accent-line h-[2px] bg-[#D4AF37] mb-6" />
          <h2 className="fade-up text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Areas of <span className="text-[#D4AF37]">Practice</span>
          </h2>
          <p className="fade-up text-lg text-gray-400 leading-relaxed">
            Every case is different. Our commitment never is. We bring specialized expertise to every battle we fight.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRACTICE_AREAS.map((area) => (
            <PracticeCard key={area.id} data={area} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const PracticeCard = ({ data }: { data: PracticeArea }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group relative bg-[#0f1d2f] border border-white/5 p-8 min-h-[320px] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-[2px] bg-[#D4AF37] w-0 transition-all duration-500 group-hover:w-full" />

      {/* Content Top */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex justify-end mb-6">
          <div className="relative">
            <data.icon 
              className="w-12 h-12 text-[#D4AF37] stroke-[1.5px] transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-12 bg-[#D4AF37]/30 mb-6" />

        {/* Text */}
        <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
          {data.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-bold mt-6 transition-all duration-500 transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

