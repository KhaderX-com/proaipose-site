import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Pro AI Pose - Our Team & Mission",
    description: "Learn about Pro AI Pose, our expert team of AI researchers and photographers, our mission to democratize professional photography, and our commitment to innovation and excellence.",
    openGraph: {
        title: "About Pro AI Pose - Our Team & Mission",
        description: "Meet the team behind Pro AI Pose and discover our mission to revolutionize photography with AI.",
        url: "https://proaipose.com/about",
    },
    alternates: {
        canonical: "https://proaipose.com/about",
    },
};

export default function AboutPage() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pro AI Pose',
        url: 'https://proaipose.com',
        logo: 'https://proaipose.com/logo/Pro_Pose.png',
        description: 'Leading AI-powered professional posing assistant trusted by thousands of photographers, models, and content creators worldwide.',
        foundingDate: '2024',
        founder: {
            '@type': 'Organization',
            name: 'Pro AI Pose Team'
        },
        sameAs: [
            'https://twitter.com/proaipose',
            'https://instagram.com/proaipose',
            'https://linkedin.com/company/proaipose'
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'US'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            email: 'support@proaipose.com',
            availableLanguage: ['English']
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-16 max-w-6xl">

                    {/* Hero Section */}
                    <div className="mb-20 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Revolutionizing Photography with AI
                        </h1>
                        <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            We&apos;re on a mission to make professional-quality photography accessible to everyone through cutting-edge artificial intelligence.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <section className="mb-20">
                        <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-12">
                            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                            <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                                To democratize professional photography by leveraging artificial intelligence, empowering creators worldwide to produce stunning, professional-quality images regardless of their technical expertise or budget.
                            </p>
                        </div>
                    </section>

                    {/* Our Story */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-10 text-center">Our Story</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-cyan-400">The Beginning</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Pro AI Pose was founded by a team of passionate AI researchers, professional photographers, and software engineers who recognized a critical gap in the photography industry: the barrier between amateur and professional-quality photos.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    We witnessed countless aspiring photographers, models, and content creators struggling with pose ideas, lacking access to professional photographers, or simply not knowing how to present themselves effectively in photos.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-cyan-400">The Innovation</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    By combining state-of-the-art computer vision, machine learning, and years of professional photography expertise, we developed an AI system that understands human body positioning, aesthetic principles, and photographic composition.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Today, Pro AI Pose serves thousands of users worldwide, from professional models preparing for shoots to social media influencers crafting their perfect feed.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Our Expertise */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-10 text-center">Our Expertise</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="rounded-xl border border-border bg-card p-8">
                                <div className="text-5xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold mb-4 text-cyan-400">AI & Machine Learning</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our team includes PhD-level AI researchers and engineers with expertise in computer vision, deep learning, and neural network architecture. We continuously train our models on millions of professional photographs.
                                </p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">Key Technologies:</strong> TensorFlow, PyTorch, OpenCV, Custom CNN Architectures
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-border bg-card p-8">
                                <div className="text-5xl mb-4">📸</div>
                                <h3 className="text-xl font-bold mb-4 text-cyan-400">Professional Photography</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our photography consultants have decades of combined experience in fashion, portrait, and commercial photography. They&apos;ve worked with top agencies and understand what makes a photograph truly professional.
                                </p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">Experience:</strong> Fashion Week, Commercial Campaigns, Editorial Shoots, Celebrity Portraits
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-border bg-card p-8">
                                <div className="text-5xl mb-4">🎨</div>
                                <h3 className="text-xl font-bold mb-4 text-cyan-400">User Experience Design</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our UX designers ensure that cutting-edge AI technology remains accessible and intuitive. We focus on creating seamless experiences that feel natural and empowering, not overwhelming.
                                </p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">Approach:</strong> User-Centered Design, Accessibility First, Continuous Testing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Values */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-10 text-center">Our Core Values</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-xl border border-cyan-500/30 bg-card p-8">
                                <h3 className="text-xl font-bold mb-3 text-cyan-400">Innovation Through Research</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We invest heavily in R&D, constantly pushing the boundaries of what&apos;s possible with AI photography. Our team publishes research and collaborates with academic institutions.
                                </p>
                            </div>
                            <div className="rounded-xl border border-cyan-500/30 bg-card p-8">
                                <h3 className="text-xl font-bold mb-3 text-cyan-400">User Privacy & Security</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your photos and data are yours alone. We maintain strict GDPR compliance, encrypt all data, and never share your images with third parties.
                                </p>
                            </div>
                            <div className="rounded-xl border border-cyan-500/30 bg-card p-8">
                                <h3 className="text-xl font-bold mb-3 text-cyan-400">Accessibility for All</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Professional photography shouldn&apos;t require expensive equipment or training. We&apos;re committed to making quality accessible to everyone, everywhere.
                                </p>
                            </div>
                            <div className="rounded-xl border border-cyan-500/30 bg-card p-8">
                                <h3 className="text-xl font-bold mb-3 text-cyan-400">Continuous Improvement</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We actively listen to user feedback, continuously update our AI models, and regularly ship new features based on real-world needs.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Trust Indicators */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-10 text-center">Trusted By Professionals</h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-5xl font-bold text-cyan-400 mb-2">10K+</div>
                                <div className="text-muted-foreground">Active Users</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-cyan-400 mb-2">500K+</div>
                                <div className="text-muted-foreground">Photos Enhanced</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-cyan-400 mb-2">4.8/5</div>
                                <div className="text-muted-foreground">User Rating</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-cyan-400 mb-2">98%</div>
                                <div className="text-muted-foreground">Satisfaction Rate</div>
                            </div>
                        </div>
                    </section>

                    {/* Certifications & Compliance */}
                    <section className="mb-20">
                        <div className="rounded-xl border border-border bg-card p-8">
                            <h2 className="text-2xl font-bold mb-6 text-center">Certifications & Compliance</h2>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-4xl mb-2">🔒</div>
                                    <h3 className="font-bold mb-2">GDPR Compliant</h3>
                                    <p className="text-sm text-muted-foreground">Full compliance with EU data protection regulations</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-2">✅</div>
                                    <h3 className="font-bold mb-2">SOC 2 Type II</h3>
                                    <p className="text-sm text-muted-foreground">Enterprise-grade security standards</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-2">🛡️</div>
                                    <h3 className="font-bold mb-2">ISO 27001</h3>
                                    <p className="text-sm text-muted-foreground">Information security management</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="mb-20">
                        <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
                            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Whether you&apos;re a photographer, model, content creator, or just someone who loves great photos, we&apos;d love to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#download"
                                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                                >
                                    Try Pro AI Pose
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-lg border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition-all hover:bg-cyan-500/10"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        </>
    );
}
