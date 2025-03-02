import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/cn';

const CurrentOfferings = () => {
  const offerings = [
    {
      title: "The Mead Development Project",
      type: "Mixed-Use Development",
      description: "A transformative mixed-use development in Mead, Oklahoma, featuring 99 residential homes and 5 commercial buildings, designed to create a vibrant community hub.",
      details: {
        residential: "99 Homes",
        commercial: "5 Buildings",
        location: "Mead, OK"
      },
      status: "Pre-Development",
      image: "/images/offerings/mead.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Offering Card */}
          <div className="grid grid-cols-1 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                  <div className="relative h-96">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600/80 backdrop-blur-sm rounded-full">
                        {offering.type}
                      </span>
                      <span className={cn(
                        "px-3 py-1 text-xs font-medium text-white backdrop-blur-sm rounded-full",
                        offering.status === "Pre-Development" ? "bg-purple-600/80" :
                        offering.status === "In Progress" ? "bg-blue-600/80" :
                        "bg-green-600/80"
                      )}>
                        {offering.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-semibold text-white mb-4">
                      {offering.title}
                    </h3>
                    <p className="text-gray-400 mb-8 text-lg">
                      {offering.description}
                    </p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {Object.entries(offering.details).map(([key, value], i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 capitalize">
                            {key}
                          </div>
                          <div className="text-xl font-semibold text-white">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform"
                    >
                      Learn More About This Opportunity
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Project Overview Video
              </h3>
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/TdT5MuF8SVM"
                  title="The Mead Development Project Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Detailed Project Information
                  </h3>
                  <p className="text-gray-400">
                    Download our comprehensive project overview document
                  </p>
                </div>
                <Link
                  href="/pdf/The-Mead-Development.pdf"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform"
                  target="_blank"
                >
                  Download PDF
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOfferings;