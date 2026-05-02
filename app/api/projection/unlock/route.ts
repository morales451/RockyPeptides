import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  signUnlockToken,
  UNLOCK_COOKIE,
  UNLOCK_MAX_AGE_SECONDS,
} from "@/lib/unlock";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/x-www-form-urlencoded")) {
    return NextResponse.json(
      { ok: false, error: "unsupported_content_type" },
      { status: 415 },
    );
  }

  const body = new URLSearchParams(await request.text());
  const phone = body.get("phone")?.trim() ?? "";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) {
    return NextResponse.json(
      { ok: false, error: "invalid_phone" },
      { status: 400 },
    );
  }

  const store = await cookies();
  store.set(UNLOCK_COOKIE, signUnlockToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: UNLOCK_MAX_AGE_SECONDS,
  });

  return NextResponse.json({ ok: true });
}
