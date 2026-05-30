"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const JurisdictionBar = () => {
  return (
    <div className="w-full bg-navy border-y border-white/10 py-6">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-sans font-bold text-bronze uppercase tracking-[0.4em]">Licensed In</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-xs font-bold tracking-[0.4em] text-white uppercase">Texas</span>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-bronze" />
            <span className="text-xs font-bold tracking-[0.4em] text-white uppercase">Arizona</span>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-bronze" />
            <span className="text-xs font-bold tracking-[0.4em] text-white uppercase">New Mexico</span>
          </div>
        </div>
      </Container>
    </div>
  );
};


