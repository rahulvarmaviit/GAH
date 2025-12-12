
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

const whatRmsDelivers = [
    {
        tag: '01 · UNIFIED VIEW',
        title: 'Unifies resource data',
        description: 'People, skills, roles, tools and availability in one system.',
    },
    {
        tag: '02 · SMARTER STAFFING',
        title: 'Enables intelligent allocation',
        description: 'Match work to the best-suited and best-available resources.',
    },
    {
        tag: '03 · HEALTHY WORKLOADS',
        title: 'Prevents overload & idle time',
        description: 'See who is overbooked, who is underused and where gaps exist.',
    },
];

const howItWorksContent = [
    {
        title: "1. Audit current capacity",
        content: <p className="text-slate-300">Understand your current resource utilization and gaps.</p>
    },
    {
        title: "2. Define roles & skills",
        content: <p className="text-slate-300">Map out the skills and roles needed for your projects.</p>
    },
    {
        title: "3. Implement allocation rules",
        content: <p className="text-slate-300">Set up automated rules for resource assignment.</p>
    },
    {
        title: "4. Monitor & Optimize",
        content: <p className="text-slate-300">Continuously track performance and adjust allocations.</p>
    },
];

const features = [
    'Real-time capacity tracking',
    'Skill-based resource search',
    'Project allocation timeline',
    'Utilization heatmaps',
    'Forecasting and scenario planning',
    'Integration with T.M.S tickets',
];

