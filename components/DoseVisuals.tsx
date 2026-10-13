import { doseSchedule, BAC_ML, RETA_MG, WATER_PER_VIAL_ML } from "@/lib/dosingData";

const INK = "#0d2b4e";
const MINT = "#2fd3a0";

/* ── Mixing: one 3 mL BAC vial fills three 10 mg vials ─────────────── */

function VialShape({
  x,
  y,
  w,
  h,
  liquid,
  powder = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  liquid: number;
  powder?: boolean;
}) {
  const neck = w * 0.5;
  const capH = h * 0.12;
  const neckH = h * 0.08;
  const bodyY = y + capH + neckH;
  const bodyH = h - capH - neckH;
  const liquidH = bodyH * liquid;
  return (
    <g>
      <rect x={x + (w - neck) / 2 - 3} y={y} width={neck + 6} height={capH} fill={INK} />
      <rect x={x + (w - neck) / 2} y={y + capH} width={neck} height={neckH} fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x={x} y={bodyY} width={w} height={bodyH} fill="#fff" stroke={INK} strokeWidth="3" />
      {liquid > 0 && (
        <rect x={x + 1.5} y={bodyY + bodyH - liquidH} width={w - 3} height={liquidH - 1.5} fill={MINT} />
      )}
      {powder && (
        <rect x={x + 6} y={bodyY + bodyH - 12} width={w - 12} height={8} fill={INK} opacity="0.25" />
      )}
      <rect x={x} y={bodyY} width={w} height={bodyH} fill="none" stroke={INK} strokeWidth="3" />
    </g>
  );
}

