"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Copy,
  MapPin,
  Award,
  Building2,
  GraduationCap,
  ArrowUpRight,
  FileText,
  Sparkles,
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
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex(
        (prev) => (prev + 1) % PROFILE_DATA.morphingKeywords.length
      );
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCredential = () => {
    navigator.clipboard.writeText(PROFILE_DATA.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2400);
  };

  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24"
    >
      {/* 1. Top Glass Badge (Verified Pill — PRD Section 5.2) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-7 flex flex-wrap items-center justify-between gap-3"
      >
        <button
          type="button"
          onClick={handleCopyCredential}
          title="Klik untuk menyalin ID Kredensial Kemensos RI"
          className="glass-surface group inline-flex cursor-pointer items-center gap-2.5 rounded-full px-4 py-2 text-left text-xs font-medium text-slate-200 transition-all hover:border-emerald-400/40 hover:bg-white/[0.09]"
        >
          {/* Pulsing Green Active License Dot */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="text-slate-100">
            ✨ Licensed Certified Social Worker — Kemensos RI
          </span>

          <span className="font-mono-code rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            ID: {PROFILE_DATA.credentialId}
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-emerald-300">
            {copiedId ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-300">Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span className="hidden sm:inline">Salin ID</span>
              </>
            )}
          </span>
        </button>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-slate-300">
          <MapPin className="h-3.5 w-3.5 text-rose-400" />
          <span>{PROFILE_DATA.location}</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-300/90">Aktif s.d. Des 2029</span>
        </div>
      </motion.div>

      {/* 2. Main 12-Column Balanced Hero Grid (7 Cols Left / 5 Cols Right, Equal Height) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Primary Identity, Morphing Sub-headline & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="flex flex-col justify-between lg:col-span-7"
        >
          <div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[62px] lg:leading-[1.06]">
              Aulia Yasmin,{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
                S.Tr.Sos.
              </span>
            </h1>

            {/* Positioning Branding Strip */}
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs font-medium text-slate-300 sm:text-sm">
              {PROFILE_DATA.positioningPills.map((pill, idx) => (
                <React.Fragment key={pill}>
                  <span className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-slate-200 ring-1 ring-white/10">
                    {pill}
                  </span>
                  {idx < PROFILE_DATA.positioningPills.length - 1 && (
                    <span className="text-emerald-400/60">│</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Sub-headline with Editorial Italic & Morphing Text (PRD Section 5.2) */}
            <div className="mt-6 max-w-2xl">
              <p className="font-heading text-xl leading-relaxed font-medium text-slate-200 sm:text-2xl sm:leading-snug">
                Bridging{" "}
                <span className="font-editorial text-2xl font-normal italic text-emerald-300 sm:text-3xl">
                  Human-Centered Empathy
                </span>{" "}
                with Strategic{" "}
                <span className="font-semibold text-white underline decoration-emerald-400/60 decoration-2 underline-offset-4">
                  CSR
                </span>
                ,{" "}
                <span className="font-semibold text-white underline decoration-indigo-400/60 decoration-2 underline-offset-4">
                  Community Development
                </span>
                , and{" "}
                <span className="font-semibold text-white underline decoration-rose-400/60 decoration-2 underline-offset-4">
                  People Management
                </span>
                .
              </p>

              {/* Dynamic Morphing Focus Indicator */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
                <span className="font-mono-code inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-400">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  Focus Domain:
                </span>
                <div className="relative h-7 overflow-hidden rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={PROFILE_DATA.morphingKeywords[keywordIndex]}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.32 }}
                      className="block text-xs font-semibold text-emerald-300"
                    >
                      {PROFILE_DATA.morphingKeywords[keywordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA Row aligned at the bottom of Left Column */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 ring-1 ring-white/30 transition-all hover:scale-[1.02] hover:shadow-emerald-500/35"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={onOpenCV}
              className="glass-surface glass-surface-interactive inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-slate-100"
            >
              <FileText className="h-4 w-4 text-emerald-300" />
              <span>Preview & Download CV</span>
            </button>

            <a
              href="#experience"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-xs font-medium text-slate-300 transition-colors hover:text-white"
            >
              <span>Lihat 10 Rekam Jejak</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>

        {/* 3. Right Column: Executive Summary Glass Bio Card (Balanced Height) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="lg:col-span-5"
        >
          <GlassCard
            spotlightColor="indigo"
            className="flex h-full flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3.5">
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-widest text-emerald-300">
                    Executive Summary
                  </span>
                  <h2 className="font-heading text-base font-bold text-white">
                    Human-Centered Professional Profile
                  </h2>
                </div>

                {/* Language Switcher for Bio (ID / EN) */}
                <div className="inline-flex items-center rounded-full border border-white/15 bg-black/25 p-0.5 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setBioLang("id")}
                    className={`cursor-pointer rounded-full px-2.5 py-1 font-medium transition-colors ${
                      bioLang === "id"
                        ? "bg-white/15 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    ID
                  </button>
                  <button
                    type="button"
                    onClick={() => setBioLang("en")}
                    className={`cursor-pointer rounded-full px-2.5 py-1 font-medium transition-colors ${
                      bioLang === "en"
                        ? "bg-white/15 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Short, Meaningful & Easy-to-Understand Executive Summary */}
              <blockquote className="text-base leading-relaxed font-medium text-slate-100 sm:text-[17px] sm:leading-relaxed">
                &ldquo;
                {bioLang === "id"
                  ? PROFILE_DATA.bioIndonesian
                  : PROFILE_DATA.bioEnglish}
                &rdquo;
              </blockquote>

              {/* Compact Verified Credential Strip inside Bio Card for Structural Balance */}
              <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.07] px-3.5 py-2.5">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  <div className="text-xs">
                    <span className="font-semibold text-emerald-200">
                      Lisensi Resmi LSP Kemensos RI
                    </span>
                    <span className="font-mono-code block text-[11px] text-slate-300">
                      {PROFILE_DATA.credentialId} · Berlaku 2024–2029
                    </span>
                  </div>
                </div>
                <a
                  href="#credentials"
                  className="font-mono-code shrink-0 text-[11px] font-semibold text-emerald-300 hover:underline"
                >
                  Detail →
                </a>
              </div>
            </div>

            {/* Cross-Sector Track Record Badges */}
            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                <Globe className="h-3.5 w-3.5 text-indigo-300" />
                <span>Rekam Jejak Lintas Institusi & Sektor:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PROFILE_DATA.trustedInstitutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-200"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* 4. Floating Quick-Stats (3 Mini Glass Cards with 3D Tilt — PRD Section 5.2) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28 }}
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {PROFILE_DATA.quickStats.map((stat, idx) => {
          const icons = [Building2, GraduationCap, Award];
          const IconComponent = icons[idx] || Award;
          const badgeColors = {
            emerald:
              "from-emerald-500/20 to-teal-500/10 text-emerald-300 ring-emerald-400/30",
            indigo:
              "from-indigo-500/20 to-blue-500/10 text-indigo-300 ring-indigo-400/30",
            rose: "from-rose-500/20 to-pink-500/10 text-rose-300 ring-rose-400/30",
          };

          return (
            <GlassCard
              key={stat.id}
              spotlightColor={stat.accent}
              enableTilt={true}
              maxTiltDeg={7}
              className="p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                  <h3 className="font-heading mt-1 text-lg font-bold text-white sm:text-xl">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300/90">
                    {stat.subtext}
                  </p>
                </div>

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ${badgeColors[stat.accent]}`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
              </div>
            </GlassCard>
          );
        })}
      </motion.div>
    </section>
  );
}
