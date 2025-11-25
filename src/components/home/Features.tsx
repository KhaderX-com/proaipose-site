import React from "react";
import { Sparkles, Camera, Zap, Layers } from "lucide-react";

const features = [
    {
        icon: <Sparkles className="w-6 h-6 text-primary" />,
        title: "AI-Powered Guidance",
        description: "Get real-time suggestions and corrections to perfect your pose instantly.",
    },
    {
        icon: <Layers className="w-6 h-6 text-primary" />,
        title: "Professional Library",
        description: "Access hundreds of professionally curated poses for any occasion or style.",
    },
    {
        icon: <Camera className="w-6 h-6 text-primary" />,
        title: "Smart Camera",
        description: "Our intelligent camera overlay helps you align your shot perfectly every time.",
    },
    {
        icon: <Zap className="w-6 h-6 text-primary" />,
        title: "Instant Results",
        description: "See the magic happen in real-time. No waiting, just perfect photos.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose <span className="text-primary">Pro</span> AI <span className="text-primary">Pose</span>?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Unlock your full photogenic potential with our cutting-edge features designed for everyone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] group"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
