"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { HTML5Video } from "@/components/ui/HTML5Video";
import { Phone, ArrowDown, Volume2, VolumeX } from "lucide-react";

export const LandingHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollY } = useScroll();
  const buttonScrollOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HTML5Video 
          videoSrc="/videos/hero-video.mp4" 
          muted={isMuted} 
          onLoadedData={() => setVideoReady(true)}
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30 z-10 pointer-events-none" />

      {/* Mute/Unmute Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        style={{ opacity: buttonScrollOpacity }}
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-24 right-6 sm:bottom-32 sm:right-8 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 group"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white transition-colors" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-all" />
        )}
      </motion.button>

      <Container className="relative z-20 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-6"
          >
            Hit By An 18-Wheeler In El Paso?
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8"
          >
            The Trucking Company Already Has a Lawyer. <br className="hidden md:block" />
            <span className="text-bronze italic">You Should Too.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-sans"
          >
            Trucking companies deploy accident response teams within hours. 
            Every minute you wait, evidence disappears. Carter Law acts immediately 
            to protect your future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <a
              href="tel:9156211818"
              className="group flex items-center justify-center gap-3 bg-bronze hover:bg-white text-white hover:text-navy px-8 py-4 border border-transparent font-serif font-bold uppercase tracking-widest transition-all duration-300 shadow-xl rounded-sm"
            >
              <Phone className="w-5 h-5" />
              <span>(915) 621-1818</span>
            </a>

            <button
              onClick={scrollToQuiz}
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 border border-white/30 font-serif font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
            >
              <span>See If You Have A Case</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
