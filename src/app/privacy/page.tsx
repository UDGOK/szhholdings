import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SZH Holdings',
  description: 'Our commitment to protecting your privacy and personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-400 mb-8">
              Last updated: February 2024
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-400">
                At SZH Holdings, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or interact with our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Professional information (company, title, industry)</li>
                  <li>Investment preferences and interests</li>
                  <li>Communication history with our team</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about investments and opportunities</li>
                  <li>Send relevant updates and newsletters</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Analyze and enhance our website performance</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-400">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information with trusted partners and service providers who assist us in operating our website 
                and conducting our business.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>
              <p className="text-gray-400">
                We implement appropriate technical and organizational measures to maintain the security of your 
                personal information. However, no method of transmission over the Internet or electronic storage 
                is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Email: privacy@szhholdings.com</p>
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