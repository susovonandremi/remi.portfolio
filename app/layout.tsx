import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Susovon Sarkar | Design Engineer",
  description: "Portfolio of Susovon Sarkar (Remi) - Design Engineer & AI Specialist. exploring the intersection of UI/UX and Artificial Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
