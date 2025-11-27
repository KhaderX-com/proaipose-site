import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Use Cases - Professional Posing for Every Occasion",
    description: "Discover how Pro AI Pose helps models, photographers, influencers, and content creators achieve professional results. Explore use cases for fashion, social media, portfolios, and more.",
    openGraph: {
        title: "Pro AI Pose Use Cases - Professional Posing Solutions",
        description: "From fashion shoots to social media content, discover how Pro AI Pose transforms photography for professionals and enthusiasts.",
        url: "https://proaipose.com/use-cases",
    },
    alternates: {
        canonical: "https://proaipose.com/use-cases",
    },
};

const useCases = [
    {
        title: "Fashion Models & Agencies",
        icon: "👗",
        description: "Create diverse portfolio shots with varied poses that showcase versatility and professionalism.",
        benefits: [
            "Build comprehensive portfolios quickly",
            "Practice new poses before shoots",
            "Showcase range and versatility",
            "Reduce photoshoot costs"
        ]
    },
    {
        title: "Social Media Influencers",
        icon: "📱",
        description: "Generate eye-catching content that stands out in crowded feeds and attracts more engagement.",
        benefits: [
            "Create consistent, professional content",
            "Maintain aesthetic coherence",
            "Save time on photoshoots",
            "Boost engagement rates"
        ]
    },
    {
        title: "Professional Photographers",
        icon: "📸",
        description: "Provide clients with pose references and expand your creative toolkit for better shoots.",
        benefits: [
            "Speed up client sessions",
            "Offer pose variety",
            "Improve client satisfaction",
            "Enhance creative direction"
        ]
    },
    {
        title: "E-commerce & Product Models",
        icon: "🛍️",
        description: "Showcase products with professional model poses that drive conversions and sales.",
        benefits: [
            "Reduce modeling costs",
            "Create multiple product shots",
            "Improve conversion rates",
            "Scale content production"
        ]
    },
    {
        title: "Personal Branding",
        icon: "💼",
        description: "Build a strong professional image across LinkedIn, websites, and marketing materials.",
        benefits: [
            "Professional headshots",
            "Consistent brand image",
            "Stand out in your industry",
            "Enhance credibility"
        ]
    },
    {
        title: "Dating Profiles",
        icon: "❤️",
        description: "Present your best self with flattering, natural-looking poses that attract genuine connections.",
        benefits: [
            "Increase match rates",
            "Show authentic personality",
            "Build confidence",
            "Create multiple options"
        ]
    },
    {
        title: "Content Creators & YouTubers",
        icon: "🎬",
        description: "Generate thumbnail images and promotional content that captures attention and drives clicks.",
        benefits: [
            "Professional thumbnails",
            "Consistent branding",
            "Save production time",
            "Increase click-through rates"
        ]
    },
    {
        title: "Fitness & Wellness Coaches",
        icon: "💪",
        description: "Showcase transformations and demonstrate exercises with professional, motivating imagery.",
        benefits: [
            "Document progress effectively",
            "Create inspiring content",
            "Build client trust",
            "Professional presentation"
        ]
    }
];

export default function UseCasesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-7xl">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Professional Posing for Every Occasion
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Whether you&apos;re a professional model, content creator, or simply want better photos,
                        Pro AI Pose helps you achieve stunning results across every use case.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/50"
                        >
                            <div className="mb-4 text-5xl">{useCase.icon}</div>

                            <h2 className="mb-4 text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                                {useCase.title}
                            </h2>

                            <p className="mb-6 text-muted-foreground">
                                {useCase.description}
                            </p>

                            <ul className="space-y-2">
                                {useCase.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg
                                            className="mr-2 h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-muted-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="rounded-xl border border-border bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Photography?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of professionals and enthusiasts who trust Pro AI Pose for their photography needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#download"
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                            Download Now
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition-all hover:bg-cyan-500/10"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">2,500+</div>
                        <div className="text-muted-foreground">Active Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">50,000+</div>
                        <div className="text-muted-foreground">Photos Generated</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">4.8/5</div>
                        <div className="text-muted-foreground">User Rating</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
