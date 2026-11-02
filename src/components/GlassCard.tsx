"use client";

import React, { useRef, useState } from "react";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: "emerald" | "indigo" | "rose" | "mixed";
  enableTilt?: boolean;
  maxTiltDeg?: number;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  spotlightColor = "emerald",
  enableTilt = false,
  maxTiltDeg = 6,
  onClick,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const spotlightMap = {
    emerald: "rgba(16, 185, 129, 0.16)",
    indigo: "rgba(99, 102, 241, 0.16)",
    rose: "rgba(244, 63, 94, 0.14)",
    mixed: "rgba(56, 189, 248, 0.15)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTiltDeg;
      const rotateY = ((x - centerX) / centerX) * maxTiltDeg;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      setTilt({ rotateX: 0, rotateY: 0 });
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
          : undefined,
        transition: isHovered
          ? "transform 0.12s ease-out, background-color 0.3s ease, border-color 0.3s ease"
          : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s ease, border-color 0.3s ease",
      }}
      className={`glass-surface glass-surface-interactive relative overflow-hidden rounded-3xl ${className}`}
    >
      {/* Top Specular Edge Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
      />

      {/* Interactive Cursor Spotlight Glow (PRD Section 4.2) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightMap[spotlightColor]}, transparent 65%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
