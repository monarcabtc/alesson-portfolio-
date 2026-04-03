"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  // Respect prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const noMotion = prefersReduced
    ? { initial: undefined, animate: undefined }
    : null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f1115]"
    >
      {/* Logo */}
      <motion.h1
        initial={noMotion ? {} : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
        className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f7fa] select-none"
      >
        Alesson
        <motion.span
          initial={noMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.3 }}
          className="text-[#c6a85c] inline-block"
        >
          .
        </motion.span>
      </motion.h1>

      {/* Microcopy */}
      <motion.p
        initial={noMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.55 }}
        className="mt-5 text-sm text-[#9ca3af] font-body tracking-wide select-none"
      >
        Loading someone useful&hellip;
      </motion.p>
    </motion.div>
  );
}
