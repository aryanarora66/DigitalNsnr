"use client"
import { ChevronDown } from 'lucide-react';
import { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WebDevFAQ(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a custom website take to build?",
      answer: "Timelines vary by complexity: <br><strong>Basic sites:</strong> 4-6 weeks <br><strong>E-commerce:</strong> 8-12 weeks <br><strong>Custom web apps:</strong> 12+ weeks"
    },
    {
      question: "What's the difference between WordPress and custom development?",
      answer: "WordPress is great for simple sites with pre-built themes. Custom development offers <strong>better performance, security, and unique designs</strong> tailored to your brand."
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer: "Yes! We offer <strong>managed hosting</strong> with 99.9% uptime guarantees and <strong>monthly maintenance plans</strong> for updates and security."
    },
    {
      question: "How much does a custom website cost?",
      answer: "Projects typically range from: <br><strong>$5,000-$15,000</strong> for basic sites <br><strong>$15,000-$50,000</strong> for e-commerce <br><strong>$50,000+</strong> for complex web applications"
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. We specialize in <strong>website redesigns</strong> that improve UX, performance, and conversions while migrating all content."
    },
    {
      question: "What about SEO?",
      answer: "All our websites are built <strong>SEO-friendly from the ground up</strong> with clean code, fast performance, and proper semantic structure."
    }
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
            Web Development{" "}
            <span className="bg-gradient-to-r from-[#eea53e] to-[#f9c76b] text-transparent bg-clip-text relative">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#eea53e] to-[#f9c76b] opacity-70" />
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-semibold">
            Answers to common questions about our web development services.
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
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="border-b border-white/20 last:border-0"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-medium text-white group-hover:text-[#f9c76b] transition-colors">
                  {faq.question}
                </h3>
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
                    <motion.p
                      className="pb-6 text-white/80 bg-white/5 p-4 rounded-lg my-2 backdrop-blur-sm border border-[#eea53e]/20"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
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
