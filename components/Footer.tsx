import { Logo } from "@/components/Logo";

const links = [
  { href: "#basics", label: "The basics" },
  { href: "#dosing", label: "How to use it" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#myths", label: "Myth vs. fact" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="on-ink border-t-[10px] border-mint bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo tone="mint" />
            <p className="mt-4 text-lg font-bold text-mint">
              Education over hype. Science over stigma.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-semibold text-white/85 hover:text-mint hover:underline">
                {l.label}
              </a>
            ))}
            <a
              href="https://www.reddit.com/r/Retatrutide/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/85 hover:text-mint hover:underline"
            >
              r/Retatrutide
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t-[5px] border-white pt-4">
          <p className="font-extrabold">*Medical disclaimer</p>
          <p className="prose-measure mt-2 text-sm leading-relaxed text-white/80">
            Evolve Peptides shares educational information about GLP-3 peptides
            and related compounds. Nothing here is medical advice, diagnosis or
            treatment. Always talk to a qualified healthcare provider before
            making decisions about medicines, supplements or health plans.
            Individual results vary, and the science here reflects publicly
            available research at the time of writing.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/40 pt-5 text-sm text-white/75 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Evolve Peptides, Houston. For educational purposes only.</p>
          <a href="#top" className="font-semibold hover:text-mint hover:underline">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
