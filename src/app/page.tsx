import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  // Enhanced schema with Organization and BreadcrumbList
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pro AI Pose',
    url: 'https://proaipose.com',
    logo: 'https://proaipose.com/logo/Pro_Pose.png',
    description: 'Leading AI-powered professional posing assistant for models, photographers, and content creators.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/proaipose',
      'https://instagram.com/proaipose',
      'https://linkedin.com/company/proaipose'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@proaipose.com',
      availableLanguage: ['English']
    }
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Pro AI Pose',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2547',
      bestRating: '5',
      worstRating: '1'
    },
    description: 'Transform your photos into a professional photoshoot with AI. Upload a single image and our AI will generate a variety of stylish and natural poses, perfect for your portfolio, social media, or just for fun.',
    screenshot: 'https://proaipose.com/logo/Pro_Pose.png',
    softwareVersion: '1.0',
    author: {
      '@type': 'Organization',
      name: 'Pro AI Pose',
      url: 'https://proaipose.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pro AI Pose',
      url: 'https://proaipose.com'
    },
    applicationSubCategory: 'Photo & Video',
    keywords: 'AI posing, professional poses, AI photography, photo enhancement, modeling poses',
    featureList: [
      'AI-powered pose generation',
      'Professional photography assistance',
      'Social media optimization',
      'Portfolio enhancement',
      'Real-time pose suggestions'
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://proaipose.com'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
