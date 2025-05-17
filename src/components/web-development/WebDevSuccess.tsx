"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

// Define a type for the props of custom arrow components
interface CustomArrowProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function WebDevSuccess() {
  const stories = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Built a custom Shopify Plus store that increased conversions by 65% and reduced load time by 3.5 seconds.",
      stats: [
        { value: "65%", label: "Conversion Increase" },
        { value: "3.5s", label: "Faster Load" },
        { value: "$2.4M", label: "First Year Revenue" }
      ],
      logo: "/logos/ecommerce-client.svg"
    },
    {
      id: 2,
      title: "SaaS Application",
      description: "Developed a React-based dashboard with real-time analytics that reduced server costs by 40%.",
      stats: [
        { value: "40%", label: "Cost Reduction" },
        { value: "10x", label: "Faster Rendering" },
        { value: "4.8★", label: "User Rating" }
      ],
      logo: "/logos/saas-client.svg"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Created a HIPAA-compliant patient portal with secure telehealth features serving 15,000+ users.",
      stats: [
        { value: "15K", label: "Active Users" },
        { value: "99.9%", label: "Uptime" },
        { value: "A+", label: "Security Grade" }
      ],
      logo: "/logos/healthcare-client.svg"
    }
  ];

  const CustomPrevArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
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

  const CustomNextArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Development <span className="text-blue-600">Success Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects delivering real business results.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Slider {...settings}>
            {stories.map((story) => (
              <div key={story.id} className="px-4">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                      <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: story.description }} />
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">React</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Node.js</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">GraphQL</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-6">
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex justify-center mb-6">
                          {/* Replaced <img> with next/image <Image /> */}
                          <div className="h-16 relative"> {/* Wrapper to constrain height if aspect ratio of SVG is very wide */}
                            <Image
                              src={story.logo}
                              alt={`${story.title} client logo`}
                              fill // Use fill to make the image responsive within the parent
                              style={{ objectFit: "contain" }} // Equivalent to Tailwind's object-contain
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {story.stats.map((stat, i) => (
                            <div key={i} className="bg-white p-3 rounded-lg text-center shadow-sm">
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