import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Pro AI Pose',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2547',
    },
    description: 'Transform your photos into a professional photoshoot with AI. Upload a single image and our AI will generate a variety of stylish and natural poses, perfect for your portfolio, social media, or just for fun.',
    screenshot: 'https://proaipose.com/logo/Pro_Pose.png',
    softwareVersion: '1.0',
    author: {
      '@type': 'Organization',
      name: 'Pro AI Pose',
    },
    applicationSubCategory: 'Photo & Video',
    keywords: 'AI posing, professional poses, AI photography, photo enhancement, modeling poses',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <Hero />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
