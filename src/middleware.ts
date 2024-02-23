import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieJar = cookies();

  let response = NextResponse.next();

  if (!cookieJar.get("portfolio-theme")) {
    response.cookies.set("portfolio-theme", "dark");
  }

  return response;
}
