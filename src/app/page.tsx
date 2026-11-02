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
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B111E] text-[#F8FAFC]">
      {/* 1. Ambient Mesh Gradient Background ("Warm Empathetic Aurora" + Acrylic Grain) */}
      <AmbientBackground />

      {/* 2. Sticky Frosted Pill Navbar */}
      <FloatingNavbar onOpenCV={() => setCvModalOpen(true)} />

      {/* 3. Main Content Flow */}
      <main className="relative z-10">
        {/* Hero Section (Verified Kemensos RI Badge, Morphing Headline, Bio Card & 3D Tilt Quick-Stats) */}
        <HeroSection onOpenCV={() => setCvModalOpen(true)} />

        {/* Bento Grid: The 4 Core Pillars */}
        <BentoPillarsSection />

        {/* Interactive Experience Timeline (10 Professional Roles + Filter Tabs + Glowing Scroll Progress) */}
        <ExperienceTimelineSection />

        {/* Credentials, Education & 3D Holographic Digital License Card */}
        <CredentialsSection />

        {/* Social Impact, Volunteering & Cultural Leadership Carousel */}
        <SocialImpactCarousel />
      </main>

      {/* 4. Interactive Contact & Footer Section */}
      <ContactFooterSection onOpenCV={() => setCvModalOpen(true)} />

      {/* 5. Interactive Executive CV Preview & Printable PDF Modal */}
      <CVPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
