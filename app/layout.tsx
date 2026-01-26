import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mannheim Craft Brewery",
  description: "Craft Brewery based in Bangalore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-[#121212] text-gray-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
