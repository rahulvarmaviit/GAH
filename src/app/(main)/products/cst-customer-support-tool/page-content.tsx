
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Eye, Zap, ArrowRight, TrendingUp, Briefcase, Settings, Rocket, Handshake, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Timeline } from '@/components/ui/timeline';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { MacbookPro } from '@/components/ui/macbook-pro';
import { Mac } from '@/components/ui/mac';
import { SiriOrb } from '@/components/ui/siri-orb';
import { KeyCapabilitiesSection } from '@/components/key-capabilities-section';
import { TrcxSuiteSection } from '@/components/trcx-suite-section';

const whatCstDelivers = [
    {
        eyebrow: '01 · ORGANISE',
        title: 'Structured tickets',
        description: 'Convert messages from email, chat or forms into clean, trackable tickets.',
    },
    {
        eyebrow: '02 · GUIDE',
        title: 'Defined journeys',
        description: 'Give agents clear steps and customers clear expectations along the way.',
    },
    {
        eyebrow: '03 · IMPROVE',
        title: 'Actionable insights',
        description: 'See where delays happen, who\'s overloaded and how to improve response times.',
    },
];

// ... (keep other constants like howItWorksContent, features, etc. as they are - verify if I need to skip them in replacement content or include them) -> safest to just target the `whatCstDelivers` definition and the section JSX separately if they are far apart, or I can try to do it in one go if I'm careful.
// Actually, `whatCstDelivers` is at the top (lines 16-29) and the section is lines 192-223. I should probably do two edits or one large multi-replace. I'll do one multi-replace.

// Wait, replace_file_content expects a SINGLE CONTIGUOUS block. `whatCstDelivers` is at line 16, and the usage is at line 192. I MUST use `multi_replace_file_content` or two `replace_file_content` calls. I will use `multi_replace_file_content`.


const howItWorksContent = [
    {
        title: "1. Map your channels",
        content: <p className="text-slate-300">Identify where requests come from today (email, chat, forms, phone logs) and how they should be captured.</p>
    },
    {
        title: "2. Define queues & priorities",
        content: <p className="text-slate-300">Set up queues by topic, severity or customer tier. Define basic SLAs and escalation rules.</p>
    },
    {
        title: "3. Pilot with one support team",
        content: <p className="text-slate-300">Run C.S.T with a subset of agents and channels. Validate the flows and adjust as needed.</p>
    },
    {
        title: "4. Roll out across support",
        content: <p className="text-slate-300">Add more teams, channels and use cases once the foundation is stable.</p>
    },
];

const features = [
    'Omnichannel support management',
    'Automated ticket routing',
    'Self-service knowledge base',
    'Customer satisfaction (CSAT) surveys',
    'Agent performance analytics',
    'Integration with T.M.S for escalations',
];

const faqs = [
    {
        question: 'Does C.S.T support chatbots?',
        answer: 'Yes, we offer AI-powered chatbots for 24/7 initial response.',
    },
    {
        question: 'Can I customize the support portal?',
        answer: 'You can fully brand the customer-facing portal to match your identity.',
    },
    {
        question: 'How do escalations work?',
        answer: 'Tickets can be escalated directly to T.M.S tasks for technical resolution.',
    },
    {
        question: 'Is my customer data secure?',
        answer: 'Yes, C.S.T is built with enterprise-grade security and compliance.',
    },
];

const parallaxImages = [
    {
        src: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNzY1Njc0MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Customer support'
    },
    {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGF0JTIwc3VwcG9ydHxlbnwwfHx8fDE3NjU2NzQxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Chat support'
    },
    {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0ZWFtfGVufDB8fHx8MTc2NTY3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Team'
    },
    {
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHx8fHwxNzY1Njc0MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'People'
    },
    {
        src: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjb21tdW5pY2F0aW9ufGVufDB8fHx8MTc2NTY3NDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Communication'
    },
    {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtZWV0aW5nfGVufDB8fHx8MTc2NTY3NDIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Meeting'
    },
    {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e5341c12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxvZmZpY2V8ZW58MHx8fHwxNzY1Njc0MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Office'
    }
]

