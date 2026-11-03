"use client";

import React, { useState, useRef } from "react";
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
  Pause,
  Play,
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
    shortLabel: "Counselor",
    roleTitle: "Psychosocial Counseling & Case Management",
    institution: "BNN RI · Sentra Kemensos RI · YPAC Jakarta",
    summary:
      "Asesmen biopsikososial terstandarisasi, konseling pemulihan keberfungsian sosial, dan pendampingan kelompok rentan secara empatik.",
    icon: HeartHandshake,
    orbOffset: { x: 0, y: 0 },
  },
  {
    id: "csr",
    shortLabel: "CSR & Sustainability",
    roleTitle: "Strategic CSR & Environmental Action",
    institution: "Earth Hour Bandung (SIMARGI) · Kemitraan Daerah",
    summary:
      "Perancangan program keberlanjutan, kampanye edukasi perubahan iklim lintas sekolah dan ruang publik, serta kolaborasi komunitas.",
    icon: Sprout,
    orbOffset: { x: -24, y: 16 },
  },
  {
    id: "comdev",
    shortLabel: "Community Dev",
    roleTitle: "Social Mapping & Participatory Empowerment",
    institution: "Pemkab Kuningan · POLTEKESOS Bandung",
    summary:
      "Pemetaan sosial potensi lokal, fasilitasi FGD partisipatif warga, dan penguatan kapasitas kelembagaan masyarakat daerah.",
    icon: Compass,
    orbOffset: { x: 20, y: -18 },
  },
  {
    id: "hr",
    shortLabel: "HR & Governance",
    roleTitle: "Employee Relations, Mediation & Administration",
    institution: "Sekjen Kemnaker RI · PT Dirgantara Indonesia",
    summary:
      "Mediasi komunikasi internal, tata kelola administrasi kepegawaian presisi, serta pengelolaan SDM yang suportif dan etis.",
    icon: Users,
    orbOffset: { x: -16, y: -20 },
  },
] as const;

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroSection({ onOpenCV }: HeroSectionProps) {
  const [copiedId, setCopiedId] = useState(false);
  const [bioLang, setBioLang] = useState<"en" | "id">("id");
  const [activeLensIndex, setActiveLensIndex] = useState(0);
  const [isMotionPaused, setIsMotionPaused] = useState(false);

  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax across the Hero Section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const leftColY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const orbScrollY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Pointer-reactive spring coordinates for the 3D Pearl Spheres
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 22, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 22, mass: 0.6 });

  const spherePrimaryX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const spherePrimaryY = useTransform(smoothY, [-0.5, 0.5], [-22, 22]);
  const sphereSecondaryX = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const sphereSecondaryY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  const handleHeroPointerMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMotionPaused || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleHeroPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const toggleMotionPause = () => {
    setIsMotionPaused((prev) => {
      const next = !prev;
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("motion-paused", next);
      }
      return next;
    });
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
      className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-20"
    >
      {/* Identity Motif Overline + Ambient Motion Pause Toggle (R-39) */}
      <motion.div
        initial={{ opacity: 0, y: -14, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-[#E8CED9] pb-3.5"
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono-code text-xs font-semibold tracking-wider text-[#881337]">
            00 / PROFIL EKSEKUTIF
          </span>
          <span aria-hidden="true" className="h-3.5 w-px bg-[#DFC0CE]" />
          <span className="text-xs font-semibold text-[#52323F]">
            Licensed Certified Social Worker · Kementerian Sosial RI
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#52323F]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#A61E4D]" />
            <span>{PROFILE_DATA.location}</span>
            <span aria-hidden="true" className="text-[#8A5A6E]">
              ·
            </span>
            <span className="font-semibold text-[#881337]">
              Lisensi Aktif s.d. Des 2029
            </span>
          </span>

          <button
            type="button"
            onClick={toggleMotionPause}
            aria-pressed={isMotionPaused}
            title={
              isMotionPaused
                ? "Putar kembali animasi latar"
                : "Jeda animasi latar"
            }
            className="inline-flex min-h-[32px] items-center gap-1 rounded-full border border-white/90 bg-white/75 px-2.5 py-1 text-[11px] font-semibold text-[#52323F] shadow-2xs transition-colors hover:bg-white hover:text-[#231118]"
          >
            {isMotionPaused ? (
              <>
                <Play aria-hidden="true" className="h-3 w-3 text-[#881337]" />
                <span>Putar Animasi</span>
              </>
            ) : (
              <>
                <Pause aria-hidden="true" className="h-3 w-3 text-[#881337]" />
                <span>Jeda Animasi</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Main 12-Column Balanced Hero Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Staggered Reveal + Scroll Parallax */}
        <motion.div
          style={{ y: isMotionPaused ? 0 : leftColY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.11,
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
                  y: 34,
                  rotateX: 14,
                  filter: "blur(8px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, ease: EASE_OUT_EXPO },
                },
              }}
              style={{ transformPerspective: 900 }}
              className="font-heading text-4xl font-extrabold tracking-tight text-[#231118] sm:text-5xl lg:text-[56px] lg:leading-[1.08]"
            >
              Aulia Yasmin,{" "}
              <span className="font-editorial font-normal italic text-[#A61E4D]">
                S.Tr.Sos.
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.65, ease: EASE_OUT_EXPO },
                },
              }}
              className="font-heading mt-4 max-w-2xl text-xl leading-relaxed font-medium text-[#231118] sm:text-2xl sm:leading-snug"
            >
              Memadukan{" "}
              <span className="font-editorial text-2xl font-normal italic text-[#A61E4D] sm:text-[28px]">
                Human-Centered Empathy
              </span>{" "}
              dengan ketajaman strategis{" "}
              <span className="font-semibold text-[#881337]">CSR</span>,{" "}
              <span className="font-semibold text-[#881337]">
                Community Development
              </span>
              , dan{" "}
              <span className="font-semibold text-[#881337]">
                People Management
              </span>
              .
            </motion.p>

            {/* Sleek Single-Row Frosted Glass Domain Switcher */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.65, ease: EASE_OUT_EXPO },
                },
              }}
              className="mt-6"
            >
              <div
                role="tablist"
                aria-label="Fokus Kompetensi Utama Aulia Yasmin"
                className="pearl-card inline-flex flex-wrap items-center gap-1 rounded-2xl p-1.5"
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
                      className={`relative min-h-[38px] rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
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

              {/* Luminous Pearl Spotlight Preview Card */}
              <div className="pearl-card mt-3 overflow-hidden rounded-2xl p-4 sm:p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLens.id}
                    id={`hero-lens-panel-${activeLens.id}`}
                    role="tabpanel"
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/20">
                      <ActiveLensIcon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="font-heading text-sm font-bold text-[#231118] sm:text-base">
                          {activeLens.roleTitle}
                        </h2>
                        <span className="font-mono-code rounded-full bg-[#FCE8EF] px-2.5 py-0.5 text-[11px] font-semibold text-[#881337]">
                          {activeLens.institution}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#52323F] sm:text-sm">
                        {activeLens.summary}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Balanced Single-Row Primary CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.6, ease: EASE_OUT_EXPO },
              },
            }}
            className="mt-7 flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#A61E4D] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#A61E4D]/20 transition-all hover:bg-[#8C163E]"
            >
              <span>Terhubung di LinkedIn</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              type="button"
              onClick={onOpenCV}
              className="pearl-card pearl-card-interactive inline-flex min-h-[46px] items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#231118]"
            >
              <FileText aria-hidden="true" className="h-4 w-4 text-[#A61E4D]" />
              <span>Pratinjau & Unduh CV</span>
            </button>

            <a
              href="#experience"
              className="inline-flex min-h-[46px] items-center gap-1.5 rounded-full px-3.5 py-3 text-xs font-semibold text-[#52323F] transition-colors hover:text-[#A61E4D]"
            >
              <span>10 Rekam Jejak ↓</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: True Frosted Glass Card Refracting 3D Floating Pearl Spheres */}
        <motion.div
          style={{ y: isMotionPaused ? 0 : rightCardY }}
          className="relative lg:col-span-5"
        >
          <ScrollReveal direction="right" duration={0.75} className="h-full">
            {/* 3D Sculptural Pearl Spheres behind the Frosted Glass Card */}
            <motion.div
              aria-hidden="true"
              style={{ y: isMotionPaused ? 0 : orbScrollY }}
              className="pointer-events-none absolute -inset-6 -z-10"
            >
              {/* Primary 3D Rose-Pearl Iridescent Sphere (Top-Right edge of Glass Card) */}
              <motion.div
                style={{
                  x: isMotionPaused ? 0 : spherePrimaryX,
                  y: isMotionPaused ? 0 : spherePrimaryY,
                }}
                animate={{
                  x: isMotionPaused ? 0 : activeLens.orbOffset.x,
                  y: isMotionPaused ? 0 : activeLens.orbOffset.y,
                }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                className="animate-pearl-orb-1 absolute -top-5 -right-4 h-44 w-44 rounded-full sm:h-52 sm:w-52"
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

              {/* Secondary 3D Champagne-Blush Pearl Sphere (Bottom-Left edge of Glass Card) */}
              <motion.div
                style={{
                  x: isMotionPaused ? 0 : sphereSecondaryX,
                  y: isMotionPaused ? 0 : sphereSecondaryY,
                }}
                className="animate-pearl-orb-2 absolute -bottom-4 -left-5 h-36 w-36 rounded-full sm:h-44 sm:w-44"
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
              enableTilt={!isMotionPaused}
              maxTiltDeg={5}
              className="flex h-full flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-[#E5C5D3]/80 pb-3.5">
                  <div>
                    <span className="font-mono-code text-[11px] font-semibold uppercase tracking-widest text-[#881337]">
                      Ringkasan Eksekutif
                    </span>
                    <h2 className="font-heading text-base font-bold text-[#231118]">
                      Profil Profesional Berbasis Empati
                    </h2>
                  </div>

                  {/* Language Switcher for Bio (ID / EN) */}
                  <div
                    role="group"
                    aria-label="Pilih bahasa ringkasan profil"
                    className="inline-flex items-center rounded-xl border border-white/90 bg-white/80 p-0.5 text-xs shadow-2xs"
                  >
                    <button
                      type="button"
                      aria-pressed={bioLang === "id"}
                      onClick={() => setBioLang("id")}
                      className={`min-h-[32px] min-w-[36px] rounded-lg px-2.5 py-1 font-semibold transition-colors ${
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
                      className={`min-h-[32px] min-w-[36px] rounded-lg px-2.5 py-1 font-semibold transition-colors ${
                        bioLang === "en"
                          ? "bg-[#A61E4D] text-white"
                          : "text-[#52323F] hover:text-[#231118]"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {/* Animated Language Switch Quote */}
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={bioLang}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-base leading-relaxed font-medium text-[#231118] sm:text-[16.5px]"
                  >
                    &ldquo;
                    {bioLang === "id"
                      ? PROFILE_DATA.bioIndonesian
                      : PROFILE_DATA.bioEnglish}
                    &rdquo;
                  </motion.blockquote>
                </AnimatePresence>

                {/* Interactive Verified Credential Copy Bar inside Focal Glass Card */}
                <div className="mt-5 rounded-2xl border border-white/90 bg-white/75 p-3.5 shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337]">
                        <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold text-[#881337]">
                          Lisensi Resmi LSP Kemensos RI
                        </span>
                        <span className="font-mono-code block text-[11px] font-medium text-[#52323F]">
                          ID: {PROFILE_DATA.credentialId}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyCredential}
                      className="inline-flex min-h-[36px] items-center gap-1.5 rounded-xl border border-[#D4A5B8] bg-white px-3 py-1.5 text-xs font-semibold text-[#231118] transition-colors hover:border-[#A61E4D] hover:bg-[#FCE8EF]"
                    >
                      {copiedId ? (
                        <>
                          <Check
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-[#881337]"
                          />
                          <span className="text-[#881337]">ID Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-[#881337]"
                          />
                          <span>Salin ID</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Cross-Sector Track Record Badges */}
              <div className="mt-5 border-t border-[#E5C5D3]/80 pt-4">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#52323F]">
                  <Globe
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#881337]"
                  />
                  <span>Institusi & Organisasi Tempat Berkarya:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {PROFILE_DATA.trustedInstitutions.map((inst) => (
                    <span
                      key={inst}
                      className="rounded-lg border border-white/95 bg-white/85 px-2.5 py-1 text-[11px] font-semibold text-[#231118] shadow-2xs"
                    >
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </motion.div>
      </div>

      {/* Architectural 3-Metric Summary Bar with Systematic Scroll Reveal */}
      <ScrollReveal direction="up" delay={0.12} className="mt-8">
        <div className="pearl-card rounded-2xl p-5 sm:p-6">
          <div className="grid grid-cols-1 divide-y divide-[#E8CED9] md:grid-cols-3 md:divide-x md:divide-y-0">
            {PROFILE_DATA.quickStats.map((stat, idx) => {
              const icons = [Building2, GraduationCap, Award];
              const IconComponent = icons[idx] || Award;

              return (
                <div
                  key={stat.id}
                  className={`group flex items-start justify-between gap-4 ${
                    idx === 0
                      ? "pb-4 md:pr-6 md:pb-0"
                      : idx === 1
                      ? "py-4 md:px-6 md:py-0"
                      : "pt-4 md:pt-0 md:pl-6"
                  }`}
                >
                  <div>
                    <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                      {stat.label}
                    </span>
                    <h3 className="font-heading mt-1 text-lg font-bold text-[#231118] transition-colors group-hover:text-[#A61E4D] sm:text-xl">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#52323F]">
                      {stat.subtext}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/20 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
