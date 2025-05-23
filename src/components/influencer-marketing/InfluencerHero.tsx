import { Star, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

export default function InfluencerHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-[#eea53e]/30 to-gray-800 text-white py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f9c76b] to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#eea53e]/20 blur-xl animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">Influencer Marketing</span> That Drives Real Sales
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Strategic creator partnerships that deliver 5-11x ROI through authentic storytelling
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] hover:from-[#f9c76b] hover:to-[#eea53e] text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#eea53e]/30"
                >
                  Launch Campaign <Zap className="ml-2 h-5 w-5 animate-pulse" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#our-process" 
                  className="bg-transparent hover:bg-white/10 border-2 border-[#edb464]/50 hover:border-[#edb464] text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300"
                >
                  Our Strategy
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl shadow-[#eea53e]/20 hover:shadow-[#f9c76b]/30 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#eea53e]/10 to-[#f9c76b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="grid grid-cols-2 gap-5 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white/10 p-5 rounded-lg border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300 hover:bg-white/15 group/card"
              >
                <TrendingUp className="h-8 w-8 text-[#eea53e] mb-3 group-hover/card:text-[#f9c76b] transition-colors duration-300" />
                <h3 className="font-bold text-lg group-hover/card:text-[#f9c76b] transition-colors duration-300">5-11x ROI</h3>
                <p className="text-sm text-gray-300 group-hover/card:text-white transition-colors duration-300">Average campaign returns</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white/10 p-5 rounded-lg border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300 hover:bg-white/15 group/card"
              >
                <Users className="h-8 w-8 text-[#eea53e] mb-3 group-hover/card:text-[#f9c76b] transition-colors duration-300" />
                <h3 className="font-bold text-lg group-hover/card:text-[#f9c76b] transition-colors duration-300">10,000+ Creators</h3>
                <p className="text-sm text-gray-300 group-hover/card:text-white transition-colors duration-300">In our vetted network</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white/10 p-5 rounded-lg border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300 hover:bg-white/15 group/card"
              >
                <Star className="h-8 w-8 text-[#eea53e] mb-3 group-hover/card:text-[#f9c76b] transition-colors duration-300" />
                <h3 className="font-bold text-lg group-hover/card:text-[#f9c76b] transition-colors duration-300">92% Success Rate</h3>
                <p className="text-sm text-gray-300 group-hover/card:text-white transition-colors duration-300">Exceeding KPIs</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white/10 p-5 rounded-lg border border-white/20 hover:border-[#eea53e]/50 transition-all duration-300 hover:bg-white/15 group/card"
              >
                <svg className="h-8 w-8 text-[#eea53e] mb-3 group-hover/card:text-[#f9c76b] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 3h-17A1.5 1.5 0 002 4.5v15A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.5 3zM8 5h3v14H8zm7 0h3v14h-3z"/>
                </svg>
                <h3 className="font-bold text-lg group-hover/card:text-[#f9c76b] transition-colors duration-300">Multi-Platform</h3>
                <p className="text-sm text-gray-300 group-hover/card:text-white transition-colors duration-300">TikTok, Instagram, YouTube</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
