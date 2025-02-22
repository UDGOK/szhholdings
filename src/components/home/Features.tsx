import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const features = [
  {
    title: "IDENTIFY",
    description:
      "SZH Holdings identifies properties and areas, for commercial and residential properties that goes through our underwriting process before we present to investors",
    icon: (
      <svg
        className="w-20 h-20 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "DESIGN & BUILD",
    description:
      "SZH Holdings has an inhouse design and build team that thoroughly thinks and executes the process",
    icon: (
      <svg
        className="w-20 h-20 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "MANAGEMENT",
    description:
      "SZH Holdings manages the properties with leases, optimizing performance optimization",
    icon: (
      <svg
        className="w-20 h-20 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-blue-800/80 max-w-3xl mx-auto">
            We follow a comprehensive approach to real estate investment and management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Process connector lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200 to-blue-200/0 hidden md:block -mt-32" />
          
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full bg-white/70 backdrop-blur-xl border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                {/* Step number banner */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg">
                  Step {index + 1}
                </div>

                <div className="px-8 pb-10 pt-16">
                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon with gradient background */}
                    <div className="relative mb-8 inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-150`} />
                      <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-blue-900 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-blue-800/75 leading-relaxed group-hover:text-blue-900/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner lines */}
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-blue-200 to-transparent" />
                    <div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-r from-transparent to-blue-200" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}