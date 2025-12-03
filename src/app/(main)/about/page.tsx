
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import StickyScrollRevealDemo from '@/components/sticky-scroll-reveal-demo';

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Founder & CEO',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-1'),
  },
  {
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-2'),
  },
  {
    name: 'Alex Rivera',
    role: 'Director of Innovation',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-3'),
  },
  {
    name: 'Jasmine Patel',
    role: 'Lead Product Strategist',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-4'),
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background">
      <header className="h-[80vh] flex items-center justify-center text-center bg-black">
        <div className="container">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient">
            We are Global Acknowledgment Hub
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4">
            Innovators, dreamers, and builders dedicated to pushing the boundaries of what&apos;s possible.
          </p>
        </div>
      </header>

      <main className="flex-1">
        
        <StickyScrollRevealDemo />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The brilliant minds behind our success. We are a collective of passionate individuals committed to excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                  {member.avatar && (
                    <Image
                      src={member.avatar.imageUrl}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={member.avatar.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <div className="mt-4 flex space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link href="#" className="text-white/80 hover:text-primary">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-white/80 hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-white/80 hover:text-primary">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
