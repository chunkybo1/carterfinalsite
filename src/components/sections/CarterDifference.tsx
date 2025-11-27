"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for GSAP
  const headerRef = useRef(null);
  const pillar1Ref = useRef(null);
  const pillar2Ref = useRef(null);
  const pillar3Ref = useRef(null);
  const indicatorsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile Detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP ScrollTrigger Setup
  useGSAP(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Overture: Header Entrance (0-10%)
    tl.fromTo(headerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.1 }, 0);

    // Pillar 1: Enter (10%), Exit (35%)
    tl.fromTo(pillar1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.05 }, 0.1);
    tl.to(pillar1Ref.current, { opacity: 0, y: -30, scale: 0.95, duration: 0.05 }, 0.35);

    // Pillar 2: Enter (36%), Exit (65%)
    tl.fromTo(pillar2Ref.current, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.05 }, 0.36);
    tl.to(pillar2Ref.current, { opacity: 0, y: -30, scale: 0.95, duration: 0.05 }, 0.65);

    // Pillar 3: Enter (66%), Exit (95%)
    tl.fromTo(pillar3Ref.current, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.05 }, 0.66);
    tl.to(pillar3Ref.current, { opacity: 0, y: -30, scale: 0.95, duration: 0.05 }, 0.95);

    // Section Unpin Opacity (95-100%)
    tl.to(contentRef.current, { opacity: 0, duration: 0.05 }, 0.95);

    // Indicator Animations
    // 1 Active: 10-35%
    tl.to(indicatorsRef.current[0], { opacity: 1, duration: 0.01 }, 0.1);
    tl.to(indicatorsRef.current[0], { opacity: 0.4, duration: 0.01 }, 0.35);

    // 2 Active: 35-65%
    tl.to(indicatorsRef.current[1], { opacity: 1, duration: 0.01 }, 0.35);
    tl.to(indicatorsRef.current[1], { opacity: 0.4, duration: 0.01 }, 0.65);

    // 3 Active: 65-95%
    tl.to(indicatorsRef.current[2], { opacity: 1, duration: 0.01 }, 0.65);
    tl.to(indicatorsRef.current[2], { opacity: 0.4, duration: 0.01 }, 0.95);

  }, { scope: containerRef, dependencies: [isMobile] });

  // If Mobile, return the mobile layout
  if (isMobile) {
    return <MobileLayout />;
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-[#0f1d2f]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#0f1d2f_0%,#0a1628_100%)]">
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <div ref={contentRef} className="relative z-10 h-full w-full flex flex-col opacity-100">
          
          {/* HEADER ZONE (Pinned Top-Left) */}
          <div 
            ref={headerRef}
            className="absolute top-[10vh] left-[6vw] z-20 max-w-md opacity-0"
          >
            <div className="text-[12px] font-sans uppercase tracking-[0.2em] text-[#c9a55c] mb-3">
              Why Carter
            </div>
            <div className="w-[50px] h-[2px] bg-[#c9a55c] mb-6 origin-left" />
            <h2 className="text-5xl font-serif text-white leading-tight mb-4">
              The Carter <span className="text-[#c9a55c]">Difference</span>
            </h2>
            <p className="text-[18px] text-[#a89a8c] leading-relaxed">
              What sets us apart isn&apos;t just what we do—it&apos;s how we do it.
            </p>
          </div>

          {/* CONTENT STAGE (Centered) */}
          <div className="flex-grow flex items-center justify-center relative w-full">
            
            {/* PILLAR 1 */}
            <div ref={pillar1Ref} className="absolute inset-0 flex items-center justify-center opacity-0">
               <PillarContent data={PILLARS[0]} />
            </div>

            {/* PILLAR 2 */}
            <div ref={pillar2Ref} className="absolute inset-0 flex items-center justify-center opacity-0">
               <PillarContent data={PILLARS[1]} />
            </div>

            {/* PILLAR 3 */}
            <div ref={pillar3Ref} className="absolute inset-0 flex items-center justify-center opacity-0">
               <PillarContent data={PILLARS[2]} />
            </div>

          </div>

          {/* PROGRESS INDICATOR (Pinned Bottom) */}
          <div className="absolute bottom-[8vh] left-0 right-0 flex justify-center items-center gap-4 z-20">
             <IndicatorItem ref={(el) => { indicatorsRef.current[0] = el }} label="01" active={true} initialOpacity={0.4} />
             <div className="w-[30px] h-[1px] bg-white/20" />
             <IndicatorItem ref={(el) => { indicatorsRef.current[1] = el }} label="02" active={true} initialOpacity={0.4} />
             <div className="w-[30px] h-[1px] bg-white/20" />
             <IndicatorItem ref={(el) => { indicatorsRef.current[2] = el }} label="03" active={true} initialOpacity={0.4} />
          </div>

        </div>
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
        <div className="text-6xl lg:text-[80px] font-serif text-[#c9a55c]/65 leading-none mb-2">
          {data.number}
        </div>
        <div className="flex gap-1 mb-6">
            <div className="h-[2px] w-[40px] bg-[#c9a55c]" />
            <div className="h-[2px] w-[40px] bg-[#c9a55c]" />
        </div>
        <h3 className="text-3xl lg:text-[36px] font-serif text-white uppercase tracking-wider mb-2">
          {data.title}
        </h3>
        <div className="h-[2px] w-[60px] bg-[#c9a55c] mb-8" />
        <p className="text-[17px] text-[#c4c4c4] leading-relaxed max-w-[440px]">
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
    <div className="text-[#c9a55c]/50 text-sm uppercase tracking-widest">
      [Abstract: {type}]
    </div>
  );
};

// Using forwardRef for GSAP access
const IndicatorItem = React.forwardRef<HTMLDivElement, { label: string, active: boolean, initialOpacity?: number }>(
  ({ label, active, initialOpacity = 1 }, ref) => {
    return (
      <div ref={ref} style={{ opacity: initialOpacity }} className="flex flex-col items-center gap-2">
        <span className="text-[12px] text-white tracking-[0.15em] font-sans">{label}</span>
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-[#c9a55c]' : 'border border-white'}`} />
      </div>
    );
  }
);
IndicatorItem.displayName = "IndicatorItem";

const MobileLayout = () => {
  return (
    <section className="bg-[#0f1d2f] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[12px] font-sans uppercase tracking-[0.2em] text-[#c9a55c] block mb-3">Why Carter</span>
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
        <div className="text-[40px] font-serif text-[#c9a55c]/65 leading-none mb-2">{data.number}</div>
        <h3 className="text-xl font-serif text-white uppercase tracking-wider mb-4">{data.title}</h3>
        <p className="text-white/70 leading-relaxed">{data.body}</p>
      </div>
    </motion.div>
  );
};
