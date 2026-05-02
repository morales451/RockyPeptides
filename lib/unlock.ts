import { createHmac, timingSafeEqual } from "node:crypto";

const DEFAULT_SECRET = "rocky-peptides-default-unlock-secret-set-UNLOCK_SECRET";
const PAYLOAD = "projection-v1";

export const UNLOCK_COOKIE = "rp_unlock";
export const UNLOCK_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

let warned = false;
function getSecret(): string {
  const secret = process.env.UNLOCK_SECRET;
  if (!secret) {
    if (!warned && process.env.NODE_ENV === "production") {
      console.warn(
        "UNLOCK_SECRET is not set; projection unlock cookies are forgeable. Set it in Netlify env.",
      );
      warned = true;
    }
    return DEFAULT_SECRET;
  }
  return secret;
}

export function signUnlockToken(): string {
  return createHmac("sha256", getSecret()).update(PAYLOAD).digest("hex");
}

export function verifyUnlockToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const expected = signUnlockToken();
  if (token.length !== expected.length) return false;
  try {
    return timingSafeEqual(
      Buffer.from(token, "hex"),
      Buffer.from(expected, "hex"),
    );
  } catch {
    return false;
  }
}
