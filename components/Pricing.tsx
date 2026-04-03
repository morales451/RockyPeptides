export default function Pricing() {
  const includes = [
    "Retatrutide vial(s)",
    "Bacteriostatic (BAC) water",
    "Insulin syringes",
    "Alcohol wipes",
  ];

  const tiers = [
    {
      name: "1 Month Kit",
      price: 75,
      perMonth: 75,
      savings: null,
      badge: null,
    },
    {
      name: "3 Month Kit",
      price: 200,
      perMonth: 67,
      savings: "Save $25",
      badge: "Most Popular",
    },
    {
      name: "6 Month Kit",
      price: 375,
      perMonth: 63,
      savings: "Save $75",
      badge: "Best Value",
    },
  ];

  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
            Everything you need in one kit.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-warm-800/80">
            No confusion, no upsells, no hunting for supplies. Pick your
            duration — the longer you commit, the more you save.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, i) => {
            const isFeatured = i === 1;
            return (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden ${
                  isFeatured
                    ? "border-2 border-ocean-500 shadow-lg"
                    : "border border-sage-200"
                }`}
              >
                {tier.badge && (
                  <div className="bg-ocean-500 px-4 py-1.5 text-center">
                    <p className="text-white text-xs font-bold uppercase tracking-wider">
                      {tier.badge}
                    </p>
                  </div>
                )}
                <div className={`p-6 md:p-8 ${isFeatured ? "bg-sage-50" : "bg-white"}`}>
                  <h3 className="font-semibold text-sage-800 text-lg mb-4">
                    {tier.name}
                  </h3>
                  <div className="mb-1">
                    <span className="text-4xl font-bold text-sage-800">
                      ${tier.price}
                    </span>
                  </div>
                  <p className="text-sm text-warm-800/60 mb-6">
                    ~${tier.perMonth}/month
                    {tier.savings && (
                      <span className="ml-2 inline-block text-ocean-500 font-semibold">
                        {tier.savings}
                      </span>
                    )}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {includes.map((item, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-ocean-500 flex-shrink-0"
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
                        <span className="text-sm text-sage-800">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      isFeatured
                        ? "bg-ocean-500 text-white hover:bg-ocean-600"
                        : "bg-sage-100 text-sage-800 hover:bg-sage-200"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-3 max-w-md mx-auto mb-10">
          <div className="flex items-center justify-between text-sm px-2">
            <span className="text-warm-800/80">Houston delivery</span>
            <span className="font-semibold text-sage-800">$20</span>
          </div>
          <div className="flex items-center justify-between text-sm px-2">
            <span className="text-warm-800/80">Local pickup</span>
            <span className="font-semibold text-ocean-500">Free</span>
          </div>
        </div>

        <div className="bg-warm-100 rounded-2xl p-6 md:p-8 border border-warm-200 max-w-2xl mx-auto">
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
