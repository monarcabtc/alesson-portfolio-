"use client";

import { motion } from "framer-motion";
import { about, education } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="section-divider mx-auto max-w-6xl mb-10 md:mb-12" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold text-sm md:text-base tracking-[0.18em] uppercase font-medium mb-4">About</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-white/70 leading-relaxed text-base md:text-lg">
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
              <h3 className="text-sm md:text-base font-medium text-gold tracking-[0.18em] uppercase mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-text-primary font-medium text-sm md:text-base">{edu.degree}</p>
                    <p className="text-white/45 text-sm md:text-base">
                      {edu.institution} · {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div>
              <h3 className="text-sm md:text-base font-medium text-gold tracking-[0.18em] uppercase mb-4">
                At a Glance
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                  International career across NZ, Australia, France & global
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                  7 languages
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
