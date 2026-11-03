"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { label: "Rekam Jejak", href: "#experience" },
  { label: "Kredensial", href: "#credentials" },
  { label: "Dampak Sosial", href: "#impact" },
  { label: "Kontak", href: "#contact" },
];

export default function FloatingNavbar({ onOpenCV }: FloatingNavbarProps) {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = [
        "about",
        "core-pillars",
        "experience",
        "credentials",
        "impact",
        "contact",
      ];
      const scrollPosition = window.scrollY + 240;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header className="fixed inset-x-0 top-3 z-50 mx-auto flex max-w-6xl justify-center px-4 sm:top-5">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Navigasi Utama"
        className={`glass-pill flex w-full items-center justify-between rounded-full px-3 py-1.5 transition-all duration-300 lg:w-auto lg:gap-3 lg:px-4 lg:py-2 ${
          scrolled ? "shadow-lg shadow-[#52142D]/10" : ""
        }`}
      >
        {/* Brand Monogram / Identity */}
        <a
          href="#about"
          className="group flex min-h-[44px] items-center gap-2.5 rounded-full py-1 pr-3 pl-1.5 transition-colors hover:bg-[#FCE8EF]/70"
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FCE8EF] text-xs font-bold tracking-wider text-[#881337] ring-1 ring-[#A61E4D]/30">
            AY
          </span>
          <div className="flex flex-col">
            <span className="font-heading text-xs font-bold tracking-tight text-[#231118] sm:text-sm">
              Aulia Yasmin
            </span>
            <span className="font-mono-code text-[11px] font-medium text-[#881337]">
              S.Tr.Sos. · LCSW
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative inline-flex min-h-[40px] items-center rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[#881337]"
                    : "text-[#52323F] hover:text-[#231118]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-[#FCE8EF] ring-1 ring-[#A61E4D]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Buttons: Connect on LinkedIn & Download CV */}
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-[#8A5A6E] bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#231118] transition-colors hover:border-[#A61E4D] hover:bg-[#FCE8EF]"
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
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#A61E4D] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#8C163E] active:scale-[0.99]"
          >
            <FileText aria-hidden="true" className="h-3.5 w-3.5" />
            <span>Ringkasan CV</span>
          </button>
        </div>

        {/* Mobile Menu Trigger (44x44px tap targets + visible label per R-03) */}
        <div className="flex items-center gap-2 sm:hidden">
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
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-[#8A5A6E] bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#231118] hover:bg-[#FCE8EF]"
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

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pearl-card absolute top-18 right-4 left-4 rounded-2xl p-4 shadow-xl lg:hidden"
          >
            <div className="mb-3 flex items-center justify-between border-b border-[#DEC3D0] pb-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#881337]">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                <span className="font-mono-code">
                  ID: {PROFILE_DATA.credentialId}
                </span>
              </div>
              <span className="text-xs font-medium text-[#52323F]">
                Jakarta, ID
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-[#231118] transition-colors hover:bg-[#FCE8EF] hover:text-[#881337]"
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    aria-hidden="true"
                    className="h-4 w-4 text-[#6E4757]"
                  />
                </a>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-[#DEC3D0] pt-3">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-[#8A5A6E] bg-white py-2.5 text-xs font-semibold text-[#231118] hover:bg-[#FCE8EF]"
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
                className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-[#A61E4D] py-2.5 text-xs font-semibold text-white hover:bg-[#8C163E]"
              >
                <FileText aria-hidden="true" className="h-3.5 w-3.5" />
                <span>Lihat & Unduh CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
