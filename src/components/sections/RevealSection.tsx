"use client";

import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function LawFirmRevealSection() {
  return (
    <div id="reveal-section" className="relative z-10 flex h-[60vh] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-sans text-5xl font-bold tracking-tight text-[#8A9099] md:text-6xl lg:text-7xl">
              From complicated casework...
            </p>
            <p className="mt-6 text-lg text-[#8A9099] md:text-xl">
              Legal jargon. Endless paperwork. Insurance runarounds.
            </p>
          </div>
        }
        className="h-full rounded-md w-full"
        revealSize={2000}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-5xl font-medium text-[#FDFBF8] md:text-6xl lg:text-7xl">
            to feeling at home.
          </p>
          <p className="mt-6 text-lg text-bronze md:text-xl font-medium">
            Someone who speaks your language. Answers when you call. Actually cares.
          </p>
        </div>
      </MaskContainer>
    </div>
  );
}
