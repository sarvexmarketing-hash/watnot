"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigationLinks } from "@/lib/data";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);

  // Dynamically compute current month and upcoming months
  const availabilitySchedule = React.useMemo(() => {
    const list = [];
    const now = new Date();
    for (let i = 0; i < 3; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const monthName = d.toLocaleString("en-US", { month: "long" }).toUpperCase();
      let status = "2 SPOTS";
      let isAvailable = true;
      if (i === 0) {
        status = "NOT AVAILABLE";
        isAvailable = false;
      } else if (i === 1) {
        status = "1 SPOT";
        isAvailable = true;
      } else {
        status = "2 SPOTS";
        isAvailable = true;
      }
      list.push({ month: monthName, status, isAvailable });
    }
    return list;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ["services", "work", "process", "testimonials", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Floating / Fixed Nav Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0E0E0E]/85 backdrop-blur-md border-b border-[#343230]/60 py-4 shadow-2xl shadow-black/60"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo: watnot. */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className="text-2xl md:text-3xl font-light tracking-tight text-[#DAC5A7] hover:opacity-85 transition-opacity"
          >
            <span>watnot</span>
            <span className="text-[#DAC5A7]">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-[#DAC5A7]"
                      : "text-[#DAC5A7]/65 hover:text-[#DAC5A7]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Primary CTA: GET A FREE DEMO */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 rounded-md bg-[#DAC5A7] text-[#0E0E0E] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white transition-all duration-300 shadow-md shadow-black/20"
            >
              GET A FREE DEMO
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#DAC5A7] rounded-lg border border-[#343230] hover:border-[#DAC5A7]/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fixed Bottom-Left Availability Schedule & Available Badge (matching reference website) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex flex-col items-start gap-3">
        <AnimatePresence>
          {isAvailabilityOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={onOpenContact}
              className="w-64 sm:w-72 p-5 sm:p-6 rounded-xl border border-[#343230]/80 bg-[#0E0E0E]/95 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-[#DAC5A7]/40 transition-colors"
            >
              <div className="space-y-4">
                {availabilitySchedule.map((item) => (
                  <div
                    key={item.month}
                    className="flex items-center justify-between text-xs font-mono tracking-[0.16em]"
                  >
                    <span className="text-[#DAC5A7]/60 uppercase">{item.month}</span>
                    <span
                      className={`uppercase text-xs tracking-wider ${
                        item.isAvailable
                          ? "text-[#DAC5A7] font-medium"
                          : "text-[#DAC5A7]/40"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#343230] bg-[#121214]/95 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-[#DAC5A7]/85 hover:border-[#DAC5A7]/60 hover:text-[#DAC5A7] transition-all shadow-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>AVAILABLE</span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0E0E0E]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#DAC5A7]/50 font-medium">
                NAVIGATION
              </span>
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-2xl font-light text-[#DAC5A7] hover:text-white transition-colors flex items-center justify-between py-2 border-b border-[#343230]"
                    >
                      <span className="uppercase tracking-wider">{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40" />
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-4 rounded-md bg-[#DAC5A7] text-[#0E0E0E] font-semibold text-xs uppercase tracking-[0.2em] text-center flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  <span>GET A FREE DEMO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-[#343230] flex items-center justify-between text-xs text-[#DAC5A7]/60 uppercase tracking-widest font-mono">
              <span>Freelance Web Designer</span>
              <span>Available 2024</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
