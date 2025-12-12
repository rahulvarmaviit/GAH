
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Eye, Zap, ArrowRight, TrendingUp, Briefcase, Settings, Rocket, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Timeline } from '@/components/ui/timeline';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { MacbookPro } from '@/components/ui/macbook-pro';
import { Mac } from '@/components/ui/mac';
import { SiriOrb } from '@/components/ui/siri-orb';
import { KeyCapabilitiesSection } from '@/components/key-capabilities-section';
import { TrcxSuiteSection } from '@/components/trcx-suite-section';

const whatTmsDelivers = [
    {
        title: 'One source of truth',
        description: 'Tickets for tasks, projects and meetings — all in one place, instead of scattered across chats and sheets.',
    },
    {
        title: 'Role-specific views',
        description: 'Employees, managers and clients each see a tailored view designed for what they need to action or trust.',
    },
    {
        title: 'No stalled workflows',
        description: 'Automations and AI assist ensure work keeps moving — not stuck waiting for follow-ups or approvals.',
    },
];



const howItWorksContent = [
    {
        title: "1. Select a workflow or team",
        content: <p className="text-slate-300">We start where the pain is sharpest and value is clear.</p>
    },
    {
        title: "2. Configure roles & categories",
        content: <p className="text-slate-300">Align tickets, views and access with your organisation.</p>
    },
    {
        title: "3. Pilot with one squad",
        content: <p className="text-slate-300">Validate the fit, refine workflows, build internal champions.</p>
    },
    {
        title: "4. Scale across operations",
        content: <p className="text-slate-300">Extend to more teams once the value is proven in your context.</p>
    },
];

const features = [
    'Role-based access and dashboards',
    'Task creation, assignment, and tracking',
    'Project progress and timeline visualization',
    'Centralized meeting notes and documentation',
    'Custom performance metric tracking (eKPIs)',
    'Real-time updates and notifications',
];

const faqs = [
    {
        question: 'Is T.M.S only for IT teams?',
        answer: 'No. T.M.S can be used by any team that manages projects and tasks — tech, operations, creative, etc.',
    },
    {
        question: 'Can clients view project status?',
        answer: 'Yes, through controlled client-side views.',
    },
    {
        question: 'Does T.M.S replace chat tools?',
        answer: 'It doesn’t replace messaging but reduces dependency by making work status self-explanatory.',
    },
    {
        question: 'How complex is setup?',
        answer: 'Most structures can be configured quickly. Advanced setups can be layered over time.',
    },
];

const parallaxImages = [
    {
        src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTk3NzQzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Team collaboration'
    },
    {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NjU2NzMyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Team meeting'
    },
    {
        src: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3NjU2NzMzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Project management'
    },
    {
        src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3NjU2NzMzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Task management'
    },
    {
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHl8ZW58MHx8fHwxNzY1NjczMzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Productivity'
    },
    {
        src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZXNvdXJjZSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzY1NTc3MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Resource management'
    },
    {
        src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b3JrZmxvd3xlbnwwfHx8fDE3NjU2NzM0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Workflow'
    }
]

