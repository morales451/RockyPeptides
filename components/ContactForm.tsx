"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SUPPLY_OPTIONS, submitNetlifyForm } from "@/lib/forms";
import { PREFILL_EVENT, type Prefill } from "@/lib/prefill";
import TcpaDisclosure from "@/components/TcpaDisclosure";
import DealerSelect from "@/components/DealerSelect";
import { Label, BarXL, BarMD } from "@/components/Label";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const phoneRef = useRef<HTMLInputElement>(null);
  const supplyRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onPrefill(e: Event) {
      const { phone, supply } = (e as CustomEvent<Prefill>).detail;
      if (phone && phoneRef.current) phoneRef.current.value = phone;
      if (supply && supplyRef.current) supplyRef.current.value = supply;
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 500);
    }
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await submitNetlifyForm(e.currentTarget);
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
    } catch (err) {
      console.error(err);
    } finally {
      setStatus("sent");
    }
  }

  return (
    <section id="contact" className="on-ink bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.25fr] md:gap-14 md:px-6 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="headline text-[clamp(2.5rem,6vw,4.5rem)]">
            Talk to a real person
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug text-mint-pale">
            Still deciding? That&rsquo;s fine. Ask anything: dosing, side
            effects, or whether it&rsquo;s right for you. No pressure.
          </p>
          <p className="prose-measure mt-4 text-lg text-white/80">
            Kits start at $75 a month. Houston delivery or free pickup.
          </p>
        </div>

        <Label>
          <h3 className="label-title">Get in Touch</h3>
          <BarXL />
          {status === "sent" ? (
            <div className="py-6" role="status">
              <p className="text-3xl font-black" style={{ fontStretch: "112%" }}>
                Got it. Thank you.
              </p>
              <p className="mt-2 text-lg">
                A real person will reach out by text or call soon.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5 pt-2"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="field-label">
                    Your name
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="field-label">
                    Phone
                  </label>
                  <input
                    ref={phoneRef}
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className="field"
                    placeholder="(713) 555-0123"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-supply" className="field-label">
                    Which kit?
                  </label>
                  <select
                    ref={supplyRef}
                    id="contact-supply"
                    name="supply"
                    defaultValue=""
                    className="field"
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    {SUPPLY_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-dealer" className="field-label">
                    Who is your dealer?
                  </label>
                  <DealerSelect id="contact-dealer" className="field" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="field-label">
                  Your question
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="field resize-y"
                  placeholder="Ask us anything"
                />
              </div>

              <BarMD />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn w-full text-lg sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              <TcpaDisclosure className="footnote" />
            </form>
          )}
        </Label>
      </div>
    </section>
  );
}
