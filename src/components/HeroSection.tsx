"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  Check,
  Copy,
  MapPin,
  Award,
  Building2,
  GraduationCap,
  ArrowUpRight,
  FileText,
  Globe,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  Compass,
  Users,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { ScrollReveal } from "./ScrollReveal";
import { PROFILE_DATA } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenCV: () => void;
}

const HERO_DOMAIN_LENSES = [
  {
    id: "counselor",
    shortLabel: "Rehabilitasi & Konseling",
    roleTitle: "Konseling Psikososial & Manajemen Kasus",
    institution: "BNN RI · Sentra Kemensos RI · YPAC Jakarta",
    summary:
      "Pelaksanaan asesmen biopsikososial, bimbingan pemulihan keberfungsian sosial, pendampingan penyandang disabilitas, serta penelitian evaluasi program rehabilitasi.",
    image: "/img/dominik-lange-VUOiQW4OeLI-unsplash.jpg",
    imageAlt:
      "Pendampingan rehabilitasi sosial dan bimbingan kelompok rentan di ruang terbuka",
    imageCaption: "Rehabilitasi Sosial & Pendampingan Klien",
    icon: HeartHandshake,
    orbOffset: { x: 0, y: 0 },
  },
  {
    id: "csr",
    shortLabel: "CSR & Lingkungan",
    roleTitle: "Program CSR & Kampanye Lingkungan",
    institution: "Earth Hour Bandung (SIMARGI) · Komunitas",
    summary:
      "Penyelenggaraan edukasi penghematan energi dan kepedulian perubahan iklim bagi pelajar jenjang TK hingga SMP serta masyarakat umum di ruang publik.",
    image: "/img/saad-ali-zZC5q-_6_8c-unsplash.jpg",
    imageAlt:
      "Kegiatan sosialisasi lapangan dan edukasi publik bersama komunitas sosial",
    imageCaption: "Sosialisasi Lapangan & Edukasi Lingkungan",
    icon: Sprout,
    orbOffset: { x: -24, y: 16 },
  },
  {
    id: "comdev",
    shortLabel: "Pemberdayaan Masyarakat",
    roleTitle: "Pemetaan Sosial & Fasilitasi Warga",
    institution: "Pemerintah Kabupaten Kuningan · POLTEKESOS",
    summary:
      "Pelaksanaan pemetaan sosial (social mapping) potensi desa, fasilitasi musyawarah warga melalui diskusi kelompok terarah (FGD), dan koordinasi perangkat daerah.",
    image: "/img/brooke-cagle--uHVRvDr7pg-unsplash.jpg",
    imageAlt:
      "Diskusi kelompok terarah dan musyawarah perencanaan program pemberdayaan",
    imageCaption: "Musyawarah Warga & Diskusi Kelompok (FGD)",
    icon: Compass,
    orbOffset: { x: 20, y: -18 },
  },
  {
    id: "hr",
    shortLabel: "SDM & Administrasi",
    roleTitle: "Hubungan Kepegawaian & Administrasi Kelembagaan",
    institution: "Sekjen Kemnaker RI · PT Dirgantara Indonesia",
    summary:
      "Pengelolaan tata naskah dinas, pengarsipan dokumen korporat dan kementerian, fasilitasi komunikasi internal, serta pengembangan anggota organisasi.",
    image: "/img/kobu-agency-7okkFhxrxNw-unsplash.jpg",
    imageAlt:
      "Koordinasi kerja, administrasi kelembagaan, dan pendampingan sumber daya manusia",
    imageCaption: "Tata Kelola Administrasi & Hubungan Kerja",
    icon: Users,
    orbOffset: { x: -16, y: -20 },
  },
] as const;

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroSection({ onOpenCV }: HeroSectionProps) {
  const [copiedId, setCopiedId] = useState(false);
  const [bioLang, setBioLang] = useState<"en" | "id">("id");
  const [activeLensIndex, setActiveLensIndex] = useState(0);

  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const orbScrollY = useTransform(scrollYProgress, [0, 1], [0, 65]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 22, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 22, mass: 0.6 });

  const spherePrimaryX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const spherePrimaryY = useTransform(smoothY, [-0.5, 0.5], [-22, 22]);
  const sphereSecondaryX = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const sphereSecondaryY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  const handleHeroPointerMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleHeroPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleCopyCredential = () => {
    navigator.clipboard.writeText(PROFILE_DATA.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2400);
  };

  const activeLens = HERO_DOMAIN_LENSES[activeLensIndex];
  const ActiveLensIcon = activeLens.icon;

  return (
    <section
      ref={heroRef}
      id="about"
      onMouseMove={handleHeroPointerMove}
      onMouseLeave={handleHeroPointerLeave}
      className="relative z-10 mx-auto max-w-[1440px] px-4 pt-24 pb-12 sm:px-8 sm:pt-36 sm:pb-24 lg:px-14"
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="mb-6 flex flex-col gap-2 border-b border-[#E8CED9] pb-3.5 sm:mb-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:pb-4"
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-mono-code text-[11px] font-semibold tracking-wider text-[#881337] sm:text-xs">
            00 / PROFIL PROFESIONAL
          </span>
          <span
            aria-hidden="true"
            className="hidden h-3.5 w-px bg-[#DFC0CE] sm:inline-block"
          />
          <span className="text-xs font-semibold text-[#52323F] sm:text-sm">
            Pekerja Sosial Tersertifikasi · LSP Kementerian Sosial RI
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#52323F] sm:gap-3">
          <span className="inline-flex items-center gap-1.5">
            <MapPin
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-[#A61E4D]"
            />
            <span>{PROFILE_DATA.location}</span>
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="flex flex-col justify-between lg:col-span-7"
        >
          <div>
            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE_OUT_EXPO },
                },
              }}
              className="font-heading text-3xl leading-[1.12] font-extrabold tracking-tight text-[#231118] sm:text-5xl lg:text-[64px] lg:leading-[1.06]"
            >
              Aulia Yasmin,{" "}
              <span className="font-editorial font-normal italic text-[#A61E4D]">
                S.Tr.Sos.
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE_OUT_EXPO },
                },
              }}
              className="font-heading mt-3.5 max-w-2xl text-base leading-relaxed font-medium text-[#231118] sm:mt-5 sm:text-2xl sm:leading-snug"
            >
              Pekerja Sosial Tersertifikasi yang berpengalaman dalam{" "}
              <span className="font-editorial text-xl font-normal italic text-[#A61E4D] sm:text-[30px]">
                Rehabilitasi Sosial
              </span>
              , pelaksanaan program{" "}
              <span className="font-semibold text-[#881337]">CSR</span>,{" "}
              <span className="font-semibold text-[#881337]">
                Pemberdayaan Masyarakat
              </span>
              , serta{" "}
              <span className="font-semibold text-[#881337]">
                Administrasi & Hubungan Kepegawaian
              </span>
              .
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE_OUT_EXPO },
                },
              }}
              className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3.5"
            >
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#A61E4D] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#A61E4D]/20 transition-all hover:bg-[#8C163E] sm:w-auto sm:py-3.5"
              >
                <span>Buka Profil LinkedIn</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <button
                type="button"
                onClick={onOpenCV}
                className="pearl-card pearl-card-interactive inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#231118] sm:w-auto sm:py-3.5"
              >
                <FileText
                  aria-hidden="true"
                  className="h-4 w-4 text-[#A61E4D]"
                />
                <span>Pratinjau & Cetak CV</span>
              </button>

              <a
                href="#experience"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold text-[#52323F] transition-colors hover:text-[#A61E4D] sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-sm"
              >
                <span>Lihat 10 Pengalaman Kerja ↓</span>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: EASE_OUT_EXPO },
                },
              }}
              className="mt-6 border-t border-[#E8CED9] pt-5 sm:mt-9 sm:pt-6"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono-code text-[11px] font-semibold uppercase tracking-widest text-[#881337]">
                  Empat Bidang Keahlian Utama:
                </span>
                <span className="font-mono-code text-[11px] font-medium text-[#6E4757]">
                  0{activeLensIndex + 1} / 04 · Pilih bidang keahlian
                </span>
              </div>

              <div
                role="tablist"
                aria-label="Bidang Keahlian Utama Aulia Yasmin"
                className="pearl-card grid w-full grid-cols-2 gap-1.5 rounded-2xl p-1.5 sm:inline-flex sm:w-auto sm:flex-wrap sm:items-center"
              >
                {HERO_DOMAIN_LENSES.map((lens, idx) => {
                  const isSelected = activeLensIndex === idx;
                  return (
                    <button
                      key={lens.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`hero-lens-panel-${lens.id}`}
                      onClick={() => setActiveLensIndex(idx)}
                      className={`relative flex min-h-[44px] w-full items-center justify-center rounded-xl px-2.5 py-2 text-center text-xs leading-tight font-semibold transition-colors duration-200 sm:w-auto sm:px-4 sm:text-[13px] ${
                        isSelected
                          ? "text-white"
                          : "text-[#52323F] hover:text-[#231118]"
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="hero-domain-lens-pill"
                          className="absolute inset-0 rounded-xl bg-[#A61E4D] shadow-sm shadow-[#A61E4D]/25"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{lens.shortLabel}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pearl-card mt-3 rounded-2xl p-4 sm:mt-3.5 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLens.id}
                    id={`hero-lens-panel-${activeLens.id}`}
                    role="tabpanel"
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                    className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4"
                  >
                    <div className="flex items-center justify-between gap-2 sm:block">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/20 sm:h-12 sm:w-12">
                        <ActiveLensIcon
                          aria-hidden="true"
                          className="h-5 w-5 sm:h-6 sm:w-6"
                        />
                      </div>
                      <span className="font-mono-code rounded-full bg-[#FCE8EF] px-2.5 py-1 text-[11px] font-semibold text-[#881337] sm:hidden">
                        {activeLens.institution}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="font-heading text-base font-bold text-[#231118] sm:text-lg">
                          {activeLens.roleTitle}
                        </h2>
                        <span className="font-mono-code hidden rounded-full bg-[#FCE8EF] px-3 py-1 text-xs font-semibold text-[#881337] sm:inline-block">
                          {activeLens.institution}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#52323F] sm:mt-2 sm:text-sm">
                        {activeLens.summary}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative lg:col-span-5">
          <ScrollReveal direction="right" duration={0.75} className="h-full">
            <motion.div
              aria-hidden="true"
              style={{ y: orbScrollY }}
              className="pointer-events-none absolute inset-0 -z-10 sm:-inset-6"
            >
              <motion.div
                style={{
                  x: spherePrimaryX,
                  y: spherePrimaryY,
                }}
                animate={{
                  x: activeLens.orbOffset.x,
                  y: activeLens.orbOffset.y,
                }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                className="animate-pearl-orb-1 absolute -top-4 -right-3 h-36 w-36 rounded-full sm:-top-6 sm:-right-5 sm:h-56 sm:w-56"
              >
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 28%, #FFFFFF 0%, #FCDCE8 28%, #F29BB9 64%, #C93B6B 92%, #881337 100%)",
                    boxShadow:
                      "0 24px 48px -12px rgba(166, 30, 77, 0.28), inset -8px -10px 24px rgba(136, 19, 55, 0.25), inset 6px 8px 18px rgba(255, 255, 255, 0.9)",
                  }}
                />
              </motion.div>

              <motion.div
                style={{
                  x: sphereSecondaryX,
                  y: sphereSecondaryY,
                }}
                className="animate-pearl-orb-2 absolute -bottom-4 -left-3 h-32 w-32 rounded-full sm:-bottom-5 sm:-left-6 sm:h-48 sm:w-48"
              >
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 32% 28%, #FFFFFF 0%, #FDE8EE 35%, #F5B2CA 72%, #D45B87 100%)",
                    boxShadow:
                      "0 20px 40px -10px rgba(166, 30, 77, 0.20), inset 4px 6px 16px rgba(255, 255, 255, 0.95)",
                  }}
                />
              </motion.div>
            </motion.div>

            <GlassCard
              variant="focal-glass"
              spotlightColor="rose"
              enableTilt={true}
              maxTiltDeg={4}
              className="flex h-full flex-col justify-between p-4 sm:p-6"
            >
              <div>
                <div className="group relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F7EEF2] ring-1 ring-white/95 sm:mb-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLens.image}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                      className="h-full w-full"
                    >
                      <Image
                        src={activeLens.image}
                        alt={activeLens.imageAlt}
                        width={1600}
                        height={1067}
                        priority
                        sizes="(max-width: 1024px) 100vw, 540px"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute right-2.5 bottom-2.5 left-2.5 flex items-center justify-between gap-2 sm:right-3 sm:bottom-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#231118]/90 px-2.5 py-1 text-[11px] font-semibold text-[#FCE8EF] shadow-md backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
                      <ActiveLensIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-[#F7B2CA]"
                      />
                      <span className="truncate">{activeLens.imageCaption}</span>
                    </span>
                  </div>
                </div>

                <div className="mb-3 flex items-center justify-between gap-2 border-b border-[#E5C5D3]/80 pb-3">
                  <div className="min-w-0">
                    <span className="font-mono-code block text-[10px] font-semibold uppercase tracking-widest text-[#881337]">
                      Ringkasan Profil
                    </span>
                    <h2 className="font-heading text-sm font-bold text-[#231118] sm:text-base">
                      Latar Belakang & Kualifikasi Profesi
                    </h2>
                  </div>

                  <div
                    role="group"
                    aria-label="Pilih bahasa ringkasan profil"
                    className="inline-flex shrink-0 items-center rounded-xl border border-[#D4A5B8] bg-white/90 p-0.5 text-xs shadow-2xs"
                  >
                    <button
                      type="button"
                      aria-pressed={bioLang === "id"}
                      onClick={() => setBioLang("id")}
                      className={`min-h-[38px] min-w-[42px] rounded-lg px-2.5 py-1 font-semibold transition-colors sm:min-h-[32px] sm:min-w-[38px] ${
                        bioLang === "id"
                          ? "bg-[#A61E4D] text-white"
                          : "text-[#52323F] hover:text-[#231118]"
                      }`}
                    >
                      ID
                    </button>
                    <button
                      type="button"
                      aria-pressed={bioLang === "en"}
                      onClick={() => setBioLang("en")}
                      className={`min-h-[38px] min-w-[42px] rounded-lg px-2.5 py-1 font-semibold transition-colors sm:min-h-[32px] sm:min-w-[38px] ${
                        bioLang === "en"
                          ? "bg-[#A61E4D] text-white"
                          : "text-[#52323F] hover:text-[#231118]"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={bioLang}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs leading-relaxed font-medium text-[#231118] sm:text-[15px]"
                  >
                    {bioLang === "id"
                      ? PROFILE_DATA.bioIndonesian
                      : PROFILE_DATA.bioEnglish}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="mt-4 rounded-2xl border border-white/95 bg-white/85 p-3.5 shadow-2xs">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337]">
                      <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold text-[#881337]">
                        Lisensi Resmi LSP Kemensos RI
                      </span>
                      <span className="font-mono-code block text-[11px] font-medium text-[#52323F]">
                        Nomor: {PROFILE_DATA.credentialId}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCredential}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-[#D4A5B8] bg-white px-3.5 py-2 text-xs font-semibold text-[#231118] transition-colors hover:border-[#A61E4D] hover:bg-[#FCE8EF] sm:min-h-[38px] sm:w-auto sm:py-1.5"
                  >
                    {copiedId ? (
                      <>
                        <Check
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#881337]"
                        />
                        <span className="text-[#881337]">Nomor Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#881337]"
                        />
                        <span>Salin Nomor</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal direction="up" delay={0.12} className="mt-8 sm:mt-12">
        <div className="pearl-card rounded-2xl p-5 sm:p-8">
          <div className="grid grid-cols-1 divide-y divide-[#E8CED9] md:grid-cols-3 md:divide-x md:divide-y-0">
            {PROFILE_DATA.quickStats.map((stat, idx) => {
              const icons = [Building2, GraduationCap, Award];
              const IconComponent = icons[idx] || Award;

              return (
                <div
                  key={stat.id}
                  className={`group flex items-start justify-between gap-4 ${
                    idx === 0
                      ? "pb-4 md:pr-8 md:pb-0"
                      : idx === 1
                      ? "py-4 md:px-8 md:py-0"
                      : "pt-4 md:pt-0 md:pl-8"
                  }`}
                >
                  <div>
                    <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-[11px]">
                      {stat.label}
                    </span>
                    <h3 className="font-heading mt-1 text-lg font-bold text-[#231118] transition-colors group-hover:text-[#A61E4D] sm:mt-1.5 sm:text-2xl">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#52323F] sm:text-sm">
                      {stat.subtext}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/20 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                    <IconComponent aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex flex-col gap-2.5 border-t border-[#E8CED9] pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-5">
            <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-[#52323F]">
              <Globe aria-hidden="true" className="h-4 w-4 text-[#881337]" />
              <span>Instansi & Lembaga Tempat Berkarya:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {PROFILE_DATA.trustedInstitutions.map((inst) => (
                <span
                  key={inst}
                  className="rounded-lg border border-white/95 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#231118] shadow-2xs sm:px-3 sm:text-xs"
                >
                  {inst}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
