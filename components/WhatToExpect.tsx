export default function WhatToExpect() {
  const milestones = [
    {
      time: "Week 1–2",
      title: "Appetite changes begin",
      description:
        "Less \"food noise.\" You may not feel hungry at meal times. Some people notice reduced cravings almost immediately.",
    },
    {
      time: "Week 3–4",
      title: "Measurable weight loss starts",
      description:
        "Energy improves. Cravings noticeably decrease. Most people see 3–5 lbs down by the end of the first month.",
    },
    {
      time: "Month 2–3",
      title: "Visible changes",
      description:
        "Clothes start fitting differently. People around you start to notice. This is where the momentum builds.",
    },
    {
      time: "Month 3+",
      title: "The compound effect",
      description:
        "Consistent results. New habits are forming. Your relationship with food has fundamentally shifted.",
    },
  ];

  return (
    <section id="expect" className="scroll-mt-20 bg-sage-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
          Your Journey
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
          What to expect on our protocol
        </h2>
        <p className="text-lg text-warm-800/80 mb-12 max-w-2xl">
          Here&rsquo;s a realistic look at the typical journey on our 1–2 mg
          protocol. No hype — just what most people experience.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-ocean-500/20 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-ocean-500 text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-sage-200 shadow-sm flex-1">
                  <p className="text-ocean-500 text-sm font-semibold mb-1">
                    {milestone.time}
                  </p>
                  <h3 className="font-semibold text-sage-800 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-base text-warm-800">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-sage-50 rounded-2xl p-6 md:p-8 border border-sage-200 mt-10">
          <p className="text-base text-sage-700">
            <strong className="text-sage-800 block mb-1">
              Keep in mind:
            </strong>
            These are based on our 1–2 mg protocol. Individual results vary —
            but consistency is the biggest factor. Pair this with adequate
            protein intake and light activity, and you&rsquo;re setting yourself
            up for success.
          </p>
        </div>
      </div>
    </section>
  );
}
