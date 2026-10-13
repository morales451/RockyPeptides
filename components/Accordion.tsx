"use client";

import { useId, useState, type ReactNode } from "react";

export type AccordionItem = { key: string | number; summary: ReactNode; body: ReactNode };

/** Label rows that open in place. A plus becomes a minus when open. */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<string | number | null>(null);
  const base = useId();

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === item.key;
        const panelId = `${base}-${i}`;
        return (
          <div key={item.key} className={`row ${i === 0 ? "row-first" : ""} py-0`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.key)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full cursor-pointer items-start justify-between gap-4 py-3 text-left"
            >
              <span className="flex-1">{item.summary}</span>
              <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
                <path d="M2 8h12" stroke="currentColor" strokeWidth="2.6" />
                <path
                  d="M8 2v12"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  className={`origin-center transition-transform duration-300 ${isOpen ? "scale-y-0" : ""}`}
                />
              </svg>
            </button>
            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <div className="pb-4 pr-6">{item.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
