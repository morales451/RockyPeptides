export default function Pricing() {
  const includes = [
    "Retatrutide vial",
    "Bacteriostatic (BAC) water",
    "Insulin syringes",
    "Alcohol wipes",
  ];

  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
            Everything you need in one kit.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-warm-800/80">
            No confusion, no upsells, no hunting for supplies. One kit, one
            price, everything included.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-sage-50 rounded-2xl border-2 border-ocean-500 overflow-hidden">
            <div className="bg-ocean-500 px-6 py-4 text-center">
              <p className="text-white font-bold text-lg">
                Evolve Starter Kit
              </p>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <p className="text-4xl md:text-5xl font-bold text-sage-800">
                  $75
                  <span className="text-lg font-normal text-warm-800/60">
                    /month
                  </span>
                </p>
                <p className="text-sm text-warm-800/60 mt-1">Starting at</p>
              </div>

              <div className="space-y-3 mb-8">
                {includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-ocean-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sage-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8 pt-4 border-t border-sage-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-warm-800/80">Houston delivery</span>
                  <span className="font-semibold text-sage-800">$20</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-warm-800/80">Local pickup</span>
                  <span className="font-semibold text-ocean-500">Free</span>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 rounded-lg bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="bg-warm-100 rounded-2xl p-6 md:p-8 border border-warm-200 mt-10 max-w-lg mx-auto">
          <p className="text-base text-warm-800">
            <strong className="text-sage-800 block mb-1">
              Our refund policy:
            </strong>
            If you don&rsquo;t feel the effects discussed on this page,
            we&rsquo;ll work with you on a refund. We stand behind our product
            because we use it ourselves.
          </p>
        </div>
      </div>
    </section>
  );
}
