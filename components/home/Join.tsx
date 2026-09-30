"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/collective";
import styles from "./home.module.css";

export function Join() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [mailto, setMailto] = useState("");

  // The message is posted to /api/contact, which emails the team inbox.
  // If that fails, the visitor is offered a prefilled email to send themselves.
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("_honey")) return; // bots fill the hidden field
    const field = (k: string) => String(data.get(k) ?? "").trim();
    const project = field("discipline");
    const subject = project ? `Project enquiry — ${project}` : "Project enquiry";
    const fields = { name: field("name"), email: field("email"), project, message: field("message") };

    const lines = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Project or company: ${project}`,
      "",
      fields.message,
    ].join("\n");
    setMailto(`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="join" className={styles.section}>
      <div className={`${styles.inner} ${styles.joinGrid}`}>
        <div data-reveal>
          <h2 className={styles.joinTitle}>Let&apos;s work together.</h2>
          <p className={styles.joinLede}>
            Have a Web3 project that needs to grow and stay engaged? Tell us what you&apos;re building and how we can help.
          </p>
          <div className={styles.eyebrow} style={{ display: "inline-flex", margin: 0, letterSpacing: "0.14em" }}>
            <span className={styles.dot} style={{ background: "var(--color-accent-2)" }} />
            Open for new projects
          </div>
        </div>
        <div data-reveal className={styles.joinCard}>
          {status === "sent" ? (
            <div className={styles.joinSent} role="status">
              <div className={styles.joinCheck}>✓</div>
              <h3>Thanks — we got your message.</h3>
              <p>One of us will read it and reply to you by email.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className={styles.joinForm}>
              {/* honeypot: hidden from people, filled in by bots */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />
              <div className="field">
                <label htmlFor="jn-name">Your name</label>
                <input className="input" id="jn-name" name="name" type="text" placeholder="Who are we talking to?" required />
              </div>
              <div className="field">
                <label htmlFor="jn-email">Email</label>
                <input className="input" id="jn-email" name="email" type="email" placeholder="you@somewhere.com" required />
              </div>
              <div className="field">
                <label htmlFor="jn-what">Project or company</label>
                <input
                  className="input"
                  id="jn-what"
                  name="discipline"
                  type="text"
                  placeholder="What is it called?"
                />
              </div>
              <div className="field">
                <label htmlFor="jn-msg">How can we help?</label>
                <textarea
                  className={`input ${styles.textarea}`}
                  id="jn-msg"
                  name="message"
                  rows={4}
                  placeholder="Community, KOL campaigns, content, design, a new site — tell us what you need."
                />
              </div>
              {status === "error" && (
                <div className={styles.joinError} role="alert">
                  Something went wrong sending that.{" "}
                  <a href={mailto}>Send it from your email app instead</a>, or write to {contact.email}.
                </div>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`btn btn-primary btn-block ${styles.btnLg}`}
              >
                {status === "sending" ? "Sending…" : "Reach out"}
              </button>
              <div className={styles.joinAlt}>
                Or email us at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
