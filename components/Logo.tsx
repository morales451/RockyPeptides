/**
 * Evolve Peptides mark: three amino acids linked in a chain that steps
 * upward (one for each receptor GLP-3 works on), the last one lit in mint.
 */
export function LogoMark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "mint";
}) {
  const box = tone === "ink" ? "#0d2b4e" : "#2fd3a0";
  const line = tone === "ink" ? "#ffffff" : "#0d2b4e";
  const lit = tone === "ink" ? "#2fd3a0" : "#ffffff";
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Evolve Peptides"
    >
      <rect width="48" height="48" fill={box} />
      <path
        d="M12 35 L24 24 L36 13"
        stroke={line}
        strokeWidth="3.5"
        fill="none"
      />
      <rect x="7" y="30" width="10" height="10" fill={line} />
      <rect x="19" y="19" width="10" height="10" fill={line} />
      <rect x="31" y="8" width="10" height="10" fill={lit} />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "mint";
}) {
  const text = tone === "ink" ? "text-ink" : "text-white";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" tone={tone} />
      <span className={`flex flex-col leading-none ${text}`}>
        <span
          className="font-black text-[1.35rem] tracking-[-0.03em]"
          style={{ fontStretch: "120%" }}
        >
          Evolve
        </span>
        <span
          className="mt-[3px] border-t-[3px] border-current pt-[3px] text-[0.62rem] font-bold uppercase tracking-[0.2em]"
          style={{ fontStretch: "90%" }}
        >
          Peptides
        </span>
      </span>
    </span>
  );
}
