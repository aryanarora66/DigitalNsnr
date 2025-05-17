"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Story {
  id: number;
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  logo: string;
}

interface ArrowProps {
  onClick?: () => void;
}

export default function SuccessStories() {
  const stories: Story[] = [
    {
      id: 1,
      title: "E-commerce Store Growth",
      description: "Increased monthly revenue by 320% while decreasing cost-per-acquisition by 42% through optimized Shopping campaigns and remarketing.",
      stats: [
        { value: "320%", label: "Revenue Increase" },
        { value: "42%", label: "Lower CPA" },
        { value: "5.8x", label: "ROAS" }
      ],
      logo: "/logos/ecommerce-client.svg"
    },
    {
      id: 2,
      title: "Local Service Provider",
      description: "Drove 85 qualified leads per month at 60% lower cost than previous marketing efforts through geo-targeted Search campaigns.",
      stats: [
        { value: "85", label: "Leads/Month" },
        { value: "60%", label: "Cost Reduction" },
        { value: "3.2x", label: "Conversion Rate" }
      ],
      logo: "/logos/service-client.svg"
    },
    {
      id: 3,
      title: "SaaS Company Expansion",
      description: "Scaled from $15k to $85k monthly ad spend while maintaining 4.5x ROAS through advanced bid strategies and audience targeting.",
      stats: [
        { value: "5.6x", label: "Growth" },
        { value: "4.5x", label: "ROAS" },
        { value: "35%", label: "Lower CPL" }
      ],
      logo: "/logos/saas-client.svg"
    }
  ];

  const CustomPrevArrow = ({ onClick }: ArrowProps) => {
    return (
      <button 
        onClick={onClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
        aria-label="Previous"
      >
        <ArrowLeft className="h-5 w-5 text-gray-700" />
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }: ArrowProps) => {
    return (
      <button 
        onClick={onClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
        aria-label="Next"
      >
        <ArrowRight className="h-5 w-5 text-gray-700" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Ads Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results we&lsquo;ve delivered for businesses like yours.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Slider {...settings}>
            {stories.map((story) => (
              <div key={story.id} className="px-4">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                      <p className="text-gray-600 mb-6">{story.description}</p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-3">Google Ads Solutions Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Search Network</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Remarketing</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Smart Bidding</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-6">
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex justify-center mb-6">
                          <Image 
                            src={story.logo} 
                            alt={`${story.title} logo`}
                            width={64}
                            height={64}
                            className="h-16 w-auto object-contain"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {story.stats.map((stat, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                              <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}