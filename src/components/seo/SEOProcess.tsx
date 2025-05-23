"use client";

import {
  Search,
  ClipboardList,
  FileText,
  Settings,
  BarChart2,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { JSX } from "react";

interface Step {
  icon: JSX.Element;
  title: string;
  description: string[];
}

export default function SEOProcess(): JSX.Element {
  const steps: Step[] = [
    {
      icon: <Search className="h-6 w-6 text-[#eea53e]" />,
      title: "Discovery & Audit",
      description: [
        "Technical SEO audit",
        "Competitor analysis",
        "Keyword research",
        "Content gap analysis"
      ]
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-[#eea53e]" />,
      title: "Strategy Development",
      description: [
        "Priority fixes roadmap",
        "Content calendar",
        "Link-building plan",
        "Local SEO setup"
      ]
    },
    {
      icon: <FileText className="h-6 w-6 text-[#eea53e]" />,
      title: "On-Page Optimization",
      description: [
        "Meta tags optimization",
        "Content rewrites",
        "Internal linking",
        "Schema markup"
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-[#eea53e]" />,
      title: "Technical Fixes",
      description: [
        "Site speed improvements",
        "Mobile optimization",
        "Indexing fixes",
        "Structured data"
      ]
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[#eea53e]" />,
      title: "Reporting & Refinement",
      description: [
        "Monthly performance reports",
        "Ranking tracking",
        "Conversion analysis",
        "Algorithm updates"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#eea53e]" />,
      title: "Scaling Growth",
      description: [
        "Authority building",
        "Enterprise SEO",
        "International expansion",
        "AI-driven optimizations"
      ]
    }
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
            Our{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
              SEO Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            A proven methodology that delivers consistent rankings.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center timeline line */}
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
                    boxShadow: "0 10px 25px -5px rgba(238, 165, 62, 0.3)",
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:text-right" : "md:text-left"
                  } ${idx !== steps.length - 1 ? "mb-12 md:mb-24" : ""}`}
                >
                  {isEven ? (
                    <>
                      {/* Left content */}
                      <div className="md:w-1/2 md:pr-12">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#eea53e]/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all"
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
                      {/* Center marker */}
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
                      {/* Center marker */}
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
                      {/* Right content */}
                      <div className="md:w-1/2 md:pl-12">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#eea53e]/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all"
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
