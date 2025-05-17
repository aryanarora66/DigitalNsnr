import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react'; // Import React for React.FC

// Explicitly type as a React Functional Component (React.FC)
// This component takes no props, so we can use React.FC<{}> or just React.FC
const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-gray-50 text-gray-800"> {/* Default text color for the main container */}
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-6">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
          {/* The `prose` class from @tailwindcss/typography handles responsive typography 
            and generally uses dark text colors by default (e.g., text-gray-700 for paragraphs).
            `prose-blue` likely themes links and other accents with blue.
          */}
          <div className="prose prose-blue max-w-none"> {/* Ensure prose text color is dark enough */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p>
              NSNR FUTUR (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the https://www.nsnrfutur.com website (the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">2. Information Collection</h2>
            <p>We collect several types of information for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Data:</strong> Name, email, phone number when you contact us</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, referral sources</li>
              <li><strong>Cookies:</strong> Session cookies for functionality, analytics cookies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">3. How We Use Your Data</h2>
            <p>We use the collected data for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Providing and maintaining our Service</li>
              <li>Notifying you about changes to our Service</li>
              <li>Analyzing usage to improve our Service</li>
              <li>Preventing technical issues and fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">4. Data Sharing</h2>
            <p>We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Service Providers:</strong> Google Analytics, email marketing tools</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
            </ul>
            <p className="mt-4">We never sell your personal data.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">5. Data Security</h2>
            <p>
              We implement security measures including SSL encryption, regular security audits, and access controls. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access, update, or delete your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
            <p className="mt-4">Contact us at <Link href="mailto:privacy@nsnrfutur.com" className="text-blue-600 hover:underline">privacy@nsnrfutur.com</Link> to exercise these rights.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">7. Cookies Policy</h2>
            <p>We use:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> Necessary for site functionality</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand usage</li>
              <li><strong>Preference Cookies:</strong> Remember your settings</li>
            </ul>
            <p className="mt-4">You can manage cookies in your browser settings.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">8. Children&quot;s Privacy</h2>
            <p>
              Our Service does not address anyone under 18 (&quot;Children&quot;). We do not knowingly collect personally identifiable information from children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">9. Policy Changes</h2>
            <p>
              We may update this policy and will notify you via email or prominent notice on our website prior to changes taking effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-6">10. Contact Us</h2>
            <p>
              For questions about this policy: <br />
              Email: <Link href="mailto:privacy@nsnrfutur.com" className="text-blue-600 hover:underline">privacy@nsnrfutur.com</Link> <br />
              Address: [Office No.1473, 14th Floor, Gaur City Mall, Sec-04, Greater Noida West, UP-201318] {/* Remember to fill this in! */}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;