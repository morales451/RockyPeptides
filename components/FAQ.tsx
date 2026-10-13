import { faqs } from "@/lib/faqs";
import { Label, BarXL, BarMD } from "@/components/Label";
import Accordion from "@/components/Accordion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-mint">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.25fr] md:gap-14 md:px-6 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
            Questions people ask us
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug">
            Don&rsquo;t see yours? Ask us directly below. No question is too
            basic.
          </p>
        </div>
        <Label>
          <h3 className="label-title">Questions</h3>
          <BarXL />
          <Accordion
            items={faqs.map((f) => ({
              key: f.id,
              summary: <span className="block text-lg font-extrabold leading-snug">{f.question}</span>,
              body: <p>{f.answer}</p>,
            }))}
          />
          <BarMD />
        </Label>
      </div>
    </section>
  );
}
