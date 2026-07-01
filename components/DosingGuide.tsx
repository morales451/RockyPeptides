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
            New to peptides or just want a clear reference? This guide covers
            everything from mixing your first vial to storing it — one step at a
            time.
          </p>
        </div>

        {/* ── Reconstitution ── */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-sage-800 mb-6">
            Step 1: Reconstitution (Mixing Your Peptide)
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Your peptide arrives as a freeze-dried powder. Before use, mix it
            with bacteriostatic (BAC) water. It&rsquo;s simple — just follow
            these steps carefully.
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
            This isn&rsquo;t a race. Some protocols push higher doses, but most
            people get excellent results with our simple two-step approach. Less
            is more.
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
                Why we recommend this protocol:
              </strong>
              Many guides push higher doses (4, 8, 12 mg), but most people reach
              their goals at just 1–2 mg per week. Starting at 1 mg lets your
              body adjust with minimal side effects; 2 mg is where most find
              their sweet spot. Feeling nausea? Stay at 1 mg longer before moving
              up. Listen to your body.
            </p>
          </div>
        </div>

        {/* ── Injection Technique ── */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-sage-800 mb-6">
            Step 3: Injection Technique
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Subcutaneous (SubQ) injections are simple and nearly painless —
            millions do them daily (diabetics, IVF patients, and more).
            Here&rsquo;s the basics:
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

          {/* ── Video: How to do a SubQ injection ── */}
          <div className="mt-10">
            <h4 className="font-semibold text-sage-800 mb-4">
              Watch: How to give a subcutaneous injection
            </h4>
            <div className="aspect-video rounded-xl overflow-hidden border border-sage-200 shadow-sm">
              <iframe
                src="https://www.youtube.com/embed/tcEWjyQfDLc"
                title="How to give a subcutaneous injection"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* ── Storage & Handling (KEY) ── */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-sage-800 mb-2">
            Step 4: Storage &amp; Handling
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Most people overlook this — and it matters. Poor storage degrades
            your peptide and weakens its effect. Follow these rules:
          </p>
          <div className="space-y-4">
            {storageRules.map((rule, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border ${
                  i === 1
                    ? "bg-coral-400/10 border-coral-400/30"
                    : i === 2
                      ? "bg-ocean-500/5 border-ocean-400/30"
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

        {/* ── Download Cheat Sheet ── */}
        <div className="mt-12 text-center">
          <a
            href="/dosing-cheat-sheet"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Dosing Cheat Sheet
          </a>
          <p className="text-sm text-warm-800/60 mt-2">
            Print it out or save as PDF for quick reference.
          </p>
        </div>
      </div>
    </section>
  );
}
