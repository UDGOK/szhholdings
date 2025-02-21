"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const investmentTypes = [
  {
    title: "Individual Stocks",
    description: "Hand-picked stocks from leading companies across various sectors.",
    features: [
      "Direct ownership in companies",
      "Potential for high returns",
      "Voting rights in shareholder meetings",
      "Flexibility in trading"
    ]
  },
  {
    title: "Exchange-Traded Funds (ETFs)",
    description: "Diversified funds that track indexes, sectors, or themes.",
    features: [
      "Instant diversification",
      "Lower management fees",
      "Trade like stocks",
      "Transparent holdings"
    ]
  },
  {
    title: "Managed Portfolios",
    description: "Professional management of your stock and ETF investments.",
    features: [
      "Expert portfolio management",
      "Regular rebalancing",
      "Risk management",
      "Personalized strategy"
    ]
  }
];

const comparisonData = [
  {
    type: "Individual Stocks",
    risk: "High",
    minInvestment: "$500",
    management: "Self-directed",
    liquidity: "High"
  },
  {
    type: "ETFs",
    risk: "Medium",
    minInvestment: "$100",
    management: "Passive",
    liquidity: "High"
  },
  {
    type: "Managed Portfolios",
    risk: "Medium-High",
    minInvestment: "$5,000",
    management: "Professional",
    liquidity: "High"
  }
];

export default function Content() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Investment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {investmentTypes.map((type) => (
            <Card key={type.title} className="p-6">
              <h3 className="text-xl font-medium text-foreground">{type.title}</h3>
              <p className="mt-2 text-muted-foreground">{type.description}</p>
              <ul className="mt-4 space-y-2">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Investment Options Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-left font-medium text-foreground">Type</th>
                  <th className="py-4 px-4 text-left font-medium text-foreground">Risk Level</th>
                  <th className="py-4 px-4 text-left font-medium text-foreground">Min Investment</th>
                  <th className="py-4 px-4 text-left font-medium text-foreground">Management</th>
                  <th className="py-4 px-4 text-left font-medium text-foreground">Liquidity</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item) => (
                  <tr key={item.type} className="border-b border-border">
                    <td className="py-4 px-4 text-foreground">{item.type}</td>
                    <td className="py-4 px-4 text-foreground">{item.risk}</td>
                    <td className="py-4 px-4 text-foreground">{item.minInvestment}</td>
                    <td className="py-4 px-4 text-foreground">{item.management}</td>
                    <td className="py-4 px-4 text-foreground">{item.liquidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-primary/5">
            <h3 className="text-2xl font-medium text-foreground">Ready to Start Investing?</h3>
            <p className="mt-4 text-muted-foreground">
              Our investment experts are here to help you build a portfolio that matches your goals and risk tolerance.
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