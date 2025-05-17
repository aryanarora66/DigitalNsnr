import { Zap, Shield, TrendingUp, Search, Smartphone, DollarSign } from 'lucide-react';

export default function WebDevBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why <span className="text-blue-600">Custom Web Development</span> Matters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your website is your digital storefront - make it count.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-blue-600" />,
              title: "Blazing Fast Performance",
              description: "90+ PageSpeed scores with optimized code and assets. Fast sites rank higher and convert better."
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Enterprise-Grade Security",
              description: "Protection against XSS, CSRF, SQLi with proper HTTPS, CSP, and security headers."
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
              title: "SEO-Optimized Architecture",
              description: "Clean URL structures, semantic HTML, and schema markup built-in for better rankings."
            },
            {
              icon: <Search className="h-8 w-8 text-blue-600" />,
              title: "Mobile-First Responsiveness",
              description: "60% of traffic comes from mobile - we build for all screen sizes from the start."
            },
            {
              icon: <Smartphone className="h-8 w-8 text-blue-600" />,
              title: "Progressive Web Apps (PWA)",
              description: "App-like experiences with offline mode, push notifications, and home screen installation."
            },
            {
              icon: <DollarSign className="h-8 w-8 text-blue-600" />,
              title: "Higher Conversion Rates",
              description: "Optimized UX/UI flows that increase conversions by 30-200% over templates."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: benefit.description }} />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Development vs. Page Builders</h3>
              <p className="text-gray-600">
                While drag-and-drop builders work for simple sites, custom development delivers better performance, security, and scalability.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3 pb-2 border-b">
                  <span className="font-medium text-gray-900">Factor</span>
                  <span className="font-medium text-gray-900">Custom Development</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">Page Load Speed</span>
                    <span className="font-semibold text-blue-600">0.5-2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Security</span>
                    <span className="font-semibold text-blue-600">Enterprise-grade</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">SEO Friendliness</span>
                    <span className="font-semibold text-blue-600">Optimized</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Custom Features</span>
                    <span className="font-semibold text-blue-600">Unlimited</span>
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