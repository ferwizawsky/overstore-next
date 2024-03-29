import type { Metadata } from "next";

import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

import "./globals.css";

export const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']

})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background  antialiased",
        fontSans.className
      )}>{children}</body>
    </html>
  );
}
