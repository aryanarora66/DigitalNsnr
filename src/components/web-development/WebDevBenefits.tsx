"use client";

import {
  Zap,
  Shield,
  TrendingUp,
  Search,
  Smartphone,
  DollarSign
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

export default function WebDevBenefits(): JSX.Element {
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
            Why <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
              Custom Web Development
            </span> Matters
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your website is your digital storefront - make it count.
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
              title: "Blazing Fast Performance",
              description: "90+ PageSpeed scores with optimized code and assets. Fast sites rank higher and convert better."
            },
            {
              icon: <Shield className="h-8 w-8 text-[#eea53e]" />,
              title: "Enterprise-Grade Security",
              description: "Protection against XSS, CSRF, SQLi with proper HTTPS, CSP, and security headers."
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-[#eea53e]" />,
              title: "SEO-Optimized Architecture",
              description: "Clean URL structures, semantic HTML, and schema markup built-in for better rankings."
            },
            {
              icon: <Search className="h-8 w-8 text-[#eea53e]" />,
              title: "Mobile-First Responsiveness",
              description: "60% of traffic comes from mobile - we build for all screen sizes from the start."
            },
            {
              icon: <Smartphone className="h-8 w-8 text-[#eea53e]" />,
              title: "Progressive Web Apps (PWA)",
              description: "App-like experiences with offline mode, push notifications, and home screen installation."
            },
            {
              icon: <DollarSign className="h-8 w-8 text-[#eea53e]" />,
              title: "Higher Conversion Rates",
              description: "Optimized UX/UI flows that increase conversions by 30-200% over templates."
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
                Custom Development vs. Page Builders
              </h3>
              <p className="text-white/80">
                While drag-and-drop builders work for simple sites, custom development delivers better performance, security, and scalability.
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
                  <span className="font-medium text-[#eea53e]">Factor</span>
                  <span className="font-medium text-[#eea53e]">Custom Development</span>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-4"
                >
                  {[
                    ["Page Load Speed", "0.5-2s"],
                    ["Security", "Enterprise-grade"],
                    ["SEO Friendliness", "Optimized"],
                    ["Custom Features", "Unlimited"]
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
