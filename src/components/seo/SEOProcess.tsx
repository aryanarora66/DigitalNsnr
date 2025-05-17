import { Search, ClipboardList, FileText, Settings, BarChart2, TrendingUp } from 'lucide-react';

export default function SEOProcess() {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">SEO Process</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that delivers consistent rankings.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {[
              {
                icon: <Search className="h-6 w-6 text-blue-600" />,
                title: "Discovery & Audit",
                description: [
                  "Technical SEO audit",
                  "Competitor analysis",
                  "Keyword research",
                  "Content gap analysis"
                ]
              },
              {
                icon: <ClipboardList className="h-6 w-6 text-blue-600" />,
                title: "Strategy Development",
                description: [
                  "Priority fixes roadmap",
                  "Content calendar",
                  "Link-building plan",
                  "Local SEO setup"
                ]
              },
              {
                icon: <FileText className="h-6 w-6 text-blue-600" />,
                title: "On-Page Optimization",
                description: [
                  "Meta tags optimization",
                  "Content rewrites",
                  "Internal linking",
                  "Schema markup"
                ]
              },
              {
                icon: <Settings className="h-6 w-6 text-blue-600" />,
                title: "Technical Fixes",
                description: [
                  "Site speed improvements",
                  "Mobile optimization",
                  "Indexing fixes",
                  "Structured data"
                ]
              },
              {
                icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
                title: "Reporting & Refinement",
                description: [
                  "Monthly performance reports",
                  "Ranking tracking",
                  "Conversion analysis",
                  "Algorithm updates"
                ]
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                title: "Scaling Growth",
                description: [
                  "Authority building",
                  "Enterprise SEO",
                  "International expansion",
                  "AI-driven optimizations"
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