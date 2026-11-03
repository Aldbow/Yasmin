"use client";

import React, { useRef, useState } from "react";
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
import {
  SectionHeaderReveal,
  ScrollReveal,
  StaggerGrid,
  StaggerCard,
} from "./ScrollReveal";
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
      className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-8 sm:py-24 lg:px-14"
    >
      <SectionHeaderReveal
        indexCode="03 / SERTIFIKASI PROFESI & RIWAYAT PENDIDIKAN"
        title={
          <>
            Lisensi Profesi Nasional &{" "}
            <span className="font-editorial font-normal italic text-[#A61E4D]">
              Pendidikan Tinggi Vokasi
            </span>
          </>
        }
        description="Sertifikasi kompetensi Pekerja Sosial dari Lembaga Sertifikasi Profesi (LSP) Kementerian Sosial Republik Indonesia beserta latar belakang pendidikan tinggi vokasi di Politeknik Kesejahteraan Sosial Bandung."
      />

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
        <ScrollReveal
          direction="left"
          duration={0.75}
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
            className="pearl-card shimmer-foil relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-5 shadow-xl shadow-[#52142D]/8 sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.52 : 0.22,
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(252, 232, 239, 0.95), rgba(244, 211, 225, 0.55) 42%, transparent 80%)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col gap-3 border-b border-[#E5C5D3] pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/30 sm:h-12 sm:w-12">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono-code block text-[10px] font-semibold uppercase tracking-widest text-[#881337] sm:text-[11px]">
                      Sertifikasi Profesi Nasional
                    </span>
                    <p className="text-xs font-semibold text-[#52323F]">
                      LSP Kementerian Sosial RI
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D4A5B8] bg-[#FCE8EF] px-3 py-1 text-xs font-semibold text-[#881337]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-sonar absolute -inset-0.5 rounded-full bg-[#A61E4D]" />
                    <span
                      aria-hidden="true"
                      className="relative h-2 w-2 rounded-full bg-[#A61E4D]"
                    />
                  </span>
                  Berlaku Aktif
                </span>
              </div>

              <div className="mt-5 sm:mt-6">
                <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-xs">
                  Kualifikasi Kompetensi
                </span>
                <h3 className="font-heading mt-1 text-xl font-extrabold text-[#231118] sm:text-3xl">
                  Pekerja Sosial Tersertifikasi
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-[#881337] sm:mt-1 sm:text-sm">
                  Licensed Certified Social Worker
                </p>
                <p className="mt-2 text-xs font-medium text-[#52323F] sm:text-sm">
                  Pemegang Sertifikat:{" "}
                  <span className="font-bold text-[#231118]">
                    {PROFILE_DATA.name}
                  </span>
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                <div className="rounded-xl border border-white/95 bg-white/90 p-3 shadow-2xs sm:p-3.5">
                  <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757]">
                    Lembaga Penerbit
                  </span>
                  <p className="mt-1 text-xs font-bold text-[#231118] sm:text-sm">
                    {PROFILE_DATA.credentialIssuer}
                  </p>
                </div>

                <div className="rounded-xl border border-white/95 bg-white/90 p-3 shadow-2xs sm:p-3.5">
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

            <div className="relative z-10 mt-5 rounded-xl border border-[#A61E4D]/30 bg-[#FCE8EF]/85 p-3.5 sm:mt-6 sm:p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <div>
                  <span className="font-mono-code text-[10px] font-semibold uppercase tracking-widest text-[#881337]">
                    Nomor Registrasi Sertifikat (LSP Kemensos RI)
                  </span>
                  <p className="font-mono-code mt-0.5 text-sm font-bold tracking-wider text-[#231118] sm:text-lg">
                    {PROFILE_DATA.credentialId}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyId}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#A61E4D] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#8C163E] active:scale-95 sm:w-auto"
                >
                  {copied ? (
                    <>
                      <Check aria-hidden="true" className="h-4 w-4" />
                      <span>Nomor Disalin</span>
                    </>
                  ) : (
                    <>
                      <Copy aria-hidden="true" className="h-4 w-4" />
                      <span>Salin Nomor</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <StaggerGrid
          staggerDelay={0.16}
          className="flex flex-col justify-between gap-5 lg:col-span-6"
        >
          {EDUCATION_DATA.map((edu, index) => {
            const isPrimary = index === 0;
            return (
              <StaggerCard key={edu.id} className="flex-1">
                <GlassCard className="group shimmer-foil flex h-full flex-col justify-between p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#A61E4D]/6">
                  <div>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
                      <span className="font-mono-code w-fit rounded-lg border border-[#E5C5D3] bg-[#FCE8EF] px-2.5 py-1 text-[11px] font-semibold text-[#881337] sm:px-3 sm:text-xs">
                        {edu.badge}
                      </span>

                      <div className="font-mono-code flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-[#52323F] sm:text-xs">
                        <span className="inline-flex items-center gap-1">
                          <Calendar
                            aria-hidden="true"
                            className="h-3.5 w-3.5 shrink-0 text-[#881337]"
                          />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#6E4757]">
                          <MapPin
                            aria-hidden="true"
                            className="h-3.5 w-3.5 shrink-0 text-[#881337]"
                          />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3.5 flex items-start justify-between gap-3 sm:mt-4">
                      <div>
                        <h3 className="font-heading text-base font-bold text-[#231118] transition-colors duration-200 group-hover:text-[#881337] sm:text-xl">
                          {edu.institution}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-[#881337] sm:text-sm">
                          {edu.degree} · {edu.field}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
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

                    <p className="mt-2.5 text-xs leading-relaxed text-[#52323F] sm:mt-3 sm:text-sm">
                      {edu.description}
                    </p>
                  </div>

                  <ul className="mt-3.5 space-y-1.5 border-t border-[#E5C5D3] pt-3 sm:mt-4 sm:pt-3.5">
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
              </StaggerCard>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
