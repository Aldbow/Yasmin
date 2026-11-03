"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Sprout,
  HeartHandshake,
  Briefcase,
  CheckCircle2,
  Scale,
  FileCheck2,
  Compass,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { BENTO_PILLARS } from "@/data/portfolioData";

export default function BentoPillarsSection() {
  const { pillar1, pillar2, pillar3, pillar4 } = BENTO_PILLARS;

  return (
    <section
      id="core-pillars"
      className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Identity Motif Section Header (No pill badge above H2 per R-09) */}
      <div className="mb-10 border-b border-[#DEC3D0] pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold tracking-wider text-[#881337]">
            01 / EMPAT PILAR KOMPETENSI
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#DEC3D0]" />
        </div>
        <h2 className="font-heading mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#231118] sm:text-4xl">
          Empati Pekerjaan Sosial dalam{" "}
          <span className="font-editorial font-normal italic text-[#A61E4D]">
            Human-Centered Perspective
          </span>{" "}
          & Strategi Organisasi
        </h2>
        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-[#52323F] sm:text-base">
          Sintesis kompetensi yang menghubungkan keahlian klinis dan komunitas
          Pekerja Sosial Tersertifikasi dengan kebutuhan strategis HR, CSR,
          administrasi pemerintahan, serta manajemen pemangku kepentingan.
        </p>
      </div>

      {/* Flagship Feature Panel (Pillar 01: Full-Width Editorial Split per R-14) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard className="p-6 sm:p-8 lg:p-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25">
                  <Users aria-hidden="true" className="h-5 w-5" />
                </div>
                <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[#881337]">
                  {pillar1.badge}
                </span>
              </div>

              <h3 className="font-heading mt-4 text-2xl font-bold text-[#231118] sm:text-3xl">
                {pillar1.title}
              </h3>
              <p className="font-editorial mt-1 text-lg italic text-[#881337]">
                {pillar1.subtitle}
              </p>

              <p className="mt-3.5 text-sm leading-relaxed text-[#52323F] sm:text-base">
                {pillar1.description}
              </p>

              <div className="mt-6 border-t border-[#DEC3D0] pt-4">
                <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                  Implementasi Nyata di Institusi:
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {pillar1.institutions.map((inst) => (
                    <span
                      key={inst}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#DEC3D0] bg-[#FCE8EF]/70 px-3 py-1.5 text-xs font-semibold text-[#881337]"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[#A61E4D]"
                      />
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-pillars Column */}
            <div className="space-y-4 lg:col-span-5">
              <div className="rounded-xl border border-[#DEC3D0] bg-white/90 p-5">
                <div className="flex items-center gap-2 text-[#881337]">
                  <Scale aria-hidden="true" className="h-4 w-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">
                    Employee Relations & Mediasi
                  </h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#52323F] sm:text-sm">
                  Fasilitasi komunikasi dua arah, resolusi konflik
                  interpersonal, dan penciptaan iklim kerja yang aman secara
                  psikologis.
                </p>
              </div>

              <div className="rounded-xl border border-[#DEC3D0] bg-white/90 p-5">
                <div className="flex items-center gap-2 text-[#881337]">
                  <FileCheck2 aria-hidden="true" className="h-4 w-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">
                    Administrasi Suportif & Etis
                  </h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#52323F] sm:text-sm">
                  Tata kelola dokumen kepegawaian, birokrasi kementerian, dan
                  kepatuhan SOP korporat maupun BUMN secara presisi.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Supporting 3-Column Competency Architecture (Pillars 02, 03, 04) */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Pillar 02: CSR & Community Development */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          <GlassCard className="flex h-full flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono-code text-xs font-semibold text-[#881337]">
                  {pillar2.badge}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25">
                  <Sprout aria-hidden="true" className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading mt-4 text-xl font-bold text-[#231118]">
                {pillar2.title}
              </h3>
              <p className="font-editorial mt-0.5 text-base italic text-[#881337]">
                {pillar2.subtitle}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#52323F]">
                {pillar2.description}
              </p>

              <ul className="mt-4 space-y-2">
                {pillar2.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed text-[#231118]"
                  >
                    <Compass
                      aria-hidden="true"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A61E4D]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-[#DEC3D0] pt-4">
              <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                Rekam Jejak Lapangan:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {pillar2.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-lg border border-[#DEC3D0] bg-white px-2.5 py-1 text-xs font-semibold text-[#231118]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Pillar 03: Counseling, Rehab & Social Research */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <GlassCard className="flex h-full flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono-code text-xs font-semibold text-[#881337]">
                  {pillar3.badge}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25">
                  <HeartHandshake aria-hidden="true" className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading mt-4 text-xl font-bold text-[#231118]">
                {pillar3.title}
              </h3>
              <p className="font-editorial mt-0.5 text-base italic text-[#881337]">
                {pillar3.subtitle}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#52323F]">
                {pillar3.description}
              </p>
            </div>

            <div className="mt-6 border-t border-[#DEC3D0] pt-4">
              <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                Institusi Rehabilitasi & Riset:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {pillar3.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-lg border border-[#DEC3D0] bg-white px-2.5 py-1 text-xs font-semibold text-[#231118]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Pillar 04: Education, Public Relations & Client Management */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="md:col-span-2 lg:col-span-1"
        >
          <GlassCard className="flex h-full flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono-code text-xs font-semibold text-[#881337]">
                  {pillar4.badge}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25">
                  <Briefcase aria-hidden="true" className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading mt-4 text-xl font-bold text-[#231118]">
                {pillar4.title}
              </h3>
              <p className="font-editorial mt-0.5 text-base italic text-[#881337]">
                {pillar4.subtitle}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#52323F]">
                {pillar4.description}
              </p>
            </div>

            <div className="mt-6 border-t border-[#DEC3D0] pt-4">
              <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                Organisasi Terkait:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {pillar4.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-lg border border-[#DEC3D0] bg-white px-2.5 py-1 text-xs font-semibold text-[#231118]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Static Scannable Competency Index (Replaces endless marquee loop per R-19) */}
      <div className="mt-6 rounded-2xl border border-[#DEC3D0] bg-[#F7EEF2]/80 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono-code shrink-0 text-xs font-semibold uppercase tracking-wider text-[#881337]">
            Keahlian Lintas Fungsi:
          </span>
          <div className="flex flex-wrap gap-2">
            {pillar4.marqueeSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono-code rounded-lg border border-[#DEC3D0] bg-white px-3 py-1 text-xs font-medium text-[#231118]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
