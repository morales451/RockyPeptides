"use client";

import { useEffect } from "react";

/**
 * Labels below the fold "print" their rules and rows as they scroll in.
 * Anything already on screen is left alone, so nothing flickers on load.
 */
export default function PrintObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const labels = Array.from(document.querySelectorAll<HTMLElement>(".label"));
    const below = labels.filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92,
    );
    below.forEach((el) => {
      el.classList.add("print-pending");
      el.querySelectorAll<HTMLElement>(".row, [data-print-row]").forEach(
        (row, i) => row.style.setProperty("--i", String(Math.min(i, 12))),
      );
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("print-pending");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    below.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
