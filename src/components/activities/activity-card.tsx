"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Activity } from "@/content";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ActivityCard({ activity }: { activity: Activity }) {
  const photos = activity.photos;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % photos.length);
  }, [photos.length]);

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (paused || reduced || photos.length <= 1) return;
    timerRef.current = setInterval(next, 3200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reduced, next, photos.length]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
      {photos.length === 0 ? (
        <div className="flex h-40 items-center justify-center text-sm text-dim">
          暂无照片
        </div>
      ) : (
        <div
          className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {photos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`${activity.name} 照片 ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="上一张"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-background/80 text-foreground shadow-card backdrop-blur-sm transition-opacity hover:bg-background"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="下一张"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-background/80 text-foreground shadow-card backdrop-blur-sm transition-opacity hover:bg-background"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    aria-label={`第 ${i + 1} 张`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-5 bg-foreground" : "w-1.5 bg-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
            {activity.name}
          </h3>
          <Badge className="shrink-0">{activity.role}</Badge>
        </div>
        <p className="mt-1 font-mono text-xs text-dim">{activity.period}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {activity.summary}
        </p>
        <ul className="mt-3 space-y-2">
          {activity.points.map((p) => (
            <li key={p} className="flex gap-2.5 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