export function CstPageContent() {
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
                                    C.S.T · Customer Support Tool
                                </span>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
                                    Turn every support interaction into a clear, trackable journey.
                                </h1>
                                <p className="text-slate-300 md:text-lg mb-2 leading-relaxed max-w-xl">
                                    C.S.T streamlines customer support by organising service requests into clear, trackable tickets that guide both agents and customers through the entire resolution journey.
                                </p>
                                <p className="text-slate-400 font-medium mb-6">
                                    Faster responses. Clear communication. Happier customers.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                        Part of the TRCX Suite
                                    </div>
                                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                        Customer support · Service operations
                                    </div>
                                </div>

                                <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-200 mb-8 border-dashed">
                                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                                    Under development · Open to Design Partners & Early Access
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-0 transition-all rounded-full px-8 font-semibold shadow-lg shadow-purple-500/20">
                                        <Link href="/contact">
                                            Explore Early Access for C.S.T <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="text-slate-300 border-slate-700 bg-transparent hover:bg-slate-800 hover:text-white rounded-full px-8">
                                        <Link href="#use-cases">
                                            See Support Journey Examples <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>

                                <p className="text-sm text-slate-500 max-w-md">
                                    Built for teams that want structured support, transparent progress and a smoother experience for both agents and customers.
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
                                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2370&auto=format&fit=crop"
                                className="w-full max-w-[600px] h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </header>


            <main>
                {/* What C.S.T Delivers */}
                <section id="use-cases" className="w-full bg-white py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <span className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-3 block">
                                WHAT C.S.T DOES · AT A GLANCE
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Structure and clarity for every support request.
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {whatCstDelivers.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative h-full bg-slate-50/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
                                >
                                    <span className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4 block">
                                        {item.eyebrow}
                                    </span>
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
                            WHO IT’S FOR
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Support and service teams that care about the experience.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl">
                            C.S.T is designed for teams that want more than just an inbox — they want a predictable, transparent support process.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
                        {[
                            {
                                icon: <MessageSquare className="h-6 w-6 text-purple-400" />,
                                title: "Support Teams",
                                desc: "Customer support and service desks."
                            },
                            {
                                icon: <Handshake className="h-6 w-6 text-pink-400" />,
                                title: "Success Teams",
                                desc: "Success and account management teams."
                            },
                            {
                                icon: <Users className="h-6 w-6 text-cyan-400" />,
                                title: "Internal Helpdesks",
                                desc: "Internal helpdesks (IT, HR, facilities, etc.)."
                            },
                            {
                                icon: <Eye className="h-6 w-6 text-green-400" />,
                                title: "Ops Leaders",
                                desc: "Operations leaders who want visibility into support health."
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
                                Who C.S.T serves
                            </span>
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                                If your business relies on happy customers, C.S.T gives you the tools to keep them that way.
                            </p>
                        </div>
                    </div>
                </section>

                <KeyCapabilitiesSection
                    title="KEY CAPABILITIES"
                    subtitle="Everything you need to run support with confidence."
                    description=""
                    securityNote="C.S.T"
                    points={[
                        {
                            title: 'Omnichannel Inbox',
                            description: 'Email, chat, and voice all in one place.'
                        },
                        {
                            title: 'Automated Routing',
                            description: 'Rules-based assignment to ensure the right agent gets the ticket.'
                        },
                        {
                            title: 'SLA Tracking',
                            description: 'Real-time countdowns and violation alerts for every ticket.'
                        },
                        {
                            title: 'CSAT & Reporting',
                            description: 'Built-in surveys and analytics to measure team performance.'
                        }
                    ]}
                />


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
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2370&auto=format&fit=crop"
                                    className="w-full max-w-[700px] h-auto"
                                />
                            </motion.div>

                            {/* Right Column: Text Content */}
                            <div>
                                <div className="inline-flex items-center rounded-full border border-green-600/30 bg-green-100/50 px-3 py-1 text-xs font-medium text-green-800 mb-6">
                                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    AI-assisted support · performance, productivity & communication
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                    AI that helps agents respond better, not just faster.
                                </h2>
                                <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                                    C.S.T uses AI to support agents and leaders — helping them handle volume without losing quality or empathy.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Suggests summaries of customer messages and context for quicker understanding.",
                                        "Proposes draft replies agents can review and send, keeping the human in control.",
                                        "Highlights at-risk tickets before SLAs are breached or customers become frustrated.",
                                        "Surfaces patterns across tickets — recurring issues, product pain points, common questions."
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-start text-slate-700">
                                            <div className="mt-1.5 mr-3 flex-shrink-0">
                                                <div className="h-2 w-2 rounded-full bg-green-600 shadow-sm" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-8 border-t border-slate-900/10">
                                    <p className="text-slate-600 italic text-sm leading-relaxed">
                                        AI in C.S.T assists front-line teams — it doesn’t replace human judgement or empathy.
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
                    <TrcxSuiteSection
                        activeProduct="CST"
                        badgeText="C.S.T within the TRCX Suite"
                        title="Connect customer requests to the rest of your operations."
                        description="C.S.T is the customer-facing part of TRCX — but it doesn’t operate in isolation."
                        footerText="Start with C.S.T alone, or connect it to T.M.S and R.M.S when you’re ready to unify support with operations."
                        cards={[
                            {
                                code: 'C.S.T',
                                name: 'Customer Support Tool',
                                description: 'receives and structures customer support and service requests.'
                            },
                            {
                                code: 'T.M.S',
                                name: 'Team Management System',
                                description: 'coordinates internal work and cross-team tasks triggered by those requests.'
                            },
                            {
                                code: 'R.M.S',
                                name: 'Resource Management System',
                                description: 'ensures the right people are available to handle volumes and peaks.'
                            },
                            {
                                code: 'Wolfronix',
                                name: 'Security & Compliance',
                                description: 'secures every step in the data journey.'
                            }
                        ]}
                    />
                </section>

                {/* Industries & Use Cases */}
                <section className="w-full bg-white py-32 mb-24">
                    <div className="container mx-auto px-4 space-y-32">

                        {/* Part 1: Industries (Text Left, SiriOrb Right) */}
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Text Content */}
                            <div>
                                <span className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4 block">
                                    INDUSTRIES
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    Support teams across sectors.
                                </h2>
                                <p className="text-slate-700 text-lg mb-8">
                                    C.S.T is a fit anywhere customer or user support matters:
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "SaaS & Software",
                                        "E-commerce & Retail",
                                        "Banking & Financial Services",
                                        "Telecom & Utilities",
                                        "EdTech & Online services",
                                        "B2B services & agencies",
                                    ].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/60 border border-slate-900/10 rounded-full text-slate-800 text-sm font-medium hover:bg-white hover:border-slate-900/20 transition-all cursor-default">
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
                            {/* Donut Image Component (Order 2 on mobile, Order 1 on desktop) */}
                            <div className="order-2 md:order-1 relative h-[400px] w-full flex items-center justify-center">
                                <Image
                                    src="/assets/donut.avif"
                                    alt="CST Use Cases"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="order-1 md:order-2">
                                <span className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4 block">
                                    EXAMPLE USE CASES
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    Where C.S.T makes an immediate difference.
                                </h2>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Product support",
                                            desc: "manage bug reports, feature questions and how-to requests."
                                        },
                                        {
                                            title: "Order & billing",
                                            desc: "track refunds, disputes and payment issues with full visibility."
                                        },
                                        {
                                            title: "Account & onboarding",
                                            desc: "ensure new customers are set up smoothly."
                                        },
                                        {
                                            title: "Internal helpdesks",
                                            desc: "IT/HR requests with clear tracking and SLAs."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="group">
                                            <p className="text-slate-700 leading-relaxed">
                                                <span className="font-bold text-slate-900 block mb-1 group-hover:text-amber-700 transition-colors">
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
                            Step-by-step rollout, without disruption.
                        </h2>
                        <p className="text-lg text-slate-400">
                            C.S.T is introduced in focused stages so you can stabilise one part of support before expanding.
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
                                    Help shape the future of customer support.
                                </h2>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                    We’re defining the next generation of support tools. Join us to build a platform that truly serves agents and customers.
                                </p>

                                <div className="mb-10">
                                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 mb-6 shadow-sm">
                                        Ideal early access teams:
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            "Handling 500+ tickets weekly across multiple channels.",
                                            "Frustrated with legacy, clunky support desk software.",
                                            "Wanting to leverage AI without losing the human element."
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
                                    src="/assets/axle.avif"
                                    alt="CST Early Access"
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
                                    Common questions about C.S.T.
                                </h2>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Answers to your questions about customer support and service management.
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
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Delight Your Customers?</h2>
                        <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                            Get started with C.S.T today and turn every interaction into a positive relationship.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                                <Link href="/contact">
                                    Try C.S.T <ArrowRight className="ml-2 h-5 w-5" />
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
