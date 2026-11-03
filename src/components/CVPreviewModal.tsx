"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  ShieldCheck,
  FileCheck2,
  Layers,
  FileText,
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

type CVPageMode = "one-page" | "two-page";

interface ATSCVDocumentProps {
  mode: CVPageMode;
}

function ATSCVDocument({ mode }: ATSCVDocumentProps) {
  const isCompact = mode === "one-page";

  return (
    <div
      className={`mx-auto w-full bg-white text-[#111827] ${
        isCompact
          ? "space-y-2.5 text-[10.2px] leading-[1.28]"
          : "space-y-4 text-[11.2px] leading-[1.42]"
      }`}
    >
      {/* 1. HEADER IDENTITAS & KONTAK ATS */}
      <header className="ats-avoid-break border-b-2 border-[#111827] pb-2">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
          <div>
            <h1
              className={`font-heading font-extrabold tracking-tight text-[#111827] uppercase ${
                isCompact ? "text-[18px] leading-tight" : "text-[22px] leading-tight"
              }`}
            >
              {PROFILE_DATA.name}
            </h1>
            <p
              className={`font-semibold text-[#881337] ${
                isCompact ? "text-[10.8px]" : "text-[12px] mt-0.5"
              }`}
            >
              Pekerja Sosial Tersertifikasi (Licensed Certified Social Worker) ·
              LSP Kementerian Sosial RI
            </p>
          </div>

          <div
            className={`font-mono-code text-[#374151] sm:text-right ${
              isCompact ? "text-[9.5px] leading-[1.3]" : "text-[10.5px] leading-[1.4]"
            }`}
          >
            <p className="font-bold text-[#111827]">
              No. Lisensi: {PROFILE_DATA.credentialId}
            </p>
            <p>
              {PROFILE_DATA.location} | {PROFILE_DATA.email}
            </p>
            <p>{PROFILE_DATA.linkedinHandle}</p>
          </div>
        </div>

        <p
          className={`mt-1 font-medium text-[#374151] ${
            isCompact ? "text-[9.6px]" : "text-[10.5px]"
          }`}
        >
          <strong>Bidang Keahlian:</strong> Rehabilitasi Sosial & Manajemen Kasus
          (Case Management) · Tanggung Jawab Sosial Perusahaan (CSR) ·
          Pemberdayaan Masyarakat (Community Development) · Hubungan Kepegawaian
          & Administrasi SDM (HR & Employee Relations)
        </p>
      </header>

      {/* 2. RINGKASAN PROFESIONAL */}
      <section className="ats-avoid-break">
        <h2
          className={`ats-section-header border-b border-[#9CA3AF] pb-0.5 font-bold tracking-wider text-[#111827] uppercase ${
            isCompact ? "mb-1 text-[10.2px]" : "mb-1.5 text-[11.5px]"
          }`}
        >
          Ringkasan Profesional (Professional Summary)
        </h2>
        <p className="text-justify text-[#1F2937]">
          {PROFILE_DATA.bioIndonesian} Memiliki rekam jejak penugasan di 10
          instansi lintas sektor yang mencakup kementerian pusat, pemerintah
          daerah, BUMN, lembaga rehabilitasi sosial, serta perusahaan swasta.
        </p>
      </section>

      {/* 3. PENDIDIKAN & SERTIFIKASI PROFESI */}
      <section className="ats-avoid-break">
        <h2
          className={`ats-section-header border-b border-[#9CA3AF] pb-0.5 font-bold tracking-wider text-[#111827] uppercase ${
            isCompact ? "mb-1 text-[10.2px]" : "mb-2 text-[11.5px]"
          }`}
        >
          Pendidikan & Sertifikasi Profesi (Education & Certification)
        </h2>

        <div className={isCompact ? "space-y-1" : "space-y-2"}>
          <div className="ats-avoid-break">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-bold text-[#111827]">
                Politeknik Kesejahteraan Sosial (POLTEKESOS) Bandung{" "}
                <span className="font-normal text-[#374151]">|</span>{" "}
                <span className="font-semibold text-[#881337]">
                  Sarjana Terapan Pekerjaan Sosial (S.Tr.Sos.)
                </span>
              </p>
              <span className="font-mono-code shrink-0 text-[9.5px] font-semibold text-[#374151]">
                Bandung, Indonesia | 2020 - 2024
              </span>
            </div>
            <p className="text-[#374151]">
              • Fokus Studi: Pekerjaan Sosial Klinis & Rehabilitasi Sosial,
              Pemberdayaan Masyarakat (Community Development), Kebijakan
              Perlindungan Sosial, serta Penelitian Evaluasi Program.
            </p>
          </div>

          <div className="ats-avoid-break">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-bold text-[#111827]">
                Lembaga Sertifikasi Profesi (LSP) Kementerian Sosial RI{" "}
                <span className="font-normal text-[#374151]">|</span>{" "}
                <span className="font-semibold text-[#881337]">
                  Sertifikat Kompetensi Pekerja Sosial (Licensed Social Worker)
                </span>
              </p>
              <span className="font-mono-code shrink-0 text-[9.5px] font-semibold text-[#374151]">
                No. Reg: {PROFILE_DATA.credentialId} | Des 2024 - Des 2029
              </span>
            </div>
            {!isCompact && (
              <p className="text-[#374151]">
                • Kualifikasi Nasional: Asesmen Biopsikososial, Rencana
                Intervensi, Manajemen Kasus Terpadu, Konseling Psikososial, dan
                Evaluasi Keberfungsian Sosial.
              </p>
            )}
          </div>

          <div className="ats-avoid-break">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-bold text-[#111827]">
                SMK Negeri 2 Kota Bandung{" "}
                <span className="font-normal text-[#374151]">|</span>{" "}
                <span className="font-semibold text-[#374151]">
                  Teknik Komputer dan Jaringan (Sistem Informasi & Dokumentasi
                  Digital)
                </span>
              </p>
              <span className="font-mono-code shrink-0 text-[9.5px] font-semibold text-[#374151]">
                Bandung, Indonesia | 2017 - 2020
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PENGALAMAN KERJA & PRAKTIK LAPANGAN (10 PERAN) */}
      <section>
        <h2
          className={`ats-section-header border-b border-[#9CA3AF] pb-0.5 font-bold tracking-wider text-[#111827] uppercase ${
            isCompact ? "mb-1 text-[10.2px]" : "mb-2 text-[11.5px]"
          }`}
        >
          Pengalaman Kerja & Praktik Lapangan (Work Experience · 10 Peran)
        </h2>

        <div className={isCompact ? "space-y-1.5" : "space-y-2.5"}>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="ats-avoid-break">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p className="font-bold text-[#111827]">
                  {exp.role}{" "}
                  <span className="font-normal text-[#4B5563]">|</span>{" "}
                  <span className="font-semibold text-[#881337]">
                    {exp.organization}
                  </span>{" "}
                  <span className="font-normal text-[#4B5563]">
                    ({exp.tag})
                  </span>
                </p>
                <span className="font-mono-code shrink-0 text-[9.5px] font-semibold text-[#374151]">
                  {exp.period} | {exp.location}
                </span>
              </div>

              {isCompact ? (
                <p className="text-[#1F2937]">
                  • {exp.summary}{" "}
                  <span className="text-[#4B5563]">
                    [{exp.skills.slice(0, 3).join(", ")}]
                  </span>
                </p>
              ) : (
                <div className="mt-0.5 space-y-0.5">
                  <ul className="space-y-0.5 text-[#1F2937]">
                    {exp.highlights.map((pt, i) => (
                      <li key={i}>• {pt}</li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-medium text-[#4B5563]">
                    <strong>Kompetensi Terkait:</strong> {exp.skills.join(" · ")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. PENGALAMAN ORGANISASI & KEPEMIMPINAN SOSIAL */}
      <section className="ats-avoid-break">
        <h2
          className={`ats-section-header border-b border-[#9CA3AF] pb-0.5 font-bold tracking-wider text-[#111827] uppercase ${
            isCompact ? "mb-1 text-[10.2px]" : "mb-2 text-[11.5px]"
          }`}
        >
          Pengalaman Organisasi & Kepemimpinan Sosial (Leadership & Volunteering)
        </h2>

        <div
          className={
            isCompact
              ? "grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2"
              : "space-y-2"
          }
        >
          {VOLUNTEER_DATA.map((vol) => (
            <div key={vol.id} className="ats-avoid-break">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <p className="font-bold text-[#111827]">
                  {vol.organization} ·{" "}
                  <span className="font-semibold text-[#881337]">
                    {vol.role}
                  </span>
                  {vol.division ? (
                    <span className="font-normal text-[#374151]">
                      {" "}
                      ({vol.division})
                    </span>
                  ) : null}
                </p>
                <span className="font-mono-code shrink-0 text-[9.2px] font-semibold text-[#374151]">
                  {vol.period} ({vol.duration})
                </span>
              </div>

              {isCompact ? (
                <p className="text-[#1F2937]">• {vol.description}</p>
              ) : (
                <ul className="mt-0.5 space-y-0.5 text-[#1F2937]">
                  {vol.highlights.map((hl, idx) => (
                    <li key={idx}>• {hl}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. KOMPETENSI UTAMA, KETERAMPILAN TEKNIS & BAHASA (ATS KEYWORDS) */}
      <section className="ats-avoid-break">
        <h2
          className={`ats-section-header border-b border-[#9CA3AF] pb-0.5 font-bold tracking-wider text-[#111827] uppercase ${
            isCompact ? "mb-1 text-[10.2px]" : "mb-1.5 text-[11.5px]"
          }`}
        >
          Kompetensi Utama, Keterampilan Teknis & Bahasa (Skills & ATS Keywords)
        </h2>

        <div className={isCompact ? "space-y-0.5" : "space-y-1"}>
          <p>
            <strong>Rehabilitasi Sosial & Konseling:</strong> Asesmen
            Biopsikososial, Manajemen Kasus (Case Management), Konseling
            Psikososial, Pendampingan Disabilitas & Kelompok Rentan, Evaluasi
            Program Rehabilitasi, Penelitian Sosial Kualitatif & Kuantitatif.
          </p>
          <p>
            <strong>CSR & Pemberdayaan Masyarakat:</strong> Tanggung Jawab Sosial
            Perusahaan (Corporate Social Responsibility / CSR), Pemetaan Sosial
            (Social Mapping), Fasilitasi Diskusi Kelompok Terarah (Focus Group
            Discussion / FGD), Edukasi Perubahan Iklim, Koordinasi Pemerintah
            Daerah.
          </p>
          <p>
            <strong>SDM, Administrasi & Pengajaran:</strong> Hubungan
            Kepegawaian (Employee Relations), Tata Naskah Dinas & Pengarsipan
            Kelembagaan, Pembinaan Relawan, Komunikasi Klien (Client Relations),
            Bimbingan Belajar & Fasilitasi Pelatihan.
          </p>
          <p>
            <strong>Bahasa & Perangkat Kerja:</strong> Bahasa Indonesia (Penutur
            Jati / Kemampuan Profesional Penuh), Bahasa Inggris (Kemampuan Kerja
            Profesional), Microsoft Office (Word, Excel, PowerPoint), Google
            Workspace, Pengelolaan Basis Data & Dokumentasi Digital.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function CVPreviewModal({
  isOpen,
  onClose,
}: CVPreviewModalProps) {
  const [cvMode, setCvMode] = useState<CVPageMode>("one-page");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    const previousTitle = document.title;
    const suffix = cvMode === "one-page" ? "1Halaman_ATS" : "Lengkap_ATS";
    document.title = `CV_Aulia_Yasmin_STrSos_${suffix}`;
    document.body.style.overflow = "visible";

    setTimeout(() => {
      window.print();
      document.title = previousTitle;
      if (isOpen) {
        document.body.style.overflow = "hidden";
      }
    }, 60);
  };

  return (
    <>
      {/* Dedicated Top-Level Print Portal outside any modal overflow/transform containers */}
      {mounted &&
        createPortal(
          <div id="ats-cv-print-root" aria-hidden="true">
            <ATSCVDocument mode={cvMode} />
          </div>,
          document.body
        )}

      <AnimatePresence>
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Daftar Riwayat Hidup ATS Aulia Yasmin, S.Tr.Sos."
            data-lenis-prevent
            className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-[#231118]/65 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              data-lenis-prevent
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#8A5A6E] bg-[#F4EBF0] shadow-2xl"
            >
              {/* Toolbar Modal */}
              <div className="flex shrink-0 flex-col gap-2.5 border-b border-[#DEC3D0] bg-[#FDF8FA] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337]">
                      <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading truncate text-xs font-bold text-[#231118] sm:text-base">
                          CV Standar ATS · {PROFILE_DATA.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 rounded-md bg-[#FCE8EF] px-2 py-0.5 text-[10px] font-bold text-[#881337]">
                          <FileCheck2
                            aria-hidden="true"
                            className="h-3 w-3 shrink-0"
                          />
                          Ramah CV Screener
                        </span>
                      </div>
                      <p className="font-mono-code truncate text-[10px] font-medium text-[#52323F] sm:text-[11px]">
                        Format Teks Vektor A4 · Pilih 1 Lembar (Ringkas) atau 2
                        Lembar (Lengkap)
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Tutup pratinjau CV"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4A5B8] bg-white text-[#231118] transition-colors hover:bg-[#FCE8EF] sm:hidden"
                  >
                    <X aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>

                {/* Mode Switcher & Print Button */}
                <div className="flex flex-wrap items-center justify-between gap-2 sm:justify-end">
                  <div
                    role="group"
                    aria-label="Pilih jumlah lembar CV"
                    className="grid flex-1 grid-cols-2 rounded-xl border border-[#D4A5B8] bg-[#F7EEF2] p-1 text-xs sm:flex sm:flex-initial"
                  >
                    <button
                      type="button"
                      aria-pressed={cvMode === "one-page"}
                      onClick={() => setCvMode("one-page")}
                      className={`inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-all sm:text-xs ${
                        cvMode === "one-page"
                          ? "bg-[#A61E4D] text-white shadow-xs"
                          : "text-[#52323F] hover:text-[#231118]"
                      }`}
                    >
                      <FileText aria-hidden="true" className="h-3.5 w-3.5" />
                      <span>1 Lembar (Ringkas ATS)</span>
                    </button>

                    <button
                      type="button"
                      aria-pressed={cvMode === "two-page"}
                      onClick={() => setCvMode("two-page")}
                      className={`inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-all sm:text-xs ${
                        cvMode === "two-page"
                          ? "bg-[#A61E4D] text-white shadow-xs"
                          : "text-[#52323F] hover:text-[#231118]"
                      }`}
                    >
                      <Layers aria-hidden="true" className="h-3.5 w-3.5" />
                      <span>Maks. 2 Lembar (Lengkap)</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl bg-[#A61E4D] px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#8C163E] sm:w-auto"
                  >
                    <Printer aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>Cetak / Simpan PDF</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Tutup pratinjau CV"
                    className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4A5B8] bg-white text-[#231118] transition-colors hover:bg-[#FCE8EF] sm:flex"
                  >
                    <X aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Petunjuk Singkat Cetak PDF */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DEC3D0] bg-[#FCE8EF]/70 px-4 py-2 text-[11px] text-[#52323F] sm:px-6">
                <span>
                  <strong className="text-[#881337]">
                    Struktur Standar ATS:
                  </strong>{" "}
                  Kolom tunggal linier, teks asli dapat diseleksi (bukan gambar),
                  dan kata kunci kompetensi terstruktur.
                </span>
                <span className="font-mono-code font-semibold text-[#881337]">
                  Tips Cetak: Pilih &ldquo;Save as PDF&rdquo; · Ukuran Kertas A4
                </span>
              </div>

              {/* Area Pratinjau Kertas A4 */}
              <div
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 sm:p-6"
              >
                <div className="mx-auto max-w-[210mm] rounded-lg border border-[#D4A5B8] bg-white p-5 shadow-md sm:p-8">
                  <ATSCVDocument mode={cvMode} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
