"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/collective";
import styles from "./home.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <a href="#top" aria-label="Kliq — home" className={styles.navBrand}>
        <Image src="/kliq-logo.png" alt="Kliq" width={629} height={149} priority className={styles.navLogo} />
      </a>
      <nav className={styles.navLinks}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#join" className={`btn btn-primary ${styles.navCta}`}>
        Reach out
      </a>
    </header>
  );
}
