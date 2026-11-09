"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, Wrench, Sparkles } from "lucide-react";
import { Service } from "@/lib/data";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ServiceModal({ service, onClose, onOpenContact }: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#141416] border border-[#DAC5A7]/25 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#DAC5A7] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/80 text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#DAC5A7]/60 mb-2">
              <span className="font-mono text-base text-[#DAC5A7]">{service.number}</span>
              <span>/ 03 Service Offering</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-light text-[#DAC5A7] tracking-tight">
              {service.title}
            </h3>

            <p className="mt-4 text-base sm:text-lg text-[#DAC5A7]/80 font-light leading-relaxed">
              {service.description}
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#0E0E0E]/60 border border-[#DAC5A7]/15">
              <h4 className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-3">
                Approach &amp; Methodology
              </h4>
              <p className="text-sm sm:text-base text-[#DAC5A7]/85 font-light leading-relaxed">
                {service.detail}
              </p>
            </div>

            {/* Features list */}
            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-4">
                What&apos;s Included
              </h4>
              <div className="space-y-3">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-[#DAC5A7]/90 font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#DAC5A7] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools list */}
            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-3">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/40 text-[#DAC5A7]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-[#DAC5A7]/15">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full py-4 rounded-full bg-[#DAC5A7] text-[#0E0E0E] font-medium text-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
              >
                <span>Inquire About {service.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

