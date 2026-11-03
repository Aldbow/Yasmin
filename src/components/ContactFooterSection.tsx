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
  const magneticBtnRef = useRef<HTMLAnchorElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

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
    const deltaX = (e.clientX - centerX) * 0.18;
    const deltaY = (e.clientY - centerY) * 0.22;
    setMagneticOffset({ x: deltaX, y: deltaY });
  };

  const handleMagneticLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const formattedMessageText = `Halo Aulia Yasmin,\n\nPerkenalkan saya ${
    name || "[Nama Anda]"
  } dari ${
    organization || "[Nama Instansi/Perusahaan]"
  }.\nTopik Diskusi: ${topic}\n\n${
    message ||
    "Kami tertarik untuk berdiskusi lebih lanjut mengenai peluang kolaborasi atau peran profesional."
  }\n\nSalam hangat,\n${name || "[Nama Anda]"}`;

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
      `[${topic}] Diskusi Profesional · ${name || "Kolaborator"} (${
        organization || "Instansi"
      })`
    );
    const body = encodeURIComponent(formattedMessageText);
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20"
    >
      {/* Identity Motif Section Header */}
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono-code text-xs font-semibold tracking-wider text-[#881337]">
          05 / KOLABORASI & KONTAK PROFESIONAL
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-[#DEC3D0]" />
      </div>

      <GlassCard className="p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Collaboration Pitch, LinkedIn CTA & Language/Domicile */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <h2 className="font-heading text-2xl font-bold leading-snug text-[#231118] sm:text-3xl lg:text-4xl">
                Mari berdiskusi mengenai program{" "}
                <span className="font-editorial font-normal italic text-[#A61E4D]">
                  CSR, Community Development, Employee Relations
                </span>
                , atau inisiatif sosial di institusi Anda.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#52323F] sm:text-base">
                Terbuka untuk peluang peran penuh waktu maupun kolaborasi
                program yang mengintegrasikan perspektif{" "}
                <em>Human-Centered Social Work</em> ke dalam tata kelola SDM,
                hubungan masyarakat, dan pemberdayaan komunitas.
              </p>

              {/* Primary LinkedIn & CV CTA Row */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
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
                  className="group relative inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#A61E4D] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#A61E4D]/20 transition-colors hover:bg-[#8C163E]"
                >
                  <div className="flex flex-col text-left">
                    <span className="flex items-center gap-1.5">
                      Terhubung di LinkedIn
                      <ExternalLink
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                    <span className="font-mono-code text-[11px] font-normal text-[#FCE8EF]">
                      {PROFILE_DATA.linkedinStats}
                    </span>
                  </div>
                </motion.a>

                <button
                  type="button"
                  onClick={onOpenCV}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-[#8A5A6E] bg-white px-5 py-3 text-sm font-semibold text-[#231118] transition-colors hover:border-[#A61E4D] hover:bg-[#FCE8EF]"
                >
                  <FileText
                    aria-hidden="true"
                    className="h-4 w-4 text-[#A61E4D]"
                  />
                  <span>Pratinjau & Unduh CV</span>
                </button>
              </div>
            </div>

            {/* Language Proficiency & Domicile Info */}
            <div className="mt-10 space-y-4 border-t border-[#DEC3D0] pt-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#52323F]">
                <Languages
                  aria-hidden="true"
                  className="h-4 w-4 text-[#881337]"
                />
                <span>Kapasitas Bahasa & Domisili</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROFILE_DATA.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="rounded-xl border border-[#DEC3D0] bg-white/90 p-3.5"
                  >
                    <p className="text-xs font-bold text-[#231118]">
                      {lang.language}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-[#52323F]">
                      {lang.proficiency}
                    </p>
                    <div
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F3E5EC]"
                    >
                      <div
                        className="h-full rounded-full bg-[#A61E4D]"
                        style={{ width: lang.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#DEC3D0] bg-[#FCE8EF]/65 px-4 py-3 text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#231118]">
                  <MapPin
                    aria-hidden="true"
                    className="h-4 w-4 text-[#A61E4D]"
                  />
                  Basis Domisili: {PROFILE_DATA.location}
                </span>
                <span className="font-mono-code text-[11px] font-semibold text-[#881337]">
                  On-site · Hybrid · Field Assignment Ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Collaboration Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#DEC3D0] bg-white/95 p-6 sm:p-7">
              <h3 className="font-heading text-lg font-bold text-[#231118] sm:text-xl">
                Kirim Pesan Cepat / Inisiasi Diskusi
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#52323F]">
                Pilih topik diskusi dan siapkan draf pesan untuk dikirimkan
                melalui aplikasi email atau pesan LinkedIn.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#231118]"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#8A5A6E] bg-[#FDF8FA] px-3.5 py-2.5 text-sm text-[#231118] placeholder-[#6E4757] transition-colors focus:border-[#A61E4D] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-semibold text-[#231118]"
                    >
                      Instansi / Perusahaan
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Nama instansi atau perusahaan"
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#8A5A6E] bg-[#FDF8FA] px-3.5 py-2.5 text-sm text-[#231118] placeholder-[#6E4757] transition-colors focus:border-[#A61E4D] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Topik Diskusi Radio Group */}
                <fieldset>
                  <legend className="block text-xs font-semibold text-[#231118]">
                    Topik Diskusi Utama
                  </legend>
                  <div
                    role="radiogroup"
                    aria-label="Topik Diskusi Utama"
                    className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"
                  >
                    {DISCUSSION_TOPICS.map((item) => {
                      const active = topic === item.label;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setTopic(item.label)}
                          className={`min-h-[44px] rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-all ${
                            active
                              ? "border-[#A61E4D] bg-[#FCE8EF] text-[#881337]"
                              : "border-[#DEC3D0] bg-[#FDF8FA] text-[#52323F] hover:border-[#8A5A6E] hover:text-[#231118]"
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#231118]"
                  >
                    Pesan Singkat
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan rencana kolaborasi, kebutuhan peran (HR / CSR / Social Work), atau jadwal diskusi..."
                    className="mt-1.5 w-full rounded-lg border border-[#8A5A6E] bg-[#FDF8FA] px-3.5 py-2.5 text-sm text-[#231118] placeholder-[#6E4757] transition-colors focus:border-[#A61E4D] focus:bg-white"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#A61E4D] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#8C163E]"
                  >
                    <Send aria-hidden="true" className="h-3.5 w-3.5" />
                    <span>Siapkan Pesan Kolaborasi</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormatted}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-[#8A5A6E] bg-[#FDF8FA] px-4 py-2.5 text-xs font-semibold text-[#231118] transition-colors hover:bg-[#FCE8EF]"
                  >
                    {copiedMsg ? (
                      <>
                        <Check
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#881337]"
                        />
                        <span className="text-[#881337]">Draf Disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#881337]"
                        />
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
                  role="status"
                  className="mt-4 rounded-xl border border-[#A61E4D]/35 bg-[#FCE8EF] p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#881337]"
                    />
                    <div className="text-xs text-[#231118]">
                      <p className="font-bold text-[#881337]">
                        Pesan untuk {PROFILE_DATA.shortName} siap dikirim!
                      </p>
                      <p className="mt-1 text-[#52323F]">
                        Anda dapat langsung membuka aplikasi Email atau
                        mengirimkan draf pesan ini melalui LinkedIn.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={handleSendEmail}
                          className="min-h-[38px] rounded-lg bg-[#A61E4D] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#8C163E]"
                        >
                          Buka Aplikasi Email
                        </button>
                        <a
                          href={PROFILE_DATA.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleCopyFormatted}
                          className="inline-flex min-h-[38px] items-center gap-1 rounded-lg border border-[#8A5A6E] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#231118] hover:bg-[#FDF8FA]"
                        >
                          <span>Salin & Buka LinkedIn</span>
                          <ExternalLink
                            aria-hidden="true"
                            className="h-3 w-3 text-[#881337]"
                          />
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

      {/* Bottom Copyright & Credential Colophon */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#DEC3D0] pt-8 text-xs text-[#52323F] sm:flex-row">
        <div className="flex items-center gap-2">
          <ShieldCheck
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[#881337]"
          />
          <span>
            © {new Date().getFullYear()} <strong>{PROFILE_DATA.name}</strong> ·
            Licensed Certified Social Worker ({PROFILE_DATA.credentialId})
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-semibold">
          <a
            href="#about"
            className="min-h-[36px] inline-flex items-center transition-colors hover:text-[#A61E4D]"
          >
            Kembali ke Atas ↑
          </a>
          <span aria-hidden="true" className="text-[#8A5A6E]">
            ·
          </span>
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[36px] inline-flex items-center transition-colors hover:text-[#A61E4D]"
          >
            Profil LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
