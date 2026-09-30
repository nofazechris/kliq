"use client";

import { members, type Member } from "@/lib/collective";
import { useHighlight } from "./Highlight";
import { ImageSlot } from "./ImageSlot";
import styles from "./home.module.css";

function Tags({ member }: { member: Member }) {
  const hl = useHighlight();
  return (
    <div className={styles.tagRow}>
      {member.tags.map((t, i) => {
        const on = hl.skill(t.skill);
        return (
          <span
            key={t.skill}
            data-skill={t.skill}
            className={`tag ${i === 0 ? "tag-accent" : "tag-neutral"} ${styles.hlFade} ${
              on === false ? styles.dim : on ? styles.lit : ""
            }`}
          >
            {t.label}
          </span>
        );
      })}
    </div>
  );
}

function MemberCard({ member: m }: { member: Member }) {
  const hl = useHighlight();
  const on = hl.member(m.id);

  return (
    <article data-member={m.id} tabIndex={0} className={`${styles.memberCard} ${on === false ? styles.dim : ""}`}>
      <div className={styles.cardPortrait}>
        <ImageSlot src={m.photo} alt={m.name} placeholder={`Portrait 0${m.id}`} />
      </div>
      <div className={styles.index}>
        0{m.id} / {String(members.length).padStart(2, "0")}
      </div>
      <h3 className={styles.memberName}>{m.name}</h3>
      <div className={styles.memberRole}>{m.role}</div>
      <p className={styles.memberBio}>{m.bio}</p>
      <Tags member={m} />
    </article>
  );
}

export function Members() {
  return (
    <section id="members" className={`${styles.section} ${styles.tinted}`}>
      <div className={styles.inner}>
        <div data-reveal className={styles.sectionHead}>
          <h2 className={styles.h2}>Meet the collective</h2>
          <div className={styles.caption} style={{ maxWidth: "30ch" }}>
            Hover a person — everything they touch lights up.
          </div>
        </div>
        <div className={styles.memberGrid}>
          {members.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
