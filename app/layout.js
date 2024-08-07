import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mike Dalton Portfolio Website",
  description: "Full-Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-bgLight">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
