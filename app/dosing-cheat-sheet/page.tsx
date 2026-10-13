import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { Logo } from "@/components/Logo";
import { Label, BarXL, BarMD, Row } from "@/components/Label";
import { storageRules, reconstitutionSteps, injectionSteps } from "@/lib/dosingData";
import { MixVisual, DoseLadder } from "@/components/DoseVisuals";

export const metadata: Metadata = {
  title: "Dosing Cheat Sheet | Evolve Peptides",
  description:
    "Printable retatrutide cheat sheet: mixing, dosing schedule, injection basics and storage.",
};

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="break-inside-avoid">
      <BarMD />
      <h2 className="pt-1 text-xl font-black" style={{ fontStretch: "112%" }}>
        {n}. {title}
      </h2>
      {children}
    </section>
  );
}

export default function DosingCheatSheet() {
  return (
    <div className="min-h-screen bg-mint print:bg-white">
      <div className="sticky top-0 z-10 border-b-2 border-ink bg-white print:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="font-bold underline">
            &larr; Back to Evolve
          </Link>
          <PrintButton />
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-8 print:p-0">
        <Label className="print:border-2">
          <div className="flex items-start justify-between gap-4">
            <h1 className="label-title">Dosing Cheat Sheet</h1>
            <Logo className="hidden sm:inline-flex" />
          </div>
          <p className="mt-1">Retatrutide 10&nbsp;mg vials + 3&nbsp;mL BAC water. Keep this on the fridge.</p>
          <BarXL />
          <p className="font-extrabold">The goal</p>
          <p>
            Retatrutide isn&rsquo;t a magic fix. It&rsquo;s a tool to build good
            habits, then wean off while keeping them.
          </p>
          <Row name="Eat high protein, stay active" value="Keeps your muscle" />
          <Row name="Water, protein, movement, awareness" value="What lasts after" />

          <Section n={1} title="Mix it: 1 mL (100 units) of water into each vial">
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_1fr]">
              <MixVisual className="h-auto w-full" />
              <ol>
                {reconstitutionSteps.map((s, i) => (
                  <li key={i} className={`row ${i === 0 ? "row-first" : ""} flex gap-3 py-1.5 text-sm`}>
                    <span className="num w-4 shrink-0 font-black">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          <Section n={2} title="Dose it: once a week, fill to the line">
            <DoseLadder compact />
            <p className="pt-1 text-sm">
              <span className="font-extrabold">Feeling sick?</span>{" "}
              Stay on your current dose another week before stepping up.
            </p>
          </Section>

          <Section n={3} title="Inject it">
            <ol>
              {injectionSteps.map((s, i) => (
                <li key={s.title} className={`row ${i === 0 ? "row-first" : ""} py-1.5 text-sm`}>
                  <span className="font-extrabold">{s.title}:</span> {s.detail}
                </li>
              ))}
            </ol>
          </Section>

          <Section n={4} title="Store it">
            {storageRules.map((r, i) => (
              <div key={r.label} className={`row ${i === 0 ? "row-first" : ""} py-1.5 text-sm`}>
                <span className="font-extrabold">{r.label}:</span> {r.detail}
              </div>
            ))}
          </Section>

          <BarXL />
          <p className="footnote">
            Evolve Peptides &middot; For educational purposes only. Talk to your
            healthcare provider.
          </p>
        </Label>
      </main>
    </div>
  );
}
