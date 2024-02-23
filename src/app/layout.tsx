import { cookies } from "next/headers";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const dynamic = "force-dynamic"; // defaults to auto

const inter = Inter({ subsets: ["latin"] });

import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieJar = cookies();

  return (
    <html
      lang="en"
      data-theme={cookieJar.get("portfolio-theme")?.value || "dark"}
    >
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
