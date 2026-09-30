"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { members } from "@/lib/collective";
import { useHighlight } from "./Highlight";
import { ImageSlot } from "./ImageSlot";
import styles from "./home.module.css";

export function Hero() {
  const hl = useHighlight();
  const collageRef = useRef<HTMLDivElement>(null);

  // Cursor parallax: each portrait drifts by its own depth.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const depths = collageRef.current?.querySelectorAll<HTMLElement>("[data-depth]");
    if (!depths) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const cx = (e.clientX / window.innerWidth - 0.5) * 2;
        const cy = (e.clientY / window.innerHeight - 0.5) * 2;
        depths.forEach((el) => {
          const d = parseFloat(el.dataset.depth ?? "1") || 1;
          el.style.transform = `translate3d(${(cx * d * 3).toFixed(2)}px,${(cy * d * 3).toFixed(2)}px,0)`;
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.heroGrid}>
        <div>
          <div data-reveal className={styles.eyebrow}>
            <span className={styles.dot} />
            Kliq · Est. 2026
          </div>
          <h1 data-reveal className={styles.heroTitle}>
            Different minds.
            <br />
            One collective.
          </h1>
          <p data-reveal className={styles.heroLede}>
            Seven people helping Web3 projects grow and stay engaged — the engine behind the scenes, making sure projects don&apos;t just launch, but last.
          </p>
          <div data-reveal className={styles.heroActions}>
            <a href="#members" className={`btn btn-primary ${styles.btnLg}`}>
              Meet the seven
            </a>
            <a href="#projects" className={`btn btn-secondary ${styles.btnLg}`}>
              See what we&apos;ve built
            </a>
          </div>
        </div>

        <div data-reveal ref={collageRef} className={styles.collage}>
          {members.map((m) => {
            const on = hl.member(m.id);
            return (
              <div
                key={m.id}
                data-member={m.id}
                className={`${styles.portrait} ${on === false ? styles.dim : ""}`}
                style={
                  {
                    left: m.hero.left,
                    top: m.hero.top,
                    width: m.hero.width,
                    transform: `rotate(${m.hero.rotate}deg)`,
                  } as CSSProperties
                }
              >
                <div data-depth={m.hero.depth} className={styles.depth}>
                  <div className={styles.portraitFrame}>
                    <ImageSlot
                      src={m.photo}
                      alt={m.name}
                      placeholder={`Member 0${m.id}`}
                      sizes="(max-width: 768px) 30vw, 15vw"
                    />
                  </div>
                  <div className={`${styles.mlabel} ${on ? styles.mlabelOn : ""}`}>{m.heroLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.heroFoot}>
        <span>Scroll to explore ↓</span>
        <span>Available for collaboration</span>
      </div>
    </section>
  );
}
