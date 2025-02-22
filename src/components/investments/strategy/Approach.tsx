import Image from 'next/image';

const Approach = () => {
  return (
    <section className="relative py-24 bg-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Our Investment Approach
              </h2>
              <div className="space-y-6 text-gray-400">
                <p>
                  At SZH Holdings, we employ a systematic and disciplined approach to identify, 
                  evaluate, and execute investment opportunities that align with our strategic objectives 
                  and value creation principles.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Market Analysis",
                      description: "Deep understanding of market dynamics and trends to identify opportunities"
                    },
                    {
                      title: "Due Diligence",
                      description: "Comprehensive evaluation of potential investments across multiple dimensions"
                    },
                    {
                      title: "Value Creation",
                      description: "Strategic initiatives to drive operational improvements and growth"
                    },
                    {
                      title: "Risk Management",
                      description: "Proactive monitoring and management of portfolio risks"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-3">
                        <div className="w-full h-full bg-gray-900 rounded-md flex items-center justify-center text-white font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
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

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/investments/strategy-approach.jpg"
                  alt="Investment Strategy Approach"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;