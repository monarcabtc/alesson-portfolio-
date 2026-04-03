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
    <section id="contact" className="relative py-24 sm:py-32 bg-radial-subtle">
      <div className="section-divider mx-auto max-w-6xl mb-24" />
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            {contact.headline}
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            {contact.subtext}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {/* Email */}
          <a
            href={emailHref}
            className="group flex items-center gap-3 text-text-secondary hover:text-gold transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-sm">{emailDisplay}</span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 text-text-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm">{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
