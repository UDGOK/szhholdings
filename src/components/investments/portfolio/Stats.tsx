const Stats = () => {
  const stats = [
    {
      category: "Investment Performance",
      items: [
        { label: "Average IRR", value: "22%" },
        { label: "Exit Multiple", value: "3.2x" },
        { label: "Hold Period", value: "5-7 yrs" }
      ]
    },
    {
      category: "Portfolio Metrics",
      items: [
        { label: "Revenue Growth", value: "35%" },
        { label: "EBITDA Margin", value: "28%" },
        { label: "Job Creation", value: "5000+" }
      ]
    },
    {
      category: "Investment Activity",
      items: [
        { label: "New Investments", value: "6" },
        { label: "Follow-on", value: "12" },
        { label: "Exits", value: "4" }
      ]
    },
    {
      category: "Geographic Presence",
      items: [
        { label: "Countries", value: "8" },
        { label: "Cities", value: "25+" },
        { label: "Partners", value: "40+" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Portfolio Performance
          </h2>
          <p className="mt-4 text-gray-400">
            Key metrics and statistics demonstrating our track record of value creation
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((section, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative p-8 bg-gray-900 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-6">
                  {section.category}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="text-2xl font-bold text-white mb-1">
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {item.label}
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
            Our portfolio companies have consistently outperformed industry benchmarks, 
            demonstrating the effectiveness of our value creation strategies and operational expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;