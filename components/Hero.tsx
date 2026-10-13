"use client";

import { useState, type FormEvent } from "react";
import { Label, BarXL, BarMD, Row } from "@/components/Label";
import { prefillContact } from "@/lib/prefill";

const receptors = [
  { name: "GLP-1", does: "Quiets food noise" },
  { name: "GIP", does: "Steadies blood sugar" },
  { name: "Glucagon", does: "Burns more energy" },
];

export default function Hero() {
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    prefillContact({ phone });
  }

  return (
    <section id="top" className="bg-mint">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12 md:px-6 md:pb-24 md:pt-16">
        <div>
          <h1 className="display text-[clamp(3rem,9vw,6rem)]">
            Heard a lot about GLP&#8209;3s?
          </h1>
          <p className="prose-measure mt-6 text-xl leading-snug md:text-2xl">
            Most of what&rsquo;s out there is hype or fear. Here are the plain
            facts, so you can decide for yourself.
          </p>
          <p className="prose-measure mt-3 text-lg">
            Being skeptical is smart. Read first, ask questions, and only then
            decide.
          </p>
          <a
            href="#familiar"
            className="mt-8 inline-flex items-center gap-2 text-lg font-extrabold underline"
          >
            Start with the facts
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
              <path d="M8 2v11M3 8.5l5 5 5-5" stroke="currentColor" strokeWidth="2.2" fill="none" />
            </svg>
          </a>
        </div>

        <Label as="aside" className="w-full max-w-md justify-self-center md:justify-self-end">
          <h2 className="label-title">GLP-3 Facts</h2>
          <p className="mt-1 text-[0.9375rem]">
            Retatrutide on our simple 1&ndash;2&nbsp;mg plan
          </p>
          <BarXL />
          <Row first name={<span className="font-extrabold">Dose</span>} value="1 shot a week" />
          <BarMD />
          <div className="flex items-end justify-between py-1">
            <span className="text-xl font-black leading-tight sm:text-2xl" style={{ fontStretch: "112%" }}>
              Receptors it works on
            </span>
            <span
              className="num text-[3.5rem] font-black leading-[0.85]"
              style={{ fontStretch: "118%" }}
            >
              3
            </span>
          </div>
          <BarMD />
          {receptors.map((r, i) => (
            <Row
              key={r.name}
              first={i === 0}
              name={<span className="font-extrabold">{r.name}</span>}
              value={<span className="font-normal">{r.does}</span>}
            />
          ))}
          <BarXL />
          <Row first name="Complete kit" value="from $75/mo" />
          <Row name="Houston delivery / pickup" value="$20 / free" />
          <BarMD />

          <form onSubmit={handleSubmit} className="pt-2" data-print-row>
            <label htmlFor="hero-phone" className="field-label">
              Questions first? Talk to a real person.
            </label>
            <div className="flex gap-2">
              <input
                id="hero-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="field min-w-0 flex-1"
              />
              <button type="submit" className="btn shrink-0">
                Next
              </button>
            </div>
          </form>
          <p className="footnote mt-3">
            Education, not medical advice. Talk to your doctor before starting
            anything new.
          </p>
        </Label>
      </div>
    </section>
  );
}
