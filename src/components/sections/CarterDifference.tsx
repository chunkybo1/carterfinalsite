"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";

// PILLAR DATA
const PILLARS = [
  {
    id: 1,
    number: "01",
    title: "RELENTLESS PREPARATION",
    body: "We don't just prepare—we over-prepare. Every case is built like we're going to trial, because that's how you win before you ever step into a courtroom.",
    visual: "preparation",
  },
  {
    id: 2,
    number: "02",
    title: "CLEAR COMMUNICATION",
    body: "No legal jargon. No guessing games. You'll always know exactly where your case stands, what's happening next, and what it means for you.",
    visual: "communication",
  },
  {
    id: 3,
    number: "03",
    title: "PERSONAL INVESTMENT",
    body: "Your fight is our fight. We don't see case numbers—we see people who need someone in their corner. That's why we're here.",
    visual: "investment",
  },
];

export const CarterDifference = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile Detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Transforms
  // Header: 0-10%
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

  // Pillar 1: Enter 10%, Exit 35%
  const pillar1Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.3, 0.35], [0, 1, 1, 0]);
  const pillar1Y = useTransform(scrollYProgress, [0.1, 0.15, 0.3, 0.35], [30, 0, 0, -30]);
  const pillar1Scale = useTransform(scrollYProgress, [0.3, 0.35], [1, 0.95]);

  // Pillar 2: Enter 36%, Exit 50% (ends earlier to make room for Pillar 3)
  const pillar2Opacity = useTransform(scrollYProgress, [0.36, 0.41, 0.45, 0.50], [0, 1, 1, 0]);
  const pillar2Y = useTransform(scrollYProgress, [0.36, 0.41, 0.45, 0.50], [30, 0, 0, -30]);
  const pillar2Scale = useTransform(scrollYProgress, [0.36, 0.41, 0.45, 0.50], [0.95, 1, 1, 0.95]);

  // Pillar 3: Enter 50%, fully visible by 55%, stays locked until 75% (long locked period like Pillars 1 & 2)
  // Then fades out by 80%, leaving gap before PracticeAreas appears
  const pillar3Opacity = useTransform(scrollYProgress, [0.50, 0.55, 0.75, 0.80], [0, 1, 1, 0]);
  const pillar3Y = useTransform(scrollYProgress, [0.50, 0.55, 0.75, 0.80], [30, 0, 0, -30]);
  const pillar3Scale = useTransform(scrollYProgress, [0.50, 0.55, 0.75, 0.80], [0.95, 1, 1, 0.95]);

  // Section Fade Out - starts after Pillar 3 has faded out
  const contentOpacity = useTransform(scrollYProgress, [0.83, 1], [1, 0]);

  // Indicators
  const indicator1Opacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0.4]);
  const indicator2Opacity = useTransform(scrollYProgress, [0.35, 0.36, 0.50], [0.4, 1, 0.4]);
  const indicator3Opacity = useTransform(scrollYProgress, [0.50, 0.51, 0.80], [0.4, 1, 0.4]);

  // If Mobile, return the mobile layout
  if (isMobile) {
    return <MobileLayout />;
  }

  return (
    <section ref={containerRef} data-section="carter-difference" className="relative h-[300vh] w-full bg-navy">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-navy)_0%,#0a1628_100%)]">
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <motion.div style={{ opacity: contentOpacity }} className="relative z-10 h-full w-full flex flex-col">
          
          {/* HEADER ZONE (Pinned Top-Left) */}
          <motion.div 
            style={{ opacity: headerOpacity, y: headerY }}
            className="absolute top-[60px] lg:top-[10vh] 2xl:top-[100px] left-[6vw] z-20 max-w-md"
          >
            <div className="text-[12px] font-sans uppercase tracking-[0.2em] text-bronze mb-3">
              Why Carter
            </div>
            <div className="w-[50px] h-[2px] bg-bronze mb-6 origin-left" />
            <h2 className="text-5xl font-serif text-white leading-tight mb-4">
              The Carter <span className="text-bronze">Difference</span>
            </h2>
            <p className="text-[18px] text-light-steel leading-relaxed">
              What sets us apart isn&apos;t just what we do—it&apos;s how we do it.
            </p>
          </motion.div>

          {/* CONTENT STAGE (Centered) - Added top padding to prevent overlap with header */}
          <div className="flex-grow flex items-center justify-center relative w-full pt-[240px] lg:pt-[280px] 2xl:pt-[320px]">
            
            {/* PILLAR 1 */}
            <motion.div style={{ opacity: pillar1Opacity, y: pillar1Y, scale: pillar1Scale }} className="absolute inset-0 flex items-center justify-center">
               <PillarContent data={PILLARS[0]} />
            </motion.div>

            {/* PILLAR 2 */}
            <motion.div style={{ opacity: pillar2Opacity, y: pillar2Y, scale: pillar2Scale }} className="absolute inset-0 flex items-center justify-center">
               <PillarContent data={PILLARS[1]} />
            </motion.div>

            {/* PILLAR 3 */}
            <motion.div style={{ opacity: pillar3Opacity, y: pillar3Y, scale: pillar3Scale }} className="absolute inset-0 flex items-center justify-center">
               <PillarContent data={PILLARS[2]} />
            </motion.div>

          </div>

          {/* PROGRESS INDICATOR (Pinned Bottom) */}
          <div className="absolute bottom-[8vh] left-0 right-0 flex justify-center items-center gap-4 z-20">
             <IndicatorItem label="01" active={true} opacity={indicator1Opacity} />
             <div className="w-[30px] h-[1px] bg-white/20" />
             <IndicatorItem label="02" active={true} opacity={indicator2Opacity} />
             <div className="w-[30px] h-[1px] bg-white/20" />
             <IndicatorItem label="03" active={true} opacity={indicator3Opacity} />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

