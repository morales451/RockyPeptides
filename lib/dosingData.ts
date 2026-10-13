/**
 * Our kit math, kept in one place so the site and the cheat sheet agree:
 * one 3 mL BAC water vial mixes three 10 mg retatrutide vials at 1 mL each.
 * 10 mg in 1 mL means 1 unit on a 100-unit insulin syringe = 0.1 mg.
 */
export const BAC_ML = 3;
export const RETA_MG = 10;
export const WATER_PER_VIAL_ML = 1;
export const MG_PER_UNIT = RETA_MG / (WATER_PER_VIAL_ML * 100);

export interface DoseStep {
  week: string;
  short: string;
  mg: number;
  units: number;
  note: string;
}

export const doseSchedule: DoseStep[] = [
  { week: "Week 1", short: "Wk 1", mg: 1, units: 10, note: "Your starting dose. Let your body adjust." },
  { week: "Week 2", short: "Wk 2", mg: 1.5, units: 15, note: "A small step up." },
  { week: "Week 3 on", short: "Wk 3+", mg: 2, units: 20, note: "Stay here. This is where most people do great." },
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
  "Lay out one retatrutide vial, the BAC water, a syringe and alcohol wipes.",
  "Wipe the tops of both vials with an alcohol wipe.",
  "Draw 1 mL of BAC water: fill the syringe to the 100 line.",
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
