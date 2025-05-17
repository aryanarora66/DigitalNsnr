// components/FAQSection.tsx
import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer SEO, PPC, social media marketing, email campaigns, branding, and web design tailored to your goals.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us via the contact page or email us directly at support@nsnrfuture.com.",
  },
  {
    question: "What makes your company stand out?",
    answer:
      "We focus on delivering performance-driven strategies with complete transparency and dedicated client support.",
  },
  {
    question: "What is the timeline for SEO results?",
    answer:
      "SEO results typically take 3-6 months depending on your competition, current site health, and strategy implementation.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: FAQ */}
        <div className="w-full md:w-1/2">
          <h2 className="text-white text-sm font-semibold uppercase mb-2">FAQ</h2>
          <h3 className="text-3xl font-bold mb-2">Frequently Asked Questions</h3>
          <div className="h-1 w-20 bg-gray-300 mb-6" />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 cursor-pointer shadow-sm transition-all hover:shadow-md"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">{faq.question}</h4>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <p className="text-black  mt-3">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/faq.jpg" // Make sure to place this image in public folder
              alt="FAQ Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
