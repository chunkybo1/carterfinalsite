"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROCESS_STEPS = [
  {
    id: 1,
    number: "01",
    title: "We Listen",
    body: "Every case starts with understanding your story. We take the time to hear what happened, how it affected you, and what you need to move forward. No rushed consultations, no assumptions—just genuine attention to your situation.",
    image: {
      alt: "Listening and understanding client stories",
      label: "Listen",
    },
  },
  {
    id: 2,
    number: "02",
    title: "We Investigate",
    body: "While you focus on recovery, we build your case. Our team digs deep into the facts, gathers evidence, and prepares every detail as if we're going to trial. Because thorough preparation is how you win before you ever step into a courtroom.",
    image: {
      alt: "Building case through investigation and evidence",
      label: "Investigate",
    },
  },
  {
    id: 3,
    number: "03",
    title: "We Fight",
    body: "When it's time to negotiate or go to trial, we fight with everything we've got. We don't back down from insurance companies or opposing counsel. Your fight is our fight, and we're here to win.",
    image: {
      alt: "Fighting for justice in courtroom",
      label: "Fight",
    },
  },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [lineComplete, setLineComplete] = React.useState(false);

  // Individual refs for animation timing
  const imageRefs = PROCESS_STEPS.map(() => useRef<HTMLDivElement>(null));
  const stepRefs = PROCESS_STEPS.map(() => useRef<HTMLDivElement>(null));

  const imageInView = imageRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));
  const stepInView = stepRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));

  // Mark line as complete after animation finishes
  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setLineComplete(true);
      }, 2700); // 1.5s delay + 1.2s duration
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#FDFBF8] overflow-hidden">
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
          const bottomPercent = (index + 1) * 33.33;
          const heightPercent = 33.33;

          // Calculate right edge positions based on section divider
          // Section divider: 45% at 0%, 35% at 100% (straight diagonal)
          // Linear interpolation for each third
          const rightTop = 45 - (10 * (topPercent / 100)); // 10% change over 100% height
          const rightBottom = 45 - (10 * (bottomPercent / 100));

          return (
            <React.Fragment key={step.id}>
              {/* Image - Positioned to fill its third of the navy section */}
              <motion.div
                ref={imageRefs[index]}
                initial={{ opacity: 0, y: 20, scale: 1.03 }}
                animate={imageInView[index] ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.6,
                  ease: "easeOut",
                }}
                className="absolute left-0 w-full overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                style={{
                  top: `${topPercent}%`,
                  height: `${heightPercent}%`,
                  clipPath: `polygon(0 0, ${rightTop}% 0, ${rightBottom}% 100%, 0 100%)`,
                }}
              >
                {/* Placeholder Background - Different gradients for each */}
                <motion.div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800"
                      : index === 1
                      ? "bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900"
                      : "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
                  }`}
                  style={{
                    filter: "saturate(0.7) brightness(0.9)",
                  }}
                  whileHover={{
                    filter: "saturate(0.85) brightness(0.95)",
                    transition: { duration: 0.3 },
                    y: -4,
                  }}
                >
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-serif font-bold text-white/20 mb-2">
                        {step.number}
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-[0.2em] font-sans">
                        {step.image.label}
                      </div>
                    </div>
                  </div>

                  {/* Navy Overlay (20% opacity) */}
                  <div className="absolute inset-0 bg-navy/20" />

                  {/* Subtle border */}
                  <div className="absolute inset-0 border border-white/10" />
                </motion.div>
              </motion.div>

              {/* Gold Separator Line - Between images (not after last) */}
              {index < PROCESS_STEPS.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={imageInView[index] ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.6 + 0.5,
                    ease: "easeOut",
                  }}
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
          {/* Animated drawing line */}
          {!lineComplete && (
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
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
          )}
          {/* Solid line that appears after animation to ensure no gaps */}
          {lineComplete && (
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
          )}
        </svg>
      </div>

      {/* Right Zone - Content (Cream Background) */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center py-20 px-6 lg:pl-[50%] lg:pr-[8vw]">
        <div className="space-y-32 max-w-2xl">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.id}
              ref={stepRefs[index]}
              data={step}
              index={index}
              isInView={stepInView[index] || isInView}
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
  index: number;
  isInView: boolean;
}

const ProcessStep = React.forwardRef<HTMLDivElement, ProcessStepProps>(({ data, index, isInView }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      className="space-y-6"
    >
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
    </motion.div>
  );
});
