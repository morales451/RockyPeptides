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
      "Browse our product catalog, select the peptide and quantity you need, and follow the checkout process. If you have questions before ordering, use the contact form below and we'll get back to you quickly.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Most orders ship within 1–2 business days. Domestic delivery typically takes 3–5 business days depending on your location. You'll receive a tracking number as soon as your order ships.",
  },
  {
    id: 3,
    question: "What comes with my order?",
    answer:
      "Your order includes the peptide vial(s) you selected, securely packaged to maintain product integrity during transit. Reconstitution supplies (BAC water, syringes, alcohol swabs) are available separately or as part of a starter kit.",
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
      "We accept major credit and debit cards, as well as cryptocurrency for those who prefer it. All transactions are processed securely.",
  },
  {
    id: 7,
    question: "What if there's a problem with my order?",
    answer:
      "Reach out to us through the contact form on this page. We take customer satisfaction seriously and will work with you to resolve any issues — whether it's a shipping delay, a damaged package, or a question about your product.",
  },
  {
    id: 8,
    question: "How should I store my peptides?",
    answer:
      "Unopened lyophilized (powder) peptides can be stored at room temperature, but refrigeration extends shelf life. Once reconstituted with BAC water, peptides must be refrigerated at 2–8°C (36–46°F) and used within 28–30 days. Check out our Storage & Handling guide above for the full breakdown.",
  },
];
