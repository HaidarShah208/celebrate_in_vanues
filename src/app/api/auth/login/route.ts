import { NextResponse } from "next/server";

import { loginSchema } from "@/features/auth/schemas/login-schema";
import {
  AUTH_COOKIE_NAME,
  createSession,
  SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth/session";

const REQRES_LOGIN_URL = "https://reqres.in/api/login";

type ReqresLoginResponse = {
  token?: string;
  error?: string;
  message?: string;
};

export async function POST(request: Request) {
  const parsedBody = loginSchema.safeParse(
    await request.json().catch(() => null),
  );

  if (!parsedBody.success) {
    return NextResponse.json(
      {
        error:
          parsedBody.error.issues[0]?.message ?? "Invalid login information.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.REQRES_API_KEY;
  const authSecret = process.env.AUTH_SECRET;

  if (!apiKey || !authSecret) {
    return NextResponse.json(
      {
        error:
          "Authentication is not configured. Add REQRES_API_KEY and AUTH_SECRET to .env.local.",
      },
      { status: 503 },
    );
  }

  try {
    const reqresResponse = await fetch(REQRES_LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(parsedBody.data),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    const result = (await reqresResponse
      .json()
      .catch(() => ({}))) as ReqresLoginResponse;

    if (!reqresResponse.ok || !result.token) {
      return NextResponse.json(
        {
          error:
            result.error ??
            result.message ??
            "The email or password is incorrect.",
        },
        { status: reqresResponse.status || 401 },
      );
    }

    const session = await createSession(parsedBody.data.email, authSecret);
    const response = NextResponse.json({ success: true });

    response.cookies.set(AUTH_COOKIE_NAME, session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE_SECONDS,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "The authentication service is unavailable. Try again." },
      { status: 502 },
    );
  }
}
