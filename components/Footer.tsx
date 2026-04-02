export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-100">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Medical Disclaimer
          </h3>
          <p className="text-sm leading-relaxed text-sage-200">
            Rocky Peptides is a strictly educational resource. This website does
            not sell, distribute, or promote the sale of any peptides, drugs,
            supplements, or pharmaceutical products. Nothing on this site
            constitutes medical advice, diagnosis, or treatment
            recommendations. The information presented is for educational and
            informational purposes only and is not intended to replace
            professional medical consultation. Always consult a qualified
            healthcare provider before making any decisions about medications,
            supplements, or health protocols. Individual results may vary, and
            the science discussed here reflects publicly available research at
            the time of publication.
          </p>
        </div>

        <div className="border-t border-sage-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage-300">
            &copy; {new Date().getFullYear()} Rocky Peptides. For educational
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
