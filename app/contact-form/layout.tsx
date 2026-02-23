import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "../css/contact-form.css";
import { Toaster } from "react-hot-toast";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karla",
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
    <div className={`${karla.className} antialiased`}>
      <Toaster position="top-center" />
      {children}
    </div>
  );
}
