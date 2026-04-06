"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function LazyVideo({ src, className }: { src: string; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-charcoal-lighter">
          <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
        </div>
      )}
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label="Project demo video"
        onPlaying={() => setIsPlaying(true)}
        className={className}
      />
    </>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isInView } = useScrollAnimation();
  const hasVideo = "video" in project && project.video;
  const hasImage = "image" in project && project.image;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group relative rounded-2xl bg-surface border border-border hover:border-border-gold transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-gold/5"
    >
      {/* Thumbnail / Video / Image area */}
      <div className="relative h-48 sm:h-56 bg-charcoal-lighter overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent z-10 pointer-events-none" />
        {hasVideo ? (
          <LazyVideo
            src={project.video as string}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : hasImage ? (
          <Image
            src={project.image as string}
            alt={`${project.title} — project screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-32 rounded-lg border border-border bg-charcoal/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <span className="font-heading text-sm font-semibold text-white/25">
                {project.title}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 space-y-4">
        <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-text-primary group-hover:text-gold transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/65 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
        <p className="text-white/45 text-sm md:text-base italic leading-relaxed">
          {project.highlight}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm px-3 py-1 rounded-full bg-charcoal-lighter border border-border text-white/65"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" className="relative py-[72px] md:py-24 bg-radial-subtle">
      <div className="section-divider mx-auto max-w-6xl mb-10 md:mb-12" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-10"
        >
          <p className="text-gold text-sm md:text-base tracking-[0.18em] uppercase font-medium mb-4">
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Selected Work
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
            Real-world delivery and concept projects that demonstrate product thinking, UX sensibility, and modern digital problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
