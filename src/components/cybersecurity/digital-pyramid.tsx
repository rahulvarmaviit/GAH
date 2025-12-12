
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Outcome {
    value: string;
    label: string;
    description: string;
}

interface DigitalPyramidProps {
    outcomes: Outcome[];
    title: string;
    subtitle: string;
    theme?: 'light' | 'dark';
}

export function DigitalPyramid({ outcomes, title, subtitle, theme = 'dark' }: DigitalPyramidProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const isLight = theme === 'light';
    const bgColor = isLight ? "bg-white" : "bg-black";
    const bgGradient = isLight
        ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"
        : "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-black to-black";

    // Text Colors
    const titleColor = isLight ? "text-slate-900" : "text-white";
    const subtitleColor = isLight ? "text-slate-600" : "text-slate-400";
    const outcomeValueColor = isLight ? "text-slate-900" : "text-white";
    const outcomeTextColor = isLight ? "text-slate-600" : "text-slate-400"; // Body text

    // SVG Gradient
    // Light mode needs darker alpha for visibility
    const gradientStart = isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
    const gradientEnd = isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)";


    // Map scroll progress to active level
    // 0 - 0.33: Level 1 (Top)
    // 0.33 - 0.66: Level 2 (Middle)
    // 0.66 - 1.0: Level 3 (Base)

    // Opacities for each text block
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.33], [0, 1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.43, 0.58, 0.66], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.66, 0.76, 0.9, 1], [0, 1, 1, 1]);

    // Transforms for slide effect
    const y1 = useTransform(scrollYProgress, [0, 0.1, 0.33], [50, 0, -50]);
    const y2 = useTransform(scrollYProgress, [0.33, 0.43, 0.66], [50, 0, -50]);
    const y3 = useTransform(scrollYProgress, [0.66, 0.76, 1], [50, 0, 0]);

    // Active glow opacities
    const topOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
    const midOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.63, 0.66], [0.3, 1, 1, 0.3]);
    const baseOpacity = useTransform(scrollYProgress, [0.63, 0.68, 1], [0.3, 1, 1]);

    return (
        <section ref={containerRef} className={`relative h-[300vh] ${bgColor}`}>
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-12">

                {/* Background Aesthetics */}
                <div className={`absolute inset-0 ${bgGradient} -z-10`}></div>

                {/* Section Header - Now inside sticky container */}
                <div className="container text-center relative z-10 mb-8">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase">Business Outcomes</span>
                    <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mt-2 mb-3`}>{title}</h2>
                    <p className={`text-base md:text-lg ${subtitleColor} max-w-2xl mx-auto`}>{subtitle}</p>
                </div>

                {/* Main Content: Pyramid + Text */}
                <div className="w-full flex-1 flex flex-col md:flex-row items-center justify-center px-4">

                    {/* Left: The Pyramid */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-10 relative">
                        <div className="relative w-full max-w-lg aspect-square">
                            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                                <defs>
                                    <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <linearGradient id="glass-gradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor={gradientStart} />
                                        <stop offset="100%" stopColor={gradientEnd} />
                                    </linearGradient>
                                </defs>

                                {/* TOP TRIANGLE */}
                                <motion.g style={{ opacity: topOpacity }}>
                                    <motion.path
                                        d="M100 20 L130 70 L70 70 Z"
                                        fill="url(#glass-gradient)"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        className="text-purple-500"
                                    />
                                    {/* Glow Layer */}
                                    <motion.path
                                        d="M100 20 L130 70 L70 70 Z"
                                        fill="rgba(168, 85, 247, 0.3)"
                                        stroke="#a855f7"
                                        strokeWidth="2"
                                        filter="url(#glow-purple)"
                                        style={{ opacity: topOpacity }}
                                    />
                                    <text x="100" y="55" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace" letterSpacing="1" className="uppercase font-bold">Purpose</text>
                                </motion.g>

                                {/* MIDDLE TRAPEZOID */}
                                <motion.g style={{ opacity: midOpacity }}>
                                    <motion.path
                                        d="M70 75 L130 75 L150 125 L50 125 Z"
                                        fill="url(#glass-gradient)"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        className="text-blue-500"
                                    />
                                    <motion.path
                                        d="M70 75 L130 75 L150 125 L50 125 Z"
                                        fill="rgba(59, 130, 246, 0.3)"
                                        stroke="#3b82f6"
                                        strokeWidth="2"
                                        filter="url(#glow-purple)"
                                        style={{ opacity: midOpacity }}
                                    />
                                    <text x="100" y="105" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace" letterSpacing="1" className="uppercase font-bold">Strategy</text>
                                </motion.g>

                                {/* BASE TRAPEZOID */}
                                <motion.g style={{ opacity: baseOpacity }}>
                                    <motion.path
                                        d="M50 130 L150 130 L180 180 L20 180 Z"
                                        fill="url(#glass-gradient)"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        className="text-emerald-500"
                                    />
                                    <motion.path
                                        d="M50 130 L150 130 L180 180 L20 180 Z"
                                        fill="rgba(16, 185, 129, 0.3)"
                                        stroke="#10b981"
                                        strokeWidth="2"
                                        filter="url(#glow-purple)"
                                        style={{ opacity: baseOpacity }}
                                    />
                                    <text x="100" y="160" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace" letterSpacing="1" className="uppercase font-bold">Execution</text>
                                </motion.g>
                            </svg>

                            {/* Connecting Lines (Decorative) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                                {/* You could add CSS lines connecting to the text here if needed */}
                            </div>
                        </div>
                    </div>

                    {/* Right: The Text Content */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 relative">
                        <div className="max-w-md relative w-full h-64">

                            {/* Intro Header (Visible initially or just part of flow?) */}
                            {/* The section title is handled above or passed in. Let's show it statically above or fade it out? 
                            The user design implies the text next to pyramid relates *to* the pyramid level.
                        */}

                            {/* BLOCK 1 */}
                            <motion.div
                                style={{ opacity: opacity1, y: y1 }}
                                className="absolute top-0 left-0 w-full"
                            >
                                <span className="text-purple-500 font-mono text-xs uppercase tracking-widest mb-2 block">Level 1 · Strategic Impact</span>
                                <div className={`text-5xl font-bold ${outcomeValueColor} mb-4`}>{outcomes[2].value}</div> {/* Trust & Assurance - Top Level Pinnacle? */}
                                <h3 className={`text-2xl font-bold ${titleColor} mb-2`}>{outcomes[2].label}</h3>
                                <p className={`${outcomeTextColor} leading-relaxed`}>{outcomes[2].description}</p>
                            </motion.div>

                            {/* BLOCK 2 */}
                            <motion.div
                                style={{ opacity: opacity2, y: y2 }}
                                className="absolute top-0 left-0 w-full"
                            >
                                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-2 block">Level 2 · Operational Speed</span>
                                <div className={`text-5xl font-bold ${outcomeValueColor} mb-4`}>{outcomes[1].value}</div>
                                <h3 className={`text-2xl font-bold ${titleColor} mb-2`}>{outcomes[1].label}</h3>
                                <p className={`${outcomeTextColor} leading-relaxed`}>{outcomes[1].description}</p>
                            </motion.div>

                            {/* BLOCK 3 */}
                            <motion.div
                                style={{ opacity: opacity3, y: y3 }}
                                className="absolute top-0 left-0 w-full"
                            >
                                <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 block">Level 3 · Foundation</span>
                                <div className={`text-5xl font-bold ${outcomeValueColor} mb-4`}>{outcomes[0].value}</div>
                                <h3 className={`text-2xl font-bold ${titleColor} mb-2`}>{outcomes[0].label}</h3>
                                <p className={`${outcomeTextColor} leading-relaxed`}>{outcomes[0].description}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
