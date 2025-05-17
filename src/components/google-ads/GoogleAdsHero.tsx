import { ArrowRight, Search, BarChart2, Target } from 'lucide-react';
import Link from 'next/link';

export default function GoogleAdsHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert <span className="text-yellow-300">Google Ads</span> Management
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Dominate search results and drive high-quality leads with our data-driven Google Ads strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="bg-transparent hover:bg-blue-800 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Search className="h-8 w-8 text-yellow-300 mb-3" />
                <h3 className="font-bold text-lg">Search Network</h3>
                <p className="text-sm opacity-80">Text ads on Google search results</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <BarChart2 className="h-8 w-8 text-yellow-300 mb-3" />
                <h3 className="font-bold text-lg">Display Network</h3>
                <p className="text-sm opacity-80">Visual ads across websites</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Target className="h-8 w-8 text-yellow-300 mb-3" />
                <h3 className="font-bold text-lg">Shopping Ads</h3>
                <p className="text-sm opacity-80">Product listings in search</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <svg className="h-8 w-8 text-yellow-300 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <h3 className="font-bold text-lg">YouTube Ads</h3>
                <p className="text-sm opacity-80">Video advertising</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}