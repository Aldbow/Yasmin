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
  Briefcase,
  CheckCircle2,
  Sparkles,
  Filter,
} from "lucide-react";
import GlassCard from "./GlassCard";
import {
  EXPERIENCES,
  EXPERIENCE_CATEGORIES,
  ExperienceCategory,
  ExperienceItem,
} from "@/data/portfolioData";

export default function ExperienceTimelineSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ExperienceCategory>("all");
  const [expandedId, setExpandedId] = useState<string | null>("bnn-researcher");

  const timelineContainerRef = useRef<HTMLDivElement>(null);

  // Interactive Timeline Progress Line (PRD Section 6.2)
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
    if (selectedCategory === "all") return true;
    return (
      exp.category === selectedCategory ||
      exp.secondaryCategory === selectedCategory
    );
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const accentBadgeStyle = (accent: ExperienceItem["accentColor"]) => {
    switch (accent) {
      case "emerald":
        return "border-emerald-400/30 bg-emerald-500/15 text-emerald-300";
      case "indigo":
        return "border-indigo-400/30 bg-indigo-500/15 text-indigo-300";
      case "rose":
        return "border-rose-400/30 bg-rose-500/15 text-rose-300";
    }
  };

  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Header & Interactive Category Filter */}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
            <Briefcase className="h-3.5 w-3.5" />
            <span>10 Professional Track Records · Cross-Sector Journey</span>
          </div>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Rekam Jejak Profesional{" "}
            <span className="font-editorial font-normal italic text-emerald-300">
              Lintas Disiplin
            </span>
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
            Perjalanan karier dari instansi pemerintah pusat (Kemnaker RI, BNN
            RI, Kemensos RI), pemerintah daerah, BUMN strategis (PT Dirgantara
            Indonesia), hingga korporasi keuangan dan edukasi.
          </p>
        </div>

        {/* Category Filter Tabs with layoutId Morphing (PRD Section 5.4 & 6.3) */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Filter className="h-3.5 w-3.5 text-emerald-400" />
            <span>Filter Kategori Pengalaman:</span>
          </div>
          <div
            role="tablist"
            aria-label="Filter Pengalaman Kerja"
            className="glass-surface flex flex-wrap items-center gap-1.5 rounded-2xl p-1.5"
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
                  className={`relative cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors duration-200 ${
                    isSelected
                      ? "text-white"
                      : "text-slate-300/80 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="experience-filter-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/30 via-teal-500/25 to-indigo-500/30 ring-1 ring-emerald-400/40"
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
                      className={`font-mono-code rounded-full px-1.5 py-0.2 text-[10px] ${
                        isSelected
                          ? "bg-emerald-400/25 text-emerald-200"
                          : "bg-white/5 text-slate-400"
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

      {/* Vertical Glass Timeline Container */}
      <div ref={timelineContainerRef} className="relative mt-12">
        {/* Background Static Timeline Track */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-4 w-0.5 rounded-full bg-white/10 sm:left-7"
        />

        {/* Real-Time Glowing Progress Line (PRD Section 6.2) */}
        <motion.div
          aria-hidden="true"
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-2 bottom-2 left-4 w-0.5 rounded-full bg-gradient-to-b from-emerald-400 via-indigo-400 to-rose-400 shadow-[0_0_16px_rgba(16,185,129,0.75)] sm:left-7"
        />

        {/* Filtered Cards List */}
        <motion.div layout className="space-y-5">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => {
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{
                    duration: 0.35,
                    layout: { type: "spring", stiffness: 320, damping: 30 },
                  }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute top-6 left-1.5 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-[#0B111E] shadow-md sm:left-4.5">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        exp.isCurrent
                          ? "animate-pulse bg-emerald-400 shadow-[0_0_10px_#10B981]"
                          : exp.accentColor === "emerald"
                          ? "bg-emerald-400"
                          : exp.accentColor === "indigo"
                          ? "bg-indigo-400"
                          : "bg-rose-400"
                      }`}
                    />
                  </div>

                  <GlassCard
                    spotlightColor={exp.accentColor}
                    className="p-5 sm:p-6"
                  >
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className="cursor-pointer"
                    >
                      {/* Top Meta Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono-code text-xs font-bold text-slate-400">
                            #{exp.number}
                          </span>
                          <span
                            className={`rounded-full border px-3 py-0.5 text-xs font-medium ${accentBadgeStyle(
                              exp.accentColor
                            )}`}
                          >
                            {exp.tag}
                          </span>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
                              <Sparkles className="h-3 w-3" />
                              Sekarang
                            </span>
                          )}
                        </div>

                        <div className="font-mono-code flex flex-wrap items-center gap-3 text-xs text-slate-300">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                            {exp.period}
                            {exp.duration && (
                              <span className="text-slate-400">
                                ({exp.duration})
                              </span>
                            )}
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-400">
                            <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Role & Organization Title */}
                      <div className="mt-3 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                            {exp.role}{" "}
                            <span className="font-normal text-slate-400">
                              —
                            </span>{" "}
                            <span className="text-emerald-200">
                              {exp.organization}
                            </span>
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {exp.summary}
                          </p>
                        </div>

                        <button
                          type="button"
                          aria-label={
                            isExpanded
                              ? "Sembunyikan rincian"
                              : "Tampilkan rincian"
                          }
                          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Detail Highlights & Competency Badges */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 border-t border-white/10 pt-4">
                            <p className="font-mono-code mb-2.5 text-[11px] uppercase tracking-wider text-slate-400">
                              Kontribusi & Tanggung Jawab Utama:
                            </p>
                            <ul className="space-y-2">
                              {exp.highlights.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-200 sm:text-sm"
                                >
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap items-center gap-1.5">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300"
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
      </div>
    </section>
  );
}
