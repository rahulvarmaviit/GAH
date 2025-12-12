'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Cloud, Cog, Shield, Database, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicePillar {
    badge: string;
    title: string;
    description: string;
    points: string[];
}

interface CircularServiceSelectorProps {
    pillars: ServicePillar[];
    title: string;
    subtitle: string;
    theme?: 'light' | 'dark';
    accentColor?: 'purple' | 'blue' | 'emerald' | 'orange' | 'pink';
}

export function CircularServiceSelector({ pillars, title, subtitle, theme = 'dark', accentColor = 'purple' }: CircularServiceSelectorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Track scroll progress to determine active section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            // Map scroll 0-1 to index 0-(length-1)
            // Using a slight buffer to ensure last item is reachable
            const index = Math.min(
                Math.floor(value * pillars.length),
                pillars.length - 1
            );
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress, pillars.length]);

    const isLight = theme === 'light';
    const textColor = isLight ? "text-slate-900" : "text-white";
    const subTextColor = isLight ? "text-slate-600" : "text-slate-400";
    const titleGradient = isLight
        ? "bg-gradient-to-r from-slate-900 to-slate-600"
        : "bg-gradient-to-r from-white to-slate-400";

    // Color Mapping
    const colorStyles = {
        purple: {
            badgeBg: isLight ? "bg-purple-600/10" : "bg-purple-500/10",
            badgeText: isLight ? "text-purple-700" : "text-purple-400",
            checkColor: isLight ? "text-purple-600" : "text-purple-500",
        },
        blue: {
            badgeBg: isLight ? "bg-blue-600/10" : "bg-blue-500/10",
            badgeText: isLight ? "text-blue-700" : "text-blue-400",
            checkColor: isLight ? "text-blue-600" : "text-blue-500",
        },
        emerald: {
            badgeBg: isLight ? "bg-emerald-600/10" : "bg-emerald-500/10",
            badgeText: isLight ? "text-emerald-700" : "text-emerald-400",
            checkColor: isLight ? "text-emerald-600" : "text-emerald-500",
        },
        orange: {
            badgeBg: isLight ? "bg-orange-600/10" : "bg-orange-500/10",
            badgeText: isLight ? "text-orange-700" : "text-orange-400",
            checkColor: isLight ? "text-orange-600" : "text-orange-500",
        },
        pink: {
            badgeBg: isLight ? "bg-pink-600/10" : "bg-pink-500/10",
            badgeText: isLight ? "text-pink-700" : "text-pink-400",
            checkColor: isLight ? "text-pink-600" : "text-pink-500",
        }
    };

    const activeColor = colorStyles[accentColor] || colorStyles.purple;

    // Pillar styles
    const badgeBg = activeColor.badgeBg;
    const badgeText = activeColor.badgeText;
    const checkColor = activeColor.checkColor;

    return (
        <div ref={containerRef} style={{ height: `${pillars.length * 100}vh` }} className="relative w-full max-w-7xl mx-auto px-4">
            <div className="sticky top-0 h-screen flex flex-col justify-center py-10">
                {/* Header - Now inside Sticky Container */}
                <div className="text-center mb-10 flex-shrink-0">
                    <h2 className={`text-3xl md:text-5xl font-bold bg-clip-text text-transparent ${titleGradient} mb-6`}>
                        {title}
                    </h2>
                    <p className={`${subTextColor} max-w-2xl mx-auto text-lg leading-relaxed`}>
                        {subtitle}
                    </p>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex items-center overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
                        {/* Left Column: Transitioning Text */}
                        <div className="relative h-[400px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 flex flex-col justify-center"
                                >
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${badgeBg} border ${theme === 'light' ? 'border-black/5' : 'border-white/10'} ${badgeText} text-xs font-bold w-fit mb-6`}>
                                        {pillars[activeIndex].badge}
                                    </div>
                                    <h3 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>
                                        {pillars[activeIndex].title}
                                    </h3>
                                    <p className={`${subTextColor} text-lg mb-8 leading-relaxed max-w-md`}>
                                        {pillars[activeIndex].description}
                                    </p>
                                    <div className="space-y-4">
                                        {pillars[activeIndex].points.map((point, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-0.5`} />
                                                <span className={`${subTextColor} text-base`}>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="hidden lg:flex h-full items-center justify-center perspective-1000">
                            <RotatingWheel activeIndex={activeIndex} pillars={pillars} theme={theme} accentColor={accentColor} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



const ICONS = [Cloud, Cog, Shield, Database]; // Map to pillars manually or pass icon prop

