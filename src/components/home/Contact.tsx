import React from "react";
import { Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 relative border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
                    Have questions, feedback, or need support? We&apos;d love to hear from you.
                </p>

                <a
                    href="mailto:contact@proaipose.com"
                    className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl transition-all hover:scale-105 group"
                >
                    <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                        <Mail size={24} />
                    </div>
                    <div className="text-left">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Email Us</div>
                        <div className="text-xl font-medium">contact@proaipose.com</div>
                    </div>
                </a>
            </div>
        </section>
    );
}
