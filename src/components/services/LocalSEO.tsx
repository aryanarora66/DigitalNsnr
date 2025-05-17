import { MapPin, Phone, Calendar, Star } from 'lucide-react';

export default function LocalSEO() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Local SEO is Essential</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dominate your local market and attract nearby customers ready to buy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Google My Business Dominance</h3>
            </div>
            <p className="text-gray-600">
              Properly optimized GMB listings appear in the coveted &quot;Local 3-Pack&quot; above organic results, capturing valuable visibility.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mobile Search Advantage</h3>
            </div>
            <p className="text-gray-600">
              Over 50% of mobile searches with local intent result in a store visit within a day - local SEO puts you in those results.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Near-Me Searches</h3>
            </div>
            <p className="text-gray-600">
            &quot;Near me&quot; searches have grown over 500% in recent years, with most users visiting businesses that appear in these results.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Reviews & Reputation</h3>
            </div>
            <p className="text-gray-600">
              Local SEO includes review management, with businesses displaying more and better reviews consistently earning more clicks.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Our Local SEO Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-purple-200">Google My Business</h4>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Complete profile optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Posting strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Local service area setup</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-purple-200">Citations & Listings</h4>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>NAP consistency across 50+ directories</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Industry-specific listings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Citation cleanup & correction</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-purple-200">Local Content</h4>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Location pages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Local link building</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Community engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}