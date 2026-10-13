import { storageRules, reconstitutionSteps, injectionSteps } from "@/lib/dosingData";
import { Label, BarXL, BarMD, Row } from "@/components/Label";
import { MixVisual, DoseLadder } from "@/components/DoseVisuals";
import Contraindications from "@/components/Contraindications";

function StepHead({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="num condensed text-sm font-extrabold">Step {n}</span>
      <h3 className="label-title">{title}</h3>
    </div>
  );
}

export default function DosingGuide() {
  return (
    <section id="dosing" className="bg-mint">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
              How to use it safely
            </h2>
            <p className="prose-measure mt-5 text-xl leading-snug">
              Three numbers to remember: 1&nbsp;mL of water per vial, then 10,
              15 and 20 units on the syringe.
            </p>
          </div>
          <a href="/dosing-cheat-sheet" target="_blank" className="btn shrink-0">
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
              <path d="M8 1.5v9M4 7l4 4 4-4M2 14.5h12" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            Printable cheat sheet
          </a>
        </div>

        <div className="mt-12">
          <Contraindications />
        </div>

        {/* Step 1: mix */}
        <Label className="mt-8">
          <StepHead n={1} title="Mix it" />
          <BarXL />
          <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:gap-10">
            <div data-print-row>
              <p className="pb-3 text-lg">
                One BAC water bottle mixes three vials. Put{" "}
                <strong className="font-black">1&nbsp;mL (100 units)</strong>{" "}
                into each.
              </p>
              <MixVisual className="h-auto w-full max-w-xl" />
            </div>
            <ol>
              {reconstitutionSteps.map((step, i) => (
                <li key={i} className={`row ${i === 0 ? "row-first" : ""} flex gap-3`}>
                  <span className="num w-5 shrink-0 font-black">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Label>

        {/* Step 2: dose */}
        <Label className="mt-8">
          <StepHead n={2} title="Dose it" />
          <BarXL />
          <p className="text-lg">
            Once a week. Fill the syringe to the line for your week.
          </p>
          <BarMD />
          <DoseLadder />
          <BarMD />
          <p className="pt-1">
            <span className="font-extrabold">Feeling sick?</span>{" "}
            Stay on your current dose another week before stepping up. Most
            people reach their goals at 2&nbsp;mg; there&rsquo;s no need to go
            higher.
          </p>
        </Label>

        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          {/* Step 3: inject */}
          <Label>
            <StepHead n={3} title="Inject it" />
            <BarXL />
            <p>
              A small shot just under the skin, nearly painless. Millions of
              people with diabetes and in IVF do this every day.
            </p>
            <BarMD />
            <ol>
              {injectionSteps.map((s, i) => (
                <li key={s.title} className={`row ${i === 0 ? "row-first" : ""} flex gap-3`}>
                  <span className="num w-5 shrink-0 font-black">{i + 1}</span>
                  <span>
                    <span className="condensed block font-extrabold">{s.title}</span>
                    <span className="block text-ink-soft">{s.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <BarMD />
            <p className="pb-2 pt-1 font-extrabold">Watch how it&rsquo;s done</p>
            <div className="relative aspect-video border-2 border-ink bg-fog" data-print-row>
              <a
                href="https://www.youtube.com/watch?v=tcEWjyQfDLc"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center font-extrabold underline"
              >
                <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
                Watch on YouTube: how to give a shot under the skin
              </a>
              <iframe
                src="https://www.youtube-nocookie.com/embed/tcEWjyQfDLc"
                title="How to give a subcutaneous injection"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="relative h-full w-full"
              />
            </div>
          </Label>

          {/* Step 4: store */}
          <Label>
            <StepHead n={4} title="Store it" />
            <BarXL />
            <p>Easy to overlook, and it matters. Poor storage weakens the peptide.</p>
            <BarMD />
            {storageRules.map((r, i) => (
              <div key={r.label} className={`row ${i === 0 ? "row-first" : ""}`}>
                <p className="condensed font-extrabold">{r.label}</p>
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
