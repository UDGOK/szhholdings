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
            Current Investment Opportunity
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
            Discover The Mead Development Project - A transformative mixed-use development 
            creating a vibrant community hub in Mead, Oklahoma.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                metric: "99",
                label: "Residential Homes"
              },
              {
                metric: "5",
                label: "Commercial Buildings"
              },
              {
                metric: "Mead, OK",
                label: "Prime Location"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <div className="relative px-6 py-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
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