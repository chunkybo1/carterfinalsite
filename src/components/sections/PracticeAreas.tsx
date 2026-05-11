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
    description: "When the insurers push back, we push harder. Strategic litigation for high-impact collisions and complex liability disputes. In El Paso, traffic accidents are a daily reality, often occurring at busy intersections or along the high-speed stretches of I-10 and Loop 375. We understand the specific challenges of El Paso car accident claims, from proving fault in multi-vehicle pileups to dealing with uninsured motorists. Our firm is dedicated to securing the maximum compensation for medical bills, lost wages, and pain and suffering, ensuring that El Paso families can recover without financial ruin.",
    href: "/practice-areas/car-accidents",
    image: "/process-1.jpg",
  },
  {
    id: "trucking-accidents",
    title: "Trucking Accidents",
    description: "Federal regulations, corporate defense, and massive liability. We navigate the complexities of 18-wheeler and commercial vehicle litigation. El Paso is a critical hub for international trade, making its highways some of the most congested with commercial trucks in the nation. When a semi-truck is involved in an accident, the consequences are often catastrophic. We hold trucking companies and their insurers accountable, investigating everything from driver fatigue and hours-of-service violations to improper vehicle maintenance. Our goal is to protect the rights of El Paso residents against powerful corporate interests.",
    href: "/practice-areas/trucking-accidents",
    image: "/process-2.jpg",
  },
  {
    id: "wrongful-death",
    title: "Wrongful Death",
    description: "Securing justice for those who can no longer speak. A steady hand and relentless advocacy through your family's hardest chapter. Losing a loved one is an unimaginable tragedy, especially when it's caused by another's negligence. In El Paso, we help families navigate the legal complexities of wrongful death claims, seeking compensation for funeral expenses, loss of income, and the profound loss of companionship. We approach every case with the sensitivity it deserves, fighting fiercely to ensure that justice is served and your family's future is secured.",
    href: "/practice-areas/wrongful-death",
    image: "/process-3.jpg",
  },
  {
    id: "bicycle-accidents",
    title: "Bicycle Accidents",
    description: "Vulnerable road users deserve elite protection. We hold negligent drivers accountable for life-altering cycling injuries. El Paso's growing cycling community faces unique risks on the road. When a driver fails to share the road safely, the results for a cyclist can be devastating. We understand the specific traffic laws that protect cyclists in Texas and fight to ensure that negligent drivers are held responsible for the injuries they cause. Whether it's a 'dooring' accident or a failure to yield, we are here to champion the rights of El Paso's cyclists.",
    href: "/practice-areas/bicycle-accidents",
    image: "/process-4.jpg",
  },
  {
    id: "pedestrian-accidents",
    title: "Pedestrian Accidents",
    description: "No protection against 4,000lb machines. We fight for pedestrians struck by inattentive or reckless drivers. Pedestrian accidents in El Paso often occur in crosswalks, parking lots, and near schools, frequently resulting in life-altering injuries. We hold drivers accountable for failing to exercise the necessary care around people on foot. Our firm works to recover the compensation needed for extensive medical treatment, rehabilitation, and long-term care, ensuring that injured pedestrians have the resources they need to rebuild their lives.",
    href: "/practice-areas/pedestrian-accidents",
    image: "/process-5.jpg",
  },
  {
    id: "dog-bites",
    title: "Dog Bites",
    description: "Animal attacks leave deep scars, both physical and emotional. We hold negligent owners accountable and fight for victims' recovery. A dog attack can be a traumatic experience, particularly for children. In El Paso, dog owners have a responsibility to keep their animals restrained and safe. When they fail, we step in to hold them accountable for the physical and emotional trauma caused by an attack. We seek compensation for medical treatment, reconstructive surgery, and the psychological support necessary for a full recovery.",
    href: "/practice-areas/dog-bites",
    image: "/process-8.jpeg",
  },
  {
    id: "slip-and-fall",
    title: "Slip n' Fall's",
    description: "Property owners have a duty to maintain safe environments. We hold businesses accountable for preventable premises hazards. Whether it's a local El Paso grocery store or a large retail chain, property owners must ensure their premises are free from dangerous conditions. If you've been injured due to a spill, poor lighting, or uneven flooring, we can help you hold the property owner responsible. We meticulously investigate premises liability claims to prove that the owner knew of the hazard and failed to act, securing the justice you deserve.",
    href: "/practice-areas/slip-and-fall",
    image: "/process-6.jpg",
  },
  {
    id: "medical-malpractice",
    title: "Medical Malpractice",
    description: "When trust is violated by professional negligence. We cut through institutional silence to uncover the truth. Medical errors in El Paso hospitals and clinics can have life-changing consequences. Proving medical malpractice requires specialized expertise and the ability to take on powerful healthcare institutions. We work with medical experts to demonstrate how a provider's negligence led to injury or death, fighting for the compensation needed to cover medical costs and provide for your family's future in the face of medical negligence.",
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
        <div className="mb-12 sm:mb-16 lg:mb-24 px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="text-[10px] sm:text-xs font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight"
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
                
                <span className={`text-2xl xl:text-3xl 2xl:text-4xl font-serif tracking-tight transition-colors duration-500 ${
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent flex flex-col justify-end p-8 xl:p-12">
                    <motion.div
                      key={PRACTICE_AREAS[activeIndex].id + "-content"}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-xl space-y-6"
                    >
                      <p className="text-base xl:text-lg text-white font-sans leading-relaxed">
                        {PRACTICE_AREAS[activeIndex].description}
                      </p>
                      
                      <Link 
                        href={PRACTICE_AREAS[activeIndex].href}
                        className="inline-flex items-center gap-4 group/btn"
                      >
                        <span className="text-sm font-bold text-bronze uppercase tracking-[0.3em] border-b border-bronze/0 group-hover/btn:border-bronze transition-all duration-500">
                          Learn More
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

        {/* Mobile Layout - Stacks with better spacing */}
        <div className="lg:hidden flex flex-col gap-16 sm:gap-24">
          {PRACTICE_AREAS.map((area, index) => (
            <div
              key={area.id}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-bronze/20 rounded-sm">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">{area.title}</h3>
                </div>
              </div>
              
              <div className="px-2 space-y-6">
                <p className="text-light-steel text-base sm:text-lg font-sans leading-relaxed opacity-90">
                  {area.description}
                </p>
                <Link 
                  href={area.href}
                  className="inline-flex items-center gap-4 group/btn px-6 py-4 border border-bronze/30 hover:bg-bronze hover:border-bronze transition-all duration-300 rounded-full w-full sm:w-auto justify-center"
                >
                  <span className="text-xs font-bold text-bronze group-hover/btn:text-navy uppercase tracking-[0.2em] transition-colors">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 text-bronze group-hover/btn:text-navy transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
