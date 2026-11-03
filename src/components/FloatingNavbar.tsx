"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

interface FloatingNavbarProps {
  onOpenCV: () => void;
}

const NAV_ITEMS = [
  { label: "Profil", href: "#about" },
  { label: "Kompetensi", href: "#core-pillars" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Sertifikasi", href: "#credentials" },
  { label: "Organisasi", href: "#impact" },
  { label: "Kontak", href: "#contact" },
];

export default function FloatingNavbar({ onOpenCV }: FloatingNavbarProps) {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 24;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = [
      "about",
      "core-pillars",
      "experience",
      "credentials",
      "impact",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 right-0 left-0 z-50 h-[3px] bg-gradient-to-r from-[#A61E4D] via-[#D84B7A] to-[#F29BB9]"
      />

      <header className="fixed inset-x-0 top-2.5 z-50 mx-auto flex max-w-[1440px] justify-center px-3.5 sm:top-5 sm:px-8 lg:px-14">
        <motion.nav
          initial={{ y: -24, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Navigasi Utama"
          className={`glass-pill flex w-full items-center justify-between gap-2 rounded-full px-3 py-1.5 transition-all duration-300 sm:px-4 sm:py-2 lg:px-6 lg:py-2.5 ${
            scrolled ? "shadow-xl shadow-[#52142D]/12" : ""
          }`}
        >
          <a
            href="#about"
            className="group flex min-h-[44px] min-w-0 items-center gap-2.5 rounded-full py-1 pr-2 pl-1 transition-colors hover:bg-[#FCE8EF]/70 sm:gap-3 sm:pr-3 sm:pl-1.5"
          >
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FCE8EF] text-xs font-bold tracking-wider text-[#881337] ring-1 ring-[#A61E4D]/30">
              AY
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="font-heading truncate text-xs font-bold tracking-tight text-[#231118] sm:text-sm">
                Aulia Yasmin
              </span>
              <span className="font-mono-code truncate text-[10px] font-medium text-[#881337] sm:text-[11px]">
                S.Tr.Sos. · Pekerja Sosial
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex min-h-[40px] items-center rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-200 sm:text-[13px] ${
                    isActive
                      ? "text-[#881337]"
                      : "text-[#52323F] hover:text-[#231118]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-[#FCE8EF] ring-1 ring-[#A61E4D]/30"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-2.5 sm:flex">
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-[#D4A5B8] bg-white/85 px-4 py-1.5 text-xs font-semibold text-[#231118] transition-colors hover:border-[#A61E4D] hover:bg-[#FCE8EF]"
            >
              <span>LinkedIn</span>
              <ExternalLink
                aria-hidden="true"
                className="h-3.5 w-3.5 text-[#881337]"
              />
            </a>

            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#A61E4D] px-4.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#8C163E] active:scale-[0.99]"
            >
              <FileText aria-hidden="true" className="h-3.5 w-3.5" />
              <span>Pratinjau CV</span>
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:hidden">
            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#A61E4D] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#8C163E]"
            >
              <FileText aria-hidden="true" className="h-3.5 w-3.5" />
              <span>CV</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={
                mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
              }
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-[#D4A5B8] bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#231118] hover:bg-[#FCE8EF]"
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" className="h-4 w-4 text-[#881337]" />
              ) : (
                <Menu aria-hidden="true" className="h-4 w-4 text-[#881337]" />
              )}
              <span>Menu</span>
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="pearl-card absolute top-16 right-3.5 left-3.5 rounded-2xl p-4 shadow-xl sm:right-5 sm:left-5 lg:hidden"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#DEC3D0] pb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#881337]">
                  <ShieldCheck
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                  />
                  <span className="font-mono-code text-[11px]">
                    Nomor: {PROFILE_DATA.credentialId}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#52323F]">
                  Jakarta, Indonesia
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-[44px] items-center justify-between rounded-xl bg-white/80 px-3 py-2.5 text-xs font-semibold text-[#231118] transition-colors hover:bg-[#FCE8EF] hover:text-[#881337]"
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-[#6E4757]"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#DEC3D0] pt-3">
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#D4A5B8] bg-white py-2.5 text-xs font-semibold text-[#231118] hover:bg-[#FCE8EF]"
                >
                  <span>Profil LinkedIn</span>
                  <ExternalLink
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#881337]"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#A61E4D] py-2.5 text-xs font-semibold text-white hover:bg-[#8C163E]"
                >
                  <FileText aria-hidden="true" className="h-3.5 w-3.5" />
                  <span>Pratinjau CV</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
