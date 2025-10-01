import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Scripts from "@/components/Scripts";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NR Industrial Enterprises",
  description: "NR Industrial Enterprises.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await fetch("https://mystore.alaqmar.dev/api/nr-industrial/categories", { cache: 'no-store' }).then(res => res.json());

  return (
    <html lang="en">
      <Head />
      <body
      >
        <Header categories={categories} />
        {children}
        <Footer categories={categories} />
        <Scripts />
      </body>
    </html>
  );
}
