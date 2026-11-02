"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0B111E]"
    >
      {/* Subtle Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Orb 1: Teal / Emerald (#10B981 & #0D9488) — Community Development, CSR & Sustainability */}
      <div
        className="animate-aurora-1 absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full opacity-25 blur-[135px] sm:h-[640px] sm:w-[640px]"
        style={{
          background:
            "radial-gradient(circle, #10B981 0%, #0D9488 55%, transparent 80%)",
        }}
      />

      {/* Orb 2: Soft Indigo / Royal Blue (#6366F1) — Governance, Research (BNN) & Ministry (Kemnaker/Kemensos) */}
      <div
        className="animate-aurora-2 absolute top-[18%] -right-28 h-[540px] w-[540px] rounded-full opacity-25 blur-[145px] sm:h-[680px] sm:w-[680px]"
        style={{
          background:
            "radial-gradient(circle, #6366F1 0%, #4338CA 55%, transparent 80%)",
        }}
      />

      {/* Orb 3: Warm Rose / Coral Glow (#F43F5E at low ~15% opacity) — Human-Centered Empathy, Counseling & Education */}
      <div
        className="animate-aurora-3 absolute top-[55%] left-[18%] h-[480px] w-[480px] rounded-full opacity-15 blur-[140px] sm:h-[580px] sm:w-[580px]"
        style={{
          background:
            "radial-gradient(circle, #F43F5E 0%, #E11D48 50%, transparent 80%)",
        }}
      />

      {/* Orb 4: Bottom Emerald-Indigo Convergence near Credentials & Contact */}
      <div
        className="animate-aurora-1 absolute -bottom-36 right-[12%] h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, #0D9488 0%, #6366F1 60%, transparent 85%)",
        }}
      />

      {/* Acrylic Frosted Noise / Grain Layer (PRD 4.2: opacity 0.025) */}
      <svg
        className="pointer-events-none fixed inset-0 h-full w-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="acrylic-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#acrylic-noise)" />
      </svg>
    </div>
  );
}
