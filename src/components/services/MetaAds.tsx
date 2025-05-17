import { Smartphone, Target, BarChart2, Share2 } from 'lucide-react';

export default function MetaAds() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Meta Ads (Facebook & Instagram)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage the power of social media advertising to reach your ideal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Unmatched Audience Targeting</h3>
            </div>
            <p className="text-gray-600">
              Meta&apos;s advertising platform offers the most sophisticated targeting options available, allowing you to reach users based on demographics, interests, behaviors, and even life events.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Visual Storytelling</h3>
            </div>
            <p className="text-gray-600">
              Instagram and Facebook are inherently visual platforms perfect for showcasing products, services, and brand personality through images, videos, and carousel ads.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cost-Effective Lead Generation</h3>
            </div>
            <p className="text-gray-600">
              Compared to traditional advertising, Meta ads often deliver lower cost-per-lead, especially when targeting warm audiences through retargeting campaigns.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Share2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Social Proof & Sharing</h3>
            </div>
            <p className="text-gray-600">
              Ads on Meta platforms benefit from social sharing and engagement, allowing your message to spread organically beyond your initial target audience.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Our Meta Ads Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-blue-300">Audience Strategy</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom audience segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lookalike audience creation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Retargeting pixel implementation</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-blue-300">Creative Development</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>High-converting ad creatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>A/B testing framework</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Platform-specific optimization</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-blue-300">Performance Management</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Daily campaign monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Real-time bid adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comprehensive reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}