import { Zap, Eye, DollarSign, BarChart2, Smartphone, Share2 } from 'lucide-react';

export default function FacebookAdsBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why <span className="text-blue-600">Facebook & Instagram Ads</span> Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2.9 billion active users – your customers are already here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-blue-600" />,
              title: "Hyper-Targeted Audiences",
              description: "Reach users by interests, behaviors, demographics, and even life events."
            },
            {
              icon: <Eye className="h-8 w-8 text-blue-600" />,
              title: "Visual Storytelling",
              description: "Showcase products with carousel ads, videos, and Stories."
            },
            {
              icon: <DollarSign className="h-8 w-8 text-blue-600" />,
              title: "Cost-Effective Leads",
              description: "Lower cost-per-lead than most channels ($1-$10 CPA in many industries)."
            },
            {
              icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
              title: "Scalable Campaigns",
              description: "Start small, then scale winners with confidence."
            },
            {
              icon: <Smartphone className="h-8 w-8 text-blue-600" />,
              title: "Mobile-First Platform",
              description: "98% of FB users access via mobile – ads are designed for thumb-stopping engagement."
            },
            {
              icon: <Share2 className="h-8 w-8 text-blue-600" />,
              title: "Social Proof & Virality",
              description: "Likes, shares, and comments boost credibility and organic reach."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: benefit.description }} />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Facebook Ads vs. Google Ads</h3>
              <p className="text-gray-600">
                Facebook excels at awareness & consideration, while Google captures high-intent searches. We combine both for full-funnel marketing.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3 pb-2 border-b">
                  <span className="font-medium text-gray-900">Metric</span>
                  <span className="font-medium text-gray-900">Facebook Ads</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">Best For</span>
                    <span className="font-semibold text-blue-600">Branding & Retargeting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Avg. CPC</span>
                    <span className="font-semibold text-blue-600">$0.50 - $2.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Ad Formats</span>
                    <span className="font-semibold text-blue-600">Video, Carousel, Stories</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Conversion Window</span>
                    <span className="font-semibold text-blue-600">7-Day View, 1-Day Click</span>
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