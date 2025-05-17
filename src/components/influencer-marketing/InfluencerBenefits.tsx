import { ShieldCheck, BarChart2, Users, Heart, Clock, DollarSign } from 'lucide-react';

export default function InfluencerBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why <span className="text-purple-600">Influencer Marketing</span> Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            49% of consumers rely on influencer recommendations. Here&apos;s how we maximize impact:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="h-8 w-8 text-purple-600" />,
              title: "Trust Transfer",
              description: "Leverage creators' established credibility with their audience"
            },
            {
              icon: <BarChart2 className="h-8 w-8 text-purple-600" />,
              title: "Targeted Reach",
              description: "Pinpoint niche audiences through micro-influencers"
            },
            {
              icon: <Users className="h-8 w-8 text-purple-600" />,
              title: "Community Building",
              description: "Create authentic connections that boost brand loyalty"
            },
            {
              icon: <Heart className="h-8 w-8 text-purple-600" />,
              title: "Higher Engagement",
              description: "8x more engagement than brand-owned content"
            },
            {
              icon: <Clock className="h-8 w-8 text-purple-600" />,
              title: "Faster Conversions",
              description: "62% of consumers make purchases after influencer posts"
            },
            {
              icon: <DollarSign className="h-8 w-8 text-purple-600" />,
              title: "Cost-Effective",
              description: "$6.50 earned for every $1 spent on average"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: benefit.description }} />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 border border-purple-200 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Influencer vs Traditional Ads</h3>
              <p className="text-gray-600">
                While ads push sales, influencers build relationships. Our hybrid approach does both.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3 pb-2 border-b">
                  <span className="font-medium text-gray-900">Metric</span>
                  <span className="font-medium text-gray-900">Influencer Marketing</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">Consumer Trust</span>
                    <span className="font-semibold text-purple-600">61%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Ad Recall</span>
                    <span className="font-semibold text-purple-600">2.4x Higher</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Engagement Rate</span>
                    <span className="font-semibold text-purple-600">8.7% vs 0.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Purchase Influence</span>
                    <span className="font-semibold text-purple-600">49% of Consumers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}