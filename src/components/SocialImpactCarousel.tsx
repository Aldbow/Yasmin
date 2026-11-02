"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Globe2,
  Heart,
  Users2,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { VOLUNTEER_DATA, VolunteerItem } from "@/data/portfolioData";

export default function SocialImpactCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx =
      activeIndex > 0 ? activeIndex - 1 : VOLUNTEER_DATA.length - 1;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx =
      activeIndex < VOLUNTEER_DATA.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(nextIdx);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 360;
    const idx = Math.round(container.scrollLeft / (cardWidth + 20));
    if (idx >= 0 && idx < VOLUNTEER_DATA.length) {
      setActiveIndex(idx);
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "earth-hour":
        return Globe2;
      case "pojok-sosial":
        return Users2;
      case "garnida":
        return Sparkles;
      default:
        return Heart;
    }
  };

  const getAccentPill = (accent: VolunteerItem["accent"]) => {
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
      id="impact"
      className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Header & Carousel Navigation Controls */}
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/25 bg-rose-500/10 px-3.5 py-1 text-xs font-medium text-rose-300">
            <Heart className="h-3.5 w-3.5" />
            <span>Social Impact, Volunteering & Cultural Leadership</span>
          </div>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kepemimpinan Komunitas,{" "}
            <span className="font-editorial font-normal italic text-emerald-300">
              Advokasi Lingkungan
            </span>{" "}
            & Pelestarian Budaya
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
            Dedikasi aktif dalam kampanye perubahan iklim (Earth Hour Bandung),
            manajemen SDM relawan (Pojok Sosial), advokasi kesehatan mental
            (Lingkar Psikologi), serta pelestarian budaya Sunda (GARNIDA).
          </p>
        </div>

        {/* Carousel Prev/Next Controls */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Geser ke kiri"
            className="glass-surface glass-surface-interactive flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-slate-200 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Geser ke kanan"
            className="glass-surface glass-surface-interactive flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-slate-200 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Glass Carousel (Aligned 2-up on Desktop, 1-up on Mobile) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-1"
        style={{ scrollbarWidth: "none" }}
      >
        {VOLUNTEER_DATA.map((item, idx) => {
          const IconComponent = getIcon(item.id);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="w-[88vw] shrink-0 snap-start md:w-[calc(50%-10px)]"
            >
              <GlassCard
                spotlightColor={item.accent}
                className="flex h-full flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  {/* Top Domain & Period Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${getAccentPill(
                        item.accent
                      )}`}
                    >
                      {item.domain}
                    </span>

                    <span className="font-mono-code inline-flex items-center gap-1.5 text-xs text-slate-300">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                      {item.period} ({item.duration})
                    </span>
                  </div>

                  {/* Organization & Role */}
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                        {item.organization}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-emerald-300">
                        {item.role}
                        {item.division && (
                          <span className="font-normal text-slate-300">
                            {" "}
                            · {item.division}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-emerald-300 ring-1 ring-white/15">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
                    {item.description}
                  </p>
                </div>

                {/* Impact Highlights */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-slate-400">
                    Kontribusi & Dampak Komunitas:
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {item.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Carousel Indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {VOLUNTEER_DATA.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Lihat kartu ${item.organization}`}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "w-8 bg-emerald-400"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
