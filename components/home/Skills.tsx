"use client";

import { disciplines, members, roles } from "@/lib/collective";
import { useHighlight } from "./Highlight";
import styles from "./home.module.css";

export function Skills() {
  const hl = useHighlight();
  const cls = (key: string) => {
    const on = hl.skill(key);
    return on === false ? styles.dim : on ? styles.lit : "";
  };

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div data-reveal className={styles.sectionHead} style={{ marginBottom: "clamp(28px, 4vw, 56px)" }}>
          <h2 className={styles.h2} style={{ maxWidth: "16ch" }}>
            What we bring to the table
          </h2>
          <div className={styles.caption} aria-live="polite" style={{ minHeight: 20 }}>
            {hl.readout}
          </div>
        </div>
        <div data-reveal className={styles.skillWords}>
          {disciplines.map((d) => (
            <span key={d.key} data-skill={d.key} tabIndex={0} className={`${styles.skillWord} ${cls(d.key)}`}>
              {d.label}
            </span>
          ))}
        </div>
        <div data-reveal className={styles.rolesBlock}>
          <div>
            <div className={styles.kicker}>Roles across Kliq</div>
            <p className={styles.rolesIntro}>{roles.length} roles that keep the community running, growing and shipping.</p>
          </div>
          <div className={styles.roleList}>
            {roles.map((r) => (
              <span
                key={r.key}
                data-skill={r.key}
                tabIndex={0}
                className={`tag tag-outline ${styles.roleTag} ${cls(r.key)}`}
              >
                {r.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Network() {
  const hl = useHighlight();

  return (
    <section className={`${styles.sectionSm} ${styles.surface}`}>
      <div className={styles.inner}>
        <div data-reveal className={styles.sectionHead} style={{ marginBottom: 28 }}>
          <h2 className={styles.h2Sm}>How our skills connect</h2>
          <div className={styles.caption} style={{ color: "var(--color-neutral-700)" }}>
            {members.length} people · {disciplines.length} disciplines
          </div>
        </div>
        <div data-reveal className={styles.networkScroll}>
          <svg
            viewBox="0 0 1000 580"
            role="img"
            aria-label="Network diagram linking the seven members to the disciplines they practise"
            className={styles.network}
          >
            <g stroke="var(--color-text)" strokeOpacity={0.16} strokeWidth={1}>
              {members.flatMap((m) =>
                m.tags.map((t) => {
                  const d = disciplines.find((x) => x.key === t.skill)!;
                  const on = hl.edge(m.id, t.skill);
                  return (
                    <line
                      key={m.id + t.skill}
                      className={on === null ? "" : on ? styles.edgeOn : styles.edgeOff}
                      x1={m.node.x}
                      y1={m.node.y}
                      x2={d.node.x}
                      y2={d.node.y}
                    />
                  );
                }),
              )}
            </g>

            {disciplines.map((d) => {
              const on = hl.skill(d.key);
              return (
                <g
                  key={d.key}
                  data-skill={d.key}
                  className={`${styles.netSkill} ${on === false ? styles.dim : on ? styles.netSkillOn : ""}`}
                >
                  <circle cx={d.node.x} cy={d.node.y} r={6} fill="currentColor" />
                  <text
                    x={d.text.x}
                    y={d.text.y}
                    textAnchor={d.text.anchor}
                    fill="currentColor"
                    fontSize={15}
                    letterSpacing={1}
                  >
                    {d.label}
                  </text>
                </g>
              );
            })}

            {members.map((m) => {
              const on = hl.member(m.id);
              const { x, y } = m.node;
              return (
                <g
                  key={m.id}
                  data-member={m.id}
                  tabIndex={0}
                  className={`${styles.netMember} ${on === false ? styles.dim : ""}`}
                >
                  <circle cx={x} cy={y} r={30} fill="var(--color-bg)" stroke="var(--color-accent)" strokeWidth={1.5} />
                  <text
                    x={x}
                    y={m.networkLabel ? y - 3 : y + 6}
                    textAnchor="middle"
                    fontSize={15}
                    fontFamily="var(--font-heading)"
                    fill="var(--color-text)"
                  >
                    0{m.id}
                  </text>
                  {m.networkLabel && (
                    <text
                      x={x}
                      y={y + 12}
                      textAnchor="middle"
                      fontSize={m.networkLabel.length > 7 ? 7.5 : 9}
                      fill="var(--color-neutral-700)"
                      letterSpacing={m.networkLabel.length > 7 ? 0.2 : 0.5}
                    >
                      {m.networkLabel}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
