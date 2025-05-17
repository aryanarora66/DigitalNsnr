import { Search, ClipboardList, Target, BarChart2, Settings, TrendingUp } from 'lucide-react';

export default function FacebookAdsProcess() {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">Facebook Ads Process</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A data-driven approach to scaling your campaigns profitably.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {[
              {
                icon: <Search className="h-6 w-6 text-blue-600" />,
                title: "Audience Research",
                description: [
                  "Competitor ad analysis",
                  "Interest/behavior targeting",
                  "Lookalike audience creation",
                  "Customer persona development"
                ]
              },
              {
                icon: <ClipboardList className="h-6 w-6 text-blue-600" />,
                title: "Campaign Strategy",
                description: [
                  "Objective selection",
                  "Budget allocation",
                  "Ad placement strategy",
                  "Creative direction"
                ]
              },
              {
                icon: <Target className="h-6 w-6 text-blue-600" />,
                title: "Ad Creation",
                description: [
                  "High-converting ad copy",
                  "Visual creative development",
                  "A/B test variations",
                  "Landing page alignment"
                ]
              },
              {
                icon: <Settings className="h-6 w-6 text-blue-600" />,
                title: "Technical Setup",
                description: [
                  "Pixel installation",
                  "Conversion tracking",
                  "UTM parameters",
                  "CRM integration"
                ]
              },
              {
                icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
                title: "Launch & Optimize",
                description: [
                  "Bid strategy implementation",
                  "Daily performance monitoring",
                  "Audience refinement",
                  "Creative rotation"
                ]
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                title: "Scale Winners",
                description: [
                  "Budget scaling",
                  "Campaign duplication",
                  "Dynamic creative testing",
                  "Quarterly strategy reviews"
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