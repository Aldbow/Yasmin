"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Globe2,
  Heart,
  Users2,
  Award,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./GlassCard";
import { VOLUNTEER_DATA } from "@/data/portfolioData";

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
        return Award;
      default:
        return Heart;
    }
  };

  return (
    <section
      id="impact"
      className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Identity Motif Section Header */}
      <div className="mb-8 border-b border-[#DEC3D0] pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold tracking-wider text-[#881337]">
            04 / DAMPAK KOMUNITAS & KEPEMIMPINAN SOSIAL
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#DEC3D0]" />
        </div>

        <div className="mt-3 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#231118] sm:text-4xl">
              Kepemimpinan Komunitas,{" "}
              <span className="font-editorial font-normal italic text-[#A61E4D]">
                Advokasi Lingkungan
              </span>{" "}
              & Pelestarian Budaya
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[#52323F] sm:text-base">
              Dedikasi aktif dalam kampanye perubahan iklim (Earth Hour
              Bandung), manajemen SDM relawan (Pojok Sosial), advokasi kesehatan
              mental (Lingkar Psikologi), serta pelestarian budaya Sunda
              (GARNIDA).
            </p>
          </div>

          {/* Carousel Prev/Next Controls (44x44px minimum tap target per R-03) */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Geser ke organisasi sebelumnya"
              className="pearl-card pearl-card-interactive flex h-11 w-11 items-center justify-center rounded-full border border-[#8A5A6E] text-[#231118]"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Geser ke organisasi berikutnya"
              className="pearl-card pearl-card-interactive flex h-11 w-11 items-center justify-center rounded-full border border-[#8A5A6E] text-[#231118]"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel (Aligned 2-up on Desktop, 1-up on Mobile) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-1"
        style={{ scrollbarWidth: "none" }}
      >
        {VOLUNTEER_DATA.map((item, idx) => {
          const IconComponent = getIcon(item.id);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="w-[88vw] shrink-0 snap-start md:w-[calc(50%-10px)]"
            >
              <GlassCard className="flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Top Domain & Period Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-lg border border-[#DEC3D0] bg-[#FCE8EF] px-3 py-1 text-xs font-semibold text-[#881337]">
                      {item.domain}
                    </span>

                    <span className="font-mono-code inline-flex items-center gap-1.5 text-xs font-medium text-[#52323F]">
                      <Calendar
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[#881337]"
                      />
                      {item.period} ({item.duration})
                    </span>
                  </div>

                  {/* Organization & Role */}
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#231118] sm:text-2xl">
                        {item.organization}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#881337]">
                        {item.role}
                        {item.division && (
                          <span className="font-normal text-[#52323F]">
                            {" "}
                            · {item.division}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25">
                      <IconComponent aria-hidden="true" className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-3.5 text-sm leading-relaxed text-[#52323F]">
                    {item.description}
                  </p>
                </div>

                {/* Impact Highlights */}
                <div className="mt-6 border-t border-[#DEC3D0] pt-4">
                  <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#6E4757]">
                    Kontribusi & Dampak Komunitas:
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {item.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#231118]"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A61E4D]"
                        />
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

      {/* Carousel Indicators with 44x44px hit targets (R-03) */}
      <div className="mt-3 flex items-center justify-center gap-1">
        {VOLUNTEER_DATA.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Tampilkan kartu ${item.organization}`}
            aria-current={activeIndex === idx ? "true" : undefined}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2"
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-[#A61E4D]"
                  : "w-2.5 bg-[#D4B2C2] hover:bg-[#8A5A6E]"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
