"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-sage-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Evolve Peptides"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          <a
            href="#why-evolve"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
          >
            Why Evolve
          </a>
          <a
            href="#dosing"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
          >
            Getting Started
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#myths"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
          >
            Myth vs. Fact
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-white bg-ocean-500 hover:bg-ocean-600 px-4 py-2 rounded-lg transition-colors"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-sage-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-sage-200 bg-white/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          <a
            href="#why-evolve"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Why Evolve
          </a>
          <a
            href="#dosing"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Getting Started
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#results"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Results
          </a>
          <a
            href="#myths"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Myth vs. Fact
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-warm-800 hover:text-ocean-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
}
