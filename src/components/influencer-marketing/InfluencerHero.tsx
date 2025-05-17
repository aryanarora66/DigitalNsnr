import { Star, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function InfluencerHero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-pink-300">Influencer Marketing</span> That Drives Real Sales
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Strategic creator partnerships that deliver 5-11x ROI through authentic storytelling
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                Launch Campaign <Zap className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#our-process" 
                className="bg-transparent hover:bg-purple-800 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                Our Strategy
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <TrendingUp className="h-8 w-8 text-pink-300 mb-3" />
                <h3 className="font-bold text-lg">5-11x ROI</h3>
                <p className="text-sm opacity-80">Average campaign returns</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Users className="h-8 w-8 text-pink-300 mb-3" />
                <h3 className="font-bold text-lg">10,000+ Creators</h3>
                <p className="text-sm opacity-80">In our vetted network</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <Star className="h-8 w-8 text-pink-300 mb-3" />
                <h3 className="font-bold text-lg">92% Success Rate</h3>
                <p className="text-sm opacity-80">Exceeding KPIs</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <svg className="h-8 w-8 text-pink-300 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 3h-17A1.5 1.5 0 002 4.5v15A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.5 3zM8 5h3v14H8zm7 0h3v14h-3z"/>
                </svg>
                <h3 className="font-bold text-lg">Multi-Platform</h3>
                <p className="text-sm opacity-80">TikTok, Instagram, YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}