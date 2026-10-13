import { Label, BarXL, BarMD } from "@/components/Label";

const conditions = [
  "You or a family member has had medullary thyroid cancer or MEN2 (Multiple Endocrine Neoplasia type 2)",
  "You’ve had pancreatitis or have a pancreas condition",
  "You’re pregnant, trying to get pregnant, or breastfeeding",
  "You’re under 18",
  "You have a serious stomach or bowel condition (gastroparesis, bowel obstruction)",
  "You’re allergic to any GLP-1 medicine",
];

export default function Contraindications() {
  return (
    <Label as="aside" className="border-4">
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0" aria-hidden="true">
          <path d="M16 3L30 28H2z" fill="#0d2b4e" />
          <path d="M16 12v8" stroke="#fff" strokeWidth="3" />
          <rect x="14.5" y="22.5" width="3" height="3" fill="#fff" />
        </svg>
        <h3 className="label-title">Who should not use it</h3>
      </div>
      <BarXL />
      <p className="font-extrabold">Do not use retatrutide if:</p>
      <ul className="mt-1 md:grid md:grid-cols-2 md:gap-x-10">
        {conditions.map((c, i) => (
          <li key={i} className={`row ${i === 0 ? "row-first" : ""} ${i === 1 ? "md:border-t-0" : ""} flex gap-3`}>
            <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2.4" />
            </svg>
            <span>{c}</span>
          </li>
        ))}
      </ul>
      <BarMD />
      <p className="pt-1 font-extrabold">
        Take prescription medicines or have a health condition? Talk to your
        doctor before starting. This one isn&rsquo;t optional.
      </p>
    </Label>
  );
}
