'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Outcome {
    value: string;
    label: string;
    description: string;
}

interface PyramidOutcomesProps {
    title: string;
    subtitle: string;
    outcomes: Outcome[];
}

export function PyramidOutcomes({ title, subtitle, outcomes }: PyramidOutcomesProps) {
    // Default to the middle level (Strategy) or top (Purpose)
    const [activeIndex, setActiveIndex] = useState(0);

    const levels = [
        { name: 'PURPOSE', color: 'purple' },
        { name: 'STRATEGY', color: 'blue' },
        { name: 'EXECUTION', color: 'emerald' }, // Green/Teal
    ];

    // Ensure we have at least 3 outcomes, fallback if not
    const safeOutcomes = outcomes.slice(0, 3);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <div className="text-xs font-bold text-purple-500 tracking-widest uppercase mb-4">Business Outcomes</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* LEFT: PYRAMID VISUALIZATION */}
                    <div className="flex flex-col items-center justify-center relative h-[400px]">

                        {/* Top Triangle - Level 0 */}
                        <motion.div
                            onClick={() => setActiveIndex(0)}
                            className={`w-[160px] h-[100px] relative cursor-pointer transition-all duration-300 z-30 group clip-triangle mb-2`}
                            style={{
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                background: activeIndex === 0 ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Border simulation (using inset shadow or SVG would be cleaner, but simple CSS border with clip-path is tricky. Using a wrapper or SVG is better. Let's use SVG for the whole pyramid for precision) */}
                            {/* Actually SVG is much easier for these shapes */}
                        </motion.div>
                        {/* Rethinking: Let's use a pure SVG stack for the pyramid to get nice glowing borders */}

                        <div className="relative w-[340px] h-[300px]">
                            {/* Level 0: Purpose (Triangle) */}
                            <motion.div
                                onClick={() => setActiveIndex(0)}
                                className="absolute left-1/2 -translate-x-1/2 top-0 w-[140px] h-[90px] cursor-pointer flex items-end justify-center pb-2 z-30"
                                animate={{
                                    y: activeIndex === 0 ? -10 : 0,
                                    filter: activeIndex === 0 ? 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.6))' : 'drop-shadow(0 0 0px rgba(0,0,0,0))'
                                }}
                            >
                                <svg viewBox="0 0 140 90" className="absolute inset-0 w-full h-full">
                                    <path d="M70 0 L140 90 L0 90 Z" fill={activeIndex === 0 ? "rgba(168,85,247,0.3)" : "rgba(168,85,247,0.05)"} stroke="#a855f7" strokeWidth="2" />
                                </svg>
                                <span className={`relative text-[10px] font-bold tracking-[0.2em] transition-colors ${activeIndex === 0 ? 'text-white' : 'text-slate-500'}`}>PURPOSE</span>
                            </motion.div>

                            {/* Level 1: Strategy (Trapezoid) */}
                            <motion.div
                                onClick={() => setActiveIndex(1)}
                                className="absolute left-1/2 -translate-x-1/2 top-[95px] w-[220px] h-[90px] cursor-pointer flex items-end justify-center pb-2 z-20"
                                animate={{
                                    scale: activeIndex === 1 ? 1.05 : 1,
                                    filter: activeIndex === 1 ? 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))' : 'drop-shadow(0 0 0px rgba(0,0,0,0))'
                                }}
                            >
                                <svg viewBox="0 0 220 90" className="absolute inset-0 w-full h-full">
                                    <path d="M42 0 L178 0 L220 90 L0 90 Z" fill={activeIndex === 1 ? "rgba(59,130,246,0.3)" : "rgba(59,130,246,0.05)"} stroke="#3b82f6" strokeWidth="2" />
                                </svg>
                                <span className={`relative text-[10px] font-bold tracking-[0.2em] transition-colors ${activeIndex === 1 ? 'text-white' : 'text-slate-500'}`}>STRATEGY</span>
                            </motion.div>

                            {/* Level 2: Execution (Trapezoid) */}
                            <motion.div
                                onClick={() => setActiveIndex(2)}
                                className="absolute left-1/2 -translate-x-1/2 top-[190px] w-[300px] h-[90px] cursor-pointer flex items-end justify-center pb-2 z-10"
                                animate={{
                                    y: activeIndex === 2 ? 10 : 0,
                                    filter: activeIndex === 2 ? 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.6))' : 'drop-shadow(0 0 0px rgba(0,0,0,0))'
                                }}
                            >
                                <svg viewBox="0 0 300 90" className="absolute inset-0 w-full h-full">
                                    <path d="M42 0 L258 0 L300 90 L0 90 Z" fill={activeIndex === 2 ? "rgba(16,185,129,0.3)" : "rgba(16,185,129,0.05)"} stroke="#10b981" strokeWidth="2" />
                                </svg>
                                <span className={`relative text-[10px] font-bold tracking-[0.2em] transition-colors ${activeIndex === 2 ? 'text-white' : 'text-slate-500'}`}>EXECUTION</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT: CONTENT DISPLAY */}
                    <div className="flex flex-col justify-center min-h-[300px]">
                        <AnimatePresence mode='wait'>
                            {safeOutcomes.map((outcome, index) => {
                                if (index !== activeIndex) return null;

                                const levelName = levels[index].name;
                                const color = levels[index].color;

                                // Color classes mapping
                                const labelColor = {
                                    purple: 'text-purple-500',
                                    blue: 'text-blue-500',
                                    emerald: 'text-emerald-500'
                                }[color] || 'text-purple-500';

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6"
                                    >
                                        <div className={`text-xs font-mono font-bold uppercase tracking-widest ${labelColor}`}>
                                            LEVEL {index + 1} • {levelName} IMPACT
                                        </div>

                                        <div className="relative">
                                            {/* Big Arrow Icon */}
                                            <div className={`text-4xl md:text-5xl font-bold text-white mb-2 flex items-start gap-4`}>
                                                <span className={`transform transition-transform ${labelColor}`}>↑</span>
                                                <span className="leading-tight">{outcome.label}</span>
                                            </div>
                                            {/* Value Badge */}
                                            <div className={`inline-block px-3 py-1 rounded border ${labelColor.replace('text', 'border')}/30 bg-white/5 ${labelColor} text-sm font-bold mb-4`}>
                                                {outcome.value} Improvement
                                            </div>
                                        </div>

                                        <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-white/10 pl-6">
                                            {outcome.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
