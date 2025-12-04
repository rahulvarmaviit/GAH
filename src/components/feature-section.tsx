
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Code, Rocket } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Acknowledgement Hub Services",
  heading = "Accelerate Your Growth with Our Expert Services",
  description = "From strategy to execution, we provide end-to-end solutions to help your business thrive in the digital landscape.",
  tabs = [
    {
      value: "tab-1",
      icon: <Lightbulb className="h-auto w-4 shrink-0" />,
      label: "Strategy & Consulting",
      content: {
        badge: "Strategic Planning",
        title: "Chart a Course for Success.",
        description:
          "Our experts work with you to develop a comprehensive digital strategy, identifying opportunities and creating a roadmap for sustainable growth.",
        buttonText: "Explore Strategies",
        imageSrc:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwd29ya2luZyUyMG9uJTIwYSUyMHByb2plY3R8ZW58MHx8fHwxNzU5NzgxNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Strategy Meeting",
        imageHint: "strategy meeting",
      },
    },
    {
      value: "tab-2",
      icon: <Code className="h-auto w-4 shrink-0" />,
      label: "Development & Implementation",
      content: {
        badge: "Expert Execution",
        title: "Bring Your Vision to Life.",
        description:
          "Our skilled development team builds robust, scalable, and secure solutions tailored to your specific needs, ensuring a seamless launch and integration.",
        buttonText: "View Our Work",
        imageSrc:
          "https://images.unsplash.com/photo-1517694712202-1428bc3cd405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NjAxOTU1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Team working on code",
        imageHint: "team coding",
      },
    },
    {
      value: "tab-3",
      icon: <Rocket className="h-auto w-4 shrink-0" />,
      label: "Growth & Optimization",
      content: {
        badge: "Continuous Improvement",
        title: "Drive Measurable Results.",
        description:
          "We don't just build and launch. We provide ongoing support, analytics, and optimization services to ensure your project achieves its goals and delivers ROI.",
        buttonText: "See Case Studies",
        imageSrc:
          "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc2NDc0MzE3OXww&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Data Analytics Dashboard",
        imageHint: "data analytics",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <Image
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  width={1080}
                  height={1080}
                  className="rounded-xl"
                  data-ai-hint={tab.content.imageHint}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
