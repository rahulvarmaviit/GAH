"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Image filenames in public/assets/generated/
const ILLUSTRATIONS = [
    "security-shield.svg",
    "identity-scan.svg",
    "cloud-security.svg",
    "governance-compliance.svg",
    "threat-detection.svg",
    "tools-expertise.svg"
];

interface ServicePillar {
    title: string;
    description: string;
    points: string[];
}

interface CybersecurityPillarsProps {
    pillars: ServicePillar[];
    title?: string;
    subtitle?: string;
}

export function CybersecurityPillars({ pillars, title, subtitle }: CybersecurityPillarsProps) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            {(title || subtitle) && (
                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase">Core Capabilities</span>
                    {title && <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-3 mb-6">{title}</h2>}
                    {subtitle && <p className="text-xl text-slate-400">{subtitle}</p>}
                </div>
            )}

            <div className="relative flex flex-col gap-12 sm:gap-16 py-8">

                {pillars.map((pillar, index) => {
                    const isEven = index % 2 === 0;
                    const imageName = ILLUSTRATIONS[index % ILLUSTRATIONS.length];
                    const finalSrc = `/assets/generated/${imageName}`;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col gap-6 sm:gap-8 items-center",
                                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                            )}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                                        {pillar.title}
                                    </h3>
                                    {/* Decorative underline */}
                                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                                    {pillar.points.map((point, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                                            <span className="text-slate-300 font-medium text-sm">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                                    {pillar.description}
                                </p>
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 w-full flex justify-center items-center relative group">
                                <div className="relative w-full aspect-square max-w-[280px] md:max-w-[350px]">
                                    <Image
                                        src={finalSrc}
                                        alt={pillar.title}
                                        fill
                                        className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
