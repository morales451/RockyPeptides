"use client";

import { Label, BarXL, BarMD, Row } from "@/components/Label";
import { prefillContact } from "@/lib/prefill";

const includes = [
  "Retatrutide vial(s)",
  "BAC (bacteriostatic) water",
  "Insulin syringes",
  "Alcohol wipes",
];

const tiers = [
  { name: "1 Month Kit", supply: "1-month", price: 75, perMonth: 75, savings: null },
  { name: "3 Month Kit", supply: "3-month", price: 200, perMonth: 67, savings: 25 },
  { name: "6 Month Kit", supply: "6-month", price: 375, perMonth: 63, savings: 75 },
];

const steps = [
  { title: "Pick your kit", detail: "1, 3 or 6 months. Longer saves more." },
  { title: "Send us your number", detail: "Use the form below. A real person gets back to you, fast." },
  { title: "Get it", detail: "$20 Houston delivery or free pickup, usually same or next day." },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-mint">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-3xl">
          <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
            Everything you need, in one kit
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug">
            No upsells, no hunting for supplies. Pick how long you want to go.
            We take cash, Zelle, Venmo or Cash App.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {tiers.map((t) => {
            return (
              <Label key={t.name}>
                <h3 className="label-title">{t.name}</h3>
                <BarXL />
                <p className="condensed text-sm font-bold">Amount per kit</p>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-black" style={{ fontStretch: "112%" }}>
                    Total
                  </span>
                  <span className="num text-[3.25rem] font-black leading-[0.9]" style={{ fontStretch: "115%" }}>
                    ${t.price}
                  </span>
                </div>
                <BarMD />
                <Row first name="Per month" value={`~$${t.perMonth}`} />
                <Row name="You save" value={t.savings ? `$${t.savings}` : "—"} />
                <BarMD />
                <p className="condensed pt-1 text-sm font-bold">Contains</p>
                {includes.map((item, j) => (
                  <Row key={item} first={j === 0} name={item} />
                ))}
                <BarXL />
                <button
                  type="button"
                  onClick={() => prefillContact({ supply: t.supply })}
                  className="btn mt-2 w-full"
                >
                  Choose the {t.name.toLowerCase()}
                </button>
              </Label>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.25fr_1fr]">
          <Label>
            <h3 className="label-title">How to Order</h3>
            <BarXL />
            <ol>
              {steps.map((s, i) => (
                <li key={s.title} className={`row ${i === 0 ? "row-first" : ""} flex gap-3`}>
                  <span className="num w-5 shrink-0 font-black">{i + 1}</span>
                  <span>
                    <span className="font-extrabold">{s.title}.</span>{" "}
                    <span className="text-ink-soft">{s.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Label>
          <Label>
            <h3 className="label-title">Our Promise</h3>
            <BarXL />
            <Row first name="Houston delivery" value="$20" />
            <Row name="Local pickup" value="Free" />
            <BarMD />
            <p className="pt-1">
              <span className="font-extrabold">Refunds:</span>{" "}if you
              don&rsquo;t feel the effects described on this page, we&rsquo;ll
              work with you on a refund. We use it ourselves, and we stand
              behind it.
            </p>
          </Label>
        </div>
      </div>
    </section>
  );
}