export function MixVisual({ className = "" }: { className?: string }) {
  const targets = [0, 1, 2];
  return (
    <svg
      viewBox="0 0 560 250"
      className={className}
      role="img"
      aria-label={`One ${BAC_ML} mL bottle of BAC water mixes three ${RETA_MG} mg retatrutide vials, ${WATER_PER_VIAL_ML} mL into each.`}
      style={{ fontFamily: "inherit" }}
    >
      {/* BAC water */}
      <VialShape x={20} y={30} w={120} h={180} liquid={0.9} />
      {[1, 2].map((i) => (
        <line key={i} x1={24} x2={136} y1={210 - 0.9 * 158 * (i / 3)} y2={210 - 0.9 * 158 * (i / 3)} stroke={INK} strokeWidth="2" strokeDasharray="6 5" />
      ))}
      {[0, 1, 2].map((i) => (
        <text key={i} x={80} y={210 - 0.9 * 158 * ((i + 0.5) / 3) + 6} textAnchor="middle" fontSize="17" fontWeight="800" fill={INK}>
          1 mL
        </text>
      ))}
      <text x={80} y={238} textAnchor="middle" fontSize="18" fontWeight="900" fill={INK}>
        BAC water · {BAC_ML} mL
      </text>

      {/* Arrows */}
      {targets.map((i) => {
        const ty = 70 + i * 62;
        return (
          <g key={i}>
            <path d={`M146 ${92 + i * 47} C 220 ${92 + i * 47}, 240 ${ty}, 300 ${ty}`} fill="none" stroke={INK} strokeWidth="3" />
            <path d={`M296 ${ty - 7} L308 ${ty} L296 ${ty + 7}`} fill="none" stroke={INK} strokeWidth="3" />
          </g>
        );
      })}

      {/* Retatrutide vials */}
      {targets.map((i) => {
        const ty = 70 + i * 62;
        return (
          <g key={i}>
            <VialShape x={318} y={ty - 26} w={40} h={52} liquid={0.55} />
            <text x={372} y={ty + 2} fontSize="19" fontWeight="900" fill={INK}>
              Reta {RETA_MG} mg
            </text>
            <text x={372} y={ty + 22} fontSize="15" fontWeight="600" fill={INK}>
              + {WATER_PER_VIAL_ML} mL water
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Syringe filled to a dose ───────────────────────────────────────── */

export function Syringe({ units, className = "" }: { units: number; className?: string }) {
  const x0 = 70; // the 0 line, at the needle end
  const x100 = 520;
  const px = (u: number) => x0 + ((x100 - x0) * u) / 100;
  const top = 34;
  const bottom = 74;
  const fillEnd = px(units);
  return (
    <svg
      viewBox="0 0 600 112"
      className={className}
      role="img"
      aria-label={`Insulin syringe filled to the ${units} unit line`}
      style={{ fontFamily: "inherit" }}
    >
      {/* needle and hub */}
      <line x1={4} x2={50} y1={54} y2={54} stroke={INK} strokeWidth="2.5" />
      <rect x={50} y={44} width={x0 - 50} height={20} fill={INK} />
      {/* liquid */}
      <rect x={x0} y={top} width={fillEnd - x0} height={bottom - top} fill={MINT} />
      {/* stopper and plunger */}
      <rect x={fillEnd} y={top} width={12} height={bottom - top} fill={INK} />
      <rect x={fillEnd + 12} y={56} width={x100 + 40 - fillEnd - 12} height={6} fill={INK} opacity="0.35" />
      <rect x={x100 + 40} y={28} width={10} height={52} fill={INK} />
      {/* barrel */}
      <rect x={x0} y={top} width={x100 - x0} height={bottom - top} fill="none" stroke={INK} strokeWidth="3" />
      <rect x={x100} y={top - 8} width={6} height={bottom - top + 16} fill={INK} />
      {/* scale */}
      {Array.from({ length: 21 }, (_, i) => i * 5).map((u) => (
        <line
          key={u}
          x1={px(u)}
          x2={px(u)}
          y1={top}
          y2={top + (u % 10 === 0 ? 14 : 8)}
          stroke={INK}
          strokeWidth={u % 10 === 0 ? 2 : 1.2}
        />
      ))}
      {Array.from({ length: 11 }, (_, i) => i * 10).map((u) => (
        <text key={u} x={px(u)} y={bottom + 20} textAnchor="middle" fontSize="15" fontWeight="700" fill={INK}>
          {u}
        </text>
      ))}
      {/* target line */}
      <line x1={fillEnd} x2={fillEnd} y1={top - 12} y2={bottom} stroke={INK} strokeWidth="3" />
      <rect x={fillEnd - 58} y={0} width={116} height={26} fill={INK} />
      <text x={fillEnd} y={19} textAnchor="middle" fontSize="17" fontWeight="900" fill="#fff">
        Draw to {units}
      </text>
    </svg>
  );
}

/* ── The whole schedule, one row per step ───────────────────────────── */

export function DoseLadder({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={compact ? "space-y-2" : ""}>
      {doseSchedule.map((d, i) => (
        <li
          key={d.week}
          className={`row ${i === 0 ? "row-first" : ""} grid items-center gap-x-4 gap-y-1 ${
            compact
              ? "grid-cols-[5rem_4.5rem_1fr] py-2"
              : "grid-cols-[1fr_auto] py-4 md:grid-cols-[7rem_8rem_1fr]"
          }`}
        >
          <span className="condensed font-extrabold">{d.week}</span>
          <span
            className={`num whitespace-nowrap font-black ${compact ? "text-lg" : "text-right text-3xl md:text-left"}`}
            style={{ fontStretch: "112%" }}
          >
            {d.mg} mg
            <span
              className={`mt-1 block w-fit bg-ink px-1.5 py-0.5 font-black text-mint ${
                compact ? "text-xs" : "ml-auto text-base md:ml-0"
              }`}
            >
              {d.units} units
            </span>
          </span>
          <span className={compact ? "" : "col-span-2 md:col-span-1"}>
            <Syringe units={d.units} className="h-auto w-full" />
          </span>
        </li>
      ))}
    </ol>
  );
}
