"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function GoogleAdsFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much should I budget for Google Ads?",
      answer: "Budget depends on your industry, competition, and goals. Most small businesses start with $1,000-$3,000/month, while competitive industries may require $5,000+/month. We recommend starting with a test budget and scaling based on performance."
    },
    {
      question: "How long until I see results?",
      answer: "Initial results typically appear within 1-2 weeks as campaigns gather data. Full optimization takes 3-6 months as we refine targeting, bids, and creatives based on performance data."
    },
    {
      question: "What's your management fee structure?",
      answer: "We charge either a percentage of ad spend (typically 10-20%) or a flat monthly fee, depending on account size. Our minimum engagement is $500/month for management services."
    },
    {
      question: "Do you work with e-commerce businesses?",
      answer: "Absolutely. We specialize in Shopping campaigns and Performance Max campaigns for e-commerce, with expertise in feed optimization, dynamic remarketing, and conversion tracking setup."
    },
    {
      question: "How do you measure success?",
      answer: "We track KPIs like ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), conversion rates, and quality score improvements. You'll receive monthly reports showing progress against your specific business goals."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine data science with creative strategy, focusing on full-funnel optimization rather than just top-of-funnel metrics. Our proprietary bid adjustment algorithms outperform standard automated strategies by 22% on average."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Ads FAQs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about our Google Ads services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`} />
              </button>
              <div 
                className={`pb-6 text-gray-600 ${activeIndex === index ? 'block' : 'hidden'}`}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}