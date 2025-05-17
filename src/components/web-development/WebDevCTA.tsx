import React from 'react'; // Standard React import
import { ArrowRight, Phone, Mail, Briefcase } from 'lucide-react'; // Icons from lucide-react, added Briefcase
import Link from 'next/link'; // Next.js Link component for client-side navigation

/**
 * WebsiteDevelopmentCTA Component
 * A call-to-action section encouraging users to engage with website development services.
 * It includes prominent buttons and contact information.
 */
const WebsiteDevelopmentCTA: React.FC = () => {
  return (
    // Section container with a gradient background and padding
    <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white"> {/* Updated gradient for a more "tech" feel */}
      {/* Max width container to keep content centered and readable, with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered text content */}
        <div className="text-center">
          {/* Main heading with a highlighted part */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to <span className="text-cyan-300">Build Your Digital Future</span>?
          </h2>
          {/* Sub-heading or descriptive paragraph */}
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            From stunning designs to robust functionality, we craft websites that drive results and elevate your brand.
          </p>

          {/* Container for action buttons, flex layout that stacks on small screens and rows on larger screens */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {/* Primary Call to Action Button: "Start Your Project" */}
            <Link
              href="/contact?service=webdev" // Example: Link to contact page with a query parameter
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* Secondary Call to Action Button: "View Our Work" */}
            <Link
              href="/portfolio/websites" // Example: Link to website portfolio
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors duration-300 ease-in-out hover:shadow-lg"
            >
              <Briefcase className="mr-2 h-5 w-5" /> View Our Work
            </Link>
          </div>

          {/* Container for contact information, flex layout that stacks on small screens */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-lg">
            {/* Phone contact information */}
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2 text-cyan-300" /> {/* Icon color adjusted */}
              {/* Replace with your actual phone number */}
              <a href="tel:+918800625883" className="hover:text-cyan-300 transition-colors">
                +91-8800625883
              </a>
            </div>
            {/* Email contact information */}
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-cyan-300" /> {/* Icon color adjusted */}
              {/* Replace with your actual email address for web development inquiries */}
              <a href="mailto:contact@nsnrfutur.com" className="hover:text-cyan-300 transition-colors">
              contact@nsnrfutur.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopmentCTA;
