import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../css/nft-preview-card.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Front-End Mentor Challenes | Newbies",
  description: "Newbie Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${outfit.className} antialiased`}>{children}</main>;
}
