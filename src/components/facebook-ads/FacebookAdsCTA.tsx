"use client";

import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, JSX } from 'react';

export default function FacebookAdsCTA(): JSX.Element {
  const [isClient, setIsClient] = useState<boolean>(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10"></div>
      
      {/* Floating elements - only rendered client-side */}
      {isClient && (
        <>
          <motion.div 
            className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-[#eea53e]/10 blur-xl"
            animate={{
              y: [0, 30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-[#f9c76b]/10 blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-black mb-6 tracking-tight"
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text relative">
              Scale with Facebook Ads
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70"></span>
            </span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8 max-w-3xl mx-auto font-bold"
          >
            Get a free audit of your current campaigns and a custom strategy.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] hover:from-[#f9c76b] hover:to-[#eea53e] text-gray-900 px-8 py-3 rounded-lg font-black text-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#eea53e]/40"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact" 
                className="bg-transparent hover:bg-white/10 border-2 border-[#edb464]/70 hover:border-[#f9c76b] text-[#f9c76b] px-8 py-3 rounded-lg font-black text-lg flex items-center justify-center transition-all duration-300"
              >
                Free Strategy Call
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-8 text-lg"
          >
            <motion.div 
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05, color: "#f9c76b" }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-bold">+91-8800625883</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05, color: "#f9c76b" }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-5 w-5 mr-2" />
              <span className="font-bold">contact@nsnrfutur.com</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Add global styles for drop shadow */}
      <style jsx global>{`
        .text-shadow {
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
