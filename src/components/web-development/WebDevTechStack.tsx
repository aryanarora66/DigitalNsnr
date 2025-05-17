import { NextJsLogo, ReactLogo, TailwindLogo, NodeJsLogo, GraphQLLogo, ShopifyLogo } from '@/components/ui/TechLogos';

export default function WebDevTechStack() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">Technology Stack</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern tools for building fast, scalable web experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            {
              logo: <NextJsLogo className="h-12 w-auto" />,
              name: "Next.js",
              description: "React framework for server-rendered apps"
            },
            {
              logo: <ReactLogo className="h-12 w-auto" />,
              name: "React",
              description: "Component-based UI library"
            },
            {
              logo: <TailwindLogo className="h-12 w-auto" />,
              name: "Tailwind CSS",
              description: "Utility-first CSS framework"
            },
            {
              logo: <NodeJsLogo className="h-12 w-auto" />,
              name: "Node.js",
              description: "JavaScript runtime for APIs"
            },
            {
              logo: <GraphQLLogo className="h-12 w-auto" />,
              name: "GraphQL",
              description: "Modern API query language"
            },
            {
              logo: <ShopifyLogo className="h-12 w-auto" />,
              name: "Shopify",
              description: "E-commerce platform"
            }
          ].map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                {tech.logo}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}