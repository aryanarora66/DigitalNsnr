"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Paid Ad Solutions",
    description:
      "We specialize in crafting strategic paid ad campaigns to drive targeted traffic and increase conversions across Google Ads, Facebook Ads, and more.",
    image: "/add.jpg",
  },
  {
    title: "Social Media Marketing",
    description:
      "Boost your brand visibility through customized social campaigns on platforms like Instagram, Facebook, and LinkedIn designed to engage and convert.",
    image: "/social.jpg",
  },
  {
    title: "Content Marketing",
    description:
      "Our content strategies are designed to inform, entertain, and convert your audience through blog posts, infographics, videos, and SEO content.",
    image: "/content.jpg",
  },
  {
    title: "Marketing Automation",
    description:
      "Streamline your marketing with AI-driven automation tools. We implement lead nurturing, email flows, CRM integrations, and behavior-based triggers.",
    image: "/automation.jpg",
  },
];

export default function MarketingServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="w-full bg-[#f7f5f2] text-[#0f172a] py-16">
      {/* Top Center Heading */}
      <div className="text-center mb-12 px-4">
        <h3 className="text-sm uppercase tracking-widest text-black font-semibold">
          How We Grow Your Brand Awareness & Customer Base
        </h3>
        <h2 className="text-4xl font-bold text-[#0f172a] mt-2">
          Digital Marketing Services
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - List */}
        <div className="md:w-1/2 p-6 md:p-12">
          <ul className="space-y-6">
            {services.map((service, idx) => (
              <li
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer font-semibold text-xl flex items-center gap-3 transition-all duration-300 ${
                  idx === activeIndex
                    ? "text-[#eea53e]"
                    : "text-gray-800 hover:text-[#f7cd92]"
                }`}
              >
                <span
                  className={`text-3xl font-bold ${
                    idx === activeIndex ? "text-[#eea53e]" : "text-gray-400"
                  }`}
                >
                  {`0${idx + 1}`}
                </span>
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Description and Image */}
        <div className="md:w-1/2 relative bg-[#0f172a] text-white flex items-center justify-center p-8 overflow-hidden min-h-[400px]">
          <Image
            src={activeService.image}
            alt={activeService.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-30"
          />
          <div className="relative z-10 max-w-lg">
            <p className="text-lg leading-relaxed">{activeService.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
