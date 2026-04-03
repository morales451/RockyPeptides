export default function HowToOrder() {
  const steps = [
    {
      step: "1",
      title: "Pick your kit",
      description: "Choose 1, 3, or 6 months — the longer you commit, the more you save.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      step: "2",
      title: "Reach out",
      description: "Contact us through the form below or message us directly. We respond fast.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: "3",
      title: "We deliver",
      description: "$20 Houston delivery or free pickup. Most orders fulfilled same-day or next-day.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-to-order" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Simple Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-sage-800">
            Getting your kit is easy.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full bg-ocean-500/10 text-ocean-500 flex items-center justify-center mx-auto mb-4">
                {s.icon}
              </div>
              <div className="text-xs font-bold text-ocean-500 uppercase tracking-wider mb-1">
                Step {s.step}
              </div>
              <h3 className="font-semibold text-sage-800 text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-warm-800/80">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
