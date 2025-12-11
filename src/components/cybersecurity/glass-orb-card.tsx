import React from 'react';

interface GlassOrbCardProps {
    title: string;
    description: string;
    className?: string;
}

const GlassOrbCard: React.FC<GlassOrbCardProps> = ({ title, description, className }) => {
    return (
        <div className={`relative group w-full h-full min-h-[300px] overflow-hidden rounded-3xl ${className}`}>

            {/* 1. Base Gradient Background (The "Purple" liquid feel) */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-indigo-900/40 to-purple-900/60 transition-all duration-500 group-hover:scale-105" />

            {/* 2. Frosted Glass Layer */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl" />

            {/* 3. The 3D Orb */}
            <div className="absolute top-12 left-8 w-24 h-24 rounded-full shadow-[0_20px_50px_rgba(140,50,255,0.4)] animate-float-slow transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2">
                {/* Initial Orb Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4bbfc] via-[#7c3aed] to-[#4c1d95]" />

                {/* Highlight/Sheen for 3D effect */}
                <div className="absolute top-2 left-4 w-10 h-6 bg-white/30 blur-md rounded-full transform -rotate-12" />
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-purple-900/50 blur-lg rounded-full" />
            </div>

            {/* 4. Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-8 mt-24">

                <div className="mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-200 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                    {description}
                </p>

                {/* Input-like field decoration at bottom similar to reference image */}
                <div className="mt-6 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></span>
                        <span className="font-medium tracking-wide uppercase">Explore</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default GlassOrbCard;
