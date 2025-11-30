"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

// --- DEBRIS SYSTEM ---

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: "dust" | "chip" | "spark";
  rotation?: number;
  rotationSpeed?: number;
}

const DebrisCanvas = ({ triggerRef }: { triggerRef: React.MutableRefObject<(x: number, y: number, strength: number) => void> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);

  const createExplosion = useCallback((x: number, y: number, strength: number) => {
    const count = Math.floor(strength * 20);
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const type = Math.random();
      const angle = Math.random() * Math.PI * 2; // Full circle spread but biased upwards
      const speed = Math.random() * strength * 15; // Initial velocity magnitude
      
      // Biasing velocity upwards for ground impact
      const vx = Math.cos(angle) * speed * (Math.random() * 0.5 + 0.5);
      const vy = -Math.abs(Math.sin(angle) * speed) - (Math.random() * strength * 5);

      if (type < 0.4) {
        // Dust
        newParticles.push({
          x,
          y,
          vx: vx * 0.5,
          vy: vy * 0.3,
          life: 1,
          maxLife: Math.random() * 40 + 20,
          size: Math.random() * 20 + 10,
          color: `rgba(100, 100, 100, ${Math.random() * 0.3 + 0.1})`,
          type: "dust",
        });
      } else if (type < 0.8) {
        // Concrete Chips
        newParticles.push({
          x,
          y,
          vx,
          vy,
          life: 1,
          maxLife: Math.random() * 30 + 10,
          size: Math.random() * 4 + 2,
          color: "#6b7280", // gray-500
          type: "chip",
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
        });
      } else {
        // Sparks
        newParticles.push({
          x,
          y,
          vx: vx * 1.5,
          vy: vy * 1.5,
          life: 1,
          maxLife: Math.random() * 10 + 5,
          size: Math.random() * 2 + 1,
          color: "#fbbf24", // amber-400
          type: "spark",
        });
      }
    }
    particlesRef.current.push(...newParticles);
  }, []);

  useEffect(() => {
    triggerRef.current = createExplosion;
  }, [createExplosion, triggerRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        
        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5; // Gravity
        p.vx *= 0.95; // Air resistance
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Rendering
        ctx.save();
        ctx.globalAlpha = p.life;
        
        if (p.type === "dust") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (2 - p.life), 0, Math.PI * 2); // Expand as it fades
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (p.type === "chip") {
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation || 0) + (p.rotationSpeed || 0) * (1 - p.life) * 100);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else if (p.type === "spark") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 5;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
        
        ctx.restore();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-50" />;
};

// --- TEXT COMPONENTS ---

