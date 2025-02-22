const Focus = () => {
  const sectors = [
    {
      name: "Real Estate",
      description: "Premium commercial and residential properties in high-growth markets",
      stats: [
        { label: "Target IRR", value: "15-20%" },
        { label: "Investment Size", value: "$5M-50M" }
      ]
    },
    {
      name: "Technology",
      description: "Innovative software, AI, and digital infrastructure companies",
      stats: [
        { label: "Growth Rate", value: ">25%" },
        { label: "Market Size", value: ">$1B" }
      ]
    },
    {
      name: "Healthcare",
      description: "Healthcare services, medical technology, and life sciences",
      stats: [
        { label: "EBITDA Margin", value: ">20%" },
        { label: "Revenue", value: "$10M+" }
      ]
    },
    {
      name: "Infrastructure",
      description: "Sustainable infrastructure and renewable energy projects",
      stats: [
        { label: "Contract Length", value: "10-30 yrs" },
        { label: "Project Size", value: "$20M+" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Investment Focus
          </h2>
          <p className="mt-4 text-gray-400">
            Strategic sectors where we see significant growth potential and value creation opportunities
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {sector.name}
                </h3>
                <p className="text-gray-400 mb-6">
                  {sector.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {sector.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                      <div className="text-xl font-semibold text-white mt-1">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-400">
            Our investment criteria are designed to identify opportunities where we can leverage our expertise 
            and network to create significant value. We focus on businesses and assets with strong fundamentals, 
            clear competitive advantages, and substantial growth potential.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform"
            >
              Discuss Investment Opportunities
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;