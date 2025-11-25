import React from "react";

export function ScreenshotCarousel() {
    const screenshots = [
        "https://res.cloudinary.com/destej60y/image/upload/v1764029030/sc1_wadzsy.png",
        "https://res.cloudinary.com/destej60y/image/upload/v1764029030/sc2_milwtn.png",
        "https://res.cloudinary.com/destej60y/image/upload/v1764029030/sc3_w45axs.png",
        "https://res.cloudinary.com/destej60y/image/upload/v1764029031/sc4_j9bghf.png",
    ];

    return (
        <div className="flex-1 w-full max-w-[600px] relative">
            {/* Phone Frame / Gradient Mask */}
            {/* Phone Frame / Gradient Mask */}


            <div className="overflow-hidden relative w-full mask-gradient">
                <div className="flex gap-6 animate-scroll w-max py-10">
                    {/* Triple the array to ensure smooth infinite scroll on wider screens */}
                    {[...screenshots, ...screenshots, ...screenshots].map((src, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-b from-primary/50 to-purple-600/50 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <img
                                src={src}
                                alt={`App Screenshot ${index + 1}`}
                                className="relative h-[500px] w-auto rounded-[2rem] border-[6px] border-background shadow-2xl bg-background object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
