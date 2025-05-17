import { ArrowRight, Target, Smartphone, BarChart2, Users } from 'lucide-react';
import Link from 'next/link';

export default function FacebookAdsHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-blue-300">Facebook & Instagram Ads</span> That Convert
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Drive high-quality leads, increase sales, and maximize ROI with our data-driven ad strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-400 hover:bg-blue-300 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="bg-transparent hover:bg-blue-900 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Target className="h-8 w-8 text-blue-300 mb-3" />
                <h3 className="font-bold text-lg">Precision Targeting</h3>
                <p className="text-sm opacity-80">Reach ideal customers</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Smartphone className="h-8 w-8 text-blue-300 mb-3" />
                <h3 className="font-bold text-lg">Mobile-First Ads</h3>
                <p className="text-sm opacity-80">Optimized for Instagram & FB</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <BarChart2 className="h-8 w-8 text-blue-300 mb-3" />
                <h3 className="font-bold text-lg">Performance Tracking</h3>
                <p className="text-sm opacity-80">Real-time ROAS</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Users className="h-8 w-8 text-blue-300 mb-3" />
                <h3 className="font-bold text-lg">Remarketing</h3>
                <p className="text-sm opacity-80">Re-engage visitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}