
"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "TMS",
    date: "Jan 2024",
    content: "An autonomous drone with AI-powered flight and cinematic capabilities.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "RMS",
    date: "Feb 2024",
    content: "A revolutionary smartwatch featuring a holographic interface and advanced biometrics.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "CST",
    date: "Mar 2024",
    content: "Immersive virtual reality headset with neural feedback for unparalleled realism.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "WFX",
    date: "May 2024",
    content: "A central smart home hub that learns and adapts to your lifestyle.",
    category: "Release",
    icon: Clock,
    relatedIds: [1, 3],
    status: "pending" as const,
    energy: 30,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
};
