"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  PROFILE_DATA,
  EXPERIENCES,
  EDUCATION_DATA,
  VOLUNTEER_DATA,
} from "@/data/portfolioData";

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVPreviewModal({
  isOpen,
  onClose,
}: CVPreviewModalProps) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Curriculum Vitae Aulia Yasmin, S.Tr.Sos."
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        >
          {/* Solid Darkened Rosewood Scrim (No backdrop-blur to respect R-10 dose cap) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#231118]/60"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            data-lenis-prevent
            className="relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#8A5A6E] bg-[#FDF8FA] shadow-2xl"
          >
            {/* Modal Action Bar */}
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[#DEC3D0] bg-[#F7EEF2] px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  aria-hidden="true"
                  className="h-5 w-5 text-[#881337]"
                />
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#231118] sm:text-base">
                    Curriculum Vitae · {PROFILE_DATA.name}
                  </h3>
                  <p className="font-mono-code text-[11px] font-semibold text-[#881337]">
                    Licensed Certified Social Worker · ID:{" "}
                    {PROFILE_DATA.credentialId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#A61E4D] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#8C163E]"
                >
                  <Printer aria-hidden="true" className="h-4 w-4" />
                  <span>Cetak / Simpan PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup pratinjau CV"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#8A5A6E] bg-white text-[#231118] transition-colors hover:bg-[#FCE8EF]"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Printable CV Content Body */}
            <div
              id="printable-cv-area"
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 text-[#231118] sm:p-8"
            >
              {/* CV Header */}
              <div className="border-b border-[#DEC3D0] pb-5">
                <h1 className="font-heading text-2xl font-extrabold text-[#231118] sm:text-3xl">
                  {PROFILE_DATA.name}
                </h1>
                <p className="mt-1 text-sm font-bold text-[#881337]">
                  {PROFILE_DATA.title} · Kemensos RI (ID:{" "}
                  {PROFILE_DATA.credentialId})
                </p>
                <p className="mt-1 text-xs font-medium text-[#52323F]">
                  Counselor · Corporate Social Responsibility (CSR) · Community
                  Development · Human-Centered HR & Administration
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-[#52323F]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-[#881337]"
                    />
                    {PROFILE_DATA.location}
                  </span>
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#881337] hover:underline"
                  >
                    <span>{PROFILE_DATA.linkedinHandle}</span>
                    <ExternalLink aria-hidden="true" className="h-3 w-3" />
                  </a>
                  <span>Lisensi Aktif: Des 2024 s.d. Des 2029</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="mt-5 border-b border-[#DEC3D0] pb-5">
                <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#881337]">
                  Ringkasan Eksekutif
                </h2>
                <p className="mt-2 text-xs leading-relaxed font-medium text-[#231118] sm:text-sm">
                  {PROFILE_DATA.bioIndonesian}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#52323F] italic">
                  {PROFILE_DATA.bioEnglish}
                </p>
              </div>

              {/* License & Education */}
              <div className="mt-5 grid grid-cols-1 gap-4 border-b border-[#DEC3D0] pb-5 sm:grid-cols-2">
                <div>
                  <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#881337]">
                    Pendidikan Tinggi
                  </h2>
                  <div className="mt-2 space-y-3">
                    {EDUCATION_DATA.map((edu) => (
                      <div key={edu.id}>
                        <p className="text-xs font-bold text-[#231118] sm:text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-xs font-medium text-[#52323F]">
                          {edu.degree} · {edu.field} ({edu.period})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#881337]">
                    Sertifikasi Nasional & Bahasa
                  </h2>
                  <div className="mt-2 space-y-2 text-xs">
                    <p className="font-bold text-[#231118]">
                      Licensed Certified Social Worker (LSP Kemensos RI)
                    </p>
                    <p className="font-mono-code font-semibold text-[#881337]">
                      Credential ID: {PROFILE_DATA.credentialId} (2024–2029)
                    </p>
                    <div className="pt-1 text-[#52323F]">
                      {PROFILE_DATA.languages.map((l) => (
                        <p key={l.language}>
                          • <strong>{l.language}:</strong> {l.proficiency}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 10 Professional Experiences */}
              <div className="mt-5 border-b border-[#DEC3D0] pb-5">
                <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#881337]">
                  Pengalaman Profesional (10 Peran)
                </h2>
                <div className="mt-3 space-y-3.5">
                  {EXPERIENCES.map((exp) => (
                    <div
                      key={exp.id}
                      className="rounded-xl border border-[#DEC3D0] bg-white p-3.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-bold text-[#231118] sm:text-sm">
                          {exp.role} ·{" "}
                          <span className="text-[#881337]">
                            {exp.organization}
                          </span>
                        </p>
                        <span className="font-mono-code text-[11px] font-medium text-[#6E4757]">
                          {exp.period} · {exp.location}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#52323F]">
                        {exp.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteering & Leadership */}
              <div className="mt-5">
                <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#881337]">
                  Kepemimpinan Organisasi & Kerelawanan Sosial
                </h2>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {VOLUNTEER_DATA.map((vol) => (
                    <div
                      key={vol.id}
                      className="rounded-xl border border-[#DEC3D0] bg-white p-3.5"
                    >
                      <p className="text-xs font-bold text-[#231118]">
                        {vol.organization} · {vol.role}
                      </p>
                      <p className="font-mono-code text-[11px] font-semibold text-[#881337]">
                        {vol.period} ({vol.duration})
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#52323F]">
                        {vol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
