"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

export const AboutCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { openModal } = useModal();

  return (
    <section ref={containerRef} className="relative w-full bg-navy py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Your Fight. Our <span className="text-bronze">Legacy.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-light-steel leading-relaxed max-w-2xl mx-auto mb-8">
              Your case, your fight, becomes the next chapter of this multigenerational advocacy legacy.
            </p>

            <p className="text-lg text-light-steel leading-relaxed max-w-2xl mx-auto mb-12">
              If you're facing the aftermath of an injury, you deserve dedicated advocacy. You deserve someone who understands that your case isn't just a file—it's your whole life. And you deserve someone who treats it that way.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={openModal}
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-bronze text-bronze hover:bg-bronze/10 font-serif font-bold uppercase tracking-wider"
                onClick={() => {
                  window.location.href = "tel:9156211818";
                }}
              >
                Call (915) 621-1818
              </Button>
            </div>

            {/* Direct Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-white/10"
            >
              <p className="text-lg font-serif italic text-light-steel leading-relaxed max-w-2xl mx-auto mb-4">
                &quot;The first conversation is about understanding your situation—not selling you on working with me. If you're considering whether to call, consider this: you deserve to know your options, and that conversation costs you nothing. Let's talk about what happened and what comes next.&quot;
              </p>
              <p className="text-sm text-gray-400 font-serif">— Thomas Carter</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

