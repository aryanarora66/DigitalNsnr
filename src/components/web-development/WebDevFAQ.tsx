"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function WebDevFAQ() {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Development <span className="text-blue-600">FAQs</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about our web development services.
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