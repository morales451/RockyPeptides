export default function WhyEvolve() {
  const values = [
    {
      title: "Founded by users",
      description:
        "We use our own product. We started Evolve after seeing real results ourselves and wanting to share them.",
    },
    {
      title: "Complete kits",
      description:
        "Retatrutide, BAC water, syringes, and alcohol wipes — everything you need in one package. No hunting for supplies.",
    },
    {
      title: "Local Houston delivery",
      description:
        "$20 anywhere in Houston, or free pickup. Most orders fulfilled same- or next-day.",
    },
    {
      title: "Education first",
      description:
        "We teach, not just sell. Every customer gets what they need to use peptides safely — that's why this whole site exists.",
    },
  ];

  return (
    <section id="why-evolve" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
          Why Evolve?
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
          Why people choose Evolve Peptides
        </h2>
        <p className="text-lg text-warm-800/80 mb-10 max-w-2xl">
          There are plenty of places to buy peptides. Here&rsquo;s why our
          customers stay.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-sage-50 rounded-xl p-6 border border-sage-200"
            >
              <h3 className="font-semibold text-sage-800 mb-2">{item.title}</h3>
              <p className="text-base text-warm-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
