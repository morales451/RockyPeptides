import {
  titrationSchedule,
  storageRules,
  reconstitutionSteps,
} from "@/lib/dosingData";

export default function DosingGuide() {
  return (
    <section id="dosing" className="scroll-mt-20 bg-warm-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
          Getting Started
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-8">
          Your complete dosing &amp; preparation guide
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Whether you&rsquo;re brand new to peptides or just want a clear,
            no-nonsense reference, this guide walks you through everything from
            mixing your first vial to storing it properly. Take it one step at a
            time.
          </p>
        </div>

        {/* ── Reconstitution ── */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-sage-800 mb-6">
            Step 1: Reconstitution (Mixing Your Peptide)
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Your peptide arrives as a freeze-dried powder (lyophilized). Before
            you can use it, you need to mix it with bacteriostatic (BAC) water.
            This is simple — just follow these steps carefully.
          </p>
          <div className="space-y-4">
            {reconstitutionSteps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ocean-500 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-base leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Titration Schedule ── */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-sage-800 mb-6">
            Step 2: Dosing &amp; Titration Schedule
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            The golden rule: <strong className="text-sage-800">start low and go slow.</strong>{" "}
            This isn&rsquo;t a race. Gradual titration minimizes side effects
            and lets your body adjust naturally.
          </p>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {titrationSchedule.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-sage-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-ocean-500 text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sage-800">{step.weeks}</p>
                    <p className="text-ocean-500 font-bold text-lg">
                      {step.dose}
                    </p>
                  </div>
                </div>
                <p className="text-base text-warm-800">{step.notes}</p>
              </div>
            ))}
          </div>
          <div className="bg-sage-50 rounded-2xl p-6 md:p-8 border border-sage-200 mt-6">
            <p className="text-base text-sage-700">
              <strong className="text-sage-800 block mb-1">
                Important note:
              </strong>
              These are general guidelines based on common protocols. Everyone
              responds differently. If you experience persistent nausea or
              discomfort, stay at your current dose longer before increasing.
              Listen to your body — not a schedule.
            </p>
          </div>
        </div>

        {/* ── Injection Technique ── */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-sage-800 mb-6">
            Step 3: Injection Technique
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Subcutaneous (SubQ) injections are simple, virtually painless, and
            something millions of people do daily (diabetics, IVF patients,
            etc.). Here&rsquo;s the basics:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center">
                <span className="text-warm-800 font-semibold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-sage-800 mb-1">
                  Choose your injection site
                </h4>
                <p>
                  The belly (about 2 inches from the navel) is the most common
                  spot. You can also use the front of the thigh or the back of
                  the upper arm. Rotate sites each time.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center">
                <span className="text-warm-800 font-semibold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-sage-800 mb-1">
                  Clean and pinch
                </h4>
                <p>
                  Wipe the injection site with an alcohol swab. Pinch a small
                  fold of skin between your thumb and index finger.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center">
                <span className="text-warm-800 font-semibold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-sage-800 mb-1">
                  Insert and inject
                </h4>
                <p>
                  Insert the needle at a 45-degree angle into the pinched skin.
                  Push the plunger slowly and steadily. Remove the needle and
                  release the skin. You&rsquo;re done.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Storage & Handling (KEY) ── */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-sage-800 mb-2">
            Step 4: Storage &amp; Handling
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            This is the part most people overlook — and it matters.
            Improper storage can degrade your peptide and reduce its
            effectiveness. Follow these rules:
          </p>
          <div className="space-y-4">
            {storageRules.map((rule, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border ${
                  i === 1
                    ? "bg-coral-400/10 border-coral-400/30"
                    : "bg-white border-sage-200"
                }`}
              >
                <h4 className="font-semibold text-sage-800 mb-2">
                  {rule.label}
                </h4>
                <p className="text-base text-warm-800">{rule.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-warm-100 rounded-2xl p-6 md:p-8 border border-warm-200 mt-6">
            <p className="text-base text-warm-800">
              <strong className="text-sage-800 block mb-1">
                The bottom line:
              </strong>
              Treat your peptides like you&rsquo;d treat any medication.
              Refrigerate after mixing, keep things sterile, and don&rsquo;t cut
              corners on handling. A little care goes a long way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
