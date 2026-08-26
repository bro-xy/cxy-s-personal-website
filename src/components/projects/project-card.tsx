"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/content";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), {
    stiffness: 200,
    damping: 22,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass group relative flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glow"
      >
        {/* cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.12), transparent 60%)",
          }}
        />

        <div className="relative flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-bright">
            企业项目
          </span>
          <span className="font-mono text-xs text-dim">{project.period}</span>
        </div>

        <h3 className="relative mt-4 font-display text-xl font-semibold">
          {project.name}
        </h3>
        <p className="relative mt-1 text-sm text-primary-bright">
          {project.role}
        </p>

        <p className="relative mt-4 text-sm leading-relaxed text-muted">
          {project.overview}
        </p>

        <ul className="relative mt-4 space-y-2">
          {project.points.map((p) => (
            <li key={p} className="flex gap-2.5 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-bright" />
              {p}
            </li>
          ))}
        </ul>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
