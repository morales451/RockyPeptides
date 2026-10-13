"use client";

export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn min-h-10 px-4 text-sm">
      Print / Save as PDF
    </button>
  );
}
