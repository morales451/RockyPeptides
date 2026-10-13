import {
  titrationSchedule,
  storageRules,
  reconstitutionSteps,
  injectionSteps,
} from "@/lib/dosingData";
import { Label, BarXL, BarMD, Row } from "@/components/Label";
import Contraindications from "@/components/Contraindications";

function StepHead({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="num text-sm font-extrabold">Step {n}</span>
      <h3 className="text-2xl font-black md:text-[1.75rem]" style={{ fontStretch: "112%" }}>
        {title}
      </h3>
    </div>
  );
}

export default function DosingGuide() {
  return (
    <section id="dosing" className="bg-mint">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
              How to use it safely
            </h2>
            <p className="prose-measure mt-5 text-xl leading-snug">
              Start low and go slow. Here&rsquo;s every step, from mixing your
              first vial to storing it.
            </p>
            <a href="/dosing-cheat-sheet" target="_blank" className="btn mt-8">
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                <path d="M8 1.5v9M4 7l4 4 4-4M2 14.5h12" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              Printable cheat sheet
            </a>
          </div>
          <Contraindications />
        </div>

        <div className="mt-14 grid items-start gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {/* Mix */}
          <Label>
            <h3 className="label-title">Directions</h3>
            <BarXL />
            <StepHead n={1} title="Mix it" />
            <p className="mt-1 text-ink-soft">
              It arrives as a powder. Mix it with the BAC (bacteriostatic) water
              in your kit.
            </p>
            <BarMD />
            <ol>
              {reconstitutionSteps.map((step, i) => (
                <li key={i} className={`row ${i === 0 ? "row-first" : ""} flex gap-3`}>
                  <span className="num w-5 shrink-0 font-black">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Label>

          {/* Dose */}
          <Label>
            <StepHead n={2} title="Dose it" />
            <BarXL />
            {titrationSchedule.map((s, i) => (
              <div key={s.weeks} className={`row ${i === 0 ? "row-first" : ""}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-extrabold">{s.weeks}</span>
                  <span className="num text-3xl font-black" style={{ fontStretch: "112%" }}>
                    {s.dose}
                  </span>
                </div>
                <p className="mt-1 text-ink-soft">{s.notes}</p>
              </div>
            ))}
            <BarMD />
            <p className="pt-1">
              <span className="font-extrabold">Feeling sick?</span>{" "}Stay at 1 mg
              longer before moving up. Many guides push 4, 8 or 12 mg, but most
              people reach their goals at 1&ndash;2 mg.
            </p>
          </Label>

          {/* Inject */}
          <Label>
            <StepHead n={3} title="Inject it" />
            <BarXL />
            <p>
              It&rsquo;s a small shot just under the skin, nearly painless.
              Millions of people with diabetes and in IVF do this every day.
            </p>
            <BarMD />
            <ol>
              {injectionSteps.map((s, i) => (
                <li key={s.title} className={`row ${i === 0 ? "row-first" : ""} flex gap-3`}>
                  <span className="num w-5 shrink-0 font-black">{i + 1}</span>
                  <span>
                    <span className="block font-extrabold">{s.title}</span>
                    <span className="block text-ink-soft">{s.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <BarMD />
            <p className="pb-2 pt-1 font-extrabold">Watch how it&rsquo;s done</p>
            <div className="aspect-video border-2 border-ink" data-print-row>
              <iframe
                src="https://www.youtube-nocookie.com/embed/tcEWjyQfDLc"
                title="How to give a subcutaneous injection"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </Label>

          {/* Store */}
          <Label>
            <StepHead n={4} title="Store it" />
            <BarXL />
            <p>
              Easy to overlook, and it matters. Poor storage weakens the
              peptide.
            </p>
            <BarMD />
            {storageRules.map((r, i) => (
              <div key={r.label} className={`row ${i === 0 ? "row-first" : ""}`}>
                <p className="font-extrabold">{r.label}</p>
                <p className="mt-0.5 text-ink-soft">{r.detail}</p>
              </div>
            ))}
            <BarMD />
            <Row first name="After mixing" value="Fridge, 36–46°F" strong />
            <Row name="Use within" value="28–30 days" strong />
          </Label>
        </div>
      </div>
    </section>
  );
}
