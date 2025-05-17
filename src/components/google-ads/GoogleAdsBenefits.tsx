import { Zap, Target, Clock, BarChart2, DollarSign, Users } from 'lucide-react';

export default function GoogleAdsBenefits() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Immediate Visibility",
      description: "Unlike SEO which takes months, Google Ads gets you in front of customers immediately after campaign launch."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Precision Targeting",
      description: "Reach users actively searching for your products/services with keyword targeting, demographics, and even device types."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "24/7 Lead Generation",
      description: "Your ads work around the clock to capture high-intent traffic, even when your team is asleep."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
      title: "Measurable ROI",
      description: "Track every dollar spent against conversions with our advanced conversion tracking setup."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Cost Control",
      description: "Set your own budget and only pay when someone clicks (PPC model), with options to cap daily spending."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Remarketing",
      description: "Re-engage visitors who didn't convert with targeted ads across Google's network of sites."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Google Ads is the Most Powerful<br />Advertising Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            91% of all internet searches happen on Google. Here&lsquo;s how we help you dominate them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Ads vs. Organic SEO</h3>
              <p className="text-gray-600">
                While both are essential, Google Ads provides immediate results while you wait for SEO to gain traction. Our experts combine both for maximum impact.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3 pb-2 border-b">
                  <span className="font-medium text-gray-900">Metric</span>
                  <span className="font-medium text-gray-900">Google Ads</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">Time to First Results</span>
                    <span className="font-semibold text-blue-600">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Traffic Quality</span>
                    <span className="font-semibold text-blue-600">High Intent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Budget Control</span>
                    <span className="font-semibold text-blue-600">Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Testing Capability</span>
                    <span className="font-semibold text-blue-600">A/B Testing</span>
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