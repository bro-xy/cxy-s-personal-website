"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";
import { site } from "@/content/site";
import styles from "./flower-intro.module.css";

const SEEN_KEY = "cxy-flower-intro-seen";
const particles = [[62, 25], [71, 32], [79, 22], [82, 42], [64, 52], [87, 33], [92, 25]];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FlowerIntro() {
  const dialog = useRef<HTMLDialogElement>(null);
  const frame = useRef(0);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // The intro can still open when browser storage is unavailable.
    }

    if (!seen && !prefersReducedMotion() && element && !element.open) {
      element.showModal();
    }

    return () => cancelAnimationFrame(frame.current);
  }, []);

  function closeIntro() {
    dialog.current?.close();
  }

  function handleClose() {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Dismissing the intro does not depend on storage.
    }
    setOpening(false);
    document.getElementById("home-heading")?.focus({ preventScroll: true });
  }

  function positionScene(section: HTMLElement, x: number, y: number) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      section.style.setProperty("--view-x", x.toFixed(3));
      section.style.setProperty("--view-y", y.toFixed(3));
    });
  }

  function handlePointer(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || opening || prefersReducedMotion()) return;

    positionScene(
      event.currentTarget,
      event.clientX / window.innerWidth - .5,
      event.clientY / window.innerHeight - .5,
    );
  }

  return (
    <>
      <button type="button" className="home-replay" onClick={() => dialog.current?.showModal()}>
        <RotateCcw aria-hidden size={15} /> 重播开场
      </button>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby="flower-title" onClose={handleClose}>
        <section
          className={styles.entry}
          data-opening={opening}
          onPointerMove={handlePointer}
          onPointerLeave={(event) => positionScene(event.currentTarget, 0, 0)}
          onAnimationEnd={(event) => {
            if (opening && event.target === event.currentTarget) closeIntro();
          }}
        >
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.camera}>
              <div className={styles.photo}>
                <Image
                  src="/images/demos/flower/blue-flower-wall.webp"
                  alt=""
                  fill
                  sizes="(max-width: 760px) max(100vw, 130svh), 100vw"
                />
              </div>
              <div className={styles.dust}>
                {particles.map(([left, top]) => (
                  <span key={left} style={{ left: `${left}%`, top: `${top}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.top}>
            <span>{site.name}</span>
            <button type="button" className={styles.skip} onClick={closeIntro}>
              直接浏览 <ArrowUpRight aria-hidden size={16} />
            </button>
          </div>
          <div className={styles.copy}>
            <h1 id="flower-title">墙角开了<span>一朵小花</span></h1>
            <p>没人管它，自己长大。</p>
            <button
              type="button"
              className={styles.enter}
              onClick={(event) => {
                if (event.detail === 0 || prefersReducedMotion()) closeIntro();
                else setOpening(true);
              }}
            >
              进入首页 <ArrowRight aria-hidden size={17} />
            </button>
          </div>
        </section>
      </dialog>
    </>
  );
}
