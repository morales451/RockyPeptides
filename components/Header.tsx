"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#basics", label: "The basics" },
  { href: "#dosing", label: "How to use it" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-ink">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
        <a href="#top" aria-label="Evolve Peptides, back to top">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9375rem] font-semibold text-ink hover:underline"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn min-h-10 px-4 text-sm">
            Talk to us
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border-2 border-ink md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2.5" />
            ) : (
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t-2 border-ink bg-white px-4 pb-4 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="row flex py-3 text-lg font-bold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn mt-3 w-full"
          >
            Talk to us
          </a>
        </nav>
      )}
    </header>
  );
}
