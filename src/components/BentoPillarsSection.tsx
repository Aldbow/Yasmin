"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Sprout,
  HeartHandshake,
  Briefcase,
  CheckCircle2,
  Scale,
  FileCheck2,
} from "lucide-react";
import GlassCard from "./GlassCard";
import {
  SectionHeaderReveal,
  ScrollReveal,
  StaggerGrid,
  StaggerCard,
} from "./ScrollReveal";
import { BENTO_PILLARS } from "@/data/portfolioData";

export default function BentoPillarsSection() {
  const { pillar1, pillar2, pillar3, pillar4 } = BENTO_PILLARS;

  return (
    <section
      id="core-pillars"
      className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-8 sm:py-24 lg:px-14"
    >
      <SectionHeaderReveal
        indexCode="01 / EMPAT BIDANG KOMPETENSI"
        title={
          <>
            Penerapan Ilmu Pekerjaan Sosial dalam{" "}
            <span className="font-editorial font-normal italic text-[#A61E4D]">
              Rehabilitasi, Komunitas
            </span>{" "}
            & Tata Kelola Kelembagaan
          </>
        }
        description="Empat bidang kerja utama yang merangkum pengalaman lapangan Aulia Yasmin di instansi pemerintah pusat, pemerintah daerah, BUMN, lembaga sosial, serta perusahaan swasta."
      />

      <ScrollReveal direction="up" duration={0.75}>
        <GlassCard className="group shimmer-foil p-5 sm:p-9 lg:p-10">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FCE8EF] text-[#881337] ring-1 ring-[#A61E4D]/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 sm:h-11 sm:w-11">
                    <Users aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#881337] sm:text-xs">
                    {pillar1.badge}
                  </span>
                </div>

                <h3 className="font-heading mt-3.5 text-xl font-bold text-[#231118] sm:mt-4 sm:text-3xl lg:text-[34px] lg:leading-tight">
                  {pillar1.title}
                </h3>
                <p className="font-editorial mt-1 text-lg italic text-[#881337] sm:mt-1.5 sm:text-xl">
                  {pillar1.subtitle}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#52323F] sm:mt-4 sm:text-base">
                  {pillar1.description}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                  <div className="rounded-2xl border border-white/95 bg-white/90 p-4 shadow-2xs transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
                    <div className="flex items-center gap-2 text-[#881337]">
                      <Scale aria-hidden="true" className="h-4 w-4 shrink-0" />
                      <h4 className="text-xs font-bold uppercase tracking-wider">
                        Hubungan Kepegawaian & Mediasi
                      </h4>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#52323F] sm:mt-2 sm:text-[13px]">
                      Memfasilitasi komunikasi dua arah antar-pegawai,
                      penyelesaian kendala kerja, dan pembinaan anggota
                      organisasi.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/95 bg-white/90 p-4 shadow-2xs transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
                    <div className="flex items-center gap-2 text-[#881337]">
                      <FileCheck2
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0"
                      />
                      <h4 className="text-xs font-bold uppercase tracking-wider">
                        Tata Naskah & Administrasi
                      </h4>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#52323F] sm:mt-2 sm:text-[13px]">
                      Mengelola surat dinas, pengarsipan dokumen kebijakan, dan
                      kelengkapan berkas administrasi sesuai prosedur instansi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E5C5D3] pt-4 sm:mt-6 sm:pt-5">
                <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-[11px]">
                  Instansi Terkait:
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-2.5 sm:gap-2">
                  {pillar1.institutions.map((inst) => (
                    <span
                      key={inst}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5C5D3] bg-[#FCE8EF]/70 px-3 py-1 text-[11px] font-semibold text-[#881337] sm:px-3.5 sm:py-1.5 sm:text-xs"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-[#A61E4D]"
                      />
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/95 bg-white/90 p-2.5 shadow-sm sm:p-3">
                <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-[#F7EEF2]">
                  <Image
                    src="/img/kobu-agency-7okkFhxrxNw-unsplash.jpg"
                    alt="Koordinasi administrasi kelembagaan dan hubungan kepegawaian"
                    width={1600}
                    height={1067}
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="font-mono-code inline-block rounded-lg bg-[#231118]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FCE8EF] backdrop-blur-md sm:px-3">
                      Administrasi & SDM
                    </span>
                  </div>
                </div>

                <div className="mt-3 px-1.5 pb-0.5 sm:mt-3.5 sm:px-2 sm:pb-1">
                  <p className="font-heading text-xs font-bold text-[#231118] sm:text-base">
                    Pengelolaan Administrasi, Mediasi Internal & Dukungan
                    Kelembagaan
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-[#6E4757] sm:text-xs">
                    Sekjen Kemnaker RI · PT Dirgantara Indonesia · Pojok Sosial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      <StaggerGrid
        staggerDelay={0.14}
        className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        <StaggerCard className="h-full">
          <GlassCard className="group shimmer-foil flex h-full flex-col justify-between p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#A61E4D]/8">
            <div>
              <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F7EEF2] ring-1 ring-[#E5C5D3] sm:mb-5">
                <Image
                  src="/img/saad-ali-zZC5q-_6_8c-unsplash.jpg"
                  alt="Kegiatan pemberdayaan masyarakat dan kampanye lingkungan di lapangan"
                  width={1600}
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-2.5 bottom-2.5 left-2.5 flex items-center justify-between gap-2 sm:right-3 sm:bottom-3 sm:left-3">
                  <span className="font-mono-code rounded-lg bg-[#231118]/90 px-2.5 py-1 text-[11px] font-semibold text-[#FCE8EF] shadow-sm backdrop-blur-md sm:px-3 sm:text-xs">
                    {pillar2.badge}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:h-9 sm:w-9">
                    <Sprout aria-hidden="true" className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-lg font-bold text-[#231118] transition-colors duration-200 group-hover:text-[#881337] sm:text-2xl">
                {pillar2.title}
              </h3>
              <p className="font-editorial mt-1 text-base italic text-[#881337]">
                {pillar2.subtitle}
              </p>

              <p className="mt-2.5 text-xs leading-relaxed text-[#52323F] sm:mt-3 sm:text-sm">
                {pillar2.description}
              </p>
            </div>

            <div className="mt-5 border-t border-[#E5C5D3] pt-3.5 sm:mt-6 sm:pt-4">
              <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-[11px]">
                Instansi & Organisasi:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-2.5">
                {pillar2.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-lg border border-white/95 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#231118] shadow-2xs transition-colors hover:border-[#A61E4D]/30"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </StaggerCard>

        <StaggerCard className="h-full">
          <GlassCard className="group shimmer-foil flex h-full flex-col justify-between p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#A61E4D]/8">
            <div>
              <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F7EEF2] ring-1 ring-[#E5C5D3] sm:mb-5">
                <Image
                  src="/img/dominik-lange-VUOiQW4OeLI-unsplash.jpg"
                  alt="Pendampingan rehabilitasi sosial dan bimbingan penyandang disabilitas"
                  width={1600}
                  height={1067}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-2.5 bottom-2.5 left-2.5 flex items-center justify-between gap-2 sm:right-3 sm:bottom-3 sm:left-3">
                  <span className="font-mono-code rounded-lg bg-[#231118]/90 px-2.5 py-1 text-[11px] font-semibold text-[#FCE8EF] shadow-sm backdrop-blur-md sm:px-3 sm:text-xs">
                    {pillar3.badge}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-9 sm:w-9">
                    <HeartHandshake aria-hidden="true" className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-lg font-bold text-[#231118] transition-colors duration-200 group-hover:text-[#881337] sm:text-2xl">
                {pillar3.title}
              </h3>
              <p className="font-editorial mt-1 text-base italic text-[#881337]">
                {pillar3.subtitle}
              </p>

              <p className="mt-2.5 text-xs leading-relaxed text-[#52323F] sm:mt-3 sm:text-sm">
                {pillar3.description}
              </p>
            </div>

            <div className="mt-5 border-t border-[#E5C5D3] pt-3.5 sm:mt-6 sm:pt-4">
              <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-[11px]">
                Lembaga Rehabilitasi & Riset:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-2.5">
                {pillar3.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-lg border border-white/95 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#231118] shadow-2xs transition-colors hover:border-[#A61E4D]/30"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </StaggerCard>

        <StaggerCard className="h-full md:col-span-2 lg:col-span-1">
          <GlassCard className="group shimmer-foil flex h-full flex-col justify-between p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#A61E4D]/8">
            <div>
              <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F7EEF2] ring-1 ring-[#E5C5D3] sm:mb-5">
                <Image
                  src="/img/brooke-cagle--uHVRvDr7pg-unsplash.jpg"
                  alt="Kegiatan pengajaran, diskusi kelompok, dan pengelolaan relasi klien"
                  width={1600}
                  height={1067}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-2.5 bottom-2.5 left-2.5 flex items-center justify-between gap-2 sm:right-3 sm:bottom-3 sm:left-3">
                  <span className="font-mono-code rounded-lg bg-[#231118]/90 px-2.5 py-1 text-[11px] font-semibold text-[#FCE8EF] shadow-sm backdrop-blur-md sm:px-3 sm:text-xs">
                    {pillar4.badge}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FCE8EF] text-[#881337] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:h-9 sm:w-9">
                    <Briefcase aria-hidden="true" className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-lg font-bold text-[#231118] transition-colors duration-200 group-hover:text-[#881337] sm:text-2xl">
                {pillar4.title}
              </h3>
              <p className="font-editorial mt-1 text-base italic text-[#881337]">
                {pillar4.subtitle}
              </p>

              <p className="mt-2.5 text-xs leading-relaxed text-[#52323F] sm:mt-3 sm:text-sm">
                {pillar4.description}
              </p>
            </div>

            <div className="mt-5 border-t border-[#E5C5D3] pt-3.5 sm:mt-6 sm:pt-4">
              <span className="font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[#6E4757] sm:text-[11px]">
                Perusahaan & Organisasi:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-2.5">
                {pillar4.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="rounded-lg border border-white/95 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#231118] shadow-2xs transition-colors hover:border-[#A61E4D]/30"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </StaggerCard>
      </StaggerGrid>

      <ScrollReveal direction="scale" delay={0.08} className="mt-6 sm:mt-8">
        <div className="pearl-card rounded-2xl p-4.5 sm:p-6">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <span className="font-mono-code shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#881337] sm:text-xs">
              Daftar Keterampilan Kerja:
            </span>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.03,
                  },
                },
              }}
              className="flex flex-wrap gap-1.5 sm:gap-2"
            >
              {pillar4.marqueeSkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 10, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="font-mono-code cursor-default rounded-lg border border-white/95 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[#231118] shadow-2xs transition-all hover:border-[#A61E4D]/40 hover:bg-[#FCE8EF] hover:text-[#881337] sm:px-3.5 sm:py-1.5 sm:text-xs"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
