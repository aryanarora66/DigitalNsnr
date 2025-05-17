import { Share2, MessageSquare, ThumbsUp, Users } from 'lucide-react';

export default function SocialMediaMarketing() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Social Media Marketing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your audience where they spend their time and attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Share2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Unparalleled Reach</h3>
            </div>
            <p className="text-gray-600">
              With over 4.8 billion social media users worldwide, these platforms offer access to nearly every demographic and interest group imaginable.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Direct Engagement</h3>
            </div>
            <p className="text-gray-600">
              Social media enables two-way communication with your audience, building relationships and brand loyalty that traditional marketing can&apos;t match.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <ThumbsUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Brand Awareness</h3>
            </div>
            <p className="text-gray-600">
              Regular, valuable content keeps your brand top-of-mind and increases the likelihood customers will choose you when they&apos;re ready to buy.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Targeted Advertising</h3>
            </div>
            <p className="text-gray-600">
              Sophisticated targeting options allow you to reach specific audiences based on demographics, interests, behaviors, and more.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Social Media Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Paid Social Advertising</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Facebook & Instagram Ads</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>LinkedIn Advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Twitter Promotions</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Organic Social Management</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Content Strategy & Creation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Community Engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Influencer Collaborations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}