
"use client";

import React, { forwardRef, useRef } from "react";
import { Briefcase, Calendar, Check, Lightbulb, ShoppingBag, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function ConnectedEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div
                    className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg p-10"
                    ref={containerRef}
                >
                    <div className="flex size-full flex-col items-stretch justify-between gap-10">
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div1Ref}>
                                <Briefcase />
                            </Circle>
                            <Circle ref={div5Ref}>
                                <Calendar />
                            </Circle>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div2Ref}>
                                <Users />
                            </Circle>
                            <Circle ref={div4Ref} className="size-16 bg-primary text-primary-foreground">
                               <div className="h-8 w-8 bg-purple-300 rounded-full animate-pulse" />
                            </Circle>
                            <Circle ref={div6Ref}>
                                <ShoppingBag />
                            </Circle>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div3Ref}>
                                <Lightbulb />
                            </Circle>
                            <Circle ref={div7Ref}>
                                <TrendingUp />
                            </Circle>
                        </div>
                    </div>

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div1Ref}
                        toRef={div4Ref}
                        curvature={-75}
                        endYOffset={-10}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div2Ref}
                        toRef={div4Ref}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div3Ref}
                        toRef={div4Ref}
                        curvature={75}
                        endYOffset={10}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div5Ref}
                        toRef={div4Ref}
                        curvature={-75}
                        endYOffset={-10}
                        reverse
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div6Ref}
                        toRef={div4Ref}
                        reverse
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div7Ref}
                        toRef={div4Ref}
                        curvature={75}
                        endYOffset={10}
                        reverse
                    />
                </div>
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Connected Ecosystem</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Our platform seamlessly integrates all aspects of your workflow, connecting your services, products, and events in one unified ecosystem.
                    </p>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex items-start">
                            <Check className="h-6 w-6 text-primary mr-3 shrink-0" />
                            <span>Unified platform for all your business needs</span>
                        </li>
                        <li className="flex items-start">
                             <Check className="h-6 w-6 text-primary mr-3 shrink-0" />
                            <span>Real-time synchronization across all services</span>
                        </li>
                        <li className="flex items-start">
                             <Check className="h-6 w-6 text-primary mr-3 shrink-0" />
                            <span>Seamless integration with existing tools</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
