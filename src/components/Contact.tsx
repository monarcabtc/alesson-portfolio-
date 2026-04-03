"use client";

import { motion } from "framer-motion";
import { contact, profile } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();

  // Obfuscated email — assembled in the browser, not crawlable as plain text
  const emailDisplay = `${profile.email.user}[at]${profile.email.domain}`;
  const emailHref = `mailto:${profile.email.user}@${profile.email.domain}`;

  return (
    <section id="contact" className="relative py-14 md:py-16 bg-radial-subtle">
      <div className="section-divider mx-auto max-w-6xl mb-10 md:mb-12" />
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <p className="text-gold text-sm md:text-base tracking-[0.18em] uppercase font-medium mb-4">
            Contact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {contact.headline}
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
            {contact.subtext}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {/* Email */}
          <a
            href={emailHref}
            className="group flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-sm md:text-base">{emailDisplay}</span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 text-white/70">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm md:text-base">{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
