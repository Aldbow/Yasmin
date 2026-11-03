"use client";

import React from "react";

export type OrbVariant =
  | "ruby"
  | "champagne"
  | "berry"
  | "sage-blush"
  | "dawn";

interface Abstract3DOrbProps {
  variant?: OrbVariant;
  size?: "sm" | "md" | "lg" | "xl";
  animation?: "float-1" | "float-2" | "orbit" | "drift";
  hasTorusRing?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GRADIENTS: Record<
  OrbVariant,
  {
    radial: string;
    shadow: string;
    ringColor?: string;
  }
> = {
  ruby: {
    radial:
      "radial-gradient(circle at 30% 28%, #FFFFFF 0%, #FCDCE8 28%, #F29BB9 64%, #C93B6B 92%, #881337 100%)",
    shadow:
      "0 24px 48px -12px rgba(166, 30, 77, 0.28), inset -8px -10px 24px rgba(136, 19, 55, 0.25), inset 6px 8px 18px rgba(255, 255, 255, 0.9)",
    ringColor: "rgba(224, 78, 126, 0.25)",
  },
  champagne: {
    radial:
      "radial-gradient(circle at 32% 28%, #FFFFFF 0%, #FFF1F5 30%, #FAD4E2 60%, #E89BB6 85%, #9E2A56 100%)",
    shadow:
      "0 22px 44px -10px rgba(158, 42, 86, 0.22), inset -6px -8px 20px rgba(136, 19, 55, 0.20), inset 6px 6px 16px rgba(255, 255, 255, 0.95)",
    ringColor: "rgba(240, 140, 178, 0.28)",
  },
  berry: {
    radial:
      "radial-gradient(circle at 30% 28%, #FFFFFF 0%, #F8D6E2 25%, #E2799F 65%, #A61E4D 90%, #520E23 100%)",
    shadow:
      "0 26px 52px -12px rgba(82, 14, 35, 0.32), inset -10px -12px 28px rgba(82, 14, 35, 0.35), inset 6px 8px 20px rgba(255, 255, 255, 0.9)",
    ringColor: "rgba(166, 30, 77, 0.30)",
  },
  "sage-blush": {
    radial:
      "radial-gradient(circle at 34% 26%, #FFFFFF 0%, #FCECEF 32%, #E9B8C9 66%, #C06082 88%, #782042 100%)",
    shadow:
      "0 20px 42px -10px rgba(120, 32, 66, 0.22), inset -6px -8px 22px rgba(120, 32, 66, 0.22), inset 5px 7px 16px rgba(255, 255, 255, 0.92)",
    ringColor: "rgba(192, 96, 130, 0.24)",
  },
  dawn: {
    radial:
      "radial-gradient(circle at 28% 28%, #FFFFFF 0%, #FDEBF2 35%, #F7B5CD 72%, #D85682 94%, #881337 100%)",
    shadow:
      "0 20px 40px -10px rgba(166, 30, 77, 0.22), inset -6px -8px 20px rgba(136, 19, 55, 0.18), inset 6px 8px 18px rgba(255, 255, 255, 0.95)",
    ringColor: "rgba(216, 86, 130, 0.25)",
  },
};

const SIZES: Record<string, string> = {
  sm: "h-20 w-20 sm:h-28 sm:w-28",
  md: "h-32 w-32 sm:h-44 sm:w-44",
  lg: "h-44 w-44 sm:h-64 sm:w-64",
  xl: "h-56 w-56 sm:h-80 sm:w-80",
};

const ANIMATIONS: Record<string, string> = {
  "float-1": "animate-pearl-orb-1",
  "float-2": "animate-pearl-orb-2",
  orbit: "animate-pearl-orb-3",
  drift: "animate-pearl-orb-4",
};

export default function Abstract3DOrb({
  variant = "ruby",
  size = "md",
  animation = "float-1",
  hasTorusRing = false,
  className = "",
  style = {},
}: Abstract3DOrbProps) {
  const gradient = GRADIENTS[variant];
  const sizeClass = SIZES[size] || SIZES.md;
  const animClass = ANIMATIONS[animation] || ANIMATIONS["float-1"];

  return (
    <div
      aria-hidden="true"
      style={style}
      className={`pointer-events-none select-none ${animClass} ${sizeClass} ${className}`}
    >
      <div className="relative h-full w-full">
        {/* Core 3D Pearl Sphere */}
        <div
          className="h-full w-full rounded-full"
          style={{
            background: gradient.radial,
            boxShadow: gradient.shadow,
          }}
        />

        {/* Specular Glint Highlight */}
        <div
          className="absolute top-[16%] left-[22%] h-[28%] w-[32%] rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)",
            transform: "rotate(-32deg)",
            filter: "blur(1px)",
          }}
        />

        {/* Optional 3D Ambient Torus Ring */}
        {hasTorusRing && (
          <div
            className="absolute -inset-4 rounded-full sm:-inset-6"
            style={{
              border: `2px solid ${gradient.ringColor}`,
              boxShadow: `0 0 16px ${gradient.ringColor}, inset 0 0 14px ${gradient.ringColor}`,
              transform: "rotateX(72deg) rotateZ(-24deg)",
              transformStyle: "preserve-3d",
            }}
          />
        )}
      </div>
    </div>
  );
}
