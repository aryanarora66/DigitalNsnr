"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image'; // Step 1: Import next/image

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function InfluencerSuccess() {
  const stories = [
    {
      id: 1,
      title: "Beauty Brand Campaign",
      description: "Generated $1.2M in sales through micro-influencer UGC content",
      stats: [
        { value: "1.2M", label: "Revenue" },
        { value: "7.8x", label: "ROAS" },
        { value: "1.4M", label: "Reach" }
      ],
      logo: "/logos/beauty-brand.svg" // Ensure this path is relative to the `public` directory
    },
    {
      id: 2,
      title: "Apparel Launch",
      description: "Achieved 82% engagement rate with nano-influencer TikTok campaign",
      stats: [
        { value: "82%", label: "Engagement" },
        { value: "24K", label: "Followers Gained" },
        { value: "1.2K", label: "UGC Assets" }
      ],
      logo: "/logos/apparel-brand.svg" // Ensure this path is relative to the `public` directory
    },
    {
      id: 3,
      title: "Tech Product Launch",
      description: "Drove 14,000 pre-orders through YouTube creator partnerships",
      stats: [
        { value: "14K", label: "Pre-Orders" },
        { value: "9.2x", label: "ROI" },
        { value: "2.3M", label: "Impressions" }
      ],
      logo: "/logos/tech-brand.svg" // Ensure this path is relative to the `public` directory
    }
  ];

  const CustomPrevArrow = (props: ArrowProps) => {
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

  const CustomNextArrow = (props: ArrowProps) => {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Influencer Marketing <span className="text-purple-600">Success Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real campaigns delivering measurable business impact
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
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-3">Strategies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Tiered Influencers</span>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">UGC Repurposing</span>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Affiliate Links</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-6">
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex justify-center mb-6">
                          {/* Step 2, 3 & 4: Replace img with Image and add props */}
                          <Image 
                            src={story.logo} 
                            alt="Client logo" 
                            width={200} // Or a more appropriate width for your logos
                            height={64}  // Corresponds to h-16 (4rem = 64px)
                            className="object-contain" // Keeps the contain behavior
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {story.stats.map((stat, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                              <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
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