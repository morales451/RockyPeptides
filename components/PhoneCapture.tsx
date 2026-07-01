"use client";

import { useState, type FormEvent } from "react";
import { REASONS, submitNetlifyForm } from "@/lib/forms";
import TcpaDisclosure from "@/components/TcpaDisclosure";
import ReferredBySelect from "@/components/ReferredBySelect";

export default function PhoneCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await submitNetlifyForm(e.currentTarget);
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitted(true);
    }
  }

  return (
    <section id="signup" className="scroll-mt-20 bg-sage-800 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {submitted ? (
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white mb-3">
              You&rsquo;re in!
            </p>
            <p className="text-lg text-white/80">
              Watch your phone for exclusive discounts and updates from Evolve
              Peptides.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get exclusive discounts &amp; updates
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Drop your number for exclusive coupon codes, new product
              announcements, and our free dosing quick-reference guide —
              straight to your phone.
            </p>
            <form
              name="phone-capture"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-xl mx-auto"
            >
              <input type="hidden" name="form-name" value="phone-capture" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="Phone number"
                className="px-4 py-3 rounded-lg bg-white text-sage-800 placeholder:text-sage-600/60 border-2 border-sage-600 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
              />
              <select
                name="reason"
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white text-sage-800 border-2 border-sage-600 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
              >
                <option value="" disabled>
                  Why are you interested in trying peptides?
                </option>
                {REASONS.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
              {reason === "other" && (
                <input
                  type="text"
                  name="reason_other"
                  required
                  maxLength={250}
                  placeholder="Tell us what brought you here"
                  className="px-4 py-3 rounded-lg bg-white text-sage-800 placeholder:text-sage-600/60 border-2 border-sage-600 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
                />
              )}
              <ReferredBySelect className="px-4 py-3 rounded-lg bg-white text-sage-800 border-2 border-sage-600 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none" />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition-colors cursor-pointer"
              >
                Sign Up
              </button>
              <TcpaDisclosure className="text-white/70 text-center pt-1" />
            </form>
          </>
        )}
      </div>
    </section>
  );
}
