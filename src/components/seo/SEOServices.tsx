"use client";

import { Search, Code, FileText, MapPin, ShoppingCart, Monitor } from 'lucide-react';
import { motion } from "framer-motion";
import { JSX } from "react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  bestFor: string[];
}

export default function SEOServices(): JSX.Element {
  const services: Service[] = [
    {
      icon: <Search className="h-8 w-8 text-[#eea53e]" />,
      title: "Keyword Research",
      description: "Identify high-value, low-competition keywords to target.",
      bestFor: ["Content strategy", "Blog optimization", "Ranking opportunities"]
    },
    {
      icon: <Code className="h-8 w-8 text-[#eea53e]" />,
      title: "Technical SEO",
      description: "Fix site structure, speed, and indexing issues.",
      bestFor: ["Site migrations", "Core Web Vitals", "Crawlability"]
    },
    {
      icon: <FileText className="h-8 w-8 text-[#eea53e]" />,
      title: "On-Page SEO",
      description: "Optimize content, meta tags, and internal linking.",
      bestFor: ["Blog posts", "Service pages", "Product pages"]
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#eea53e]" />,
      title: "Local SEO",
      description: "Rank higher in 'near me' searches.",
      bestFor: ["Brick-and-mortar", "Service areas", "Google My Business"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#eea53e]" />,
      title: "E-Commerce SEO",
      description: "Optimize product pages and category structures.",
      bestFor: ["Shopify", "WooCommerce", "BigCommerce"]
    },
    {
      icon: <Monitor className="h-8 w-8 text-[#eea53e]" />,
      title: "Enterprise SEO",
      description: "Scalable strategies for large websites.",
      bestFor: ["10,000+ pages", "International SEO", "Authority sites"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text relative">
              SEO Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70"></span>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-bold">
            Comprehensive strategies tailored to your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(238,165,62,0.3)",
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#eea53e]/20 p-3 rounded-lg mr-4"
                >
                  {service.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{service.description}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#f9c76b] mb-2">BEST FOR:</h4>
                <ul className="flex flex-wrap gap-2">
                  {service.bestFor.map((useCase, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
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
      </div>
    </section>
  );
}
