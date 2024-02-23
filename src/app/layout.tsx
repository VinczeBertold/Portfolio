import { cookies } from "next/headers";
import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Toaster, toast } from "sonner";

const inter = Inter({ subsets: ["latin"] });

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Bertold Vincze - Portfolio",
  description:
    "Portfolio of Bertold Vincze, a backend developer and bio informatician. ",
  authors: [{ name: "Bertold Vincze", url: "https://about.me/bertoldvincze" }],
  robots: "index, follow",
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
        <div className="relative">
          {children}
          <a
            href="#"
            className="fixed bottom-4 left-4 btn btn-square bg-black text-white"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
