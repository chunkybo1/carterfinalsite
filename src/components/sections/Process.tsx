"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Car Accidents",
    body: "When the weight of a vehicle collision threatens to overwhelm your future, we step in to shift the balance. We handle the complex insurance negotiations and aggressive defense tactics, ensuring you aren't just another claim number in their system.",
    image: {
      src: "/process-1.jpg",
      alt: "Strategic legal representation for car accident victims",
    },
  },
  {
    id: 2,
    title: "Wrongful Death",
    body: "In the wake of an unthinkable loss, justice is the only path forward. We provide the steady hand and relentless advocacy required to hold negligent parties accountable, honoring the legacy of your loved one by securing the protection your family deserves.",
    image: {
      src: "/process-2.jpg",
      alt: "Compassionate and aggressive wrongful death litigation",
    },
  },
  {
    id: 3,
    title: "Medical Malpractice",
    body: "Trust is a sacred bond, and when medical professionals violate it, the consequences are catastrophic. We cut through the institutional silence of hospitals and healthcare giants to expose the truth and recover the compensation needed for life-altering injuries.",
    image: {
      src: "/process-3.jpg",
      alt: "Holding medical institutions accountable for negligence",
    },
  },
];

export const Process = () => {
  return (
    <section className="relative w-full bg-transparent py-24 lg:py-40">
      <Container>
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-6 md:p-10 border border-white/5 bg-navy/5 backdrop-blur-sm transition-all duration-500 hover:border-bronze/20 hover:bg-navy/10"
            >
              {/* Thin Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-bronze/20" />
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-bronze/20" />
              <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-bronze/20" />
              <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-bronze/20" />

              {/* Image Side */}
              <div className={`relative aspect-[16/10] md:aspect-square overflow-hidden border border-white/5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {/* Desaturation overlay */}
                <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-navy/10" />
              </div>

              {/* Text Side */}
              <div className="space-y-6">
                <div className="h-[2px] w-12 bg-bronze mb-6" />
                
                <h3 className="text-3xl lg:text-4xl font-serif text-white leading-tight font-bold">
                  {step.title}
                </h3>
                
                <p className="text-base lg:text-lg font-sans text-light-steel leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
