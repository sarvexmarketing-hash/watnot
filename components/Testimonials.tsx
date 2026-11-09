"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Minimal brand symbol generator to recreate the bespoke logo marks in the reference site
  const renderBrandIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        // Sonic: Concentric rounded lines
        return (
          <svg className="w-7 h-7 text-[#DAC5A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="6" width="20" height="12" rx="6" />
            <rect x="6" y="9" width="12" height="6" rx="3" />
          </svg>
        );
      case 1:
        // Minimal stylized 'N'
        return (
          <svg className="w-7 h-7 text-[#DAC5A7]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h4.5l7 10.5V4H20v16h-4.5L8.5 9.5V20H4V4z" />
          </svg>
        );
      case 2:
        // Stars geometric spark
        return (
          <svg className="w-7 h-7 text-[#DAC5A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
          </svg>
        );
      default:
        // Solar rays
        return (
          <svg className="w-7 h-7 text-[#DAC5A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12" />
          </svg>
        );
    }
  };

  return (
    <section id="testimonials" className="py-28 md:py-40 relative border-t border-[#DAC5A7]/10 bg-[#0E0E0E] text-[#DAC5A7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hero-headline font-light tracking-tight text-[#DAC5A7]"
          >
            <span className="block font-normal">What my</span>
            <span className="block editorial-italic font-normal opacity-95">clients say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-[#DAC5A7]/70 font-light leading-relaxed"
          >
            See what my clients have to say about working with me and the results I helped them achieve.
          </motion.p>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
              className={`p-3 rounded-full border transition-all duration-200 ${
                canScrollLeft
                  ? "border-[#343230] text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E]"
                  : "border-[#343230]/40 text-[#DAC5A7]/20 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
              className={`p-3 rounded-full border transition-all duration-200 ${
                canScrollRight
                  ? "border-[#343230] text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E]"
                  : "border-[#343230]/40 text-[#DAC5A7]/20 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Testimonials Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="min-w-[320px] sm:min-w-[440px] md:min-w-[500px] lg:min-w-[540px] max-w-[560px] snap-start shrink-0 rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 bg-[#121214] border border-[#2a2928] hover:border-[#DAC5A7]/40 transition-all duration-500 flex flex-col justify-between shadow-xl shadow-black/40 group"
            >
              <div>
                {/* Brand Logo Symbol */}
                <div className="mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {renderBrandIcon(idx)}
                </div>

                {/* Headline */}
                <h4 className="text-xl sm:text-2xl font-light text-[#DAC5A7] tracking-tight leading-snug">
                  {t.headline}
                </h4>

                {/* Quote */}
                <p className="mt-5 text-sm sm:text-base text-[#DAC5A7]/75 font-light leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-10 pt-6 border-t border-[#343230] flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#343230] bg-[#1c1c1f]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover object-center filter grayscale group-hover:filter-none transition-all duration-500"
                    sizes="48px"
                  />
                </div>

                <div>
                  <h5 className="text-base font-normal text-[#DAC5A7]">
                    {t.name}
                  </h5>
                  <p className="text-xs text-[#DAC5A7]/60 font-light flex items-center gap-1.5 mt-0.5">
                    <span>{t.role}</span>
                    <span className="w-1 h-1 rounded-full bg-[#DAC5A7]/40" />
                    <span className="font-medium text-[#DAC5A7]/90">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
