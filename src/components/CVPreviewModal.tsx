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
          aria-label="Curriculum Vitae — Aulia Yasmin, S.Tr.Sos."
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            data-lenis-prevent
            className="glass-surface relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#0F172A]/95 shadow-2xl"
          >
            {/* Modal Action Bar */}
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/15 bg-black/40 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-white sm:text-base">
                    Curriculum Vitae — {PROFILE_DATA.name}
                  </h3>
                  <p className="font-mono-code text-[11px] text-emerald-300">
                    Licensed Certified Social Worker · ID:{" "}
                    {PROFILE_DATA.credentialId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 transition-transform hover:scale-[1.02]"
                >
                  <Printer className="h-4 w-4" />
                  <span>Print / Save as PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup pratinjau CV"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Printable CV Content Body */}
            <div
              id="printable-cv-area"
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 text-slate-200 sm:p-8"
            >
              {/* CV Header */}
              <div className="border-b border-white/15 pb-5">
                <h1 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                  {PROFILE_DATA.name}
                </h1>
                <p className="mt-1 text-sm font-semibold text-emerald-300">
                  {PROFILE_DATA.title} — Kemensos RI (ID:{" "}
                  {PROFILE_DATA.credentialId})
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Counselor │ Corporate Social Responsibility (CSR) │ Community
                  Development │ Human-Centered HR & Administration
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    {PROFILE_DATA.location}
                  </span>
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-300 hover:underline"
                  >
                    <span>{PROFILE_DATA.linkedinHandle}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <span>Lisensi Aktif: Des 2024 – Des 2029</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="mt-5 border-b border-white/15 pb-5">
                <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Executive Summary
                </h2>
                <p className="mt-2 text-xs leading-relaxed font-medium text-slate-100 sm:text-sm">
                  {PROFILE_DATA.bioIndonesian}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300 italic">
                  {PROFILE_DATA.bioEnglish}
                </p>
              </div>

              {/* License & Education */}
              <div className="mt-5 grid grid-cols-1 gap-4 border-b border-white/15 pb-5 sm:grid-cols-2">
                <div>
                  <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Education
                  </h2>
                  <div className="mt-2 space-y-3">
                    {EDUCATION_DATA.map((edu) => (
                      <div key={edu.id}>
                        <p className="text-xs font-bold text-white sm:text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-emerald-300">
                          {edu.degree} — {edu.field} ({edu.period})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-emerald-300">
                    National Certification & Languages
                  </h2>
                  <div className="mt-2 space-y-2 text-xs">
                    <p className="font-bold text-white">
                      Licensed Certified Social Worker (LSP Kemensos RI)
                    </p>
                    <p className="font-mono-code text-emerald-300">
                      Credential ID: {PROFILE_DATA.credentialId} (2024–2029)
                    </p>
                    <div className="pt-1 text-slate-300">
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
              <div className="mt-5 border-b border-white/15 pb-5">
                <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Professional Experience (10 Roles)
                </h2>
                <div className="mt-3 space-y-3.5">
                  {EXPERIENCES.map((exp) => (
                    <div
                      key={exp.id}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-bold text-white sm:text-sm">
                          {exp.role} —{" "}
                          <span className="text-emerald-300">
                            {exp.organization}
                          </span>
                        </p>
                        <span className="font-mono-code text-[11px] text-slate-400">
                          {exp.period} · {exp.location}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {exp.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteering & Leadership */}
              <div className="mt-5">
                <h2 className="font-mono-code text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Social Impact, Volunteering & Organization Leadership
                </h2>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {VOLUNTEER_DATA.map((vol) => (
                    <div
                      key={vol.id}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5"
                    >
                      <p className="text-xs font-bold text-white">
                        {vol.organization} — {vol.role}
                      </p>
                      <p className="font-mono-code text-[11px] text-emerald-300">
                        {vol.period} ({vol.duration})
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
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
