import { Globe, ShoppingCart, Search, Shield } from 'lucide-react';

export default function WebsiteImportance() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Critical Importance of Your Website</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your website is the digital foundation of your business in today&apos;s market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">24/7 Digital Storefront</h3>
            </div>
            <p className="text-gray-600">
              Your website never closes. It&apos;s always available to showcase your products, services, and brand to potential customers around the clock, across all time zones.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <ShoppingCart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Primary Sales Channel</h3>
            </div>
            <p className="text-gray-600">
              For most businesses, the website is the primary point of conversion, whether for direct e-commerce sales, lead generation, or appointment booking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Search Engine Visibility</h3>
            </div>
            <p className="text-gray-600">
              A well-optimized website is essential for appearing in search results when potential customers are actively looking for your products or services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Brand Credibility</h3>
            </div>
            <p className="text-gray-600">
              84% of consumers research a business online before making a purchase. A professional website establishes trust and legitimacy for your brand.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Website Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Website Development</h4>
              <p className="text-gray-600">
                Custom, responsive websites designed for optimal user experience and conversion rates.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="text-lg font-medium text-gray-900 mb-2">SEO Optimization</h4>
              <p className="text-gray-600">
                Technical and content optimization to improve search rankings and organic traffic.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Conversion Optimization</h4>
              <p className="text-gray-600">
                Data-driven improvements to increase lead generation and sales from your existing traffic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}