"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

interface FloatingNavbarProps {
  onOpenCV: () => void;
}

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Core Pillars", href: "#core-pillars" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Impact & Volunteer", href: "#impact" },
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

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl justify-center px-4 sm:top-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Primary Navigation"
        className={`glass-pill flex w-full items-center justify-between rounded-full px-3 py-2 transition-all duration-300 sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5 ${
          scrolled ? "shadow-2xl shadow-black/60" : ""
        }`}
      >
        {/* Brand Monogram / Identity */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 rounded-full pr-2 pl-1.5 py-1 transition-colors hover:bg-white/5"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/25 via-teal-500/20 to-indigo-500/25 text-xs font-bold tracking-wider text-emerald-300 ring-1 ring-white/20">
            AY
            <span
              title="Licensed Certified Social Worker"
              className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0B111E]"
            />
          </span>
          <div className="flex flex-col">
            <span className="font-heading text-xs font-bold tracking-tight text-slate-100 sm:text-sm">
              Aulia Yasmin
            </span>
            <span className="font-mono-code text-[10px] text-emerald-400/90">
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
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate-300/80 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.09] ring-1 ring-white/15"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-indigo-400/40 hover:bg-indigo-500/15 hover:text-white"
          >
            <span>Connect on LinkedIn</span>
            <ExternalLink className="h-3.5 w-3.5 text-indigo-300" />
          </a>

          <button
            type="button"
            onClick={onOpenCV}
            className="group relative inline-flex cursor-pointer items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500/90 via-teal-500/90 to-indigo-500/90 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/20 ring-1 ring-white/25 transition-all hover:scale-[1.02] hover:shadow-emerald-500/35 active:scale-[0.99]"
          >
            <FileText className="h-3.5 w-3.5 transition-transform group-hover:-rotate-6" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={onOpenCV}
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/20"
          >
            <FileText className="h-3 w-3" />
            <span>CV</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="glass-pill absolute top-16 right-4 left-4 rounded-3xl p-4 lg:hidden"
          >
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2 text-xs text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-mono-code">
                  ID: {PROFILE_DATA.credentialId}
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Jakarta, ID</span>
            </div>

            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>{item.label}</span>
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400/70" />
                </a>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-medium text-slate-100"
              >
                <span>LinkedIn</span>
                <ExternalLink className="h-3.5 w-3.5 text-indigo-300" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500 py-2.5 text-xs font-semibold text-white"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Download CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
