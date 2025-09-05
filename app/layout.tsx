import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import "./globals.css";

import { CartProvider } from "@/app/_contexts/CartContext";
import { FormProviderCustom } from "@/app/_contexts/FormContext";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Modal from "@/app/_components/Modal";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Audiophile",
    default: "Welcome - Audiophile",
  },
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
        <CartProvider>
          <FormProviderCustom>
            <Header />
            <main className="relative flex-grow overflow-hidden">
              {children}

              <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition={Slide}
              />
              <Modal />
            </main>
            <Footer />
          </FormProviderCustom>
        </CartProvider>
      </body>
    </html>
  );
}
