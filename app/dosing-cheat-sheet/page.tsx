import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import {
  titrationSchedule,
  storageRules,
  reconstitutionSteps,
} from "@/lib/dosingData";

export const metadata: Metadata = {
  title: "Dosing Quick-Reference Guide | Evolve Peptides",
  description:
    "Printable dosing cheat sheet for retatrutide. Reconstitution, titration schedule, injection technique, and storage instructions.",
};

export default function DosingCheatSheet() {
  return (
    <div className="min-h-screen bg-white">
      {/* Print button - hidden when printing */}
      <div className="print:hidden sticky top-0 bg-white border-b border-sage-200 px-6 py-4 flex items-center justify-between max-w-3xl mx-auto">
        <a
          href="/"
          className="text-sm text-ocean-500 hover:text-ocean-600 font-medium"
        >
          &larr; Back to Evolve Peptides
        </a>
        <PrintButton />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 print:py-4 print:px-4">
        {/* Header */}
        <div className="text-center mb-8 print:mb-4">
          <h1 className="text-2xl md:text-3xl print:text-2xl font-bold text-sage-800 mb-1">
            Evolve Peptides — Dosing Quick-Reference Guide
          </h1>
          <p className="text-sm text-warm-800/60">
            Keep this handy. Print it out or save as PDF.
          </p>
        </div>

        {/* Reconstitution */}
        <div className="mb-8 print:mb-5">
          <h2 className="text-lg font-bold text-sage-800 mb-3 pb-2 border-b border-sage-200">
            1. Reconstitution (Mixing)
          </h2>
          <ol className="space-y-2 text-sm">
            {reconstitutionSteps.map((step, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-bold text-ocean-500 flex-shrink-0">
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Titration Schedule */}
        <div className="mb-8 print:mb-5">
          <h2 className="text-lg font-bold text-sage-800 mb-3 pb-2 border-b border-sage-200">
            2. Dosing Schedule
          </h2>
          <table className="w-full text-sm border border-sage-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sage-50">
                <th className="text-left px-4 py-2 font-semibold text-sage-800">
                  Duration
                </th>
                <th className="text-left px-4 py-2 font-semibold text-sage-800">
                  Dose
                </th>
                <th className="text-left px-4 py-2 font-semibold text-sage-800">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {titrationSchedule.map((step, i) => (
                <tr
                  key={i}
                  className={i % 2 === 1 ? "bg-sage-50/50" : "bg-white"}
                >
                  <td className="px-4 py-2 font-medium">{step.weeks}</td>
                  <td className="px-4 py-2 font-bold text-ocean-500">
                    {step.dose}
                  </td>
                  <td className="px-4 py-2">{step.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Injection Quick Reference */}
        <div className="mb-8 print:mb-5">
          <h2 className="text-lg font-bold text-sage-800 mb-3 pb-2 border-b border-sage-200">
            3. Injection Basics (SubQ)
          </h2>
          <ul className="space-y-1.5 text-sm">
            <li>
              <strong>Site:</strong> Belly (2&quot; from navel), front of thigh,
              or back of upper arm. Rotate each time.
            </li>
            <li>
              <strong>Prep:</strong> Wipe site with alcohol swab. Pinch a fold
              of skin.
            </li>
            <li>
              <strong>Inject:</strong> Insert at 45° angle. Push plunger slowly.
              Remove and release.
            </li>
          </ul>
        </div>

        {/* Storage Rules */}
        <div className="mb-8 print:mb-5">
          <h2 className="text-lg font-bold text-sage-800 mb-3 pb-2 border-b border-sage-200">
            4. Storage &amp; Handling
          </h2>
          <div className="space-y-2 text-sm">
            {storageRules.map((rule, i) => (
              <div key={i}>
                <strong>{rule.label}:</strong> {rule.detail}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-warm-800/40 pt-4 border-t border-sage-200 print:mt-2">
          <p>
            Evolve Peptides — evolvepeptides.com — For educational purposes
            only. Consult your healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}
