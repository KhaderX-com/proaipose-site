import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL('https://proaipose.com'),
  title: {
    default: "Pro AI Pose - AI-Powered Professional Posing Assistant",
    template: "%s | Pro AI Pose"
  },
  description: "Transform your photos into a professional photoshoot with AI. Upload a single image and our AI will generate a variety of stylish and natural poses, perfect for your portfolio, social media, or just for fun. The #1 AI posing assistant for models, photographers, and influencers.",
  keywords: ["AI posing app", "professional poses", "AI photo assistant", "modeling poses", "AI photography", "pose generator", "photo enhancement", "professional photoshoot", "AI modeling", "social media photos"],
  authors: [{ name: "Pro AI Pose Team" }],
  creator: "Pro AI Pose",
  publisher: "Pro AI Pose",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://proaipose.com',
    siteName: 'Pro AI Pose',
    title: 'Pro AI Pose - AI-Powered Professional Posing Assistant',
    description: 'Transform your photos into a professional photoshoot with AI. Upload a single image and get stylish, natural poses for your portfolio, social media, or just for fun.',
    images: [
      {
        url: '/logo/Pro_Pose.png',
        width: 1200,
        height: 630,
        alt: 'Pro AI Pose - AI Posing Assistant',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro AI Pose - AI-Powered Professional Posing Assistant',
    description: 'Transform your photos into a professional photoshoot with AI. Get stylish, natural poses for your portfolio and social media.',
    images: ['/logo/Pro_Pose.png'],
    creator: '@proaipose',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo/Pro_Pose.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/Pro_Pose.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/Pro_Pose.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://proaipose.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://proaipose.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RNBFRCDETQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RNBFRCDETQ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
