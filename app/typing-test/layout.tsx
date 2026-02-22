import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../css/typing-test.css";
import { PersonalBestProvider } from "./components/PersonalBestContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
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
    <div className={`${sora.className} antialiased`}>
      <PersonalBestProvider>{children}</PersonalBestProvider>
    </div>
  );
}
