"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function InfluencerFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does influencer marketing cost?",
      answer: "Campaigns typically range from:<br><strong>Micro-influencers:</strong> $500-$5,000<br><strong>Macro-influencers:</strong> $5,000-$50,000<br><strong>Celebrities:</strong> $50,000+"
    },
    {
      question: "How do you measure success?",
      answer: "We track:<br>• Engagement rates<br>• Click-through rates<br>• Conversion attribution<br>• Earned media value<br>• Brand sentiment"
    },
    {
      question: "How long do campaigns take?",
      answer: "Typical timelines:<br>• Strategy: 2-3 weeks<br>• Influencer onboarding: 1-2 weeks<br>• Content creation: 2-4 weeks<br>• Campaign run: 4-12 weeks"
    },
    {
      question: "Do you work with nano-influencers?",
      answer: "Yes! Our nano-influencer network (1K-10K followers) delivers 3x higher engagement rates than larger creators"
    },
    {
      question: "Can we reuse influencer content?",
      answer: "We negotiate usage rights in all contracts - 92% of our campaigns include repurposable UGC"
    },
    {
      question: "How do payments work?",
      answer: "We handle all influencer payments through our platform - you pay us one invoice with 30-day terms"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Influencer Marketing <span className="text-purple-600">FAQs</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about our influencer services
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