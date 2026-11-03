"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  MapPin,
  Award,
  Building2,
  GraduationCap,
  ArrowUpRight,
  FileText,
  Globe,
  ShieldCheck,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { PROFILE_DATA } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenCV: () => void;
}

export default function HeroSection({ onOpenCV }: HeroSectionProps) {
  const [copiedId, setCopiedId] = useState(false);
  const [bioLang, setBioLang] = useState<"en" | "id">("id");

  const handleCopyCredential = () => {
    navigator.clipboard.writeText(PROFILE_DATA.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2400);
  };

  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-20"
    >
      {/* Identity Motif Overline (No pill badge above H1 per R-09) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#DEC3D0] pb-3.5"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold tracking-wider text-[#881337]">
            00 / PROFIL EKSEKUTIF
          </span>
          <span aria-hidden="true" className="h-3.5 w-px bg-[#DEC3D0]" />
          <span className="text-xs font-medium text-[#52323F]">
            Licensed Certified Social Worker (Kementerian Sosial RI)
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#52323F]">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#A61E4D]" />
          <span>{PROFILE_DATA.location}</span>
          <span aria-hidden="true" className="text-[#8A5A6E]">
            ·
          </span>
          <span className="font-semibold text-[#881337]">
            Lisensi Aktif s.d. Des 2029
          </span>
        </div>
      </motion.div>

      {/* Main 12-Column Balanced Hero Grid (7 Cols Left / 5 Cols Right) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Primary Identity, Editorial Statement & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="flex flex-col justify-between lg:col-span-7"
        >
          <div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[#231118] sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
              Aulia Yasmin,{" "}
              <span className="font-editorial font-normal italic text-[#A61E4D]">
                S.Tr.Sos.
              </span>
            </h1>

            {/* Positioning Domains */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#52323F] sm:text-sm">
              {PROFILE_DATA.positioningPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-lg border border-[#DEC3D0] bg-[#FBF5F8] px-3 py-1 text-[#231118]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Editorial Value Proposition */}
            <div className="mt-6 max-w-2xl">
              <p className="font-heading text-xl leading-relaxed font-medium text-[#231118] sm:text-2xl sm:leading-snug">
                Memadukan{" "}
                <span className="font-editorial text-2xl font-normal italic text-[#A61E4D] sm:text-3xl">
                  Human-Centered Empathy
                </span>{" "}
                dengan ketajaman strategis{" "}
                <span className="font-semibold text-[#231118] underline decoration-[#A61E4D]/50 decoration-2 underline-offset-4">
                  CSR
                </span>
                ,{" "}
                <span className="font-semibold text-[#231118] underline decoration-[#A61E4D]/50 decoration-2 underline-offset-4">
                  Community Development
                </span>
                , dan{" "}
                <span className="font-semibold text-[#231118] underline decoration-[#A61E4D]/50 decoration-2 underline-offset-4">
                  People Management
                </span>
                .
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#52323F] sm:text-base">
                Lulusan Sarjana Terapan Pekerjaan Sosial (POLTEKESOS Bandung)
                dengan rekam jejak lintas kementerian, BUMN strategis, lembaga
                rehabilitasi nasional, korporasi pembiayaan, dan institusi
                pendidikan.
              </p>
            </div>
          </div>

          {/* Primary CTA Row aligned at the bottom of Left Column */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#A61E4D] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#A61E4D]/20 transition-all hover:bg-[#8C163E]"
            >
              <span>Terhubung di LinkedIn</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              type="button"
              onClick={onOpenCV}
              className="pearl-card pearl-card-interactive inline-flex min-h-[46px] items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#231118]"
            >
              <FileText aria-hidden="true" className="h-4 w-4 text-[#A61E4D]" />
              <span>Pratinjau & Unduh CV</span>
            </button>

            <a
              href="#experience"
              className="inline-flex min-h-[46px] items-center gap-1.5 rounded-full px-4 py-3 text-xs font-semibold text-[#52323F] transition-colors hover:text-[#A61E4D]"
            >
              <span>Telusuri 10 Rekam Jejak</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Focal Mother-of-Pearl Glass Executive Bio Card (R-10 Focal Glass Element #2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="lg:col-span-5"
        >
          <GlassCard
            variant="focal-glass"
            spotlightColor="rose"
            className="flex h-full flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-[#DEC3D0] pb-3.5">
                <div>
                  <span className="font-mono-code text-[11px] font-semibold uppercase tracking-widest text-[#881337]">
                    Ringkasan Eksekutif
                  </span>
                  <h2 className="font-heading text-base font-bold text-[#231118]">
                    Profil Profesional Berbasis Empati
                  </h2>
                </div>

                {/* Language Switcher for Bio (ID / EN) */}
                <div
                  role="group"
                  aria-label="Pilih bahasa ringkasan profil"
                  className="inline-flex items-center rounded-lg border border-[#8A5A6E] bg-white/80 p-0.5 text-xs"
                >
                  <button
                    type="button"
                    aria-pressed={bioLang === "id"}
                    onClick={() => setBioLang("id")}
                    className={`min-h-[32px] min-w-[36px] rounded-md px-2.5 py-1 font-semibold transition-colors ${
                      bioLang === "id"
                        ? "bg-[#A61E4D] text-white"
                        : "text-[#52323F] hover:text-[#231118]"
                    }`}
                  >
                    ID
                  </button>
                  <button
                    type="button"
                    aria-pressed={bioLang === "en"}
                    onClick={() => setBioLang("en")}
                    className={`min-h-[32px] min-w-[36px] rounded-md px-2.5 py-1 font-semibold transition-colors ${
                      bioLang === "en"
                        ? "bg-[#A61E4D] text-white"
                        : "text-[#52323F] hover:text-[#231118]"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Executive Summary Quote */}
              <blockquote className="text-base leading-relaxed font-medium text-[#231118] sm:text-[16.5px]">
                &ldquo;
                {bioLang === "id"
                  ? PROFILE_DATA.bioIndonesian
                  : PROFILE_DATA.bioEnglish}
                &rdquo;
              </blockquote>

              {/* Interactive Verified Credential Copy Bar inside Focal Glass Card */}
              <div className="mt-5 rounded-xl border border-[#A61E4D]/30 bg-[#FCE8EF]/80 p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#881337]"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-[#881337]">
                        Lisensi Resmi LSP Kemensos RI
                      </span>
                      <span className="font-mono-code block text-[11px] font-medium text-[#52323F]">
                        ID: {PROFILE_DATA.credentialId}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCredential}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#8A5A6E] bg-white px-3 py-1.5 text-xs font-semibold text-[#231118] transition-colors hover:border-[#A61E4D] hover:bg-[#FCE8EF]"
                  >
                    {copiedId ? (
                      <>
                        <Check
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#881337]"
                        />
                        <span className="text-[#881337]">ID Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#881337]"
                        />
                        <span>Salin ID</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Cross-Sector Track Record Badges */}
            <div className="mt-5 border-t border-[#DEC3D0] pt-4">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#52323F]">
                <Globe aria-hidden="true" className="h-3.5 w-3.5 text-[#881337]" />
                <span>Institusi & Organisasi Tempat Berkarya:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PROFILE_DATA.trustedInstitutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-lg border border-[#DEC3D0] bg-white/85 px-2.5 py-1 text-[11px] font-semibold text-[#231118]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Architectural 3-Metric Summary Bar (Unified ledger instead of 3 floating cards) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.22 }}
        className="pearl-card mt-8 rounded-2xl p-5 sm:p-6"
      >
        <div className="grid grid-cols-1 divide-y divide-[#DEC3D0] md:grid-cols-3 md:divide-x md:divide-y-0">
          {PROFILE_DATA.quickStats.map((stat, idx) => {
            const icons = [Building2, GraduationCap, Award];
            const IconComponent = icons[idx] || Award;

            return (
              <div
                key={stat.id}
                className={`flex items-start justify-between gap-4 ${
                  idx === 0
                    ? "pb-4 md:pr-6 md:pb-0"
                    : idx === 1
                    ? "py-4 md:px-6 md:py-0"
                    : "pt-4 md:pt-0 md:pl-6"
                }`}
              >
                <div>
                  <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                    {stat.label}
                  </span>
                  <h3 className="font-heading mt-1 text-lg font-bold text-[#231118] sm:text-xl">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#52323F]">
                    {stat.subtext}
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25">
                  <IconComponent aria-hidden="true" className="h-5 w-5" />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
