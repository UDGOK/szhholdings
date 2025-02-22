import Image from 'next/image';
import Link from 'next/link';

const CaseStudyGrid = () => {
  const caseStudies = [
    {
      title: "TechVision Solutions: AI-Driven Transformation",
      sector: "Technology",
      challenge: "Scaling enterprise AI solutions globally",
      outcome: {
        revenue: "+145% Growth",
        expansion: "12 New Markets",
        valuation: "4.5x Increase"
      },
      image: "/images/case-studies/tech-vision.jpg",
      tags: ["AI/ML", "Enterprise Software", "Global Expansion"]
    },
    {
      title: "MedCore Innovations: Healthcare Revolution",
      sector: "Healthcare",
      challenge: "Accelerating medical device commercialization",
      outcome: {
        approval: "FDA & CE Mark",
        patents: "30+ Secured",
        distribution: "Global Network"
      },
      image: "/images/case-studies/medcore.jpg",
      tags: ["Medical Devices", "R&D", "Regulatory"]
    },
    {
      title: "GreenEnergy Systems: Renewable Future",
      sector: "Infrastructure",
      challenge: "Scaling renewable energy infrastructure",
      outcome: {
        capacity: "500MW Deployed",
        impact: "1M+ Homes Powered",
        reduction: "2M Tons CO2"
      },
      image: "/images/case-studies/green-energy.jpg",
      tags: ["Renewable Energy", "Infrastructure", "Sustainability"]
    },
    {
      title: "Urban Living Spaces: Real Estate Innovation",
      sector: "Real Estate",
      challenge: "Modernizing residential property management",
      outcome: {
        properties: "25+ Premium Sites",
        occupancy: "95% Average Rate",
        satisfaction: "4.8/5 Rating"
      },
      image: "/images/case-studies/urban-living.jpg",
      tags: ["PropTech", "Asset Management", "Customer Experience"]
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600/80 backdrop-blur-sm rounded-full">
                      {study.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    <strong className="text-gray-300">Challenge:</strong> {study.challenge}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.outcome).map(([key, value], i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3">
                        <div className="text-sm text-gray-400 capitalize">
                          {key}
                        </div>
                        <div className="text-lg font-semibold text-white">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs text-gray-400 bg-white/5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read Full Case Study
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;