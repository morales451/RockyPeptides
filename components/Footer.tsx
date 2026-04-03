export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-100">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8">
          <div className="mb-6">
            <img
              src="/logo.png"
              alt="Evolve Peptides"
              className="h-12 w-auto brightness-0 invert mb-2"
            />
            <p className="text-sm text-sage-300">
              Education over hype. Science over stigma.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm">
            <a href="#why-evolve" className="text-sage-300 hover:text-white transition-colors">
              Why Evolve
            </a>
            <a href="#dosing" className="text-sage-300 hover:text-white transition-colors">
              Getting Started
            </a>
            <a href="#pricing" className="text-sage-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#results" className="text-sage-300 hover:text-white transition-colors">
              Results
            </a>
            <a href="#myths" className="text-sage-300 hover:text-white transition-colors">
              Myth vs. Fact
            </a>
            <a href="#faq" className="text-sage-300 hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sage-300 hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="https://www.reddit.com/r/Retatrutide/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-300 hover:text-white transition-colors"
            >
              r/Retatrutide
            </a>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Medical Disclaimer
          </h3>
          <p className="text-sm leading-relaxed text-sage-200">
            Evolve Peptides provides educational content about GLP-3 peptides
            and related compounds. Nothing on this site constitutes medical
            advice, diagnosis, or treatment recommendations. The information
            presented is for educational and informational purposes only and is
            not intended to replace professional medical consultation. Always
            consult a qualified healthcare provider before making any decisions
            about medications, supplements, or health protocols. Individual
            results may vary, and the science discussed here reflects publicly
            available research at the time of publication.
          </p>
        </div>

        <div className="border-t border-sage-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage-300">
            &copy; {new Date().getFullYear()} Evolve Peptides. For educational
            purposes only.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-sage-300 hover:text-white transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
