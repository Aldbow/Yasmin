"use client";

import React from "react";
import Image from "next/image";
import {
  Globe2,
  Heart,
  Users2,
  Award,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./GlassCard";
import {
  SectionHeaderReveal,
  StaggerGrid,
  StaggerCard,
} from "./ScrollReveal";
import { VOLUNTEER_DATA } from "@/data/portfolioData";

const IMPACT_VISUALS: Record<
  string,
  { src: string; alt: string; caption: string; width: number; height: number }
> = {
  "earth-hour": {
    src: "/img/saad-ali-zZC5q-_6_8c-unsplash.jpg",
    alt: "Sosialisasi perubahan iklim dan edukasi penghematan energi bersama komunitas",
    caption: "Sosialisasi Penghematan Energi & Lingkungan",
    width: 1600,
    height: 900,
  },
  "pojok-sosial": {
    src: "/img/brooke-cagle--uHVRvDr7pg-unsplash.jpg",
    alt: "Rapat koordinasi pengurus dan pengembangan kapasitas relawan sosial",
    caption: "Pengelolaan Anggota & Koordinasi Relawan",
    width: 1600,
    height: 1067,
  },
  "lingkar-psikologi": {
    src: "/img/dominik-lange-VUOiQW4OeLI-unsplash.jpg",
    alt: "Pendampingan kesejahteraan psikososial dan edukasi kesehatan mental",
    caption: "Edukasi Literasi Kesehatan Mental",
    width: 1600,
    height: 1067,
  },
  garnida: {
    src: "/img/brooke-cagle-NoRsyXmHGpI-unsplash.jpg",
    alt: "Pengelolaan administrasi kegiatan dan pelestarian kesenian Sunda",
    caption: "Tata Kelola Sanggar & Kegiatan Budaya",
    width: 1600,
    height: 1066,
  },
};

export default function SocialImpactCarousel() {
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
      className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-8 sm:py-24 lg:px-14"
    >
      <SectionHeaderReveal
        indexCode="04 / PENGALAMAN ORGANISASI & KERELAWANAN SOSIAL"
        title={
          <>
            Keterlibatan dalam{" "}
            <span className="font-editorial font-normal italic text-[#A61E4D]">
              Organisasi Komunitas, Lingkungan
            </span>{" "}
            & Pelestarian Budaya
          </>
        }
        description="Peran kepengurusan dan kegiatan sukarela dalam kampanye penghematan energi (Earth Hour Bandung), manajemen sumber daya manusia internal relawan (Pojok Sosial), tata kelola kesenian tradisional Sunda (GARNIDA), serta edukasi kesehatan mental (Lingkar Psikologi)."
      />

      <StaggerGrid
        staggerDelay={0.14}
        className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2 lg:gap-8"
      >
        {VOLUNTEER_DATA.map((item) => {
          const IconComponent = getIcon(item.id);
          const visual = IMPACT_VISUALS[item.id] || IMPACT_VISUALS["earth-hour"];

          const getIconAnimation = (id: string) => {
            switch (id) {
              case "lingkar-psikologi":
                return "animate-heartbeat text-[#A61E4D]";
              case "earth-hour":
                return "transition-transform duration-500 group-hover:rotate-45";
              case "garnida":
                return "transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6";
              default:
                return "transition-transform duration-300 group-hover:scale-110";
            }
          };

          return (
            <StaggerCard key={item.id} className="h-full">
              <GlassCard className="group shimmer-foil flex h-full flex-col justify-between p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#A61E4D]/6">
                <div>
                  <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F7EEF2] ring-1 ring-[#E5C5D3] sm:mb-6">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      width={visual.width}
                      height={visual.height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 620px"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between gap-2 sm:top-3.5 sm:right-3.5 sm:left-3.5">
                      <span className="rounded-xl bg-[#231118]/90 px-2.5 py-1 text-[11px] font-semibold text-[#FCE8EF] shadow-sm backdrop-blur-md sm:px-3 sm:text-xs">
                        {item.domain}
                      </span>

                      <span className="font-mono-code hidden items-center gap-1.5 rounded-xl bg-white/95 px-3 py-1 text-xs font-semibold text-[#231118] shadow-sm backdrop-blur-md sm:inline-flex">
                        <Calendar
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-[#881337]"
                        />
                        {item.period} ({item.duration})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-[11px]">
                          {visual.caption}
                        </span>
                        <span className="font-mono-code inline-flex items-center gap-1 rounded-md bg-[#FCE8EF] px-2 py-0.5 text-[10px] font-semibold text-[#881337] sm:hidden">
                          <Calendar
                            aria-hidden="true"
                            className="h-3 w-3 shrink-0"
                          />
                          {item.period} ({item.duration})
                        </span>
                      </div>

                      <h3 className="font-heading mt-1 text-lg font-bold text-[#231118] transition-colors duration-200 group-hover:text-[#881337] sm:text-2xl">
                        {item.organization}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#881337] sm:text-sm">
                        {item.role}
                        {item.division && (
                          <span className="font-normal text-[#52323F]">
                            {" "}
                            · {item.division}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25 sm:h-11 sm:w-11">
                      <IconComponent
                        aria-hidden="true"
                        className={`h-5 w-5 ${getIconAnimation(item.id)}`}
                      />
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs leading-relaxed text-[#52323F] sm:mt-3 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#E5C5D3] pt-3.5 sm:mt-6 sm:pt-4">
                  <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-[11px]">
                    Kegiatan & Tanggung Jawab:
                  </span>
                  <ul className="mt-2 space-y-1.5 sm:mt-2.5 sm:space-y-2">
                    {item.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#231118] sm:text-[13px]"
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
            </StaggerCard>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
