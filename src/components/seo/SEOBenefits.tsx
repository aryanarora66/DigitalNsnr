"use client";

import {
  Zap,
  Shield,
  Clock,
  DollarSign,
  Users,
  BarChart2
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect, JSX } from 'react';

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5 
    } 
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 30px rgba(238,165,62,0.3)"
  }
};

const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    } 
  }
};

export default function SEOBenefits(): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Floating blobs */}
      {isClient && (
        <>
          <motion.div
            className="absolute top-16 left-1/4 w-32 h-32 rounded-full bg-[#eea53e]/10 blur-xl"
            animate={{ 
              y: [0, 20, 0], 
              x: [0, -15, 0], 
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              duration: 14, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-[#f9c76b]/10 blur-xl"
            animate={{ 
              y: [0, -20, 0], 
              x: [0, 15, 0], 
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black mb-4 tracking-tight">
            Why SEO is the <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
              #1 Marketing Strategy
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            93% of online experiences begin with a search engine. Here's why SEO outperforms paid ads.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Zap className="h-8 w-8 text-[#eea53e]" />,
              title: "High-Intent Traffic",
              description: "SEO targets users actively searching for your solutions—higher conversion rates than social media or display ads."
            },
            {
              icon: <Shield className="h-8 w-8 text-[#eea53e]" />,
              title: "Trust & Credibility",
              description: "75% of users never scroll past the first page. Ranking high builds instant trust in your brand."
            },
            {
              icon: <Clock className="h-8 w-8 text-[#eea53e]" />,
              title: "24/7 Lead Generation",
              description: "Unlike paid ads that stop when budgets run out, SEO works continuously to attract visitors."
            },
            {
              icon: <DollarSign className="h-8 w-8 text-[#eea53e]" />,
              title: "Cost-Effective Growth",
              description: "Lower cost-per-lead than PPC—once ranked, traffic is essentially free."
            },
            {
              icon: <Users className="h-8 w-8 text-[#eea53e]" />,
              title: "Competitive Advantage",
              description: "Outrank competitors who rely only on paid ads—own your market organically."
            },
            {
              icon: <BarChart2 className="h-8 w-8 text-[#eea53e]" />,
              title: "Data-Driven Results",
              description: "Track rankings, traffic, and conversions with real-time analytics."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.8 }
                }}
                className="bg-[#eea53e]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Box */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-12 bg-[#f9c76b]/20 border border-[#eea53e]/30 rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-black mb-3">
                SEO vs. Paid Ads
              </h3>
              <p className="text-white/80">
                While Google Ads provide immediate traffic, SEO builds long-term authority. The best strategy combines both.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="md:w-1/2"
            >
              <div className="bg-white/10 p-4 rounded-lg border border-[#eea53e]/70">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#eea53e]/40">
                  <span className="font-medium text-[#eea53e]">Metric</span>
                  <span className="font-medium text-[#eea53e]">SEO</span>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-4"
                >
                  {[
                    ["Cost Per Lead (Avg.)", "$0.50 - $5"],
                    ["Traffic Quality", "High Intent"],
                    ["Time to Results", "3-6 Months"],
                    ["Long-Term ROI", "500%+"]
                  ].map(([metric, value], idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex justify-between"
                    >
                      <span className="text-white/80">{metric}</span>
                      <span className="font-semibold text-[#f9c76b]">{value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