export function TmsPageContent() {
    return (
        <div className="flex flex-col bg-black text-white">
            {/* Hero Section */}
            <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-48 pb-48">
                <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
                <div className="relative container z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="text-left order-2 lg:order-1 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-3 block">
                                    T.M.S · Team Management System
                                </span>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
                                    Drive every task to <br /> done. Faster.
                                </h1>
                                <p className="text-slate-300 md:text-lg mb-6 leading-relaxed max-w-xl">
                                    A smart ticketing system for teams that deliver — with clear ownership, automated progress, and AI that prevents delays before they happen.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                        Core product in the TRCX Suite
                                    </div>
                                    <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                        AI assist · 70% productivity · 30% communication
                                    </div>
                                </div>

                                <p className="text-slate-200 font-medium mb-6 max-w-xl">
                                    T.M.S turns organisational chaos into predictable delivery — across teams, projects and clients.
                                </p>

                                <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-200 mb-8 border-dashed">
                                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                                    Under development · Onboarding Design Partners & Early Access teams
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <Button asChild size="lg" className="bg-white hover:bg-slate-200 text-black border-0 transition-colors rounded-full px-8 font-semibold">
                                        <Link href="/contact">
                                            Join Early Access <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="text-slate-300 border-slate-700 bg-transparent hover:bg-slate-800 hover:text-white rounded-full px-8">
                                        <Link href="#use-cases">
                                            See Feature Showcase <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>

                                <p className="text-sm text-slate-500 max-w-md">
                                    Built for teams whose work impacts customers, revenue or compliance — and who need structure, clarity and accountability at scale.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Column: Mac Component */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center items-center order-1 lg:order-2"
                        >
                            <Mac
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                className="w-full max-w-[600px] h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </header>


            <main>
                {/* What T.M.S Delivers */}
                <section id="use-cases" className="w-full bg-white py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <span className="text-sm font-medium tracking-widest text-purple-600 uppercase mb-3 block">
                                WHAT T.M.S DELIVERS
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Structure, clarity and accountability for every task.
                            </h2>
                            <p className="text-slate-600 text-lg">
                                T.M.S centralises work into a single ticketing hub — so everyone knows what matters, who owns it, and what needs to happen next.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {whatTmsDelivers.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative h-full bg-slate-50/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:bg-slate-50/80 transition-all duration-300 overflow-hidden"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed relative z-10">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Who It's Built For */}
                <section className="py-48 container mx-auto px-4">
                    <div className="mb-12">
                        <span className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-3 block">
                            WHO IT’S BUILT FOR
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Teams that can’t afford operational fog.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl">
                            T.M.S is ideal for teams where delivery matters — to customers, revenue or regulators.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
                        {[
                            {
                                icon: <Briefcase className="h-6 w-6 text-purple-400" />,
                                title: "Delivery & Execution",
                                desc: "Teams working across multiple projects."
                            },
                            {
                                icon: <Settings className="h-6 w-6 text-green-400" />,
                                title: "Support & Ops",
                                desc: "Functions running recurring workflows."
                            },
                            {
                                icon: <Rocket className="h-6 w-6 text-cyan-400" />,
                                title: "Fast-Growing Cos",
                                desc: "Companies scaling beyond spreadsheets & chats."
                            },
                            {
                                icon: <Handshake className="h-6 w-6 text-pink-400" />,
                                title: "Client-Facing",
                                desc: "Teams serving clients who expect professional accountability."
                            }
                        ].map((item, index) => (
                            <div key={index} className="px-6 py-8 hover:bg-white/5 transition-colors">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative border-t border-white/10 mt-0">
                        <div className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-black px-4">
                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
                                Who T.M.S serves
                            </span>
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                                If your work impacts how clients see you, T.M.S is designed to keep that work on track, visible and auditable.
                            </p>
                        </div>
                    </div>
                </section>


                <KeyCapabilitiesSection />


                {/* Third Section: Feature detailed view */}
                <section className="w-full bg-white py-24 md:py-32">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Column: Macbook Pro */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex justify-center items-center"
                            >
                                <MacbookPro
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop"
                                    className="w-full max-w-[700px] h-auto"
                                />
                            </motion.div>

                            {/* Right Column: Text Content */}
                            <div>
                                <div className="inline-flex items-center rounded-full border border-green-600/30 bg-green-100 px-3 py-1 text-xs font-medium text-green-700 mb-6">
                                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    AI Assist · 70% productivity · 30% communication
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                    AI that behaves like a proactive operations partner.
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    T.M.S uses AI to keep work progressing — not to add noise. It surfaces what’s at risk, recommends next actions, and even helps you keep clients informed.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Auto-suggests ticket details, owners and next steps based on patterns across your work.",
                                        "Detects risks early — workload spikes, upcoming deadlines, or tickets stuck without updates.",
                                        "Summarises activity into clean status insights that managers and clients can understand at a glance.",
                                        "Suggests concise, client-ready progress updates — so communication keeps pace with delivery."
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-start text-slate-600">
                                            <div className="mt-1.5 mr-3 flex-shrink-0">
                                                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-8 border-t border-slate-200">
                                    <p className="text-slate-500 italic text-sm leading-relaxed">
                                        70% execution intelligence. 30% communication assistance. 100% reduction in “I didn’t know this was stuck.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 mb-24">
                    <ZoomParallax images={parallaxImages} />
                </section>

                {/* TRCX Suite Section */}
                <section className="container mx-auto px-4 mb-24">
                    <TrcxSuiteSection activeProduct="TMS" />
                </section>

                {/* Industries & Use Cases */}
                <section className="w-full bg-slate-50 py-32 mb-24">
                    <div className="container mx-auto px-4 space-y-32">

                        {/* Part 1: Industries (Text Left, SiriOrb Right) */}
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Text Content */}
                            <div>
                                <span className="text-sm font-medium tracking-widest text-purple-600 uppercase mb-4 block">
                                    INDUSTRIES WE SERVE BEST
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    Where structured delivery really matters.
                                </h2>
                                <p className="text-slate-600 text-lg mb-8">
                                    T.M.S fits any organisation running recurring, high-stakes work — but shines in these environments:
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "IT Services & SaaS Teams",
                                        "Digital Agencies & Consulting",
                                        "Banking & Financial Services Ops",
                                        "Manufacturing & Production Support",
                                        "Retail & E-commerce Ops",
                                        "Logistics & Supply Chain Service",
                                        "Government & Public Service Units"
                                    ].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium hover:border-purple-300 hover:shadow-sm transition-all cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Siri Orb Component */}
                            <div className="flex items-center justify-center h-[400px]">
                                <SiriOrb size="300px" />
                            </div>
                        </div>

                        {/* Part 2: Use Cases (SiriOrb Left, Text Right) */}
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Clover Image Component (Order 2 on mobile, Order 1 on desktop) */}
                            <div className="order-2 md:order-1 relative h-[400px] w-full flex items-center justify-center">
                                <Image
                                    src="/assets/clover.avif"
                                    alt="TMS Use Cases"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="order-1 md:order-2">
                                <span className="text-sm font-medium tracking-widest text-purple-600 uppercase mb-4 block">
                                    TYPICAL USE CASES
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    From “What’s the status?” to “We’re on it.”
                                </h2>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Client project tracking",
                                            desc: "Give clients a clean view of progress without exposing internal noise."
                                        },
                                        {
                                            title: "Internal IT & operations workflows",
                                            desc: "Replace ad-hoc requests with predictable, trackable flows."
                                        },
                                        {
                                            title: "Cross-team delivery",
                                            desc: "Ensure handoffs between teams are structured, with clear owners and timelines."
                                        },
                                        {
                                            title: "Performance & utilisation",
                                            desc: "Use real work data to make better staffing and prioritisation decisions."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="group">
                                            <p className="text-slate-600 leading-relaxed">
                                                <span className="font-bold text-slate-900 block mb-1 group-hover:text-purple-600 transition-colors">
                                                    {item.title} –
                                                </span>
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 my-12 container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-3 block">
                            IMPLEMENTATION
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Get value in weeks, not months.
                        </h2>
                        <p className="text-lg text-slate-400">
                            We don’t believe in big-bang deployments. T.M.S is rolled out in focused steps, aligned with how your teams already work.
                        </p>
                    </div>
                    <Timeline data={howItWorksContent} />
                </section>



                {/* Early Access / Design Partners Section */}
                <section className="w-full bg-slate-50 py-24 my-24 border-y border-slate-200/60">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div>
                                <span className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4 block">
                                    EARLY ACCESS · DESIGN PARTNERS
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    Help shape the future of operational excellence.
                                </h2>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                    We’re working with a limited number of organisations that want to co-create T.M.S with us — and feel the pain of scattered work every day.
                                </p>

                                <div className="mb-10">
                                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 mb-6 shadow-sm">
                                        Ideal early access teams:
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            "30–500+ active tickets or tasks in motion weekly.",
                                            "Work currently spread across email, spreadsheets & chat.",
                                            "Leadership frustrated by lack of reliable visibility."
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center text-lg text-slate-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-slate-500 text-base mb-10 leading-relaxed">
                                    Early access teams receive priority on capabilities & integrations, direct access to our product team, and preferential early-adopter pricing.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white border-0 transition-colors rounded-full px-8 h-12 text-base shadow-lg shadow-slate-900/20">
                                        <Link href="/contact">
                                            Become a Design Partner <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="text-slate-700 border-slate-300 bg-white hover:bg-slate-50 hover:text-slate-900 rounded-full px-8 h-12 text-base">
                                        <Link href="/contact">
                                            Talk to our Product Team <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Image Component */}
                            <div className="relative h-[500px] w-full flex justify-center items-center">
                                <Image
                                    src="/assets/prism.avif"
                                    alt="Early Access Prism"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="w-full bg-black py-24 my-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 items-center">
                            {/* Header Column */}
                            <div className="lg:col-span-1">
                                <span className="text-sm font-medium tracking-widest text-purple-400 uppercase mb-3 block">
                                    FAQS
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Common questions about T.M.S.
                                </h2>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Everything you need to know about setting up and scaling your team with T.M.S.
                                </p>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Still have questions?</h4>
                                    <p className="text-sm text-slate-400 mb-4">
                                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                                    </p>
                                    <Button asChild variant="outline" size="sm" className="text-white border-white/20 hover:bg-white hover:text-slate-900 bg-transparent">
                                        <Link href="/contact">Get in touch</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Accordion Column */}
                            <div className="lg:col-span-2">
                                <Accordion type="single" collapsible className="w-full">
                                    {faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-white/10 px-0 mb-0 last:border-0 hover:bg-white/5 transition-colors duration-200">
                                            <AccordionTrigger className="text-lg md:text-xl font-medium text-white py-6 hover:no-underline hover:text-purple-400 transition-colors px-4">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-base text-slate-400 leading-relaxed px-4 pb-6">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="text-center bg-gradient-to-r from-primary/10 via-transparent to-primary/10 py-20 rounded-3xl border border-primary/20">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Team's Productivity?</h2>
                        <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                            Get started with T.M.S today and bring clarity, efficiency, and scale to your team's operations.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                                <Link href="/contact">
                                    Try T.M.S <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                                <Link href="/products">
                                    Explore Other Products
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
