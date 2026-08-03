import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

const title = "Xiaoyu Wu | AI for Reticular Chemistry";
const description = "Research portfolio of Xiaoyu Wu, a computational chemist using molecular simulation and AI to discover porous materials.";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiaoyu961031.github.io"),
  title,
  description,
  icons: {
    icon: [{ url: "/air-reticular-mark.svg", type: "image/svg+xml" }],
    shortcut: "/air-reticular-mark.svg",
    apple: "/air-reticular-mark.svg",
  },
  openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1536, height: 911, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
