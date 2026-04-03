"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="relative pl-8 pb-8 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full border-2 border-gold bg-charcoal" />

      <div className="space-y-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-text-primary">
            {item.title}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 text-sm md:text-base">
          <span className="text-gold font-medium">{item.company}</span>
          {item.location && (
            <>
              <span className="text-white/45">·</span>
              <span className="text-white/45">{item.location}</span>
            </>
          )}
          <span className="text-white/45">·</span>
          <span className="text-white/45">{item.period}</span>
        </div>
        <ul className="space-y-2 pt-1">
          {item.bullets.map((bullet, bi) => (
            <li
              key={bi}
              className="flex items-start gap-3 text-sm md:text-base text-white/65 leading-relaxed"
            >
              <span className="text-gold/60 mt-2 flex-shrink-0 text-[6px]">&#9679;</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="relative py-16 md:py-20">
      <div className="section-divider mx-auto max-w-6xl mb-10 md:mb-12" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-10"
        >
          <p className="text-gold text-sm md:text-base tracking-[0.18em] uppercase font-medium mb-4">
            Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Where I&rsquo;ve Made an Impact
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {experience.map((item, i) => (
            <ExperienceCard key={item.company + item.period} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
