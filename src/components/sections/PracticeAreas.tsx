"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "car-accidents",
    title: "Car Accidents",
    description: "When the insurers push back, we push harder. Strategic litigation for high-impact collisions and complex liability disputes.",
    href: "/practice-areas/car-accidents",
    image: "/process-1.jpg",
  },
  {
    id: "trucking-accidents",
    title: "Trucking Accidents",
    description: "Federal regulations, corporate defense, and massive liability. We navigate the complexities of 18-wheeler and commercial vehicle litigation.",
    href: "/practice-areas/trucking-accidents",
    image: "/process-2.jpg",
  },
  {
    id: "wrongful-death",
    title: "Wrongful Death",
    description: "Securing justice for those who can no longer speak. A steady hand and relentless advocacy through your family's hardest chapter.",
    href: "/practice-areas/wrongful-death",
    image: "/process-3.jpg",
  },
  {
    id: "bicycle-accidents",
    title: "Bicycle Accidents",
    description: "Vulnerable road users deserve elite protection. We hold negligent drivers accountable for life-altering cycling injuries.",
    href: "/practice-areas/bicycle-accidents",
    image: "/process-4.jpg",
  },
  {
    id: "pedestrian-accidents",
    title: "Pedestrian Accidents",
    description: "No protection against 4,000lb machines. We fight for pedestrians struck by inattentive or reckless drivers.",
    href: "/practice-areas/pedestrian-accidents",
    image: "/process-5.jpg",
  },
  {
    id: "slip-and-fall",
    title: "Slip n' Fall's",
    description: "Property owners have a duty to maintain safe environments. We hold businesses accountable for preventable premises hazards.",
    href: "/practice-areas/slip-and-fall",
    image: "/process-6.jpg",
  },
  {
    id: "medical-malpractice",
    title: "Medical Malpractice",
    description: "When trust is violated by professional negligence. We cut through institutional silence to uncover the truth.",
    href: "/practice-areas/medical-malpractice",
    image: "/process-7.jpg",
  },
];

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeIndex, setActiveAreaIndex] = useState(0);

  return (
    <section ref={containerRef} className="relative w-full py-24 lg:py-40 bg-transparent overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bronze/5 skew-x-[-12deg] translate-x-32 pointer-events-none hidden lg:block" />

      <Container>
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight"
          >
            Strategic <span className="italic text-bronze">Expertise.</span>
          </motion.h2>
        </div>

        {/* Billboard Layout - Desktop only */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          
          {/* Left: Navigation Menu */}
          <div className="col-span-5 space-y-2">
            {PRACTICE_AREAS.map((area, index) => (
              <motion.button
                key={area.id}
                onMouseEnter={() => setActiveAreaIndex(index)}
                onClick={() => setActiveAreaIndex(index)}
                className={`w-full text-left group relative py-4 transition-all duration-500 ${
                  activeIndex === index ? "pl-12" : "pl-0 opacity-40 hover:opacity-100"
                }`}
              >
                {/* Active Indicator Line */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-bronze"
                  />
                )}
                
                <span className={`text-4xl font-serif tracking-tight transition-colors duration-500 ${
                  activeIndex === index ? "text-white" : "text-white/80"
                }`}>
                  {area.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right: Billboard Preview */}
          <div className="col-span-7 sticky top-32 h-[600px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={PRACTICE_AREAS[activeIndex].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full group"
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden border border-white/5 bg-navy/50">
                  <Image
                    src={PRACTICE_AREAS[activeIndex].image}
                    alt={PRACTICE_AREAS[activeIndex].title}
                    fill
                    className="object-cover opacity-40 scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent flex flex-col justify-end p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-md space-y-8"
                    >
                      <p className="text-xl text-light-steel font-sans leading-relaxed">
                        {PRACTICE_AREAS[activeIndex].description}
                      </p>
                      
                      <Link 
                        href={PRACTICE_AREAS[activeIndex].href}
                        className="inline-flex items-center gap-4 group/btn"
                      >
                        <span className="text-sm font-bold text-bronze uppercase tracking-[0.3em] border-b border-bronze/0 group-hover/btn:border-bronze transition-all duration-500">
                          View Case Strategy
                        </span>
                        <div className="w-12 h-12 rounded-full border border-bronze/30 flex items-center justify-center group-hover/btn:bg-bronze group-hover/btn:border-bronze transition-all duration-500">
                          <ArrowRight className="w-5 h-5 text-bronze group-hover/btn:text-navy transition-colors" />
                        </div>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-12 pointer-events-none">
                    <div className="w-16 h-16 relative opacity-10">
                      <Image src="/diamond.png" fill className="object-contain" alt="" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout - Stacks */}
        <div className="lg:hidden space-y-12">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-white/5">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-serif text-white">{area.title}</h3>
                </div>
              </div>
              <p className="text-light-steel font-sans leading-relaxed">
                {area.description}
              </p>
              <Link 
                href={area.href}
                className="inline-flex items-center gap-3 text-bronze font-bold uppercase tracking-widest text-xs"
              >
                View Strategy <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};
