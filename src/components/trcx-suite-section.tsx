'use client';

import { motion } from 'framer-motion';

interface SuiteCard {
    code: string;
    name: string;
    description: string;
}

interface TrcxSuiteSectionProps {
    activeProduct: 'TMS' | 'RMS' | 'CST' | 'WFX';
    title?: string;
    description?: string;
    badge?: string;
    badgeText?: string;
    footerText?: string;
    cards?: SuiteCard[];
}

const defaultSuiteCards: SuiteCard[] = [
    {
        code: 'T.M.S',
        name: 'Team Management System',
        description: 'Ticketing and work coordination across teams, projects and clients.'
    },
    {
        code: 'R.M.S',
        name: 'Resource Management System',
        description: 'People and resource allocation so the right work has the right capacity.'
    },
    {
        code: 'C.S.T',
        name: 'Customer Support Tool',
        description: 'Customer-facing service requests structured into clear, trackable flows.'
    },
    {
        code: 'W.F.X',
        name: 'Workflow Experience',
        description: 'Streamlined employee journeys and automated internal processes.'
    }
];

export function TrcxSuiteSection({
    activeProduct,
    title,
    description,
    badge,
    badgeText,
    footerText,
    cards = defaultSuiteCards
}: TrcxSuiteSectionProps) {

    const getContent = () => {
        if (title && description) {
            return { headline: title, subtext: description };
        }

        switch (activeProduct) {
            case 'TMS':
                return {
                    headline: 'T.M.S as the execution engine of TRCX.',
                    subtext: 'Within the TRCX Suite, T.M.S works alongside R.M.S, C.S.T and W.F.X to give you a single operational backbone.'
                };
            case 'RMS':
                return {
                    headline: 'R.M.S as the planning engine of TRCX.',
                    subtext: 'Optimize capacity and utilization while T.M.S and C.S.T handle the day-to-day execution.'
                };
            case 'CST':
                return {
                    headline: 'C.S.T as the service engine of TRCX.',
                    subtext: 'Seamlessly convert customer requests into T.M.S tickets and R.M.S resource requirements.'
                };
            case 'WFX':
                return {
                    headline: 'W.F.X as the experience engine of TRCX.',
                    subtext: 'Connect employee workflows and automations across the entire TRCX ecosystem.'
                };
            default:
                return {
                    headline: 'The TRCX Suite.',
                    subtext: 'A unified single operational backbone for your organization.'
                };
        }
    };

    const content = getContent();

    return (
        <section className="py-20 md:py-32 bg-slate-900/20 -mx-4 px-4 sm:-mx-8 sm:px-8 md:rounded-3xl border-y md:border border-white/5">
            <div className="max-w-4xl mb-16">
                <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 mb-8">
                    <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                    {badgeText || 'Part of the TRCX Suite'}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {content.headline}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                    {content.subtext}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((item, index) => {
                    const isActive = item.code.replace(/\./g, '') === activeProduct;

                    return (
                        <div
                            key={index}
                            className={`relative group p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col overflow-hidden ${isActive
                                ? 'bg-slate-900/80 border-purple-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] scale-[1.02] z-10'
                                : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60 hover:scale-[1.01]'
                                }`}
                        >
                            {/* Active Gradient Overlay */}
                            {isActive && (
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-100" />
                            )}

                            {/* Hover Gradient for inactive */}
                            {!isActive && (
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            )}

                            <div className="relative z-10">
                                <span className={`text-xs font-bold tracking-widest uppercase mb-4 block ${isActive ? 'text-purple-400' : 'text-slate-500 group-hover:text-slate-400 transition-colors'
                                    }`}>
                                    {item.code}
                                </span>
                                <h3 className={`text-xl font-bold mb-4 leading-tight ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white transition-colors'
                                    }`}>
                                    {item.name}
                                </h3>
                                <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-400 transition-colors'
                                    }`}>
                                    {item.description}
                                </p>
                            </div>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <div className="absolute top-4 right-4 animate-pulse">
                                    <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_2px_rgba(168,85,247,0.8)]"></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="mt-12 text-slate-500 text-lg">
                {footerText || 'Together, TRCX gives you a unified operational command center.'}
            </p>
        </section>
    );
}
