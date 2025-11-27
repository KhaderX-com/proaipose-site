import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo/Pro_Pose.png"
                        alt="Pro AI Pose Logo"
                        width={32}
                        height={32}
                        className="h-8 w-auto object-contain rounded-xl"
                    />
                    <span className="text-xl font-bold tracking-tighter">
                        <span className="text-primary">Pro</span> AI <span className="text-primary">Pose</span>
                    </span>
                </Link>
                <div className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} Pro AI Pose. All rights reserved.
                </div>
                <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                    <Link href="/use-cases" className="text-muted-foreground hover:text-primary transition-colors text-sm">Use Cases</Link>
                    <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link>
                    <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</Link>
                    <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</Link>
                </div>
            </div>
        </footer>
    );
}
