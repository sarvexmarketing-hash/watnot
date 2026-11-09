"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, Service } from "@/lib/data";

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-24 md:py-36 relative border-t border-[#DAC5A7]/10 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium block mb-3 font-mono"
            >
              Services &amp; Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-headline font-light text-[#DAC5A7]"
            >
              My Services
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base text-[#DAC5A7]/70 max-w-md font-light leading-relaxed"
          >
            Bespoke design systems, full-stack engineering, organic SEO, social media optimization, and Google visibility to help your brand stand out.
          </motion.p>
        </div>

        {/* Services Cards Grid — matching reference Framer design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => onSelectService(service)}
                className="group relative p-8 sm:p-10 rounded-2xl border border-[#343230] bg-[#141414]/75 backdrop-blur-sm hover:border-[#DAC5A7]/50 hover:bg-[#181818]/95 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg shadow-black/40"
              >
                <div>
                  {/* Step Number */}
                  <span className="font-mono text-sm tracking-widest text-[#DAC5A7]/50 block mb-6">
                    {service.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#DAC5A7] uppercase mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#DAC5A7]/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Pill Link */}
                <div className="mt-8 pt-4 flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#DAC5A7]">
                  <div className="w-8 h-8 rounded-full border border-[#DAC5A7]/30 flex items-center justify-center group-hover:border-[#DAC5A7] group-hover:bg-[#DAC5A7] group-hover:text-[#0E0E0E] transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <span className="group-hover:text-white transition-colors truncate">
                    {service.tagline}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
