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

export default function FacebookAdsSuccess() {
  const stories: Story[] = [
    {
      id: 1,
      title: "E-Commerce Brand",
      description: "Drove $320,000 in sales with a 5.2x ROAS using dynamic product ads and lookalike audiences.",
      stats: [
        { value: "5.2x", label: "ROAS" },
        { value: "$320K", label: "Revenue" },
        { value: "$1.20", label: "Cost Per Purchase" }
      ],
      logo: "/logos/ecommerce-client.svg"
    },
    {
      id: 2,
      title: "Local Service Business",
      description: "Generated 85 qualified leads/month at $12/lead with hyper-local targeting.",
      stats: [
        { value: "85", label: "Leads/Month" },
        { value: "$12", label: "Cost Per Lead" },
        { value: "42%", label: "Conversion Rate" }
      ],
      logo: "/logos/service-client.svg"
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Achieved 15,000 installs at $0.80 CPI with engaging video ads and app retargeting.",
      stats: [
        { value: "15K", label: "Installs" },
        { value: "$0.80", label: "CPI" },
        { value: "4.8★", label: "App Rating" }
      ],
      logo: "/logos/app-client.svg"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Facebook Ads <span className="text-blue-600">Success Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results we&apos;ve delivered for businesses like yours.
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
                        <h4 className="font-semibold text-blue-700 mb-3">Strategies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Lookalike Audiences</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Video Ads</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Retargeting</span>
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