import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { CartProvider } from "@/components/sections/Cart";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3D Ecommerce Shop",
  description: "3D Ecommerce Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth gb-stone-950">
      <CartProvider>
        <body className={`${poppins.className} scroll-smooth bg-stone-950`}>
          {children}
        </body>
      </CartProvider>
    </html>
  );
}
