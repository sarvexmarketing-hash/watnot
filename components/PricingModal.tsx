"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowUpRight, Sparkles } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function PricingModal({ isOpen, onClose, onOpenContact }: PricingModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const tiers = [
    {
      name: "Starter Design",
      price: "$3,500",
      description: "Ideal for early-stage founders & studios looking for a rapid high-impact landing page.",
      timeline: "2 Weeks Turnaround",
      features: [
        "1 Bespoke Landing Page",
        "Mobile-First Responsive Layout",
        "Framer Motion Transitions",
        "Basic SEO & Meta Setup",
        "1 Month Post-Launch Support",
      ],
      popular: false,
    },
    {
      name: "Full Brand & Web",
      price: "$6,800",
      description: "Our signature multi-page flagship experience engineered for conversion and authority.",
      timeline: "3–4 Weeks Turnaround",
      features: [
        "Up to 6 Custom Pages & CMS",
        "Comprehensive Design System",
        "Advanced Interactive Animations",
        "Technical SEO & Speed 95+",
        "Personal Video Onboarding",
        "3 Months Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise Custom",
      price: "$12,500+",
      description: "Tailored full-stack product solutions, complex web applications, and ongoing retainers.",
      timeline: "6–8 Weeks Turnaround",
      features: [
        "End-to-End Next.js Architecture",
        "Custom Headless CMS & APIs",
        "Custom 3D / WebGL Components",
        "Full Organic SEO Domination",
        "Dedicated Weekly Strategy Calls",
      ],
      popular: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#141416] border border-[#DAC5A7]/25 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#DAC5A7] z-10"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/80 text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium block mb-2">
                Investment &amp; Packages
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-[#DAC5A7] tracking-tight">
                Transparent Pricing
              </h3>
              <p className="mt-2 text-sm text-[#DAC5A7]/70 font-light">
                Fixed-price packages with zero hidden fees. Built with craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                    tier.popular
                      ? "bg-[#18181b] border-[#DAC5A7] shadow-xl shadow-[#DAC5A7]/10"
                      : "bg-[#0E0E0E]/60 border-[#DAC5A7]/15"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#DAC5A7] text-[#0E0E0E] text-[11px] font-medium uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-normal text-[#DAC5A7]">{tier.name}</h4>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl font-light text-[#DAC5A7]">
                        {tier.price}
                      </span>
                      <span className="text-xs text-[#DAC5A7]/50 font-light">/ project</span>
                    </div>
                    <p className="mt-3 text-xs text-[#DAC5A7]/70 font-light leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#DAC5A7]/15 text-xs text-[#DAC5A7]/60 font-mono">
                      {tier.timeline}
                    </div>

                    <ul className="mt-6 space-y-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-[#DAC5A7]/85 font-light">
                          <Check className="w-3.5 h-3.5 text-[#DAC5A7] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className={`mt-8 w-full py-3 rounded-full text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      tier.popular
                        ? "bg-[#DAC5A7] text-[#0E0E0E] hover:bg-white"
                        : "border border-[#DAC5A7]/30 text-[#DAC5A7] hover:border-[#DAC5A7]"
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

