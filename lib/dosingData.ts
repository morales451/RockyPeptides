export interface TitrationStep {
  weeks: string;
  dose: string;
  notes: string;
}

export const titrationSchedule: TitrationStep[] = [
  {
    weeks: "Weeks 1–4",
    dose: "1 mg/week",
    notes: "Starting dose. Let your body adjust. Mild appetite changes are normal. This is where most people start noticing reduced food noise.",
  },
  {
    weeks: "Week 5+",
    dose: "2 mg/week",
    notes: "Move up to 2 mg and stay here. While other protocols recommend going higher, we've seen most people achieve great results at this dose with minimal side effects.",
  },
];

export interface StorageRule {
  label: string;
  detail: string;
}

export const storageRules: StorageRule[] = [
  {
    label: "Lyophilized peptide (powder form)",
    detail:
      "Store at room temperature or refrigerate. Refrigeration extends shelf life. Keep away from direct sunlight and heat.",
  },
  {
    label: "Reconstituted peptide (mixed with BAC water)",
    detail:
      "MUST be refrigerated at 2–8°C (36–46°F). Use within 28–30 days. Never freeze reconstituted peptide.",
  },
  {
    label: "Bacteriostatic (BAC) water",
    detail:
      "Store at room temperature (15–30°C / 59–86°F). Keep the vial sealed and away from direct sunlight. Once opened, BAC water is good for up to 28 days — refrigeration can help extend its usable life. Do not freeze.",
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
