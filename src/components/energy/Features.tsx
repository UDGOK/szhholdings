import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Renewable Energy",
    description:
      "Investing in solar, wind, and other renewable energy sources to accelerate the transition to clean energy",
    icon: "☀️",
  },
  {
    title: "Energy Storage",
    description:
      "Supporting advanced battery technology and grid-scale storage solutions for reliable renewable energy",
    icon: "🔋",
  },
  {
    title: "Smart Grid",
    description:
      "Developing intelligent energy infrastructure for efficient distribution and management of power resources",
    icon: "⚡",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-amber-100 to-orange-100/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      <div className="container px-4 md:px-6 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Investment Focus
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            We invest in sustainable energy solutions that power the future
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-white to-amber-50/50 backdrop-blur-sm border-amber-200 hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">
                  {feature.title}
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}