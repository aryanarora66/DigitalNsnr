import { Search, LayoutTemplate, Code, Eye, Rocket, RefreshCw } from 'lucide-react';

export default function WebDevProcess() {
  return (
    <section className="py-16 bg-white" id="our-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">Web Development Process</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, collaborative approach to building your digital presence.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {[
              {
                icon: <Search className="h-6 w-6 text-blue-600" />,
                title: "Discovery & Planning",
                description: [
                  "Requirement analysis",
                  "User persona development",
                  "Competitor research",
                  "Sitemap & wireframes"
                ]
              },
              {
                icon: <LayoutTemplate className="h-6 w-6 text-blue-600" />,
                title: "UI/UX Design",
                description: [
                  "Mood boards & style tiles",
                  "Figma prototypes",
                  "Mobile-first design",
                  "User testing"
                ]
              },
              {
                icon: <Code className="h-6 w-6 text-blue-600" />,
                title: "Development",
                description: [
                  "Component-based architecture",
                  "Responsive implementation",
                  "API integrations",
                  "Unit testing"
                ]
              },
              {
                icon: <Eye className="h-6 w-6 text-blue-600" />,
                title: "Quality Assurance",
                description: [
                  "Cross-browser testing",
                  "Performance optimization",
                  "Security audits",
                  "Accessibility checks"
                ]
              },
              {
                icon: <Rocket className="h-6 w-6 text-blue-600" />,
                title: "Deployment",
                description: [
                  "CI/CD pipeline setup",
                  "Hosting configuration",
                  "DNS management",
                  "SSL certification"
                ]
              },
              {
                icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
                title: "Maintenance",
                description: [
                  "Monthly updates",
                  "Security patches",
                  "Performance monitoring",
                  "Feature enhancements"
                ]
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index !== 5 ? 'mb-12 md:mb-24' : ''}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12">
                      <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-2 rounded-lg mr-4">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {step.description.map((item, i) => (
                            <li key={i} className="text-gray-600 flex items-start">
                              <svg className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:flex md:w-1/2 md:pl-12 items-center justify-center">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                        {index + 1}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex md:w-1/2 md:pr-12 items-center justify-center">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-2 rounded-lg mr-4">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {step.description.map((item, i) => (
                            <li key={i} className="text-gray-600 flex items-start">
                              <svg className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}