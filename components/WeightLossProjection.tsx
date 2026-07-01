"use client";

import { useMemo, useState } from "react";
import {
  PROJECTION_WEEKS as WEEKS,
  computeProjection,
} from "@/lib/projection";

const LB_PER_KG = 2.20462;
const ASYMPTOTE_FOR_AXIS = 0.16;

type Unit = "lbs" | "kg";

function formatWeight(value: number, unit: Unit) {
  return `${value.toFixed(1)} ${unit}`;
}

export default function WeightLossProjection() {
  const [unit, setUnit] = useState<Unit>("lbs");
  const [weightInput, setWeightInput] = useState("220");

  const startingWeight = Math.max(0, Number(weightInput) || 0);

  const points = useMemo(
    () => computeProjection(startingWeight),
    [startingWeight],
  );

  const w12 = points[12];
  const w24 = points[24];
  const w48 = points[48];

  // SVG geometry
  const W = 720;
  const H = 320;
  const PAD = { top: 24, right: 24, bottom: 36, left: 56 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const xMax = WEEKS;
  const yMin = startingWeight * (1 - ASYMPTOTE_FOR_AXIS * 1.05);
  const yMax = startingWeight;
  const ySpan = Math.max(yMax - yMin, 1);

  const xScale = (week: number) => PAD.left + (week / xMax) * innerW;
  const yScale = (w: number) =>
    PAD.top + ((yMax - w) / ySpan) * innerH;

  const toPath = (slice: typeof points) =>
    slice
      .map(
        (p, i) =>
          `${i === 0 ? "M" : "L"} ${xScale(p.week).toFixed(2)} ${yScale(
            p.weight,
          ).toFixed(2)}`,
      )
      .join(" ");

  const curvePath = toPath(points);

  const xTicks = [0, 12, 24, 36, 48];
  const yTickCount = 5;
  const yTicks = Array.from({ length: yTickCount }, (_, i) => {
    return yMin + (ySpan * i) / (yTickCount - 1);
  });

  function convertInput(next: Unit) {
    const current = Number(weightInput);
    if (!Number.isFinite(current) || current <= 0 || next === unit) {
      setUnit(next);
      return;
    }
    const converted =
      next === "kg" ? current / LB_PER_KG : current * LB_PER_KG;
    setWeightInput(converted.toFixed(1));
    setUnit(next);
  }

  return (
    <section
      id="projection"
      className="scroll-mt-20 bg-white py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-ocean-500 text-sm font-semibold uppercase tracking-widest mb-4">
          Projection Tool
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-sage-800 mb-4">
          Project your weight loss over 12 months
        </h2>
        <p className="text-lg text-warm-800/80 mb-10 max-w-2xl">
          Enter your starting weight to see a projected curve on our 2&nbsp;mg
          weekly protocol, modeled on published Phase 2 trial data for
          retatrutide.
        </p>

        <div className="bg-sage-50 rounded-2xl border border-sage-200 p-6 md:p-8">
          <div className="mb-8 max-w-sm">
            <label
              htmlFor="proj-weight"
              className="block text-sm font-medium text-sage-800 mb-2"
            >
              Starting weight
            </label>
            <div className="flex">
              <input
                id="proj-weight"
                type="number"
                inputMode="decimal"
                min={50}
                max={unit === "lbs" ? 700 : 320}
                step="0.1"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                className="flex-1 min-w-0 px-4 py-3 rounded-l-lg bg-white text-sage-800 border-2 border-r-0 border-sage-200 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none"
              />
              <div className="flex rounded-r-lg overflow-hidden border-2 border-sage-200">
                {(["lbs", "kg"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => convertInput(u)}
                    aria-pressed={unit === u}
                    className={`px-3 text-sm font-medium transition-colors cursor-pointer ${
                      unit === u
                        ? "bg-ocean-500 text-white"
                        : "bg-white text-sage-700 hover:bg-sage-100"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Week 12", point: w12 },
              { label: "Week 24", point: w24 },
              { label: "Week 48", point: w48 },
            ].map(({ label, point }) => (
              <div
                key={label}
                className="bg-white rounded-xl border border-sage-200 p-4 text-center"
              >
                <p className="text-xs uppercase tracking-wider text-warm-800/60 mb-1">
                  {label}
                </p>
                <p className="text-xl md:text-2xl font-bold text-sage-800">
                  {formatWeight(point.weight, unit)}
                </p>
                <p className="text-sm text-ocean-500 font-semibold">
                  −{(point.lossFrac * 100).toFixed(1)}%
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-sage-200 p-3 md:p-4">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              role="img"
              aria-label={`Projected weight curve over ${WEEKS} weeks at 2 mg per week`}
              className="w-full h-auto"
            >
              <defs>
                <linearGradient id="proj-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0891b2" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                </linearGradient>
              </defs>

              {yTicks.map((t, i) => (
                <g key={i}>
                  <line
                    x1={PAD.left}
                    x2={W - PAD.right}
                    y1={yScale(t)}
                    y2={yScale(t)}
                    stroke="#e5e7eb"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={PAD.left - 8}
                    y={yScale(t)}
                    dy="0.32em"
                    textAnchor="end"
                    fontSize="11"
                    fill="#64748b"
                  >
                    {t.toFixed(0)}
                  </text>
                </g>
              ))}

              {xTicks.map((t) => (
                <text
                  key={t}
                  x={xScale(t)}
                  y={H - PAD.bottom + 18}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#64748b"
                >
                  Wk {t}
                </text>
              ))}

              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={PAD.top + innerH}
                y2={PAD.top + innerH}
                stroke="#cbd5e1"
              />
              <line
                x1={PAD.left}
                x2={PAD.left}
                y1={PAD.top}
                y2={PAD.top + innerH}
                stroke="#cbd5e1"
              />

              {/* Area fill under the full curve */}
              <path
                d={`${curvePath} L ${xScale(WEEKS).toFixed(2)} ${(
                  PAD.top + innerH
                ).toFixed(2)} L ${xScale(0).toFixed(2)} ${(
                  PAD.top + innerH
                ).toFixed(2)} Z`}
                fill="url(#proj-fill)"
              />

              {/* Full curve line */}
              <path
                d={curvePath}
                fill="none"
                stroke="#0891b2"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Milestone markers */}
              {[w12, w24, w48].map((p) => (
                <circle
                  key={p.week}
                  cx={xScale(p.week)}
                  cy={yScale(p.weight)}
                  r={4}
                  fill="#0891b2"
                  stroke="#fff"
                  strokeWidth="2"
                />
              ))}

              <text
                x={W - PAD.right - 8}
                y={PAD.top + 14}
                textAnchor="end"
                fontSize="11"
                fill="#64748b"
              >
                Weight ({unit})
              </text>
            </svg>
          </div>

          <p className="text-xs text-warm-800/60 mt-6 leading-relaxed">
            Projection modeled on percent body-weight change reported in
            Jastreboff et al., <em>NEJM</em> 2023 (Phase 2 retatrutide trial).
            The 2&nbsp;mg curve is extrapolated below the lowest published
            arm. Individual results vary based on adherence, diet, activity,
            and biology. Not medical advice.
          </p>
        </div>
      </div>
    </section>
  );
}
