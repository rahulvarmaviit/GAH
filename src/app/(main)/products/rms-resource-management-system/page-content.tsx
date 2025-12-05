
'use client';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Eye, Zap, ArrowRight, GanttChartSquare, Package, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const whyChooseRms = [
    {
        icon: <Package className="h-8 w-8 text-accent" />,
        title: 'All your resources in one place',
        description: 'No more scattered sheets or isolated tools.',
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-accent" />,
        title: 'Better planning, less guesswork',
        description: 'Allocate people and resources based on real availability and needs.',
    },
    {
        icon: <Eye className="h-8 w-8 text-accent" />,
        title: 'Transparency across teams',
        description: 'Everyone understands which resources are booked, idle, or overloaded.',
    },
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: 'Adaptable to your org structure',
        description: 'Works with departments, squads, locations, or client-based setups.',
    },
];

const howItWorks = [
    {
        step: 1,
        title: 'Add your people & resources',
        description: 'Employees, tools, locations, time blocks — everything in one system.'
    },
    {
        step: 2,
        title: 'Define roles & responsibilities',
        description: 'Map who can access, view, or edit specific resource pools.'
    },
    {
        step: 3,
        title: 'Allocate & track usage',
        description: 'Assign resources to teams, projects, or tasks with clear timelines.'
    },
    {
        step: 4,
        title: 'Analyze & optimize',
        description: 'See where resources are underused or overloaded and adjust accordingly.'
    },
];

const features = [
    'Centralized resource directory',
    'Role-aware visibility and controls',
    'Planning and allocation workflows',
    'Utilization insights and history',
    'Supports multi-project, multi-team environments',
];

const faqs = [
    {
        question: 'Is R.M.S only for human resources?',
        answer: 'No. It can handle people, tools, infrastructure, and time-based capacities.',
    },
    {
        question: 'Can I integrate existing data?',
        answer: 'Yes, R.M.S is designed to work with imported or synced data structures.',
    },
    {
        question: 'Can different teams see different resource sets?',
        answer: 'Yes, visibility can be structured by role and department.',
    },
];


export function RmsPageContent() {
  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="relative container z-10">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-accent animate-gradient">
                R.M.S – Smarter resources. Stronger results.
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto max-w-[800px] text-slate-300/80 md:text-xl mt-6">
                R.M.S centralizes people, time, and operational resources so you always know who is doing what, where, and when. Build a predictable, well-utilized organization without drowning in spreadsheets.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            Explore R.M.S
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                        <Link href="/contact">
                            Talk to Sales
                        </Link>
                    </Button>
            </motion.div>
        </div>
      </header>

      <main className="py-20 md:py-24">
        <div className="container space-y-24">
            {/* Why Choose R.M.S */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why Choose R.M.S</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseRms.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 p-6 rounded-2xl border border-primary/20 text-center flex flex-col items-center"
                        >
                            <div className="bg-primary/10 p-4 rounded-full mb-4 border border-primary/20">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-300/80">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            {/* How It Works */}
            <section>
                 <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
                </div>
                <div className="relative grid md:grid-cols-4 gap-8">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent hidden md:block" style={{clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'}}></div>

                    {howItWorks.map((step, index) => (
                         <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-slate-900 p-6 rounded-2xl border border-slate-800"
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl border-4 border-black">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 mt-8">{step.title}</h3>
                            <p className="text-slate-400">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="bg-primary/5 p-12 rounded-2xl border border-primary/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="text-4xl font-bold text-primary mb-6">Core Features</h2>
                         <p className="text-lg text-slate-300/90 leading-relaxed mb-6">Everything you need to manage your company's resources with efficiency and foresight.</p>
                    </div>
                     <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-lg text-slate-300">
                                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            
            {/* FAQs */}
            <section>
                <h2 className="text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index+1}`} className="bg-slate-900/80 border-slate-800 rounded-lg mb-4 px-6">
                            <AccordionTrigger className="text-lg text-white hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-slate-300/80">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
            
            {/* Final CTA */}
            <section className="text-center bg-gradient-to-r from-primary/10 via-transparent to-primary/10 py-20 rounded-3xl border border-primary/20">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Resources?</h2>
                <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                    Get a demo of R.M.S today and see how you can build a more efficient and predictable organization.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            Explore R.M.S <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                        <Link href="/products">
                            Explore Other Products
                        </Link>
                    </Button>
                </div>
            </section>

        </div>
      </main>
    </div>
  );
}
