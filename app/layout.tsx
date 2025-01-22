import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";


const inter = Inter();

export const metadata: Metadata = {
  title: "Ticket Pool",
  description: "Buy your tickets here ..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(inter.className, "antialiased ")}>
      
        {children}
      </body>
    </html>
  );
}