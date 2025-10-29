import type { Metadata } from "next";
import "./globals.css";
import { Lato, Space_Grotesk } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Higgsfield",
  description:
    "Explore the Higgs field through interactive explanations, visualizations, and stories from particle physics.",
  openGraph: {
    title: "Higgsfield",
    description:
      "Explore the Higgs field through interactive explanations, visualizations, and stories from particle physics.",
    url: "https://agentic-6fce75ab.vercel.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Higgsfield",
    description:
      "Explore the Higgs field through interactive explanations, visualizations, and stories from particle physics."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
