import React from "react";

// PILLAR DATA
const PILLARS = [
  {
    id: 1,
    title: "RELENTLESS PREPARATION",
    body: "We don't just prepare—we over-prepare. Every case is built like we're going to trial, because that's how you win before you ever step into a courtroom.",
    visual: "preparation",
  },
  {
    id: 2,
    title: "CLEAR COMMUNICATION",
    body: "No legal jargon. No guessing games. You'll always know exactly where your case stands, what's happening next, and what it means for you.",
    visual: "communication",
  },
  {
    id: 3,
    title: "PERSONAL INVESTMENT",
    body: "Your fight is our fight. We don't see case numbers—we see people who need someone in their corner. That's why we're here.",
    visual: "investment",
  },
];

export const CarterDifference = () => {
  return (
    <section data-section="carter-difference" className="relative w-full bg-navy py-20 lg:py-32">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-navy)_0%,#0a1628_100%)]">
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="text-[12px] font-sans uppercase tracking-[0.2em] text-bronze mb-3">
            Why Carter
          </div>
          <div className="w-[50px] h-[2px] bg-bronze mb-6" />
          <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-4">
            The Carter <span className="text-bronze">Difference</span>
          </h2>
          <p className="text-lg lg:text-[18px] text-light-steel leading-relaxed">
            What sets us apart isn&apos;t just what we do—it&apos;s how we do it.
          </p>
        </div>

        {/* STACKED CARDS */}
        <div className="space-y-12 lg:space-y-16">
          {PILLARS.map((pillar) => (
            <PillarContent key={pillar.id} data={pillar} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- SUBCOMPONENTS ---

interface PillarData {
  id: number;
  title: string;
  body: string;
  visual: string;
}

const PillarContent = ({ data }: { data: PillarData }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[55%_40%] gap-8 lg:gap-[5%] items-center">
      {/* Text Column */}
      <div className="text-left">
        <h3 className="text-2xl lg:text-3xl xl:text-[36px] font-serif text-white uppercase tracking-wider mb-2">
          {data.title}
        </h3>
        <div className="h-[2px] w-[60px] bg-bronze mb-6 lg:mb-8" />
        <p className="text-base lg:text-[17px] text-gray-400 leading-relaxed max-w-[440px]">
          {data.body}
        </p>
      </div>

      {/* Visual Column */}
      <div className="h-[250px] lg:h-[300px] w-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden">
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

