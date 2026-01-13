import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Urbanist } from "next/font/google";
import "./globals.css";
import AIAssistant from "@/components/AIAssistant";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logoipsum - Learn the Skills That Make a Great Barber",
  description: "Clear tutorials, real techniques, and expert instruction all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${urbanist.variable} antialiased`}
      >
        <NextTopLoader
          color="#FE9A00"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FE9A00,0 0 5px #FE9A00"
        />
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
