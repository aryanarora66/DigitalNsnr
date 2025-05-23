"use client";

import {
  Zap,
  Target,
  Clock,
  BarChart2,
  DollarSign,
  Users,
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
  show: { transition: { staggerChildren: 0.1, when: "beforeChildren" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 30px rgba(238,165,62,0.3)",
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function GoogleAdsBenefits(): JSX.Element {
  const benefits: Benefit[] = [
    {
      icon: <Zap className="h-8 w-8 text-[#eea53e]" />,
      title: "Immediate Visibility",
      description:
        "Unlike SEO which takes months, Google Ads gets you in front of customers immediately after launch.",
    },
    {
      icon: <Target className="h-8 w-8 text-[#eea53e]" />,
      title: "Precision Targeting",
      description:
        "Reach users actively searching with keyword, demographic, and device targeting.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#eea53e]" />,
      title: "24/7 Lead Generation",
      description:
        "Your ads work around the clock to capture high-intent traffic, even when you’re offline.",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-[#eea53e]" />,
      title: "Measurable ROI",
      description:
        "Track every dollar spent against conversions with advanced tracking setup.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#eea53e]" />,
      title: "Cost Control",
      description:
        "Set your own budget and only pay when someone clicks (PPC), with daily caps.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#eea53e]" />,
      title: "Remarketing",
      description:
        "Re-engage visitors who didn’t convert with targeted ads across Google’s network.",
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
              Google Ads
            </span>{" "}
            Is a Top Platform
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            91% of all internet searches happen on Google. Dominate them with us.
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
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.8 },
                }}
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
              <h3 className="text-2xl font-black mb-3">
                Google Ads vs. Organic SEO
              </h3>
              <p className="text-white/80">
                Google Ads delivers immediate results while SEO gains traction
                over months. We combine both for full‐funnel impact.
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
                  <span className="font-medium">Google Ads</span>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-4"
                >
                  {[
                    ["Time to Results", "24-48 hours"],
                    ["Traffic Quality", "High Intent"],
                    ["Budget Control", "Complete"],
                    ["Testing", "A/B & Multivariate"],
                  ].map(([metric, value], idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex justify-between"
                    >
                      <span>{metric}</span>
                      <span className="font-bold text-[#eea53e]">{value}</span>
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
