
'use client';
import React, { useState, useEffect } from 'react';
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MobileNav } from './mobile-nav';
import { Logo } from '../logo';
import Link from 'next/link';

function Navbar({ className, isDarkMode, active, setActive }: { className?: string, isDarkMode?: boolean, active: string | null, setActive: (active: string | null) => void }) {

  const services = [
    {
      title: 'Cloud Solutions',
      href: '/services/cloud-solutions',
      src: PlaceHolderImages.find((img) => img.id === 'service-1')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'service-1')
        ?.imageHint,
      description:
        'Scalable and secure cloud infrastructure to power your applications.',
    },
    {
      title: 'Cyber Security',
      href: '/services/cyber-security',
      src: PlaceHolderImages.find((img) => img.id === 'service-2')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'service-2')
        ?.imageHint,
      description:
        'Protect your digital assets with our advanced threat detection and prevention services.',
    },
    {
      title: 'AI & Machine Learning',
      href: '/services/ai-machine-learning',
      src: PlaceHolderImages.find((img) => img.id === 'service-3')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'service-3')
        ?.imageHint,
      description:
        'Leverage the power of AI to unlock insights and automate processes.',
    },
    {
      title: 'Data Analytics',
      href: '/services/data-analytics',
      src: PlaceHolderImages.find((img) => img.id === 'service-4')?.imageUrl,
      'data-ai-hint': PlaceHolderImages.find((img) => img.id === 'service-4')
        ?.imageHint,
      description:
        'Turn your data into actionable intelligence with our analytics platforms.',
    },
  ];

  const products = [
    {
      title: 'TMS',
      href: '/products/tms-team-management-system',
      src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTk3NzQzNDd8MA&ixlib-rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'team collaboration',
      description: 'One workspace for every team, bringing structure to tasks, projects, and communication.',
    },
    {
      title: 'RMS',
      href: '/products/rms-resource-management-system',
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZXNvdXJjZSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzY1NTc3MTEyfDA&ixlib-rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'resource management',
      description: 'Centralize resources to know who is doing what, where, and when.',
    },
    {
      title: 'CST',
      href: '/products/cst-customer-support-tool',
      src: 'https://images.unsplash.com/photo-1611095782313-0b0a8f3c7f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNzY1NTc3MTY1fDA&ixlib-rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'customer support',
      description: 'Turn support chaos into clarity with tracked, visible, and documented ticket resolution.',
    },
    {
      title: 'WFX',
      href: '/products/wfx-wolfronix',
      src: 'https://images.unsplash.com/photo-1611095790444-1dfa3c8a1f2w?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b3JrZmxvdyUyMGF1dG9tYXRpb258ZW58MHx8fHwxNzY1NTc3MTM4fDA&ixlib-rb-4.1.0&q=80&w=1080',
      'data-ai-hint': 'workflow automation',
      description: 'A multi-layer security foundation that protects your data, access, and operations.',
    },
  ];

  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 transition-transform duration-300', className)}
    >
      <Menu setActive={setActive} isDarkMode={isDarkMode}>
        <div className='flex items-center justify-start'>
          <Logo isDarkMode={isDarkMode} />
        </div>
        <div className="flex items-center justify-center space-x-8">
          <HoveredLink href="/" isDarkMode={isDarkMode}>Home</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Services" isDarkMode={isDarkMode} href="/services">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {services.map((service) =>
                service.src ? (
                  <ProductItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                    src={service.src}
                    description={service.description}
                    data-ai-hint={service['data-ai-hint']}
                    isDarkMode={isDarkMode}
                  />
                ) : null
              )}
              <div className="col-span-2 text-center mt-4">
                <HoveredLink href="/services" className="font-bold text-primary" isDarkMode={isDarkMode}>
                  See all services &rarr;
                </HoveredLink>
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products" isDarkMode={isDarkMode} href="/products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {products.map((product) =>
                product.src ? (
                  <ProductItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                    src={product.src}
                    description={product.description}
                    data-ai-hint={product['data-ai-hint']}
                    isDarkMode={isDarkMode}
                  />
                ) : null
              )}
              <div className="col-span-2 text-center mt-4">
                <HoveredLink href="/products" className="font-bold text-primary" isDarkMode={isDarkMode}>
                  See all products &rarr;
                </HoveredLink>
              </div>
            </div>
          </MenuItem>
          <HoveredLink href="/events" isDarkMode={isDarkMode}>Events</HoveredLink>
          <HoveredLink href="/about" isDarkMode={isDarkMode}>About</HoveredLink>
          <HoveredLink href="/contact" isDarkMode={isDarkMode}>Contact</HoveredLink>
        </div>
      </Menu>
    </div>
  );
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = React.useRef(0);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 10) {
        setActive(null);
      }

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-4 z-[60] bg-transparent"
        onMouseEnter={() => setShowNav(true)}
      />
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        showNav ? "translate-y-0" : "-translate-y-[150px]",
      )}>
        <div className={cn("md:hidden container flex h-16 items-center justify-between shadow-md",
          isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
        )}>
          <Logo />
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <Navbar isDarkMode={!isScrolled} active={active} setActive={setActive} />
        </div>
      </header>
    </>
  );
}
