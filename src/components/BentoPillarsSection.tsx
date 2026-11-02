"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Sprout,
  HeartHandshake,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Scale,
  FileCheck2,
  Microscope,
  Compass,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { BENTO_PILLARS } from "@/data/portfolioData";

export default function BentoPillarsSection() {
  const { pillar1, pillar2, pillar3, pillar4 } = BENTO_PILLARS;

  return (
    <section
      id="core-pillars"
      className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Section Header */}
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>The 4 Core Pillars · Multidisciplinary Synthesis</span>
        </div>
        <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Empati Pekerjaan Sosial dalam{" "}
          <span className="font-editorial font-normal italic text-emerald-300">
            Human-Centered Perspective
          </span>{" "}
          & Strategi Korporat
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          Empat pilar kompetensi utama yang menghubungkan keahlian klinis dan
          komunitas Pekerja Sosial Tersertifikasi dengan kebutuhan strategis HR,
          CSR, administrasi pemerintahan, serta manajemen pemangku kepentingan.
        </p>
      </div>

      {/* Balanced 12-Column Interlocking Bento Grid (Row 1: 7 + 5 cols, Row 2: 5 + 7 cols) */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
        {/* BENTO 1 (Row 1 Left - 7 Cols): Human-Centered HR & Administration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-7"
        >
          <GlassCard
            spotlightColor="indigo"
            className="flex h-full flex-col justify-between p-6 sm:p-8"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono-code rounded-full border border-indigo-400/30 bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                  {pillar1.badge}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/30">
                  <Users className="h-5 w-5" />
                </div>
              </div>

              <h3 className="font-heading mt-5 text-2xl font-bold text-white sm:text-3xl">
                {pillar1.title}
              </h3>
              <p className="font-editorial mt-1 text-lg italic text-indigo-200/90">
                {pillar1.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
                {pillar1.description}
              </p>

              {/* Interactive Sub-pillars inside Bento 1 */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-indigo-400/30 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-2 text-indigo-300">
                    <Scale className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Employee Relations & Mediasi
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    Fasilitasi komunikasi dua arah, resolusi konflik
                    interpersonal, dan penciptaan iklim kerja yang aman secara
                    psikologis.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-emerald-400/30 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <FileCheck2 className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Administrasi Suportif & Etis
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    Tata kelola dokumen kepegawaian, birokrasi kementerian, dan
                    kepatuhan SOP korporat/BUMN secara presisi.
                  </p>
                </div>
              </div>
            </div>

            {/* Institutional Proof Strip */}
            <div className="mt-7 border-t border-white/10 pt-5">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-slate-400">
                Implementasi Nyata di Institusi:
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {pillar1.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-400/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-200"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* BENTO 2 (Row 1 Right - 5 Cols): CSR & Community Development with Animated Wave/Ripple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="lg:col-span-5"
        >
          <GlassCard
            spotlightColor="emerald"
            className="relative flex h-full flex-col justify-between p-6 sm:p-8"
          >
            {/* Animated Wave/Ripple SVG Background Illustration (PRD Section 5.3) */}
            <div
              aria-hidden="true"
              className="animate-wave-ripple pointer-events-none absolute inset-x-0 bottom-0 z-0 opacity-25"
            >
              <svg
                viewBox="0 0 400 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path
                  d="M0 120C80 80 140 160 220 120C300 80 350 140 400 100V200H0V120Z"
                  fill="url(#emeraldWave1)"
                />
                <path
                  d="M0 150C100 110 180 180 280 140C340 115 375 150 400 135V200H0V150Z"
                  fill="url(#emeraldWave2)"
                />
                <defs>
                  <linearGradient
                    id="emeraldWave1"
                    x1="200"
                    y1="80"
                    x2="200"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#0D9488" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient
                    id="emeraldWave2"
                    x1="200"
                    y1="110"
                    x2="200"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D9488" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#0B111E" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono-code rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  {pillar2.badge}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                  <Sprout className="h-5 w-5" />
                </div>
              </div>

              <h3 className="font-heading mt-5 text-2xl font-bold text-white">
                {pillar2.title}
              </h3>
              <p className="font-editorial mt-1 text-base italic text-emerald-200/90">
                {pillar2.subtitle}
              </p>

              <p className="mt-3.5 text-sm leading-relaxed text-slate-200/90">
                {pillar2.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {pillar2.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-200"
                  >
                    <Compass className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-6 border-t border-white/10 pt-5">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-slate-400">
                Rekam Jejak Lapangan:
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {pillar2.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* BENTO 3 (Row 2 Left - 5 Cols): Counseling, Rehab & Social Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="lg:col-span-5"
        >
          <GlassCard
            spotlightColor="rose"
            className="group flex h-full flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono-code rounded-full border border-rose-400/30 bg-rose-500/15 px-3 py-1 text-xs font-medium text-rose-300">
                  {pillar3.badge}
                </span>
                {/* Micro-interactive icons that scale on hover (PRD Section 5.3) */}
                <div className="flex items-center gap-1.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Microscope className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <h3 className="font-heading mt-4 text-xl font-bold text-white sm:text-2xl">
                {pillar3.title}
              </h3>
              <p className="font-editorial mt-1 text-base italic text-rose-200/90">
                {pillar3.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
                {pillar3.description}
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-slate-400">
                Institusi Rehabilitasi & Riset:
              </span>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {pillar3.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-xl border border-rose-400/25 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-200 transition-transform duration-200 group-hover:scale-[1.02]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* BENTO 4 (Row 2 Right - 7 Cols): Education, Public Relations & Client Management with Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <GlassCard
            spotlightColor="mixed"
            className="flex h-full flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono-code rounded-full border border-teal-400/30 bg-teal-500/15 px-3 py-1 text-xs font-medium text-teal-300">
                  {pillar4.badge}
                </span>
                <div className="flex items-center gap-2">
                  {pillar4.institutions.map((inst) => (
                    <span
                      key={inst}
                      className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300 sm:inline-block"
                    >
                      {inst}
                    </span>
                  ))}
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <h3 className="font-heading mt-4 text-xl font-bold text-white sm:text-2xl">
                {pillar4.title}
              </h3>
              <p className="font-editorial mt-1 text-base italic text-teal-200/90">
                {pillar4.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
                {pillar4.description}
              </p>

              {/* Mobile Institutions list */}
              <div className="mt-3 flex flex-wrap gap-1.5 sm:hidden">
                {pillar4.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            {/* Marquee Skill Badges (PRD Section 5.3 Bento 4) */}
            <div className="mt-6">
              <span className="font-mono-code mb-2 block text-[11px] uppercase tracking-wider text-slate-400">
                Core Cross-Functional Competencies:
              </span>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 py-3">
                <div className="animate-marquee flex items-center gap-2.5 px-2">
                  {[...pillar4.marqueeSkills, ...pillar4.marqueeSkills].map(
                    (skill, index) => (
                      <span
                        key={`${skill}-${index}`}
                        className="font-mono-code inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs font-medium text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
