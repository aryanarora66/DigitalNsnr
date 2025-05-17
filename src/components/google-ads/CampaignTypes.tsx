import { Search, Monitor, ShoppingCart, Video, MapPin, Mail } from 'lucide-react';

export default function CampaignTypes() {
  const campaigns = [
    {
      icon: <Search className="h-8 w-8 text-red-600" />,
      title: "Search Network",
      description: "Text ads that appear on Google search results when users search for your targeted keywords.",
      stats: "72% of clicks go to the top 3 ads",
      bestFor: ["Lead generation", "Direct sales", "High-intent traffic"]
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Display Network",
      description: "Visual banner ads across millions of websites, apps, and videos in Google's network.",
      stats: "90% of internet users reached",
      bestFor: ["Brand awareness", "Remarketing", "Visual products"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
      title: "Shopping Ads",
      description: "Product listings with images, prices, and store names that appear in Google search results.",
      stats: "85% of online shoppers start on Google",
      bestFor: ["E-commerce", "Retailers", "Product-based businesses"]
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "Video (YouTube)",
      description: "Video ads that play before, during, or alongside YouTube content.",
      stats: "70% of buyers watch videos before purchase",
      bestFor: ["Brand storytelling", "Product demos", "Visual industries"]
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Local Campaigns",
      description: "Drive foot traffic to physical locations with optimized local ads across Google's properties.",
      stats: "76% of local searches result in a visit",
      bestFor: ["Brick-and-mortar", "Service areas", "Local businesses"]
    },
    {
      icon: <Mail className="h-8 w-8 text-yellow-600" />,
      title: "Performance Max",
      description: "Automated campaigns that optimize across all Google networks to maximize conversions.",
      stats: "27% more conversions on average",
      bestFor: ["Conversion focus", "Multi-channel", "Automation"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Ads Campaign Types We Master</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each campaign type serves different business objectives. We&apos;ll help you choose the right mix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-gray-100 p-2 rounded-lg mr-4">
                  {campaign.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{campaign.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-sm font-medium text-gray-700">📊 {campaign.stats}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-2">BEST FOR:</h4>
                <ul className="flex flex-wrap gap-2">
                  {campaign.bestFor.map((useCase, i) => (
                    <li key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Determine Your Ideal Campaign Mix</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Goals</h4>
              <p className="text-gray-600 text-sm">Brand awareness vs. direct response</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Customer Journey</h4>
              <p className="text-gray-600 text-sm">Where your customers discover solutions</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Product Type</h4>
              <p className="text-gray-600 text-sm">Visual products vs. service-based</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Budget Allocation</h4>
              <p className="text-gray-600 text-sm">Maximizing ROI across channels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}