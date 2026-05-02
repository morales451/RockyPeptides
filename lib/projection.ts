const DOSE = { asymptote: 0.16, k: 0.039 };

export const PROJECTION_WEEKS = 52;
export const PROJECTION_FREE_WEEKS = 12;

export type ProjectionPoint = {
  week: number;
  weight: number;
  lossFrac: number;
};

export function computeProjection(startingWeight: number): ProjectionPoint[] {
  const w = Math.max(0, startingWeight);
  return Array.from({ length: PROJECTION_WEEKS + 1 }, (_, week) => {
    const lossFrac = DOSE.asymptote * (1 - Math.exp(-DOSE.k * week));
    return { week, weight: w * (1 - lossFrac), lossFrac };
  });
}
