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
      "We currently only serve the Houston area with local delivery and pickup. This means you get your order fast — typically same-day or next-day depending on when you reach out.",
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
      "Reach out to us through the contact form on this page. We take customer satisfaction seriously and will work with you to resolve any issues — whether it's a question about your product or anything else.",
  },
  {
    id: 8,
    question: "How should I store my peptides?",
    answer:
      "Unopened lyophilized (powder) peptides can be stored at room temperature, but refrigeration extends shelf life. Once reconstituted with BAC water, peptides must be refrigerated at 2–8°C (36–46°F) and used within 28–30 days. BAC water itself should be stored at room temperature and used within 28 days of opening. Check out our Storage & Handling guide above for the full breakdown.",
  },
];
