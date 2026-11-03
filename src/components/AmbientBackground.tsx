"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  const meshShiftY = useTransform(smoothScroll, [0, 1], [0, -140]);
  const beamRotate = useTransform(smoothScroll, [0, 1], [-18, -6]);
  const lowerOrbY = useTransform(smoothScroll, [0, 1], [0, 110]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#FCF5F8]"
    >
      {/* Base Warm Pearl-Ivory to Soft Blush Atmospheric Wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 75% 15%, rgba(249, 200, 219, 0.52) 0%, rgba(252, 234, 242, 0.35) 45%, rgba(252, 245, 248, 0.95) 100%)",
        }}
      />

      {/* Diffused Liquid Pearl & Rose-Quartz Mesh Blooms (Parallax on Scroll) */}
      <motion.div style={{ y: meshShiftY }} className="absolute inset-0">
        {/* Top-Right Sakura Rose-Quartz Bloom behind Hero Glass Card */}
        <div
          className="animate-pearl-orb-1 absolute -top-24 right-[4%] h-[520px] w-[520px] rounded-full opacity-75 blur-[110px] sm:h-[650px] sm:w-[650px]"
          style={{
            background:
              "radial-gradient(circle, rgba(240, 148, 182, 0.55) 0%, rgba(248, 198, 216, 0.38) 52%, transparent 78%)",
          }}
        />

        {/* Upper-Left Champagne Pearl & Peony Glow */}
        <div
          className="animate-pearl-orb-2 absolute top-[6%] -left-24 h-[480px] w-[540px] rounded-full opacity-70 blur-[115px] sm:h-[580px] sm:w-[640px]"
          style={{
            background:
              "radial-gradient(circle, rgba(247, 182, 205, 0.48) 0%, rgba(253, 224, 216, 0.42) 55%, transparent 80%)",
          }}
        />

        {/* Diagonal Mother-of-Pearl Caustic Light Beam */}
        <motion.div
          style={{ rotate: beamRotate }}
          className="absolute top-[12%] left-[22%] h-[260px] w-[760px] rounded-full opacity-80 blur-[80px]"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.92) 50%, transparent 100%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Mid-Lower Soft Mauve-Rose Counter-Parallax Bloom */}
      <motion.div
        style={{ y: lowerOrbY }}
        className="animate-pearl-orb-1 absolute -bottom-32 right-[12%] h-[500px] w-[540px] rounded-full opacity-60 blur-[125px]"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 158, 190, 0.45) 0%, rgba(249, 212, 227, 0.32) 58%, transparent 82%)",
          }}
        />
      </motion.div>

      {/* Ultra-Fine Pearl Silk Grain (opacity 0.016) */}
      <svg
        className="pointer-events-none fixed inset-0 h-full w-full opacity-[0.016]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="pearl-silk-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#pearl-silk-grain)" />
      </svg>
    </div>
  );
}
