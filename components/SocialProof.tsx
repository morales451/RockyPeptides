import { successStories } from "@/lib/socialProof";
import { Label, BarXL, BarMD } from "@/components/Label";

function OutArrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="2.2" fill="none" />
    </svg>
  );
}

export default function SocialProof() {
  return (
    <section id="results" className="on-ink bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.25fr] md:gap-14 md:px-6 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
            Real people, real posts
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug text-mint-pale">
            Don&rsquo;t take our word for it. These are posts from the
            r/Retatrutide community on Reddit. Read them yourself.
          </p>
          <a
            href="https://www.reddit.com/r/Retatrutide/top/?sort=top&t=all"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-mint mt-8"
          >
            Browse r/Retatrutide
            <OutArrow />
          </a>
        </div>

        <Label>
          <h3 className="label-title">Results Posted</h3>
          <BarXL />
          <ul>
            {successStories.map((s, i) => (
              <li key={s.id} className={`row ${i === 0 ? "row-first" : ""}`}>
                <a
                  href={s.redditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[6.25rem_1fr_auto] items-center gap-3 py-1 md:grid-cols-[8.5rem_1fr_auto]"
                >
                  <span
                    className="num whitespace-nowrap text-xl font-black md:text-[1.75rem]"
                    style={{ fontStretch: "112%" }}
                  >
                    {s.stat}
                  </span>
                  <span>
                    <span className="block font-extrabold group-hover:underline">
                      {s.title}
                    </span>
                    <span className="block text-sm text-ink-soft">
                      Read on Reddit{s.duration ? ` · ${s.duration}` : ""}
                    </span>
                  </span>
                  <OutArrow />
                </a>
              </li>
            ))}
          </ul>
          <BarMD />
          <p className="footnote pt-1">
            Posts by Reddit users, not paid testimonials. Different people,
            doses and timelines; your results will vary.
          </p>
        </Label>
      </div>
    </section>
  );
}
