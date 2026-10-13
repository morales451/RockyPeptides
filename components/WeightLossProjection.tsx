"use client";

import { useMemo, useState } from "react";
import { PROJECTION_WEEKS as WEEKS, computeProjection } from "@/lib/projection";
import { Label, BarXL, BarMD, Row } from "@/components/Label";

const LB_PER_KG = 2.20462;
const ASYMPTOTE_FOR_AXIS = 0.16;
const INK = "#0d2b4e";

type Unit = "lbs" | "kg";

export default function WeightLossProjection() {
  const [unit, setUnit] = useState<Unit>("lbs");
  const [weightInput, setWeightInput] = useState("220");

  const startingWeight = Math.max(0, Number(weightInput) || 0);
  const points = useMemo(() => computeProjection(startingWeight), [startingWeight]);

  const milestones = [
    { label: "Week 12", point: points[12] },
    { label: "Week 24", point: points[24] },
    { label: "Week 48", point: points[48] },
  ];

  // Chart geometry
  const W = 640;
  const H = 260;
  const PAD = { top: 16, right: 16, bottom: 30, left: 44 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const yMin = startingWeight * (1 - ASYMPTOTE_FOR_AXIS * 1.05);
  const yMax = startingWeight;
  const ySpan = Math.max(yMax - yMin, 1);
  const x = (week: number) => PAD.left + (week / WEEKS) * innerW;
  const y = (w: number) => PAD.top + ((yMax - w) / ySpan) * innerH;
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.week).toFixed(1)} ${y(p.weight).toFixed(1)}`)
    .join(" ");
  const yTicks = [0, 1, 2, 3].map((i) => yMin + (ySpan * i) / 3);

  function convertInput(next: Unit) {
    const current = Number(weightInput);
    if (!Number.isFinite(current) || current <= 0 || next === unit) {
      setUnit(next);
      return;
    }
    const converted = next === "kg" ? current / LB_PER_KG : current * LB_PER_KG;
    setWeightInput(converted.toFixed(0));
    setUnit(next);
  }

  return (
    <section id="projection" className="bg-mint">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.25fr] md:gap-14 md:px-6 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="headline text-[clamp(2.25rem,5vw,3.75rem)]">
            See what a year could look like
          </h2>
          <p className="prose-measure mt-5 text-xl leading-snug">
            Type your weight. The label updates with a projection for our
            2&nbsp;mg weekly plan, based on published trial data.
          </p>
          <p className="prose-measure mt-4 text-lg">
            It&rsquo;s an estimate, not a promise. Your results depend on you,
            your body and your habits.
          </p>
        </div>

        <Label>
          <h3 className="label-title">Your Projection</h3>
          <BarXL />
          <div className="flex flex-wrap items-end justify-between gap-3 pb-1">
            <label htmlFor="proj-weight" className="font-extrabold">
              Starting weight
            </label>
            <div className="flex">
              <input
                id="proj-weight"
                type="number"
                inputMode="decimal"
                min={50}
                max={unit === "lbs" ? 700 : 320}
                step="1"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                className="field num w-28 border-r-0 text-right text-xl font-black"
              />
              <div className="flex border-2 border-ink" role="group" aria-label="Unit">
                {(["lbs", "kg"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => convertInput(u)}
                    aria-pressed={unit === u}
                    className={`min-w-12 px-3 font-bold ${
                      unit === u ? "bg-ink text-white" : "bg-white text-ink hover:bg-mint-pale"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <BarMD />
          {milestones.map(({ label, point }, i) => (
            <Row
              key={label}
              first={i === 0}
              name={<span className="font-extrabold">{label}</span>}
              value={
                <span aria-live="polite">
                  {point.weight.toFixed(0)} {unit}
                  <span className="ml-3 inline-block w-16 font-normal text-ink-soft">
                    &minus;{(point.lossFrac * 100).toFixed(1)}%
                  </span>
                </span>
              }
            />
          ))}
          <BarMD />
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label={`Projected weight over ${WEEKS} weeks, from ${startingWeight.toFixed(0)} to ${points[48].weight.toFixed(0)} ${unit} by week 48`}
            className="mt-2 h-auto w-full"
            data-print-row
          >
            {yTicks.map((t, i) => (
              <g key={i}>
                <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke={INK} strokeOpacity="0.18" />
                <text x={PAD.left - 8} y={y(t)} dy="0.32em" textAnchor="end" fontSize="12" fill={INK}>
                  {t.toFixed(0)}
                </text>
              </g>
            ))}
            {[0, 12, 24, 36, 48].map((t) => (
              <text key={t} x={x(t)} y={H - 8} textAnchor="middle" fontSize="12" fill={INK}>
                Wk {t}
              </text>
            ))}
            <line x1={PAD.left} x2={W - PAD.right} y1={PAD.top + innerH} y2={PAD.top + innerH} stroke={INK} strokeWidth="2" />
            <path d={path} fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
            {milestones.map(({ point }) => (
              <rect
                key={point.week}
                x={x(point.week) - 6}
                y={y(point.weight) - 6}
                width="12"
                height="12"
                fill="#2fd3a0"
                stroke={INK}
                strokeWidth="2.5"
              />
            ))}
          </svg>
          <p className="footnote mt-3">
            Modeled on percent body-weight change in Jastreboff et al.,{" "}
            <em>NEJM</em>{" "}2023 (Phase 2 retatrutide trial). The 2&nbsp;mg curve
            is extrapolated below the lowest published dose. Individual results
            vary with diet, activity and biology. Not medical advice.
          </p>
        </Label>
      </div>
    </section>
  );
}
