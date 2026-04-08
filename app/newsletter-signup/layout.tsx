import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../css/newsletter-signup.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
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
  return <main className={`${roboto.className} antialiased`}>{children}</main>;
}
