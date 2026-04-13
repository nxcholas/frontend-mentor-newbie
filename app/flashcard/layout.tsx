import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../css/flashcard.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Front-End Mentor Challenges | Intermediate",
  description: "Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.className} antialiased`}>
      {children}
    </div>
  );
}
