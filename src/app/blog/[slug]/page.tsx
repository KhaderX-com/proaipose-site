import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

// Sample blog posts data - in production this would come from a CMS or database
const blogPostsData: Record<string, {
    title: string;
    content: string;
    date: string;
    category: string;
    readTime: string;
}> = {
    "professional-posing-tips-for-beginners": {
        title: "10 Professional Posing Tips for Beginners",
        date: "2025-11-20",
        category: "Posing Tips",
        readTime: "5 min read",
        content: `
# 10 Professional Posing Tips for Beginners

Getting started with professional posing can feel overwhelming, but with these essential tips, you'll be creating stunning photos in no time.

## 1. Master Your Angles

Understanding your best angles is crucial. Experiment with turning your body slightly to the side rather than facing the camera head-on. This creates a more flattering silhouette.

## 2. Elongate Your Neck

Push your chin slightly forward and down. This simple trick helps define your jawline and prevents a double chin in photos.

## 3. Create Space Between Your Arms and Body

Don't press your arms flat against your body. Creating small gaps makes you look slimmer and adds dimension to your photos.

## 4. Use Your Hands Naturally

Avoid stiff, awkward hand positions. Rest them gently on your hips, in your pockets, or use them to interact with your environment naturally.

## 5. Shift Your Weight

Stand with your weight on one leg and pop the other hip slightly. This creates a natural, relaxed S-curve that's universally flattering.

## 6. Mind Your Posture

Stand tall with your shoulders back. Good posture instantly makes you look more confident and professional.

## 7. Engage Your Eyes

Connect with the camera through your eyes. Think of something that makes you genuinely happy or confident.

## 8. Practice Makes Perfect

Use Pro AI Pose to practice different poses and see what works best for your body type and style.

## 9. Study Professional Models

Look at fashion magazines and Instagram influencers to see how professionals pose. Adapt their techniques to your own style.

## 10. Relax and Be Yourself

The best photos come when you're relaxed and comfortable. Don't force unnatural positions—let your personality shine through.

## Get Started with Pro AI Pose

Ready to put these tips into practice? Download Pro AI Pose and transform your photos with AI-powered professional posing assistance.
    `
    },
    "how-ai-is-transforming-photography": {
        title: "How AI is Transforming Photography in 2025",
        date: "2025-11-15",
        category: "AI Technology",
        readTime: "7 min read",
        content: `
# How AI is Transforming Photography in 2025

Artificial Intelligence is revolutionizing the photography industry, making professional-quality results accessible to everyone. Here's how AI is changing the game.

## The AI Photography Revolution

Traditional photography required expensive equipment, years of training, and professional editing skills. Today, AI technology democratizes professional photography, allowing anyone to create stunning images.

## Intelligent Pose Suggestions

AI-powered apps like Pro AI Pose analyze your photos and suggest optimal poses based on your body type, lighting conditions, and the style you're aiming for.

## Automatic Enhancement

Modern AI can automatically adjust lighting, remove blemishes, enhance colors, and even change backgrounds—all while maintaining a natural look.

## Personalized Style Learning

AI learns your preferences over time, suggesting poses and edits that match your unique style and aesthetic.

## Real-Time Feedback

Get instant feedback on your poses before taking the shot, ensuring you capture the perfect image every time.

## The Future of AI Photography

As AI technology continues to evolve, we can expect even more innovative features like virtual fashion try-ons, AR backgrounds, and personalized virtual photo studios.

## Try AI-Powered Photography Today

Experience the future of photography with Pro AI Pose. Transform your photos with intelligent AI assistance.
    `
    },
    "best-poses-for-social-media-profiles": {
        title: "Best Poses for Social Media Profiles",
        date: "2025-11-10",
        category: "Social Media",
        readTime: "4 min read",
        content: `
# Best Poses for Social Media Profiles

Your profile picture is often the first impression you make online. Here's how to nail the perfect pose for every platform.

## Instagram Profile Photos

For Instagram, consider a slightly angled pose with natural lighting. Show your personality while maintaining a polished look.

## LinkedIn Professional Shots

Keep it professional with a straight-on or slightly angled pose. Smile naturally and dress appropriately for your industry.

## Twitter/X Headshots

Twitter profiles work well with close-up headshots that clearly show your face. A genuine smile goes a long way.

## Facebook Profile Pictures

Facebook allows for more casual poses. Feel free to include more of your body and environment while keeping the focus on your face.

## TikTok and YouTube

Video platforms benefit from dynamic poses that show energy and personality. Don't be afraid to be expressive.

## Universal Tips

- Ensure good lighting (natural light is best)
- Choose a clean, non-distracting background
- Dress appropriately for your brand
- Show genuine emotion
- Keep your face clearly visible

## Optimize with Pro AI Pose

Let Pro AI Pose help you find the perfect angle and pose for each platform. Get personalized suggestions tailored to your goals.
    `
    },
    "lighting-tips-for-perfect-photos": {
        title: "Lighting Tips for Perfect Photos Every Time",
        date: "2025-11-05",
        category: "Photography Basics",
        readTime: "6 min read",
        content: `
# Lighting Tips for Perfect Photos Every Time

Lighting can make or break a photo. Master these fundamental lighting techniques to dramatically improve your photography.

## Natural Light is Your Best Friend

The golden hour (shortly after sunrise or before sunset) provides soft, flattering light that makes everyone look amazing.

## Avoid Harsh Midday Sun

Direct overhead sunlight creates unflattering shadows. If shooting midday, find shade or use a diffuser.

## Window Light Indoors

Position yourself near a large window for beautiful, soft indoor lighting. Turn slightly toward the window for the best results.

## Three-Point Lighting Setup

For professional results, use a key light (main), fill light (soften shadows), and back light (separation from background).

## Avoid Overhead Lighting

Ceiling lights cast shadows under your eyes and nose. Position yourself to face the light source instead.

## Use Reflectors

A simple white poster board or professional reflector can bounce light back onto your face, filling in shadows.

## Soft Light vs. Hard Light

Soft, diffused light is generally more flattering for portraits. Hard light creates drama but can be less forgiving.

## Color Temperature Matters

Ensure your light sources have similar color temperatures. Mixing warm and cool lights creates unnatural skin tones.

## Test Your Setup

Take test shots and adjust your position relative to the light source until you achieve the desired look.

## AI Enhancement

Even with less-than-perfect lighting, AI tools can enhance your photos. Pro AI Pose helps you make the most of any lighting situation.

## Practice and Experiment

Understanding light comes with practice. Experiment with different times of day and light sources to develop your eye.
    `
    }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPostsData[slug];

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: `${post.title} - ${post.category} guide from Pro AI Pose`,
        openGraph: {
            title: post.title,
            description: `${post.category} guide from Pro AI Pose`,
            url: `https://proaipose.com/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
        },
        alternates: {
            canonical: `https://proaipose.com/blog/${slug}`,
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPostsData[slug];

    if (!post) {
        notFound();
    }

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Organization',
            name: 'Pro AI Pose',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Pro AI Pose',
            logo: {
                '@type': 'ImageObject',
                url: 'https://proaipose.com/logo/Pro_Pose.png',
            },
        },
        description: `${post.title} - ${post.category}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
                    <article>
                        <div className="mb-8">
                            <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-400">
                                    {post.category}
                                </span>
                                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                                <span>{post.readTime}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                {post.title}
                            </h1>
                        </div>

                        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4">
                            {post.content.split('\n').map((paragraph, index) => {
                                if (paragraph.startsWith('# ')) {
                                    return null; // Skip the main title as it's already rendered
                                } else if (paragraph.startsWith('## ')) {
                                    return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                                } else if (paragraph.trim()) {
                                    return <p key={index}>{paragraph}</p>;
                                }
                                return null;
                            })}
                        </div>

                        <div className="mt-12 pt-8 border-t border-border">
                            <div className="rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 text-center">
                                <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Photos?</h2>
                                <p className="text-muted-foreground mb-6">
                                    Download Pro AI Pose and start creating professional-quality photos today.
                                </p>
                                <a
                                    href="/#download"
                                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}
