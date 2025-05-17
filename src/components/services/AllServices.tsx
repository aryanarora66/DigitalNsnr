import { BadgeDollarSign, ThumbsUp, Search, Mail, Monitor, Smartphone, UserPlus } from 'lucide-react';

export default function AllServices() {
  const services = [
    {
      icon: <BadgeDollarSign className="h-8 w-8 text-blue-600" />,
      title: "Google Ads Management",
      description: "Maximize your ROI with expertly managed Google Search, Display, and Shopping campaigns.",
      features: [
        "Keyword research & strategy",
        "Ad copy optimization",
        "Conversion tracking",
        "Regular performance reports"
      ]
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-green-600" />,
      title: "Facebook & Instagram Ads",
      description: "Reach your ideal audience with targeted social media advertising campaigns.",
      features: [
        "Audience research & segmentation",
        "Creative strategy development",
        "A/B testing",
        "Retargeting campaigns"
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "SEO Services",
      description: "Improve your organic search visibility and drive qualified traffic to your website.",
      features: [
        "Technical SEO audit",
        "Keyword research",
        "On-page optimization",
        "Content strategy"
      ]
    },
    {
      icon: <Mail className="h-8 w-8 text-red-600" />,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with automated email sequences.",
      features: [
        "List segmentation",
        "Automation workflows",
        "A/B testing",
        "Performance analytics"
      ]
    },
    {
      icon: <Monitor className="h-8 w-8 text-orange-600" />,
      title: "Website Development",
      description: "Custom websites designed for optimal user experience and conversion rates.",
      features: [
        "Responsive design",
        "SEO-friendly structure",
        "Fast loading speeds",
        "Conversion-focused elements"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-pink-600" />,
      title: "Social Media Management",
      description: "Build your brand presence across all major social platforms.",
      features: [
        "Content calendar",
        "Community engagement",
        "Performance tracking",
        "Competitor analysis"
      ]
    },
    {
      icon: <UserPlus className="h-8 w-8 text-indigo-600" />,
      title: "Influencer Marketing",
      description: "Leverage trusted voices to amplify your brand message.",
      features: [
        "Influencer identification",
        "Campaign strategy",
        "Relationship management",
        "ROI measurement"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Digital Marketing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions to grow your business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}