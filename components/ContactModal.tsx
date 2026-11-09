"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Sparkles, Mail, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Design");
  const [budget, setBudget] = useState("$5k - $10k");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Trigger festive confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#DAC5A7", "#FFFFFF", "#caa77f"],
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

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
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#141416] border border-[#DAC5A7]/25 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#DAC5A7] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/80 text-[#DAC5A7] hover:border-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-[#0E0E0E] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-[#DAC5A7]/20 border border-[#DAC5A7] text-[#DAC5A7] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-light text-[#DAC5A7]">Message Received</h3>
                <p className="mt-3 text-[#DAC5A7]/70 font-light max-w-md mx-auto">
                  Thank you for reaching out, {name}. I usually respond within 24 hours with scheduling options and next steps.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 px-8 py-3 rounded-full bg-[#DAC5A7] text-[#0E0E0E] text-sm font-medium hover:bg-white transition-colors"
                >
                  Back to Portfolio
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DAC5A7]/20 bg-[#0E0E0E]/50 text-xs text-[#DAC5A7]/70 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#DAC5A7]" />
                  <span>Get a Free Demo</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-[#DAC5A7] tracking-tight">
                  Let&apos;s build something exceptional.
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#DAC5A7]/70 font-light">
                  Tell me about your project, timeline, and goals.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E]/70 border border-[#DAC5A7]/20 text-[#DAC5A7] placeholder-[#DAC5A7]/30 text-sm focus:outline-none focus:border-[#DAC5A7] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E]/70 border border-[#DAC5A7]/20 text-[#DAC5A7] placeholder-[#DAC5A7]/30 text-sm focus:outline-none focus:border-[#DAC5A7] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-2.5">
                      Service Interested In
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Web Design", "Development", "SEO & Content", "Full Package"].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setService(s)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                            service === s
                              ? "border-[#DAC5A7] bg-[#DAC5A7] text-[#0E0E0E]"
                              : "border-[#DAC5A7]/20 bg-[#0E0E0E]/40 text-[#DAC5A7]/70 hover:border-[#DAC5A7]/50"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-2.5">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["$3k - $5k", "$5k - $10k", "$10k+"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                            budget === b
                              ? "border-[#DAC5A7] bg-[#DAC5A7] text-[#0E0E0E]"
                              : "border-[#DAC5A7]/20 bg-[#0E0E0E]/40 text-[#DAC5A7]/70 hover:border-[#DAC5A7]/50"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project message */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#DAC5A7]/60 font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a short overview of your goals, timeline, and current website if applicable..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E]/70 border border-[#DAC5A7]/20 text-[#DAC5A7] placeholder-[#DAC5A7]/30 text-sm focus:outline-none focus:border-[#DAC5A7] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#DAC5A7] text-[#0E0E0E] font-medium text-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-pulse">Sending message...</span>
                    ) : (
                      <>
                        <span>Request Free Demo</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Footer contact info */}
                <div className="mt-8 pt-6 border-t border-[#DAC5A7]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DAC5A7]/60 gap-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    <a href="mailto:hello@watnottechnologies.com" className="hover:text-[#DAC5A7]">
                      hello@watnottechnologies.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Stockholm / Worldwide Remote</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

