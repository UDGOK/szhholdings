import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Investment Banking",
    description:
      "Strategic advisory services and capital raising solutions for businesses across all sectors",
    icon: "🏦",
  },
  {
    title: "Asset Management",
    description:
      "Professional portfolio management and investment strategies for institutional clients",
    icon: "📈",
  },
  {
    title: "FinTech Solutions",
    description:
      "Innovative financial technology platforms revolutionizing traditional banking and payments",
    icon: "💳",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-emerald-100 to-blue-100/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      <div className="container px-4 md:px-6 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">
            Financial Services
          </h2>
          <p className="text-xl text-emerald-800 max-w-3xl mx-auto">
            Comprehensive financial solutions driving growth and innovation
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
              <Card className="p-8 h-full bg-gradient-to-br from-white to-emerald-50/50 backdrop-blur-sm border-emerald-200 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-900">
                  {feature.title}
                </h3>
                <p className="text-emerald-800 leading-relaxed">
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