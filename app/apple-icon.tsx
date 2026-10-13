import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg viewBox="0 0 48 48" width="180" height="180">
        <rect width="48" height="48" fill="#0d2b4e" />
        <path d="M12 35 L24 24 L36 13" stroke="#fff" strokeWidth="3.5" fill="none" />
        <rect x="7" y="30" width="10" height="10" fill="#fff" />
        <rect x="19" y="19" width="10" height="10" fill="#fff" />
        <rect x="31" y="8" width="10" height="10" fill="#2fd3a0" />
      </svg>
    ),
    size,
  );
}
