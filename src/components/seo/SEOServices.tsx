import { Search, Code, FileText, MapPin, ShoppingCart, Monitor } from 'lucide-react';

export default function SEOServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">SEO Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive strategies tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="h-8 w-8 text-blue-600" />,
              title: "Keyword Research",
              description: "Identify high-value, low-competition keywords to target.",
              bestFor: ["Content strategy", "Blog optimization", "Ranking opportunities"]
            },
            {
              icon: <Code className="h-8 w-8 text-blue-600" />,
              title: "Technical SEO",
              description: "Fix site structure, speed, and indexing issues.",
              bestFor: ["Site migrations", "Core Web Vitals", "Crawlability"]
            },
            {
              icon: <FileText className="h-8 w-8 text-blue-600" />,
              title: "On-Page SEO",
              description: "Optimize content, meta tags, and internal linking.",
              bestFor: ["Blog posts", "Service pages", "Product pages"]
            },
            {
              icon: <MapPin className="h-8 w-8 text-blue-600" />,
              title: "Local SEO",
              description: "Rank higher in \"near me\" searches.",
              bestFor: ["Brick-and-mortar", "Service areas", "Google My Business"]
            },
            {
              icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
              title: "E-Commerce SEO",
              description: "Optimize product pages and category structures.",
              bestFor: ["Shopify", "WooCommerce", "BigCommerce"]
            },
            {
              icon: <Monitor className="h-8 w-8 text-blue-600" />,
              title: "Enterprise SEO",
              description: "Scalable strategies for large websites.",
              bestFor: ["10,000+ pages", "International SEO", "Authority sites"]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-2">BEST FOR:</h4>
                <ul className="flex flex-wrap gap-2">
                  {service.bestFor.map((useCase, i) => (
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