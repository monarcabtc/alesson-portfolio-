"use client";

import { motion } from "framer-motion";
import { languages } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Languages() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-divider mx-auto max-w-6xl mb-24" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Languages
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            A Global Perspective
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl">
            Working across cultures and languages is a core part of how I operate — it shapes how I communicate, collaborate, and understand diverse stakeholders.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * (i + 1) }}
              className="group relative p-5 rounded-xl bg-surface border border-border hover:border-border-gold transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-semibold text-text-primary">
                  {lang.name}
                </h3>
                <span className="text-xs text-gold font-medium">{lang.level}</span>
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
