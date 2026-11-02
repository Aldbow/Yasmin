"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  ExternalLink,
  MapPin,
  Languages,
  CheckCircle2,
  FileText,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { PROFILE_DATA } from "@/data/portfolioData";

interface ContactFooterSectionProps {
  onOpenCV: () => void;
}

const DISCUSSION_TOPICS = [
  { id: "HR", label: "HR & Employee Relations" },
  { id: "CSR", label: "CSR & Community Development" },
  { id: "Counseling", label: "Counseling & Social Research" },
  { id: "Collaboration", label: "Collaboration & Speaking" },
];

export default function ContactFooterSection({
  onOpenCV,
}: ContactFooterSectionProps) {
  // Magnetic LinkedIn Button State (PRD Section 5.7)
  const magneticBtnRef = useRef<HTMLAnchorElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  // Quick Contact Form State
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [topic, setTopic] = useState("CSR & Community Development");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);

  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!magneticBtnRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.28;
    setMagneticOffset({ x: deltaX, y: deltaY });
  };

  const handleMagneticLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const formattedMessageText = `Halo Aulia Yasmin,\n\nPerkenalkan saya ${
    name || "[Nama]"
  } dari ${
    organization || "[Instansi/Perusahaan]"
  }.\nTopik Diskusi: ${topic}\n\n${
    message ||
    "Kami tertarik untuk berdiskusi lebih lanjut mengenai peluang kolaborasi / peran profesional."
  }\n\nSalam hangat,\n${name || ""}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyFormatted = () => {
    navigator.clipboard.writeText(formattedMessageText);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(
      `[${topic}] Diskusi Profesional — ${name || "Kolaborator"} (${
        organization || "Instansi"
      })`
    );
    const body = encodeURIComponent(formattedMessageText);
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24"
    >
      <GlassCard spotlightColor="emerald" className="p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Collaboration Pitch, Magnetic LinkedIn Button & Language/Domicile */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-1 text-xs font-medium text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Open for Strategic Roles & Social Impact Initiatives</span>
              </div>

              <h2 className="font-heading mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
                Tertarik berdiskusi mengenai program{" "}
                <span className="font-editorial font-normal italic text-emerald-300">
                  CSR, Community Development, Employee Relations
                </span>
                , atau inisiatif sosial?
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Mari terhubung untuk mendiskusikan bagaimana perspektif{" "}
                <em>Human-Centered Social Work</em> dapat memperkuat tata kelola
                SDM, hubungan masyarakat, dan keberlanjutan program di institusi
                Anda.
              </p>

              {/* Magnetic LinkedIn CTA Button (PRD Section 5.7) */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <motion.a
                  ref={magneticBtnRef}
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                  animate={{ x: magneticOffset.x, y: magneticOffset.y }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 16,
                    mass: 0.4,
                  }}
                  className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 ring-1 ring-white/30"
                >
                  <div className="flex flex-col text-left">
                    <span className="flex items-center gap-1.5">
                      Connect on LinkedIn
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="font-mono-code text-[11px] font-normal text-emerald-100">
                      {PROFILE_DATA.linkedinStats}
                    </span>
                  </div>
                </motion.a>

                <button
                  type="button"
                  onClick={onOpenCV}
                  className="glass-surface glass-surface-interactive inline-flex cursor-pointer items-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-100"
                >
                  <FileText className="h-4 w-4 text-emerald-300" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>

            {/* Language Proficiency & Domicile Info (PRD Section 5.7) */}
            <div className="mt-10 space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <Languages className="h-4 w-4 text-indigo-400" />
                <span>Kapasitas Bahasa & Domisili</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROFILE_DATA.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="rounded-2xl border border-white/10 bg-black/25 p-3.5"
                  >
                    <p className="text-xs font-bold text-white">
                      {lang.language}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-300">
                      {lang.proficiency}
                    </p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400"
                        style={{ width: lang.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 font-medium text-white">
                  <MapPin className="h-4 w-4 text-rose-400" />
                  Basis Domisili: {PROFILE_DATA.location}
                </span>
                <span className="font-mono-code text-[11px] text-emerald-300">
                  On-site · Hybrid · Field Assignment Ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Collaboration Form (PRD Section 5.7) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/15 bg-black/30 p-6 sm:p-7">
              <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                Kirim Pesan Cepat / Inisiasi Diskusi
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Pilih topik diskusi dan kirimkan pesan langsung melalui email
                atau salin draf pesan untuk LinkedIn.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.05] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400/60 focus:bg-white/[0.08]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Instansi / Perusahaan
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Contoh: PT Astra / Kementerian"
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.05] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400/60 focus:bg-white/[0.08]"
                    />
                  </div>
                </div>

                {/* Topik Diskusi Pills */}
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Topik Diskusi Utama
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {DISCUSSION_TOPICS.map((item) => {
                      const active = topic === item.label;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setTopic(item.label)}
                          className={`cursor-pointer rounded-xl border px-3 py-2 text-left text-xs font-medium transition-all ${
                            active
                              ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-200 shadow-sm"
                              : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:bg-white/[0.06]"
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Pesan Singkat
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan rencana kolaborasi, kebutuhan rekrutmen (HR / CSR / Social Work), atau jadwal diskusi..."
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.05] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400/60 focus:bg-white/[0.08]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:opacity-95"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Siapkan Pesan Kolaborasi</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormatted}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/10"
                  >
                    {copiedMsg ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Draf Disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Salin Draf</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div className="text-xs text-slate-200">
                      <p className="font-semibold text-emerald-200">
                        Pesan untuk {PROFILE_DATA.shortName} siap dikirim!
                      </p>
                      <p className="mt-1 text-slate-300">
                        Anda dapat langsung membuka aplikasi Email atau
                        mengirimkan draf pesan ini melalui LinkedIn.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={handleSendEmail}
                          className="cursor-pointer rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-emerald-400"
                        >
                          Buka Aplikasi Email
                        </button>
                        <a
                          href={PROFILE_DATA.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleCopyFormatted}
                          className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
                        >
                          <span>Salin & Buka LinkedIn</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Bottom Copyright & Credential Bar */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>
            © {new Date().getFullYear()} <strong>{PROFILE_DATA.name}</strong> —
            Licensed Certified Social Worker ({PROFILE_DATA.credentialId})
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="transition-colors hover:text-emerald-300"
          >
            Back to Top ↑
          </a>
          <span className="text-slate-600">•</span>
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
