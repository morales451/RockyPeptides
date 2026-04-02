export interface TitrationStep {
  weeks: string;
  dose: string;
  notes: string;
}

export const titrationSchedule: TitrationStep[] = [
  {
    weeks: "Weeks 1–4",
    dose: "2 mg/week",
    notes: "Starting dose. Let your body adjust. Mild appetite changes are normal.",
  },
  {
    weeks: "Weeks 5–8",
    dose: "4 mg/week",
    notes: "First increase. Most people notice reduced food noise here.",
  },
  {
    weeks: "Weeks 9–12",
    dose: "8 mg/week",
    notes: "Significant appetite suppression. Monitor how you feel and adjust if needed.",
  },
  {
    weeks: "Week 13+",
    dose: "12 mg/week",
    notes: "Maintenance dose. Stay here as long as you're tolerating it well.",
  },
];

export interface StorageRule {
  label: string;
  detail: string;
}

export const storageRules: StorageRule[] = [
  {
    label: "Lyophilized (powder form)",
    detail:
      "Store at room temperature or refrigerate. Refrigeration extends shelf life. Keep away from direct sunlight and heat.",
  },
  {
    label: "Reconstituted (mixed with BAC water)",
    detail:
      "MUST be refrigerated at 2–8°C (36–46°F). Use within 28–30 days. Never freeze reconstituted peptide.",
  },
  {
    label: "Protect from light",
    detail:
      "Keep vials in their box or wrapped in foil. UV light degrades peptides over time.",
  },
  {
    label: "Keep it clean",
    detail:
      "Always swab the vial top with an alcohol pad before drawing. Use a fresh syringe every time.",
  },
];

export const reconstitutionSteps: string[] = [
  "Gather your supplies: peptide vial, bacteriostatic (BAC) water, insulin syringe, and alcohol swabs.",
  "Wipe the tops of both the peptide vial and BAC water vial with alcohol swabs.",
  "Draw your desired amount of BAC water into the syringe (typically 1–2 mL depending on your dosing math).",
  "Insert the needle into the peptide vial at an angle. Let the water drip slowly down the inside wall — never spray directly onto the powder.",
  "Gently swirl the vial until the powder is fully dissolved. Do not shake it.",
  "Label the vial with the date and concentration, then refrigerate immediately.",
];
