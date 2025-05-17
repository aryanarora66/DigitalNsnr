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

export default function SEOSuccessStories() {
  const stories: Story[] = [
    {
      id: 1,
      title: "E-Commerce Store",
      description: "Increased organic traffic by 427% and revenue by 320% in 9 months with targeted product page optimizations.",
      stats: [
        { value: "427%", label: "Traffic Growth" },
        { value: "320%", label: "Revenue Increase" },
        { value: "Page 1", label: "For 85 Keywords" }
      ],
      logo: "/logos/ecommerce-client.svg"
    },
    {
      id: 2,
      title: "Local Service Business",
      description: "Ranked #1 in Google Maps for 12 high-value keywords, driving 65 leads/month from local searches.",
      stats: [
        { value: "#1", label: "Google Maps" },
        { value: "65", label: "Leads/Month" },
        { value: "4.8★", label: "Review Score" }
      ],
      logo: "/logos/service-client.svg"
    },
    {
      id: 3,
      title: "B2B SaaS Company",
      description: "Grew organic signups by 220% with technical SEO fixes and content cluster strategy.",
      stats: [
        { value: "220%", label: "More Signups" },
        { value: "3.5x", label: "ROI" },
        { value: "1,200", label: "Backlinks Gained" }
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SEO <span className="text-blue-600">Success Stories</span></h2>
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
                      <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: story.description }} />
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-3">SEO Strategies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Keyword Optimization</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Technical SEO</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Content Strategy</span>
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