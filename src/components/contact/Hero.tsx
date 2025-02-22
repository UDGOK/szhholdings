import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-lg transition-all duration-300 group-hover:scale-110" />
            <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                <EnvelopeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
              <a
                href="mailto:contact@szhholdings.com"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                contact@szhholdings.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-lg transition-all duration-300 group-hover:scale-110" />
            <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
              <a
                href="tel:+19493869749"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                949.386.9749
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-lg transition-all duration-300 group-hover:scale-110" />
            <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                <ClockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Office Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM PST
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-gray-900" />
    </div>
  )
}