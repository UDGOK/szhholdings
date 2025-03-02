const Insights = () => {
  const insights = [
    {
      title: "Value Creation Strategy",
      description: "Our hands-on approach focuses on operational improvements, strategic repositioning, and growth initiatives to maximize value.",
      keyPoints: [
        "Operational Excellence",
        "Market Expansion",
        "Technology Integration",
        "Strategic Partnerships"
      ]
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies are integral to our investment approach.",
      keyPoints: [
        "Due Diligence",
        "Market Analysis",
        "Regulatory Compliance",
        "Portfolio Diversification"
      ]
    },
    {
      title: "Sustainable Growth",
      description: "We prioritize sustainable business practices that create long-term value for all stakeholders.",
      keyPoints: [
        "ESG Integration",
        "Innovation Focus",
        "Talent Development",
        "Community Impact"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Key Investment Insights
          </h2>
          <p className="mt-4 text-gray-400">
            Lessons and principles derived from our successful investment experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative h-full p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {insight.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {insight.description}
                </p>
                <ul className="space-y-3">
                  {insight.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-400">
            Our investment insights are continuously evolving, shaped by our experiences and 
            commitment to delivering exceptional returns while creating sustainable value.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform"
            >
              Discuss Investment Opportunities
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;