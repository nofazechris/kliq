"use client";

import { useEffect } from "react";

// Scroll reveal for every `[data-reveal]` element. Hidden state comes from CSS
// (gated on html[data-reveal], set by an inline script in the layout so there
// is no flash); this marks elements `data-shown` as they enter the viewport.
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.dataset.reveal) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    items.forEach((el, i) => el.style.setProperty("--reveal-delay", `${(i % 4) * 90}ms`));

    const show = (el: HTMLElement) => (el.dataset.shown = "1");
    const check = () => {
      const vh = window.innerHeight;
      items.forEach((el) => {
        if (el.dataset.shown) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95) show(el);
      });
    };
    const showAll = () => items.forEach(show);
    const onVis = () => document.visibilityState !== "visible" && showAll();

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    document.addEventListener("scroll", check, { passive: true, capture: true });
    document.addEventListener("visibilitychange", onVis);
    const raf = requestAnimationFrame(check);
    const failsafe = setTimeout(showAll, 4000);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      document.removeEventListener("scroll", check, true);
      document.removeEventListener("visibilitychange", onVis);
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
    };
  }, []);

  return null;
}
