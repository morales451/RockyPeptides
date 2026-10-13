"use client";

import { useState } from "react";
import { Label, BarXL, BarMD } from "@/components/Label";

const struggles = [
  {
    title: "You don’t feel good in your body",
    detail: "Clothes fit differently, energy is low, and you skip the photo.",
  },
  {
    title: "The food noise never stops",
    detail: "You think about food all day, even when you’re not hungry.",
  },
  {
    title: "Small habits run the show",
    detail: "Late-night snacks, sugar, a drink to unwind. They add up.",
  },
  {
    title: "Diets haven’t stuck",
    detail: "You’ve tried. It isn’t a character flaw. It’s biology.",
  },
];

export default function Familiar() {
  const [checked, setChecked] = useState<boolean[]>(struggles.map(() => false));
  const count = checked.filter(Boolean).length;

  return (
    <section id="familiar" className="on-ink bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-6 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
            Does any of this sound familiar?
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug text-mint-pale">
            Check the ones that fit. Most people who reach out are dealing with
            at least one.
          </p>
        </div>

        <Label>
          <h3 className="label-title">Daily Struggles</h3>
          <BarXL />
          <fieldset>
            <legend className="sr-only">Which of these sound like you?</legend>
            {struggles.map((s, i) => (
              <label
                key={s.title}
                className={`row ${i === 0 ? "row-first" : ""} flex cursor-pointer items-start gap-3`}
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() =>
                    setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)))
                  }
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-ink peer-checked:bg-ink peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-mint-deep"
                >
                  {checked[i] && (
                    <svg viewBox="0 0 16 16" className="h-4 w-4">
                      <path d="M3 8.5l3.2 3.2L13 5" stroke="#2fd3a0" strokeWidth="2.6" fill="none" />
                    </svg>
                  )}
                </span>
                <span>
                  <span className="block font-extrabold">{s.title}</span>
                  <span className="block text-ink-soft">{s.detail}</span>
                </span>
              </label>
            ))}
          </fieldset>
          <BarMD />
          <div className="pt-1" aria-live="polite">
            <p className="font-extrabold">
              {count === 0
                ? "Here’s the good news:"
                : `You checked ${count} of 4. Here’s the good news:`}
            </p>
            <p className="mt-1">
              These aren&rsquo;t willpower problems. They&rsquo;re signal
              problems: your hunger and reward signals are turned up too high.
              GLP-3s help turn them down.
            </p>
          </div>
        </Label>
      </div>
    </section>
  );
}
