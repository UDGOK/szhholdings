const Impact = () => {
  const impactAreas = [
    {
      title: "Economic Growth",
      metrics: [
        { label: "Jobs Created", value: "10,000+" },
        { label: "Economic Value", value: "$2.5B+" },
        { label: "Tax Revenue", value: "$150M+" }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Innovation",
      metrics: [
        { label: "Patents Filed", value: "200+" },
        { label: "R&D Investment", value: "$300M" },
        { label: "New Products", value: "45+" }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Environmental Impact",
      metrics: [
        { label: "CO2 Reduction", value: "2M Tons" },
        { label: "Clean Energy", value: "500MW" },
        { label: "Water Saved", value: "1B Gal" }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Community Development",
      metrics: [
        { label: "Communities", value: "50+" },
        { label: "Investment", value: "$100M" },
        { label: "Programs", value: "25+" }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Investment Impact
          </h2>
          <p className="mt-4 text-gray-400">
            Creating lasting value beyond financial returns through sustainable and responsible investing
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative p-6 bg-gray-900 border border-white/10 rounded-lg">
                <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-blue-500">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {area.title}
                </h3>
                <div className="space-y-3">
                  {area.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">
                        {metric.label}
                      </span>
                      <span className="text-lg font-semibold text-white">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;