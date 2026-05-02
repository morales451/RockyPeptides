"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-sage-50 py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
            Have a question? Reach out.
          </h2>
          <p className="text-lg text-warm-800/80">
            Whether you need help with an order, have a product question, or
            just want to say hi — we&rsquo;d love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-sage-200 text-center">
            <p className="text-2xl font-bold text-sage-800 mb-3">
              Message sent!
            </p>
            <p className="text-lg text-warm-800/80">
              Thanks for reaching out. We&rsquo;ll get back to you as soon as
              possible.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-12 border border-sage-200 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&rsquo;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-sage-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 text-sage-800 placeholder:text-warm-800/40 focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-sage-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 text-sage-800 placeholder:text-warm-800/40 focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-sage-800 mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-sage-200 text-sage-800 placeholder:text-warm-800/40 focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 outline-none transition-colors resize-y"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
