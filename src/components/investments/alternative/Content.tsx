"use client";

import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { motion } from "framer-motion";

const investmentTypes = [
  {
    title: "Private Equity",
    description: "Invest in private companies with high growth potential",
    features: [
      "Direct ownership in private companies",
      "Active management involvement",
      "Long-term value creation",
      "Strategic acquisitions"
    ],
    performance: 85,
    minInvestment: "$250,000"
  },
  {
    title: "Venture Capital",
    description: "Back innovative startups and early-stage companies",
    features: [
      "Early-stage investment opportunities",
      "High growth potential",
      "Portfolio diversification",
      "Technology sector exposure"
    ],
    performance: 78,
    minInvestment: "$100,000"
  },
  {
    title: "Hedge Funds",
    description: "Access sophisticated investment strategies",
    features: [
      "Professional management",
      "Diverse strategies",
      "Risk management",
      "Market neutrality"
    ],
    performance: 72,
    minInvestment: "$500,000"
  },
  {
    title: "Private Credit",
    description: "Provide direct lending to businesses",
    features: [
      "Regular income streams",
      "Secured lending",
      "Higher yields",
      "Direct relationships"
    ],
    performance: 68,
    minInvestment: "$150,000"
  }
];

const performanceMetrics = [
  {
    category: "Risk Level",
    metrics: [
      { name: "Private Equity", value: "High" },
      { name: "Venture Capital", value: "Very High" },
      { name: "Hedge Funds", value: "Medium-High" },
      { name: "Private Credit", value: "Medium" }
    ]
  },
  {
    category: "Liquidity",
    metrics: [
      { name: "Private Equity", value: "Low" },
      { name: "Venture Capital", value: "Low" },
      { name: "Hedge Funds", value: "Medium" },
      { name: "Private Credit", value: "Medium-Low" }
    ]
  },
  {
    category: "Investment Horizon",
    metrics: [
      { name: "Private Equity", value: "7-10 years" },
      { name: "Venture Capital", value: "5-8 years" },
      { name: "Hedge Funds", value: "1-3 years" },
      { name: "Private Credit", value: "3-5 years" }
    ]
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
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Alternative Investment Options</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {investmentTypes.map((type) => (
              <Card key={type.title} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    Min: {type.minInvestment}
                  </span>
                </div>
                <Progress
                  value={type.performance}
                  className="h-2 mb-4"
                  indicatorClassName="bg-primary"
                />
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Investment Characteristics</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left font-medium text-muted-foreground">Category</th>
                  {investmentTypes.map((type) => (
                    <th key={type.title} className="py-4 px-4 text-left font-medium text-muted-foreground">
                      {type.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((metric) => (
                  <tr key={metric.category} className="border-b">
                    <td className="py-4 px-4 font-medium">{metric.category}</td>
                    {metric.metrics.map((m) => (
                      <td key={m.name} className="py-4 px-4">{m.value}</td>
                    ))}
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
            <h3 className="text-2xl font-medium text-foreground">Explore Alternative Investments</h3>
            <p className="mt-4 text-muted-foreground">
              Our team of alternative investment specialists can help you identify opportunities that align with your investment goals and risk tolerance.
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