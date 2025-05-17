"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Paid Ad Solutions",
    description:
      "We specialize in crafting strategic paid ad campaigns to drive targeted traffic and increase conversions across Google Ads, Facebook Ads, and more.",
    image: "/add.jpg",
    icon: "📈",
  },
  {
    title: "Social Media Marketing",
    description:
      "Boost your brand visibility through customized social campaigns on platforms like Instagram, Facebook, and LinkedIn designed to engage and convert.",
    image: "/social.jpg",
    icon: "🔗",
  },
  {
    title: "Content Marketing",
    description:
      "Our content strategies are designed to inform, entertain, and convert your audience through blog posts, infographics, videos, and SEO content.",
    image: "/content.jpg",
    icon: "📝",
  },
  {
    title: "Marketing Automation",
    description:
      "Streamline your marketing with AI-driven automation tools. We implement lead nurturing, email flows, CRM integrations, and behavior-based triggers.",
    image: "/automation.jpg",
    icon: "⚙️",
  },
];

export default function MarketingServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const activeService = services[activeIndex];

  // Auto-rotate through services every 5 seconds if autoPlay is enabled
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setPreviousIndex(activeIndex);
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, autoPlay]);

  const handleServiceChange = (idx:number) => {
    if (idx !== activeIndex) {
      setPreviousIndex(activeIndex);
      setActiveIndex(idx);
      setAutoPlay(false); // Disable autoplay when user manually selects
    }
  };

  // Direction of transition animation based on index change
  const getDirection = () => {
    if (previousIndex === services.length - 1 && activeIndex === 0) return 1;
    if (previousIndex === 0 && activeIndex === services.length - 1) return -1;
    return activeIndex > previousIndex ? 1 : -1;
  };

  return (
    <section className="w-full bg-[#f7f5f2] text-[#0f172a] py-16 overflow-hidden">
      {/* Top Center Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 px-4"
      >
        <h3 className="text-sm uppercase tracking-widest text-black font-semibold">
          How We Grow Your Brand Awareness & Customer Base
        </h3>
        <h2 className="text-4xl font-bold text-[#0f172a] mt-2">
          Digital Marketing Services
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Left Side - List */}
        <div className="md:w-1/2 p-6 md:p-12">
          <ul className="space-y-6">
            {services.map((service, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onClick={() => handleServiceChange(idx)}
                className={`cursor-pointer font-semibold text-xl flex items-center gap-3 transition-all duration-300 p-3 rounded-lg ${
                  idx === activeIndex
                    ? "bg-white shadow-md text-[#eea53e]"
                    : "text-gray-800 hover:text-[#f7cd92] hover:bg-white/50"
                }`}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    idx === activeIndex ? "bg-[#eea53e] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                  animate={{ 
                    scale: idx === activeIndex ? [1, 1.1, 1] : 1,
                    backgroundColor: idx === activeIndex ? "#eea53e" : "#e2e8f0"
                  }}
                  transition={{ 
                    scale: { 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 2 
                    },
                    backgroundColor: { duration: 0.3 }
                  }}
                >
                  <span className="text-xl">{service.icon}</span>
                </motion.div>
                <div>
                  <span className="block">{service.title}</span>
                  {idx === activeIndex && (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm font-normal text-gray-600 mt-1 block"
                    >
                      Select to view details
                    </motion.span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
          
          {/* Progress Indicators */}
          <div className="flex mt-8 space-x-2 justify-center md:justify-start">
            {services.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleServiceChange(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === activeIndex ? "bg-[#eea53e]" : "bg-gray-300"
                }`}
                animate={{
                  scale: idx === activeIndex ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  scale: {
                    duration: 1.5,
                    repeat: idx === activeIndex ? Infinity : 0,
                    repeatType: "reverse",
                  },
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Description and Image */}
        <div className="md:w-1/2 relative bg-[#0f172a] text-white flex items-center justify-center p-8 overflow-hidden min-h-[450px] rounded-xl shadow-xl">
          {/* Static background pattern */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
          </div>

          {/* Animated image overlay */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: getDirection() * 100 }}
              animate={{ opacity: 0.4, x: 0 }}
              exit={{ opacity: 0, x: getDirection() * -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 z-1"
            >
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 max-w-lg bg-[#0f172a]/70 p-6 rounded-lg backdrop-blur-sm"
            >
              <motion.h3
                className="text-2xl font-bold mb-4 text-[#eea53e]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {activeService.title}
              </motion.h3>
              
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {activeService.description}
              </motion.p>
              
              <motion.button
                className="mt-6 px-6 py-2 bg-[#eea53e] text-[#0f172a] font-semibold rounded-lg hover:bg-[#f7cd92] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </AnimatePresence>
          
          {/* Auto-rotate control button */}
          <motion.button
            className="absolute bottom-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            onClick={() => setAutoPlay(!autoPlay)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {autoPlay ? (
              <span className="text-lg">⏸️</span>
            ) : (
              <span className="text-lg">▶️</span>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
}