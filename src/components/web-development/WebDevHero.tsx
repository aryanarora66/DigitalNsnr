import { Code, Globe, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WebDevHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-blue-400">Custom Web Development</span> That Converts
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              High-performance websites built with modern technologies for speed, security, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                Get a Free Quote <Code className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#our-process" 
                className="bg-transparent hover:bg-gray-800 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                Our Process
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Globe className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-bold text-lg">Responsive Design</h3>
                <p className="text-sm opacity-80">Flawless on all devices</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Zap className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-bold text-lg">Lightning Fast</h3>
                <p className="text-sm opacity-80">90+ PageSpeed scores</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Smartphone className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-bold text-lg">Mobile-First</h3>
                <p className="text-sm opacity-80">60% traffic comes from mobile</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <svg className="h-8 w-8 text-blue-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="font-bold text-lg">Secure</h3>
                <p className="text-sm opacity-80">HTTPS, CSP, and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}