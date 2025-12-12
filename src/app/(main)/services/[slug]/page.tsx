'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/services';
import { CheckCircle, ArrowRight, Server, Code, Shield, BrainCircuit, BarChart, ShoppingCart, MessageSquare, Bot, AlertTriangle, Zap, Layers, Target, Users, Check, Laptop, Globe, Lock, TrendingUp, Cloud, Scale, GraduationCap, RefreshCw, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TracingBeam } from '@/components/ui/tracing-beam';
import { CybersecurityPillars } from '@/components/cybersecurity-pillars';
import DecryptedText from '@/components/ui/decrypted-text';
import { DigitalPyramid } from '@/components/cybersecurity/digital-pyramid';
import ArcCarousel from '@/components/ui/arc-carousel';
import GlowingCard from '@/components/cybersecurity/glowing-card';
import { CircularServiceSelector } from '@/components/circular-service-selector';
import { PyramidOutcomes } from '@/components/ui/pyramid-outcomes';
import React, { MouseEvent, useCallback } from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
    Server: <Server />,
    Code: <Code />,
    Shield: <Shield />,
    BrainCircuit: <BrainCircuit />,
    BarChart: <BarChart />,
    ShoppingCart: <ShoppingCart />,
    Bot: <Bot />,
};

// --- Local Components for Specific Effects ---

// Spotlight Card
function SpotlightCard({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.1)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-slate-800 bg-slate-900/50 overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}

// 3D Pin/Tilt Card (Simplified for performance)
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            whileHover={{ y: -5, rotateX: 2, rotateY: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`perspective-1000 ${className}`}
        >
            {children}
        </motion.div>
    );
}


