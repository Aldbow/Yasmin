"use client";

import React, { useRef, useState } from "react";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: "emerald" | "indigo" | "rose" | "mixed";
  variant?: "satin" | "focal-glass";
  enableTilt?: boolean;
  maxTiltDeg?: number;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  spotlightColor = "rose",
  variant = "satin",
  enableTilt = false,
  maxTiltDeg = 5,
  onClick,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const spotlightMap = {
    emerald: "rgba(166, 30, 77, 0.08)",
    indigo: "rgba(136, 19, 55, 0.08)",
    rose: "rgba(166, 30, 77, 0.10)",
    mixed: "rgba(158, 42, 86, 0.09)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || (!enableTilt && variant !== "focal-glass")) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (variant === "focal-glass") {
      setMousePos({ x, y });
    }

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

  const surfaceClass =
    variant === "focal-glass"
      ? "glass-pearl-focal"
      : "pearl-card pearl-card-interactive";

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
          ? "transform 0.12s ease-out, background-color 0.25s ease, border-color 0.25s ease"
          : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease, border-color 0.25s ease",
      }}
      className={`${surfaceClass} relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Top Mother-of-Pearl Specular Edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
      />

      {/* Subtle Interactive Cursor Sheen (only on focal glass or interactive cards) */}
      {variant === "focal-glass" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(440px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightMap[spotlightColor]}, transparent 68%)`,
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