const faqs = [
    {
        question: 'Is R.M.S a full HRMS (payroll, leave, etc.)?',
        answer: 'No. R.M.S focuses on resource planning and utilisation, not payroll, compliance or core HR administration. It can sit alongside your existing HRMS.',
    },
    {
        question: 'Does R.M.S integrate with T.M.S?',
        answer: 'Yes. R.M.S and T.M.S are designed to work together — so you can see work demand (T.M.S) against people capacity (R.M.S).',
    },
    {
        question: 'Can we start small?',
        answer: 'Absolutely. You can start with one department or region, then extend once you see value.',
    },
    {
        question: 'How is sensitive HR data secured?',
        answer: 'R.M.S is designed to use Wolfronix as the data protection layer, bringing strong access control, clear audit logs and secure handling of personal information.',
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

export function RmsPageContent() {
    return (
        <div className="flex flex-col bg-black text-white">
            {/* Hero Section */}
            {/* ... (Hero section remains unchanged) ... */}
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
                                    R.M.S · RESOURCE MANAGEMENT SYSTEM
                                </span>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
                                    R.M.S — precision control over your <br /> people and resources.
                                </h1>
                                <p className="text-slate-300 md:text-lg mb-6 leading-relaxed max-w-xl">
                                    R.M.S helps organisations manage people, skills and tools with clarity. It centralises resource data, gives role-based visibility, and enables smart allocation across teams and projects.
                                </p>
                                <p className="text-slate-400 md:text-lg mb-8 leading-relaxed max-w-xl italic">
                                    Put the right people on the right work, at the right time.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                        A core product within the TRCX Suite
                                    </div>
                                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                        HR & Resource Planning · Enterprise-grade
                                    </div>
                                </div>

                                <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-200 mb-8 border-dashed">
                                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                                    Under development · Open to Design Partners & Early Access
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-0 transition-colors rounded-full px-8 font-semibold shadow-lg shadow-purple-500/20">
                                        <Link href="/contact">
                                            Explore Early Access for R.M.S <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="text-slate-300 border-slate-700 bg-transparent hover:bg-slate-800 hover:text-white rounded-full px-8">
                                        <Link href="#use-cases">
                                            See Allocation & Planning Scenarios <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>

                                <p className="text-sm text-slate-500 max-w-md">
                                    Designed for organisations where people and skills are the primary asset — and where staffing decisions directly impact delivery, margins and employee wellbeing.
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
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                                className="w-full max-w-[600px] h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </header>


            <main>
                {/* What R.M.S Delivers */}
                <section id="use-cases" className="w-full bg-white py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <span className="text-sm font-medium tracking-widest text-purple-600 uppercase mb-3 block">
                                WHAT R.M.S DOES · AT A GLANCE
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Put all your resource decisions <br className="hidden md:block" /> on solid ground.
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {whatRmsDelivers.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative h-full bg-slate-50/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:bg-slate-50/80 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block relative z-10">
                                        {item.tag}
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
                            For teams responsible for people, <br /> profitability and delivery.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl">
                            R.M.S is designed for leaders and teams who make daily decisions about where people should focus and how work should be staffed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
                        {[
                            {
                                icon: <Users className="h-6 w-6 text-purple-400" />,
                                title: "HR & People Operations",
                                desc: "Managing staffing, utilisation and roles."
                            },
                            {
                                icon: <Briefcase className="h-6 w-6 text-green-400" />,
                                title: "Delivery & Project Leaders",
                                desc: "Deciding who works on what, and when."
                            },
                            {
                                icon: <Settings className="h-6 w-6 text-cyan-400" />,
                                title: "Operations & Resource Managers",
                                desc: "Keeping the big picture of capacity vs. demand."
                            },
                            {
                                icon: <TrendingUp className="h-6 w-6 text-pink-400" />,
                                title: "Finance / Leadership",
                                desc: "Needing a clear view of utilisation and workforce efficiency."
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
                                Who R.M.S serves
                            </span>
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                                If you need to optimize your workforce's potential, R.M.S gives you the data to do it.
                            </p>
                        </div>
                    </div>
                </section>


                <KeyCapabilitiesSection
                    title="KEY CAPABILITIES"
                    subtitle="Everything you need to plan people and resources with confidence."
                    description=""
                    securityNote="R.M.S"
                    points={[
                        {
                            title: 'Centralised resource profiles',
                            description: 'Maintain structured profiles for people and key resources: skills, roles, seniority, cost, locations, availability.'
                        },
                        {
                            title: 'Capacity & utilisation views',
                            description: 'See who is at capacity, overloaded or underutilised — by person, team, role, project or client.'
                        },
                        {
                            title: 'Smart allocation & scenarios',
                            description: 'Assign people based on skills and availability. Run what-if scenarios like "What if we win this new client?".'
                        },
                        {
                            title: 'Role-based visibility',
                            description: 'HR, managers and leadership each get the views they need — from trends to frontline staffing.'
                        },
                        {
                            title: 'Audit-ready tracking',
                            description: 'Maintain a history of how resources were allocated to support reviews, cost tracking and performance discussions.'
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
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop"
                                    className="w-full max-w-[700px] h-auto"
                                />
                            </motion.div>

                            {/* Right Column: Text Content */}
                            <div>
                                <div className="inline-flex items-center rounded-full border border-green-600/30 bg-green-100 px-3 py-1 text-xs font-medium text-green-700 mb-6">
                                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    AI-assisted resource planning · performance & productivity
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    Planning decisions that are faster, clearer and more objective.
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    R.M.S uses AI to help HR and managers take better decisions — grounded in real utilisation and skill data, not just intuition.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Suggests best-fit resources for new work based on skills, history and availability.",
                                        "Highlights overload risks when too many high-priority items hit the same people.",
                                        "Recommends rebalancing options across teams to avoid burnout and bottlenecks.",
                                        "Summarises utilisation and staffing insights for leadership in simple language."
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
                                        AI in R.M.S is there to support HR and managers, not replace their judgement.
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
                        activeProduct="RMS"
                        title="Work, capacity and support — connected in one suite."
                        description="Within TRCX, each product plays a clear role. Together, they give you a coherent view of work, people and customers."
                        badgeText="How R.M.S fits into the TRCX Suite"
                        footerText="You can start with R.M.S alone for staffing and utilisation — or combine R.M.S + T.M.S for a full view of work versus capacity."
                        cards={[
                            {
                                code: 'T.M.S',
                                name: 'Team Management System',
                                description: 'T.M.S coordinates work and tickets.'
                            },
                            {
                                code: 'R.M.S',
                                name: 'Resource Management System',
                                description: 'R.M.S ensures the right people and resources are in place.'
                            },
                            {
                                code: 'C.S.T',
                                name: 'Customer Support Tool',
                                description: 'C.S.T structures customer-facing support and service.'
                            },
                            {
                                code: 'W.F.X',
                                name: 'Wolfronix',
                                description: 'Wolfronix secures all the data underneath.'
                            }
                        ]}
                    />
                </section>

                {/* Industries & Use Cases */}
                <section className="w-full bg-slate-50 py-32 mb-24">
                    <div className="container mx-auto px-4 space-y-32">

                        {/* Part 1: Industries (Text Left, Image Right) */}
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Text Content */}
                            <div>
                                <span className="text-sm font-medium tracking-widest text-purple-600 uppercase mb-4 block">
                                    INDUSTRIES WHERE R.M.S SHINES
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    Anywhere people and skills are your main asset.
                                </h2>
                                <p className="text-slate-600 text-lg mb-8">
                                    R.M.S is relevant wherever you regularly ask, “Do we have the capacity or skills for this?”
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "IT Services & SaaS",
                                        "Consulting & Digital Agencies",
                                        "Banking & Financial Services Ops",
                                        "Manufacturing & Engineering projects",
                                        "BPO / Shared Services",
                                        "Logistics & Supply Chain",
                                        "Large internal IT / Transformation teams"
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

                        {/* Part 2: Use Cases (Image Left, Text Right) */}
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Use Case Image */}
                            <div className="order-2 md:order-1 relative h-[400px] w-full">
                                <Image
                                    src="/assets/QBkCPoeejpECqrXOviZdvDrmKws.avif"
                                    alt="Resource Management Use Cases"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Content (Order 1 on mobile, Order 2 on desktop) */}
                            <div className="order-1 md:order-2">
                                <span className="text-sm font-medium tracking-widest text-purple-600 uppercase mb-4 block">
                                    EXAMPLE USE CASES
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    Practical scenarios where R.M.S pays off quickly.
                                </h2>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Project staffing & bench management",
                                            desc: "allocate the right people to the right projects, reduce bench, avoid last-minute scrambles."
                                        },
                                        {
                                            title: "Skill-based routing of work",
                                            desc: "ensure specialised tasks go to people with the right skills and certifications."
                                        },
                                        {
                                            title: "Forecasting hiring & training needs",
                                            desc: "use upcoming demand to decide where to hire, where to upskill and where to redistribute."
                                        },
                                        {
                                            title: "Cross-location or remote teams",
                                            desc: "manage capacity across countries or locations without losing the big picture."
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

                {/* Implementation Timeline */}
                <section className="w-full bg-black py-24 mb-24">
                    <div className="container mx-auto px-4">
                        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4 block text-center">
                            IMPLEMENTATION — HOW WE ROLL OUT R.M.S
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
                            Controlled rollout, real-world validation.
                        </h2>
                        <p className="text-slate-400 text-lg text-center max-w-3xl mx-auto mb-20">
                            R.M.S is introduced in clear steps so you can see value early and refine based on your own data.
                        </p>

                        <Timeline data={[
                            {
                                title: "1",
                                content: (
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-4">Resource inventory</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            Map your existing roles, skills, teams and tools. Import or connect current HR / project data where feasible.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                title: "2",
                                content: (
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-4">Define views & rules</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            Decide which roles see what (HR, managers, leadership). Set basic rules for allocation and capacity thresholds.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                title: "3",
                                content: (
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-4">Pilot with a business unit or function</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            Start with one region, department or practice. Use it for 1–2 real planning cycles.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                title: "4",
                                content: (
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-4">Expand across the organisation</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            Once the pilot proves value, roll out to more teams and refine data quality.
                                        </p>
                                    </div>
                                ),
                            },
                        ]}
                            sticky={false}
                        />
                    </div>
                </section>



                {/* Early Access / Design Partners Section */}
                <section className="w-full bg-slate-50 py-24 my-24 border-y border-slate-200/60">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div>
                                <span className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4 block">
                                    EARLY ACCESS & DESIGN PARTNER PROGRAM
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    Shape how modern resource management should work.
                                </h2>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                    We’re looking for a small set of organisations to shape R.M.S with us.
                                </p>

                                <div className="mb-10">
                                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 mb-6 shadow-sm">
                                        You’re a great fit if:
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            "You manage multiple teams / projects and struggle with clear visibility of capacity.",
                                            "Resource decisions are based on gut feel, spreadsheets or last-minute requests.",
                                            "You want a lightweight but powerful resource planning layer, not a huge enterprise suite."
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start text-lg text-slate-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-3 mt-2.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-slate-500 text-base mb-10 leading-relaxed">
                                    Early access partners influence features, views and integrations, work directly with our product and design team, and receive preferential early-adopter commercial terms.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-0 transition-colors rounded-full px-8 h-12 text-base shadow-lg shadow-purple-500/20">
                                        <Link href="/contact">
                                            Become an R.M.S Design Partner <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="text-slate-700 border-slate-300 bg-white hover:bg-slate-50 hover:text-slate-900 rounded-full px-8 h-12 text-base">
                                        <Link href="/contact">
                                            Show us your current staffing challenges <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Image Component */}
                            <div className="relative h-[500px] w-full flex justify-center items-center">
                                <Image
                                    src="/assets/gear.avif"
                                    alt="R.M.S Configuration"
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
                                    FAQ
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Short answers to common questions.
                                </h2>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Answers to your questions about resource management and capacity planning.
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
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Master Your Capacity?</h2>
                        <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                            Get started with R.M.S today and optimize your most valuable asset — your people.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                                <Link href="/contact">
                                    Try R.M.S <ArrowRight className="ml-2 h-5 w-5" />
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
