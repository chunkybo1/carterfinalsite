"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

export const TheLegacy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} data-section="the-legacy" className="relative w-full bg-[#FDFBF8] py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              The Legacy
            </div>
            <div className="h-[2px] w-20 bg-bronze mb-8" />
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In 1990, when the Americans with Disabilities Act was signed into law, Thomas Carter's grandfather was there. Not as a legislator or lobbyist, but as someone who understood that real change happens when people show up—when they bear witness, when they refuse to look away.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  That moment wasn't just history for the Carter family; it was instruction. It demonstrated that advocacy isn't a profession you choose—it's a responsibility you inherit. The grandfather's presence at the ADA signing became the origin point for a multigenerational commitment to standing up for people who've been harmed, who need protection, who deserve justice.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For Thomas, growing up in a household where advocacy was the family business meant understanding early that some fights are worth having. It meant learning that standing up for others isn't optional—it's essential. These weren't abstract values; they were lived principles, demonstrated through conversations, actions, and a clear sense of what the family stood for.
                </p>
              </motion.div>

              {/* Pull Quote */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="border-l-4 border-bronze pl-8 py-6 my-8"
              >
                <p className="text-2xl md:text-3xl font-serif italic text-navy leading-relaxed">
                  &quot;I didn't choose to become an advocate. I was raised to understand that fighting for others isn't a career path—it's a calling.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-4 font-serif">— Thomas Carter</p>
              </motion.div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-navy/5 p-8 rounded-lg h-full flex flex-col justify-center"
              >
                {/* Placeholder for archival imagery or date treatment */}
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="text-6xl md:text-7xl font-serif font-bold text-bronze/30 mb-4"
                  >
                    1990
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-sm text-gray-600 uppercase tracking-wider"
                  >
                    ADA Signing
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-xs text-gray-500 mt-4 italic"
                  >
                    [Archival imagery placeholder]
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

