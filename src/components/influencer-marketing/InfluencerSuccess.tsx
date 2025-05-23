"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { JSX, useState } from "react";

interface Story {
  id: number;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  logo: string;
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function InfluencerSuccess(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories: Story[] = [
    {
      id: 1,
      title: "Beauty Brand Campaign",
      description: "Generated $1.2M in sales through micro-influencer UGC content",
      stats: [
        { value: "1.2M", label: "Revenue" },
        { value: "7.8x", label: "ROAS" },
        { value: "1.4M", label: "Reach" }
      ],
      logo: "/logos/beauty-brand.svg"
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
      logo: "/logos/apparel-brand.svg"
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
      logo: "/logos/tech-brand.svg"
    }
  ];

  const CustomPrevArrow = ({ onClick }: ArrowProps) => (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "rgba(249,199,107,0.2)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-[#eea53e]/30 hover:border-[#f9c76b] transition-all duration-300"
      aria-label="Previous"
    >
      <ArrowLeft className="h-5 w-5 text-[#eea53e]" />
    </motion.button>
  );

  const CustomNextArrow = ({ onClick }: ArrowProps) => (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "rgba(249,199,107,0.2)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-[#eea53e]/30 hover:border-[#f9c76b] transition-all duration-300"
      aria-label="Next"
    >
      <ArrowRight className="h-5 w-5 text-[#eea53e]" />
    </motion.button>
  );

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
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [{ breakpoint: 1024, settings: { arrows: false } }],
    appendDots: (dots: JSX.Element) => (
      <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
    ),
    customPaging: (i: number) => (
      <button
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide
            ? "bg-gradient-to-r from-[#eea53e] to-[#f9c76b] scale-125"
            : "bg-white/30 hover:bg-white/50"
        }`}
      />
    ),
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
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
            Influencer Marketing{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-bold">
            Real campaigns delivering measurable business impact
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
                      <h3 className="text-2xl font-extrabold text-white mb-4">
                        {story.title}
                      </h3>
                      <p className="text-white/80 mb-6">{story.description}</p>
                      <div className="bg-[#eea53e]/10 p-4 rounded-lg border border-[#eea53e]/20">
                        <h4 className="font-semibold text-[#f9c76b] mb-3">
                          Strategies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["Tiered Influencers", "UGC Repurposing", "Affiliate Links"].map(
                            (strat, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="bg-[#eea53e]/20 text-[#f9c76b] px-3 py-1 rounded-full text-xs font-medium border border-[#eea53e]/30"
                              >
                                {strat}
                              </motion.span>
                            )
                          )}
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
                            className="h-16 w-auto object-contain"
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
                                backgroundColor: "rgba(238,165,62,0.2)",
                              }}
                              className="bg-white/5 p-4 rounded-lg text-center border border-white/10 hover:border-[#eea53e]/30 transition-all duration-300"
                            >
                              <div className="text-2xl font-extrabold bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-300">
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
