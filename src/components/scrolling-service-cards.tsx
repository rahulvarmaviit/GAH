"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Sparkles,
    Zap,
    Palette,
    Code,
    Rocket,
    Star,
    Shield,
    UserCheck,
    Cloud,
    FileText,
    Activity,
    Settings
} from "lucide-react";

// Utility function (local definition similar to user's example)
function cn(...args: any[]) {
    return args.filter(Boolean).join(" ");
}

// Interface matching the internal data structure we want
export interface ServiceCardData {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    points?: string[];
}

// Props for the main component
interface ScrollingServiceCardsProps {
    items: {
        title: string;
        description: string;
        points: string[];
    }[];
    title?: string;
    subtitle?: string;
}

// Individual Service Card Component
const ServiceCard = ({
    service,
    index
}: {
    service: ServiceCardData;
    index: number;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity, scale, y }}
            className="sticky top-32 mb-8"
        >
            <div
                className={cn(
                    "relative overflow-hidden rounded-3xl p-8 min-h-[500px] flex flex-col",
                    "bg-gradient-to-br shadow-2xl",
                    "border border-white/10",
                    "backdrop-blur-sm",
                    service.gradient
                )}
            >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-mono text-white/60 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
                            {service.title}
                        </h3>
                        <p className="text-lg text-white/80 leading-relaxed mb-6">
                            {service.description}
                        </p>
                        {service.points && (
                            <ul className="space-y-2">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex items-start text-white/70">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
            </div>
        </motion.div>
    );
};

// Main Scrolling Service Cards Component
export const ScrollingServiceCards = ({
    items,
    title = "Our Services",
    subtitle
}: ScrollingServiceCardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Icon mapping based on index or potential title matching
    // Using a fixed cycle of nice icons and gradients for variety
    const getCardData = (item: any, index: number): ServiceCardData => {
        const icons = [Shield, UserCheck, Cloud, FileText, Activity, Settings];
        const gradients = [
            "from-purple-900/80 to-indigo-900/80",
            "from-blue-900/80 to-cyan-900/80",
            "from-emerald-900/80 to-teal-900/80",
            "from-orange-900/80 to-red-900/80",
            "from-pink-900/80 to-rose-900/80",
            "from-slate-800 to-zinc-800"
        ];

        return {
            id: `service-${index}`,
            title: item.title,
            description: item.description,
            icon: icons[index % icons.length],
            gradient: gradients[index % gradients.length],
            points: item.points
        };
    };

    const services = items.map((item, index) => getCardData(item, index));

    if (!mounted) {
        return null;
    }

    return (
        <div
            ref={containerRef}
            className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black/50" // Added bg-black/50 for section context
        >
            {/* Background gradient (localized to this section if needed, or rely on global) */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-purple-900/10 -z-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView for correct triggering on scroll
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-3">Core Capabilities</span>
                    <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Service Cards */}
                <div className="space-y-16 pb-32"> {/* Added more space-y and padding bottom */}
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
