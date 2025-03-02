const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Investment Strategy
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
            Our strategic approach combines deep market insights, rigorous analysis, and 
            innovative thinking to create sustainable value across diverse investment opportunities.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Research-Driven",
                description: "Comprehensive market analysis and due diligence"
              },
              {
                title: "Value Creation",
                description: "Strategic growth initiatives and operational improvements"
              },
              {
                title: "Risk Management",
                description: "Disciplined approach to portfolio construction"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <div className="relative px-6 py-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;