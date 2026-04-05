export interface Myth {
  id: number;
  title: string;
  myth: string;
  reality: string;
}

export const myths: Myth[] = [
  {
    id: 1,
    title: "Verification",
    myth: "COAs on websites prove it's safe.",
    reality:
      "A COA — Certificate of Analysis — is a lab report that shows a product was tested for purity, identity, and potency. In theory, it proves what's in the vial matches what's on the label. In practice? The vast majority of COAs in this industry can be fabricated — and ours are no exception. We'll be upfront about that. We source our peptides from manufacturers that produce and sell millions of units, and we do receive COAs that we're happy to share with you. But a PDF on a website should never be your litmus test for safety or quality. The real measure of trust is the source, the consistency, and whether a supplier is honest enough to tell you that. We are.",
  },
  {
    id: 2,
    title: "Clinic Markups",
    myth: "I should only trust expensive USA Wellness Clinics.",
    reality:
      "Clinics are fantastic for medical consultations, bloodwork, and professional guidance — and for many people, that's the right path. But let's be transparent about the supply chain: the raw active pharmaceutical ingredient (API) overwhelmingly comes from the same overseas manufacturers, whether it goes to a clinic or a research supplier. The clinic adds a doctor's oversight (which has real value), but also a significant markup. You're paying a premium for the middleman, not necessarily a different molecule.",
  },
  {
    id: 3,
    title: "Needles",
    myth: "Injecting myself is painful and taboo.",
    reality:
      "We get it — the word \"injection\" sounds intimidating. But subcutaneous (SubQ) injections use tiny insulin syringes with needles roughly the thickness of a human hair. You're pinching a small fold of belly fat and barely feeling a thing. This is the exact same routine that millions of diabetics and IVF patients do every single day without a second thought. It's not dramatic, and it's certainly not dangerous.",
  },
  {
    id: 4,
    title: "Steroids",
    myth: "Peptides are unregulated steroids.",
    reality:
      "This is one of the most common misconceptions, and it's completely wrong. Anabolic steroids are synthetic hormones that artificially override your endocrine system. Peptides are short chains of amino acids — the same building blocks found in every protein you eat. They work by signaling your body to perform its own natural functions more efficiently. It's the difference between hotwiring a car and using the key.",
  },
  {
    id: 5,
    title: 'The "Easy Way"',
    myth: "It's cheating. Just eat less and exercise more.",
    reality:
      "If it were that simple, we wouldn't have a global obesity epidemic. For many people, obesity isn't a willpower problem — it's a complex metabolic dysfunction involving broken satiety signals, chronic insulin resistance, and hormonal imbalance. GLP-3 agonists help correct these underlying biological mechanisms so that diet and exercise can actually work the way they're supposed to. It's not a shortcut; it's fixing the road.",
  },
  {
    id: 6,
    title: '"Research Only"',
    myth: 'The "Not for Human Consumption" label means it\'s toxic.',
    reality:
      "This label is a legal classification, not a safety warning. The molecule itself may be well-characterized and studied, but it hasn't completed the full FDA approval process for consumer sale — a process that can take over a decade and cost billions. \"Research only\" is how it's legally sold before that process concludes. It's a regulatory status, not a toxicity report.",
  },
  {
    id: 7,
    title: "Muscle Loss",
    myth: 'I\'ll lose all my muscle and get "Ozempic face."',
    reality:
      "Rapid weight loss from any method — medication, surgery, or crash dieting — can lead to muscle loss if you're not eating enough protein and doing resistance training. The drug doesn't selectively eat your muscle tissue. Poor nutrition and inactivity do. People who maintain adequate protein intake (around 1g per pound of lean body mass) and lift weights consistently on GLP-3s typically preserve their muscle mass just fine.",
  },
  {
    id: 8,
    title: "The Rebound",
    myth: "You gain it all back when you stop.",
    reality:
      "If you use the medication as a crutch and change absolutely nothing about your habits, lifestyle, or relationship with food — then yes, you'll likely regain weight. That's true of literally any intervention. But if you use it as a tool to build healthier eating patterns, increase your activity, and add muscle mass, you can absolutely maintain your results after tapering off. The medication buys you time and metabolic breathing room to build a sustainable foundation.",
  },
  {
    id: 9,
    title: "Side Effects",
    myth: "I'll be dangerously nauseous 24/7.",
    reality:
      "Severe nausea and GI distress typically come from one thing: starting at too high a dose. The standard protocol is to begin with a micro-dose and slowly titrate upward over weeks, giving your body time to adjust. Most people who follow a proper titration schedule experience zero to very mild side effects — maybe slight appetite suppression or occasional mild nausea that passes within the first week or two.",
  },
  {
    id: 10,
    title: "Long-Term Safety",
    myth: "These are brand new; we don't know the long-term effects.",
    reality:
      "GLP-3 triple agonists like retatrutide are indeed newer compounds. But they're built on GLP-1 receptor agonist technology that has been safely used in humans and rigorously studied since 2005 — that's nearly two decades of clinical data. The underlying mechanism of action is well-understood. Newer doesn't automatically mean untested; it means the science has evolved.",
  },
];
