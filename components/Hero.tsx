"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import LiquidSmoke from "./LiquidSmoke";

interface HeroProps {
  onExploreServices: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onExploreServices }: HeroProps) {
  // Client logos replicating the authentic Framer design in Image 8
  const logos = [
    {
      id: "logo-text",
      render: (
        <span className="font-extrabold tracking-[0.18em] text-lg sm:text-xl font-sans text-[#DAC5A7]/60 group-hover:text-[#DAC5A7] transition-colors">
          LOGO
        </span>
      ),
    },
    {
      id: "maze",
      render: (
        <svg
          className="h-7 w-7 text-[#DAC5A7]/50 group-hover:text-[#DAC5A7] transition-colors"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <circle cx="20" cy="20" r="16" opacity="0.35" />
          <circle cx="20" cy="20" r="11" opacity="0.7" />
          <circle cx="20" cy="20" r="6" />
          <path d="M20 9v4 M20 27v4 M9 20h4 M27 20h4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "infinity",
      render: (
        <svg
          className="h-6 w-11 text-[#DAC5A7]/50 group-hover:text-[#DAC5A7] transition-colors"
          viewBox="0 0 60 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        >
          <path d="M15 15 C10 6, 6 6, 6 15 C6 24, 10 24, 15 15 C20 6, 25 6, 30 15 C35 24, 40 24, 45 15 C50 6, 54 6, 54 15 C54 24, 50 24, 45 15" />
        </svg>
      ),
    },
    {
      id: "logoipsum",
      render: (
        <div className="flex items-center tracking-[0.16em] font-bold text-base sm:text-lg text-[#DAC5A7]/60 group-hover:text-[#DAC5A7] uppercase font-sans transition-colors">
          <span>L</span>
          <span className="relative inline-block px-[1px]">
            O
            <span className="absolute inset-0 flex items-center justify-center -rotate-45 font-light text-[#DAC5A7]/60">
              /
            </span>
          </span>
          <span>GOIPSUM</span>
        </div>
      ),
    },
    {
      id: "prism",
      render: (
        <svg
          className="h-6 w-6 text-[#DAC5A7]/50 group-hover:text-[#DAC5A7] transition-colors"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        >
          <polygon points="16,3 29,10 29,22 16,29 3,22 3,10" />
          <line x1="16" y1="3" x2="16" y2="29" opacity="0.4" />
          <line x1="3" y1="10" x2="29" y2="22" opacity="0.4" />
          <line x1="29" y1="10" x2="3" y2="22" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: "vertex",
      render: (
        <div className="flex items-center gap-2 font-mono text-sm tracking-[0.25em] text-[#DAC5A7]/50 group-hover:text-[#DAC5A7] uppercase transition-colors">
          <span className="w-2 h-2 rounded-full border border-current" />
          <span>VERTEX</span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-10 md:pt-36 md:pb-12 flex flex-col justify-between overflow-hidden">
      {/* ✦ Interactive WebGL Liquid Smoke Simulation (aidesigner.ai) ✦ */}
      <LiquidSmoke
        colors={["#475569", "#94a3b8", "#334155"]}
        backgroundColor="#0E0E0E"
        speed={0.35}
        scale={1.4}
        warp={0.85}
        rise={0.4}
        swirl={0.5}
        contrast={1.2}
        softness={0.72}
        mouseStrength={0.75}
        bgAlpha={1.0}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Ambient Dark Overlays to ensure editorial typography stands out with cinematic contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/30 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0E0E0E] pointer-events-none z-[1]" />

      {/* Main Headline & Supporting CTAs (pointer-events-none so mouse movement reaches background) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center relative z-10 pointer-events-none">
        <div className="text-center pt-6 md:pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-headline font-light tracking-tight text-[#DAC5A7] select-none"
          >
            <span className="block font-normal">Web Designer</span>
            <span className="block editorial-italic font-normal text-[#DAC5A7] opacity-95">
              &amp; Developer
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#DAC5A7]/80 font-light leading-relaxed drop-shadow-md"
          >
            Premium Web Design, Development, and SEO services to help your business stand out.
          </motion.p>

          {/* Authentic Framer CTA Button: ( ↓ ) MY SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-12 flex justify-center pointer-events-auto"
          >
            <button
              onClick={onExploreServices}
              aria-label="Scroll down to services"
              className="group inline-flex items-center gap-3.5 text-xs sm:text-sm font-medium tracking-[0.24em] uppercase text-[#DAC5A7]/90 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DAC5A7]/35 bg-black/30 backdrop-blur-sm group-hover:border-[#DAC5A7] group-hover:bg-[#DAC5A7]/15 flex items-center justify-center transition-all duration-300 shadow-lg">
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DAC5A7] group-hover:translate-y-0.5 transition-transform duration-300" />
              </span>
              <span className="tracking-[0.22em]">MY SERVICES</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Authentic Client Logos Marquee (matching Framer reference in Image 8) */}
      <div className="mt-12 border-y border-[#343230]/40 py-5 bg-[#0E0E0E]/60 backdrop-blur-md overflow-hidden relative z-10 pointer-events-auto">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(4)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-12 sm:gap-16 lg:gap-20 mx-6 sm:mx-8">
              {logos.map((logo, logoIdx) => (
                <div
                  key={`${groupIdx}-${logoIdx}`}
                  className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {logo.render}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
