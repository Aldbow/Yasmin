"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Filter,
  Search,
  RotateCcw,
} from "lucide-react";
import GlassCard from "./GlassCard";
import Abstract3DOrb from "./Abstract3DOrb";
import { SectionHeaderReveal, ScrollReveal } from "./ScrollReveal";
import {
  EXPERIENCES,
  EXPERIENCE_CATEGORIES,
  ExperienceCategory,
} from "@/data/portfolioData";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ExperienceTimelineSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ExperienceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("bnn-researcher");

  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 75%", "end 25%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    const matchesCategory =
      selectedCategory === "all" ||
      exp.category === selectedCategory ||
      exp.secondaryCategory === selectedCategory;

    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesCategory;

    const matchesQuery =
      exp.role.toLowerCase().includes(q) ||
      exp.organization.toLowerCase().includes(q) ||
      exp.tag.toLowerCase().includes(q) ||
      exp.location.toLowerCase().includes(q) ||
      exp.skills.some((s) => s.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-8 sm:py-24 lg:px-14"
    >
      <SectionHeaderReveal
        indexCode="02 / PENGALAMAN KERJA & PRAKTIK LAPANGAN (10 PERAN)"
        title={
          <>
            Riwayat Penugasan di{" "}
            <span className="font-editorial font-normal italic text-[#A61E4D]">
              Instansi Pemerintah, BUMN
            </span>{" "}
            & Lembaga Sosial
          </>
        }
        description="Catatan penugasan kerja, penelitian, serta praktik pekerjaan sosial di Kementerian Ketenagakerjaan RI, Badan Narkotika Nasional RI, Kementerian Sosial RI, Pemerintah Kabupaten Kuningan, PT Dirgantara Indonesia, PT Maybank Indonesia Finance, YPAC Jakarta, dan CV Hayakids Indonesia."
      />

      <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:col-span-4 relative">
          <Abstract3DOrb
            variant="berry"
            size="md"
            animation="orbit"
            hasTorusRing={true}
            className="absolute -top-10 -left-6 -z-10 opacity-70 sm:-top-12 sm:-left-8"
          />

          <ScrollReveal direction="left" duration={0.7}>
            <GlassCard className="p-4.5 sm:p-7">
              <div className="group relative mb-5 hidden aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F7EEF2] ring-1 ring-[#E5C5D3] lg:block">
                <Image
                  src="/img/brooke-cagle-NoRsyXmHGpI-unsplash.jpg"
                  alt="Potret lingkungan kerja profesional"
                  width={1600}
                  height={1066}
                  loading="lazy"
                  sizes="400px"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-2">
                  <span className="font-mono-code rounded-xl bg-[#231118]/90 px-3 py-1.5 text-xs font-semibold text-[#FCE8EF] shadow-md backdrop-blur-md">
                    Menampilkan {filteredExperiences.length} dari 10 Peran
                  </span>
                </div>
              </div>

              <div className="mb-3.5 flex items-center justify-between border-b border-[#E5C5D3] pb-2.5 lg:hidden">
                <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#881337]">
                  Pencarian & Penyaringan
                </span>
                <span className="font-mono-code rounded-lg bg-[#FCE8EF] px-2.5 py-1 text-[11px] font-semibold text-[#881337]">
                  {filteredExperiences.length} / 10 Peran
                </span>
              </div>

              <div>
                <label
                  htmlFor="experience-search"
                  className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#231118] sm:mb-2"
                >
                  <Search
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#881337]"
                  />
                  <span>Cari Jabatan, Instansi, atau Keterampilan:</span>
                </label>
                <div className="relative">
                  <input
                    id="experience-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Contoh: Kemnaker, BNN, Manajemen Kasus..."
                    className="min-h-[44px] w-full rounded-xl border border-[#D4A5B8] bg-white px-3.5 py-2.5 text-xs font-medium text-[#231118] placeholder-[#6E4757] shadow-2xs transition-colors focus:border-[#A61E4D]"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-5">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#231118]">
                  <Filter
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#881337]"
                  />
                  <span>Saring Berdasarkan Kelompok Instansi:</span>
                </div>
                <div
                  role="tablist"
                  aria-label="Saring Pengalaman Kerja Berdasarkan Sektor"
                  className="grid grid-cols-2 gap-1.5 lg:flex lg:flex-col"
                >
                  {EXPERIENCE_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        role="tab"
                        aria-selected={isSelected}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`relative flex min-h-[44px] w-full items-center justify-between gap-1.5 rounded-xl px-3 py-2 text-left text-xs font-semibold transition-colors duration-200 sm:px-4 ${
                          isSelected
                            ? "text-white"
                            : "bg-white/85 text-[#52323F] hover:bg-white hover:text-[#231118]"
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="experience-filter-pill"
                            className="absolute inset-0 rounded-xl bg-[#A61E4D] shadow-sm shadow-[#A61E4D]/20"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10 leading-tight">
                          {cat.label}
                        </span>
                        <span
                          className={`font-mono-code relative z-10 shrink-0 rounded-md px-1.5 py-0.5 text-[10px] sm:px-2 sm:text-[11px] ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-[#FCE8EF] text-[#881337]"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {(selectedCategory !== "all" || searchQuery.trim() !== "") && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-3.5 inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-[#D4A5B8] bg-white px-4 py-2 text-xs font-semibold text-[#881337] transition-colors hover:bg-[#FCE8EF] sm:mt-4"
                >
                  <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
                  <span>Atur Ulang Penyaringan</span>
                </button>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>

        <div ref={timelineContainerRef} className="relative lg:col-span-8">
          {filteredExperiences.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              role="status"
              className="pearl-card rounded-2xl p-6 text-center sm:p-12"
            >
              <p className="font-heading text-base font-bold text-[#231118] sm:text-lg">
                Tidak ditemukan pengalaman kerja untuk kata kunci &ldquo;
                {searchQuery}&rdquo;
              </p>
              <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#52323F] sm:text-sm">
                Silakan ubah kata kunci pencarian atau pilih kelompok instansi
                lainnya untuk menampilkan seluruh riwayat penugasan.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#A61E4D] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#8C163E]"
              >
                <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
                <span>Tampilkan Semua 10 Pengalaman</span>
              </button>
            </motion.div>
          ) : (
            <>
              <div
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-2 w-0.5 rounded-full bg-[#E5C5D3] sm:left-6"
              />

              <motion.div
                aria-hidden="true"
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute top-2 bottom-2 left-2 w-0.5 rounded-full bg-gradient-to-b from-[#A61E4D] via-[#D84B7A] to-[#F29BB9] shadow-[0_0_12px_rgba(166,30,77,0.45)] sm:left-6"
              />

              <div className="space-y-4 sm:space-y-5">
                <AnimatePresence mode="popLayout">
                  {filteredExperiences.map((exp, index) => {
                    const isExpanded = expandedId === exp.id;
                    const panelId = `exp-panel-${exp.id}`;

                    return (
                      <motion.div
                        key={exp.id}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{ opacity: 0, y: -12 }}
                        viewport={{
                          once: true,
                          amount: 0.1,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: (index % 3) * 0.04,
                          ease: EASE_OUT_EXPO,
                        }}
                        className="relative pl-7 sm:pl-16"
                      >
                        <motion.div
                          aria-hidden="true"
                          initial={{ scale: 0.4, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                          }}
                          className="absolute top-5 left-0 z-20 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-[#A61E4D] bg-white shadow-sm sm:top-6 sm:left-3.5 sm:h-5 sm:w-5"
                        >
                          <span className="relative flex h-2 w-2 items-center justify-center sm:h-2.5 sm:w-2.5">
                            {exp.isCurrent && (
                              <span className="animate-sonar absolute -inset-1 rounded-full bg-[#A61E4D]/45" />
                            )}
                            <span
                              className={`relative h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${
                                exp.isCurrent ? "bg-[#A61E4D]" : "bg-[#C95B82]"
                              }`}
                            />
                          </span>
                        </motion.div>

                        <GlassCard className="group p-4.5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#A61E4D]/6">
                          <button
                            type="button"
                            onClick={() => toggleExpand(exp.id)}
                            aria-expanded={isExpanded}
                            aria-controls={panelId}
                            className="w-full rounded-xl text-left"
                          >
                            <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
                              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                <span className="font-mono-code text-[11px] font-bold text-[#6E4757] sm:text-xs">
                                  #{exp.number}
                                </span>
                                <span className="rounded-lg border border-[#E5C5D3] bg-[#FCE8EF] px-2.5 py-0.5 text-[11px] font-semibold text-[#881337] sm:px-3 sm:text-xs">
                                  {exp.tag}
                                </span>
                                {exp.isCurrent && (
                                  <span className="inline-flex items-center gap-1 rounded-lg bg-[#A61E4D] px-2 py-0.5 text-[10px] font-semibold text-white sm:px-2.5 sm:text-[11px]">
                                    Aktif Saat Ini
                                  </span>
                                )}
                              </div>

                              <div className="font-mono-code flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-[#52323F] sm:text-xs">
                                <span className="inline-flex items-center gap-1">
                                  <Calendar
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 shrink-0 text-[#881337]"
                                  />
                                  <span>{exp.period}</span>
                                  {exp.duration && (
                                    <span className="text-[#6E4757]">
                                      ({exp.duration})
                                    </span>
                                  )}
                                </span>
                                <span className="inline-flex items-center gap-1 text-[#6E4757]">
                                  <MapPin
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 shrink-0 text-[#881337]"
                                  />
                                  <span>{exp.location}</span>
                                </span>
                              </div>
                            </div>

                            <div className="mt-2.5 flex items-start justify-between gap-3 sm:mt-3.5 sm:gap-4">
                              <div className="min-w-0 flex-1">
                                <h3 className="font-heading text-base leading-snug font-bold text-[#231118] sm:text-xl">
                                  {exp.role}{" "}
                                  <span className="font-normal text-[#6E4757]">
                                    ·
                                  </span>{" "}
                                  <span className="text-[#881337]">
                                    {exp.organization}
                                  </span>
                                </h3>
                                <p className="mt-1.5 text-xs leading-relaxed text-[#52323F] sm:text-sm">
                                  {exp.summary}
                                </p>
                              </div>

                              <span
                                aria-hidden="true"
                                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4A5B8] bg-white text-[#231118] shadow-2xs sm:mt-1"
                              >
                                {isExpanded ? (
                                  <ChevronUp className="h-4 w-4 text-[#881337]" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-[#881337]" />
                                )}
                              </span>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                id={panelId}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.28,
                                  ease: EASE_OUT_EXPO,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="mt-3.5 border-t border-[#E5C5D3] pt-3.5 sm:mt-4 sm:pt-4">
                                  <p className="font-mono-code mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:mb-2.5 sm:text-[11px]">
                                    Rincian Tugas & Pelaksanaan Kerja:
                                  </p>
                                  <ul className="space-y-2">
                                    {exp.highlights.map((point, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-xs leading-relaxed text-[#231118] sm:gap-2.5 sm:text-sm"
                                      >
                                        <CheckCircle2
                                          aria-hidden="true"
                                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A61E4D] sm:h-4 sm:w-4"
                                        />
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4">
                                    {exp.skills.map((skill) => (
                                      <span
                                        key={skill}
                                        className="rounded-lg border border-white/95 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#52323F] shadow-2xs sm:px-3 sm:text-xs"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </GlassCard>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <Abstract3DOrb
                variant="champagne"
                size="md"
                animation="drift"
                className="absolute -bottom-8 -right-6 -z-10 opacity-55 sm:-bottom-12 sm:-right-8"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
