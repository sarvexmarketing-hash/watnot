"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ProcessStepData {
  number: string;
  subtitle: string;
  title: string;
  duration: string;
  description: string;
  points: string[];
}

const stepsData: ProcessStepData[] = [
  {
    number: "01",
    subtitle: "DO WE MATCH?",
    title: "DISCOVERY CALL",
    duration: "2 HOURS",
    description:
      "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    points: [
      "We get to know each other better",
      "Determine how I can best assist you",
      "Understand the goals you have for your website",
    ],
  },
  {
    number: "02",
    subtitle: "WE NEED A PLAN",
    title: "CONCEPT & STRATEGY",
    duration: "2 WEEKS",
    description:
      "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
    points: [
      "UX Design",
      "Wireframes",
      "Interactive Prototype",
    ],
  },
  {
    number: "03",
    subtitle: "SOME MAGIC",
    title: "WEB DESIGN",
    duration: "2 WEEKS",
    description:
      "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
    points: [
      "High-end web design tailored to your brand",
      "Interactive prototype of the design",
    ],
  },
  {
    number: "04",
    subtitle: "MORE MAGIC",
    title: "DEVELOPMENT",
    duration: "2 WEEKS",
    description:
      "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
    points: [
      "Custom framer website",
      "Modular web design systems",
      "CMS integration",
    ],
  },
  {
    number: "05",
    subtitle: "READY TO GO",
    title: "WEBSITE ONBOARDING",
    duration: "2 HOURS",
    description:
      "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
    points: [
      "Personal workshop",
      "Personalized video tutorials",
      "Edit text and images directly on your website",
    ],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 85%"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollDownToSteps = () => {
    const el = document.getElementById("step-01");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="process" className="py-28 md:py-40 relative border-t border-[#DAC5A7]/10 bg-[#0E0E0E] text-[#DAC5A7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-[#DAC5A7]/60 font-medium block mb-4"
          >
            THE PROCESS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-headline font-light tracking-tight text-[#DAC5A7]"
          >
            <span className="block font-normal">Your Website</span>
            <span className="block editorial-italic font-normal opacity-95">in 5 steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 md:mt-8 text-base sm:text-lg text-[#DAC5A7]/70 font-light leading-relaxed max-w-xl mx-auto"
          >
            Our process ensures that we create a website tailored to your business needs.
          </motion.p>

          {/* Centered Scroll Down Arrow Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={scrollDownToSteps}
              aria-label="Scroll to steps"
              className="group w-12 h-12 rounded-full border border-[#343230] bg-[#141416] flex items-center justify-center text-[#DAC5A7]/80 hover:border-[#DAC5A7] hover:text-[#DAC5A7] hover:scale-105 transition-all duration-300"
            >
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Vertical Timeline & Alternating Cards Container */}
        <div ref={containerRef} className="relative mt-8 md:mt-16 pb-12">
          {/* Desktop Center Background Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#343230]/70 -translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />

          {/* Desktop Animated Fill Line */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#DAC5A7] via-[#DAC5A7] to-[#DAC5A7]/40 -translate-x-1/2 origin-top pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Mobile Left Background Line */}
          <div
            className="md:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-[1px] bg-[#343230]/70 pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="md:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#DAC5A7] via-[#DAC5A7] to-[#DAC5A7]/40 origin-top pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Steps List */}
          <div className="space-y-16 md:space-y-28 relative z-20">
            {stepsData.map((step, index) => {
              // Even index (0, 2, 4) -> Steps 01, 03, 05 go on the RIGHT
              // Odd index (1, 3) -> Steps 02, 04 go on the LEFT
              const isRightSide = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  id={`step-${step.number}`}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-24 items-start"
                >
                  {/* Center Circular Badge on the Line */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 top-8 z-30 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4 }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#343230] bg-[#0E0E0E] flex items-center justify-center text-xs md:text-sm font-mono text-[#DAC5A7]/80 shadow-lg shadow-black/80 hover:border-[#DAC5A7] hover:text-[#DAC5A7] transition-colors"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Left Column Container */}
                  <div
                    className={`pl-16 sm:pl-20 md:pl-0 ${
                      !isRightSide ? "md:block" : "hidden md:block"
                    }`}
                  >
                    {!isRightSide && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 bg-[#121214] border border-[#2a2928] hover:border-[#DAC5A7]/40 transition-all duration-500 shadow-xl shadow-black/40 group"
                      >
                        {/* Top Subtitle & Duration Pill */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#DAC5A7]/60 font-medium">
                            {step.subtitle}
                          </span>
                          <span className="px-3 py-1 rounded-md border border-[#343230] text-[11px] font-mono tracking-wider text-[#DAC5A7]/80 uppercase bg-[#0E0E0E]/40">
                            {step.duration}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-light text-[#DAC5A7] tracking-wider mb-6">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#DAC5A7]/70 font-light leading-relaxed mb-8">
                          {step.description}
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-3">
                          {step.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm sm:text-base text-[#DAC5A7]/85 font-light"
                            >
                              <span className="text-[#DAC5A7]/50 select-none text-base leading-none mt-1">
                                •
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column Container */}
                  <div
                    className={`pl-16 sm:pl-20 md:pl-0 ${
                      isRightSide ? "md:block" : "hidden md:block"
                    }`}
                  >
                    {isRightSide && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 bg-[#121214] border border-[#2a2928] hover:border-[#DAC5A7]/40 transition-all duration-500 shadow-xl shadow-black/40 group"
                      >
                        {/* Top Subtitle & Duration Pill */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#DAC5A7]/60 font-medium">
                            {step.subtitle}
                          </span>
                          <span className="px-3 py-1 rounded-md border border-[#343230] text-[11px] font-mono tracking-wider text-[#DAC5A7]/80 uppercase bg-[#0E0E0E]/40">
                            {step.duration}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-light text-[#DAC5A7] tracking-wider mb-6">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#DAC5A7]/70 font-light leading-relaxed mb-8">
                          {step.description}
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-3">
                          {step.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm sm:text-base text-[#DAC5A7]/85 font-light"
                            >
                              <span className="text-[#DAC5A7]/50 select-none text-base leading-none mt-1">
                                •
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
