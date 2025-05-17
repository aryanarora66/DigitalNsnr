"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const topics = [
  {
    title: "Planning & Strategy",
    content:
      "We start by understanding your business goals, target audience, and competition to plan an effective app development roadmap. This ensures your app is purposeful and scalable.",
  },
  {
    title: "Design",
    content:
      "Our UI/UX designers create visually stunning and user-friendly interfaces that offer smooth navigation and high engagement across all devices.",
  },
  {
    title: "Development",
    content:
      "Our expert developers bring your vision to life using modern technologies. We ensure your app is fast, secure, and optimized for performance.",
  },
];

export default function BestAppDevelopmentSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16  bg-gradient-to-b from-[#f9d39e] via-white to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/development.jpg"
            alt="App Development"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Our Best App Development</h2>
          <p className="text-gray-700 mb-8">
            We offer custom mobile application development services tailored to your business needs. Our goal is to
            transform your ideas into powerful and scalable digital solutions. From brainstorming to launch, we handle
            every step with precision and creativity.
          </p>

          {/* Accordion Items */}
          <div className="space-y-4 text-black">
            {topics.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleIndex(index)}
                  className="cursor-pointer flex items-center justify-between border-b border-gray-400 pb-2"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600 transition-all duration-300 ease-in-out">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
