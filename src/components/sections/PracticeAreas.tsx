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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center z-30">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
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

      <Container className="relative z-20 h-full flex flex-col justify-center py-20">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
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
            className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight"
          >
            Areas of <span className="text-bronze">Practice</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-gray-400 leading-relaxed max-w-lg"
          >
            Every case is different. Our commitment never is. We bring specialized expertise to every battle we fight.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {PRACTICE_AREAS.map((area) => (
            <motion.div 
              key={area.id} 
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <PracticeCard data={area} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

const PracticeCard = ({ data }: { data: PracticeArea }) => {
  return (
    <div
      className="group relative bg-[#0f1d2f]/80 backdrop-blur-sm border border-white/5 p-6 min-h-[260px] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-[2px] bg-bronze w-0 transition-all duration-500 group-hover:w-full" />

      {/* Content Top */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex justify-end mb-4">
          <div className="relative">
            <data.icon 
              className="w-8 h-8 text-bronze stroke-[1.5px] transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(184,149,106,0.3)]" 
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-8 bg-bronze/30 mb-4" />

        {/* Text */}
        <h3 className="text-lg font-bold uppercase tracking-wide mb-2 text-white transition-colors duration-300 group-hover:text-bronze">
          {data.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
          {data.description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-bronze text-xs font-bold mt-4 transition-all duration-500 transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
        <span>Learn More</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
};

