"use client";

import { motion } from "framer-motion";
import { resumeCTA, profile } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ResumeCTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="section-divider mx-auto max-w-6xl mb-24" />
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {resumeCTA.headline}
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            {resumeCTA.subtext}
          </p>
          <div className="pt-4">
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {resumeCTA.buttonLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
