import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telegram web app",
  description: "Next app for telegram bot",
};

export default function RootLayout({
  children,
  navbar,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full flex flex-col justify-center">
          {navbar}
          {children}
        </main>
      </body>
    </html>
  );
}
