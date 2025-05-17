'use client';

import { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Digital Marketing Strategy',
    description:
      'We craft comprehensive marketing strategies tailored to your business objectives and audience.',
    image: '/stadi2.jpg',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description:
      'Improve your search visibility, drive more traffic, and boost conversions with our expert SEO services.',
    image: '/ranking.jpg',
  },
  {
    title: 'Pay-Per-Click Advertising (PPC)',
    description:
      'Maximize ROI with targeted PPC campaigns managed by our certified advertising specialists.',
    image: '/ppc.jpg',
  },
  {
    title: 'Social Media & Email Marketing',
    description:
      'Engage audiences, build brand loyalty, and drive sales through strategic social and email marketing.',
    image: '/email.jpg',
  },
];

export default function DigitalMarketingGlance() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className=" bg-white pt-24 pb-0 relative">
      {/* Heading */}
      <div className="container mx-auto px-4 mb-10 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
          Digital Marketing Services at a Glance
        </h2>
      </div>

      {/* Cards Section with Background Image */}
      <div className="relative z-10 w-full">
        <div className="relative w-full h-[400px] lg:h-[440px] border-b border-gray-700">
          {/* Only apply background image to cards section */}
          <div className="absolute inset-0 z-0">
            {hoveredIndex !== null && (
              <Image
                src={services[hoveredIndex].image}
                alt="Service Background"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-700 ease-in-out"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Transparent Cards over image */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col justify-center items-center px-6 py-8 text-white transition-all duration-500 cursor-pointer h-full bg-transparent border border-white/20"
              >
                {/* Green number before title */}
                <h3 className="text-xl md:text-2xl font-semibold text-center flex items-center gap-2">
                  <span className="text-[#eea53e]">{index + 1}.</span>
                  {service.title}
                </h3>

                {hoveredIndex === index && (
                  <p className="mt-3 text-sm md:text-base text-center max-w-xs">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
