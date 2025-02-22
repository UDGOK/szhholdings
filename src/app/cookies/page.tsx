import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | SZH Holdings',
  description: 'Information about how we use cookies and similar technologies on our website.',
};

export default function CookiesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            Cookie Policy
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-400 mb-8">
              Last updated: February 2024
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                What Are Cookies
              </h2>
              <p className="text-gray-400">
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                our website. They are widely used to make websites work more efficiently and provide useful 
                information to website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Cookies
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for targeted advertising</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-6 text-gray-400">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas of the website.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p>We use analytics cookies to understand how visitors interact with our website. This 
                  helps us improve our website&apos;s functionality and user experience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Preference Cookies</h3>
                  <p>These cookies remember your choices and preferences to provide enhanced, personalized 
                  features when you return to our site.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p>These cookies track your online activity to help advertisers deliver more relevant 
                  advertising or to limit how many times you see an advertisement.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Managing Cookies
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View cookies stored on your computer</li>
                  <li>Allow, block, or delete cookies</li>
                  <li>Configure cookie settings for different websites</li>
                  <li>Delete cookies automatically when closing your browser</li>
                </ul>
                <p className="mt-4">
                  Please note that blocking certain cookies may impact your experience on our website and 
                  limit access to some features.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-400">
                Some cookies are placed by third-party services that appear on our pages. We do not control 
                the dissemination of these cookies. You should check the third-party websites for more 
                information about these cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-400">
                We may update this Cookie Policy from time to time to reflect changes in technology, 
                legislation, or our data practices. We encourage you to periodically review this page 
                for the latest information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-400">
                If you have any questions about our Cookie Policy, please contact us at:
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