import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MythAccordion from "@/components/MythAccordion";
import DosingGuide from "@/components/DosingGuide";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import ContactForm from "@/components/ContactForm";
import { myths } from "@/lib/myths";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ─── HERO: THE VALIDATION ─── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-ocean-700 via-ocean-600 to-sage-700 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
            <p className="text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Evolve Peptides &mdash; An Educational Resource
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
              Heard a lot about GLP-3s?
              <br className="hidden sm:block" />
              <span className="text-warm-100">
                {" "}
                Let&rsquo;s separate the facts from the fiction.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              The peptide space can feel like the Wild West — confusing claims,
              contradictory information, and a lot of noise. We get it. Your
              skepticism isn&rsquo;t just valid, it&rsquo;s healthy.
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed">
              That&rsquo;s why Evolve Peptides exists — to cut through the
              confusion with plain-language science and honest information. We
              believe an educated customer makes better decisions, and better
              decisions lead to better outcomes.
            </p>
          </div>
        </section>

        {/* ─── SECTION B: WHAT ARE PEPTIDES? ─── */}
        <section
          id="reality"
          className="scroll-mt-20 bg-white py-20 md:py-28"
        >
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Starting with the Basics
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-8">
              So, what exactly is a peptide?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Strip away the clinical jargon, and a peptide is one of the
                simplest things in biology:{" "}
                <strong className="text-sage-800">
                  a short chain of amino acids.
                </strong>
              </p>
              <p>
                Amino acids are the building blocks of every protein in your
                body. When a few of them link together in a specific sequence,
                they form a peptide. Your body already makes thousands of them
                naturally — they&rsquo;re involved in everything from digestion
                to immune response to how your brain signals hunger.
              </p>
              <p>
                Think of amino acids like letters. Arrange a few letters in a
                specific order and you get a word with a specific meaning. A
                peptide is that word. It tells your body to do something it
                already knows how to do — just more clearly.
              </p>
              <div className="bg-sage-50 rounded-2xl p-6 md:p-8 border border-sage-200">
                <p className="text-base text-sage-700">
                  <strong className="text-sage-800 block mb-1">
                    The Evolve Peptides simple version:
                  </strong>
                  Peptides aren&rsquo;t synthetic chemicals invented in a lab to
                  do something foreign to your body. They&rsquo;re naturally
                  occurring biological messengers that we&rsquo;ve learned to
                  replicate to support specific functions — like managing
                  appetite, blood sugar, and metabolism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION C: THE GLP-3 BREAKTHROUGH ─── */}
        <section
          id="glp3"
          className="scroll-mt-20 bg-warm-50 py-20 md:py-28"
        >
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
              The Science, Simplified
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-8">
              What makes GLP-3 different?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                You&rsquo;ve probably heard of GLP-1 medications like Ozempic or
                Wegovy. Those target{" "}
                <strong className="text-sage-800">one receptor</strong> in your
                body — the GLP-1 receptor — which helps regulate appetite and
                blood sugar. And they work. Millions of people have benefited.
              </p>
              <p>
                GLP-3 agonists like retatrutide take this a significant step
                further. Instead of hitting one receptor, they&rsquo;re{" "}
                <strong className="text-sage-800">triple agonists</strong> —
                meaning they activate{" "}
                <strong className="text-sage-800">three receptors</strong>{" "}
                simultaneously:
              </p>

              <div className="grid md:grid-cols-3 gap-4 md:gap-6 my-8">
                <div className="bg-white rounded-xl p-6 border border-sage-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-ocean-500 text-white flex items-center justify-center font-bold text-sm mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">
                    GLP-1 Receptor
                  </h3>
                  <p className="text-base text-warm-800">
                    Quiets the &ldquo;food noise&rdquo; — that constant,
                    nagging mental chatter about what to eat next. It helps
                    restore normal satiety signals.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-sage-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-ocean-500 text-white flex items-center justify-center font-bold text-sm mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">
                    GIP Receptor
                  </h3>
                  <p className="text-base text-warm-800">
                    Helps regulate blood sugar and improves how your body
                    processes insulin — a critical factor for metabolic health.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-sage-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-ocean-500 text-white flex items-center justify-center font-bold text-sm mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">
                    Glucagon Receptor
                  </h3>
                  <p className="text-base text-warm-800">
                    Boosts your body&rsquo;s metabolic rate and promotes fat
                    burning — working with your biology, not against it.
                  </p>
                </div>
              </div>

              <div className="bg-sage-50 rounded-2xl p-6 md:p-8 border border-sage-200">
                <p className="text-base text-sage-700">
                  <strong className="text-sage-800 block mb-1">
                    Why does this matter?
                  </strong>
                  By addressing appetite, blood sugar regulation, and metabolism
                  simultaneously, GLP-3 agonists tackle the root causes of
                  weight gain from multiple angles at once — rather than just
                  suppressing hunger.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION D: THE TRANSPARENCY REVEAL ─── */}
        <section className="scroll-mt-20 bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Addressing the Elephant in the Room
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-8">
              Why is there so much stigma?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Let&rsquo;s be honest: the peptide industry has an image
                problem, and a lot of it is self-inflicted. Between sketchy
                websites, overpromising marketing, and a general lack of
                transparency, it&rsquo;s no wonder people are suspicious.
                Here&rsquo;s what&rsquo;s actually going on:
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center">
                    <span className="text-warm-800 font-semibold text-sm">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">
                      The Compounding Pharmacy Question
                    </h3>
                    <p>
                      Compounding pharmacies legally produce custom medications
                      when there&rsquo;s a drug shortage or a specific patient
                      need. This is a real, regulated corner of medicine — not
                      some underground operation. But the lack of consumer
                      awareness about this process creates unnecessary fear.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center">
                    <span className="text-warm-800 font-semibold text-sm">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">
                      The Supply Chain Reality
                    </h3>
                    <p>
                      The raw active pharmaceutical ingredients (APIs) for most
                      of these compounds originate from a handful of overseas
                      manufacturers — the same ones that supply clinics,
                      compounding pharmacies, and research suppliers alike. The
                      molecule is the molecule. What varies is the handling,
                      testing, and accountability along the way.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center">
                    <span className="text-warm-800 font-semibold text-sm">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">
                      The &ldquo;Research Only&rdquo; Label
                    </h3>
                    <p>
                      Products labeled &ldquo;for research purposes only&rdquo;
                      haven&rsquo;t completed the full FDA approval process for
                      consumer sale. That doesn&rsquo;t mean they&rsquo;re
                      dangerous — it means the regulatory paperwork isn&rsquo;t
                      done yet. This distinction matters, and we&rsquo;ll dig
                      deeper into each of these points in the objections below.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-warm-100 rounded-2xl p-6 md:p-8 border border-warm-200 mt-8">
                <p className="text-base text-warm-800">
                  <strong className="text-sage-800 block mb-1">
                    The bottom line:
                  </strong>
                  The stigma exists because transparency has been the exception,
                  not the rule. The best way to combat misinformation is with
                  clear, honest education — which is exactly why Evolve Peptides
                  exists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DOSING & GETTING STARTED GUIDE ─── */}
        <DosingGuide />

        {/* ─── SOCIAL PROOF ─── */}
        <SocialProof />

        {/* ─── MYTH VS. REALITY ─── */}
        <section
          id="myths"
          className="scroll-mt-20 bg-white py-20 md:py-28"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
                Myth vs. Reality
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
                The 10 biggest objections — addressed honestly.
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-warm-800/80">
                At Evolve Peptides, we believe you deserve straight answers
                before making any decision. Click on any objection below to see
                the full, nuanced reality — no spin, just facts and common sense.
              </p>
            </div>

            <MythAccordion myths={myths} />
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQ />

        {/* ─── EMAIL / DISCOUNT CAPTURE ─── */}
        <EmailCapture />

        {/* ─── CONTACT FORM ─── */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
