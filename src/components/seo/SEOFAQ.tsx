"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function SEOFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does SEO take to work?",
      answer: "Typically 3-6 months to see significant rankings improvements. Technical fixes may show impact sooner, while competitive keywords take longer."
    },
    {
      question: "What's the difference between SEO and PPC?",
      answer: "SEO is organic (free traffic from rankings), while PPC is paid ads. SEO takes longer but has better long-term ROI."
    },
    {
      question: "Do you guarantee #1 rankings?",
      answer: "No ethical SEO agency guarantees rankings—Google's algorithm changes constantly. We focus on sustainable growth and measurable improvements."
    },
    {
      question: "How much does SEO cost?",
      answer: "Plans start at $1,500/month for small businesses. Enterprise SEO ranges from $5,000-$20,000+/month depending on scope."
    },
    {
      question: "Will SEO work for my industry?",
      answer: "Yes—we've ranked clients in legal, healthcare, e-commerce, SaaS, and local services. Every business benefits from SEO."
    },
    {
      question: "How do you track SEO success?",
      answer: "We measure rankings, organic traffic, conversions, and ROI using Google Analytics, Search Console, and custom dashboards."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SEO <span className="text-blue-600">FAQs</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about our SEO services.
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