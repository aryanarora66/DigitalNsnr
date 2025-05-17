import { Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NSNR FUTURE</h3>
            <p className="text-gray-300">
              Driving digital growth with innovative marketing solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/google-ads" className="text-gray-300 hover:text-white">Google Ads</Link></li>
              <li><Link href="/services/facebook-ads" className="text-gray-300 hover:text-white">Facebook Ads</Link></li>
              <li><Link href="/services/seo" className="text-gray-300 hover:text-white">SEO Services</Link></li>
              <li><Link href="/services/web-development" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link href="/services/influencer-marketing" className="text-gray-300 hover:text-white">Influencer Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/blogs" className="text-gray-300 hover:text-white">Blogs</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-gray-300">contact@nsnrfuture.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-gray-300">+91-8800625883</span>
              </div>
              <div className="flex space-x-4 mt-4">
                {/* <Link href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </Link> */}
                <Link href="https://x.com/nsnr_future" className="text-gray-300 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/nsnr_future/" className="text-gray-300 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/company/nsnrfuture" className="text-gray-300 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NSNR FUTURE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}