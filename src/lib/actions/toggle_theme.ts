"use server";

import { cookies } from "next/headers";

export async function toggleTheme(formData: FormData) {
  "use server";
  const cookieJar = cookies();
  const theme = formData.get("theme");
  console.log(theme);
  console.log(cookieJar.get("portfolio-theme")?.value);

  //cookieJar.set("portfolio-theme", theme?.toString() || "dark");

  return theme?.toString();
}
