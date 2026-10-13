import { Label, BarXL, BarMD } from "@/components/Label";

const milestones = [
  {
    time: "Weeks 1–2",
    title: "Appetite starts to change",
    detail: "Less food noise. You may not feel hungry at mealtimes.",
  },
  {
    time: "Weeks 3–4",
    title: "The scale starts moving",
    detail: "Cravings drop and energy improves. Many people are 3–5 lbs down by the end of month one.*",
  },
  {
    time: "Months 2–3",
    title: "You see it",
    detail: "Clothes fit differently, and people around you notice.",
  },
  {
    time: "Month 3 on",
    title: "It adds up",
    detail: "Steady progress, new habits, and a different relationship with food.",
  },
];

export default function WhatToExpect() {
  return (
    <section id="expect" className="on-ink bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-6 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
            What to expect
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug text-mint-pale">
            A realistic look at the first few months as you step up
            to 2&nbsp;mg. No hype, just what most people experience.
          </p>
        </div>

        <Label>
          <h3 className="label-title">Timeline</h3>
          <BarXL />
          <ol>
            {milestones.map((m, i) => (
              <li
                key={m.time}
                className={`row ${i === 0 ? "row-first" : ""} grid grid-cols-[6.5rem_1fr] gap-3 md:grid-cols-[8rem_1fr]`}
              >
                <span className="num font-black" style={{ fontStretch: "105%" }}>
                  {m.time}
                </span>
                <span>
                  <span className="block font-extrabold">{m.title}</span>
                  <span className="block text-ink-soft">{m.detail}</span>
                </span>
              </li>
            ))}
          </ol>
          <BarMD />
          <p className="footnote pt-1">
            *Results vary; consistency matters most. Eat plenty of protein and
            stay active. The peptide works best alongside good habits, not
            instead of them.
          </p>
        </Label>
      </div>
    </section>
  );
}
