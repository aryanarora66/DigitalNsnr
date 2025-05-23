"use client";

import { Search, ClipboardList, Target, BarChart2, Settings, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { JSX, ReactNode } from 'react';

interface ProcessStep {
  icon: ReactNode;
  title: string;
  description: string[];
}

export default function FacebookAdsProcess(): JSX.Element {
  const steps: ProcessStep[] = [
    {
      icon: <Search className="h-6 w-6 text-[#eea53e]" />,
      title: "Audience Research",
      description: [
        "Competitor ad analysis",
        "Interest/behavior targeting",
        "Lookalike audience creation",
        "Customer persona development"
      ]
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-[#eea53e]" />,
      title: "Campaign Strategy",
      description: [
        "Objective selection",
        "Budget allocation",
        "Ad placement strategy",
        "Creative direction"
      ]
    },
    {
      icon: <Target className="h-6 w-6 text-[#eea53e]" />,
      title: "Ad Creation",
      description: [
        "High-converting ad copy",
        "Visual creative development",
        "A/B test variations",
        "Landing page alignment"
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-[#eea53e]" />,
      title: "Technical Setup",
      description: [
        "Pixel installation",
        "Conversion tracking",
        "UTM parameters",
        "CRM integration"
      ]
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[#eea53e]" />,
      title: "Launch & Optimize",
      description: [
        "Bid strategy implementation",
        "Daily performance monitoring",
        "Audience refinement",
        "Creative rotation"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#eea53e]" />,
      title: "Scale Winners",
      description: [
        "Budget scaling",
        "Campaign duplication",
        "Dynamic creative testing",
        "Quarterly strategy reviews"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden" id="how-it-works">
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
            Our{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text relative">
              Facebook Ads Process
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70"></span>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-bold">
            A data-driven approach to scaling your campaigns profitably.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#eea53e] to-[#f9c76b] transform -translate-x-1/2 opacity-50"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index !== 5 ? 'mb-12 md:mb-24' : ''}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12">
                      <motion.div 
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(238, 165, 62, 0.2)" }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4 md:justify-end">
                          <h3 className="text-xl font-bold text-white mr-4">{step.title}</h3>
                          <div className="bg-[#eea53e]/20 p-2 rounded-lg">
                            {step.icon}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {step.description.map((item, i) => (
                            <motion.li 
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                              key={i} 
                              className="text-white/80 flex items-start md:justify-end"
                            >
                              <span>{item}</span>
                              <svg className="h-4 w-4 text-[#f9c76b] ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                    <div className="hidden md:flex md:w-1/2 md:pl-12 items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-gray-900 w-14 h-14 rounded-full flex items-center justify-center font-black text-lg relative z-10 shadow-lg shadow-[#eea53e]/30"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex md:w-1/2 md:pr-12 items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-gray-900 w-14 h-14 rounded-full flex items-center justify-center font-black text-lg relative z-10 shadow-lg shadow-[#eea53e]/30"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <motion.div 
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(238, 165, 62, 0.2)" }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="bg-[#eea53e]/20 p-2 rounded-lg mr-4">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {step.description.map((item, i) => (
                            <motion.li 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                              key={i} 
                              className="text-white/80 flex items-start"
                            >
                              <svg className="h-4 w-4 text-[#f9c76b] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
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
            Start Your Campaign Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
