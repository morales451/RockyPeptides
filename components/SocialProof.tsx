import { successStories } from "@/lib/socialProof";

export default function SocialProof() {
  return (
    <section id="results" className="scroll-mt-20 bg-sage-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Real Results
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
            See what others are saying.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-warm-800/80">
            Real posts from the r/Retatrutide community on Reddit. No
            cherry-picking, no paid testimonials — just honest experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {successStories.map((story) => (
            <a
              key={story.id}
              href={story.redditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-sage-200 shadow-sm hover:shadow-md hover:border-ocean-400 transition-all group"
            >
              <p className="text-3xl font-bold text-ocean-500 mb-2">
                {story.stat}
              </p>
              <h3 className="font-semibold text-sage-800 mb-2 group-hover:text-ocean-600 transition-colors">
                {story.title}
              </h3>
              {story.duration && (
                <p className="text-sm text-warm-800/60 mb-4">
                  {story.duration}
                </p>
              )}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-ocean-500">
                Read on Reddit
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.reddit.com/r/Retatrutide/top/?sort=top&t=all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition-colors"
          >
            Browse all top results on r/Retatrutide
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
