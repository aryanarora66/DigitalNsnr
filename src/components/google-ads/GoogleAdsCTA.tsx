import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function GoogleAdsCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Dominate Google Search Results?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&lsquo;s discuss how we can drive qualified traffic and conversions for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              href="/contact" 
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
            >
              Free Strategy Session
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-lg">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91-8800625883</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>contact@nsnrfutur.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}