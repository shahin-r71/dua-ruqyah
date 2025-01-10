import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavSidebar from "@/components/NavSidebar";
import Header from "@/components/Header";
import SettingsSidebar from "@/components/SettingsSidebar";
import DuaSidebar from "@/components/DuaSidebar";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dua Ruqyah App",
  description: "Islamic Duas and Ruqyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased scroll-smooth`}>
        <div className="h-screen p-7">
          <NavSidebar />
          <Header />
          <SettingsSidebar />
          <main className="ml-[115px] flex gap-4">
            <DuaSidebar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
