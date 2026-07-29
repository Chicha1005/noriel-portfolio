import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noriel M. Cabab | Accounting Professional & Web Developer",
  description:
    "Professional portfolio of Noriel M. Cabab showcasing accounting, auditing, finance, and modern web development projects built with Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Noriel Cabab",
    "Accounting Professional",
    "Audit Officer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Noriel M. Cabab" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
