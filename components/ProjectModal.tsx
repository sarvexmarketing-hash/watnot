"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ProjectModal({ project, onClose, onOpenContact }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#141416] border border-[#DAC5A7]/25 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#DAC5A7] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/80 text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#DAC5A7]/60 mb-3">
              <span>{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-[#DAC5A7]/40" />
              <span>{project.client}</span>
              <span className="w-1 h-1 rounded-full bg-[#DAC5A7]/40" />
              <span>{project.year}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#DAC5A7] tracking-tight">
              {project.title}
            </h3>

            <p className="mt-4 text-base sm:text-lg text-[#DAC5A7]/80 font-light leading-relaxed max-w-2xl">
              {project.headline}
            </p>

            {/* Hero Image */}
            <div className="mt-8 relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#1c1c1f] border border-[#DAC5A7]/15">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Case Study Details */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-7">
                <h4 className="text-xs uppercase tracking-widest text-[#DAC5A7]/50 font-medium mb-3">
                  The Brief &amp; Execution
                </h4>
                <p className="text-base text-[#DAC5A7]/85 font-light leading-relaxed">
                  {project.description}
                </p>

                <h4 className="text-xs uppercase tracking-widest text-[#DAC5A7]/50 font-medium mt-8 mb-4">
                  Scope of Deliverables
                </h4>
                <ul className="space-y-3">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#DAC5A7]/90 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#DAC5A7] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics & Tags Column */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#DAC5A7]/50 font-medium mb-4">
                    Impact &amp; Results
                  </h4>
                  {project.metrics && (
                    <div className="grid grid-cols-1 gap-3">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-4 rounded-xl bg-[#0E0E0E]/60 border border-[#DAC5A7]/15 flex items-center justify-between"
                        >
                          <span className="text-xs text-[#DAC5A7]/60 uppercase tracking-wider">
                            {m.label}
                          </span>
                          <span className="font-mono text-xl font-light text-[#DAC5A7]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/40 text-[#DAC5A7]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#DAC5A7]/15">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="w-full py-4 rounded-full bg-[#DAC5A7] text-[#0E0E0E] font-medium text-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

