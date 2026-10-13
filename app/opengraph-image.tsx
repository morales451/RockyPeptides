import { ImageResponse } from "next/og";

export const alt = "Evolve Peptides: the facts about GLP-3s";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0d2b4e";
const MINT = "#2fd3a0";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: MINT,
          padding: "64px 80px",
          color: INK,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 560 }}>
          <div style={{ fontSize: 92, fontWeight: 900, lineHeight: 0.95 }}>
            Heard a lot about GLP-3s?
          </div>
          <div style={{ fontSize: 34, marginTop: 28 }}>
            Here are the plain facts.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 420,
            background: "#fff",
            border: `4px solid ${INK}`,
            padding: "18px 24px",
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 900 }}>GLP-3 Facts</div>
          <div style={{ height: 16, background: INK, marginTop: 8 }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, fontWeight: 900, paddingTop: 10 }}>
            <span>Receptors</span>
            <span style={{ fontSize: 64 }}>3</span>
          </div>
          <div style={{ height: 8, background: INK, marginTop: 6 }} />
          {["GLP-1", "GIP", "Glucagon"].map((r) => (
            <div key={r} style={{ display: "flex", fontSize: 26, padding: "8px 0", borderTop: `2px solid ${INK}` }}>
              {r}
            </div>
          ))}
          <div style={{ height: 16, background: INK, marginTop: 6 }} />
          <div style={{ display: "flex", fontSize: 24, fontWeight: 800, paddingTop: 10 }}>
            Evolve Peptides · Houston
          </div>
        </div>
      </div>
    ),
    size,
  );
}
