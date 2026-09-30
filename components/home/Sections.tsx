import Image from "next/image";
import { contact, disciplines, members, navLinks, projectsWorkedOn, values } from "@/lib/collective";
import styles from "./home.module.css";

export function About() {
  const stats = [
    { value: String(members.length).padStart(2, "0"), label: "Members" },
    { value: String(disciplines.length).padStart(2, "0"), label: "Disciplines" },
    { value: projectsWorkedOn, label: "Projects" },
    { value: "∞", label: "Ideas", accent: true },
  ];
  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.inner} ${styles.aboutGrid}`}>
        <div data-reveal>
          <div className={styles.kicker} style={{ marginBottom: 16 }}>
            What we do
          </div>
          <div className={styles.aboutBlob} />
        </div>
        <div data-reveal className={styles.span2}>
          <p className={styles.aboutStatement}>We help Web3 projects grow and stay engaged.</p>
          <div className={styles.aboutCols}>
            <p>
              That means running community spaces, managing KOL campaigns, creating content, designing and redesigning,
              and building sites that don&apos;t just look good but feel alive.
            </p>
            <p>
              Basically, we&apos;re the engine behind the scenes, making sure projects don&apos;t just launch, but
              last.
            </p>
          </div>
        </div>
      </div>
      <div data-reveal className={`${styles.inner} ${styles.stats}`}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className={styles.statValue} style={s.accent ? { color: "var(--color-accent)" } : undefined}>
              {s.value}
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className={`${styles.section} ${styles.tinted}`}>
      <div className={`${styles.inner} ${styles.valuesGrid}`}>
        {values.map((v, i) => (
          <div key={v.title} data-reveal>
            <div className={styles.valueNum}>0{i + 1}</div>
            <h3 className={styles.valueTitle}>{v.title}</h3>
            <p className={styles.valueBody}>{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  const social = [
    ...(contact.x ? [{ label: "X", href: contact.x, external: true }] : []),
    { label: "GitHub", href: contact.github, external: true },
    { label: "Email", href: `mailto:${contact.email}`, external: false },
  ];
  const links = [...navLinks, { href: "#join", label: "Contact" }];
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} ${styles.footerGrid}`}>
        <div>
          <Image src="/kliq-logo-light.png" alt="Kliq" width={629} height={149} className={styles.footerLogo} />
          <p className={styles.footerTagline}>The engine behind the scenes for Web3 projects — helping them launch, and last.</p>
        </div>
        <div className={styles.footerLinks}>
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className={styles.footerLinks}>
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className={styles.footerMeta}>
          <span style={{ textTransform: "none", letterSpacing: "0.04em" }}>{contact.email}</span>
          <span>Est. 2026</span>
          <span>© 2026 Kliq</span>
        </div>
      </div>
    </footer>
  );
}
