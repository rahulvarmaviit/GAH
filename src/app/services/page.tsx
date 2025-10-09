import Image from 'next/image';
import { ArrowRight, BrainCircuit, Cloud, ShieldCheck, AreaChart, Palette, Megaphone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your applications, ensuring reliability and performance.',
    icon: <Cloud className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-1'),
  },
  {
    title: 'Cyber Security',
    description: 'Protect your digital assets with our advanced threat detection and prevention services.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-2'),
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage the power of AI to unlock insights, automate processes, and drive innovation.',
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-3'),
  },
  {
    title: 'Data Analytics',
    description: 'Turn your data into actionable intelligence with our comprehensive analytics platforms.',
    icon: <AreaChart className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-4'),
  },
  {
    title: 'Digital Marketing',
    description: 'Expand your reach and engage your audience with data-driven marketing strategies.',
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-5'),
  },
  {
    title: 'UX/UI Design',
    description: 'Create beautiful, intuitive, and user-centric digital experiences that delight users.',
    icon: <Palette className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-6'),
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-background">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 text-center particle-hero">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            Delivering excellence and innovation through our comprehensive range
            of professional services.
          </p>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group flex flex-col justify-between overflow-hidden rounded-lg border border-transparent bg-slate-900 text-slate-100 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50"
              >
                <CardHeader className="flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-300">
                    {service.description}
                  </p>
                </CardContent>
                <CardContent>
                  <div className="flex items-center text-accent font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
