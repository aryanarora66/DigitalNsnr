import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how NSNR FUTURE can help you achieve your marketing goals and drive real business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-gray-800 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center"
            >
              Request Consultation
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-lg">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@nsnrfuture.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}