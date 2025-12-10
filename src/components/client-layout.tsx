'use client';

import { useState, useEffect } from 'react';
import { SiteHeader } from './layout/site-header';
import { SiteFooter } from './layout/site-footer';
import { AiLoader } from './ui/ai-loader';
import { MarqueeDemo2 } from './marquee-demo';
import { BackgroundBoxesSection } from './background-boxes-section';
import { usePathname } from 'next/navigation';

const noHeaderFooterRoutes = [
  '/admin',
  '/login'
]

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const isFullPage = noHeaderFooterRoutes.some(route => pathname.startsWith(route));


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AiLoader text="Acknowledgement Hub" />;
  }
  
  if (isFullPage) {
    return <main>{children}</main>;
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <MarqueeDemo2 />
      <BackgroundBoxesSection />
      <SiteFooter />
    </div>
  );
}
