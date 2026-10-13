# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: adults in the Houston area who are curious about GLP-3 peptides (retatrutide) but skeptical of them. Most arrive through a referral link from one of the dealers (Alex, Eric or Luis). Many have heard mixed claims, may have tried diets or GLP-1 medications already, and want plain answers before they commit.

Secondary: current customers who come back for dosing guidance (the dosing cheat sheet) and ongoing education after buying.

## Product Purpose

Evolve Peptides sells complete retatrutide kits locally in Houston. The site is an educational resource that takes a skeptical visitor from "is this legit?" to a confident decision, then supports them while they use the product.

Success means:
1. A phone lead submitted through the contact form (supply choice, plus "Who is your dealer?" so the right dealer can follow up by text or call).
2. Customers using the product safely and correctly, with the dosing guide and education doing that work after purchase.

## Positioning

The site is run by people who use the product themselves and lead with education instead of hype ("Education over hype. Science over stigma."). It offers complete kits (vial, BAC water, syringes, alcohol wipes), local Houston delivery or free pickup with fast fulfillment, and a person to talk to. It openly addresses the industry's stigma: the supply chain, the "research only" label, and the most common objections.

## Operating Context

- Single long-form landing page (`app/page.tsx`) that moves from the visitor's problem, through the science, trust, dosing, contraindications and expectations, to proof, pricing, myths, FAQ and the contact form.
- Printable dosing cheat sheet (`app/dosing-cheat-sheet/page.tsx`) for customers who already have the product.
- Weight-loss projection tool (`components/WeightLossProjection.tsx`), currently fully unlocked.
- Leads go through Netlify Forms (`public/__forms.html`, `lib/forms.ts`), then dealers follow up manually. There is no online checkout.
- Visitors mostly arrive on phones from a dealer's link, so mobile is the main context.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind CSS v4, deployed on Netlify.
- Pricing: 1-month kit $75, 3-month $200, 6-month $375. Houston delivery $20; local pickup free. Refund offered if the visitor doesn't feel the effects described on the page.
- Lead capture currently collects phone only (email was deliberately removed), with a TCPA disclosure.
- Copy currently presents the site as an educational resource, with a medical disclaimer in the footer.
- Open (not confirmed as binding rules): whether the educational/no-medical-claims framing, phone-only capture, Reddit-only proof and dealer-only ordering are permanent constraints. Raise these before changing any of them.

## Brand Commitments

- Name: Evolve Peptides. Logo: `public/Gemini_Generated_Image_u6pjcwu6pjcwu6pj.png` (also used as favicon and OG image; inverted in the footer).
- Voice: plain-language, honest and non-defensive. It validates the visitor's skepticism ("Your skepticism is healthy") and avoids jargon and spin.
- Tagline: "Education over hype. Science over stigma."

## Evidence on Hand

- Five real Reddit r/Retatrutide success posts with links (`lib/socialProof.ts`). These are third-party posts, not Evolve customers.
- Myths and FAQs (`lib/myths.ts`, `lib/faqs.ts`), dosing data (`lib/dosingData.ts`).
- None on hand: customer testimonials, customer before/after photos, clinical data of Evolve's own, third-party lab test results, press. Future work must not fabricate any of these.

## Product Principles

1. Earn trust before asking for anything; education comes before the sale.
2. Respect skepticism: name the hard questions and answer them plainly.
3. Keep it simple for a newcomer: one kit, clear prices, one way to reach a real person.
4. Serve the customer after purchase too; safe, correct use matters as much as the first order.
5. Mobile-first: most visitors arrive on a phone from a dealer's link.
