"use client";

import {
  Search,
  ClipboardList,
  Target,
  BarChart2,
  Settings,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

interface Step {
  icon: JSX.Element;
  title: string;
  description: string[];
}

export default function GoogleAdsProcess(): JSX.Element {
  const steps: Step[] = [
    {
      icon: <Search className="h-6 w-6 text-[#eea53e]" />,
      title: "Discovery & Research",
      description: [
        "Business goals analysis",
        "Competitor ad research",
        "Keyword opportunity analysis",
        "Audience targeting strategy",
      ],
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-[#eea53e]" />,
      title: "Account Structure",
      description: [
        "Campaign architecture design",
        "Ad group organization",
        "Keyword grouping strategy",
        "Negative keyword planning",
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-[#eea53e]" />,
      title: "Ad Creation",
      description: [
        "High-converting ad copywriting",
        "Responsive search ads",
        "Display ad creative development",
        "Landing page alignment",
      ],
    },
    {
      icon: <Settings className="h-6 w-6 text-[#eea53e]" />,
      title: "Technical Setup",
      description: [
        "Conversion tracking implementation",
        "Google Analytics integration",
        "Tag Manager configuration",
        "Audience list creation",
      ],
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[#eea53e]" />,
      title: "Launch & Optimize",
      description: [
        "Bid strategy implementation",
        "Daily performance monitoring",
        "A/B testing framework",
        "Weekly optimizations",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#eea53e]" />,
      title: "Scale & Expand",
      description: [
        "Performance analysis reporting",
        "Budget scaling recommendations",
        "New campaign opportunities",
        "Quarterly strategy reviews",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
            Our Google Ads Management{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
              Process
            </span>
          </h2>
          <p className="text-2xl text-white font-semibold max-w-3xl mx-auto">
            A proven methodology that delivers consistent results for our
            clients.
          </p>
        </motion.div>

        <div className="relative">
          {/* center timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-[2px] bg-white/20 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const delay = 0.3 + idx * 0.1;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(238,165,62,0.3)",
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:text-right" : "md:text-left"
                  } ${idx !== steps.length - 1 ? "mb-12 md:mb-24" : ""}`}
                >
                  {isEven ? (
                    <>
                      {/* left content */}
                      <div className="md:w-1/2 md:pr-12">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all"
                        >
                          <div className="flex items-center mb-4 justify-end">
                            <h3 className="text-2xl font-extrabold text-white mr-4">
                              {step.title}
                            </h3>
                            <motion.div
                              whileHover={{
                                rotate: [0, -10, 10, -10, 0],
                              }}
                              transition={{ duration: 0.5 }}
                              className="bg-[#eea53e]/20 p-3 rounded-lg"
                            >
                              {step.icon}
                            </motion.div>
                          </div>
                          <ul className="space-y-2">
                            {step.description.map((d, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.3 + i * 0.1,
                                }}
                                className="text-white font-semibold text-base flex items-start justify-end"
                              >
                                <span>{d}</span>
                                <svg
                                  className="h-4 w-4 text-[#f9c76b] ml-2 mt-1 flex-shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      {/* center marker */}
                      <div className="hidden md:flex md:w-1/2 md:pl-12 items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + idx * 0.1,
                          }}
                          className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-lg shadow-lg shadow-[#eea53e]/30"
                        >
                          {idx + 1}
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* center marker */}
                      <div className="hidden md:flex md:w-1/2 md:pr-12 items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + idx * 0.1,
                          }}
                          className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-lg shadow-lg shadow-[#eea53e]/30"
                        >
                          {idx + 1}
                        </motion.div>
                      </div>
                      {/* right content */}
                      <div className="md:w-1/2 md:pl-12">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all"
                        >
                          <div className="flex items-center mb-4">
                            <motion.div
                              whileHover={{
                                rotate: [0, -10, 10, -10, 0],
                              }}
                              transition={{ duration: 0.5 }}
                              className="bg-[#eea53e]/20 p-3 rounded-lg mr-4"
                            >
                              {step.icon}
                            </motion.div>
                            <h3 className="text-2xl font-extrabold text-white">
                              {step.title}
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {step.description.map((d, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.3 + i * 0.1,
                                }}
                                className="text-white font-semibold text-base flex items-start"
                              >
                                <svg
                                  className="h-4 w-4 text-[#f9c76b] mr-2 mt-1 flex-shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{d}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
