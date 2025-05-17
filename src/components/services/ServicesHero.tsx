import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-blue-400">Digital Marketing</span> Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Data-driven strategies that deliver measurable results and maximize your ROI.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}