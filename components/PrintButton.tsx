"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-5 py-2 rounded-lg bg-ocean-500 text-white text-sm font-semibold hover:bg-ocean-600 transition-colors cursor-pointer"
    >
      Print / Save as PDF
    </button>
  );
}
