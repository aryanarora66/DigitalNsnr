"use client";

import { Search, ClipboardList, Heart, Star, Shield, BarChart2 } from 'lucide-react';
import { motion } from "framer-motion";
import { JSX } from "react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

export default function InfluencerServices(): JSX.Element {
  const services: Service[] = [
    {
      icon: <Search className="h-8 w-8 text-[#eea53e]" />,
      title: "Influencer Identification",
      description: "AI-driven matching with ideal creators",
      features: ["Audience analysis", "Fake follower detection", "Engagement rate scoring"]
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-[#eea53e]" />,
      title: "Campaign Management",
      description: "Full-service campaign execution",
      features: ["Content briefs", "Posting schedules", "Legal contracts"]
    },
    {
      icon: <Heart className="h-8 w-8 text-[#eea53e]" />,
      title: "UGC Creation",
      description: "Authentic user-generated content",
      features: ["Product seeding", "Content rights", "Asset repurposing"]
    },
    {
      icon: <Star className="h-8 w-8 text-[#eea53e]" />,
      title: "Celebrity Partnerships",
      description: "A-list talent negotiations",
      features: ["Celebrity gifting", "Brand ambassador programs", "Red carpet activations"]
    },
    {
      icon: <Shield className="h-8 w-8 text-[#eea53e]" />,
      title: "Compliance & Fraud Prevention",
      description: "Risk-free campaigns",
      features: ["FTC compliance", "Fraud detection", "Performance audits"]
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-[#eea53e]" />,
      title: "ROI Optimization",
      description: "Performance analytics & scaling",
      features: ["Sales attribution", "A/B testing", "Influencer tiering"]
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
              Influencer Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70"></span>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-bold">
            End-to-end management for authentic, high-ROI campaigns
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
              <div className="mt-4">
                <h4 className="text-sm font-bold text-[#f9c76b] mb-2">KEY FEATURES:</h4>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#eea53e]/20 text-[#f9c76b] px-3 py-1 rounded-full text-xs font-medium border border-[#eea53e]/30"
                    >
                      {feature}
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
