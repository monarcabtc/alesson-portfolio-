"use client";

import { motion } from "framer-motion";
import { languages } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Languages() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-20">
      <div className="section-divider mx-auto max-w-6xl mb-10 md:mb-12" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-10"
        >
          <p className="text-gold text-sm md:text-base tracking-[0.18em] uppercase font-medium mb-4">
            Languages
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            A Global Perspective
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mb-10">
            Working across cultures and languages is a core part of how I operate — it shapes how I communicate, collaborate, and understand diverse stakeholders.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * (i + 1) }}
              className="group relative p-5 rounded-xl bg-surface border border-border hover:border-border-gold transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading text-base md:text-lg font-semibold tracking-tight text-text-primary">
                  {lang.name}
                </h3>
                <span className="text-xs md:text-sm text-gold font-medium">{lang.level}</span>
              </div>
              {/* Progress bar */}
              <div className="h-1 rounded-full bg-charcoal-lighter overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${lang.proficiency}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + 0.08 * i, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
