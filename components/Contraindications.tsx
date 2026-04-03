export default function Contraindications() {
  const conditions = [
    "Personal or family history of medullary thyroid cancer or Multiple Endocrine Neoplasia syndrome type 2 (MEN2)",
    "History of pancreatitis or active pancreatic conditions",
    "Currently pregnant, planning to become pregnant, or breastfeeding",
    "Under 18 years of age",
    "Severe gastrointestinal conditions (gastroparesis, bowel obstruction)",
    "Known allergy or hypersensitivity to any GLP-1 receptor agonist",
  ];

  return (
    <section className="scroll-mt-20 bg-warm-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-coral-400/10 rounded-2xl p-6 md:p-8 border border-coral-400/30">
          <h3 className="text-xl font-bold text-sage-800 mb-2">
            Who should NOT use GLP-3 agonists?
          </h3>
          <p className="text-base text-warm-800 mb-4">
            GLP-3 agonists are not for everyone. Do not use retatrutide if any
            of the following apply to you:
          </p>
          <ul className="space-y-2 mb-6">
            {conditions.map((condition, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-sm text-warm-800">{condition}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-warm-800 font-semibold">
            If you&rsquo;re taking any prescription medications or have a
            pre-existing medical condition, consult your doctor before starting
            any peptide protocol. This is not optional — it&rsquo;s
            non-negotiable.
          </p>
        </div>
      </div>
    </section>
  );
}
