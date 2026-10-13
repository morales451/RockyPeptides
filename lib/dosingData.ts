export interface TitrationStep {
  weeks: string;
  dose: string;
  notes: string;
}

export const titrationSchedule: TitrationStep[] = [
  {
    weeks: "Weeks 1–4",
    dose: "1 mg/week",
    notes:
      "Your starting dose. Let your body adjust. This is when most people notice less food noise.",
  },
  {
    weeks: "Week 5 on",
    dose: "2 mg/week",
    notes:
      "Move up to 2 mg and stay there. Other plans go higher, but most people do great here with few side effects.",
  },
];

export interface StorageRule {
  label: string;
  detail: string;
}

export const storageRules: StorageRule[] = [
  {
    label: "Powder (before mixing)",
    detail:
      "Room temperature is fine; the fridge makes it last longer. Keep it away from sun and heat.",
  },
  {
    label: "After mixing",
    detail:
      "Must go in the fridge at 36–46°F (2–8°C). Use within 28–30 days. Never freeze it.",
  },
  {
    label: "BAC water",
    detail:
      "Room temperature (59–86°F), sealed and out of the sun. Good for 28 days once opened. Don’t freeze.",
  },
  {
    label: "Keep it dark",
    detail: "Leave vials in the box or wrap them in foil. Light breaks peptides down.",
  },
  {
    label: "Keep it clean",
    detail: "Wipe the vial top with an alcohol pad every time. Use a fresh syringe every time.",
  },
];

export const reconstitutionSteps: string[] = [
  "Lay out your peptide vial, BAC water, a syringe and alcohol wipes.",
  "Wipe the tops of both vials with an alcohol wipe.",
  "Draw BAC water into the syringe (usually 1–2 mL, depending on your dose math).",
  "Insert the needle at an angle and let the water run slowly down the inside of the vial. Don’t spray it onto the powder.",
  "Gently swirl until the powder dissolves. Don’t shake it.",
  "Write the date on the vial and put it in the fridge right away.",
];

export interface InjectionStep {
  title: string;
  detail: string;
}

export const injectionSteps: InjectionStep[] = [
  {
    title: "Pick a spot",
    detail:
      "The belly, about 2 inches from your belly button, is most common. The front of the thigh or back of the upper arm work too. Switch spots each time.",
  },
  {
    title: "Clean and pinch",
    detail: "Wipe the spot with an alcohol wipe, then pinch a small fold of skin.",
  },
  {
    title: "Inject",
    detail:
      "Insert the needle at a 45° angle, push the plunger slowly, then remove it and let go of the skin. Done.",
  },
];
