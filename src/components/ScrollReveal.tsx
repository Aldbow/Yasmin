"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionHeaderRevealProps {
  indexCode: string;
  title: React.ReactNode;
  description?: string;
  rightSlot?: React.ReactNode;
  className?: string;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SectionHeaderReveal({
  indexCode,
  title,
  description,
  rightSlot,
  className = "mb-7 sm:mb-10",
}: SectionHeaderRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25, margin: "-30px 0px -30px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={`border-b border-[#E5C5D3] pb-4 sm:pb-6 ${className}`}
    >
      {/* 1. Index Number + Self-Drawing Hairline Rule */}
      <div className="flex items-center gap-3">
        <motion.span
          variants={{
            hidden: { opacity: 0, x: -20, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.55, ease: EASE_OUT_EXPO },
            },
          }}
          className="font-mono-code text-[11px] font-semibold tracking-wider text-[#881337] sm:text-xs"
        >
          {indexCode}
        </motion.span>

        <motion.span
          aria-hidden="true"
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.85, ease: EASE_OUT_EXPO },
            },
          }}
          style={{ transformOrigin: "left" }}
          className="h-px flex-1 bg-gradient-to-r from-[#A61E4D]/50 via-[#DEC3D0] to-transparent"
        />
      </div>

      {/* 2. Title, Description & Optional Right Controls */}
      <div
        className={`mt-2.5 sm:mt-3 ${
          rightSlot
            ? "flex flex-col justify-between gap-4 sm:gap-6 lg:flex-row lg:items-end"
            : ""
        }`}
      >
        <div className="max-w-3xl">
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                rotateX: 12,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                transition: { duration: 0.65, ease: EASE_OUT_EXPO },
              },
            }}
            style={{ transformPerspective: 900 }}
            className="font-heading text-2xl leading-snug font-bold tracking-tight text-[#231118] sm:text-4xl"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: EASE_OUT_EXPO },
                },
              }}
              className="mt-2 text-xs leading-relaxed text-[#52323F] sm:mt-2.5 sm:text-base"
            >
              {description}
            </motion.p>
          )}
        </div>

        {rightSlot && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.96, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { duration: 0.6, ease: EASE_OUT_EXPO },
              },
            }}
          >
            {rightSlot}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  amount = 0.18,
}: ScrollRevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return {
          opacity: 0,
          x: -44,
          y: 16,
          scale: 0.96,
          rotateY: -6,
          filter: "blur(8px)",
        };
      case "right":
        return {
          opacity: 0,
          x: 44,
          y: 16,
          scale: 0.96,
          rotateY: 6,
          filter: "blur(8px)",
        };
      case "scale":
        return {
          opacity: 0,
          y: 28,
          scale: 0.92,
          filter: "blur(10px)",
        };
      case "up":
      default:
        return {
          opacity: 0,
          y: 42,
          scale: 0.96,
          rotateX: 8,
          filter: "blur(8px)",
        };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: false, amount, margin: "-35px 0px -35px 0px" }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      style={{ transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.12,
  amount = 0.15,
}: StaggerGridProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.04,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount, margin: "-35px 0px -35px 0px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerCardProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerCard({ children, className = "" }: StaggerCardProps) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.94,
      rotateX: 10,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.68,
        ease: EASE_OUT_EXPO,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{ transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

