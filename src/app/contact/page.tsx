import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
            <Navbar />
            <main className="grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have questions about Pro AI Pose? Need support or have feature suggestions?
                        We&apos;re here to help you get the most out of your professional posing experience.
                    </p>
                </div>

                <div className="flex justify-center mb-16">
                    {/* Contact Info Card */}
                    <div className="w-full max-w-md bg-secondary/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-primary/30 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                        <p className="text-muted-foreground mb-6">
                            For general inquiries, technical support, and partnership opportunities.
                        </p>
                        <a
                            href="mailto:contact@proaipose.com"
                            className="text-primary font-medium hover:underline text-lg"
                        >
                            contact@proaipose.com
                        </a>
                    </div>
                </div>

                {/* FAQ Section (Optional but good for a contact page) */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">

                        <div className="border-b border-white/10 pb-6">
                            <h3 className="font-semibold text-lg mb-2">Is the app free to use?</h3>
                            <p className="text-muted-foreground">
                                Pro AI Pose offers both free and premium features. You can download and try the app for free.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
