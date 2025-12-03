"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { PRACTICE_AREAS_DATA, PracticeAreaData } from "@/lib/services-data";

interface PracticeAreaCardProps {
  data: PracticeAreaData;
  onClick?: () => void;
}

export const PracticeAreaCard = ({ data, onClick }: PracticeAreaCardProps) => {
  const Icon = data.icon;

  return (
    <motion.div
      className="group relative bg-[#0f1d2f]/90 backdrop-blur-sm border border-white/10 p-6 min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)] hover:border-bronze/30 focus-within:ring-2 focus-within:ring-bronze focus-within:outline-none"
      whileHover={{ scale: 1.05, y: -4 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${data.title}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Accent Line - Animated on Hover */}
      <div className="absolute top-0 left-0 h-[2px] bg-bronze w-0 transition-all duration-500 group-hover:w-full" />

      {/* Content Top */}
      <div className="relative z-10">
        {/* Icon with Glow Effect */}
        <div className="flex justify-end mb-4">
          <div className="relative">
            <Icon 
              className="w-10 h-10 text-bronze stroke-[1.5px] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(184,149,106,0.5)]" 
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-8 bg-bronze/30 mb-4" />

        {/* Title with Underline Animation */}
        <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white transition-colors duration-300 group-hover:text-bronze relative">
          {data.title}
          <span className="absolute bottom-0 left-0 h-[2px] bg-bronze w-0 transition-all duration-500 group-hover:w-full" />
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {data.shortDescription}
        </p>

        {/* Revealed Content on Hover */}
        <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-96">
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              {data.overview.substring(0, 150)}...
            </p>
            
            {/* Case Types Preview */}
            <div className="mb-3">
              <p className="text-[10px] font-bold text-bronze uppercase tracking-wider mb-2">
                Common Cases:
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                {data.caseTypes.slice(0, 3).map((type, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-bronze mr-2">•</span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-bronze text-xs font-bold mt-4 transition-all duration-500 transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
        <span>Learn More</span>
        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
};