function RotatingWheel({ activeIndex, pillars, theme, accentColor = 'purple' }: { activeIndex: number, pillars: ServicePillar[], theme: 'light' | 'dark', accentColor?: 'purple' | 'blue' | 'emerald' | 'orange' | 'pink' }) {
    const isLight = theme === 'light';
    // Visual Adjustments for Light Mode
    // Stroke needs to be visible against white -> Slate-200 or similar
    // Fill for inactive segments needs to be distinct from white bg -> Slate-100/200

    const strokeColor = isLight ? "#e2e8f0" : "white"; // Slate-200 vs White
    const inactiveFill = isLight ? "#f1f5f9" : "#f1f5f9"; // Keep slate-100, checking contrast
    // Ideally on white BG, f1f5f9 (slate-50) is very subtle. Maybe darken slightly for light mode?
    const inactiveSegmentFill = isLight ? "#e2e8f0" : "#f1f5f9"; // Slate-200 for light mode to pop

    const gradients = {
        purple: { start: "#a855f7", end: "#9333ea", iconBg: "bg-purple-600" },
        blue: { start: "#3b82f6", end: "#2563eb", iconBg: "bg-blue-600" },
        emerald: { start: "#10b981", end: "#059669", iconBg: "bg-emerald-600" },
        orange: { start: "#f97316", end: "#ea580c", iconBg: "bg-orange-600" },
        pink: { start: "#ec4899", end: "#db2777", iconBg: "bg-pink-600" }
    };
    const activeGradient = gradients[accentColor] || gradients.purple;

    return (
        <div className="relative w-[500px] h-[500px]">
            {/* Icons Overlay - Static Positions (Updated for X layout: Top, Right, Bottom, Left) */}
            <div className="absolute inset-0 z-40 pointer-events-none">
                <IconOverlay index={0} activeIndex={activeIndex} angle={0} icon={ICONS[0]} theme={theme} />
                <IconOverlay index={1} activeIndex={activeIndex} angle={90} icon={ICONS[1]} theme={theme} />
                <IconOverlay index={2} activeIndex={activeIndex} angle={180} icon={ICONS[2]} theme={theme} />
                <IconOverlay index={3} activeIndex={activeIndex} angle={270} icon={ICONS[3]} theme={theme} />
            </div>

            {/* Rotated Container for Wheel Geometry (-45deg to create X dividers) */}
            <div className="w-full h-full relative z-0 transform -rotate-45">
                {/* Static Background Wheel (Grey Segments) */}
                <div className="w-full h-full relative z-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                        <defs>
                            <linearGradient id="grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={activeGradient.start} />
                                <stop offset="100%" stopColor={activeGradient.end} />
                            </linearGradient>
                        </defs>
                        {/* All segments static grey initially - Gap created by stroke */}
                        <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill={inactiveSegmentFill} stroke={strokeColor} strokeWidth="1.5" />
                        <path d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" fill={inactiveSegmentFill} stroke={strokeColor} strokeWidth="1.5" />
                        <path d="M 50 50 L 50 95 A 45 45 0 0 1 5 50 Z" fill={inactiveSegmentFill} stroke={strokeColor} strokeWidth="1.5" />
                        <path d="M 50 50 L 5 50 A 45 45 0 0 1 50 5 Z" fill={inactiveSegmentFill} stroke={strokeColor} strokeWidth="1.5" />
                    </svg>
                </div>


                {/* Rotating Blue Highlight Segment */}
                <motion.div
                    className="absolute inset-0 z-10"
                    animate={{ rotate: activeIndex * 90 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Single Wedge */}
                        <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill="url(#grad-active)" stroke="white" strokeWidth="1.5" />
                    </svg>
                </motion.div>
            </div>

            {/* Center Core with Arrow */}
            <div className="absolute inset-0 m-auto w-48 h-48 z-30 flex items-center justify-center">
                {/* Rotating Arrow Wrapper */}
                <motion.div
                    className="absolute inset-0 z-0"
                    animate={{ rotate: activeIndex * 90 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                >
                    {/* The Arrow (pointing up, aligned with top segment) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 w-8 h-8 bg-white transform rotate-45 shadow-sm rounded-sm"></div>
                </motion.div>

                {/* Main White Circle */}
                <div className="relative w-full h-full bg-white rounded-full z-10 shadow-[0_0_60px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-6 text-center">
                    <div className={`${activeGradient.iconBg} rounded-full p-3 mb-2 shadow-lg`}>
                        <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Capabilities</div>
                </div>
            </div>
        </div>
    );
}

function IconOverlay({ index, activeIndex, angle, icon: Icon, theme }: { index: number, activeIndex: number, angle: number, icon: any, theme: 'light' | 'dark' }) {
    // Correct angle for Top (0 deg) to be at -90 deg in trig (Top of circle)
    // CSS angle 0 is Usually Top if using sin/cos logic correctly mapped
    // Standard Trig: 0 = Right. Top = -90 (or 270).
    // angle input: 0 (Top).
    // We want 0 -> -90 rad.
    const rad = (angle - 90) * (Math.PI / 180);
    const radius = 170; // Slightly pushed out due to larger center
    const x = 250 + radius * Math.cos(rad);
    const y = 250 + radius * Math.sin(rad);

    const isLight = theme === 'light';
    const iconColor = activeIndex === index
        ? "text-white"
        : isLight ? "text-slate-500" : "text-slate-400";

    return (
        <div
            className="absolute -ml-6 -mt-6 w-12 h-12 flex items-center justify-center transition-all duration-300 z-50"
            style={{ left: x, top: y }}
        >
            <Icon className={`w-10 h-10 transition-colors duration-300 drop-shadow-md ${iconColor}`} />
        </div>
    );
}
