"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad, not touch)
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering over canvas / dither reveal
      if (target.tagName.toLowerCase() === "canvas" || target.closest(".cursor-crosshair")) {
        setIsPointer(true);
        setCursorText("✦ REVEAL");
        return;
      }

      // Check if hovering over clickable elements
      const isClickable = Boolean(
        target.closest("button") ||
          target.closest("a") ||
          target.closest('[role="button"]') ||
          target.classList.contains("clickable")
      );

      if (isClickable) {
        setIsPointer(true);
        setCursorText("");
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Outer ring */}
      <motion.div
        animate={{
          scale: cursorText ? 1.9 : isPointer ? 1.6 : 1,
          borderColor: isPointer ? "rgba(218, 197, 167, 0.75)" : "rgba(218, 197, 167, 0.4)",
          backgroundColor: cursorText
            ? "rgba(14, 14, 14, 0.7)"
            : isPointer
            ? "rgba(218, 197, 167, 0.12)"
            : "transparent",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="flex items-center justify-center rounded-full border border-[#DAC5A7]/40 w-8 h-8 backdrop-blur-[1px]"
      >
        {cursorText ? (
          <span className="text-[7px] font-mono tracking-widest text-[#DAC5A7] uppercase px-1 whitespace-nowrap">
            {cursorText}
          </span>
        ) : (
          <motion.div
            animate={{
              scale: isPointer ? 0.4 : 1,
              backgroundColor: "#DAC5A7",
            }}
            className="w-1.5 h-1.5 rounded-full"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

