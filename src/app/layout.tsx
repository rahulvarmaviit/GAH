import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ToastProvider } from '@/components/toast-provider';
import { ClientLayout } from '@/components/client-layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Acknowledgement Hub',
  description:
    'A futuristic, modern, and sleek website for Acknowledgement Hub.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          poppins.variable
        )}
      >
        <ToastProvider>
          <ClientLayout>{children}</ClientLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
