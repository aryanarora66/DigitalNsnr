"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, JSX } from "react";

export default function InfluencerCTA(): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Floating blobs */}
      {isClient && (
        <>
          <motion.div
            className="absolute top-16 left-1/4 w-32 h-32 rounded-full bg-[#eea53e]/10 blur-xl"
            animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-[#f9c76b]/10 blur-xl"
            animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-black mb-6 tracking-tight"
        >
          Ready to <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text">
            Amplify Your Brand
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-8 max-w-3xl mx-auto font-semibold"
        >
          Let&apos;s create an influencer strategy that delivers measurable ROI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-gray-900 px-8 py-3 rounded-lg font-black text-lg flex items-center justify-center shadow-lg hover:shadow-[#eea53e]/40 transition-all duration-300"
            >
              Launch Campaign <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-gray-800 border-2 border-[#eea53e]/70 text-[#f9c76b] px-8 py-3 rounded-lg font-black text-lg flex items-center justify-center transition-all duration-300"
            >
              Free Strategy Session
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
    </section>
  );
}
