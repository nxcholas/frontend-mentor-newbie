import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "../css/devjobs.css";
import { ThemeProvider } from "./context/ThemeContext";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbhSans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Front-End Mentor Challenges | Newbies",
  description: "Newbie Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${kumbh.className} antialiased `}>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}
