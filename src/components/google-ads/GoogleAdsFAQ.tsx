"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JSX } from "react";

export default function GoogleAdsFAQ(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (i: number) =>
    setActiveIndex(activeIndex === i ? null : i);

  const faqs = [
    {
      question: "How much should I budget for Google Ads?",
      answer:
        "Budget depends on your industry, competition, and goals. Most small businesses start with $1,000–$3,000/month, while competitive industries may require $5,000+/month. We recommend starting with a test budget and scaling based on performance.",
    },
    {
      question: "How long until I see results?",
      answer:
        "Initial results typically appear within 1–2 weeks as campaigns gather data. Full optimization takes 3–6 months as we refine targeting, bids, and creatives based on performance data.",
    },
    {
      question: "What's your management fee structure?",
      answer:
        "We charge either a percentage of ad spend (10–20%) or a flat monthly fee, depending on account size. Our minimum engagement is $500/month for management services.",
    },
    {
      question: "Do you work with e-commerce businesses?",
      answer:
        "Absolutely. We specialize in Shopping and Performance Max campaigns for e-commerce, with expertise in feed optimization, dynamic remarketing, and conversion tracking setup.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track KPIs like ROAS, CPA, conversion rates, and Quality Score improvements. You’ll receive monthly reports showing progress against your business goals.",
    },
    {
      question: "What makes your approach different?",
      answer:
        "We combine data science with creative strategy, focusing on full-funnel optimization rather than just top-of-funnel metrics. Our proprietary bid algorithms outperform standard automated strategies by 22% on average.",
    },
  ];

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
            Google Ads{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text relative">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70" />
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-semibold">
            Answers to common questions about our Google Ads services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="border-b border-white/20 last:border-0"
            >
              <motion.button
                onClick={() => toggleFAQ(idx)}
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-bold text-white group-hover:text-[#f9c76b] transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-[#eea53e] group-hover:text-[#f9c76b] transition-colors" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="pb-6 text-white/80 bg-white/5 p-4 rounded-lg my-2 backdrop-blur-sm border border-[#eea53e]/20"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
