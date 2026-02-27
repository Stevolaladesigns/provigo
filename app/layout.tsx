import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProviGo | Provision Delivery for SHS Students in Ghana",
  description: "Making it easy for parents to send provision supplies to Senior High School students anywhere in Ghana. Reliable, fast, and secure.",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script id="chatway" async={true} src="https://cdn.chatway.app/widget.js?id=ZnWO8RvSiEhm"></script>
      </body>
    </html>
  );
}
