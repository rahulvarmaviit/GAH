import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  isDarkMode?: boolean;
};

export function Logo({ className, isDarkMode }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold',
        isDarkMode ? 'text-white' : 'text-foreground',
        className
      )}
    >
      <Image
        src="/assets/images/akh logo.png"
        alt="Acknowledgement Hub Logo"
        width={48}
        height={48}
        className="h-8 w-8"
      />
      <span>Acknowledgement Hub</span>
    </Link>
  );
}
