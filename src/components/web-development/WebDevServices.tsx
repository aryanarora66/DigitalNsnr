import { Code, ShoppingCart, Phone, Globe, Brush, Server } from 'lucide-react';

export default function WebDevServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">Web Development Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple websites to complex web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-8 w-8 text-blue-600" />,
              title: "Custom Website Development",
              description: "Tailored solutions built from scratch for your unique needs.",
              features: ["React/Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
              icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
              title: "E-Commerce Solutions",
              description: "High-converting online stores with seamless checkout.",
              features: ["Shopify", "WooCommerce", "Custom carts"]
            },
            {
              icon: <Phone className="h-8 w-8 text-blue-600" />,
              title: "Mobile-First PWAs",
              description: "App-like experiences that work offline.",
              features: ["Service Workers", "Push Notifications", "App manifests"]
            },
            {
              icon: <Globe className="h-8 w-8 text-blue-600" />,
              title: "Headless CMS Websites",
              description: "Content-rich sites with flexible editors.",
              features: ["Sanity.io", "Contentful", "Strapi"]
            },
            {
              icon: <Brush className="h-8 w-8 text-blue-600" />,
              title: "UI/UX Design",
              description: "Beautiful interfaces that drive conversions.",
              features: ["Figma prototypes", "User testing", "Design systems"]
            },
            {
              icon: <Server className="h-8 w-8 text-blue-600" />,
              title: "API & Backend Development",
              description: "Robust server-side logic and integrations.",
              features: ["Node.js", "Python", "REST/GraphQL"]
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
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">TECH INCLUDED:</h4>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
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