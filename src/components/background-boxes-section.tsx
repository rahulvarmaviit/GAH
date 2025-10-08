
"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BackgroundBoxesSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
            <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h2 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                    Acknowledgement Hub
                </h2>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                    Join us on a journey of innovation and excellence. Let&apos;s
                    build the future together.
                </p>
                <div className="relative z-20 mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">
                        Connect With Us <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
      </div>
    </section>
  );
}
