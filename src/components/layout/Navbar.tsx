"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className="w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md sticky top-0">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo/Pro_Pose.png"
                        alt="Pro AI Pose Logo"
                        width={40}
                        height={40}
                        className="h-10 w-auto object-contain rounded-xl"
                        priority
                    />
                    <span className="text-xl font-bold tracking-tighter">
                        <span className="text-primary">Pro</span> AI <span className="text-primary">Pose</span>
                    </span>
                </Link>
                <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

            </div>
        </nav>
    );
}
