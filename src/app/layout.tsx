import type { Metadata } from "next";

import "./globals.css";

import MenuTop from "@/_components/MenuTop";
import Footer from "@/_components/Footer";

import { Inter } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STJD | Superior Tribunal de Justiça Desportiva",
  description: "Superior Tribunal de Justiça Deportiva",
  keywords: [
    "stjd",
    "Superior Tribunal de Justiça Deportiva do Futebol",
    "Futebol",
    "Campeonados",
    "CBF",
    "FIFA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <MenuTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
