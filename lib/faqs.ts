export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "Reach out to us through the contact form at the bottom of this page or send us a message directly. We'll get back to you quickly and walk you through everything.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "We currently only serve the Houston area with local delivery ($20) or free pickup. Most orders are fulfilled same-day or next-day depending on when you reach out.",
  },
  {
    id: 3,
    question: "What comes with my order?",
    answer:
      "Our kits come with everything you need to get started: BAC water, retatrutide, syringes, and alcohol wipes. No hunting around for supplies separately.",
  },
  {
    id: 4,
    question: "Is it legal to purchase peptides?",
    answer:
      "Peptides sold as research compounds are legal to purchase in the United States. They are classified as research chemicals, not controlled substances. As with any compound, we encourage you to do your own research and consult with a healthcare professional.",
  },
  {
    id: 5,
    question: "Do I need a prescription?",
    answer:
      "No prescription is required for research peptides. However, if you're considering using any compound for personal health purposes, we strongly recommend consulting with a qualified healthcare provider first.",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, Zelle, Venmo, and Cash App. Whatever is easiest for you.",
  },
  {
    id: 7,
    question: "What if there's a problem with my order?",
    answer:
      "Reach out to us through the contact form on this page. If you don't feel the effects discussed on this page, we'll work with you on a refund. We stand behind our product because we use it ourselves.",
  },
  {
    id: 8,
    question: "How should I store my peptides?",
    answer:
      "Unopened lyophilized (powder) peptides can be stored at room temperature, but refrigeration extends shelf life. Once reconstituted with BAC water, peptides must be refrigerated at 2–8°C (36–46°F) and used within 28–30 days. BAC water itself should be stored at room temperature and used within 28 days of opening. Check out our Storage & Handling guide above for the full breakdown.",
  },
  {
    id: 9,
    question: "What diet should I follow while on retatrutide?",
    answer:
      "Focus on high-protein meals — aim for around 1 gram of protein per pound of your target body weight daily. Your appetite will naturally decrease, so make sure the food you do eat counts. Lean meats, eggs, Greek yogurt, and protein shakes are your best friends. Stay hydrated and don't skip meals entirely, even if you're not hungry.",
  },
  {
    id: 10,
    question: "How will I know it's working?",
    answer:
      "Most people notice reduced appetite and less \"food noise\" within the first 1–2 weeks. Visible weight loss typically shows up by weeks 4–6. You may also notice improved energy levels and fewer cravings. If you're not feeling anything after 4 weeks at 1mg, that's when you move up to 2mg.",
  },
  {
    id: 11,
    question: "Are there any drug interactions I should know about?",
    answer:
      "GLP-3 agonists can affect how your body absorbs oral medications, since they slow gastric emptying. If you take insulin, blood sugar medications, or blood thinners, talk to your doctor before starting. The same goes for any prescription medication — when in doubt, ask your healthcare provider.",
  },
  {
    id: 12,
    question: "Who should NOT use retatrutide?",
    answer:
      "Do not use if you have a personal or family history of medullary thyroid cancer (MEN2), history of pancreatitis, are pregnant or breastfeeding, or are under 18. If you're on prescription medications or have pre-existing conditions, consult your doctor first. See our contraindications section above for the full list.",
  },
  {
    id: 13,
    question: "What results can I realistically expect?",
    answer:
      "Results vary, but on our recommended 1–2mg protocol, most people see noticeable appetite reduction in weeks 1–2 and measurable weight loss by month 2–3. The Reddit community posts we feature on this page show a wide range of outcomes — from 25 lbs to over 100 lbs lost — but those are on various protocols and timelines. The key is consistency, proper diet, and patience.",
  },
];
