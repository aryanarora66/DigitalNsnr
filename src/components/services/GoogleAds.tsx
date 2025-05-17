import { Search, ShoppingCart, MapPin, Monitor } from 'lucide-react';

export default function GoogleAds() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Google Ads</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capture high-intent users actively searching for your products or services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Search className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Search Intent Targeting</h3>
            </div>
            <p className="text-gray-600">
              Google Ads appear when users are actively searching for solutions you provide, making them the most qualified leads you can acquire.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Immediate Results</h3>
            </div>
            <p className="text-gray-600">
              Unlike organic methods, Google Ads deliver traffic immediately after campaign launch, perfect for new businesses or product launches.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Local Market Dominance</h3>
            </div>
            <p className="text-gray-600">
              Geo-targeting ensures your ads are seen by potential customers in your service area, with options for radius targeting around locations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Monitor className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Full Funnel Marketing</h3>
            </div>
            <p className="text-gray-600">
              From awareness (Display Network) to consideration (YouTube) to conversion (Search), Google Ads covers every stage of the customer journey.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Our Google Ads Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-red-200">Search Network</h4>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keyword research & strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ad copy optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Quality score improvement</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-red-200">Display Network</h4>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Banner ad creation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Placement targeting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Remarketing campaigns</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-red-200">Shopping Ads</h4>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product feed optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Merchant center setup</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dynamic remarketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}