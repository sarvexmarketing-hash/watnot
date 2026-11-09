"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface CTAProps {
  onOpenContact: () => void;
}

export default function CTA({ onOpenContact }: CTAProps) {
  return (
    <section className="py-28 md:py-44 relative border-t border-[#DAC5A7]/10 overflow-hidden bg-[#0A0A0A]">
      {/* Background Animated Big Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none select-none opacity-[0.035] overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee-slow font-display text-[12vw] font-bold uppercase tracking-tight text-[#DAC5A7]">
          <span>Let&apos;s create your Website • Let&apos;s create your Website •&nbsp;</span>
          <span>Let&apos;s create your Website • Let&apos;s create your Website •&nbsp;</span>
        </div>
      </div>

      {/* Radial soft illumination */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(218, 197, 167, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Project in mind label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DAC5A7]/25 bg-[#141416]/70 backdrop-blur-sm text-xs md:text-sm text-[#DAC5A7]/80 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DAC5A7]" />
          <span>Project in mind?</span>
        </motion.div>

        {/* Large Statement Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-headline font-light tracking-tight text-[#DAC5A7]"
        >
          <span className="block font-normal">Let&apos;s make your</span>
          <span className="block editorial-italic font-normal opacity-95">Website shine</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 md:mt-8 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-[#DAC5A7]/70 font-light leading-relaxed"
        >
          Premium web design, development, and SEO services to help your business stand out.
        </motion.p>

        {/* Get in touch CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 md:mt-12 flex justify-center"
        >
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#DAC5A7] text-[#0E0E0E] font-medium text-base md:text-lg tracking-wide hover:bg-white transition-all duration-300 shadow-2xl shadow-[#DAC5A7]/20 hover:scale-105 active:scale-95"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

