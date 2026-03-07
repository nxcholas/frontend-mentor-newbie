import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/news-homepage.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-inter",
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
  return (
    <div className={`${inter.className} antialiased`}>
      {children}
    </div>
  );
}
