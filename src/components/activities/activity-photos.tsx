"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function ActivityPhotos({
  name,
  photos,
  className,
}: {
  name: string;
  photos: string[];
  className?: string;
}) {
  const viewport = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const multiple = photos.length > 1;
  const rotating = multiple && visible && !reduced && !hovered && !focused && !paused;

  useEffect(() => {
    if (!multiple || !viewport.current) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(viewport.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
    };
  }, [multiple]);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [photos.length, rotating]);

  if (photos.length === 0) return null;

  function step(direction: number) {
    setIndex((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <div
      ref={viewport}
      role="group"
      aria-label={`${name}现场照片`}
      className={cn("activity-photo-carousel relative overflow-hidden bg-surface-2", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      {photos.map((src, position) => (
        <div
          key={`${src}-${position}`}
          aria-hidden={position !== index}
          className={cn("absolute inset-0 transition-opacity duration-500", position === index ? "opacity-100" : "opacity-0")}
        >
          <Image
            src={src}
            alt={`${name}现场照片 ${position + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      ))}
      {multiple && (
        <>
          <button type="button" onClick={() => step(-1)} aria-label="上一张照片" className="activity-photo-arrow left-3">
            <ChevronLeft aria-hidden size={20} />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="下一张照片" className="activity-photo-arrow right-3">
            <ChevronRight aria-hidden size={20} />
          </button>
          <div className="activity-photo-dots" aria-label="选择照片" role="group">
            {photos.map((_, position) => (
              <button
                key={position}
                type="button"
                onClick={() => setIndex(position)}
                aria-label={`第 ${position + 1} 张照片`}
                aria-current={position === index ? "true" : undefined}
              >
                <span aria-hidden />
              </button>
            ))}
          </div>
          {!reduced && (
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "继续自动轮播" : "暂停自动轮播"}
              className="activity-photo-toggle"
            >
              {paused ? <Play aria-hidden size={15} /> : <Pause aria-hidden size={15} />}
            </button>
          )}
        </>
      )}
    </div>
  );
}
