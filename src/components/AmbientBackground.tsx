"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#FDF8FA]"
    >
      {/* Top-Right Pearl Blush Refracting Wash (gives the Hero focal glass card warm rose tones to refract) */}
      <div
        className="absolute -top-28 right-[4%] h-[520px] w-[520px] rounded-full opacity-70 blur-[120px] sm:h-[640px] sm:w-[640px]"
        style={{
          background:
            "radial-gradient(circle, #F9D5E3 0%, #F5E1EA 55%, transparent 80%)",
        }}
      />

      {/* Mid-Left Champagne Rose Wash */}
      <div
        className="absolute top-[38%] -left-28 h-[480px] w-[480px] rounded-full opacity-60 blur-[130px] sm:h-[580px] sm:w-[580px]"
        style={{
          background:
            "radial-gradient(circle, #F6DCE7 0%, #F9EBF0 60%, transparent 82%)",
        }}
      />

      {/* Bottom Pearl Mauve Wash behind Credentials & Contact */}
      <div
        className="absolute -bottom-32 right-[14%] h-[460px] w-[460px] rounded-full opacity-55 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, #F4D3E1 0%, #FBF0F5 65%, transparent 85%)",
        }}
      />
    </div>
  );
}
