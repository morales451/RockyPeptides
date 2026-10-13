export interface Myth {
  id: number;
  title: string;
  myth: string;
  reality: string;
}

export const myths: Myth[] = [
  {
    id: 1,
    title: "Lab reports",
    myth: "COAs on websites prove it's safe.",
    reality:
      "A COA (Certificate of Analysis) is a lab report on what's in the vial. Honestly, most COAs in this industry can be faked, and ours are no exception. We buy from manufacturers that make millions of units, and we're happy to share the COAs we get. But a PDF shouldn't be your test. Judge a seller by its source, its consistency, and whether it's honest with you.",
  },
  {
    id: 2,
    title: "Clinics",
    myth: "I should only trust expensive wellness clinics.",
    reality:
      "Clinics are great for a doctor's advice and bloodwork, and for many people that's the right path. But the active ingredient usually comes from the same overseas makers either way. A clinic adds a doctor's oversight, which has real value, plus a big markup. You're not getting a different molecule.",
  },
  {
    id: 3,
    title: "Needles",
    myth: "Injecting myself is painful and taboo.",
    reality:
      "The needles are tiny insulin needles, about as thin as a hair. You pinch a little belly fat and barely feel it. Millions of people with diabetes and going through IVF do this every day.",
  },
  {
    id: 4,
    title: "Steroids",
    myth: "Peptides are unregulated steroids.",
    reality:
      "No. Steroids are synthetic hormones that override your system. Peptides are short chains of amino acids, the same building blocks as the protein you eat. They signal your body to do what it already does. It's the difference between hotwiring a car and using the key.",
  },
  {
    id: 5,
    title: "The easy way",
    myth: "It's cheating. Just eat less and exercise more.",
    reality:
      "For many people, weight isn't a willpower problem. Fullness signals, insulin and hormones get out of balance. GLP-3s help fix those signals so diet and exercise can actually work. It's not a shortcut; it's fixing the road.",
  },
  {
    id: 6,
    title: "“Research only”",
    myth: "The ‘not for human consumption’ label means it's toxic.",
    reality:
      "It's a legal status, not a safety warning. It means the compound hasn't finished FDA approval for consumer sale, a process that can take over a decade and billions of dollars. It says nothing about the molecule being toxic.",
  },
  {
    id: 7,
    title: "Muscle loss",
    myth: "I'll lose all my muscle and get ‘Ozempic face.’",
    reality:
      "Losing weight fast in any way can cost muscle if you skip protein and strength training. The drug doesn't target muscle; poor nutrition and inactivity do. Eat about 1 g of protein per pound of lean body mass and lift weights, and most people keep their muscle.",
  },
  {
    id: 8,
    title: "The rebound",
    myth: "You gain it all back when you stop.",
    reality:
      "If nothing else changes, weight can come back. That's true of any approach. Use the time to build habits: protein, movement, strength. Then you can taper off and keep your results.",
  },
  {
    id: 9,
    title: "Side effects",
    myth: "I'll be badly nauseous all the time.",
    reality:
      "Bad nausea usually comes from starting too high. That's why we start at 1 mg and go slow. Most people feel little or nothing, or mild nausea that fades in a week or two.",
  },
  {
    id: 10,
    title: "Long-term safety",
    myth: "These are brand new; nobody knows the long-term effects.",
    reality:
      "Retatrutide is newer. But it builds on GLP-1 medicines that have been used and studied in people since 2005, nearly two decades of data. How it works is well understood.",
  },
];
