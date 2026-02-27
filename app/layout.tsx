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
  metadataBase: new URL('https://provigo.vercel.app'), // Replace with your actual domain
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "ProviGo | Provision Delivery for SHS Students in Ghana",
    description: "Reliable provision delivery for Senior High School students across Ghana.",
    images: [{ url: '/provigo.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ProviGo | Provision Delivery for SHS Students in Ghana",
    description: "Reliable provision delivery for Senior High School students across Ghana.",
    images: ['/provigo.png'],
  },
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
