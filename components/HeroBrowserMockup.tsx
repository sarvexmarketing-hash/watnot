"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Lock, Sparkles, ArrowUpRight, Code2, Layers, Cpu, Globe } from "lucide-react";

export default function HeroBrowserMockup() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 cursor-pointer"
      style={{ perspective: 1400 }}
    >
      {/* Ambient Glow behind the Browser Window */}
      <div className="absolute inset-0 -inset-x-8 bg-gradient-to-r from-[#DAC5A7]/10 via-[#DAC5A7]/15 to-transparent blur-3xl rounded-full opacity-60 pointer-events-none transform -translate-y-6" />

      {/* Floating 3D Browser Window Frame */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{
          y: isHovered ? -8 : [0, -10, 0],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          y: isHovered
            ? { duration: 0.3 }
            : { repeat: Infinity, duration: 7, ease: "easeInOut" },
          opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        }}
        className="relative rounded-2xl border border-[#DAC5A7]/25 bg-[#121214]/90 backdrop-blur-2xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(218,197,167,0.08)] overflow-hidden"
      >
        {/* Subtle Metallic Top Bezel Highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#DAC5A7]/60 to-transparent" />

        {/* ── Browser Header Bar ── */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#343230]/70 bg-[#0E0E0E]/90 select-none">
          {/* Window Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80 inline-block border border-black/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80 inline-block border border-black/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80 inline-block border border-black/20" />
          </div>

          {/* Minimalist Address Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-[#DAC5A7]/20 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#DAC5A7]/80">
            <Lock className="w-2.5 h-2.5 text-[#DAC5A7]/60" />
            <span className="text-[#DAC5A7]/90 font-medium">watnot.technologies</span>
            <span className="text-[#DAC5A7]/40 hidden sm:inline">/selected-systems</span>
          </div>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#DAC5A7]/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">LIVE CRAFT</span>
          </div>
        </div>

        {/* ── Inside: Premium Agency Website UI ── */}
        <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-b from-[#141416] via-[#0E0E0E] to-[#0A0A0A] overflow-hidden select-none">
          {/* Subtle Grid Texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#DAC5A7 1px, transparent 1px), linear-gradient(90deg, #DAC5A7 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Inner Mini Navigation */}
          <div className="flex items-center justify-between pb-6 border-b border-[#343230]/50 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-[#DAC5A7]">watnot.</span>
              <span className="text-[10px] font-mono tracking-widest text-[#DAC5A7]/40 px-2 py-0.5 rounded border border-[#343230]">
                STUDIO v2.4
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] uppercase text-[#DAC5A7]/60">
              <span className="text-[#DAC5A7]">01 BESPOKE UI</span>
              <span>02 NEXT.JS</span>
              <span>03 WEBGL</span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#DAC5A7] border border-[#DAC5A7]/30 px-2.5 py-1 rounded-full">
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>

          {/* Inner Hero Showcase */}
          <div className="pt-8 sm:pt-10 pb-6 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DAC5A7]/70" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#DAC5A7]/70">
                DIGITAL ARCHITECTURE &amp; INTERACTIVE DESIGN
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#DAC5A7] tracking-tight leading-tight max-w-2xl">
              <span>Architecting high-converting digital spaces with </span>
              <span className="editorial-italic font-normal text-white">obsessive precision.</span>
            </h3>

            {/* Showcase Floating Feature Modules inside the Browser */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {/* Module 1: WebGL Fluid Engine */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl border border-[#343230]/80 bg-[#121214]/80 backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-wider text-[#DAC5A7]/50">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#DAC5A7]" />
                    <span>ENGINE</span>
                  </div>
                  <span className="text-emerald-400 font-medium">60 FPS</span>
                </div>
                <div className="text-lg font-light text-[#DAC5A7] tracking-tight">Fluid WebGL</div>
                <p className="text-[11px] text-[#DAC5A7]/60 mt-1 leading-snug">
                  Shader-level domain-warped liquid physics and real-time interaction.
                </p>
                {/* Micro Visualizer */}
                <div className="flex items-end gap-1 mt-3 h-4">
                  {[40, 75, 55, 90, 65, 80, 100, 60, 85].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 bg-[#DAC5A7]/30 rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Module 2: Design Systems */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl border border-[#343230]/80 bg-[#121214]/80 backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-wider text-[#DAC5A7]/50">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#DAC5A7]" />
                    <span>SYSTEMS</span>
                  </div>
                  <span className="text-[#DAC5A7]">100% SCALE</span>
                </div>
                <div className="text-lg font-light text-[#DAC5A7] tracking-tight">Editorial Design</div>
                <p className="text-[11px] text-[#DAC5A7]/60 mt-1 leading-snug">
                  Custom luxury typographic hierarchy paired with responsive grid geometry.
                </p>
                {/* Palette Swatches */}
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="w-4 h-4 rounded-full bg-[#0E0E0E] border border-[#343230]" />
                  <span className="w-4 h-4 rounded-full bg-[#343230] border border-[#DAC5A7]/30" />
                  <span className="w-4 h-4 rounded-full bg-[#DAC5A7]" />
                  <span className="w-4 h-4 rounded-full bg-white" />
                </div>
              </motion.div>

              {/* Module 3: Full-Stack Speed */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl border border-[#343230]/80 bg-[#121214]/80 backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-wider text-[#DAC5A7]/50">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#DAC5A7]" />
                    <span>CORE</span>
                  </div>
                  <span className="text-[#DAC5A7] font-medium">NEXT.JS 14</span>
                </div>
                <div className="text-lg font-light text-[#DAC5A7] tracking-tight">Zero-Bloat Code</div>
                <p className="text-[11px] text-[#DAC5A7]/60 mt-1 leading-snug">
                  Sub-second paint, server-side streaming, and production reliability.
                </p>
                {/* Performance pill */}
                <div className="flex items-center gap-2 mt-3 text-[10px] font-mono text-[#DAC5A7]/70">
                  <span className="text-emerald-400">● 99</span> Performance
                  <span className="text-emerald-400">● 100</span> SEO
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Live Indicator footer */}
          <div className="pt-4 mt-4 border-t border-[#343230]/40 flex items-center justify-between text-[10px] font-mono text-[#DAC5A7]/50">
            <span>DRAG &amp; HOVER TO TILT 3D PERSPECTIVE</span>
            <span className="hidden sm:inline">WATNOT TECHNOLOGIES — 2026</span>
          </div>
        </div>

        {/* Bottom Glass Reflection Fade */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating Ground Shadow */}
      <div className="w-3/4 mx-auto h-8 bg-black/80 blur-2xl rounded-full transform translate-y-3 pointer-events-none" />
    </div>
  );
}
