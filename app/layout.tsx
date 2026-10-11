import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WAV Invest s.r.o. | Paletové hospodárstvo",
  description: "Dodávky certifikovaných EUR paliet, jednocestných paliet a obalových riešení pre priemysel a logistiku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={`${inter.className} bg-[#F8FAFC] text-slate-900 antialiased min-h-screen flex flex-col justify-between`}>
        <LanguageProvider>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}