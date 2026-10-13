import { myths } from "@/lib/myths";
import { Label, BarXL, BarMD } from "@/components/Label";
import Accordion from "@/components/Accordion";

export default function Myths() {
  return (
    <section id="myths" className="on-ink bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.25fr] md:gap-14 md:px-6 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
            10 things you may have heard
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug text-mint-pale">
            Every worry here is a fair one. Tap any to see the honest answer.
          </p>
        </div>
        <Label>
          <h3 className="label-title">Myth vs. Fact</h3>
          <BarXL />
          <Accordion
            items={myths.map((m) => ({
              key: m.id,
              summary: (
                <>
                  <span className="block text-sm font-bold text-ink-soft">{m.title}</span>
                  <span className="block text-lg font-extrabold leading-snug">
                    &ldquo;{m.myth}&rdquo;
                  </span>
                </>
              ),
              body: (
                <p>
                  <span className="font-extrabold">The facts: </span>
                  {m.reality}
                </p>
              ),
            }))}
          />
          <BarMD />
        </Label>
      </div>
    </section>
  );
}
