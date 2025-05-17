import { Star, UserCheck, TrendingUp, Heart } from 'lucide-react';

export default function InfluencerMarketing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Influencer Marketing: The Modern Word-of-Mouth</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage trusted voices to amplify your brand message authentically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Trust & Credibility</h3>
            </div>
            <p className="text-gray-600">
              92% of consumers trust recommendations from individuals (even if they don&apos;t know them) over brands. Influencers provide that trusted third-party validation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <UserCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Targeted Audience Reach</h3>
            </div>
            <p className="text-gray-600">
              Influencers have cultivated specific niche audiences that align with your ideal customer profile, ensuring your message reaches the right people.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Higher Engagement Rates</h3>
            </div>
            <p className="text-gray-600">
              Influencer content typically sees 8x higher engagement than brand content, as followers actively seek out and value their recommendations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Authentic Content Creation</h3>
            </div>
            <p className="text-gray-600">
              Influencers create high-quality, authentic content that showcases your product in real-life contexts, which you can repurpose across your own channels.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Influencer Marketing Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-medium text-gray-900">Strategy Development</h4>
              <p className="text-gray-600 text-sm mt-1">Define goals, KPIs, and target audience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h4 className="font-medium text-gray-900">Influencer Identification</h4>
              <p className="text-gray-600 text-sm mt-1">Match with ideal creators in your niche</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h4 className="font-medium text-gray-900">Campaign Execution</h4>
              <p className="text-gray-600 text-sm mt-1">Content creation and distribution</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h4 className="font-medium text-gray-900">Performance Analysis</h4>
              <p className="text-gray-600 text-sm mt-1">Measure results and optimize</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}