"use client";

import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Stocks & ETFs",
    description: "Access global markets with our curated selection of stocks and ETFs. Perfect for both beginners and experienced investors.",
    href: "/investments/stocks-etfs",
    badge: "Popular",
    icon: "📈"
  },
  {
    title: "Real Estate",
    description: "Invest in premium real estate opportunities with our carefully selected portfolio of properties and REITs.",
    href: "/investments/real-estate",
    badge: "High Yield",
    icon: "🏢"
  },
  {
    title: "Fixed Income",
    description: "Explore our range of bonds and fixed-income securities for stable, predictable returns.",
    href: "/investments/fixed-income",
    badge: "Stable",
    icon: "📊"
  },
  {
    title: "Alternative Investments",
    description: "Discover unique investment opportunities in private equity, venture capital, and other alternative assets.",
    href: "/investments/alternative",
    badge: "Advanced",
    icon: "💎"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function InvestmentCategories() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Investment Categories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose from our diverse range of investment opportunities tailored to meet your financial goals.
          </p>
        </div>
        
        <motion.div 
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link href={category.href} className="block h-full">
                <Card className="group h-full p-6 transition-colors hover:bg-muted/50">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{category.icon}</span>
                    <Badge variant="secondary">{category.badge}</Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}