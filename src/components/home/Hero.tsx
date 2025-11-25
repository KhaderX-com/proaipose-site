import React from "react";
import { AppStoreButtons } from "./AppStoreButtons";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

export function Hero() {
    return (
        <main className="grow flex flex-col justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-30" />

            <div className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                        #1 AI Posing Assistant
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        Get Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Stylish
                        </span>{" "}
                        Professional Poses
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Transform your photos into a professional photoshoot. Upload a single image and our AI will generate a variety of stylish and natural poses, perfect for your portfolio, social media, or just for fun.
                    </p>

                    <AppStoreButtons />
                </div>

                {/* Right Content - Screenshot Animation */}
                <ScreenshotCarousel />
            </div>
        </main>
    );
}
