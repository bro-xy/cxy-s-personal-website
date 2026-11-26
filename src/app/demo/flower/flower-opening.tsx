"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./flower-opening.module.css";

const PETAL_ANGLES = [0, 60, 120, 180, 240, 300];

export function FlowerOpening() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  return (
    <section
      className={styles.entry}
      data-opening={opening}
      aria-labelledby="flower-title"
      onAnimationEnd={(event) => {
        if (opening && event.target === event.currentTarget) router.replace("/");
      }}
    >
      <div className={styles.top}>
        <span>陈熙雅</span>
        <Link href="/" replace className={styles.skip}>
          直接浏览 <ArrowUpRight aria-hidden size={16} />
        </Link>
      </div>

      <div className={styles.composition}>
        <div className={styles.copy}>
          <h1 id="flower-title">墙角开了<span>一朵小花</span></h1>
          <p>没人管它，自己长大。</p>
        </div>

        <Link
          href="/"
          replace
          className={styles.scene}
          aria-label="点一下小花，进入首页"
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            event.preventDefault();
            setOpening(true);
          }}
        >
          <svg viewBox="0 0 560 640" aria-hidden="true" className={styles.drawing}>
            <defs>
              <linearGradient id="demo-flower-ground" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#a49d83" />
                <stop offset="1" stopColor="#d9cbae" />
              </linearGradient>
              <linearGradient id="demo-flower-petal" x1=".15" y1="0" x2=".8" y2="1">
                <stop offset="0" stopColor="#6e9bb6" />
                <stop offset="1" stopColor="#31586f" />
              </linearGradient>
            </defs>
            <path d="M0 555 209 554 254 561 327 556 406 561 560 557V640H0Z" fill="url(#demo-flower-ground)" />
            <path d="M0 555 209 554 254 561 327 556 406 561 560 557" fill="none" stroke="#5c5d4c" strokeWidth="1.4" opacity=".42" />
            <g fill="none" stroke="#4d4f40" strokeLinecap="round" strokeLinejoin="round">
              <path d="m328 557-19 13 12 10-25 14 4 15-43 31" strokeWidth="2.2" />
              <path d="m309 570-47-3-13 12-39-1m111 2 27 18 30-2 30 25m-108-12 31 12 8 19" opacity=".6" />
              <path d="m327 557 19-22-5-18 19-19-4-13m-15 32-16-10-7-17" opacity=".55" />
            </g>
            <g fill="#715f4e" opacity=".6">
              <path d="m286 573 8-4 7 4-6 4zM352 572l8-4 6 6-10 2zM263 586l5-2 5 3-7 2z" />
            </g>
            <g className={styles.plant}>
              <path d="M327 557C319 480 342 407 300 314" fill="none" stroke="#3d5038" strokeWidth="4.3" strokeLinecap="round" />
              <path d="M326 471C302 461 274 443 260 416C291 423 319 437 326 471ZM331 432C353 415 374 396 384 372C352 381 334 401 331 432Z" fill="#506347" />
              <path d="M266 422Q304 449 324 468M378 380Q349 409 333 427" fill="none" stroke="#8b9874" strokeWidth="1.25" />
              <g transform="translate(300 314) rotate(-13)">
                {PETAL_ANGLES.map((angle) => (
                  <ellipse key={angle} cy="-35" rx="19" ry="34" fill="url(#demo-flower-petal)" transform={`rotate(${angle})`} />
                ))}
                <circle r="16" fill="#e7cf8a" />
                <circle r="10" fill="#c9a968" />
                <path d="M-4 1h.1M4-4h.1M5 5h.1M-4-5h.1" stroke="#846739" strokeWidth="2.8" strokeLinecap="round" />
              </g>
            </g>
            <g className={styles.loosePetals} fill="#5685a5">
              <ellipse cx="268" cy="301" rx="10" ry="20" transform="rotate(-36 268 301)" />
              <ellipse cx="322" cy="280" rx="9" ry="18" transform="rotate(35 322 280)" />
              <ellipse cx="344" cy="319" rx="9" ry="17" transform="rotate(64 344 319)" />
            </g>
          </svg>
          <span className={styles.prompt}>点一下小花 <ArrowRight aria-hidden size={16} /></span>
        </Link>
      </div>
    </section>
  );
}
