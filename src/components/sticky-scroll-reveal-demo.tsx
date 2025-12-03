
"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Our Mission",
    description:
      "To empower businesses and individuals through transformative technology, fostering a culture of continuous innovation and growth. We strive to create solutions that are not only powerful but also intuitive and accessible to all.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Our Mission
      </div>
    ),
  },
  {
    title: "Our Vision",
    description:
      "We envision a future where technology seamlessly integrates with daily life, solving complex challenges and unlocking human potential. Our goal is to be at the forefront of this change, building a smarter, more connected world.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://picsum.photos/seed/vision/300/300"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Our Vision"
        />
      </div>
    ),
  },
  {
    title: "Our Passion",
    description:
      "Our passion lies in problem-solving and creating elegant, efficient, and impactful solutions. We are driven by the desire to make a difference and contribute to a better technological landscape for everyone.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Our Passion
      </div>
    ),
  },
  {
    title: "Our Story",
    description:
      "Founded in a small garage in 2018, Acknowledgement Hub started with a simple yet powerful idea: to revolutionize the way we interact with technology. Our founders, a group of passionate engineers and designers, believed that technology should be a seamless extension of human capability, not a barrier.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Our Story
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4 bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
