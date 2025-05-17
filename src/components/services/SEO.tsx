import { Search, TrendingUp, Shield, Clock } from 'lucide-react';

export default function SEO() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why SEO Matters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sustainable organic growth that builds long-term business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Search className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">High-Intent Traffic</h3>
            </div>
            <p className="text-gray-600">
              SEO targets users actively searching for solutions, resulting in higher conversion rates compared to other channels.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cost-Effective Growth</h3>
            </div>
            <p className="text-gray-600">
              While requiring upfront investment, SEO delivers compounding returns with no ongoing &quot;pay-per-click&quot; costs.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Brand Credibility</h3>
            </div>
            <p className="text-gray-600">
              Ranking highly in organic search results establishes your brand as an authority in your industry.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">24/7 Lead Generation</h3>
            </div>
            <p className="text-gray-600">
              Unlike paid ads that stop when budgets run out, SEO continues working around the clock to attract visitors.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Our SEO Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-green-300">Technical SEO</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Site architecture optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Page speed improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mobile-first indexing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-green-300">Content Strategy</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keyword research & mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Content gap analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>SEO-optimized copywriting</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-green-300">Off-Page SEO</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Link building strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Local citations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Brand mentions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}