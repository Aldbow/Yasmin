"use client";

import React, { useState } from "react";
import AmbientBackground from "@/components/AmbientBackground";
import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import BentoPillarsSection from "@/components/BentoPillarsSection";
import ExperienceTimelineSection from "@/components/ExperienceTimelineSection";
import CredentialsSection from "@/components/CredentialsSection";
import SocialImpactCarousel from "@/components/SocialImpactCarousel";
import ContactFooterSection from "@/components/ContactFooterSection";
import CVPreviewModal from "@/components/CVPreviewModal";

export default function HomePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FDF8FA] text-[#231118]">
      {/* 1. Soft Pearl Blush Ambient Light Wash (Provides chromatic depth behind focal glass surfaces) */}
      <AmbientBackground />

      {/* 2. Sticky Frosted Pearl Glass Navbar (Focal Glass Element #1) */}
      <FloatingNavbar onOpenCV={() => setCvModalOpen(true)} />

      {/* 3. Main Content Flow */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section (Executive Bio Focal Glass Card + Editorial Ledger) */}
        <HeroSection onOpenCV={() => setCvModalOpen(true)} />

        {/* Core Competencies: Flagship Showcase + 3-Column Editorial Index */}
        <BentoPillarsSection />

        {/* Interactive Experience Timeline (10 Professional Roles + Search & Filter Tabs) */}
        <ExperienceTimelineSection />

        {/* National License & Academic Foundation */}
        <CredentialsSection />

        {/* Social Impact, Volunteering & Cultural Leadership Showcase */}
        <SocialImpactCarousel />
      </main>

      {/* 4. Interactive Contact & Colophon Footer */}
      <ContactFooterSection onOpenCV={() => setCvModalOpen(true)} />

      {/* 5. Executive CV Preview & Printable PDF Modal */}
      <CVPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
