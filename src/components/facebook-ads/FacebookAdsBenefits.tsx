"use client";

import {
  Zap,
  Eye,
  DollarSign,
  BarChart2,
  Smartphone,
  Share2,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { JSX } from "react";

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
  hover: { scale: 1.04, boxShadow: "0 12px 32px rgba(238,165,62,0.3)" },
};

const iconVariants: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: [0, -8, 8, -8, 0], transition: { duration: 0.8 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FacebookAdsBenefits(): JSX.Element {
  const benefits: Benefit[] = [
    {
      icon: <Zap className="h-8 w-8 text-[#eea53e]" />,
      title: "Hyper-Targeted Audiences",
      description:
        "Reach users by interests, behaviors, demographics, and even life events.",
    },
    {
      icon: <Eye className="h-8 w-8 text-[#eea53e]" />,
      title: "Visual Storytelling",
      description: "Showcase products with carousel ads, videos, and Stories.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#eea53e]" />,
      title: "Cost-Effective Leads",
      description:
        "Lower cost-per-lead than most channels ($1–$10 CPA in many industries).",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-[#eea53e]" />,
      title: "Scalable Campaigns",
      description: "Start small, then scale winners with confidence.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#eea53e]" />,
      title: "Mobile-First Platform",
      description:
        "98% of Meta users access via mobile—ads are designed for thumb-stopping engagement.",
    },
    {
      icon: <Share2 className="h-8 w-8 text-[#eea53e]" />,
      title: "Social Proof & Virality",
      description:
        "Likes, shares, and comments boost credibility and organic reach.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black mb-4 tracking-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
              Facebook & Instagram Ads
            </span>{" "}
            Work
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            2.9 billion active users—your customers are already here.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 cursor-pointer"
            >
              <motion.div
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
                className="bg-[#eea53e]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              >
                {b.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-white/80">{b.description}</p>
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
              <h3 className="text-2xl font-bold mb-3">Facebook vs. Google Ads</h3>
              <p className="text-white/80">
                Facebook excels at awareness & engagement, while Google captures high-intent searches. We combine both for full-funnel marketing.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="md:w-1/2"
            >
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/20">
                  <span className="font-medium">Metric</span>
                  <span className="font-medium">Facebook Ads</span>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-4"
                >
                  {[
                    ["Best For", "Branding & Retargeting"],
                    ["Avg. CPC", "$0.50–$2.00"],
                    ["Ad Formats", "Video, Carousel, Stories"],
                    ["Conversion Window", "7-Day View, 1-Day Click"],
                  ].map(([metric, value], idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex justify-between"
                    >
                      <span>{metric}</span>
                      <span className="font-semibold text-[#eea53e]">{value}</span>
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
