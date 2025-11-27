import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog - AI Photography Tips & Posing Guides",
    description: "Discover expert tips on AI photography, professional posing techniques, and creative ideas for your photoshoots. Learn how to get the most out of Pro AI Pose.",
    openGraph: {
        title: "Pro AI Pose Blog - Photography Tips & Guides",
        description: "Expert tips on AI photography, professional posing techniques, and creative photoshoot ideas.",
        url: "https://proaipose.com/blog",
    },
    alternates: {
        canonical: "https://proaipose.com/blog",
    },
};

const blogPosts = [
    {
        id: 1,
        slug: "professional-posing-tips-for-beginners",
        title: "10 Professional Posing Tips for Beginners",
        excerpt: "Master the basics of professional posing with these essential tips. Learn how to position your body, work with angles, and create stunning photos.",
        date: "2025-11-20",
        category: "Posing Tips",
        readTime: "5 min read",
    },
    {
        id: 2,
        slug: "how-ai-is-transforming-photography",
        title: "How AI is Transforming Photography in 2025",
        excerpt: "Explore the latest AI innovations in photography and how they're making professional-quality photos accessible to everyone.",
        date: "2025-11-15",
        category: "AI Technology",
        readTime: "7 min read",
    },
    {
        id: 3,
        slug: "best-poses-for-social-media-profiles",
        title: "Best Poses for Social Media Profiles",
        excerpt: "Create eye-catching profile photos for Instagram, LinkedIn, and other platforms with these proven posing strategies.",
        date: "2025-11-10",
        category: "Social Media",
        readTime: "4 min read",
    },
    {
        id: 4,
        slug: "lighting-tips-for-perfect-photos",
        title: "Lighting Tips for Perfect Photos Every Time",
        excerpt: "Understand the fundamentals of lighting and how it can dramatically improve your photography results.",
        date: "2025-11-05",
        category: "Photography Basics",
        readTime: "6 min read",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-6xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Blog & Resources
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Expert tips, guides, and insights on AI photography and professional posing
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/50"
                        >
                            <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-400">
                                    {post.category}
                                </span>
                                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                                <span>{post.readTime}</span>
                            </div>

                            <h2 className="mb-3 text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="mb-4 text-muted-foreground">
                                {post.excerpt}
                            </p>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                            >
                                Read more
                                <svg
                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="mt-16 rounded-xl border border-border bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Want to See More Content?</h2>
                    <p className="text-muted-foreground mb-6">
                        Subscribe to our newsletter for the latest tips, tutorials, and updates on AI photography.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                        Get in Touch
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
