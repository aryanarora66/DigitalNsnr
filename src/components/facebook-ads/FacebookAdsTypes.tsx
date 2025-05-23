"use client";

import { Smartphone, Video, ShoppingCart, ThumbsUp, MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { JSX, ReactNode } from 'react';

interface AdType {
  icon: ReactNode;
  title: string;
  description: string;
  bestFor: string[];
}

export default function FacebookAdsTypes(): JSX.Element {
  const adTypes: AdType[] = [
    {
      icon: <Smartphone className="h-8 w-8 text-[#eea53e]" />,
      title: "Feed Ads",
      description: "Native ads in Facebook/Instagram feeds.",
      bestFor: ["Brand awareness", "Traffic", "Conversions"]
    },
    {
      icon: <Video className="h-8 w-8 text-[#eea53e]" />,
      title: "Stories Ads",
      description: "Full-screen vertical videos/photos.",
      bestFor: ["Engagement", "Swipe-ups", "App installs"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#eea53e]" />,
      title: "Carousel Ads",
      description: "Scrollable multi-image/video ads.",
      bestFor: ["Product catalogs", "Multi-offer promotions"]
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-[#eea53e]" />,
      title: "Collection Ads",
      description: "Instant storefront experience.",
      bestFor: ["E-commerce", "Mobile shopping"]
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#eea53e]" />,
      title: "Local Awareness Ads",
      description: "Target users near your business.",
      bestFor: ["Foot traffic", "Local services"]
    },
    {
      icon: <Mail className="h-8 w-8 text-[#eea53e]" />,
      title: "Lead Ads",
      description: "Pre-filled forms for easy signups.",
      bestFor: ["Lead generation", "Newsletters"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
            Facebook & Instagram{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text relative">
              Ad Types
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70"></span>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-bold">
            Choose the right format for your campaign goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adTypes.map((adType, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(238, 165, 62, 0.3)"
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#eea53e]/20 p-3 rounded-lg mr-4"
                >
                  {adType.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">{adType.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{adType.description}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#f9c76b] mb-3">BEST FOR:</h4>
                <ul className="flex flex-wrap gap-2">
                  {adType.bestFor.map((useCase, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#eea53e]/20 text-[#f9c76b] px-3 py-1 rounded-full text-xs font-medium border border-[#eea53e]/30"
                    >
                      {useCase}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] hover:from-[#f9c76b] hover:to-[#eea53e] rounded-lg text-gray-900 font-black text-lg shadow-lg hover:shadow-[#eea53e]/40 transition-all duration-300"
          >
            Get a Custom Ad Strategy
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
