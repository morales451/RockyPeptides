import { myths } from "@/lib/myths";
import { Label, BarXL, BarMD } from "@/components/Label";
import Accordion from "@/components/Accordion";

export default function Myths() {
  const half = Math.ceil(myths.length / 2);
  const toItem = (m: (typeof myths)[number]) => ({
    key: m.id,
    summary: (
      <span className="block text-lg font-extrabold leading-snug">
        &ldquo;{m.myth}&rdquo;
      </span>
    ),
    body: (
      <p>
        <span className="font-extrabold">The facts:</span>{" "}
        {m.reality}
      </p>
    ),
  });

  return (
    <section id="myths" className="on-ink bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="headline max-w-2xl text-[clamp(2.25rem,5vw,3.75rem)]">
            10 things you may have heard
          </h2>
          <p className="prose-measure text-xl leading-snug text-mint-pale md:max-w-sm">
            Every worry here is a fair one. Tap any to see the honest answer.
          </p>
        </div>
        <Label className="mt-10">
          <h3 className="label-title">Myth vs. Fact</h3>
          <BarXL />
          <div className="md:grid md:grid-cols-2 md:gap-x-10">
            <Accordion items={myths.slice(0, half).map(toItem)} />
            <div className="border-t border-ink md:border-t-0">
              <Accordion items={myths.slice(half).map(toItem)} />
            </div>
          </div>
          <BarMD />
        </Label>
      </div>
    </section>
  );
}
