"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="section-divider mx-auto max-w-6xl mb-10 md:mb-12" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-10"
        >
          <p className="text-gold text-sm md:text-base tracking-[0.18em] uppercase font-medium mb-4">
            Skills
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Tools & Capabilities
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="space-y-5"
            >
              <h3 className="font-heading text-lg md:text-xl font-semibold tracking-tight text-gold">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm md:text-base px-4 py-2 rounded-full bg-surface border border-border text-white/70 hover:border-border-gold hover:text-text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
