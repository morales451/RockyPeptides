import { Label, BarXL, BarMD } from "@/components/Label";

const values = [
  {
    title: "Run by people who use it",
    detail: "We started Evolve after seeing results ourselves.",
  },
  {
    title: "Everything in one kit",
    detail: "Retatrutide, BAC water, syringes and alcohol wipes. Nothing to hunt for.",
  },
  {
    title: "Local to Houston",
    detail: "$20 delivery anywhere in Houston, or free pickup. Usually same or next day.",
  },
  {
    title: "Teaching comes first",
    detail: "You get what you need to use it safely. That’s why this site exists.",
  },
];

const honest = [
  {
    title: "Where it comes from",
    detail:
      "The raw ingredient for most of these compounds comes from a handful of overseas makers. They supply clinics, compounding pharmacies and research suppliers alike. The molecule is the molecule; what differs is handling, testing and accountability.",
  },
  {
    title: "The “research only” label",
    detail:
      "It means the compound hasn’t finished FDA approval for consumer sale. It’s a legal status, not a sign it’s dangerous. More on this in the myths below.",
  },
];

export default function WhyEvolve() {
  return (
    <section id="why-evolve" className="on-ink bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
              Why do peptides have a bad name?
            </h2>
            <p className="prose-measure mt-5 text-xl leading-snug text-mint-pale">
              Fair question. The industry earned a lot of it: sketchy websites,
              big promises and no transparency. Here&rsquo;s what&rsquo;s
              actually going on.
            </p>
          </div>

          <Label>
            <h3 className="label-title">Straight Talk</h3>
            <BarXL />
            {honest.map((h, i) => (
              <div key={h.title} className={`row ${i === 0 ? "row-first" : ""}`}>
                <p className="font-extrabold">{h.title}</p>
                <p className="mt-1 text-ink-soft">{h.detail}</p>
              </div>
            ))}
            <BarMD />
            <p className="pt-1">
              <span className="font-extrabold">Bottom line:</span>{" "}the stigma
              exists because honesty has been rare. Clear education is the fix,
              and it&rsquo;s why we built this.
            </p>
          </Label>
        </div>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
              Why people choose Evolve
            </h2>
            <p className="prose-measure mt-5 text-xl leading-snug text-mint-pale">
              There are plenty of places to buy peptides. Here&rsquo;s why our
              customers stay.
            </p>
          </div>
          <Label>
            <h3 className="label-title">About Us</h3>
            <BarXL />
            {values.map((v, i) => (
              <div key={v.title} className={`row ${i === 0 ? "row-first" : ""}`}>
                <p className="font-extrabold">{v.title}</p>
                <p className="mt-0.5 text-ink-soft">{v.detail}</p>
              </div>
            ))}
          </Label>
        </div>
      </div>
    </section>
  );
}
