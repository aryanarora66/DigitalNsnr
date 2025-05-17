import { Search, BarChart2, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export default function SEOHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dominate <span className="text-yellow-300">Google Rankings</span> with Expert SEO
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Drive organic traffic, increase conversions, and outrank competitors with our data-driven SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                Get a Free Audit <Search className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="bg-transparent hover:bg-blue-800 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                How SEO Works
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <TrendingUp className="h-8 w-8 text-yellow-300 mb-3" />
                <h3 className="font-bold text-lg">Higher Rankings</h3>
                <p className="text-sm opacity-80">Page 1 Google results</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <BarChart2 className="h-8 w-8 text-yellow-300 mb-3" />
                <h3 className="font-bold text-lg">More Traffic</h3>
                <p className="text-sm opacity-80">Targeted visitors</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Target className="h-8 w-8 text-yellow-300 mb-3" />
                <h3 className="font-bold text-lg">Better Conversions</h3>
                <p className="text-sm opacity-80">High-intent leads</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <svg className="h-8 w-8 text-yellow-300 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  <path d="M13 7h-2v6h6v-2h-4z" />
                </svg>
                <h3 className="font-bold text-lg">Long-Term ROI</h3>
                <p className="text-sm opacity-80">Sustainable growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}