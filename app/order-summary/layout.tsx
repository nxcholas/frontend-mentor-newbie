import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "../css/order-summary.css";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-red-hat",
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

      <div
        className={`${redHat.className} antialiased`}
      >
        {children}
      </div>
  );
}
