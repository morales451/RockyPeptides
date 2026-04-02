"use client";

import { useState } from "react";
import type { Myth } from "@/lib/myths";

export default function MythAccordion({ myths }: { myths: Myth[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {myths.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-sage-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-start gap-4 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-ocean-500 text-white text-sm font-semibold flex items-center justify-center">
                {item.id}
              </span>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-coral-400 mb-1">
                  {item.title}
                </span>
                <p className="text-base md:text-lg font-medium text-sage-800 leading-snug">
                  &ldquo;{item.myth}&rdquo;
                </p>
              </div>
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-1 text-sage-600 transition-transform duration-300 ${
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
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0">
                  <div className="ml-12">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                      The Reality
                    </span>
                    <p className="text-warm-800 leading-relaxed">
                      {item.reality}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
