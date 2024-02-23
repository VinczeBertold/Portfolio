import { cookies } from "next/headers";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: Request) {
  const cookieJar = cookies();

  const requestBody = await request.json();

  const theme = requestBody["theme"] as string;

  if (!theme || (theme !== "dark" && theme !== "light")) {
    return new Response("Invalid theme", { status: 400 });
  }

  cookieJar.set("portfolio-theme", theme);

  return new Response("", { status: 200 });
}
