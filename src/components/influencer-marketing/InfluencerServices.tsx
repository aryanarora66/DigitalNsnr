import { Search, ClipboardList, Heart, Star, Shield, BarChart2 } from 'lucide-react';

export default function InfluencerServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-purple-600">Influencer Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end management for authentic, high-ROI campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="h-8 w-8 text-purple-600" />,
              title: "Influencer Identification",
              description: "AI-driven matching with ideal creators",
              features: ["Audience analysis", "Fake follower detection", "Engancement rate scoring"]
            },
            {
              icon: <ClipboardList className="h-8 w-8 text-purple-600" />,
              title: "Campaign Management",
              description: "Full-service campaign execution",
              features: ["Content briefs", "Posting schedules", "Legal contracts"]
            },
            {
              icon: <Heart className="h-8 w-8 text-purple-600" />,
              title: "UGC Creation",
              description: "Authentic user-generated content",
              features: ["Product seeding", "Content rights", "Asset repurposing"]
            },
            {
              icon: <Star className="h-8 w-8 text-purple-600" />,
              title: "Celebrity Partnerships",
              description: "A-list talent negotiations",
              features: ["Celebrity gifting", "Brand ambassador programs", "Red carpet activations"]
            },
            {
              icon: <Shield className="h-8 w-8 text-purple-600" />,
              title: "Compliance & Fraud Prevention",
              description: "Risk-free campaigns",
              features: ["FTC compliance", "Fraud detection", "Performance audits"]
            },
            {
              icon: <BarChart2 className="h-8 w-8 text-purple-600" />,
              title: "ROI Optimization",
              description: "Performance analytics & scaling",
              features: ["Sales attribution", "A/B testing", "Influencer tiering"]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY FEATURES:</h4>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                      {feature}
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