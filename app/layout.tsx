import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "MyTxweDEVS - HOME",
  description: "See my first home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo-light.png" />
      </head>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
