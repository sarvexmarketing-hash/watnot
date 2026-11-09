"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBrowserMockup from "./HeroBrowserMockup";

interface AboutProps {
  onOpenContact: () => void;
}

export default function About({ onOpenContact }: AboutProps) {
  const { scrollYProgress } = useScroll();
  const xMarquee = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="about" className="py-24 md:py-36 relative bg-[#0E0E0E] text-[#DAC5A7] overflow-hidden">
      {/* Background Giant Kinetic Typography Marquee */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none py-4">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap items-center text-7xl sm:text-9xl md:text-[144px] lg:text-[180px] font-light tracking-tight text-[#DAC5A7] opacity-80"
          style={{ lineHeight: "0.9" }}
        >
          <span className="font-normal mr-8">Watnot</span>
          <span className="editorial-italic mr-16">Technologies</span>
          <span className="font-normal mr-8">Watnot</span>
          <span className="editorial-italic mr-16">Technologies</span>
          <span className="font-normal mr-8">Watnot</span>
          <span className="editorial-italic mr-16">Technologies</span>
        </motion.div>
      </div>

      {/* Centerpiece: Interactive 3D Agency Website Mockup */}
      <div className="relative -mt-12 sm:-mt-20 md:-mt-28 z-20 max-w-5xl mx-auto px-4 sm:px-6">
        <HeroBrowserMockup />
      </div>

      {/* Editorial Text Row: Split Left & Right Columns */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#DAC5A7] leading-[1.1] tracking-tight"
            >
              <span className="block font-normal">A website that leaves</span>
              <span className="block editorial-italic font-normal mt-1 opacity-95">
                a lasting impression!
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Personal Bio Text */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl text-[#DAC5A7]/75 font-light leading-relaxed"
            >
              Hi, we are Watnot Technologies — a creative digital studio specializing in premium web
              design, development, and SEO services. We are passionate about creating
              unique and effective solutions for our clients, and we bring a personal
              touch to every project. Let&apos;s work together to bring your vision to life!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
