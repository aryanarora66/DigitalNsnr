'use client'
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-100 w-16 h-16 rounded-full mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-800">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-900">
          <div className="mb-12 p-6 bg-blue-50 rounded-lg">
            <div className="flex">
              <AlertTriangle className="h-5 w-5 text-gray-900 mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-900">
                <strong className="font-semibold">Disclaimer:</strong> These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>
          </div>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            1. Definitions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;</strong> refers to [NSNR Future].</li>
            <li><strong>&quot;Client,&quot; &quot;You,&quot; or &quot;Your&quot;</strong> refers to the individual or entity using our services.</li>
            <li><strong>&quot;Services&quot;</strong> refers to web development, digital marketing, and related services we provide.</li>
            <li><strong>&quot;Content&quot;</strong> refers to all text, images, code, and materials provided by either party.</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-12 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            2. Service Agreement
          </h2>
          <p>All services are provided subject to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Receipt of signed proposal/agreement</li>
            <li>Payment of required deposits</li>
            <li>Client providing all necessary materials and information in a timely manner</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-12 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            3. Payments & Fees
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>50% deposit required to begin work, balance due upon completion</li>
            <li>Additional revisions beyond scope may incur extra charges</li>
            <li>Late payments subject to 1.5% monthly interest</li>
            <li>All prices in USD unless otherwise specified</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-12 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            4. Intellectual Property
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client retains ownership of all provided materials</li>
            <li>We retain rights to portfolio display of completed work</li>
            <li>Final deliverables transfer to client upon full payment</li>
            <li>Open-source components remain under their respective licenses</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-12 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            5. Confidentiality
          </h2>
          <p>Both parties agree to maintain confidentiality of:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Business strategies and proprietary information</li>
            <li>Unreleased product details</li>
            <li>Financial arrangements</li>
            <li>Any information marked as confidential</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-12 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            6. Liability & Warranties
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Services provided &quot;as is&quot; without warranty</li>
            <li>Maximum liability limited to project fees paid</li>
            <li>Not responsible for third-party platform changes</li>
            <li>Client responsible for content accuracy and legality</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-12 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            7. Termination
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Either party may terminate with 30 days written notice</li>
            <li>Termination fees may apply for work completed</li>
            <li>Client responsible for payment for work performed</li>
            <li>Upon termination, all unpaid invoices become immediately due</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-12 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            8. Governing Law
          </h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of [UP/India], without regard to its conflict of law provisions.</p>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h3>
            <p className="text-gray-900">By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. We reserve the right to update these terms at any time, with changes effective upon posting to our website.</p>
          </div>
        </div>
      </div>
    </section>
  );
}