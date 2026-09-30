"use client";

import { members, projects } from "@/lib/collective";
import { useHighlight } from "./Highlight";
import { ImageSlot } from "./ImageSlot";
import styles from "./home.module.css";

export function Projects() {
  const hl = useHighlight();

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 data-reveal className={styles.h2} style={{ marginBottom: "clamp(32px, 5vw, 64px)" }}>
          Things we&apos;ve built
        </h2>

        {projects.map((p, i) => (
          <article key={p.id} data-reveal className={`${styles.project} ${i % 2 === 1 ? styles.projectFlip : ""}`}>
            <div className={styles.projectMedia} style={{ aspectRatio: p.aspect }}>
              <ImageSlot
                src={p.image}
                alt={`${p.title} screenshot`}
                placeholder={`Project 0${i + 1} visual`}
              />
            </div>
            <div className={styles.projectBody}>
              <div className={styles.kicker} style={{ marginBottom: 12, letterSpacing: "0.14em" }}>
                {p.meta}
              </div>
              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.projectText}>{p.body}</p>
              {p.team.length > 0 && (
                <div className={styles.tagRow}>
                  {p.team.map((id) => {
                  const on = hl.member(id);
                  return (
                    <span
                      key={id}
                      data-member={id}
                      className={`tag tag-neutral ${styles.hlFade} ${on === false ? styles.dim : ""}`}
                    >
                      {members.find((m) => m.id === id)?.name}
                    </span>
                  );
                  })}
                </div>
              )}
              {p.link && (
                <a href={p.link.href} target="_blank" rel="noopener noreferrer" className={styles.linkCaps}>
                  {p.link.label} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
