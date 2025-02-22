import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SZH Holdings',
  description: 'Terms and conditions governing the use of our website and services.',
};

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-400 mb-8">
              Last updated: February 2024
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-400">
                By accessing or using the SZH Holdings website, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Use License
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>Permission is granted to temporarily access the materials on our website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Transfer the materials to another person</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Disclaimer
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>The materials on our website are provided on an &apos;as is&apos; basis. SZH Holdings makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Implied warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property</li>
                  <li>Accuracy of the materials</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Investment Disclaimer
              </h2>
              <p className="text-gray-400">
                The content on this website is for informational purposes only and should not be considered as 
                investment advice. Past performance is not indicative of future results. Investment involves risk, 
                and potential investors should seek professional advice before making any investment decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Limitations
              </h2>
              <p className="text-gray-400">
                In no event shall SZH Holdings be liable for any damages arising out of the use or inability to 
                use the materials on our website. This limitation applies even if SZH Holdings has been notified 
                of the possibility of such damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Revisions
              </h2>
              <p className="text-gray-400">
                SZH Holdings may revise these Terms of Service at any time without notice. By using this website, 
                you agree to be bound by the current version of these Terms of Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Governing Law
              </h2>
              <p className="text-gray-400">
                These terms and conditions are governed by and construed in accordance with the laws of the United 
                States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Email: legal@szhholdings.com</p>
                <p>Phone: 949.386.9749</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}