"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-divider mx-auto max-w-6xl mb-24" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Tools & Capabilities
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="space-y-5"
            >
              <h3 className="font-heading text-base font-semibold text-gold">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-full bg-surface border border-border text-text-secondary hover:border-border-gold hover:text-text-primary transition-all duration-300"
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
