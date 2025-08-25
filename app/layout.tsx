import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audiophile E-Commerce",
  description:
    "Audiophile is a premium e-commerce destination for high-end headphones, speakers, and earphones. Discover expertly curated audio products, detailed reviews, and seamless shopping designed for passionate music lovers seeking the best in sound quality and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
