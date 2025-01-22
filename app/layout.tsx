import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Specify subsets for fonts
const inter = Inter({
  subsets: ["latin"], // Define subsets to avoid build errors
  preload: true, // Preloading enabled (optional but good practice)
});

const poppins = Poppins({
  subsets: ["latin"], // Define subsets
  weight: ["400", "600"], // Specify font weights (optional, based on your design needs)
  preload: true, // Preloading enabled
});

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
      <body className={twMerge(inter.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
