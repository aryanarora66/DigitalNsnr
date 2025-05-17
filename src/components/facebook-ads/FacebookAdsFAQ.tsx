"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FacebookAdsFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much do Facebook Ads cost?",
      answer: "Costs vary by industry, but average $0.50-$2.00 per click or $5-$50 per lead. We optimize to lower your CPA over time."
    },
    {
      question: "How long until I see results?",
      answer: "Initial data comes in 24-48 hours, but we need 2-4 weeks to optimize for best performance."
    },
    {
      question: "Do you manage Instagram Ads too?",
      answer: "Yes! Instagram ads run through the same Meta Ads Manager, and we optimize for both platforms."
    },
    {
      question: "What's your management fee?",
      answer: "We charge 15-20% of ad spend or a flat monthly fee, depending on account size. No long-term contracts."
    },
    {
      question: "Can you help with creative?",
      answer: "Absolutely. Our in-house designers create high-converting ad visuals and videos tailored to your audience."
    },
    {
      question: "How do you track conversions?",
      answer: "We install the Meta Pixel and set up offline conversion tracking to measure real ROI."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Facebook Ads <span className="text-blue-600">FAQs</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about our Facebook Ads services.
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