"use client";

import { useState, type FormEvent } from "react";

export default function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <section id="signup" className="scroll-mt-20 bg-ocean-600 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {submitted ? (
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white mb-3">
              You&rsquo;re in!
            </p>
            <p className="text-lg text-white/80">
              Keep an eye on your inbox for exclusive discounts and updates from
              Rocky Peptides.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get exclusive discounts &amp; updates
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Drop your email (and optionally your phone number) to receive
              coupon codes, new product announcements, and educational content
              straight to your inbox.
            </p>
            <form
              name="email-capture"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input type="hidden" name="form-name" value="email-capture" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-sage-800 placeholder:text-warm-800/40 border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                className="sm:w-44 px-4 py-3 rounded-lg text-sage-800 placeholder:text-warm-800/40 border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-ocean-700 font-semibold hover:bg-warm-50 transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
