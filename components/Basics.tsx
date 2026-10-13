import { Label, BarXL, BarMD, Row } from "@/components/Label";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mx-auto h-5 w-5" role="img" aria-label="Yes">
      <path d="M3.5 10.5l4 4L16.5 5" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  );
}

function Dash() {
  return (
    <svg viewBox="0 0 20 20" className="mx-auto h-5 w-5 text-ink-soft" role="img" aria-label="No">
      <path d="M5 10h10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const letters = ["F", "U", "L", "L"];

const comparison = [
  { receptor: "GLP-1", job: "Quiets food noise, helps you feel full", glp1: true },
  { receptor: "GIP", job: "Steadies blood sugar and insulin", glp1: false },
  { receptor: "Glucagon", job: "Raises metabolism and fat burning", glp1: false },
];

export default function Basics() {
  return (
    <section id="basics" className="bg-mint">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        {/* ── What is a peptide ── */}
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
              So what is a peptide?
            </h2>
            <p className="prose-measure mt-5 text-xl leading-snug">
              A short chain of amino acids. That&rsquo;s it. Your body already
              makes thousands of them to handle things like digestion and
              hunger.
            </p>
            <p className="prose-measure mt-4 text-lg">
              Think of amino acids as letters. Put the right ones in order and
              you get a word with a meaning. A peptide is that word: it tells
              your body to do something it already knows how to do.
            </p>
          </div>

          <Label>
            <h3 className="label-title">Peptide Facts</h3>
            <BarXL />
            <Row first name="What it is" value="A short chain of amino acids" />
            <Row name="Made by your body?" value="Yes, thousands" />
            <Row name="What it does" value="Carries a message" />
            <BarMD />
            <div className="py-4" data-print-row>
              <p className="footnote mb-3">For example, four amino acids, one message:</p>
              <div className="flex flex-wrap items-center gap-y-3" aria-label="The letters F, U, L, L form the word FULL">
                {letters.map((l, i) => (
                  <div key={i} className="flex items-center" aria-hidden="true">
                    {i > 0 && <span className="h-[3px] w-4 bg-ink md:w-6" />}
                    <span
                      className="flex h-12 w-12 items-center justify-center border-2 border-ink text-2xl font-black md:h-14 md:w-14"
                      style={{ fontStretch: "118%" }}
                    >
                      {l}
                    </span>
                  </div>
                ))}
                <span className="w-full whitespace-nowrap text-lg font-extrabold sm:ml-4 sm:w-auto" aria-hidden="true">
                  = &ldquo;you&rsquo;re full.&rdquo;
                </span>
              </div>
            </div>
            <BarMD />
            <p className="footnote pt-1">
              Peptides aren&rsquo;t foreign chemicals. They&rsquo;re natural
              messengers we&rsquo;ve learned to copy, to help with appetite,
              blood sugar and metabolism.
            </p>
          </Label>
        </div>

        {/* ── GLP-1 vs GLP-3 ── */}
        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
              What makes GLP&#8209;3 different?
            </h2>
            <p className="prose-measure mt-5 text-xl leading-snug">
              You&rsquo;ve heard of Ozempic and Wegovy. They work on one
              receptor, GLP-1, and they&rsquo;ve helped millions of people.
            </p>
            <p className="prose-measure mt-4 text-lg">
              Retatrutide is a GLP-3, a &ldquo;triple agonist.&rdquo; It works
              on three receptors at once, so it tackles weight from three
              angles instead of just hunger.
            </p>
          </div>

          <Label>
            <h3 className="label-title">Side by Side</h3>
            <BarXL />
            <table className="w-full text-left">
              <caption className="sr-only">
                Which receptors GLP-1 medicines and GLP-3 retatrutide work on
              </caption>
              <thead>
                <tr className="align-bottom">
                  <th scope="col" className="pb-2 font-extrabold">Receptor</th>
                  <th scope="col" className="w-20 pb-2 text-center text-sm font-extrabold leading-tight md:w-24">
                    GLP-1 meds
                  </th>
                  <th scope="col" className="w-20 pb-2 text-center text-sm font-extrabold leading-tight md:w-24">
                    GLP-3
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.receptor} className="row">
                    <th scope="row" className="py-2.5 pr-2 align-top font-normal">
                      <span className="block font-extrabold">{c.receptor}</span>
                      <span className="block text-[0.9375rem] text-ink-soft">{c.job}</span>
                    </th>
                    <td className="align-middle">{c.glp1 ? <Check /> : <Dash />}</td>
                    <td className="bg-mint-pale align-middle"><Check /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <BarMD />
            <Row first name="Total receptors" value="1 vs 3" strong />
          </Label>
        </div>
      </div>
    </section>
  );
}
