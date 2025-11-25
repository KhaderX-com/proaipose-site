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
  title: "Pro AI Pose - Get Your Stylish Professional Poses",
  description: "Transform your photos into a professional photoshoot. Upload a single image and our AI will generate a variety of stylish and natural poses, perfect for your portfolio, social media, or just for fun.",
  icons: {
    icon: [
      { url: '/logo/Pro_Pose.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/Pro_Pose.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/Pro_Pose.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
