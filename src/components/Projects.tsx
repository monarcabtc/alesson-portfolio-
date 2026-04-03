"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
          <video
            src={project.video as string}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : hasImage ? (
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-32 rounded-lg border border-border bg-charcoal/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <span className="font-heading text-sm font-semibold text-text-muted/40">
                {project.title}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 space-y-4">
        <h3 className="font-heading text-xl font-semibold text-text-primary group-hover:text-gold transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {project.description}
        </p>
        <p className="text-text-muted text-xs italic leading-relaxed">
          {project.highlight}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-charcoal-lighter border border-border text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Role */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-text-muted">
            <span className="text-gold/70">Role:</span> {project.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-radial-subtle">
      <div className="section-divider mx-auto max-w-6xl mb-24" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real-world delivery and concept projects that demonstrate product thinking, UX sensibility, and modern digital problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
