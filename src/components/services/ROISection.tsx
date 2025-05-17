import { DollarSign, TrendingUp, PieChart, RefreshCw } from 'lucide-react';

export default function ROISection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why ROI Matters in Digital Marketing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring Return on Investment is crucial for optimizing your marketing spend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Budget Optimization</h3>
            </div>
            <p className="text-gray-600">
              Tracking ROI helps you identify which channels and campaigns deliver the best results, allowing you to allocate your budget more effectively and eliminate wasteful spending.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Performance Measurement</h3>
            </div>
            <p className="text-gray-600">
              ROI provides a clear metric to evaluate campaign success beyond vanity metrics like likes or impressions, focusing on actual business impact and revenue generation.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <PieChart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Data-Driven Decisions</h3>
            </div>
            <p className="text-gray-600">
              With accurate ROI calculations, you can make informed decisions about scaling successful campaigns and adjusting underperforming ones in real-time.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <RefreshCw className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Continuous Improvement</h3>
            </div>
            <p className="text-gray-600">
              Regular ROI analysis enables continuous optimization of your marketing strategies, ensuring you&apos;re always improving and adapting to market changes.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our ROI Tracking Approach</h3>
          <p className="text-gray-600 mb-6">
            At NSNR FUTURE, we implement advanced tracking systems to measure every dollar spent against revenue generated. Our proprietary dashboard provides:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">Real-time campaign performance metrics</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">Customer acquisition cost breakdown</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">Lifetime value calculations</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">Channel-specific ROI comparisons</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}