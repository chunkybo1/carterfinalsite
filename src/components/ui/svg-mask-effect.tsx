"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const updateMousePosition = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
    }
    return () => {
      if (container) {
        container.removeEventListener(
          "mousemove",
          updateMousePosition,
        );
      }
    };
  }, []);
  
  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen", className)}
      animate={{
        backgroundColor: isHovered ? "#1E3A5F" : "#FDFBF8",
      }}
      transition={{
        backgroundColor: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-[#1E3A5F] text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.4, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className={`absolute inset-0 z-0 h-full w-full bg-gradient-radial from-[#B8956A]/20 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
        <div className="relative z-20 mx-auto max-w-4xl text-center">
          {children}
        </div>
      </motion.div>

      <div className={`flex h-full w-full items-center justify-center pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
        {revealText}
      </div>
    </motion.div>
  );
};
