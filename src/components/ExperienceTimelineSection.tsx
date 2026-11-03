"use client";

import React, { useState, useRef } from "react";
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
import {
  EXPERIENCES,
  EXPERIENCE_CATEGORIES,
  ExperienceCategory,
} from "@/data/portfolioData";

export default function ExperienceTimelineSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ExperienceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("bnn-researcher");

  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 75%", "end 30%"],
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
      className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Identity Motif Section Header */}
      <div className="mb-8 border-b border-[#DEC3D0] pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold tracking-wider text-[#881337]">
            02 / REKAM JEJAK PROFESIONAL (10 PERAN)
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#DEC3D0]" />
        </div>

        <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#231118] sm:text-4xl">
              Perjalanan Karier{" "}
              <span className="font-editorial font-normal italic text-[#A61E4D]">
                Lintas Sektor & Disiplin
              </span>
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[#52323F] sm:text-base">
              Pengalaman terverifikasi di instansi pemerintah pusat (Kemnaker
              RI, BNN RI, Kemensos RI), pemerintah daerah, BUMN strategis (PT
              Dirgantara Indonesia), hingga korporasi keuangan dan edukasi.
            </p>
          </div>

          {/* Search Input & Category Filter Controls */}
          <div className="flex flex-col gap-3 sm:min-w-[360px]">
            <div>
              <label
                htmlFor="experience-search"
                className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#52323F]"
              >
                <Search aria-hidden="true" className="h-3.5 w-3.5 text-[#881337]" />
                <span>Cari posisi, instansi, atau keahlian:</span>
              </label>
              <div className="relative">
                <input
                  id="experience-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Contoh: Kemnaker, BNN, Counseling..."
                  className="min-h-[42px] w-full rounded-lg border border-[#8A5A6E] bg-white px-3.5 py-2 text-xs font-medium text-[#231118] placeholder-[#6E4757] transition-colors focus:border-[#A61E4D]"
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#52323F]">
                <Filter
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-[#881337]"
                />
                <span>Filter Kategori Sektor:</span>
              </div>
              <div
                role="tablist"
                aria-label="Filter Kategori Pengalaman Kerja"
                className="pearl-card flex flex-wrap items-center gap-1.5 rounded-xl p-1.5"
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
                      className={`relative min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                        isSelected
                          ? "text-white"
                          : "text-[#52323F] hover:text-[#231118]"
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="experience-filter-pill"
                          className="absolute inset-0 rounded-lg bg-[#A61E4D]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span>{cat.label}</span>
                        <span
                          className={`font-mono-code rounded-md px-1.5 py-0.5 text-[10px] ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-[#FCE8EF] text-[#881337]"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div ref={timelineContainerRef} className="relative mt-8">
        {filteredExperiences.length === 0 ? (
          /* R-27: Informative Empty State with Cause and Next Action */
          <div
            role="status"
            className="pearl-card rounded-2xl p-8 text-center sm:p-12"
          >
            <p className="font-heading text-lg font-bold text-[#231118]">
              Tidak ada pengalaman yang cocok dengan pencarian &ldquo;
              {searchQuery}&rdquo;
            </p>
            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#52323F] sm:text-sm">
              Filter kategori saat ini atau kata kunci yang dimasukkan belum
              menemukan kecocokan dari 10 rekam jejak profesional Aulia Yasmin.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#A61E4D] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#8C163E]"
            >
              <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
              <span>Tampilkan Semua 10 Pengalaman</span>
            </button>
          </div>
        ) : (
          <>
            {/* Background Static Timeline Track */}
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-4 w-0.5 rounded-full bg-[#DEC3D0] sm:left-7"
            />

            {/* Scroll Progress Line */}
            <motion.div
              aria-hidden="true"
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute top-2 bottom-2 left-4 w-0.5 rounded-full bg-[#A61E4D] sm:left-7"
            />

            {/* Filtered Cards List */}
            <motion.div layout className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredExperiences.map((exp) => {
                  const isExpanded = expandedId === exp.id;
                  const panelId = `exp-panel-${exp.id}`;

                  return (
                    <motion.div
                      key={exp.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.3,
                        layout: { type: "spring", stiffness: 320, damping: 30 },
                      }}
                      className="relative pl-11 sm:pl-18"
                    >
                      {/* Timeline Node Marker */}
                      <div
                        aria-hidden="true"
                        className="absolute top-6 left-1.5 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-[#8A5A6E] bg-[#FDF8FA] sm:left-4.5"
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            exp.isCurrent ? "bg-[#A61E4D]" : "bg-[#8A5A6E]"
                          }`}
                        />
                      </div>

                      <GlassCard className="p-5 sm:p-6">
                        {/* Native Accessible Button Header (R-32, R-39) */}
                        <button
                          type="button"
                          onClick={() => toggleExpand(exp.id)}
                          aria-expanded={isExpanded}
                          aria-controls={panelId}
                          className="w-full rounded-xl text-left"
                        >
                          {/* Top Meta Row */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-mono-code text-xs font-bold text-[#6E4757]">
                                #{exp.number}
                              </span>
                              <span className="rounded-lg border border-[#DEC3D0] bg-[#FCE8EF] px-2.5 py-0.5 text-xs font-semibold text-[#881337]">
                                {exp.tag}
                              </span>
                              {exp.isCurrent && (
                                <span className="inline-flex items-center gap-1 rounded-lg bg-[#A61E4D] px-2.5 py-0.5 text-[11px] font-semibold text-white">
                                  Aktif Saat Ini
                                </span>
                              )}
                            </div>

                            <div className="font-mono-code flex flex-wrap items-center gap-3 text-xs font-medium text-[#52323F]">
                              <span className="inline-flex items-center gap-1">
                                <Calendar
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 text-[#881337]"
                                />
                                {exp.period}
                                {exp.duration && (
                                  <span className="text-[#6E4757]">
                                    ({exp.duration})
                                  </span>
                                )}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[#6E4757]">
                                <MapPin
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 text-[#881337]"
                                />
                                {exp.location}
                              </span>
                            </div>
                          </div>

                          {/* Role & Organization Title */}
                          <div className="mt-3 flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-heading text-lg font-bold text-[#231118] sm:text-xl">
                                {exp.role}{" "}
                                <span className="font-normal text-[#6E4757]">
                                  ·
                                </span>{" "}
                                <span className="text-[#881337]">
                                  {exp.organization}
                                </span>
                              </h3>
                              <p className="mt-1.5 text-sm leading-relaxed text-[#52323F]">
                                {exp.summary}
                              </p>
                            </div>

                            <span
                              aria-hidden="true"
                              className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8A5A6E] bg-white text-[#231118]"
                            >
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-[#881337]" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-[#881337]" />
                              )}
                            </span>
                          </div>
                        </button>

                        {/* Expandable Detail Highlights & Competency Badges */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              id={panelId}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 border-t border-[#DEC3D0] pt-4">
                                <p className="font-mono-code mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                                  Kontribusi & Tanggung Jawab Utama:
                                </p>
                                <ul className="space-y-2">
                                  {exp.highlights.map((point, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2.5 text-xs leading-relaxed text-[#231118] sm:text-sm"
                                    >
                                      <CheckCircle2
                                        aria-hidden="true"
                                        className="mt-0.5 h-4 w-4 shrink-0 text-[#A61E4D]"
                                      />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>

                                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                                  {exp.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="rounded-lg border border-[#DEC3D0] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#52323F]"
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
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
