"use client";

import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { motion } from "framer-motion";

const yieldRates = [
  {
    type: "Government Bonds",
    rate: 85,
    description: "3.5% - 4.5% Annual Yield",
    risk: "Very Low"
  },
  {
    type: "Corporate Bonds",
    rate: 75,
    description: "4.5% - 6.0% Annual Yield",
    risk: "Low to Medium"
  },
  {
    type: "Municipal Bonds",
    rate: 70,
    description: "3.0% - 4.0% Annual Yield",
    risk: "Low"
  },
  {
    type: "High-Yield Bonds",
    rate: 60,
    description: "6.0% - 8.0% Annual Yield",
    risk: "Medium to High"
  }
];

const bondOfferings = [
  {
    name: "US Treasury Bonds",
    term: "10 Years",
    yield: "4.2%",
    minInvestment: "$1,000",
    rating: "AAA"
  },
  {
    name: "Corporate Bond Fund",
    term: "5-7 Years",
    yield: "5.5%",
    minInvestment: "$5,000",
    rating: "A+"
  },
  {
    name: "Municipal Bond Portfolio",
    term: "5-15 Years",
    yield: "3.8%",
    minInvestment: "$10,000",
    rating: "AA"
  },
  {
    name: "High-Yield Corporate Bonds",
    term: "3-5 Years",
    yield: "7.2%",
    minInvestment: "$25,000",
    rating: "BB+"
  }
];

const features = [
  {
    title: "Regular Income",
    description: "Receive predictable interest payments on a regular schedule",
    icon: "💰"
  },
  {
    title: "Capital Preservation",
    description: "Focus on maintaining your principal investment",
    icon: "🛡️"
  },
  {
    title: "Tax Benefits",
    description: "Potential tax advantages, especially with municipal bonds",
    icon: "📊"
  }
];

export default function Content() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Yield Rates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Current Yield Rates</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {yieldRates.map((item) => (
              <Card key={item.type} className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-foreground">{item.type}</h3>
                  <span className="text-sm text-muted-foreground">{item.risk}</span>
                </div>
                <Progress
                  value={item.rate}
                  className="h-2 mb-2"
                  indicatorClassName="bg-primary"
                />
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Bond Offerings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Available Bond Offerings</h2>
          <Card className="overflow-hidden">
            <div className="w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Term</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Yield</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Min Investment</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Rating</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {bondOfferings.map((bond) => (
                    <tr key={bond.name} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">{bond.name}</td>
                      <td className="p-4 align-middle">{bond.term}</td>
                      <td className="p-4 align-middle">{bond.yield}</td>
                      <td className="p-4 align-middle">{bond.minInvestment}</td>
                      <td className="p-4 align-middle">{bond.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Key Benefits</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-primary/5">
            <h3 className="text-2xl font-medium text-foreground">Ready to Start Investing?</h3>
            <p className="mt-4 text-muted-foreground">
              Our fixed income experts can help you build a portfolio that matches your income goals and risk tolerance.
            </p>
            <button className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Schedule a Consultation
            </button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}