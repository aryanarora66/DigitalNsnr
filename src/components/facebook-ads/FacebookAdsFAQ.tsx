"use client";

import { ChevronDown } from 'lucide-react';
import { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FacebookAdsFAQ(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much do Facebook Ads cost?",
      answer: "Costs vary by industry, but average $0.50-$2.00 per click or $5-$50 per lead. We optimize to lower your CPA over time."
    },
    {
      question: "How long until I see results?",
      answer: "Initial data comes in 24-48 hours, but we need 2-4 weeks to optimize for best performance."
    },
    {
      question: "Do you manage Instagram Ads too?",
      answer: "Yes! Instagram ads run through the same Meta Ads Manager, and we optimize for both platforms."
    },
    {
      question: "What's your management fee?",
      answer: "We charge 15-20% of ad spend or a flat monthly fee, depending on account size. No long-term contracts."
    },
    {
      question: "Can you help with creative?",
      answer: "Absolutely. Our in-house designers create high-converting ad visuals and videos tailored to your audience."
    },
    {
      question: "How do you track conversions?",
      answer: "We install the Meta Pixel and set up offline conversion tracking to measure real ROI."
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
            Facebook Ads{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text relative">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70"></span>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-bold">
            Answers to common questions about our Facebook Ads services.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="border-b border-white/20 last:border-0"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-bold text-white group-hover:text-[#f9c76b] transition-colors">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-[#eea53e] group-hover:text-[#f9c76b] transition-colors" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="pb-6 text-white/80 bg-white/5 p-4 rounded-lg my-2 backdrop-blur-sm border border-[#eea53e]/20"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] hover:from-[#f9c76b] hover:to-[#eea53e] rounded-lg text-gray-900 font-black text-lg shadow-lg hover:shadow-[#eea53e]/40 transition-all duration-300"
          >
            More Questions? Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
