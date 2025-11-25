"use client";

import Link from "next/link";

export function Navbar() {
    return (
        <nav className="w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md sticky top-0">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-primary">Pro</span> AI <span className="text-primary">Pose</span>
                </Link>
                <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

            </div>
        </nav>
    );
}
