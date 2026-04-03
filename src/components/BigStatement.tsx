"use client";

import { motion } from "framer-motion";
import { bigStatement } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BigStatement() {
  const { ref, isInView } = useScrollAnimation({ margin: "-20%" });

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-radial-subtle">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight"
        >
          <span className="text-text-primary">{bigStatement.line1}</span>
          <br />
          <span className="text-gradient-gold">{bigStatement.line2}</span>
          <br />
          <span className="text-text-primary">{bigStatement.line3}</span>
        </motion.h2>
      </div>
    </section>
  );
}
