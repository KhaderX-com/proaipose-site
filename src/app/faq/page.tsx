import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "FAQ - Frequently Asked Questions",
    description: "Find answers to common questions about Pro AI Pose. Learn about features, pricing, privacy, supported platforms, and how our AI-powered posing assistant works.",
    openGraph: {
        title: "Pro AI Pose FAQ - Your Questions Answered",
        description: "Common questions about Pro AI Pose features, pricing, and functionality.",
        url: "https://proaipose.com/faq",
    },
    alternates: {
        canonical: "https://proaipose.com/faq",
    },
};

const faqs = [
    {
        question: "What is Pro AI Pose?",
        answer: "Pro AI Pose is an AI-powered mobile application that transforms your photos into professional photoshoots. Upload a single image, and our advanced AI generates a variety of stylish and natural poses, perfect for portfolios, social media, or personal use."
    },
    {
        question: "How does the AI posing work?",
        answer: "Our AI analyzes your uploaded photo, understanding body structure, lighting, and composition. It then generates multiple professional pose variations while maintaining your natural appearance and style. The process is instant and produces high-quality results."
    },
    {
        question: "Is Pro AI Pose free to use?",
        answer: "Pro AI Pose offers both free and premium features. You can try basic functionality for free, with premium subscriptions available for advanced features, unlimited poses, and high-resolution exports."
    },
    {
        question: "What platforms is Pro AI Pose available on?",
        answer: "Pro AI Pose is available on both iOS and Android devices. Download it from the App Store or Google Play Store to get started."
    },
    {
        question: "Is my data safe and private?",
        answer: "Absolutely. We take privacy seriously and comply with GDPR and other data protection regulations. Your photos are processed securely, never shared with third parties, and you maintain full ownership of your images. You can delete your data at any time."
    },
    {
        question: "What kind of photos work best?",
        answer: "For optimal results, use clear, well-lit photos where your full body or upper body is visible. Natural lighting and uncluttered backgrounds produce the best AI-generated poses."
    },
    {
        question: "Can I use generated photos commercially?",
        answer: "Yes! Premium subscribers have full commercial rights to use AI-generated photos for portfolios, social media, marketing, and other commercial purposes."
    },
    {
        question: "How long does it take to generate poses?",
        answer: "Pose generation is nearly instantaneous. Most results appear within 5-10 seconds after uploading your photo, depending on your internet connection."
    },
    {
        question: "Can I customize the poses?",
        answer: "Yes! You can select from various style preferences, pose types (casual, professional, fashion, etc.), and adjust parameters to match your desired aesthetic."
    },
    {
        question: "Do I need professional photography equipment?",
        answer: "No! Pro AI Pose works with photos taken on any smartphone or camera. Our AI enhances and optimizes your images regardless of the equipment used."
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time through your app store account settings. You&apos;ll retain access until the end of your current billing period."
    },
    {
        question: "How do I get support?",
        answer: "Contact our support team through the app&apos;s help section or visit our contact page. We typically respond within 24 hours."
    }
];

export default function FAQPage() {
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to know about Pro AI Pose
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-cyan-500/50"
                            >
                                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg list-none">
                                    <span className="group-hover:text-cyan-400 transition-colors">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className="h-5 w-5 flex-shrink-0 text-cyan-400 transition-transform group-open:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>

                    <div className="mt-16 rounded-xl border border-border bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                        <p className="text-muted-foreground mb-6">
                            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                            Contact Support
                        </a>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
