"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./flower-opening.module.css";

const dust = [
  [62, 25], [71, 32], [79, 22], [82, 42], [64, 52], [87, 33], [92, 25],
];

export function FlowerOpening() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function positionScene(section: HTMLElement, x: number, y: number) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      section.style.setProperty("--view-x", x.toFixed(3));
      section.style.setProperty("--view-y", y.toFixed(3));
    });
  }

  function handlePointer(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || opening ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    positionScene(event.currentTarget, event.clientX / window.innerWidth - .5, event.clientY / window.innerHeight - .5);
  }

  return (
    <section
      className={styles.entry}
      data-opening={opening}
      aria-labelledby="flower-title"
      onPointerMove={handlePointer}
      onPointerLeave={(event) => positionScene(event.currentTarget, 0, 0)}
      onAnimationEnd={(event) => {
        if (opening && event.target === event.currentTarget) router.replace("/");
      }}
    >
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.camera}>
          <div className={styles.photo}>
            <Image
              src="/images/demos/flower/blue-flower-wall.webp"
              alt=""
              fill
              preload
              sizes="(max-width: 760px) max(100vw, 130svh), 100vw"
            />
          </div>
          <div className={styles.dust}>
            {dust.map(([left, top]) => (
              <span key={left} style={{ left: `${left}%`, top: `${top}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.top}>
        <span>陈熙雅</span>
        <Link href="/" replace className={styles.skip}>
          直接浏览 <ArrowUpRight aria-hidden size={16} />
        </Link>
      </div>

      <div className={styles.copy}>
        <h1 id="flower-title">墙角开了<span>一朵小花</span></h1>
        <p>没人管它，自己长大。</p>
        <Link
          href="/"
          replace
          className={styles.enter}
          onClick={(event) => {
            if (event.detail === 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            event.preventDefault();
            setOpening(true);
          }}
        >
          进入首页 <ArrowRight aria-hidden size={17} />
        </Link>
      </div>
    </section>
  );
}
