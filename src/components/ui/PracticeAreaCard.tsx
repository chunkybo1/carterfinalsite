"use client";

import React from "react";
import { PracticeAreaData } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

interface PracticeAreaCardProps {
  data: PracticeAreaData;
  onClick: () => void;
}

export const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ data, onClick }) => {
  const Icon = data.icon;

  return (
    <div 
      onClick={onClick}
      className="group relative h-full flex flex-col justify-between p-8 bg-[#0f1d2f] border border-white/5 hover:border-bronze/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Hover Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-navy border border-white/10 group-hover:border-bronze/50 text-bronze transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-bronze transition-colors duration-300">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-light-steel text-sm leading-relaxed mb-8">
          {data.shortDescription}
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex items-center gap-3 text-sm font-bold text-bronze tracking-wider uppercase group-hover:translate-x-2 transition-transform duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

