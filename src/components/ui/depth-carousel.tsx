"use client";

/**
 * 深度景深轮播（DepthCarousel）
 * - framer-motion 驱动，无 gsap 依赖
 * - 3D 透视：中卡正立，两侧卡片沿 z 轴后退 + 旋转 + 模糊衰减
 * - 自动播放 + 指示器 + 键盘 ←→ 导航 + 点击卡片聚焦
 * - prefers-reduced-motion：降级为横向滚动，无 3D
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface DepthCarouselItem {
  src: string;
  alt: string;
}

interface DepthCarouselProps {
  items: DepthCarouselItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
  visibleCards?: number;
}

const SPREAD = 90;
const DEPTH = 220;
const TILT = 18;

export function DepthCarousel({
  items,
  autoplay = true,
  autoplayDelay = 3200,
  className,
  cardWidth = 280,
  cardHeight = 380,
  visibleCards = 2,
}: DepthCarouselProps) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(true);
  const pos = useMotionValue(0);
  const spring = useSpring(pos, { stiffness: 80, damping: 22, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 离屏暂停自动播放
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const el = document.getElementById("depth-carousel-root");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    if (count === 0) return;
    const idx = ((i % count) + count) % count;
    setActive(idx);
    pos.set(idx);
  };

  useEffect(() => {
    if (!autoplay || reduced || count < 2 || !inView) return;
    const t = setInterval(() => {
      setActive((v) => {
        const next = (v + 1) % count;
        pos.set(next);
        return next;
      });
    }, autoplayDelay);
    return () => clearInterval(t);
  }, [autoplay, reduced, count, autoplayDelay, inView, pos]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    }
  };

  if (count === 0) return null;

  if (reduced) {
    return (
      <div
        id="depth-carousel-root"
        className={cn(
          "flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          className,
        )}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] w-64 shrink-0 snap-center overflow-hidden rounded-xl border border-line bg-surface-2"
          >
            <Image src={item.src} alt={item.alt} fill sizes="256px" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      id="depth-carousel-root"
      className={cn("relative outline-none", className)}
      style={{ perspective: 1400 }}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="照片轮播"
      onKeyDown={onKeyDown}
    >
      <div
        className="relative mx-auto"
        style={{ width: cardWidth, height: cardHeight, transformStyle: "preserve-3d" }}
      >
        {items.map((item, i) => (
          <CarouselCard
            key={i}
            item={item}
            index={i}
            pos={spring}
            count={count}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            visibleCards={visibleCards}
            isActive={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`查看第 ${i + 1} 张`}
            aria-current={i === active}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active ? "w-8 bg-foreground" : "w-1.5 bg-dim hover:bg-muted",
            )}
          />
        ))}
      </div>
    </div>
  );
}

interface CarouselCardProps {
  item: DepthCarouselItem;
  index: number;
  pos: MotionValue<number>;
  count: number;
  cardWidth: number;
  cardHeight: number;
  visibleCards: number;
  isActive: boolean;
  onClick: () => void;
}

function CarouselCard({
  item,
  index,
  pos,
  count,
  cardWidth,
  cardHeight,
  visibleCards,
  isActive,
  onClick,
}: CarouselCardProps) {
  const d = useTransform(pos, (p) => {
    let diff = index - p;
    if (count > 1) {
      diff = ((diff % count) + count) % count;
      if (diff > count / 2) diff -= count;
    }
    return diff;
  });

  const tx = useTransform(d, (v) => v * SPREAD);
  const tz = useTransform(d, (v) => -Math.abs(v) * DEPTH);
  const ry = useTransform(d, (v) => -v * TILT);
  const opacity = useTransform(d, (v) => {
    const a = Math.abs(v);
    if (a > visibleCards + 0.5) return 0;
    if (a <= 0.5) return 1;
    return Math.max(0, 1 - (a - 0.5) / visibleCards);
  });
  const brightness = useTransform(d, (v) => Math.max(0.45, 1 - Math.abs(v) * 0.18));
  const blurPx = useTransform(d, (v) => Math.min(6, Math.abs(v) * 2.5));
  const filter = useTransform(
    [brightness, blurPx],
    ([b, bl]: number[]) => `brightness(${b.toFixed(3)}) blur(${bl.toFixed(2)}px)`,
  );
  const zIndex = useTransform(d, (v) => Math.round(100 - Math.abs(v) * 10));

  const transform = useTransform(
    [tx, tz, ry],
    ([x, z, r]: number[]) =>
      `translate(-50%, -50%) translateX(${x.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateY(${r.toFixed(2)}deg)`,
  );

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 cursor-pointer"
      style={{
        width: cardWidth,
        height: cardHeight,
        transform,
        opacity,
        filter,
        zIndex,
        transformStyle: "preserve-3d",
      }}
      onClick={onClick}
      aria-hidden={!isActive}
      aria-label={isActive ? item.alt : undefined}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-card">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={`${cardWidth}px`}
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
