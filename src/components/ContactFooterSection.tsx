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
import Abstract3DOrb from "./Abstract3DOrb";
import { SectionHeaderReveal, ScrollReveal } from "./ScrollReveal";
import { PROFILE_DATA } from "@/data/portfolioData";

interface ContactFooterSectionProps {
  onOpenCV: () => void;
}

const DISCUSSION_TOPICS = [
  { id: "HR", label: "Hubungan Kepegawaian & Administrasi SDM" },
  { id: "CSR", label: "Program CSR & Pemberdayaan Masyarakat" },
  { id: "Counseling", label: "Rehabilitasi Sosial & Penelitian" },
  { id: "Collaboration", label: "Pendidikan & Kolaborasi Program" },
];

export default function ContactFooterSection({
  onOpenCV,
}: ContactFooterSectionProps) {
  const magneticBtnRef = useRef<HTMLAnchorElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [topic, setTopic] = useState("Program CSR & Pemberdayaan Masyarakat");
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

  const formattedMessageText = `Yth. Aulia Yasmin, S.Tr.Sos.,\n\nPerkenalkan, saya ${
    name || "[Nama Lengkap]"
  } dari ${
    organization || "[Nama Instansi/Perusahaan]"
  }.\nKeperluan: ${topic}\n\n${
    message ||
    "Kami ingin menyampaikan informasi mengenai peluang kerja atau kerja sama pelaksanaan program di instansi kami."
  }\n\nHormat saya,\n${name || "[Nama Lengkap]"}`;

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
      `[${topic}] Surat Elektronik dari ${name || "Perwakilan"} (${
        organization || "Instansi"
      })`
    );
    const body = encodeURIComponent(formattedMessageText);
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto max-w-[1440px] px-4 pt-12 pb-20 sm:px-8 sm:pt-24 sm:pb-24 lg:px-14"
    >
      <SectionHeaderReveal
        indexCode="05 / KONTAK & KERJA SAMA PROFESIONAL"
        title={
          <>
            Hubungi Saya untuk{" "}
            <span className="font-editorial font-normal italic text-[#A61E4D]">
              Peluang Kerja
            </span>{" "}
            & Kolaborasi Program
          </>
        }
      />

      <div className="relative">
        <Abstract3DOrb
          variant="dawn"
          size="lg"
          animation="orbit"
          hasTorusRing={true}
          className="absolute -top-12 -right-6 -z-10 opacity-75 sm:-top-16 sm:-right-8"
        />
        <Abstract3DOrb
          variant="ruby"
          size="sm"
          animation="float-1"
          className="absolute -bottom-6 -left-4 -z-10 opacity-60 sm:-bottom-8 sm:-left-6"
        />

        <ScrollReveal direction="up" duration={0.75}>
          <GlassCard className="group shimmer-foil p-5 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal
              direction="left"
              delay={0.08}
              className="flex flex-col justify-between lg:col-span-6"
            >
              <div>
                <h3 className="font-heading text-xl leading-snug font-bold text-[#231118] sm:text-3xl">
                  Terbuka untuk penugasan di bidang{" "}
                  <span className="font-editorial font-normal italic text-[#A61E4D]">
                    CSR, Pemberdayaan Masyarakat, Hubungan Kepegawaian
                  </span>
                  , serta Pelayanan Kesejahteraan Sosial.
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#52323F] sm:mt-4 sm:text-base">
                  Silakan menghubungi saya melalui profil LinkedIn atau formulir
                  pesan di samping untuk mendiskusikan rekrutmen staf penuh
                  waktu, penelitian sosial, maupun pelaksanaan program
                  pemberdayaan masyarakat di instansi Anda.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3.5">
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
                    className="group relative inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#A61E4D] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#A61E4D]/20 transition-colors hover:bg-[#8C163E] sm:w-auto"
                  >
                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                      <span className="flex items-center gap-1.5">
                        Buka Profil LinkedIn
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
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#D4A5B8] bg-white px-5 py-3 text-sm font-semibold text-[#231118] transition-colors hover:border-[#A61E4D] hover:bg-[#FCE8EF] sm:min-h-[52px] sm:w-auto"
                  >
                    <FileText
                      aria-hidden="true"
                      className="h-4 w-4 text-[#A61E4D]"
                    />
                    <span>Pratinjau & Cetak CV</span>
                  </button>
                </div>
              </div>

              <div className="mt-7 space-y-3.5 border-t border-[#E5C5D3] pt-5 sm:mt-10 sm:space-y-4 sm:pt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#52323F]">
                  <Languages
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[#881337]"
                  />
                  <span>Kemampuan Bahasa & Domisili</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                  {PROFILE_DATA.languages.map((lang) => (
                    <div
                      key={lang.language}
                      className="rounded-xl border border-white/95 bg-white/90 p-3 shadow-2xs sm:p-3.5"
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
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: lang.level }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: 0.85,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="h-full rounded-full bg-[#A61E4D]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5 rounded-xl border border-[#E5C5D3] bg-[#FCE8EF]/65 px-3.5 py-3 text-xs sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2 sm:px-4">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#231118]">
                    <MapPin
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#A61E4D]"
                    />
                    Domisili: {PROFILE_DATA.location}
                  </span>
                  <span className="font-mono-code text-[11px] font-semibold text-[#881337]">
                    Penempatan Kantor · Hibrida · Penugasan Lapangan
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              direction="right"
              delay={0.14}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl border border-white/95 bg-white/95 p-4.5 shadow-sm sm:p-7">
                <h3 className="font-heading text-base font-bold text-[#231118] sm:text-xl">
                  Formulir Pesan & Korespondensi
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#52323F]">
                  Pilih bidang keperluan dan isi pesan singkat untuk diteruskan
                  melalui surat elektronik (email) atau pesan LinkedIn.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4"
                >
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
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
                        placeholder="Masukkan nama lengkap Anda"
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#D4A5B8] bg-[#FCF5F8] px-3.5 py-2.5 text-sm text-[#231118] placeholder-[#6E4757] transition-colors focus:border-[#A61E4D] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-org"
                        className="block text-xs font-semibold text-[#231118]"
                      >
                        Nama Instansi / Perusahaan
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Masukkan nama instansi atau perusahaan"
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#D4A5B8] bg-[#FCF5F8] px-3.5 py-2.5 text-sm text-[#231118] placeholder-[#6E4757] transition-colors focus:border-[#A61E4D] focus:bg-white"
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="block text-xs font-semibold text-[#231118]">
                      Bidang Keperluan
                    </legend>
                    <div
                      role="radiogroup"
                      aria-label="Bidang Keperluan"
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
                            className={`flex min-h-[44px] items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-all ${
                              active
                                ? "border-[#A61E4D] bg-[#FCE8EF] text-[#881337] shadow-xs"
                                : "border-[#E5C5D3] bg-[#FCF5F8] text-[#52323F] hover:border-[#8A5A6E] hover:text-[#231118]"
                            }`}
                          >
                            <span>{item.label}</span>
                            {active && (
                              <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A61E4D]"
                              />
                            )}
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
                      Isi Pesan
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan rincian keperluan rekrutmen, jadwal wawancara, atau rencana kerja sama program..."
                      className="mt-1.5 w-full rounded-lg border border-[#D4A5B8] bg-[#FCF5F8] px-3.5 py-2.5 text-sm text-[#231118] placeholder-[#6E4757] transition-colors focus:border-[#A61E4D] focus:bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5">
                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] w-full flex-1 items-center justify-center gap-2 rounded-lg bg-[#A61E4D] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#8C163E] sm:min-h-[44px] sm:w-auto"
                    >
                      <Send aria-hidden="true" className="h-3.5 w-3.5" />
                      <span>Buat Draf Surat Elektronik</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyFormatted}
                      className="inline-flex min-h-[46px] w-full items-center justify-center gap-1.5 rounded-lg border border-[#D4A5B8] bg-[#FCF5F8] px-4 py-2.5 text-xs font-semibold text-[#231118] transition-colors hover:bg-[#FCE8EF] sm:min-h-[44px] sm:w-auto"
                    >
                      {copiedMsg ? (
                        <>
                          <Check
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-[#881337]"
                          />
                          <span className="text-[#881337]">Pesan Disalin</span>
                        </>
                      ) : (
                        <>
                          <Copy
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-[#881337]"
                          />
                          <span>Salin Teks Pesan</span>
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
                      <div className="min-w-0 flex-1 text-xs text-[#231118]">
                        <p className="font-bold text-[#881337]">
                          Draf pesan untuk {PROFILE_DATA.shortName} telah siap.
                        </p>
                        <p className="mt-1 text-[#52323F]">
                          Pilih tombol di bawah untuk mengirimkannya melalui
                          aplikasi surat elektronik (email) atau menyalinnya ke
                          LinkedIn.
                        </p>
                        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                          <button
                            type="button"
                            onClick={handleSendEmail}
                            className="min-h-[44px] w-full rounded-lg bg-[#A61E4D] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#8C163E] sm:min-h-[38px] sm:w-auto sm:py-1.5"
                          >
                            Kirim Melalui Email
                          </button>
                          <a
                            href={PROFILE_DATA.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleCopyFormatted}
                            className="inline-flex min-h-[44px] w-full items-center justify-center gap-1 rounded-lg border border-[#D4A5B8] bg-white px-3.5 py-2 text-xs font-semibold text-[#231118] hover:bg-[#FCF5F8] sm:min-h-[38px] sm:w-auto sm:py-1.5"
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
            </ScrollReveal>
          </div>
        </GlassCard>
      </ScrollReveal>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#E5C5D3] pt-6 text-center text-xs text-[#52323F] sm:mt-10 sm:flex-row sm:gap-4 sm:pt-8 sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <ShieldCheck
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[#881337]"
          />
          <span>
            © {new Date().getFullYear()} <strong>{PROFILE_DATA.name}</strong> ·
            Pekerja Sosial Tersertifikasi (LSP Kemensos RI Nomor:{" "}
            {PROFILE_DATA.credentialId})
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 font-semibold sm:gap-4">
          <a
            href="#about"
            className="inline-flex min-h-[44px] items-center px-2 transition-colors hover:text-[#A61E4D]"
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
            className="inline-flex min-h-[44px] items-center px-2 transition-colors hover:text-[#A61E4D]"
          >
            Profil LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
