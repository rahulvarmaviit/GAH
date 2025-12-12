
import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface MetallicFrameProps {
    src: string;
    alt?: string;
    className?: string;
    // Optional aspect ratio or dimensions
}

export function MetallicFrame({ src, alt = "App Screenshot", className }: MetallicFrameProps) {
    return (
        <div className={cn("relative group perspective-1000", className)}>
            {/* Outer Metallic Rim */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-300 via-slate-100 to-slate-400 p-[1px] shadow-2xl">
                {/* Inner Bezel/Frame Detail */}
                <div className="rounded-[23px] bg-gradient-to-br from-slate-100 via-white to-slate-200 p-2">
                    {/* Screen Container */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-900/5 bg-slate-900 shadow-inner">
                        {/* Reflection/Sheen effect */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />

                        {/* The Image/Content */}
                        <div className="relative w-full aspect-video md:aspect-[16/10]">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Subtle Ambient Glow behind the frame */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
}
