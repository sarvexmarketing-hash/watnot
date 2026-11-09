"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { footerColumns } from "@/lib/data";

interface FooterProps {
  onOpenContact: () => void;
  onOpenPricing?: () => void;
}

export default function Footer({ onOpenContact, onOpenPricing }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (label === "Contact") {
        onOpenContact();
        return;
      }
      if (label === "Pricing" && onOpenPricing) {
        onOpenPricing();
        return;
      }
      const targetId = href.replace("#", "");
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      scrollToTop();
    }
  };

  return (
    <footer className="pt-20 pb-12 border-t border-[#DAC5A7]/15 bg-[#0A0A0A] relative text-[#DAC5A7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Branding & To Top Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-16 border-b border-[#DAC5A7]/15 gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold tracking-tight text-[#DAC5A7]">Watnot</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAC5A7]" />
            <span className="text-xs uppercase tracking-widest text-[#DAC5A7]/60">
              Technologies
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#DAC5A7]/70 hover:text-[#DAC5A7] transition-colors py-2"
          >
            <span>To Top</span>
            <div className="w-8 h-8 rounded-full border border-[#DAC5A7]/25 flex items-center justify-center group-hover:border-[#DAC5A7] group-hover:bg-[#DAC5A7] group-hover:text-[#0E0E0E] transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1: Pages */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#DAC5A7]/50 font-medium mb-6">
              Pages
            </h5>
            <ul className="space-y-3.5">
              {footerColumns.pages.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.label)}
                    className="text-sm text-[#DAC5A7]/75 hover:text-white transition-colors duration-200 inline-block font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: CMS */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#DAC5A7]/50 font-medium mb-6">
              CMS
            </h5>
            <ul className="space-y-3.5">
              {footerColumns.cms.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.label)}
                    className="text-sm text-[#DAC5A7]/75 hover:text-white transition-colors duration-200 inline-block font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Utility */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#DAC5A7]/50 font-medium mb-6">
              Utility
            </h5>
            <ul className="space-y-3.5">
              {footerColumns.utility.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "#") e.preventDefault();
                    }}
                    className="text-sm text-[#DAC5A7]/75 hover:text-white transition-colors duration-200 inline-block font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#DAC5A7]/50 font-medium mb-6">
              Connect
            </h5>
            <ul className="space-y-3.5">
              {footerColumns.socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-[#DAC5A7]/75 hover:text-white transition-colors duration-200 font-light"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-[#DAC5A7]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DAC5A7]/50 font-light gap-4">
          <p>© {new Date().getFullYear()} Watnot Technologies. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Crafted with Framer motion &amp; Next.js architecture</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

