"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import CurrentOpportunity from "./CurrentOpportunity";

const investmentTypes = [
  {
    title: "Commercial Properties",
    description: "Invest in office buildings, retail spaces, and industrial properties.",
    features: [
      "Long-term lease potential",
      "Higher income yields",
      "Professional tenants",
      "Value appreciation"
    ]
  },
  {
    title: "Residential Properties",
    description: "Multi-family units and residential development projects.",
    features: [
      "Steady rental income",
      "Strong market demand",
      "Property appreciation",
      "Portfolio diversification"
    ]
  },
  {
    title: "REITs",
    description: "Real Estate Investment Trusts for diversified property exposure.",
    features: [
      "High liquidity",
      "Regular dividends",
      "Professional management",
      "Diversified portfolio"
    ]
  }
];

const marketStats = [
  {
    label: "Average Annual Return",
    value: "8-12%",
    description: "Historical returns from our real estate portfolio"
  },
  {
    label: "Properties Under Management",
    value: "50+",
    description: "Diverse selection of premium properties"
  },
  {
    label: "Minimum Investment",
    value: "$25,000",
    description: "Start building your real estate portfolio"
  },
  {
    label: "Client Satisfaction",
    value: "95%",
    description: "Based on our annual investor survey"
  }
];

export default function Content() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured Investment Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Featured Investment Opportunity</h2>
          <CurrentOpportunity />
        </motion.div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {marketStats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 font-medium text-foreground">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </motion.div>

        {/* Investment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Investment Options</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </motion.div>

        {/* Investment Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-8">Investment Process</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Meet with our real estate experts to discuss your investment goals."
              },
              {
                step: "2",
                title: "Portfolio Selection",
                description: "Choose from our curated selection of real estate opportunities."
              },
              {
                step: "3",
                title: "Investment",
                description: "Complete the investment process with our streamlined system."
              },
              {
                step: "4",
                title: "Management",
                description: "Enjoy professional management and regular performance updates."
              }
            ].map((step) => (
              <Card key={step.step} className="p-6">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-primary/5">
            <h3 className="text-2xl font-medium text-foreground">Start Your Real Estate Investment Journey</h3>
            <p className="mt-4 text-muted-foreground">
              Join our community of successful real estate investors and build long-term wealth through property investments.
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