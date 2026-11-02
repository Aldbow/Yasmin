"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Copy,
  Check,
  GraduationCap,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { PROFILE_DATA, EDUCATION_DATA } from "@/data/portfolioData";

export default function CredentialsSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  // PRD Section 6.4: 3D Holographic Tilt max 8deg + diagonal rainbow/aurora sheen
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ rotateX, rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(PROFILE_DATA.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="credentials"
      className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Section Header */}
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Official Credentials & Academic Foundation</span>
        </div>
        <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Lisensi Profesi Nasional &{" "}
          <span className="font-editorial font-normal italic text-emerald-300">
            Latar Akademik
          </span>
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
          Kredibilitas resmi sebagai Pekerja Sosial Tersertifikasi di bawah
          Lembaga Sertifikasi Profesi (LSP) Kementerian Sosial Republik
          Indonesia, dipadukan dengan pendidikan tinggi vokasi pekerjaan sosial
          dan literasi sistem komputer.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-stretch">
        {/* 1. 3D Holographic Frosted License Card (PRD Section 5.5 & 6.4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1100px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="glass-surface relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-emerald-400/30 p-6 shadow-2xl sm:p-8"
          >
            {/* Holographic Rainbow / Aurora Foil Reflection Layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.32 : 0.12,
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, 0.45), rgba(99, 102, 241, 0.35) 38%, rgba(244, 63, 94, 0.25) 68%, transparent 90%)`,
              }}
            />

            {/* Diagonal Specular Shimmer Line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.28 : 0.06,
                background: `linear-gradient(125deg, transparent 25%, rgba(255,255,255,0.45) ${glarePos.x}%, transparent 75%)`,
              }}
            />

            <div className="relative z-10">
              {/* Top Official Seal Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/30 via-teal-500/20 to-indigo-500/30 text-emerald-300 ring-1 ring-emerald-300/40">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-mono-code text-[11px] uppercase tracking-widest text-emerald-300">
                      National Professional License
                    </span>
                    <p className="text-xs font-medium text-slate-300">
                      Kementerian Sosial Republik Indonesia (LSP)
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Verified Active
                </span>
              </div>

              {/* Certificate Title & Holder */}
              <div className="mt-6">
                <span className="font-mono-code text-xs uppercase tracking-wider text-slate-400">
                  Nama Sertifikasi Resmi
                </span>
                <h3 className="font-heading mt-1 bg-gradient-to-r from-white via-emerald-100 to-indigo-200 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                  Licensed Certified Social Worker
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  Pemegang Lisensi:{" "}
                  <span className="font-semibold text-white">
                    {PROFILE_DATA.name}
                  </span>
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-3.5">
                  <span className="font-mono-code text-[10px] uppercase tracking-wider text-slate-400">
                    Lembaga Penerbit
                  </span>
                  <p className="mt-1 text-xs font-semibold text-slate-100 sm:text-sm">
                    {PROFILE_DATA.credentialIssuer}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-3.5">
                  <span className="font-mono-code text-[10px] uppercase tracking-wider text-slate-400">
                    Masa Berlaku Lisensi
                  </span>
                  <p className="mt-1 text-xs font-semibold text-emerald-300 sm:text-sm">
                    {PROFILE_DATA.credentialValidFrom} –{" "}
                    {PROFILE_DATA.credentialValidUntil}
                  </p>
                </div>
              </div>
            </div>

            {/* Credential ID Copy Box */}
            <div className="relative z-10 mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-950/30 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-mono-code text-[10px] uppercase tracking-widest text-emerald-300/90">
                    Official Credential ID (Kemensos RI)
                  </span>
                  <p className="font-mono-code mt-0.5 text-base font-bold tracking-wider text-white sm:text-lg">
                    {PROFILE_DATA.credentialId}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyId}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-emerald-500/20 px-4 py-2.5 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/40 transition-all hover:bg-emerald-500/30 hover:text-white active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-300" />
                      <span>ID Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Salin ID Kredensial</span>
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                <Sparkles className="h-3 w-3 text-emerald-400" />
                <span>
                  Arahkan kursor pada kartu untuk melihat efek autentikasi
                  holografik 3D.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. Dual Glass Education Cards (PRD Section 5.5) */}
        <div className="flex flex-col justify-between gap-5 lg:col-span-6">
          {EDUCATION_DATA.map((edu, index) => {
            const isPrimary = index === 0;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="flex-1"
              >
                <GlassCard
                  spotlightColor={isPrimary ? "indigo" : "emerald"}
                  className="flex h-full flex-col justify-between p-6 sm:p-7"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`font-mono-code rounded-full border px-3 py-1 text-xs font-medium ${
                          isPrimary
                            ? "border-indigo-400/30 bg-indigo-500/15 text-indigo-300"
                            : "border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
                        }`}
                      >
                        {edu.badge}
                      </span>

                      <div className="font-mono-code flex items-center gap-3 text-xs text-slate-400">
                        <span className="inline-flex items-center gap-1 text-slate-300">
                          <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                          {edu.institution}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-emerald-300">
                          {edu.degree} — {edu.field}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-slate-200 ring-1 ring-white/15">
                        {isPrimary ? (
                          <GraduationCap className="h-5 w-5 text-indigo-300" />
                        ) : (
                          <Cpu className="h-5 w-5 text-emerald-300" />
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {edu.description}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3.5">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-200"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
