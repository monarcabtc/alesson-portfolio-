"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[82vh] md:min-h-[88vh] flex items-center overflow-hidden bg-radial-hero"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-gold text-sm md:text-base tracking-[0.18em] uppercase font-medium mb-4">
                Auckland, New Zealand
              </p>
              <h1 className="font-heading text-5xl md:text-7xl font-semibold leading-[0.95] md:leading-[1] tracking-tight text-text-primary">
                {hero.headline.split("\n").map((line, i) => (
                  <span key={i}>
                    {i === 1 ? <span className="text-gradient-gold">{line}</span> : line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={hero.cta1.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(hero.cta1.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-medium text-sm md:text-base rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {hero.cta1.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href={hero.cta2.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(hero.cta2.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text-primary font-medium text-sm md:text-base rounded-full hover:border-gold/30 hover:text-gold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {hero.cta2.label}
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "7", label: "Languages" },
                { value: "6+", label: "Industries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold font-heading text-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/45 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Portrait area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-[480px]">
              {/* Portrait container */}
              <div className="absolute inset-0 rounded-2xl bg-charcoal-light border border-border overflow-hidden">
                <Image
                  src="/maphoto.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 320px, 400px"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border border-gold/10" />
              <div className="absolute -bottom-2 -left-2 w-24 h-24 rounded-xl border border-gold/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/45 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
