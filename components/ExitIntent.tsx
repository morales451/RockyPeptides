"use client";

import { useEffect, useState, type FormEvent } from "react";
import { REASONS, submitNetlifyForm } from "@/lib/forms";
import TcpaDisclosure from "@/components/TcpaDisclosure";
import DealerSelect from "@/components/DealerSelect";

const STORAGE_KEY = "rp-exit-intent-shown";

export default function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 5000);

    function trigger() {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    }

    function onMouseOut(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 0) return;
      if (e.relatedTarget) return;
      trigger();
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
        className="relative max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-4 text-sage-600 hover:text-sage-800 text-3xl leading-none cursor-pointer"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <p className="text-2xl font-bold text-sage-800 mb-2">
              You&rsquo;re in!
            </p>
            <p className="text-warm-800/80">
              We&rsquo;ll text your code over shortly.
            </p>
          </div>
        ) : (
          <>
            <p className="text-ocean-500 text-xs font-semibold uppercase tracking-widest mb-2">
              Before you go
            </p>
            <h2
              id="exit-intent-title"
              className="text-2xl font-bold text-sage-800 mb-3"
            >
              Get 10% off your first order
            </h2>
            <p className="text-warm-800/80 mb-6">
              Drop your number and we&rsquo;ll text you an exclusive code, plus
              first access to new products.
            </p>
            <form
              name="exit-intent"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              <input type="hidden" name="form-name" value="exit-intent" />
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
                className="w-full px-4 py-3 rounded-lg bg-white text-sage-800 placeholder:text-sage-600/60 border-2 border-sage-200 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
              />
              <select
                name="reason"
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white text-sage-800 border-2 border-sage-200 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
              >
                <option value="" disabled>
                  What brought you here?
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
                  placeholder="Tell us more"
                  className="w-full px-4 py-3 rounded-lg bg-white text-sage-800 placeholder:text-sage-600/60 border-2 border-sage-200 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
                />
              )}
              <DealerSelect className="w-full px-4 py-3 rounded-lg bg-white text-sage-800 border-2 border-sage-200 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none" />
              <input
                type="text"
                name="referral"
                maxLength={250}
                placeholder="Who referred you? (optional)"
                className="w-full px-4 py-3 rounded-lg bg-white text-sage-800 placeholder:text-sage-600/60 border-2 border-sage-200 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition-colors cursor-pointer"
              >
                Text me the code
              </button>
              <TcpaDisclosure className="text-warm-800/60 text-center pt-1" />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
