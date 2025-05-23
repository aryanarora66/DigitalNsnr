"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { JSX } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(238, 165, 62, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-[#eea53e]/30 hover:border-[#f9c76b] transition-all duration-300"
        aria-label="Previous"
      >
        <ArrowLeft className="h-5 w-5 text-[#eea53e]" />
      </motion.button>
    );
  };

  const CustomNextArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(238, 165, 62, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-[#eea53e]/30 hover:border-[#f9c76b] transition-all duration-300"
        aria-label="Next"
      >
        <ArrowRight className="h-5 w-5 text-[#eea53e]" />
      </motion.button>
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
    appendDots: (dots: JSX.Element) => (
      <div className="flex justify-center gap-2 mt-6">{dots}</div>
    ),
    customPaging: (i: number) => (
      <button
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === 0
            ? "bg-gradient-to-r from-[#eea53e] to-[#f9c76b] scale-125"
            : "bg-white/30 hover:bg-white/50"
        }`}
      />
    ),
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
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Web Development{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects delivering real business results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <Slider {...settings}>
            {stories.map((story) => (
              <div key={story.id} className="px-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 hover:border-[#eea53e]/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                      <p className="text-gray-300 mb-6">{story.description}</p>
                      <div className="bg-[#eea53e]/10 p-4 rounded-lg border border-[#eea53e]/20">
                        <h4 className="font-semibold text-[#f9c76b] mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Node.js", "GraphQL"].map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="bg-[#eea53e]/20 text-[#f9c76b] px-3 py-1 rounded-full text-xs font-medium border border-[#eea53e]/30"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-6">
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex justify-center mb-6">
                          <Image
                            src={story.logo}
                            alt={`${story.title} logo`}
                            width={200}
                            height={64}
                            className="h-16 w-auto object-contain transition-opacity duration-500"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {story.stats.map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              whileHover={{
                                y: -5,
                                backgroundColor: "rgba(238, 165, 62, 0.2)"
                              }}
                              className="bg-white/5 p-4 rounded-lg text-center border border-white/10 hover:border-[#eea53e]/30 transition-all duration-300"
                            >
                              <div className="text-2xl font-bold bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-400">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
