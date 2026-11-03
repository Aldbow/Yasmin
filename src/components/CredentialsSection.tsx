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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

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
      className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Identity Motif Section Header */}
      <div className="mb-10 border-b border-[#DEC3D0] pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold tracking-wider text-[#881337]">
            03 / LISENSI PROFESI & FONDASI AKADEMIK
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#DEC3D0]" />
        </div>
        <h2 className="font-heading mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#231118] sm:text-4xl">
          Sertifikasi Profesi Nasional &{" "}
          <span className="font-editorial font-normal italic text-[#A61E4D]">
            Pendidikan Vokasi
          </span>
        </h2>
        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-[#52323F] sm:text-base">
          Kredibilitas resmi sebagai Pekerja Sosial Tersertifikasi di bawah
          Lembaga Sertifikasi Profesi (LSP) Kementerian Sosial Republik
          Indonesia, dipadukan dengan pendidikan tinggi vokasi pekerjaan sosial
          dan literasi sistem komputer.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-stretch">
        {/* 1. Interactive Mother-of-Pearl National License Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
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
                : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="pearl-card relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#8A5A6E] p-6 shadow-lg shadow-[#52142D]/8 sm:p-8"
          >
            {/* Pearlescent Rose-Champagne Foil Reflection Layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.45 : 0.18,
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(252, 232, 239, 0.9), rgba(244, 211, 225, 0.5) 42%, transparent 80%)`,
              }}
            />

            <div className="relative z-10">
              {/* Top Official Seal Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DEC3D0] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/30">
                    <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-mono-code text-[11px] font-semibold uppercase tracking-widest text-[#881337]">
                      Lisensi Profesi Nasional
                    </span>
                    <p className="text-xs font-semibold text-[#52323F]">
                      Kementerian Sosial Republik Indonesia (LSP)
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8A5A6E] bg-[#FCE8EF] px-3 py-1 text-xs font-semibold text-[#881337]">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-[#A61E4D]"
                  />
                  Terverifikasi Aktif
                </span>
              </div>

              {/* Certificate Title & Holder */}
              <div className="mt-6">
                <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[#6E4757]">
                  Kualifikasi Sertifikasi Resmi
                </span>
                <h3 className="font-heading mt-1 text-2xl font-extrabold text-[#231118] sm:text-3xl">
                  Licensed Certified Social Worker
                </h3>
                <p className="mt-1 text-sm font-medium text-[#52323F]">
                  Pemegang Lisensi:{" "}
                  <span className="font-bold text-[#231118]">
                    {PROFILE_DATA.name}
                  </span>
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#DEC3D0] bg-white/90 p-3.5">
                  <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757]">
                    Lembaga Penerbit
                  </span>
                  <p className="mt-1 text-xs font-bold text-[#231118] sm:text-sm">
                    {PROFILE_DATA.credentialIssuer}
                  </p>
                </div>

                <div className="rounded-xl border border-[#DEC3D0] bg-white/90 p-3.5">
                  <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757]">
                    Masa Berlaku Lisensi
                  </span>
                  <p className="mt-1 text-xs font-bold text-[#881337] sm:text-sm">
                    {PROFILE_DATA.credentialValidFrom} s.d.{" "}
                    {PROFILE_DATA.credentialValidUntil}
                  </p>
                </div>
              </div>
            </div>

            {/* Credential ID Copy Box */}
            <div className="relative z-10 mt-6 rounded-xl border border-[#A61E4D]/30 bg-[#FCE8EF]/85 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-mono-code text-[10px] font-semibold uppercase tracking-widest text-[#881337]">
                    Nomor Registrasi Kredensial (Kemensos RI)
                  </span>
                  <p className="font-mono-code mt-0.5 text-base font-bold tracking-wider text-[#231118] sm:text-lg">
                    {PROFILE_DATA.credentialId}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyId}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#A61E4D] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#8C163E] active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check aria-hidden="true" className="h-4 w-4" />
                      <span>ID Disalin</span>
                    </>
                  ) : (
                    <>
                      <Copy aria-hidden="true" className="h-4 w-4" />
                      <span>Salin ID Kredensial</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Dual Education Cards */}
        <div className="flex flex-col justify-between gap-5 lg:col-span-6">
          {EDUCATION_DATA.map((edu, index) => {
            const isPrimary = index === 0;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1"
              >
                <GlassCard className="flex h-full flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono-code rounded-lg border border-[#DEC3D0] bg-[#FCE8EF] px-3 py-1 text-xs font-semibold text-[#881337]">
                        {edu.badge}
                      </span>

                      <div className="font-mono-code flex items-center gap-3 text-xs font-medium text-[#52323F]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-[#881337]"
                          />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#6E4757]">
                          <MapPin
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-[#881337]"
                          />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[#231118] sm:text-xl">
                          {edu.institution}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-[#881337]">
                          {edu.degree} · {edu.field}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25">
                        {isPrimary ? (
                          <GraduationCap
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        ) : (
                          <Cpu aria-hidden="true" className="h-5 w-5" />
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-[#52323F] sm:text-sm">
                      {edu.description}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-1.5 border-t border-[#DEC3D0] pt-3.5">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#231118]"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A61E4D]"
                        />
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
