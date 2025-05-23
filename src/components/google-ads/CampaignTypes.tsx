"use client";

import { Search, Monitor, ShoppingCart, Video, MapPin, Mail } from 
"lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

interface Campaign {
  icon: JSX.Element;
  title: string;
  description: string;
  stats: string;
  bestFor: string[];
}

export default function CampaignTypes(): JSX.Element {
  const campaigns: Campaign[] = [
    {
      icon: <Search className="h-8 w-8 text-[#eea53e]" />,
      title: "Search Network",
      description:
        "Text ads that appear on Google search results when users search for your targeted keywords.",
      stats: "72% of clicks go to the top 3 ads",
      bestFor: ["Lead generation", "Direct sales", "High-intent traffic"],
    },
    {
      icon: <Monitor className="h-8 w-8 text-[#eea53e]" />,
      title: "Display Network",
      description:
        "Visual banner ads across millions of websites, apps, and videos in Google's network.",
      stats: "90% of internet users reached",
      bestFor: ["Brand awareness", "Remarketing", "Visual products"],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#eea53e]" />,
      title: "Shopping Ads",
      description:
        "Product listings with images, prices, and store names that appear in Google search results.",
      stats: "85% of online shoppers start on Google",
      bestFor: ["E-commerce", "Retailers", "Product-based businesses"],
    },
    {
      icon: <Video className="h-8 w-8 text-[#eea53e]" />,
      title: "Video (YouTube)",
      description:
        "Video ads that play before, during, or alongside YouTube content.",
      stats: "70% of buyers watch videos before purchase",
      bestFor: ["Brand storytelling", "Product demos", "Visual industries"],
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#eea53e]" />,
      title: "Local Campaigns",
      description:
        "Drive foot traffic to physical locations with optimized local ads across Google's properties.",
      stats: "76% of local searches result in a visit",
      bestFor: ["Brick-and-mortar", "Service areas", "Local businesses"],
    },
    {
      icon: <Mail className="h-8 w-8 text-[#eea53e]" />,
      title: "Performance Max",
      description:
        "Automated campaigns that optimize across all Google networks to maximize conversions.",
      stats: "27% more conversions on average",
      bestFor: ["Conversion focus", "Multi-channel", "Automation"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative 
overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] 
opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
            Google Ads Campaign Types We{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] 
text-transparent bg-clip-text relative">
              Master
              <span className="absolute bottom-0 left-0 w-full h-1 
bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70"></span>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-bold">
            Each campaign type serves different business objectives. We'll help you 
choose the right mix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(238,165,62,0.3)",
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md 
border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#eea53e]/20 p-3 rounded-lg mr-4"
                >
                  {c.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{c.description}</p>
                </div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg mb-4 border 
border-white/20">
                <p className="text-sm font-medium text-[#f9c76b]">
                  📊 {c.stats}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#f9c76b] mb-2">
                  BEST FOR:
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {c.bestFor.map((bf, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + j * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#eea53e]/20 text-[#f9c76b] px-3 py-1 
rounded-full text-xs font-medium border border-[#eea53e]/30"
                    >
                      {bf}
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
          className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 
rounded-xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            How We Determine Your Ideal Campaign Mix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              ["Business Goals", "Brand awareness vs. direct response"],
              ["Customer Journey", "Where your customers discover solutions"],
              ["Product Type", "Visual products vs. service-based"],
              ["Budget Allocation", "Maximizing ROI across channels"],
            ].map(([heading, desc], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                className="text-center p-4"
              >
                <div className="bg-[#eea53e]/20 w-16 h-16 rounded-full 
flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#eea53e] font-bold text-xl">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-white mb-2">{heading}</h4>
                <p className="text-white/70 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
