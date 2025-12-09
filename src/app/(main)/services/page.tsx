
'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import { HoverEffect } from '@/components/ui/hover-effect';

export default function ServicesPage() {
  const formattedServices = services.map(service => ({
    title: service.title,
    description: service.description,
    link: `/services/${service.slug}`,
  }));

  return (
    <div className="flex flex-col bg-background text-foreground">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 text-center bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4"
          >
            Delivering excellence and innovation through our comprehensive range
            of professional services that drive growth and create value.
          </motion.p>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container">
          <HoverEffect items={formattedServices} />
        </div>
      </main>
    </div>
  );
}
