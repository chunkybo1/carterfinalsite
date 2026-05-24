"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Car, 
  Truck, 
  Skull, 
  Bike, 
  User, 
  Shield, 
  AlertTriangle, 
  Stethoscope,
  LucideIcon 
} from "lucide-react";

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: LucideIcon;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "car-accidents",
    title: "Car Accidents",
    icon: Car,
    description: "Strategic litigation for high-impact collisions and complex liability disputes in El Paso.",
    href: "/practice-areas/car-accidents",
    image: "/process-1.jpg",
  },
  {
    id: "trucking-accidents",
    title: "Trucking Accidents",
    icon: Truck,
    description: "Navigating the complexities of 18-wheeler and commercial vehicle litigation.",
    href: "/practice-areas/trucking-accidents",
    image: "/process-2.jpg",
  },
  {
    id: "wrongful-death",
    title: "Wrongful Death",
    icon: Skull,
    description: "Relentless advocacy for families who have lost loved ones due to negligence.",
    href: "/practice-areas/wrongful-death",
    image: "/process-3.jpg",
  },
  {
    id: "bicycle-accidents",
    title: "Bicycle Accidents",
    icon: Bike,
    description: "Holding negligent drivers accountable for life-altering cycling injuries.",
    href: "/practice-areas/bicycle-accidents",
    image: "/process-4.jpg",
  },
  {
    id: "pedestrian-accidents",
    title: "Pedestrian Accidents",
    icon: User,
    description: "Fighting for pedestrians struck by inattentive or reckless drivers.",
    href: "/practice-areas/pedestrian-accidents",
    image: "/process-5.jpg",
  },
  {
    id: "dog-bites",
    title: "Dog Bites",
    icon: Shield,
    description: "Holding negligent owners accountable for physical and emotional trauma.",
    href: "/practice-areas/dog-bites",
    image: "/process-8.jpeg",
  },
  {
    id: "slip-and-fall",
    title: "Slip n' Fall's",
    icon: AlertTriangle,
    description: "Holding businesses accountable for preventable premises hazards.",
    href: "/practice-areas/slip-and-fall",
    image: "/process-6.jpg",
  },
  {
    id: "medical-malpractice",
    title: "Medical Malpractice",
    icon: Stethoscope,
    description: "Cutting through institutional silence to uncover the truth in medical errors.",
    href: "/practice-areas/medical-malpractice",
    image: "/process-7.jpg",
  },
];

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative w-full py-24 lg:py-32 bg-light-grey overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] sm:text-xs font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-tight"
          >
            Strategic <span className="italic text-bronze">Expertise.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-bronze mx-auto mt-8"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-navy/10 p-10 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 rounded-full bg-light-grey flex items-center justify-center mb-8 group-hover:bg-bronze transition-colors duration-300">
                {area.icon && <area.icon className="w-8 h-8 text-bronze group-hover:text-white transition-colors duration-300" />}
              </div>

              <h3 className="text-2xl font-serif font-bold text-navy mb-4 group-hover:text-bronze transition-colors">
                {area.title}
              </h3>

              <p className="text-steel font-sans text-base leading-relaxed mb-8">
                {area.description}
              </p>

              <Link 
                href={area.href}
                className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-bronze uppercase tracking-widest group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
              
              {/* Subtle background image on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none overflow-hidden">
                <Image
                  src={area.image}
                  alt=""
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};
