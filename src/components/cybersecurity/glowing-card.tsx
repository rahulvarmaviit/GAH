import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GlowingCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    color?: string; // Hex color for the glow
    className?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ title, description, icon, color = '#a855f7', className }) => {
    return (
        <div className={`relative w-64 h-80 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl group ${className}`}>

            {/* Top Glow/Sheen */}
            <div
                className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"
                style={{ background: `linear-gradient(180deg, ${color}33 0%, transparent 100%)` }}
            />

            {/* Central Glow Spot behind Icon */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{ backgroundColor: color }}
            />

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-between p-6 z-10 text-center">

                {/* Large Icon Area */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {/* Render Icon with cloneElement to add class/size if it's a valid element, or just render */}
                        {React.isValidElement(icon) ?
                            React.cloneElement(icon as React.ReactElement, { size: 64, className: "w-16 h-16" })
                            : icon
                        }
                    </div>
                </div>

                {/* Text Content */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{title}</h3>
                    <p className="text-xs text-neutral-400 font-medium leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Bottom Highlight Line */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
            </div>
        </div>
    );
};

export default GlowingCard;
