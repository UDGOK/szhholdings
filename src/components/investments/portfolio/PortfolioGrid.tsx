import Image from 'next/image';
import Link from 'next/link';

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      name: "TechVision Solutions",
      sector: "Technology",
      description: "AI-powered enterprise software solutions",
      metrics: {
        growth: "+145%",
        employees: "200+"
      },
      image: "/images/portfolio/tech-vision.jpg"
    },
    {
      name: "MedCore Innovations",
      sector: "Healthcare",
      description: "Advanced medical devices and diagnostics",
      metrics: {
        growth: "+85%",
        patents: "30+"
      },
      image: "/images/portfolio/medcore.jpg"
    },
    {
      name: "GreenEnergy Systems",
      sector: "Infrastructure",
      description: "Renewable energy infrastructure projects",
      metrics: {
        capacity: "500MW",
        impact: "1M homes"
      },
      image: "/images/portfolio/green-energy.jpg"
    },
    {
      name: "Urban Living Spaces",
      sector: "Real Estate",
      description: "Premium residential and commercial properties",
      metrics: {
        properties: "25+",
        occupancy: "95%"
      },
      image: "/images/portfolio/urban-living.jpg"
    },
    {
      name: "DataSecure Networks",
      sector: "Technology",
      description: "Cybersecurity and cloud infrastructure",
      metrics: {
        clients: "500+",
        retention: "98%"
      },
      image: "/images/portfolio/data-secure.jpg"
    },
    {
      name: "HealthTech Solutions",
      sector: "Healthcare",
      description: "Digital health and telemedicine platforms",
      metrics: {
        users: "2M+",
        growth: "+120%"
      },
      image: "/images/portfolio/health-tech.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Portfolio Companies
          </h2>
          <p className="mt-4 text-gray-400">
            Our diverse portfolio of market-leading companies across key sectors
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600/80 backdrop-blur-sm rounded-full">
                      {item.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(item.metrics).map(([key, value], i) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform"
          >
            Explore Investment Opportunities
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;