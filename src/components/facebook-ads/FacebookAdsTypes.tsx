import { Smartphone, Video, ShoppingCart, ThumbsUp, MapPin, Mail } from 'lucide-react';

export default function FacebookAdsTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Facebook & Instagram <span className="text-blue-600">Ad Types</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right format for your campaign goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Smartphone className="h-8 w-8 text-blue-600" />,
              title: "Feed Ads",
              description: "Native ads in Facebook/Instagram feeds.",
              bestFor: ["Brand awareness", "Traffic", "Conversions"]
            },
            {
              icon: <Video className="h-8 w-8 text-blue-600" />,
              title: "Stories Ads",
              description: "Full-screen vertical videos/photos.",
              bestFor: ["Engagement", "Swipe-ups", "App installs"]
            },
            {
              icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
              title: "Carousel Ads",
              description: "Scrollable multi-image/video ads.",
              bestFor: ["Product catalogs", "Multi-offer promotions"]
            },
            {
              icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
              title: "Collection Ads",
              description: "Instant storefront experience.",
              bestFor: ["E-commerce", "Mobile shopping"]
            },
            {
              icon: <MapPin className="h-8 w-8 text-blue-600" />,
              title: "Local Awareness Ads",
              description: "Target users near your business.",
              bestFor: ["Foot traffic", "Local services"]
            },
            {
              icon: <Mail className="h-8 w-8 text-blue-600" />,
              title: "Lead Ads",
              description: "Pre-filled forms for easy signups.",
              bestFor: ["Lead generation", "Newsletters"]
            }
          ].map((adType, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  {adType.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{adType.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{adType.description}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-2">BEST FOR:</h4>
                <ul className="flex flex-wrap gap-2">
                  {adType.bestFor.map((useCase, i) => (
                    <li key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}