'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Point {
    title: string;
    description: string;
}

interface KeyCapabilitiesSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    points?: Point[];
    securityNote?: string;
}

const defaultPoints = [
    {
        title: 'Ticketing built for execution',
        description: 'Every ticket has a clear owner, scope and path — so work doesn’t fall between the cracks.'
    },
    {
        title: 'Role-based dashboards',
        description: 'Teams see what they must do now. Managers see progress and risk. Clients see reliable delivery.'
    },
    {
        title: 'Integrated work context',
        description: 'Tasks, projects and meetings linked together — so decisions are made with full context, not guesswork.'
    },
    {
        title: 'Performance & workload insights',
        description: 'See where capacity is tight, where it’s idle, and how teams are performing over time.'
    }
];

export function KeyCapabilitiesSection({
    title = "Key Capabilities",
    subtitle = "Built for real operations, not theoretical frameworks.",
    description = "T.M.S focuses on everyday execution — so teams adopt it quickly and leaders get the visibility they’ve been missing.",
    points = defaultPoints,
    securityNote = "T.M.S"
}: KeyCapabilitiesSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-16 items-center">

                    {/* Sticky Header */}
                    <div className="lg:pr-12">
                        <span className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4 block">
                            {title}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            {subtitle}
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-xl">
                            {description}
                        </p>

                        <div className="text-sm text-slate-500 border-t border-white/10 pt-6 mt-12">
                            {securityNote} will be secured by <span className="text-slate-300 font-medium">Wolfronix</span>, providing compliance-grade data protection and auditability.
                        </div>
                    </div>

                    {/* Scrolling Points */}
                    <div className="space-y-12">
                        {points.map((point, index) => {
                            // Calculate opacity based on scroll progress
                            // Dynamically adjust step size based on number of points
                            const stepSize = 1 / (points.length + 0.5); // Add buffer so last item finishes before very end
                            const start = index * stepSize;
                            const end = start + (stepSize * 0.8);

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(scrollYProgress, [start, end], [20, 0]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const color = useTransform(scrollYProgress, [start, end], ['#334155', '#ffffff']);

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity, y }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    {/* Active Line Indicator */}
                                    <motion.div
                                        style={{ opacity, backgroundColor: 'white' }}
                                        className="absolute left-[-1px] top-0 bottom-0 w-[3px] rounded-full origin-top"
                                    />

                                    <motion.h3
                                        style={{ color }}
                                        className="text-2xl font-bold mb-3"
                                    >
                                        {point.title}
                                    </motion.h3>
                                    <p className="text-lg text-slate-400 leading-relaxed">
                                        {point.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
