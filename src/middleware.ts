import { NextResponse, type NextRequest } from "next/server";

import { AUTH_COOKIE_NAME, verifySession } from "@/lib/auth/session";

export async function middleware(request: NextRequest) {
  const session = await verifySession(
    request.cookies.get(AUTH_COOKIE_NAME)?.value,
    process.env.AUTH_SECRET,
  );
  const isLoginRoute = request.nextUrl.pathname === "/login";

  if (isLoginRoute && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isLoginRoute && !session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set(
      "next",
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
    );
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete(AUTH_COOKIE_NAME);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
