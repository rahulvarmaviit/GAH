
'use client';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Eye, Zap, ArrowRight, MessageSquare, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Timeline } from '@/components/ui/timeline';

const whyChooseCst = [
    {
        icon: <Zap className="h-8 w-8 text-accent" />,
        title: 'Clear ticket lifecycle',
        description: 'No more “lost” or “forgotten” issues.',
    },
    {
        icon: <MessageSquare className="h-8 w-8 text-accent" />,
        title: 'Structured communication',
        description: 'Customers always know what’s happening with their request.',
    },
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: 'Team-friendly workflows',
        description: 'Multiple agents can collaborate without confusion.',
    },
    {
        icon: <Shield className="h-8 w-8 text-accent" />,
        title: 'Built for scale',
        description: 'Works for small support desks and large, multi-queue environments.',
    },
];

const howItWorks = [
    {
        title: 'Step 1: Raise',
        content: <p className="text-slate-300">Customer raises a ticket through web, app, or integrated channels.</p>
    },
    {
        title: 'Step 2: Categorize',
        content: <p className="text-slate-300">Ticket is categorized by issue type, priority, and department.</p>
    },
    {
        title: 'Step 3: Resolve',
        content: <p className="text-slate-300">Agent picks it up, responds, asks questions, and works toward resolution.</p>
    },
    {
        title: 'Step 4: Follow-up',
        content: <p className="text-slate-300">Final outcome is recorded and shared, with optional follow-up.</p>
    },
];

const features = [
    'Central ticket dashboard',
    'Real-time status updates',
    'Assignment & escalation flows',
    'Conversation history for every issue',
    'Follow-up reminders and closure notes',
];

const faqs = [
    {
        question: 'Can customers track their own tickets?',
        answer: 'Yes, they can view live status and history.',
    },
    {
        question: 'Does C.S.T support multiple support teams?',
        answer: 'Yes, you can have multiple queues or departments.',
    },
    {
        question: 'Can tickets be reassigned or escalated?',
        answer: 'Yes, C.S.T supports re-routing and escalation rules.',
    },
];


export function CstPageContent() {
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
                C.S.T – Every query, confidently resolved.
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto max-w-[800px] text-slate-300/80 md:text-xl mt-6">
                C.S.T helps support teams turn chaos into clarity. From ticket creation to resolution and follow-up, everything is tracked, visible, and well-documented.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            See C.S.T Live
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                        <Link href="/contact">
                            Book a Support Demo
                        </Link>
                    </Button>
            </motion.div>
        </div>
      </header>

      <main className="py-20 md:py-24">
        <div className="container space-y-24">
            {/* Why Choose C.S.T */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why Choose C.S.T</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseCst.map((item, index) => (
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
                <Timeline data={howItWorks} />
            </section>

            {/* Features */}
            <section className="bg-primary/5 p-12 rounded-2xl border border-primary/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="text-4xl font-bold text-primary mb-6">Core Features</h2>
                         <p className="text-lg text-slate-300/90 leading-relaxed mb-6">Everything you need to deliver world-class customer support, without the complexity.</p>
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
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Enhance Your Customer Support?</h2>
                <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
                    Discover how C.S.T can transform your support operations and boost customer satisfaction.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                            See C.S.T Live <ArrowRight className="ml-2 h-5 w-5" />
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