export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug;
    const service = services.find((s) => s.slug === slug);
    const [activeCard, setActiveCard] = React.useState(1); // 0=Reality, 1=WhoWeHelp, 2=OurValue

    if (!service) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
                    <Button asChild className="mt-8">
                        <Link href="/services">Back to Services</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const isNewLayout = !!service.heroAttributes;
    const isAIService = slug === 'ai-intelligent-automation';

    // Theme Configuration
    const SERVICE_THEMES: Record<string, any> = {
        'cloud-modernization-devops': {
            color: 'purple',
            orb1: 'bg-[#a855f7]/50', orb2: 'bg-[#ff7b29]/50', orb3: 'bg-[#6366f1]/40',
            titleGradient: 'from-white via-white to-purple-200',
            buttonGradient: 'from-purple-600 to-indigo-600',
            buttonShadow: 'shadow-[0_0_20px_rgba(124,58,237,0.5)]',
            kicker: 'text-purple-400',
            tagBorder: 'border-purple-500/30',
            tagText: 'text-purple-300',
            tagDot: 'bg-purple-500',
            tagShadow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)]',
        },
        'digital-engineering-application-development': {
            color: 'purple',
            orb1: 'bg-[#a855f7]/50', orb2: 'bg-[#7c3aed]/50', orb3: 'bg-[#d946ef]/40',
            titleGradient: 'from-white via-white to-purple-200',
            buttonGradient: 'from-purple-600 to-violet-600',
            buttonShadow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]',
            kicker: 'text-purple-400',
            tagBorder: 'border-purple-500/30',
            tagText: 'text-purple-300',
            tagDot: 'bg-purple-500',
            tagShadow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)]',
        },
        'data-analytics': {
            color: 'emerald',
            orb1: 'bg-[#10b981]/50', orb2: 'bg-[#14b8a6]/50', orb3: 'bg-[#0ea5e9]/40',
            titleGradient: 'from-white via-white to-emerald-200',
            buttonGradient: 'from-emerald-600 to-teal-600',
            buttonShadow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]',
            kicker: 'text-emerald-400',
            tagBorder: 'border-emerald-500/30',
            tagText: 'text-emerald-300',
            tagDot: 'bg-emerald-500',
            tagShadow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]',
        },
        'ai-intelligent-automation': {
            color: 'pink',
            orb1: 'bg-[#ec4899]/50', orb2: 'bg-[#d946ef]/50', orb3: 'bg-[#e11d48]/40',
            titleGradient: 'from-white via-white to-pink-200',
            buttonGradient: 'from-pink-600 to-rose-600',
            buttonShadow: 'shadow-[0_0_20px_rgba(236,72,153,0.5)]',
            kicker: 'text-pink-400',
            tagBorder: 'border-pink-500/30',
            tagText: 'text-pink-300',
            tagDot: 'bg-pink-500',
            tagShadow: 'shadow-[0_0_15px_rgba(236,72,153,0.15)]',
        },
        'sap-consulting-enterprise-solutions': {
            color: 'orange',
            orb1: 'bg-[#f97316]/50', orb2: 'bg-[#f59e0b]/50', orb3: 'bg-[#ef4444]/40',
            titleGradient: 'from-white via-white to-orange-200',
            buttonGradient: 'from-orange-600 to-amber-600',
            buttonShadow: 'shadow-[0_0_20px_rgba(249,115,22,0.5)]',
            kicker: 'text-orange-400',
            tagBorder: 'border-orange-500/30',
            tagText: 'text-orange-300',
            tagDot: 'bg-orange-500',
            tagShadow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)]',
        }
    };

    const currentTheme = SERVICE_THEMES[slug as string] || SERVICE_THEMES['cloud-modernization-devops'];

    return (
        <div className="flex flex-col bg-black text-white selection:bg-primary/30 relative min-h-screen">
            {/* Global Background Gradient for Cybersecurity Page */}
            {slug === 'cybersecurity-risk-management' && (
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#7226FF_0%,_#160078_40%,_#000000_80%)] opacity-20"></div>
                </div>
            )}



            {/* HEADER / HERO (Preserved) */}
            {/* HEADER / HERO */}
            {/* HEADER / HERO - Unified for all except Cyber */}
            {slug !== 'cybersecurity-risk-management' ? (
                <header className={`relative flex flex-col pt-32 pb-20 overflow-hidden bg-transparent ${isAIService ? 'min-h-[75vh]' : 'min-h-screen'}`}>
                    {/* Hero Section Gradient Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none saturate-200 contrast-125">
                        {/* Orb 1 */}
                        <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[70vh] ${currentTheme.orb1} blur-[130px] rounded-full mix-blend-screen opacity-80`} />
                        {/* Orb 2 */}
                        <div className={`absolute top-[-10%] right-[-10%] w-[60%] h-[70vh] ${currentTheme.orb2} blur-[130px] rounded-full mix-blend-screen opacity-80`} />
                        {/* Orb 3 */}
                        <div className={`absolute bottom-[-20%] left-[10%] w-[80%] h-[60vh] ${currentTheme.orb3} blur-[150px] rounded-full mix-blend-screen opacity-80`} />
                    </div>

                    {/* Grid Pattern */}

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

                    <div className={`container relative z-10 mx-auto px-4 ${isAIService ? 'grid lg:grid-cols-2 gap-12 items-center' : 'flex flex-col items-center'}`}>

                        {/* AI Hero Image (Left Column for AI Only) */}
                        {isAIService && (
                            <div className="relative w-full h-[600px] lg:h-[800px] flex justify-start items-end order-first -ml-20 lg:-ml-40 -mb-24 pb-32 lg:pb-48">
                                <div className="relative w-[700px] lg:w-[1000px] h-full">
                                    <Image
                                        src="/ai-hero.png"
                                        alt="AI & Intelligent Automation"
                                        fill
                                        className="object-contain object-bottom"
                                        priority
                                    />

                                    {/* Glow Effects */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-pink-500/20 blur-[120px] -z-10 rounded-full mix-blend-screen" />
                                    <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-purple-600/20 blur-[100px] -z-10 rounded-full mix-blend-screen" />
                                </div>
                            </div>
                        )}

                        {/* Title & Content Wrapper */}
                        <div className={`flex flex-col ${isAIService ? 'items-start text-left z-20' : 'items-center text-center max-w-5xl'}`}>
                            {/* Title - Centralized & Glowing */}
                            <h1 className={`${isAIService ? 'text-4xl md:text-6xl text-left' : 'text-center text-5xl md:text-7xl'} font-bold tracking-tight text-white mb-6 drop-shadow-2xl`}>
                                <span className={`bg-clip-text text-transparent bg-gradient-to-br ${currentTheme.titleGradient}`}>
                                    {service.heroAttributes?.title}
                                </span>
                            </h1>

                            <div className={`flex flex-wrap gap-2 ${isAIService ? 'justify-start' : 'justify-center'} mb-8`}>
                                {service.heroAttributes?.tags?.slice(0, 3).map((tag, i) => (
                                    <div key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border ${currentTheme.tagBorder} ${currentTheme.tagText} text-sm font-medium backdrop-blur-md ${currentTheme.tagShadow}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${currentTheme.tagDot} animate-pulse box-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}></span>
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* Subtitle */}
                            <p className={`${isAIService ? 'text-left text-lg' : 'text-center text-lg md:text-xl'} text-slate-400 max-w-3xl leading-relaxed mb-10`}>
                                {service.heroAttributes?.subtitle}
                            </p>

                            {/* CTA Buttons */}
                            <div className={`flex flex-wrap gap-4 ${isAIService ? 'justify-start' : 'justify-center'} mb-24`}>
                                <Button size="lg" className={`rounded-full bg-gradient-to-r ${currentTheme.buttonGradient} hover:brightness-110 text-white ${currentTheme.buttonShadow} border-0`}>
                                    {service.heroAttributes?.cta.replace('→', '')} <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm">
                                    {service.heroAttributes?.ctaSecondary}
                                </Button>
                            </div>
                        </div>

                        {/* OVERLAPPING CARDS SECTION - Dynamic & Data-Driven */}
                        <div className={`w-full max-w-6xl mx-auto relative h-[550px] flex justify-center items-center perspective-1000 mt-16 ${isAIService ? 'col-span-2' : ''}`}>

                            {/* Card 1: The Reality (Index 0) */}
                            {service.realitySection && (
                                <div
                                    onClick={() => setActiveCard(0)}
                                    className={`absolute w-[450px] md:w-[520px] aspect-[4/4] transition-all duration-500 ease-out cursor-pointer group/card1
                                        ${activeCard === 0 ? 'z-50 scale-100 opacity-100' : 'z-10 scale-90 opacity-60 hover:opacity-100'}`}
                                    style={{
                                        transform: activeCard === 0 ? 'translateX(0%) rotateY(0deg)' :
                                            activeCard === 1 ? 'translateX(-32%) rotateY(4deg)' :
                                                'translateX(32%) rotateY(-4deg)'
                                    }}>

                                    <div className="h-full w-full bg-[#050505] rounded-[24px] p-1 flex flex-col relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)]">
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent opacity-50 pointer-events-none" />

                                        <div className="h-full w-full bg-[#0A0A0A]/90 backdrop-blur-xl rounded-[22px] p-6 flex flex-col transition-colors duration-300 group-hover/card1:bg-[#111111]">
                                            {/* Header */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <h3 className="text-slate-200 font-medium text-xl">Critical Analysis</h3>
                                                    <p className="text-slate-500 text-sm mt-1">Current Landscape</p>
                                                </div>
                                                <div className="h-10 w-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                                                </div>
                                            </div>

                                            {/* Recessed Inner Box */}
                                            <div className="flex-1 bg-[#050505] rounded-xl p-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] border border-white/5 relative">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/20 flex items-center justify-center">
                                                        <Activity className="w-7 h-7 text-orange-400" />
                                                    </div>
                                                    <div>
                                                        <div className="text-slate-200 text-lg font-semibold">The Reality</div>
                                                        <div className="text-sm text-orange-400">Issues Identified</div>
                                                    </div>
                                                </div>

                                                <p className="text-lg text-slate-300 mb-5 italic leading-relaxed">"The need for modernisation"</p>

                                                <p className="text-base text-slate-400 mb-6 leading-relaxed">
                                                    Legacy delivery models can't keep up with digital demand.
                                                </p>

                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                        <div className="text-sm text-slate-400 leading-snug">
                                                            New features take weeks or months to reach production.
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                        <div className="text-sm text-slate-400 leading-snug">
                                                            Environments are brittle, hard to replicate and inconsistent.
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                        <div className="text-sm text-slate-400 leading-snug">
                                                            Cloud costs rise without clear visibility or accountability.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Card 2: Who We Help (Index 1) */}
                            {service.heroAttributes?.whoWeHelp && (
                                <div
                                    onClick={() => setActiveCard(1)}
                                    className={`absolute w-[450px] md:w-[520px] aspect-[4/4] transition-all duration-500 ease-out cursor-pointer group/card2
                                        ${activeCard === 1 ? 'z-[60] scale-100 opacity-100' : 'z-20 scale-90 opacity-60 hover:opacity-100'}`}
                                    style={{
                                        transform: activeCard === 1 ? 'translateY(0%) scale(1.05)' :
                                            activeCard === 2 ? 'translateX(-32%) rotateY(4deg) translateY(5%)' :
                                                'translateX(32%) rotateY(-4deg) translateY(5%)'
                                    }}>

                                    <div className="h-full w-full bg-[#08080A] rounded-[28px] p-1 flex flex-col relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_0_1px_rgba(168,85,247,0.3)]">
                                        <div className="absolute top-0 inset-x-0 h-[200px] bg-gradient-to-b from-purple-600/10 via-purple-900/5 to-transparent blur-xl pointer-events-none" />

                                        <div className="h-full w-full bg-[#0C0C10]/95 backdrop-blur-3xl rounded-[26px] p-8 flex flex-col relative transition-colors duration-300 group-hover/card2:bg-[#151520]">
                                            {/* Top Bar */}
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-5">
                                                    <div className="relative">
                                                        <div className="h-12 w-12 rounded-xl bg-[#1A1A20] border border-white/10 flex items-center justify-center">
                                                            <Users className="w-7 h-7 text-purple-400" />
                                                        </div>
                                                        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-[#0C0C10]" />
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-semibold text-xl">Target Audience</div>
                                                        <div className="text-slate-500 text-sm">Active Transformations</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-2 rounded-full bg-[#1A1A20] border border-white/5 text-purple-300 text-sm font-bold shadow-inner">
                                                    Live
                                                </div>
                                            </div>

                                            {/* Inner "Data Logging" Box */}
                                            <div className="bg-[#050505] rounded-xl p-7 border border-white/5 shadow-[inset_0_2px_20px_rgba(0,0,0,0.8)] mb-8 relative overflow-hidden">
                                                <div className="flex justify-between text-sm text-slate-500 mb-6 uppercase tracking-wider font-bold">
                                                    <span>Who We Help</span>
                                                    <span>Priority High</span>
                                                </div>

                                                <div className="space-y-5">
                                                    {service.heroAttributes.whoWeHelp.slice(0, 3).map((item, i) => (
                                                        <div key={i} className="flex items-center gap-5">
                                                            <div className="h-8 w-8 rounded bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-sm text-purple-400 font-bold">
                                                                {i + 1}
                                                            </div>
                                                            <div className="text-base text-slate-300 font-medium">{item}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Connecting Line */}
                                                <div className="absolute bottom-0 left-[2.25rem] w-[1px] h-6 bg-gradient-to-b from-purple-500/50 to-transparent" />
                                            </div>

                                            {/* Bottom "What We Stand For" Section */}
                                            <div className="mt-auto bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-500/10 backdrop-blur-md">
                                                <div className="text-sm text-purple-300/70 mb-2 uppercase tracking-wider font-bold">
                                                    What We Stand For
                                                </div>
                                                <p className="text-base text-slate-300 leading-relaxed">
                                                    Cloud is not the destination — it's the engine that powers agility and innovation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Card 3: Our Value (Index 2) */}
                            {service.valueProposition && (
                                <div
                                    onClick={() => setActiveCard(2)}
                                    className={`absolute w-[450px] md:w-[520px] aspect-[4/4] transition-all duration-500 ease-out cursor-pointer group/card3
                                        ${activeCard === 2 ? 'z-50 scale-100 opacity-100' : 'z-10 scale-90 opacity-60 hover:opacity-100'}`}
                                    style={{
                                        transform: activeCard === 2 ? 'translateX(0%) rotateY(0deg)' :
                                            activeCard === 0 ? 'translateX(-32%) rotateY(4deg)' :
                                                'translateX(32%) rotateY(-4deg)'
                                    }}>

                                    <div className="h-full w-full bg-[#050505] rounded-[24px] p-1 flex flex-col relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)]">
                                        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-50 pointer-events-none" />

                                        <div className="h-full w-full bg-[#0A0A0A]/90 backdrop-blur-xl rounded-[22px] p-6 flex flex-col transition-colors duration-300 group-hover/card3:bg-[#111111]">
                                            {/* Header */}
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-slate-200 font-medium text-xl">Value Delivered</h3>
                                                <div className="h-8 px-4 rounded-md bg-[#1A1A1A] border border-white/10 flex items-center text-sm text-cyan-400 font-mono">
                                                    + ROI
                                                </div>
                                            </div>

                                            {/* Data Display */}
                                            <div className="flex-1 flex flex-col gap-5">
                                                <div className="bg-[#050505] rounded-xl p-6 border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                                                    <div className="text-sm text-slate-500 mb-4 uppercase tracking-wider">Our Proposition</div>
                                                    <p className="text-xl font-semibold text-white leading-tight mb-6">"Our value proposition"</p>

                                                    <div className="flex flex-wrap gap-3 text-sm mb-6">
                                                        <span className="px-4 py-2 bg-cyan-900/20 text-cyan-300 rounded-md border border-cyan-500/20 font-medium">
                                                            Clear
                                                        </span>
                                                        <span className="px-4 py-2 bg-cyan-900/20 text-cyan-300 rounded-md border border-cyan-500/20 font-medium">
                                                            Automated
                                                        </span>
                                                        <span className="px-4 py-2 bg-cyan-900/20 text-cyan-300 rounded-md border border-cyan-500/20 font-medium">
                                                            Cloud
                                                        </span>
                                                    </div>

                                                    <p className="text-base text-slate-400 leading-relaxed">
                                                        We turn your cloud and delivery stack into an innovation engine. We combine cloud strategy, DevOps, security and FinOps to create a platform where teams can build, ship and scale digital products confidently.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>
            ) : slug === 'cybersecurity-risk-management' ? (
                <header className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-20 pb-0">
                    {/* Background Effects */}
                    {/* Background Effects */}
                    <div className="absolute inset-0 z-0">
                        {/* Deep Vivid Purple Base (Gradient 4) */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#7226FF_0%,_#160078_80%,_#010030_100%)]"></div>

                        {/* Top-Right Pink Glow (Gradient 2) */}
                        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#F042FF]/30 blur-[120px] rounded-full mix-blend-screen opacity-70"></div>

                        {/* Bottom-Left Purple Glow */}
                        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#7226FF]/40 blur-[120px] rounded-full mix-blend-screen opacity-60"></div>

                        {/* Grid decorative */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                        {/* Falling White Lines with Glowing Tips */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {/* Line 1 */}
                            <div className="absolute top-[-10%] left-[20%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-purple-200 to-transparent opacity-60">
                                <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] rounded-full bg-white shadow-[0_0_10px_white]"></div>
                            </div>
                            {/* Line 2 (Center - Longest) */}
                            <div className="absolute top-[-20%] left-[50%] w-[1px] h-[80%] bg-gradient-to-b from-transparent via-white to-transparent opacity-80">
                                <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] rounded-full bg-white shadow-[0_0_15px_white]"></div>
                            </div>
                            {/* Line 3 */}
                            <div className="absolute top-[-5%] left-[80%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-purple-200 to-transparent opacity-60">
                                <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] rounded-full bg-white shadow-[0_0_10px_white]"></div>
                            </div>
                            {/* Line 4 */}
                            <div className="absolute top-[10%] left-[35%] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-purple-100 to-transparent opacity-40">
                                <div className="absolute bottom-0 left-[-2px] w-[4px] h-[4px] rounded-full bg-purple-200"></div>
                            </div>
                            {/* Line 5 */}
                            <div className="absolute top-[-15%] left-[65%] w-[1px] h-[45%] bg-gradient-to-b from-transparent via-purple-100 to-transparent opacity-50">
                                <div className="absolute bottom-0 left-[-2px] w-[4px] h-[4px] rounded-full bg-purple-200"></div>
                            </div>
                        </div>

                        {/* Floating Cyber Nodes */}
                        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                            {/* Node 1: Top Left */}
                            <div className="absolute top-[18%] left-[5%] md:left-[15%] flex items-center gap-3 animate-float">
                                <Shield className="w-5 h-5 text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-purple-100 font-mono uppercase tracking-wider drop-shadow-md">Zero Trust</span>
                                    <span className="text-[9px] text-green-400 drop-shadow-md">Policy Active</span>
                                </div>
                            </div>

                            {/* Node 2: Top Right */}
                            <div className="absolute top-[22%] right-[5%] md:right-[12%] flex items-center gap-3">
                                <Zap className="w-5 h-5 text-pink-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-pink-100 font-mono uppercase tracking-wider drop-shadow-md">Threat Intel</span>
                                    <span className="text-[9px] text-pink-400 animate-pulse drop-shadow-md">Monitoring...</span>
                                </div>
                            </div>

                            {/* Middle Left */}
                            <div className="absolute top-[50%] left-[2%] md:left-[8%] hidden md:flex items-center opacity-80">
                                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-slate-400/50"></div>
                                <div className="flex items-center gap-3 ml-2">
                                    <Lock className="w-4 h-4 text-slate-300 drop-shadow-[0_0_10px_rgba(148,163,184,0.5)]" />
                                    <span className="text-[10px] text-slate-100 font-mono drop-shadow-md">End-to-End Encrypted</span>
                                </div>
                            </div>

                            {/* Bottom Right */}
                            <div className="absolute bottom-[25%] right-[5%] md:right-[15%] flex items-center gap-3">
                                <Server className="w-5 h-5 text-blue-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-blue-100 font-mono uppercase tracking-wider drop-shadow-md">System Status</span>
                                    <span className="text-[9px] text-green-400 drop-shadow-md">99.99% Uptime</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container relative z-10 grid place-items-center text-center max-w-5xl mx-auto px-4 mt-10">
                        {/* Orbiting Elements Decoration (Simplified representation of the 'secure chains' visual) */}
                        <div className="absolute inset-0 pointer-events-none opacity-30">
                            {/* Add SVGs or circles here if needed to match exact image, for now using pure CSS glow */}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-2xl max-w-4xl mx-auto min-h-[1.2em]">
                                <span className="mr-2">Secure Today.</span>
                                <DecryptedText
                                    text="Strengthen Tomorrow. Scale Confidently."
                                    speed={80}
                                    maxIterations={20}
                                    sequential={true}
                                    animateOn="view"
                                    revealDirection="start"
                                    className="revealed"
                                    parentClassName="all-letters inline"
                                    encryptedClassName="encrypted"
                                />
                            </h1>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {service.heroAttributes?.tags.slice(0, 3).map((tag, i) => (
                                    <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse box-shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <p className="text-lg text-slate-300 md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
                                {service.heroAttributes?.subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center items-center">
                                <Link href="/contact" className="group">
                                    <button className="flex justify-center gap-2 items-center shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#7226FF] text-black hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full h-14 transition-colors cursor-pointer">
                                        {service.heroAttributes?.cta.replace('→', '')}
                                        <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-transparent text-current ease-linear duration-300 rounded-full border border-current group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-black group-hover:fill-white transition-colors" />
                                        </svg>
                                    </button>
                                </Link>
                                <Link href="#engagement-approach">
                                    <Button size="lg" variant="ghost" className="h-14 px-8 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:text-white backdrop-blur-sm transition-all cursor-pointer">
                                        {service.heroAttributes?.ctaSecondary}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </header>


            ) : isNewLayout ? (
                <header className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
                    {/* ... Existing isNewLayout Header Code ... */}
                    <div className="absolute inset-0 bg-black z-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80"></div>
                        {service.image && (
                            <Image src={service.image.imageUrl} alt={service.title} fill className="object-cover opacity-10 mix-blend-overlay" />
                        )}
                    </div>

                    <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                {service.title}
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                                <span className="text-white block mb-2">{service.heroAttributes?.title.split('.')[0]}.</span>
                                <span className="text-slate-400">{service.heroAttributes?.title.split('.').slice(1).join('.')}</span>
                            </h1>

                            <p className="text-lg text-slate-300 md:text-xl leading-relaxed max-w-xl">
                                {service.heroAttributes?.subtitle}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.heroAttributes?.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                                    {service.heroAttributes?.cta.replace('â†’', '')} <ArrowRight className="w-4 h-4" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent">
                                    {service.heroAttributes?.ctaSecondary}
                                </Button>
                            </div>

                            {service.heroAttributes?.note && (
                                <p className="text-sm text-slate-400 border-l-2 border-primary/50 pl-4 py-1 italic">
                                    {service.heroAttributes.note}
                                </p>
                            )}
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6">Who We Help</h3>
                            <p className="text-sm text-slate-400 mb-4">Organisations that are:</p>
                            <ul className="space-y-3 mb-8">
                                {service.heroAttributes?.whoWeHelp.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {service.heroAttributes?.metrics && (
                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                                    <div>
                                        <div className="text-sm text-slate-400 mb-2">{(service.heroAttributes.metrics as any).label || 'Risk exposure'}</div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                                            <div className="h-full bg-red-500" style={{ width: `${service.heroAttributes.metrics.riskExposure}%` }}></div>
                                        </div>
                                        <p className="text-[10px] text-slate-500 leading-tight">{(service.heroAttributes.metrics as any).beforeDescription || 'Typical baseline across fragmented environments.'}</p>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400 mb-2">After engagement</div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                                            <div className="h-full bg-green-500" style={{ width: `${service.heroAttributes.metrics.afterEngagement}%` }}></div>
                                        </div>
                                        <p className="text-[10px] text-slate-500 leading-tight">{(service.heroAttributes.metrics as any).afterDescription || 'Significant reduction in likelihood and impact of incidents.'}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </header>
            ) : (
                <header className="relative h-[70vh] flex items-center justify-center text-center">
                    {service.image && <Image src={service.image.imageUrl} alt={service.title} fill className="object-cover opacity-20" />}
                    <div className="relative container z-10">
                        <h1 className="text-6xl font-bold text-white mb-4">{service.title}</h1>
                        <p className="mx-auto max-w-2xl text-slate-300 text-xl">{service.fullDescription}</p>
                    </div>
                </header>
            )}

            <main className="py-20 md:py-24">
                {/* Unified Layout for All Non-Cyber Services */}
                {slug !== 'cybersecurity-risk-management' ? (
                    <div className="space-y-32">
                        {/* 1. PILLARS / SERVICES */}
                        {service.servicePillars && (
                            <section className="w-full bg-white text-slate-900">
                                <CircularServiceSelector
                                    pillars={service.servicePillars.pillars}
                                    title={service.servicePillars.title}
                                    subtitle={service.servicePillars.subtitle}
                                    theme="light"
                                    accentColor={currentTheme.color}
                                />
                            </section>
                        )}

                        {/* 2. USE CASES */}
                        {service.useCases && (
                            <section className="h-screen min-h-[800px] flex flex-col justify-center bg-transparent -mt-20">
                                <div className="container relative z-10 mb-8 md:mb-12">
                                    <span className={`${currentTheme.kicker} font-bold tracking-widest text-xs uppercase`}>Impact Areas</span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">{service.useCases.title}</h2>

                                    <p className="text-lg text-slate-400 max-w-3xl">{service.useCases.subtitle}</p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                                    {service.useCases.cases.map((useCase, i) => {
                                        const icons = [Shield, Zap, Lock, Globe, Server, Code];
                                        const Icon = icons[i % icons.length];

                                        const baseColors = ["purple", "pink", "blue", "emerald", "orange", "red"];
                                        const baseColor = baseColors[i % baseColors.length] as "purple" | "pink" | "blue" | "emerald" | "orange" | "red";

                                        const colorMap = {
                                            purple: { bg: "bg-purple-500", text: "text-purple-500", border: "group-hover:border-purple-500/50", shadow: "group-hover:shadow-purple-500/20", glow: "from-purple-500/20" },
                                            pink: { bg: "bg-pink-500", text: "text-pink-500", border: "group-hover:border-pink-500/50", shadow: "group-hover:shadow-pink-500/20", glow: "from-pink-500/20" },
                                            blue: { bg: "bg-blue-500", text: "text-blue-500", border: "group-hover:border-blue-500/50", shadow: "group-hover:shadow-blue-500/20", glow: "from-blue-500/20" },
                                            emerald: { bg: "bg-emerald-500", text: "text-emerald-500", border: "group-hover:border-emerald-500/50", shadow: "group-hover:shadow-emerald-500/20", glow: "from-emerald-500/20" },
                                            orange: { bg: "bg-orange-500", text: "text-orange-500", border: "group-hover:border-orange-500/50", shadow: "group-hover:shadow-orange-500/20", glow: "from-orange-500/20" },
                                            red: { bg: "bg-red-500", text: "text-red-500", border: "group-hover:border-red-500/50", shadow: "group-hover:shadow-red-500/20", glow: "from-red-500/20" },
                                        };
                                        const theme = colorMap[baseColor] || colorMap.purple;

                                        return (
                                            <div key={i} className={`group relative bg-[#0a0a0a] border border-white/10 p-8 h-[340px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:z-20 ${theme.border} hover:shadow-2xl ${theme.shadow}`}>

                                                {/* Hover Glow Gradient Background */}
                                                <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${theme.glow} to-transparent opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700 pointer-events-none rounded-full -mr-20 -mt-20`}></div>

                                                {/* Abstract Pattern - Dynamic Color & Increased Visibility */}
                                                <div className={`absolute -bottom-20 -right-20 w-80 h-80 opacity-20 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110 ${theme.text} ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}>
                                                    {i % 6 === 0 && (
                                                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                            <path d="M0 100 L100 0 M20 100 L100 20 M40 100 L100 40 M60 100 L100 60 M80 100 L100 80" strokeWidth="2" />
                                                        </svg>
                                                    )}
                                                    {i % 6 === 1 && (
                                                        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                                                            <circle cx="20" cy="80" r="4" /> <circle cx="40" cy="60" r="4" /> <circle cx="60" cy="40" r="4" /> <circle cx="80" cy="20" r="4" />
                                                            <circle cx="40" cy="80" r="4" /> <circle cx="60" cy="60" r="4" /> <circle cx="80" cy="40" r="4" />
                                                            <circle cx="60" cy="80" r="4" /> <circle cx="80" cy="60" r="4" />
                                                        </svg>
                                                    )}
                                                    {i % 6 === 2 && (
                                                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                            <circle cx="100" cy="100" r="20" strokeWidth="2" />
                                                            <circle cx="100" cy="100" r="40" strokeWidth="2" />
                                                            <circle cx="100" cy="100" r="60" strokeWidth="2" />
                                                            <circle cx="100" cy="100" r="80" strokeWidth="2" />
                                                        </svg>
                                                    )}
                                                    {i % 6 === 3 && (
                                                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                            <path d="M-20 100 L50 30 L120 100" strokeWidth="2" />
                                                            <path d="M-20 80 L50 10 L120 80" strokeWidth="2" />
                                                            <path d="M-20 60 L50 -10 L120 60" strokeWidth="2" />
                                                            <path d="M-20 120 L50 50 L120 120" strokeWidth="2" />
                                                        </svg>
                                                    )}
                                                    {i % 6 === 4 && (
                                                        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                                                            <rect x="10" y="40" width="8" height="8" /> <rect x="30" y="80" width="12" height="12" />
                                                            <rect x="60" y="20" width="6" height="6" /> <rect x="80" y="60" width="10" height="10" />
                                                            <rect x="50" y="50" width="8" height="8" /> <rect x="90" y="10" width="14" height="14" />
                                                            <rect x="20" y="10" width="6" height="6" />
                                                        </svg>
                                                    )}
                                                    {i % 6 === 5 && (
                                                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                            <path d="M0 50 Q 25 20 50 50 T 100 50" strokeWidth="2" />
                                                            <path d="M0 30 Q 25 0 50 30 T 100 30" strokeWidth="2" />
                                                            <path d="M0 70 Q 25 40 50 70 T 100 70" strokeWidth="2" />
                                                            <path d="M0 90 Q 25 60 50 90 T 100 90" strokeWidth="2" />
                                                            <path d="M0 10 Q 25 -20 50 10 T 100 10" strokeWidth="2" />
                                                        </svg>
                                                    )}
                                                </div>

                                                <div className="flex justify-between items-start z-10 relative">
                                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme.bg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                        <Icon className="text-white w-7 h-7" />
                                                    </div>
                                                    <span className={`text-[10px] font-mono ${theme.text} bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/10 transition-colors uppercase tracking-widest`}>{useCase.tag}</span>
                                                </div>

                                                <div className="z-10 mt-auto relative">
                                                    <div className={`text-[10px] ${theme.text} font-bold uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                                                        Impact Area
                                                    </div>
                                                    <h3 className={`text-xl font-bold text-white mb-3 leading-tight group-hover:${theme.text} transition-colors`}>{useCase.title}</h3>
                                                    <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed group-hover:text-slate-200 transition-colors">{useCase.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}


                        {/* 3. BUSINESS OUTCOMES - PYRAMID VISUALIZATION */}
                        {service.businessOutcomes && (
                            <DigitalPyramid
                                title={service.businessOutcomes.title}
                                subtitle={service.businessOutcomes.subtitle}
                                // DigitalPyramid expects [Base, Mid, Top] order for indexing (0=Base, 1=Mid, 2=Top)
                                // Our data is [Top(Feature), Mid(Uptime), Base(Cost)]
                                outcomes={[
                                    service.businessOutcomes.outcomes[2], // Cost -> Base
                                    service.businessOutcomes.outcomes[1], // Uptime -> Strategy
                                    service.businessOutcomes.outcomes[0]  // Feature -> Purpose
                                ]}
                            />
                        )}

                        {/* 4. ENGAGEMENT STEPS */}
                        {service.engagementApproach && (
                            <section className="relative py-20 w-full overflow-hidden bg-black">
                                <div className="container relative mb-8 text-center max-w-3xl mx-auto">
                                    <span className={currentTheme.kicker + " font-bold tracking-widest text-xs uppercase"}>How We Work</span>
                                    <h2 className="text-3xl font-bold text-white mt-2 mb-4">{service.engagementApproach.title}</h2>
                                    <p className="text-lg text-slate-400">{service.engagementApproach.subtitle}</p>
                                </div>

                                <div className="container max-w-5xl mx-auto py-4">
                                    {service.engagementApproach.steps.map((step, i) => {
                                        const isEven = i % 2 === 0;
                                        const colors = [
                                            { from: '#FFA500', to: '#FFD700', shadow: 'rgba(255, 165, 0, 0.4)' }, // Orange-Yellow
                                            { from: '#FF6B6B', to: '#FF8E53', shadow: 'rgba(255, 107, 107, 0.4)' }, // Red-Orange
                                            { from: '#FF1744', to: '#FF4081', shadow: 'rgba(255, 23, 68, 0.4)' }, // Pink-Red
                                        ];
                                        const color = colors[i % colors.length];

                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                className={`flex items-center gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-6 last:mb-0`}
                                                style={{ zIndex: 1 }}
                                            >
                                                {/* Icon Circle with Line from Edge */}
                                                <div className="relative flex items-center flex-shrink-0">
                                                    {/* Horizontal Line from Edge */}
                                                    {isEven ? (
                                                        // For Even items (Left side): Line comes from Left Edge
                                                        <div
                                                            className="absolute top-1/2 -translate-y-1/2 h-0.5 right-full mr-4"
                                                            style={{
                                                                width: '100vw', // Extend far off-screen
                                                                background: `linear-gradient(to right, transparent, ${color.from})`
                                                            }}
                                                        />
                                                    ) : (
                                                        // For Odd items (Right side): Line comes from Right Edge
                                                        <div
                                                            className="absolute top-1/2 -translate-y-1/2 h-0.5 left-full ml-4"
                                                            style={{
                                                                width: '100vw', // Extend far off-screen
                                                                background: `linear-gradient(to left, transparent, ${color.from})`
                                                            }}
                                                        />
                                                    )}

                                                    {/* Outer Glow Circle - Smaller */}
                                                    <div
                                                        className="absolute inset-0 rounded-full blur-lg"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                                                            opacity: 0.3
                                                        }}
                                                    />

                                                    {/* Colored Circle - Smaller (w-20 from w-24) */}
                                                    <div
                                                        className="relative w-20 h-20 rounded-full flex items-center justify-center"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                                                            boxShadow: `0 4px 20px ${color.shadow}`
                                                        }}
                                                    >
                                                        {/* Inner White Circle */}
                                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                                                            {/* Icon */}
                                                            <div className="text-2xl">
                                                                {i === 0 && '💡'}
                                                                {i === 1 && '⚙️'}
                                                                {i === 2 && '⏱️'}
                                                                {i === 3 && '📈'}
                                                                {i > 3 && '✓'}
                                                            </div>
                                                        </div>

                                                        {/* Dashed Circle Border */}
                                                        <svg className="absolute -inset-2 w-24 h-24" viewBox="0 0 128 128">
                                                            <circle
                                                                cx="64"
                                                                cy="64"
                                                                r="60"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1"
                                                                strokeDasharray="4 4"
                                                                className="text-slate-600"
                                                            />
                                                        </svg>
                                                        <div
                                                            className={`absolute bottom-1/2 mb-4 text-7xl font-bold leading-none tracking-tighter z-20 ${isEven ? 'right-full mr-8' : 'left-full ml-8'}`}
                                                            style={{
                                                                color: color.from,
                                                                textShadow: `0 0 30px ${color.shadow}`,
                                                                opacity: 0.8
                                                            }}
                                                        >
                                                            {step.step}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className={`flex-1 flex flex-col justify-center relative z-10 ${isEven ? 'text-left items-start' : 'text-right items-end'}`}>
                                                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                                    <p className="text-slate-400 leading-relaxed max-w-md">{step.description}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}
                    </div>
                ) : slug === 'cybersecurity-risk-management' && (
                    <section className="container relative z-20 mb-32 mt-10">
                        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 perspective-1000">

                            {/* 1. THE REALITY */}
                            {service.realitySection && (
                                <div className="w-full md:w-1/3 relative z-0 hover:z-50 transition-all duration-500 ease-out hover:scale-105 group/card">
                                    <div className="h-full bg-slate-950/40 backdrop-blur-xl p-8 flex flex-col relative overflow-hidden rounded-2xl">
                                        {/* Glow Layer */}
                                        <div className="absolute inset-0 rounded-2xl bg-red-500/5 blur-xl group-hover/card:bg-red-500/10 transition-all"></div>

                                        {/* CAUTION TAPE STRIPE */}
                                        <div className="absolute top-[8%] -left-[15%] w-[120%] h-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 transform -rotate-12 z-[5] opacity-95 group-hover/card:opacity-100 transition-opacity overflow-hidden shadow-lg">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="flex gap-12">
                                                    <span className="text-black font-black text-base tracking-[0.3em] whitespace-nowrap drop-shadow-sm">⚠ CAUTION ⚠</span>
                                                    <span className="text-black font-black text-base tracking-[0.3em] whitespace-nowrap drop-shadow-sm">⚠ CAUTION ⚠</span>
                                                    <span className="text-black font-black text-base tracking-[0.3em] whitespace-nowrap drop-shadow-sm">⚠ CAUTION ⚠</span>
                                                    <span className="text-black font-black text-base tracking-[0.3em] whitespace-nowrap drop-shadow-sm">⚠ CAUTION ⚠</span>
                                                </div>
                                            </div>
                                            {/* Diagonal stripes pattern */}
                                            <div className="absolute inset-0 opacity-15" style={{
                                                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.4) 10px, rgba(0,0,0,0.4) 20px)'
                                            }}></div>
                                        </div>

                                        {/* TECH BORDER: RED - Thicker Main Border */}
                                        <div className="absolute inset-0 pointer-events-none rounded-2xl border-[3px] border-red-500/30 group-hover/card:border-red-500/60 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)] group-hover/card:shadow-[0_0_30px_rgba(239,68,68,0.5)]"></div>

                                        {/* Corner Accents - Top Right */}
                                        <svg className="absolute -top-[2px] -right-[2px] w-28 h-28 text-red-500 opacity-80 group-hover/card:opacity-100 transition-opacity" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 12px rgba(239,68,68,0.8))' }}>
                                            <path d="M0 5 H 95 V 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                            <path d="M20 5 H 95 V 80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                                            <path d="M10 5 H 95 V 90" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                                            {/* Geometric detail */}
                                            <rect x="75" y="15" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <rect x="75" y="35" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>

                                        {/* Corner Accents - Bottom Left */}
                                        <svg className="absolute -bottom-[2px] -left-[2px] w-28 h-28 text-red-500 opacity-80 group-hover/card:opacity-100 transition-opacity" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 12px rgba(239,68,68,0.8))' }}>
                                            <path d="M100 95 H 5 V 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                            <path d="M80 95 H 5 V 20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                                            <path d="M90 95 H 5 V 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                                            {/* Geometric detail */}
                                            <rect x="13" y="73" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <rect x="13" y="53" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>

                                        <div className="mb-6 relative z-10">
                                            <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
                                            <div className="text-red-500 font-bold text-xs tracking-widest uppercase mb-2">The Reality</div>
                                            <h3 className="text-2xl font-bold text-white group-hover/card:text-red-400 transition-colors">{service.realitySection.title}</h3>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">{service.realitySection.subtitle}</p>
                                        <ul className="space-y-3 mt-auto relative z-10">
                                            {service.realitySection.points.map((point, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-slate-500">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-1.5 shrink-0"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* 2. WHO WE HELP (Middle) */}
                            <div className="w-full md:w-1/3 relative z-10 hover:z-50 transition-all duration-500 ease-out hover:scale-105 group/card md:-mt-6">
                                <div className="h-full bg-slate-950/40 backdrop-blur-xl p-8 flex flex-col relative overflow-visible rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                                    {/* Glow Layer */}
                                    <div className="absolute inset-0 rounded-2xl bg-purple-500/5 blur-xl group-hover/card:bg-purple-500/10 transition-all"></div>

                                    {/* TECH BORDER: PURPLE - Thicker Main Border */}
                                    <div className="absolute inset-0 pointer-events-none rounded-2xl border-[3px] border-purple-500/30 group-hover/card:border-purple-500/60 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover/card:shadow-[0_0_30px_rgba(168,85,247,0.5)]"></div>

                                    {/* Corner Accents - Top Right */}
                                    <svg className="absolute -top-[2px] -right-[2px] w-28 h-28 text-purple-500 opacity-90 group-hover/card:opacity-100 transition-opacity" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 12px rgba(168,85,247,0.8))' }}>
                                        <path d="M0 5 H 95 V 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                        <path d="M20 5 H 95 V 80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                                        <path d="M10 5 H 95 V 90" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                                        <rect x="75" y="15" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <rect x="75" y="35" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>

                                    {/* Corner Accents - Bottom Left */}
                                    <svg className="absolute -bottom-[2px] -left-[2px] w-28 h-28 text-purple-500 opacity-90 group-hover/card:opacity-100 transition-opacity" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 12px rgba(168,85,247,0.8))' }}>
                                        <path d="M100 95 H 5 V 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                        <path d="M80 95 H 5 V 20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                                        <path d="M90 95 H 5 V 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                                        <rect x="13" y="73" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <rect x="13" y="53" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>

                                    <h3 className="text-xl font-bold text-white mb-6 relative z-10">Who We Help</h3>
                                    <p className="text-sm text-slate-400 mb-6 relative z-10">Organisations within high-stakes environments:</p>
                                    <ul className="space-y-4 mb-auto relative z-10">
                                        {service.heroAttributes?.whoWeHelp.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                                                <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-purple-500 group-hover/item:text-white transition-colors">
                                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover/item:bg-white"></div>
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {service.heroAttributes?.metrics && (
                                        <div className="mt-8 pt-6 border-t border-purple-500/20 bg-purple-500/[0.02] -mx-8 -mb-8 p-8 relative z-10">
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-xs text-slate-500 uppercase tracking-wider">Risk Reduction</div>
                                                <div className="text-green-400 font-mono text-sm">Target: Minimize</div>
                                            </div>
                                            <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden mb-2 relative">
                                                <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full absolute top-0 left-0"></div>
                                                <div className="absolute top-0 right-0 h-full bg-black/80 transition-all duration-1000" style={{ width: '20%' }}></div>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-600 font-mono mt-2">
                                                <span>High Exposure</span>
                                                <span>Managed Resilience</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 3. OUR VALUE */}
                            {service.valueProposition && (
                                <div className="w-full md:w-1/3 relative z-0 hover:z-50 transition-all duration-500 ease-out hover:scale-105 group/card">
                                    <div className="h-full bg-slate-950/40 backdrop-blur-xl p-8 flex flex-col relative overflow-visible rounded-2xl">
                                        {/* Glow Layer */}
                                        <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 blur-xl group-hover/card:bg-emerald-500/10 transition-all"></div>

                                        {/* TECH BORDER: EMERALD - Thicker Main Border */}
                                        <div className="absolute inset-0 pointer-events-none rounded-2xl border-[3px] border-emerald-500/30 group-hover/card:border-emerald-500/60 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover/card:shadow-[0_0_30px_rgba(16,185,129,0.5)]"></div>

                                        {/* Corner Accents - Top Right */}
                                        <svg className="absolute -top-[2px] -right-[2px] w-28 h-28 text-emerald-500 opacity-80 group-hover/card:opacity-100 transition-opacity" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 12px rgba(16,185,129,0.8))' }}>
                                            <path d="M0 5 H 95 V 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                            <path d="M20 5 H 95 V 80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                                            <path d="M10 5 H 95 V 90" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                                            <rect x="75" y="15" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <rect x="75" y="35" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>

                                        {/* Corner Accents - Bottom Left */}
                                        <svg className="absolute -bottom-[2px] -left-[2px] w-28 h-28 text-emerald-500 opacity-80 group-hover/card:opacity-100 transition-opacity" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 12px rgba(16,185,129,0.8))' }}>
                                            <path d="M100 95 H 5 V 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                            <path d="M80 95 H 5 V 20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                                            <path d="M90 95 H 5 V 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                                            <rect x="13" y="73" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <rect x="13" y="53" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>

                                        <div className="mb-6 relative z-10">
                                            <Shield className="h-10 w-10 text-emerald-500 mb-4" />
                                            <div className="text-emerald-500 font-bold text-xs tracking-widest uppercase mb-2">Our Value</div>
                                            <h3 className="text-2xl font-bold text-white group-hover/card:text-emerald-400 transition-colors">{service.valueProposition.title}</h3>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">{service.valueProposition.subtitle}</p>
                                        <ul className="space-y-3 mb-6 relative z-10">
                                            {service.valueProposition.points.map((point, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-slate-500">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-900/50 mt-1.5 shrink-0"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                        {service.valueProposition.note && (
                                            <div className="mt-auto pt-4 border-t border-emerald-500/10 text-xs text-slate-500 italic relative z-10">
                                                "{service.valueProposition.note}"
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )
                }

                {
                    isNewLayout ? (
                        <div className={slug === 'cybersecurity-risk-management' ? "space-y-32" : "space-y-32"}>

                            {/* 1. REALITY VS VALUE - Spotlight Comparison (Legacy - Disabled for all as Unified Layout handles it, and Cyber skips it) */}
                            {false && (
                                <section className="container">
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                        {/* Reality */}
                                        {service.realitySection && (
                                            <SpotlightCard className="rounded-3xl p-8 lg:p-12 border-red-900/30" spotlightColor="rgba(239, 68, 68, 0.15)">
                                                <div className="relative z-10">
                                                    <AlertTriangle className="h-12 w-12 text-red-500 mb-6" />
                                                    <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">The Reality</span>
                                                    <h2 className="text-3xl font-bold text-white mb-4">{service.realitySection.title}</h2>
                                                    <p className="text-slate-400 mb-8">{service.realitySection.subtitle}</p>
                                                    <ul className="space-y-4">
                                                        {service.realitySection.points.map((point, i) => (
                                                            <li key={i} className="flex gap-4 items-start">
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                                                <span className="text-slate-300 text-sm">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </SpotlightCard>
                                        )}

                                        {/* Value */}
                                        {service.valueProposition && (
                                            <SpotlightCard className="rounded-3xl p-8 lg:p-12 border-green-900/30" spotlightColor="rgba(34, 197, 94, 0.15)">
                                                <div className="relative z-10">
                                                    <Shield className="h-12 w-12 text-green-500 mb-6" />
                                                    <span className="text-green-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Value</span>
                                                    <h2 className="text-3xl font-bold text-white mb-4">{service.valueProposition.title}</h2>
                                                    <p className="text-slate-400 mb-8">{service.valueProposition.subtitle}</p>
                                                    <ul className="space-y-4 mb-8">
                                                        {service.valueProposition.points.map((point, i) => (
                                                            <li key={i} className="flex gap-4 items-start">
                                                                <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                                                <span className="text-slate-300 text-sm">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {service.valueProposition.note && (
                                                        <div className="bg-black/30 p-4 rounded-xl border-l-2 border-green-500/50 text-sm text-slate-400 italic">
                                                            "{service.valueProposition.note}"
                                                        </div>
                                                    )}
                                                </div>
                                            </SpotlightCard>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* 2. CORE PILLARS */}
                            {service.servicePillars && slug === 'cybersecurity-risk-management' && (
                                slug === 'cybersecurity-risk-management' ? (
                                    <CybersecurityPillars
                                        pillars={service.servicePillars.pillars}
                                        title={service.servicePillars.title}
                                        subtitle={service.servicePillars.subtitle}
                                    />
                                ) : (
                                    <section className="container">
                                        <div className="mb-16 max-w-3xl">
                                            <span className="text-primary font-bold tracking-widest text-xs uppercase">Core Capabilities</span>
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{service.servicePillars.title}</h2>
                                            <p className="text-xl text-slate-400">{service.servicePillars.subtitle}</p>
                                        </div>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {service.servicePillars.pillars.map((pillar, i) => (
                                                <TiltCard key={i} className="h-full">
                                                    <div className="h-full bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/60 transition-colors">
                                                        <div className="flex items-center justify-between mb-6">
                                                            <div className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                                                                {pillar.badge.split('·')[0].trim()}
                                                            </div>
                                                            <Layers className="h-5 w-5 text-slate-600" />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                                                        <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{pillar.description}</p>
                                                        <ul className="space-y-3 border-t border-slate-800 pt-5">
                                                            {pillar.points.map((pt, j) => (
                                                                <li key={j} className="text-sm text-slate-300 flex items-start gap-3">
                                                                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                                    {pt}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </TiltCard>
                                            ))}
                                        </div>
                                    </section>
                                )
                            )}

                            {/* 3. HIGH VALUE USE CASES - Bento Grid */}
                            {service.useCases && slug === 'cybersecurity-risk-management' && (
                                <section className="py-20 relative bg-black overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />
                                    <div className="container relative z-10 mb-12">
                                        <span className="text-primary font-bold tracking-widest text-xs uppercase">Impact Areas</span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{service.useCases.title}</h2>
                                        <p className="text-xl text-slate-400 max-w-3xl">{service.useCases.subtitle}</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                                        {service.useCases.cases.map((useCase, i) => {
                                            const icons = [Shield, Zap, Lock, Globe, Server, Code];
                                            const Icon = icons[i % icons.length];

                                            const baseColors = ["purple", "pink", "blue", "emerald", "orange", "red"];
                                            const baseColor = baseColors[i % baseColors.length] as keyof typeof colorMap;

                                            const colorMap = {
                                                purple: { bg: "bg-purple-500", text: "text-purple-500", border: "group-hover:border-purple-500/50", shadow: "group-hover:shadow-purple-500/20", glow: "from-purple-500/20" },
                                                pink: { bg: "bg-pink-500", text: "text-pink-500", border: "group-hover:border-pink-500/50", shadow: "group-hover:shadow-pink-500/20", glow: "from-pink-500/20" },
                                                blue: { bg: "bg-blue-500", text: "text-blue-500", border: "group-hover:border-blue-500/50", shadow: "group-hover:shadow-blue-500/20", glow: "from-blue-500/20" },
                                                emerald: { bg: "bg-emerald-500", text: "text-emerald-500", border: "group-hover:border-emerald-500/50", shadow: "group-hover:shadow-emerald-500/20", glow: "from-emerald-500/20" },
                                                orange: { bg: "bg-orange-500", text: "text-orange-500", border: "group-hover:border-orange-500/50", shadow: "group-hover:shadow-orange-500/20", glow: "from-orange-500/20" },
                                                red: { bg: "bg-red-500", text: "text-red-500", border: "group-hover:border-red-500/50", shadow: "group-hover:shadow-red-500/20", glow: "from-red-500/20" },
                                            };
                                            const theme = colorMap[baseColor];

                                            return (
                                                <div key={i} className={`group relative bg-[#0a0a0a] border border-white/10 p-8 h-[340px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:z-20 ${theme.border} hover:shadow-2xl ${theme.shadow}`}>

                                                    {/* Hover Glow Gradient Background */}
                                                    <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${theme.glow} to-transparent opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700 pointer-events-none rounded-full -mr-20 -mt-20`}></div>

                                                    {/* Abstract Pattern - Dynamic Color & Increased Visibility */}
                                                    <div className={`absolute -bottom-20 -right-20 w-80 h-80 opacity-20 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110 ${theme.text} ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}>
                                                        {i % 6 === 0 && (
                                                            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                                <path d="M0 100 L100 0 M20 100 L100 20 M40 100 L100 40 M60 100 L100 60 M80 100 L100 80" strokeWidth="2" />
                                                            </svg>
                                                        )}
                                                        {i % 6 === 1 && (
                                                            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                                                                <circle cx="20" cy="80" r="4" /> <circle cx="40" cy="60" r="4" /> <circle cx="60" cy="40" r="4" /> <circle cx="80" cy="20" r="4" />
                                                                <circle cx="40" cy="80" r="4" /> <circle cx="60" cy="60" r="4" /> <circle cx="80" cy="40" r="4" />
                                                                <circle cx="60" cy="80" r="4" /> <circle cx="80" cy="60" r="4" />
                                                            </svg>
                                                        )}
                                                        {i % 6 === 2 && (
                                                            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                                <circle cx="100" cy="100" r="20" strokeWidth="2" />
                                                                <circle cx="100" cy="100" r="40" strokeWidth="2" />
                                                                <circle cx="100" cy="100" r="60" strokeWidth="2" />
                                                                <circle cx="100" cy="100" r="80" strokeWidth="2" />
                                                            </svg>
                                                        )}
                                                        {i % 6 === 3 && (
                                                            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                                <path d="M-20 100 L50 30 L120 100" strokeWidth="2" />
                                                                <path d="M-20 80 L50 10 L120 80" strokeWidth="2" />
                                                                <path d="M-20 60 L50 -10 L120 60" strokeWidth="2" />
                                                                <path d="M-20 120 L50 50 L120 120" strokeWidth="2" />
                                                            </svg>
                                                        )}
                                                        {i % 6 === 4 && (
                                                            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                                                                <rect x="10" y="40" width="8" height="8" /> <rect x="30" y="80" width="12" height="12" />
                                                                <rect x="60" y="20" width="6" height="6" /> <rect x="80" y="60" width="10" height="10" />
                                                                <rect x="50" y="50" width="8" height="8" /> <rect x="90" y="10" width="14" height="14" />
                                                                <rect x="20" y="10" width="6" height="6" />
                                                            </svg>
                                                        )}
                                                        {i % 6 === 5 && (
                                                            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                                                                <path d="M0 50 Q 25 20 50 50 T 100 50" strokeWidth="2" />
                                                                <path d="M0 30 Q 25 0 50 30 T 100 30" strokeWidth="2" />
                                                                <path d="M0 70 Q 25 40 50 70 T 100 70" strokeWidth="2" />
                                                                <path d="M0 90 Q 25 60 50 90 T 100 90" strokeWidth="2" />
                                                                <path d="M0 10 Q 25 -20 50 10 T 100 10" strokeWidth="2" />
                                                            </svg>
                                                        )}
                                                    </div>

                                                    <div className="flex justify-between items-start z-10 relative">
                                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme.bg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                            <Icon className="text-white w-7 h-7" />
                                                        </div>
                                                        <span className={`text-[10px] font-mono ${theme.text} bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/10 transition-colors uppercase tracking-widest`}>{useCase.tag}</span>
                                                    </div>

                                                    <div className="z-10 mt-auto relative">
                                                        <div className={`text-[10px] ${theme.text} font-bold uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                                                            Impact Area
                                                        </div>
                                                        <h3 className={`text-xl font-bold text-white mb-3 leading-tight group-hover:${theme.text} transition-colors`}>{useCase.title}</h3>
                                                        <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed group-hover:text-slate-200 transition-colors">{useCase.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>
                            )}

                            {/* 4. BUSINESS OUTCOMES (Pyramid Framework) */}
                            {service.businessOutcomes && slug === 'cybersecurity-risk-management' && (
                                <DigitalPyramid
                                    outcomes={service.businessOutcomes.outcomes}
                                    title={service.businessOutcomes.title}
                                    subtitle={service.businessOutcomes.subtitle}
                                />
                            )}

                            {/* 5. ENGAGEMENT APPROACH - Tracing Beam */}
                            {service.engagementApproach && slug === 'cybersecurity-risk-management' && (
                                <section className="relative py-8 w-full overflow-hidden">
                                    <div className="container relative mb-8 text-center max-w-3xl mx-auto">
                                        <span className={currentTheme.kicker + " font-bold tracking-widest text-xs uppercase"}>How We Work</span>
                                        <h2 className="text-3xl font-bold text-white mt-2 mb-4">{service.engagementApproach.title}</h2>
                                        <p className="text-lg text-slate-400">{service.engagementApproach.subtitle}</p>
                                    </div>

                                    <div className="container max-w-5xl mx-auto py-4">
                                        {service.engagementApproach.steps.map((step, i) => {
                                            const isEven = i % 2 === 0;
                                            const colors = [
                                                { from: '#FFA500', to: '#FFD700', shadow: 'rgba(255, 165, 0, 0.4)' }, // Orange-Yellow
                                                { from: '#FF6B6B', to: '#FF8E53', shadow: 'rgba(255, 107, 107, 0.4)' }, // Red-Orange
                                                { from: '#FF1744', to: '#FF4081', shadow: 'rgba(255, 23, 68, 0.4)' }, // Pink-Red
                                            ];
                                            const color = colors[i % colors.length];

                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.1 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    className={`flex items-center gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-6 last:mb-0`}
                                                    style={{ zIndex: 1 }}
                                                >
                                                    {/* Icon Circle with Line from Edge */}
                                                    <div className="relative flex items-center flex-shrink-0">
                                                        {/* Horizontal Line from Edge */}
                                                        {isEven ? (
                                                            // For Even items (Left side): Line comes from Left Edge
                                                            <div
                                                                className="absolute top-1/2 -translate-y-1/2 h-0.5 right-full mr-4"
                                                                style={{
                                                                    width: '100vw', // Extend far off-screen
                                                                    background: `linear-gradient(to right, transparent, ${color.from})`
                                                                }}
                                                            />
                                                        ) : (
                                                            // For Odd items (Right side): Line comes from Right Edge
                                                            <div
                                                                className="absolute top-1/2 -translate-y-1/2 h-0.5 left-full ml-4"
                                                                style={{
                                                                    width: '100vw', // Extend far off-screen
                                                                    background: `linear-gradient(to left, transparent, ${color.from})`
                                                                }}
                                                            />
                                                        )}

                                                        {/* Outer Glow Circle - Smaller */}
                                                        <div
                                                            className="absolute inset-0 rounded-full blur-lg"
                                                            style={{
                                                                background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                                                                opacity: 0.3
                                                            }}
                                                        />

                                                        {/* Colored Circle - Smaller (w-20 from w-24) */}
                                                        <div
                                                            className="relative w-20 h-20 rounded-full flex items-center justify-center"
                                                            style={{
                                                                background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                                                                boxShadow: `0 4px 20px ${color.shadow}`
                                                            }}
                                                        >
                                                            {/* Inner White Circle */}
                                                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                                                                {/* Icon */}
                                                                <div className="text-2xl">
                                                                    {i === 0 && '💡'}
                                                                    {i === 1 && '⚙️'}
                                                                    {i === 2 && '⏱️'}
                                                                    {i === 3 && '📈'}
                                                                    {i > 3 && '✓'}
                                                                </div>
                                                            </div>

                                                            {/* Dashed Circle Border */}
                                                            <svg className="absolute -inset-2 w-24 h-24" viewBox="0 0 128 128">
                                                                <circle
                                                                    cx="64"
                                                                    cy="64"
                                                                    r="60"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1"
                                                                    strokeDasharray="4 4"
                                                                    className="text-slate-600"
                                                                />
                                                            </svg>
                                                            <div
                                                                className={`absolute bottom-1/2 mb-4 text-7xl font-bold leading-none tracking-tighter z-20 ${isEven ? 'right-full mr-8' : 'left-full ml-8'}`}
                                                                style={{
                                                                    color: color.from,
                                                                    textShadow: `0 0 30px ${color.shadow}`,
                                                                    opacity: 0.8
                                                                }}
                                                            >
                                                                {step.step}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className={`flex-1 flex flex-col justify-center relative z-10 ${isEven ? 'text-left items-start' : 'text-right items-end'}`}>
                                                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                                        <p className="text-slate-400 leading-relaxed max-w-md">{step.description}</p>
                                                    </div>


                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </section>
                            )
                            }

                            {/* 6. WHY CHOOSE & FUTURE READY */}
                            {
                                service.whyChooseExtended && (
                                    <section className="container relative pb-20">
                                        {/* Ambient Background for Glass Effect */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-30 pointer-events-none">
                                            <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]" />
                                            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]" />
                                        </div>

                                        <div className="mb-4 text-center">
                                            <span className={`${currentTheme.kicker} font-bold tracking-widest text-xs uppercase mb-3 block`}>Why Global Acknowledgement Hub</span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">{service.whyChooseExtended.title}</h2>
                                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{service.whyChooseExtended.subtitle}</p>
                                        </div>

                                        {/* 3D Arc Carousel */}
                                        <div className="w-full py-0">
                                            <ArcCarousel
                                                items={service.whyChooseExtended.cards.map((card, i) => {
                                                    // Icon mapping based on index or title
                                                    const icons = [
                                                        <TrendingUp key="1" />, // Business-aligned
                                                        <Cloud key="2" />,      // Modern-first
                                                        <Bot key="3" />,        // Automation
                                                        <Scale key="4" />,      // Vendor-neutral
                                                        <GraduationCap key="5" />, // Enablement
                                                        <RefreshCw key="6" />   // Transformation
                                                    ];

                                                    const colors = [
                                                        '#a855f7', // Purple
                                                        '#3b82f6', // Blue
                                                        '#f59e0b', // Amber
                                                        '#10b981', // Emerald
                                                        '#ec4899', // Pink
                                                        '#06b6d4'  // Cyan
                                                    ];

                                                    return (
                                                        <GlowingCard
                                                            key={i}
                                                            title={card.title}
                                                            description={card.description}
                                                            icon={icons[i % icons.length]}
                                                            color={colors[i % colors.length]}
                                                        />
                                                    );
                                                })}
                                            />
                                        </div>

                                        {service.whyChooseExtended.futureReady && (
                                            <div className="relative overflow-hidden rounded-2xl border border-white/10 p-1 max-w-5xl mx-auto mt-8">
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-blue-900/60 to-purple-900/60 animate-gradient-slow z-0"></div>
                                                <div className="relative z-10 bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-[18px] flex flex-col md:flex-row gap-8 items-center justify-between">
                                                    <div className="max-w-2xl text-left">
                                                        <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Future-proof Your Security</h4>
                                                        <p className="text-slate-200 text-base md:text-lg leading-relaxed">{service.whyChooseExtended.futureReady.message}</p>
                                                    </div>
                                                    <div className="flex flex-col gap-2 w-full md:max-w-xs shrink-0">
                                                        {service.whyChooseExtended.futureReady.tags.map((tag, i) => (
                                                            <span key={i} className="w-full text-center px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-colors cursor-default">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </section>
                                )
                            }
                        </div>
                    ) : (
                        <>
                            <section>
                                <div className="grid md:grid-cols-3 gap-12 text-center">
                                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                                        <h3 className="text-2xl font-bold text-primary mb-4">Description</h3>
                                        <p className="text-slate-300">{service.description}</p>
                                    </div>
                                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                                        <h3 className="text-2xl font-bold text-primary mb-4">Key Capabilities</h3>
                                        <ul className="space-y-2 text-slate-300 text-left">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/20">
                                        <h3 className="text-2xl font-bold text-primary mb-4">Outcome Focus</h3>
                                        <ul className="space-y-2 text-slate-300 text-left">
                                            {service.outcomeFocus.map((outcome, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="grid md:grid-cols-2 gap-16 items-center">
                                <div className='bg-slate-900/50 p-8 rounded-2xl border border-destructive/20'>
                                    <h2 className="text-3xl font-bold text-destructive mb-4">Problem Statement</h2>
                                    <p className="text-lg text-slate-300/80 leading-relaxed">{service.problemStatement}</p>
                                </div>
                                <div className='bg-slate-900/50 p-8 rounded-2xl border border-accent/20'>
                                    <h2 className="text-3xl font-bold text-accent mb-4">Solutions We Offer</h2>
                                    <ul className="space-y-3 text-lg text-slate-300/80">
                                        {service.solutionsOffered.map((solution, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                                <span>{solution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <section className="text-center">
                                <h2 className="text-4xl font-bold text-primary mb-12">Tools & Tech Stack</h2>
                                <div className="flex flex-wrap justify-center gap-8">
                                    {service.toolsTechStack.map((tool, index) => (
                                        <div key={index} className="flex flex-col items-center gap-3 text-slate-300 transition-transform hover:-translate-y-2 duration-300">
                                            {iconMap[tool.icon]}
                                            <span className="text-sm">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Shared Case Studies & FAQs for Legacy */}
                            <section>
                                <h2 className="text-4xl font-bold text-primary mb-12 text-center">Case Studies</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {service.caseStudies.map((study, index) => (
                                        <Card key={index} className="bg-slate-900 border-slate-800 text-slate-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                                            <CardHeader>
                                                <CardTitle className="text-2xl text-white">{study.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-slate-400">{study.description}</p>
                                            </CardContent>
                                            <div className="p-6 pt-0">
                                                <Button asChild variant="secondary" className="bg-slate-800 text-slate-100 hover:bg-slate-700">
                                                    <Link href={study.link}>
                                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
                                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                                    {service.faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index + 1}`} className="bg-slate-900/80 border-slate-800 rounded-lg mb-4 px-6">
                                            <AccordionTrigger className="text-lg text-white hover:no-underline">{faq.question}</AccordionTrigger>
                                            <AccordionContent className="text-base text-slate-300/80">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </section>
                        </>
                    )
                }

                {/* Shared Footer CTA */}
                <section className="container py-20 text-center">
                    <div className="bg-gradient-to-r from-primary/10 via-transparent to-primary/10 py-16 rounded-3xl border border-primary/20">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to elevate your business?</h2>
                        <div className="flex gap-4 justify-center mt-8">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">Consult With Us</Button>
                            <Button size="lg" variant="outline" className="text-white border-white/50 bg-transparent">Explore Services</Button>
                        </div>
                    </div>
                </section>
            </main >
        </div >
    );
}
