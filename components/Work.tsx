"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { projects, Project } from "@/lib/projects";

interface WorkProps {
  onSelectProject: (project: Project) => void;
}

export default function Work({ onSelectProject }: WorkProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="py-24 md:py-36 relative border-t border-[#DAC5A7]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium block mb-3"
            >
              Portfolio &amp; Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-headline font-light text-[#DAC5A7]"
            >
              Selected Work
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#DAC5A7]/30 text-sm font-medium text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E] transition-all duration-300"
            >
              <span>{showAll ? "Show Less" : "See all"}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Large Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-14">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: (index % 2) * 0.15 }}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer flex flex-col ${
                    isEven ? "md:translate-y-8" : ""
                  }`}
                >
                  {/* Visual Card Container */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#151517] border border-[#DAC5A7]/15 p-2 sm:p-3 transition-all duration-700 group-hover:border-[#DAC5A7]/50 shadow-xl shadow-black/40">
                    <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden bg-[#1c1c1f]">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category}`}
                        fill
                        className="object-cover object-center filter grayscale contrast-[1.05] brightness-90 group-hover:scale-105 group-hover:filter-none group-hover:brightness-100 transition-all duration-1000 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />

                      {/* Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/90 via-[#0E0E0E]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                      {/* Hover Overlay Action Pill */}
                      <div className="absolute top-4 right-4 md:top-6 md:right-6">
                        <div className="p-3 rounded-full bg-[#0E0E0E]/80 backdrop-blur-md border border-[#DAC5A7]/30 text-[#DAC5A7] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Bottom Info Pill inside Image */}
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#0E0E0E]/80 backdrop-blur-md border border-[#DAC5A7]/25 text-xs text-[#DAC5A7] font-medium tracking-wide">
                          {project.year}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#0E0E0E]/80 backdrop-blur-md border border-[#DAC5A7]/20 text-xs text-[#DAC5A7]/80">
                          {project.client}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Meta Info */}
                  <div className="mt-5 sm:mt-6 flex items-baseline justify-between px-2">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-[#DAC5A7] tracking-tight group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                        <span>{project.title}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DAC5A7] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="mt-1 text-sm text-[#DAC5A7]/65 font-light tracking-wide">
                        {project.category}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[#DAC5A7]/50 group-hover:text-[#DAC5A7] transition-colors">
                        View Project
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 p-8 md:p-12 rounded-2xl md:rounded-3xl bg-[#141416] border border-[#DAC5A7]/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#DAC5A7]/30 bg-[#DAC5A7]/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#DAC5A7]" />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-light text-[#DAC5A7]">
                Concept, Design, and Development. All-in-one.
              </h4>
              <p className="text-sm text-[#DAC5A7]/70 font-light mt-1">
                Explore custom tailored solutions engineered for your brand&apos;s distinct trajectory.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="shrink-0 px-6 py-3 rounded-full bg-[#DAC5A7] text-[#0E0E0E] text-sm font-medium hover:bg-white transition-colors duration-300"
          >
            {showAll ? "Collapse Showcase" : "Browse All Projects"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

