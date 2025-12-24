"use client";

import React from "react";
import Image from "next/image";

const PROCESS_STEPS = [
  {
    id: 1,
    number: "01",
    title: "We Listen",
    body: "Every case starts with understanding your story. We take the time to hear what happened, how it affected you, and what you need to move forward. No rushed consultations, no assumptions—just genuine attention to your situation.",
    image: {
      src: "/process-1.jpg",
      alt: "Scales of justice, gavel, and law books representing listening and understanding",
      label: "Listen",
    },
  },
  {
    id: 2,
    number: "02",
    title: "We Investigate",
    body: "While you focus on recovery, we build your case. Our team digs deep into the facts, gathers evidence, and prepares every detail as if we're going to trial. Because thorough preparation is how you win before you ever step into a courtroom.",
    image: {
      src: "/process-2.jpg",
      alt: "Gavel with golden band and scales of justice representing investigation",
      label: "Investigate",
    },
  },
  {
    id: 3,
    number: "03",
    title: "We Fight",
    body: "When it's time to negotiate or go to trial, we fight with everything we've got. We don't back down from insurance companies or opposing counsel. Your fight is our fight, and we're here to win.",
    image: {
      src: "/process-3.jpg",
      alt: "Gavel, law book, scales of justice, and legal library representing fighting for justice",
      label: "Fight",
    },
  },
];

export const Process = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#FDFBF8] overflow-hidden">
      {/* Diagonal Navy Wedge (Left Side) */}
      <div
        className="absolute inset-0 bg-navy z-0"
        style={{
          clipPath: "polygon(0 100%, 0 0, 45% 0, 35% 100%)",
        }}
      />

      {/* Left Zone - Images Stacked to Fill Navy Section */}
      <div className="absolute inset-0 z-10 hidden md:block">
        {PROCESS_STEPS.map((step, index) => {
          // Calculate position for each third of the section
          const topPercent = index * 33.33;
          const heightPercent = 33.33;
          const bottomPercent = (index + 1) * 33.33;

          // Calculate right edge positions based on section divider
          // Section divider: 45% at 0%, 35% at 100% (straight diagonal)
          // Linear interpolation for each third
          const rightTop = 45 - (10 * (topPercent / 100)); // 10% change over 100% height
          const rightBottom = 45 - (10 * (bottomPercent / 100));

          return (
            <React.Fragment key={step.id}>
              {/* Image - Positioned to fill its third of the navy section */}
              <div
                className="absolute left-0 w-full overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                style={{
                  top: `${topPercent}%`,
                  height: `${heightPercent}%`,
                  clipPath: `polygon(0 0, ${rightTop}% 0, ${rightBottom}% 100%, 0 100%)`,
                }}
              >
                {/* Image Background */}
                <div
                  className="absolute inset-0"
                >
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 0vw, 45vw"
                    quality={90}
                  />
                  
                  {/* Navy Overlay (20% opacity) */}
                  <div className="absolute inset-0 bg-navy/20" />

                  {/* Subtle border */}
                  <div className="absolute inset-0 border border-white/10" />
                </div>
              </div>

              {/* Gold Separator Line - Between images (not after last) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  style={{
                    transformOrigin: "left center",
                    position: "absolute",
                    top: `${bottomPercent}%`,
                    left: 0,
                    width: `${rightBottom}%`,
                    height: "1px",
                  }}
                  className="bg-bronze/60"
                />
              )}
            </React.Fragment>
          );
        })}

        {/* Gold Divider Line - Right Edge Tracing Diagonal (45% at top to 35% at bottom) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          style={{ overflow: "visible" }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Solid line */}
          <path
            d="M 45,0 L 35,100"
            stroke="rgba(201, 169, 98, 1)"
            strokeWidth="0.35"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              shapeRendering: "geometricPrecision",
            }}
          />
        </svg>
      </div>

      {/* Right Zone - Content (Cream Background) */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center py-20 px-6 lg:pl-[50%] lg:pr-[8vw]">
        <div className="space-y-32 max-w-2xl">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep
              key={step.id}
              data={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  data: {
    id: number;
    number: string;
    title: string;
    body: string;
  };
}

const ProcessStep = ({ data }: ProcessStepProps) => {
  return (
    <div className="space-y-6">
      {/* Number Indicator */}
      <div className="flex items-center gap-4">
        <div className="text-4xl lg:text-5xl font-serif text-navy/20">
          {data.number}
        </div>
        <div className="h-[2px] w-16 bg-bronze" />
      </div>

      {/* Title */}
      <h3 className="text-3xl lg:text-4xl font-serif text-navy leading-tight">
        {data.title}
      </h3>

      {/* Body */}
      <p className="text-base lg:text-lg font-sans text-gray-700 leading-relaxed max-w-xl">
        {data.body}
      </p>
    </div>
  );
};
