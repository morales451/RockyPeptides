"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 bg-warm-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
            Got questions? We&rsquo;ve got answers.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-warm-800/80">
            Here are the most common questions we hear from people getting
            started. If yours isn&rsquo;t listed, reach out through the contact
            form below.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-sage-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sage-800">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-ocean-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className="grid transition-all duration-200 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-base leading-relaxed text-warm-800">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
