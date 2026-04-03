interface CTABannerProps {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonHref,
}: CTABannerProps) {
  return (
    <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl font-bold text-white mb-2">
          {heading}
        </p>
        {subtext && (
          <p className="text-white/70 mb-6">{subtext}</p>
        )}
        <a
          href={buttonHref}
          className="inline-block px-8 py-3 rounded-lg bg-white text-ocean-700 font-semibold hover:bg-warm-50 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
