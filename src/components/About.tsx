"use client";

import { motion } from "framer-motion";
import { about, education } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-divider mx-auto max-w-6xl mb-24" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">About</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary leading-relaxed text-base sm:text-lg">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-sm font-medium text-gold tracking-widest uppercase mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-text-primary font-medium text-sm">{edu.degree}</p>
                    <p className="text-text-muted text-sm">
                      {edu.institution} · {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div>
              <h3 className="text-sm font-medium text-gold tracking-widest uppercase mb-4">
                At a Glance
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                  International career across NZ, Australia, France & global
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                  7 languages — fluent in English, French & Portuguese
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                  MBA in Business & Communications, Université Lyon 2
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                  Comfortable across business, design & technology
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
