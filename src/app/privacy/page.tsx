import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
            <Navbar />
            <main className="grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-primary">Privacy Policy</h1>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                        <p>
                            At Pro AI Pose, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website. We are committed to protecting your personal data and ensuring you have full control over your information in compliance with GDPR and other data protection regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us when you create an account, update your profile, or use our services. This may include:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Account Information:</strong> Name, email address, and profile picture.</li>
                            <li><strong>User Content:</strong> Photos and images you upload for pose analysis or generation.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our app, such as features used and time spent.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Your Rights &amp; GDPR Compliance</h2>
                        <p>
                            We believe in giving you full control over your data. In accordance with GDPR, you have the following rights:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Right to Access:</strong> You can view your personal profile and data directly within the app at any time.</li>
                            <li><strong>Right to Rectification:</strong> You can easily edit and update your personal information through your account settings.</li>
                            <li><strong>Right to Erasure (Deletion):</strong> You have the right to delete your account and all associated data permanently. This can be done directly within the app settings or by contacting us.</li>
                            <li><strong>Right to Data Portability:</strong> You can request a copy of your data in a structured, commonly used format.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Account Deletion</h2>
                        <p>
                            You can delete your Pro AI Pose account at any time directly from the app: Profile → Settings → Account → Delete Account. This permanently deletes your account, personal information, and generated photos from our servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. How We Use Your Information</h2>
                        <p>
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>To provide and maintain our Service.</li>
                            <li>To personalize your experience and improve our AI pose recommendations.</li>
                            <li>To manage your account and provide customer support.</li>
                            <li>To communicate with you about updates, security alerts, and support messages.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
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
