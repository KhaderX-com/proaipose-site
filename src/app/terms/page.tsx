import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
            <Navbar />
            <main className="grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-primary">Terms of Service</h1>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Pro AI Pose website and mobile application (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                        <p>
                            Pro AI Pose provides AI-guided photography poses and related tools for models, photographers, and influencers. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                        <p>
                            To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Content</h2>
                        <p>
                            You retain ownership of any photos or content you upload to the Service. By uploading content, you grant Pro AI Pose a license to use, store, and display your content solely for the purpose of providing the Service to you. We do not claim ownership of your content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Prohibited Conduct</h2>
                        <p>
                            You agree not to use the Service for any unlawful purpose or in any way that violates these Terms. Prohibited conduct includes, but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Harassing, abusing, or harming another person.</li>
                            <li>Impersonating any person or entity.</li>
                            <li>Interfering with or disrupting the Service or servers.</li>
                            <li>Uploading malicious code or viruses.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                        <p>
                            The Service and its original content (excluding user-provided content), features, and functionality are and will remain the exclusive property of Pro AI Pose and its licensors. The Service is protected by copyright, trademark, and other laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
                        <p>
                            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                        <p>
                            In no event shall Pro AI Pose, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at support@proaipose.com.
                        </p>
                    </section>

                    <div className="pt-8 text-sm text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