// --- SUBCOMPONENTS ---

interface PillarData {
  id: number;
  number: string;
  title: string;
  body: string;
  visual: string;
}

const PillarContent = ({ data }: { data: PillarData }) => {
  return (
    <div className="w-full max-w-[1200px] px-6 grid grid-cols-[55%_40%] gap-[5%] items-center">
      {/* Text Column */}
      <div className="text-left">
        <div className="text-6xl lg:text-[80px] font-serif text-bronze/65 leading-none mb-2">
          {data.number}
        </div>
        <div className="flex gap-1 mb-6">
            <div className="h-[2px] w-[40px] bg-bronze" />
            <div className="h-[2px] w-[40px] bg-bronze" />
        </div>
        <h3 className="text-3xl lg:text-[36px] font-serif text-white uppercase tracking-wider mb-2">
          {data.title}
        </h3>
        <div className="h-[2px] w-[60px] bg-bronze mb-8" />
        <p className="text-[17px] text-gray-400 leading-relaxed max-w-[440px]">
          {data.body}
        </p>
      </div>

      {/* Visual Column */}
      <div className="h-[300px] w-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden">
          <VisualPlaceholder type={data.visual} />
      </div>
    </div>
  );
};

const VisualPlaceholder = ({ type }: { type: string }) => {
  return (
    <div className="text-bronze/50 text-sm uppercase tracking-widest">
      [Abstract: {type}]
    </div>
  );
};

// Using motion.div directly in the component for opacity control
const IndicatorItem = ({ label, active, opacity }: { label: string, active: boolean, opacity: MotionValue<number> }) => {
  return (
    <motion.div style={{ opacity }} className="flex flex-col items-center gap-2">
      <span className="text-[12px] text-white tracking-[0.15em] font-sans">{label}</span>
      <div className={`w-2 h-2 rounded-full ${active ? 'bg-bronze' : 'border border-white'}`} />
    </motion.div>
  );
};

const MobileLayout = () => {
  return (
    <section className="bg-navy py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[12px] font-sans uppercase tracking-[0.2em] text-bronze block mb-3">Why Carter</span>
          <h2 className="text-3xl font-serif text-white">The Carter Difference</h2>
        </div>
        
        <div className="space-y-16">
          {PILLARS.map((pillar) => (
            <MobilePillar key={pillar.id} data={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MobilePillar = ({ data }: { data: PillarData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6"
    >
      <div className="h-[200px] w-full bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
         <VisualPlaceholder type={data.visual} />
      </div>
      <div>
        <div className="text-[40px] font-serif text-bronze/65 leading-none mb-2">{data.number}</div>
        <h3 className="text-xl font-serif text-white uppercase tracking-wider mb-4">{data.title}</h3>
        <p className="text-white/70 leading-relaxed">{data.body}</p>
      </div>
    </motion.div>
  );
};
