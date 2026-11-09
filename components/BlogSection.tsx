"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen, X, Sparkles } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "content-ranks-google",
    title: "How to write content that ranks on Google",
    category: "SEO Strategy",
    readTime: "5 min read",
    date: "Oct 24, 2024",
    summary:
      "A strategic breakdown of modern semantic SEO, user search intent matching, and structuring long-form content that captures top rankings.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop",
    content: [
      "In modern organic search, Google no longer prioritizes keyword repetition. Instead, its neural matching and RankBrain models examine semantic depth, topical authority, and searcher intent satisfaction.",
      "To produce content that reliably earns top SERP rankings, start with comprehensive topic cluster mapping rather than isolated keyword targets. Answer primary user questions immediately within the first 150 words.",
      "Complement technical precision with fast page load performance, clean schema markup, and accessible semantic HTML headings (H1, H2, H3).",
    ],
  },
  {
    id: "web-dev-mistakes",
    title: "10 common web development mistakes to avoid",
    category: "Engineering",
    readTime: "7 min read",
    date: "Oct 12, 2024",
    summary:
      "Avoid bloated bundles, sluggish font swaps, unoptimized layouts, and poorly managed scroll listeners that ruin user experience.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Building a premium portfolio or high-converting site requires uncompromising attention to runtime performance and render choreography.",
      "The most common mistake is overloading third-party scripts and uncompressed assets without responsive picture sets or Next.js Image optimization.",
      "Always profile your animations using CSS transforms and hardware-accelerated Framer Motion drivers instead of layout-triggering properties like margin or width.",
    ],
  },
  {
    id: "website-elements-engagement",
    title: "10 website elements for maximum user engagement",
    category: "UI/UX Design",
    readTime: "6 min read",
    date: "Sep 28, 2024",
    summary:
      "How to implement editorial typography hierarchies, tactile hover micro-interactions, and frictionless narrative pacing.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    content: [
      "User engagement is driven by intuitive hierarchy and delightful tactile feedback. When an element responds effortlessly to the cursor, visitors perceive the product as elevated.",
      "Pair bold display headers with spacious body line-heights. Allow generous negative space around high-importance CTAs to prevent cognitive fatigue.",
    ],
  },
  {
    id: "build-stunning-framer",
    title: "How to Build a Stunning Website with Framer",
    category: "Design Tools",
    readTime: "8 min read",
    date: "Sep 15, 2024",
    summary:
      "Mastering component variants, scroll transforms, dynamic CMS collections, and responsive breakpoints in Framer.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Framer bridges the gap between static canvas layout and production-grade responsive code. By thinking in layout frames and auto-layout stacks, designers maintain full control over cross-device behavior.",
      "Learn how to orchestrate spring physics and scroll-linked component variants to deliver bespoke agency-level websites.",
    ],
  },
];

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 md:py-36 relative border-t border-[#DAC5A7]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium block mb-3"
            >
              Insights &amp; Writings
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-headline font-light text-[#DAC5A7]"
            >
              <span className="block font-normal">Thought</span>
              <span className="block editorial-italic font-normal opacity-95">leadership</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base text-[#DAC5A7]/70 max-w-sm font-light leading-relaxed"
          >
            Insights on minimal web design, Next.js architecture, and SEO strategies for high-growth ventures.
          </motion.p>
        </div>

        {/* 2x2 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer rounded-3xl p-6 sm:p-8 bg-[#141416] border border-[#DAC5A7]/15 hover:border-[#DAC5A7]/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#1c1c1f] mb-6 border border-[#DAC5A7]/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center filter grayscale contrast-[1.05] group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E0E0E]/80 backdrop-blur-md border border-[#DAC5A7]/25 text-xs text-[#DAC5A7]">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#DAC5A7]/50 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#DAC5A7]/40" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#DAC5A7] group-hover:text-white transition-colors duration-200 tracking-tight leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-[#DAC5A7]/70 font-light leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DAC5A7]/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#DAC5A7]/60 group-hover:text-[#DAC5A7] transition-colors">
                  Read Article
                </span>
                <div className="p-2 rounded-full border border-[#DAC5A7]/20 group-hover:border-[#DAC5A7] group-hover:bg-[#DAC5A7] group-hover:text-[#0E0E0E] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#141416] border border-[#DAC5A7]/25 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#DAC5A7] z-10"
            >
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close article modal"
                className="absolute top-6 right-6 p-2 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/80 text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#DAC5A7]/60 mb-3">
                <span>{activeArticle.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#DAC5A7]/40" />
                <span>{activeArticle.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#DAC5A7]/40" />
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-light text-[#DAC5A7] tracking-tight">
                {activeArticle.title}
              </h2>

              <div className="mt-6 relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#1c1c1f] border border-[#DAC5A7]/15">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover object-center"
                  sizes="800px"
                />
              </div>

              <div className="mt-8 space-y-5 text-base sm:text-lg text-[#DAC5A7]/85 font-light leading-relaxed">
                {activeArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[#DAC5A7]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#DAC5A7]/30 bg-[#0E0E0E] flex items-center justify-center font-serif text-sm">
                    WT
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-[#DAC5A7]">Watnot Technologies</h5>
                    <p className="text-xs text-[#DAC5A7]/60">Engineering &amp; Design Studio</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-full border border-[#DAC5A7]/30 text-xs uppercase tracking-wider text-[#DAC5A7] hover:border-[#DAC5A7]"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

