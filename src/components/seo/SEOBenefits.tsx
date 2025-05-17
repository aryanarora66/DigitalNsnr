import { Zap, Shield, Clock, DollarSign, Users, BarChart2 } from 'lucide-react';

export default function SEOBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why SEO is the <span className="text-blue-600">#1 Marketing Strategy</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            93% of online experiences begin with a search engine. Here&apos;s why SEO outperforms paid ads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-blue-600" />,
              title: "High-Intent Traffic",
              description: "SEO targets users actively searching for your solutions—higher conversion rates than social media or display ads."
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Trust & Credibility",
              description: "75% of users never scroll past the first page. Ranking high builds instant trust in your brand."
            },
            {
              icon: <Clock className="h-8 w-8 text-blue-600" />,
              title: "24/7 Lead Generation",
              description: "Unlike paid ads that stop when budgets run out, SEO works continuously to attract visitors."
            },
            {
              icon: <DollarSign className="h-8 w-8 text-blue-600" />,
              title: "Cost-Effective Growth",
              description: "Lower cost-per-lead than PPC—once ranked, traffic is essentially free."
            },
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: "Competitive Advantage",
              description: "Outrank competitors who rely only on paid ads—own your market organically."
            },
            {
              icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
              title: "Data-Driven Results",
              description: "Track rankings, traffic, and conversions with real-time analytics."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SEO vs. Paid Ads</h3>
              <p className="text-gray-600">
                While Google Ads provide immediate traffic, SEO builds long-term authority. The best strategy combines both.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3 pb-2 border-b">
                  <span className="font-medium text-gray-900">Metric</span>
                  <span className="font-medium text-gray-900">SEO</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">Cost Per Lead (Avg.)</span>
                    <span className="font-semibold text-blue-600">$0.50 - $5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Traffic Quality</span>
                    <span className="font-semibold text-blue-600">High Intent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Time to Results</span>
                    <span className="font-semibold text-blue-600">3-6 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Long-Term ROI</span>
                    <span className="font-semibold text-blue-600">500%+</span>
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