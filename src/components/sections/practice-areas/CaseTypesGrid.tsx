"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import * as Icons from "lucide-react";

interface CaseType {
  title: string;
  iconName: string;
}

interface CaseTypesGridProps {
  caseTypes: CaseType[];
}

export const CaseTypesGrid = ({ caseTypes }: CaseTypesGridProps) => {
  return (
    <section className="relative w-full bg-navy py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              Comprehensive Representation
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Types of Cases <br /> 
              <span className="text-bronze">We Handle.</span>
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 mb-4 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseTypes.map((item, index) => {
            // @ts-ignore
            const Icon = Icons[item.iconName] || Icons.AlertCircle;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-10 bg-white/5 border border-white/10 hover:border-bronze/50 hover:bg-white/[0.08] transition-all duration-500 rounded-sm"
              >
                <div className="w-14 h-14 border border-bronze/30 rounded-full flex items-center justify-center mb-8 group-hover:bg-bronze transition-colors duration-500">
                  <Icon className="w-6 h-6 text-bronze group-hover:text-navy transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-bronze transition-colors duration-500">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