const SteelText = ({ 
  children, 
  className, 
  animateControls,
  delay,
  size = "large"
}: { 
  children: React.ReactNode; 
  className?: string; 
  animateControls: AnimationControls;
  delay: number;
  size?: "large" | "huge";
}) => {
  return (
    <motion.div
      initial={{ y: "-150vh", opacity: 0 }}
      animate={animateControls}
      className={cn(
        "font-black font-serif tracking-tight leading-none relative z-10",
        size === "large" ? "text-7xl md:text-9xl" : "text-5xl md:text-7xl lg:text-[12rem]",
        className
      )}
    >
      {/* Unified Steel Gradient Text Wrapper */}
      <div 
        className="relative text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(180deg, #ffffff 0%, #9ca3af 40%, #4b5563 60%, #1f2937 100%)",
          filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.5))",
          WebkitTextStroke: "1px rgba(255,255,255,0.1)", 
        }}
      >
        {children}
      </div>

      {/* Shadow Anticipation Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.4, 0],
          scale: [0.5, 1, 1.5] 
        }}
        transition={{ 
          duration: 0.15, 
          delay: delay - 0.15, 
          ease: "easeIn"
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-4 bg-black/50 blur-xl rounded-full z-[-1]"
      />
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

export const IndustrialHeroAnimation = ({ onComplete, isFixed = true }: { onComplete: () => void; isFixed?: boolean }) => {
  const [shake, setShake] = useState({ x: 0, y: 0, rotate: 0 });
  const [flash, setFlash] = useState(0);
  
  const controlsWe = useAnimation();
  const controlsFight = useAnimation();
  const controlsWins = useAnimation();
  
  const triggerDebrisRef = useRef<(x: number, y: number, strength: number) => void>(() => {});
  const containerRef = useRef<HTMLDivElement>(null);

  const triggerShake = (intensity: number) => {
    // Quick intense shake that decays
    const startTime = Date.now();
    const duration = 200 * intensity;
    
    const shakeLoop = () => {
      const elapsed = Date.now() - startTime;
      const progress = 1 - Math.min(elapsed / duration, 1);
      
      if (progress > 0) {
        setShake({
          x: (Math.random() - 0.5) * 20 * intensity * progress,
          y: (Math.random() - 0.5) * 20 * intensity * progress,
          rotate: (Math.random() - 0.5) * 2 * intensity * progress,
        });
        requestAnimationFrame(shakeLoop);
      } else {
        setShake({ x: 0, y: 0, rotate: 0 });
      }
    };
    shakeLoop();
  };

  const triggerFlash = (intensity: number) => {
    setFlash(intensity);
    setTimeout(() => setFlash(0), 100);
  };

  const playImpact = (xPercent: number, yPercent: number, intensity: number) => {
    triggerShake(intensity);
    triggerFlash(intensity * 0.5);
    
    // Calculate screen position for debris
    if (typeof window !== "undefined") {
      const x = window.innerWidth * xPercent;
      const y = window.innerHeight * yPercent;
      triggerDebrisRef.current(x, y, intensity);
    }
  };

  useEffect(() => {
    const sequence = async () => {
      // Initial Delay
      await new Promise(r => setTimeout(r, 200));

      // 1. "WE" Drop
      setTimeout(() => playImpact(0.35, 0.5, 0.8), 350); // FIRE ON IMPACT
      controlsWe.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } // Heavy acceleration, sharp stop
      }).then(() => {
        // Micro-shudder after land
        controlsWe.start({
          y: [0, 2, 0],
          transition: { duration: 0.1, ease: "linear" }
        });
      });

      // 2. "FIGHT" Drop
      await new Promise(r => setTimeout(r, 700));
      setTimeout(() => playImpact(0.65, 0.5, 1.0), 350); // FIRE ON IMPACT
      controlsFight.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
      }).then(() => {
        controlsFight.start({
          y: [0, 2, 0],
          transition: { duration: 0.1, ease: "linear" }
        });
      });

      // 3. "CARTER LAW WINS" Drop
      await new Promise(r => setTimeout(r, 750));
      setTimeout(() => playImpact(0.5, 0.7, 2.0), 350); // FIRE ON IMPACT (delay matches duration)
      controlsWins.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
      }).then(() => {
        controlsWins.start({
          y: [0, 4, 0], // Slightly heavier shudder
          transition: { duration: 0.15, ease: "linear" }
        });
      });

      // Completion
      setTimeout(() => {
        onComplete();
      }, 1200);
    };

    sequence();
  }, [controlsWe, controlsFight, controlsWins, onComplete]);

  return (
    <>
      {/* Debris Layer */}
      <DebrisCanvas triggerRef={triggerDebrisRef} />

      {/* Flash Overlay */}
      <div 
        className="fixed inset-0 z-[60] bg-white pointer-events-none mix-blend-overlay transition-opacity duration-75"
        style={{ opacity: flash }}
      />

      {/* Main Container with Shake */}
      <motion.div
        className={cn(
          isFixed ? "fixed" : "absolute",
          "inset-0 z-40 flex flex-col items-center justify-center bg-[#0f1d2f] overflow-hidden transition-colors duration-1000"
        )}
        style={{
          x: shake.x,
          y: shake.y,
          rotate: shake.rotate,
          backgroundColor: isFixed ? "#0f1d2f" : "transparent", // Fade out background on complete
          pointerEvents: isFixed ? "auto" : "none", // Disable interactions when complete
          opacity: isFixed ? 1 : 0, // Fade out entirely
        }}
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,#1e3a8a_0%,#000000_100%)] z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0" />

        {/* Typography Grid */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1400px] px-4">
          
          {/* Row 1: WE FIGHT */}
          <div className="flex items-baseline gap-4 md:gap-12 mb-2 md:mb-8">
            <SteelText animateControls={controlsWe} delay={0.35}>
              WE
            </SteelText>
            <SteelText animateControls={controlsFight} delay={1.05}>
              FIGHT
            </SteelText>
          </div>

          {/* Row 2: CARTER LAW WINS */}
          <div className="relative mt-4 md:mt-8 flex items-center justify-center gap-4 md:gap-8">
            {/* "Carter Law" - Dropping with WINS */}
            <SteelText animateControls={controlsWins} delay={1.8} size="huge" className="text-center leading-[0.8]">
              <span className="block text-3xl md:text-5xl lg:text-7xl font-[family-name:var(--font-trajan)] font-bold tracking-[0.1em] uppercase drop-shadow-lg">
                Carter Law
              </span>
            </SteelText>

            {/* "WINS" */}
            <SteelText animateControls={controlsWins} delay={1.8} size="huge" className="text-center leading-[0.8]">
              <span className="block text-3xl md:text-5xl lg:text-7xl font-black font-serif tracking-tight uppercase drop-shadow-lg">
                WINS
              </span>
            </SteelText>
          </div>

        </div>
      </motion.div>
    </>
  );
};

